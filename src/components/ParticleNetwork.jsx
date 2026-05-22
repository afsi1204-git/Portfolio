import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 100;
const CONNECTION_COUNT = 3;
const PARTICLE_COLOR = "139, 92, 246"; // violet — same as reference portfolio

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.connections = [];
    this.size = 2;
    this.pulse = 0;
    this.pulseSpeed = 0.02 + Math.random() * 0.03;
  }

  update() {
    this.pulse += this.pulseSpeed;
    if (this.pulse > 1) this.pulse = 0;
  }

  draw(ctx) {
    const dotAlpha = 0.3 + 0.2 * Math.sin(this.pulse * Math.PI * 2);
    const lineAlpha = 0.1 + 0.05 * Math.sin(this.pulse * Math.PI * 2);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${dotAlpha})`;
    ctx.fill();

    this.connections.forEach((other) => {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(other.x, other.y);
      ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${lineAlpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }
}

function linkParticles(particles) {
  particles.forEach((particle) => {
    const nearest = particles
      .filter((p) => p !== particle)
      .sort(
        (a, b) =>
          Math.hypot(a.x - particle.x, a.y - particle.y) -
          Math.hypot(b.x - particle.x, b.y - particle.y)
      )
      .slice(0, CONNECTION_COUNT);
    particle.connections = nearest;
  });
}

export default function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
      linkParticles(particles);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="particle-network"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1 }}
    />
  );
}

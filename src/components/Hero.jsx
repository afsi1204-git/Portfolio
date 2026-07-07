import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaDownload } from "react-icons/fa";
import { personal } from "../data/portfolio";

const roles = [
  "Computer Science Engineer",
  "Web Developer",
  "React Enthusiast",
  "Problem Solver",
];

const stats = [
  { value: "8.29", label: "CGPA" },
  { value: "3+", label: "Projects" },
  { value: "6", label: "Expertise" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="hero section">
      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="hero__badge" variants={item}>
          <span className="pulse-dot" />
          Available for opportunities
        </motion.span>

        <motion.h1 className="hero__headline" variants={item}>
          <span className="hero__hello">Hello all ! I&apos;m</span>
          <motion.span
            className="hero__name-line"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {personal.name}
          </motion.span>
        </motion.h1>

        <motion.div className="hero__role-wrap" variants={item}>
          <motion.span
            key={roleIndex}
            className="hero__role"
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            {roles[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.p className="hero__tagline" variants={item}>
          {personal.tagline}
        </motion.p>
        <motion.p className="hero__summary" variants={item}>
          Web developer with a strong interest in frontend experiences, accessible design, and turning ideas into polished products.
        </motion.p>

        <motion.div className="hero__highlights" variants={item}>
          <div className="hero__highlight-card glass-card">
            <strong>CGPA 8.29</strong>
            <span>B.E. Computer Science</span>
          </div>
          <div className="hero__highlight-card glass-card">
            <strong>3+ Projects</strong>
            <span>Full-stack and frontend web apps</span>
          </div>
          <div className="hero__highlight-card glass-card">
            <strong>Web + ML</strong>
            <span>React, Python, Databases & UX</span>
          </div>
        </motion.div>

        <motion.div className="hero__stats" variants={item}>
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat-pill glass-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="hero__actions" variants={item}>
          <motion.a
            href="#projects"
            className="btn btn--primary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(52, 211, 153, 0.35)" }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </motion.a>
          <motion.a
            href={personal.resume}
            download
            className="btn btn--ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload /> Resume
          </motion.a>
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub /> GitHub
          </motion.a>
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div className="hero__social" variants={item}>
          {[
            { icon: FaGithub, href: personal.github, label: "GitHub" },
            { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
            { icon: FaEnvelope, href: `mailto:${personal.email}`, label: "Email" },
            { icon: FaPhone, href: `tel:${personal.phone}`, label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="hero__social-link"
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -4, color: "var(--accent)" }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
        </motion.span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}

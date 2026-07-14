import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import ParticleNetwork from "./components/ParticleNetwork";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        // 1. Render the high-end animated splash screen first
        <SplashScreen onComplete={() => setIsLoading(false)} />
      ) : (
        // 2. Render your full portfolio once loading finishes
        <div className="fade-in-content">
          <ParticleNetwork />
          <ScrollProgress />
          <Navbar />
          <main className="site-main">
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Contact />
          </main>
          <Footer />
        </div>
      )}

      {/* Scoped CSS to make the final portfolio fade in smoothly */}
      <style>{`
        .fade-in-content {
          animation: revealSite 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes revealSite {
          from { opacity: 0; transform: translateY(12px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
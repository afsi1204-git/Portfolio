import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { navLinks, personal } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const initials = personal.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#home" className="navbar__brand" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
          <span className="navbar__logo">{initials}</span>
          <span className="navbar__name">Afsheen</span>
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${active === link.id ? "navbar__link--active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  className="navbar__indicator"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <motion.a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__github"
          aria-label="GitHub"
          whileHover={{ scale: 1.1, color: "var(--accent)" }}
        >
          <FaGithub size={22} />
        </motion.a>

        <motion.a
          href="#contact"
          className="btn btn--primary navbar__cta"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
        >
          Hire Me
        </motion.a>

        <button
          className="navbar__menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                className="mobile-menu__link"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

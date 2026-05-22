import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="footer__name">{personal.name}</p>
        <p className="footer__tag">Designed & built with React + Framer Motion</p>
        <p className="footer__copy">&copy; {year} All rights reserved.</p>
      </motion.div>
      <motion.button
        className="footer__top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -4 }}
        aria-label="Back to top"
      >
        ↑ Top
      </motion.button>
    </footer>
  );
}

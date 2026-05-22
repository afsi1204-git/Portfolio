import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}

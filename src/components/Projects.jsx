import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <SectionHeading
        label="03 — Projects"
        title="Featured Work"
        subtitle="Real applications built with purpose"
      />

      <div className="projects__grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -12 }}
          >
            <div className={`project-card__gradient ${project.gradient}`} />
            <span className="project-card__icon">{project.icon}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {project.link ? (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                whileHover={{ x: 4 }}
              >
                Live Demo <FaExternalLinkAlt />
              </motion.a>
            ) : (
              <span className="project-card__link project-card__link--muted">
                <FaCode /> Academic Project
              </span>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

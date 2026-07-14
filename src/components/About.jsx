import { motion } from "framer-motion";
import {
  FaGraduationCap,
} from "react-icons/fa";
import {
  personal,
  education,
} from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const highlights = [
  { label: "Location", value: personal.location },
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { label: "LinkedIn", value: "afsheen1204", href: personal.linkedin },
  { label: "GitHub", value: "afsi1204-git", href: personal.github },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <SectionHeading
        label="01 — About"
        title="Who I Am"
        subtitle="Passionate about code, design, and learning"
      />

      <div className="about__grid">
        <motion.div
          className="glass-card about__text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>{personal.summary}</p>
          <p className="about__extra">
            I&apos;m pursuing my B.E. in Computer Science at Kongu Engineering College with a strong
            foundation in web development, databases, and machine learning. My work focuses on building
            responsive interfaces, collaborative development habits, and impactful digital solutions.
          </p>

          <div className="about__resume-grid">
            <div className="about__resume-card glass-card">
              <h4>Academic</h4>
              <p>CGPA 8.29 with strong fundamentals in programming, algorithms, and systems.</p>
            </div>
            <div className="about__resume-card glass-card">
              <h4>Skills</h4>
              <ul>
                <li>React & JavaScript</li>
                <li>HTML, CSS & UI design</li>
                <li>Python, SQL & MongoDB</li>
              </ul>
            </div>
            <div className="about__resume-card glass-card">
              <h4>Interests</h4>
              <ul>
                <li>Human-computer interaction</li>
                <li>Machine learning</li>
                <li>Clean, accessible products</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about__highlights"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              className="glass-card about__highlight"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <span className="about__highlight-label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education */}
      <div className="about__block">
        <h3 className="about__block-title">Education</h3>
        <motion.div
          className="education__card glass-card about__education-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="education__icon"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaGraduationCap />
          </motion.div>
          <div className="education__content">
            <h4>{education.degree}</h4>
            <p className="education__institution">{education.institution}</p>
            <p className="education__location">{education.location}</p>
            <div className="education__meta">
              <span className="education__badge">Expected {education.expected}</span>
              <span className="education__cgpa">
                CGPA <strong>{education.cgpa}</strong> ({education.semester})
              </span>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}

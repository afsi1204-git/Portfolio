import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaPalette,
  FaDatabase,
  FaBrain,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import {
  personal,
  skills,
  education,
  coursesAndCerts,
  expertise,
} from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const highlights = [
  { label: "Location", value: personal.location },
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { label: "LinkedIn", value: "afsheen1204", href: personal.linkedin },
  { label: "GitHub", value: "afsi1204-git", href: personal.github },
];

const expertiseIcons = {
  web: FaLaptopCode,
  design: FaPalette,
  code: FaCode,
  database: FaDatabase,
  ml: FaBrain,
  git: FaGithub,
};

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

function ExpertiseCard({ item, index }) {
  const Icon = expertiseIcons[item.icon] || FaCode;

  return (
    <motion.article
      className="expertise-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(52, 211, 153, 0.12)" }}
    >
      <div className={`expertise-card__icon expertise-card__icon--${item.icon}`}>
        <span className="expertise-card__icon-inner">
          <Icon />
        </span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.article>
  );
}

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

      {/* Skills + courses (former certifications) */}
      <div className="about__block">
        <h3 className="about__block-title">Skills & Courses</h3>
        <div className="skills__grid about__skills-grid">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card skills__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <h4 className="skills__category">{group.category}</h4>
              {group.items.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="about__courses"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about__courses-label">Courses & certifications</p>
          <div className="about__courses-tags">
            {coursesAndCerts.map((course) => (
              <span key={course} className="about__course-tag">
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Expertise */}
      <div id="expertise" className="about__block about__expertise-section">
        <SectionHeading
          label="02 — Expertise"
          title="My Expertise"
          subtitle="Areas I focus on and continue to grow in"
        />
        <div className="expertise__grid">
          {expertise.map((item, i) => (
            <ExpertiseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

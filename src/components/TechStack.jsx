import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaGit,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCogs,
  FaServer,
} from "react-icons/fa";
import {
  SiGithubactions,
  SiJenkins,
  SiMongodb,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const techStack = [
  { name: "Java", icon: FaJava, color: "#FF7800" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Git", icon: FaGit, color: "#F1502F" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "HTML5", icon: FaHtml5, color: "#E34C26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: FaServer, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
  { name: "MySQL", icon: FaDatabase, color: "#00758F" }
];

export default function TechStack() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="tech-stack" className="section tech-stack">
      <SectionHeading
        label="04 — Tech Stack"
        title="Tech Stack"
        subtitle="Technologies I Work With"
      />

      <motion.div
        className="tech-stack__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={container}
      >
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="tech-stack__item"
              variants={item}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="tech-stack__icon-wrapper">
                <Icon className="tech-stack__icon" style={{ color: tech.color }} />
              </div>
              <span className="tech-stack__name">{tech.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export const personal = {
  name: "Afsheen Fathima Akbar Ali",
  title: "Computer Science Engineer",
  tagline: "Crafting thoughtful web experiences with React, clean UI, and a problem-solving mindset.",
  summary:
    "Computer Science Engineering student with a strong foundation in web development, databases, and machine learning. Passionate about building polished user experiences and turning ideas into functional digital products.",
  location: "Erode, India 638001",
  email: "afsi1204@gmail.com",
  phone: "+91-9363212990",
  linkedin: "https://www.linkedin.com/in/afsheen1204",
  github: "https://github.com/afsi1204-git",
  resume: "/resume.pdf",
};

export const skills = [
  {
    category: "Web Development",
    items: [
      { name: "JavaScript", level: 85 },
      { name: "HTML5 & CSS", level: 90 },
      { name: "React Hooks", level: 80 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    category: "Programming & Tools",
    items: [
      { name: "Java", level: 82 },
      { name: "Git", level: 78 },
      { name: "Python", level: 75 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", level: 76 },
      { name: "MongoDB", level: 72 },
      { name: "SQLite", level: 80 },
    ],
  },
];

/** Former certifications — shown as skills & courses on About */
export const coursesAndCerts = [
  "Human Computer Interaction",
  "Machine Learning using Python",
  "ODOO (Low Code Environment)",
  "Cloud Computing — Nxtgen Instruments",
  "Web Development — Browzone Infotech",
];

export const expertise = [
  {
    title: "Web Development",
    description:
      "Building responsive web applications with JavaScript, HTML5, CSS, and React — from medicine stock systems to interactive OS simulators.",
    icon: "web",
  },
  {
    title: "UI/UX & Design",
    description:
      "Creating user-friendly, accessible interfaces with responsive design principles and Human Computer Interaction fundamentals.",
    icon: "design",
  },
  {
    title: "Programming",
    description:
      "Proficient in Java and Python with strong foundations in data structures, algorithms, and clean object-oriented code.",
    icon: "code",
  },
  {
    title: "Databases",
    description:
      "Designing and managing data with SQL Server, MongoDB, and SQLite for reliable storage and efficient queries.",
    icon: "database",
  },
  {
    title: "Machine Learning",
    description:
      "Analyzing data and building models in Python — from climate trend forecasting to applied ML coursework.",
    icon: "ml",
  },
  {
    title: "Version Control",
    description:
      "Experience with Git for collaborative development, branching workflows, and organized project management.",
    icon: "git",
  },
];

export const education = {
  degree: "Bachelor of Computer Science Engineering",
  institution: "Kongu Engineering College",
  location: "Perundurai, Erode",
  expected: "2028",
  cgpa: "8.29",
  semester: "3rd semester",
};

export const projects = [
  {
    title: "PharmaPulse",
    description:
      "Web-based medicine stock management system with inventory tracking, built for efficient pharmacy operations.",
    tech: ["HTML", "CSS", "JavaScript", "SQLite"],
    link: "https://medicine-stock-management-qsmy.onrender.com",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    icon: "💊",
  },
  {
    title: "Page Replacement Simulator",
    description:
      "Interactive OS page replacement simulator visualizing FIFO, LRU, and Optimal frame replacement algorithms.",
    tech: ["React", "JavaScript"],
    link: "https://page-replacement-algorithm.onrender.com",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    icon: "⚡",
  },
  {
    title: "Acdemix",
    description:
      "Academic project focused on a collaborative learning platform with course content, assignment workflow, and progress tracking designed to improve student engagement and academic organization.",
    tech: ["React", "JavaScript", "UI/UX", "Academic Project"],
    link: "https://academi-99f47de7b-afsi1204-3608s-projects.vercel.app/",
    gradient: "from-amber-500/20 to-orange-500/20",
    icon: "🎓",
  },
  {
    title: "Climate Trends Model",
    description:
      "Python model analyzing historical global temperatures and forecasting future climate trends with data insights.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    link: null,
    gradient: "from-amber-500/20 to-orange-500/20",
    icon: "🌍",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

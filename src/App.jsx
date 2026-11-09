
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  BriefcaseBusiness,
  Code2,
  Server,
  Database,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  CheckCircle2,
  GraduationCap,
  Globe
} from "lucide-react";

// ==========================================
// PROFILE INFORMATION
// ==========================================

const profile = {
  name: "Nayikanti Saritha",
  location: "Hyderabad, India",
  email: "sarithanayakanti21@gmail.com",
  github: "https://github.com/saritha922",
  linkedin: "https://www.linkedin.com/in/nayikanti-saritha-b04807349"
};

// ==========================================
// ANIMATED JOB TITLES
// ==========================================

const roles = [
  "Python Full Stack Developer",
  "Python Developer",
  "Backend Developer",
  "Web Developer",
  "Software Developer"
];

// ==========================================
// TECHNICAL SKILLS
// ==========================================

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    number: "02",
    title: "Backend",
    icon: Server,
    skills: [
      "Core Python",
      "OOP",
      "Data Structures",
      "Flask",
      "Django",
      "RESTful APIs"
    ]
  },
  {
    number: "03",
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQL", "SQLite"]
  },
  {
    number: "04",
    title: "Tools & AI",
    icon: Sparkles,
    skills: [
      "Git & GitHub",
      "VS Code",
      "Problem Solving",
      "API Integration",
      "ChatGPT",
      "Gemini API"
    ]
  }
];

// ==========================================
// PROJECTS
// ==========================================

const projects = [
  {
    number: "01",
    type: "FULL STACK",
    category: "Full Stack",
    title: "AI Voice Tutor",

    description:
      "An interactive voice assistant that captures speech, processes questions with AI, and delivers intelligent spoken responses with conversation history.",

    features: [
      "Voice interaction",
      "AI question answering",
      "Conversation history",
      "Responsive interface"
    ],

    stack: [
      "Python",
      "Flask",
      "Gemini API",
      "Web Speech API"
    ],

    status: "COMPLETED",

    link: "https://ai-voice-assistant-wdx8.onrender.com",

    github: "PASTE_AI_VOICE_TUTOR_GITHUB_URL"
  },

  {
    number: "02",
    type: "FULL STACK",
    category: "Full Stack",
    title: "AI Interview Preparation",

    description:
      "An AI-powered practice platform for technical and behavioral interview sessions, built with a modern frontend and structured database layer.",

    features: [
      "Interactive sessions",
      "AI-generated questions",
      "Technical practice",
      "Behavioral practice"
    ],

    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Prisma",
      "SQL",
      "AI APIs"
    ],

    status: "COMPLETED",

    link: "#",

    github: "PASTE_AI_INTERVIEW_GITHUB_URL"
  },

  {
    number: "03",
    type: "DESKTOP",
    category: "Desktop",
    title: "BMI Calculator",

    description:
      "A desktop application that calculates BMI, validates inputs, stores user history, and visualizes health trends over time.",

    features: [
      "Input validation",
      "BMI categorization",
      "History storage",
      "Trend visualization"
    ],

    stack: [
      "Python",
      "SQLite",
      "Tkinter",
      "Matplotlib"
    ],

    status: "COMPLETED",

    link: "#",

    github: "PASTE_BMI_CALCULATOR_GITHUB_URL"
  },

  {
    number: "04",
    type: "WEB & API",
    category: "Web & API",
    title: "Weather Application",

    description:
      "A weather application that retrieves live weather information from an external API and presents clear, location-based conditions.",

    features: [
      "Live weather data",
      "API integration",
      "City search",
      "Responsive UI"
    ],

    stack: [
      "Python",
      "Flask",
      "OpenWeather API",
      "HTML",
      "CSS",
      "JavaScript"
    ],

    status: "COMPLETED",

    link: "https://weather-app-kaby.onrender.com",

    github: "PASTE_WEATHER_APP_GITHUB_URL"
  },

  {
    number: "05",
    type: "WEB & API",
    category: "Web & API",
    title: "Password Generator",

    description:
      "A password generation tool that creates strong randomized passwords based on selected character options.",

    features: [
      "Custom password length",
      "Character options",
      "Random generation",
      "Copy to clipboard"
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    status: "COMPLETED",

    link: "#",

    github: "PASTE_PASSWORD_GENERATOR_GITHUB_URL"
  },

  {
    number: "06",
    type: "WEB DEVELOPMENT",
    category: "Web & API",
    title: "Snake Game",

    description:
      "An interactive browser-based Snake Game with smooth movement, food collection, collision detection, score tracking, and persistent high scores.",

    features: [
      "Keyboard controls",
      "Mobile touch controls",
      "Real-time snake movement",
      "Wall and self-collision detection",
      "Score and high-score tracking"
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation",
      "Local Storage",
      "GitHub Pages"
    ],

    status: "COMPLETED",

    link: "https://saritha922.github.io/Snake-Game",

    github: "PASTE_SNAKE_GAME_GITHUB_URL"
  }
];

// ==========================================
// EDUCATION
// ==========================================

const education = [
  {
    title: "Bachelor of Technology — Computer Science & Engineering",
    place: "Your College Name",
    date: "Completed · 2026",
    detail: "B.Tech in CSE"
  },
  {
    title: "Python Full Stack Development",
    place: "10000 Coders, Hyderabad",
    date: "2026",
    detail: "Python · SQL · HTML · CSS · JavaScript"
  },
  {
    title: "Technical Certifications",
    place: "HackerRank & Online Learning",
    date: "Ongoing",
    detail: "SQL and programming practice"
  }
];

// ==========================================
// SECTION LABEL COMPONENT
// ==========================================

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

// ==========================================
// MAIN APP
// ==========================================

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Automatically change job title

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Project filters

  const filters = [
    "All",
    "Full Stack",
    "Web & API",
    "Desktop"
  ];

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  // Navigation links

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"]
  ];

  // Email functionality

  const emailSubject = encodeURIComponent(
    "Job Opportunity - Python Full Stack Developer"
  );

  const emailBody = encodeURIComponent(
    "Hello Saritha,\n\nI would like to connect with you regarding a job opportunity.\n\nRegards,"
  );

  const emailLink =
    `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;

  // ==========================================
  // RETURN UI
  // ==========================================

  return (
    <div className="site-shell">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}

      <header className="topbar">

        <a
          className="brand"
          href="#home"
          aria-label="Nayikanti Saritha home"
        >
          <span className="brand-initials">N S</span>
          <span className="brand-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="menu-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >

            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}

          </motion.nav>
        )}
      </AnimatePresence>

      <main>

        {/* ======================================
            HERO SECTION
        ====================================== */}

        <section className="hero section-wrap" id="home">

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="availability">
              <i />
              Available for full-time opportunities
            </div>

            <p className="hello">Hello, I'm</p>

            <h1>
              Nayikanti
              <br />
              <span>Saritha.</span>
            </h1>

            <div className="role-line">

              <span>I'm a </span>

              <AnimatePresence mode="wait">

                <motion.strong
                  key={roleIndex}
                  className="animated-role"
                  initial={{
                    opacity: 0,
                    y: 18,
                    filter: "blur(7px)"
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: "blur(7px)"
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {roles[roleIndex]}
                </motion.strong>

              </AnimatePresence>

              <b className="cursor">|</b>

            </div>

            <p className="hero-description">
              Aspiring Python Full Stack Engineer dedicated to developing
              secure, high-performance web applications and scalable
              server-side solutions.
            </p>

            <div className="hero-actions">

              <a className="button button-primary" href="#projects">
                View my work <ArrowDown size={20} />
              </a>

              <a className="button button-ghost" href="#contact">
                Contact me <ArrowUpRight size={20} />
              </a>

            </div>

          </motion.div>

          {/* HERO VISUAL */}

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="monogram">
              <span>N</span>
              <span>S</span>
            </div>

            <div className="hero-info">

              <div>
                <MapPin />
                <span>
                  Based in
                  <strong>{profile.location}</strong>
                </span>
              </div>

              <div>
                <BriefcaseBusiness />
                <span>
                  Experience
                  <strong>Fresher · Open to work</strong>
                </span>
              </div>

            </div>

          </motion.div>

        </section>

        {/* ======================================
            ABOUT SECTION
        ====================================== */}

        <section className="about section-wrap section-space" id="about">

          <SectionLabel>ABOUT ME</SectionLabel>

          <h2>
            Building ideas into reliable digital
            <br className="desktop-break" />
            experiences.
          </h2>

          <div className="about-copy">

            <p>
              I'm a passionate <strong>Python Full Stack Developer</strong>
              {" "}with expertise in Python and modern web technologies.
              I specialize in building scalable applications and robust
              backend systems.
            </p>

            <p>
              My focus areas include developing applications using Python,
              object-oriented programming, data structures, and problem
              solving—alongside backend systems built with Django and Flask.
              I work with relational databases including MySQL, PostgreSQL,
              Oracle, and SQLite, bringing frontend and backend pieces
              together into cohesive applications.
            </p>

          </div>

          <div className="stats-grid">

            <div>
              <b>01</b>
              <small>PRIMARY DOMAIN</small>
              <strong>Python Full Stack</strong>
            </div>

            <div>
              <b>02</b>
              <small>CURRENT STATUS</small>
              <strong>Immediately available</strong>
            </div>

            <div>
              <b>03</b>
              <small>WORK PREFERENCE</small>
              <strong>Ready to relocate</strong>
            </div>

          </div>

        </section>

        {/* ======================================
            SKILLS SECTION
        ====================================== */}

        <section className="skills section-wrap section-space" id="skills">

          <SectionLabel>TECHNICAL TOOLKIT</SectionLabel>

          <h2>Skills that power my work.</h2>

          <p className="section-intro">
            A focused set of technologies for creating complete,
            data-driven applications.
          </p>

          <div className="skill-grid">

            {skillGroups.map((group) => {

              const Icon = group.icon;

              return (
                <motion.article
                  className="skill-card"
                  key={group.number}
                  whileHover={{ y: -5 }}
                >

                  <div className="card-top">
                    <span>{group.number}</span>
                    <Icon />
                  </div>

                  <h3>{group.title}</h3>

                  <div className="chips">

                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}

                  </div>

                </motion.article>
              );
            })}

          </div>

        </section>

        {/* ======================================
            PROJECTS SECTION
        ====================================== */}

        <section className="projects section-wrap section-space" id="projects">

          <SectionLabel>SELECTED PROJECTS</SectionLabel>

          <h2>Things I've built.</h2>

          <p className="section-intro">
            Hands-on projects spanning AI, APIs, full-stack web development,
            and desktop software.
          </p>

          {/* PROJECT FILTERS */}

          <div className="filters" role="group" aria-label="Filter projects">

            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter active" : "filter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}

          </div>

          {/* PROJECT CARDS */}

          <div className="project-list">

            <AnimatePresence mode="popLayout">

              {visibleProjects.map((project) => (

                <motion.article
                  className="project-row"
                  key={project.number}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                >

                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-content">

                    <div className="project-meta">

                      <span>{project.type}</span>

                      <span className="completed">
                        <CheckCircle2 size={15} />
                        {project.status}
                      </span>

                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    {/* PROJECT FEATURES */}

                    <div className="feature-grid">

                      {project.features.map((feature) => (
                        <span key={feature}>
                          + &nbsp;{feature}
                        </span>
                      ))}

                    </div>

                    {/* TECHNOLOGY STACK */}

                    <div className="chips project-chips">

                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}

                    </div>

                    {/* LIVE DEMO AND GITHUB BUTTONS */}

                    <div className="project-actions">

                      {project.link !== "#" && (
                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe size={17} />
                          Live Demo
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {project.github &&
                        !project.github.startsWith("PASTE_") && (
                          <a
                            className="project-link github-link"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github size={17} />
                            GitHub Repository
                            <ArrowUpRight size={16} />
                          </a>
                        )}

                    </div>

                  </div>

                </motion.article>

              ))}

            </AnimatePresence>

          </div>

        </section>

        {/* ======================================
            EDUCATION SECTION
        ====================================== */}

        <section
          className="education section-wrap section-space"
          id="education"
        >

          <SectionLabel>EDUCATION & CREDENTIALS</SectionLabel>

          <h2>Learning with purpose.</h2>

          <div className="education-list">

            {education.map((item, index) => (

              <article className="education-row" key={item.title}>

                <span className="edu-number">
                  0{index + 1}
                </span>

                <GraduationCap className="edu-icon" />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <small>{item.detail}</small>
                </div>

                <time>{item.date}</time>

              </article>

            ))}

          </div>

        </section>

        {/* ======================================
            CONTACT SECTION
        ====================================== */}

        <section className="contact section-wrap section-space" id="contact">

          <SectionLabel>LET'S CONNECT</SectionLabel>

          <h2>
            Have an opportunity
            <br />
            in mind? <span>Let's talk.</span>
          </h2>

          <p className="contact-copy">
            Immediately available for full-time roles, ready to relocate
            and work in shifts. Let's build secure, scalable, and
            high-performance applications together.
          </p>

          <div className="contact-actions">

            <a className="email-link" href={emailLink}>
              <Mail />
              <span>Send me an Email</span>
              <ArrowUpRight />
            </a>

          </div>

          <p className="contact-email-address">
            {profile.email}
          </p>

          <div className="social-links">

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a href="#projects" aria-label="Projects">
              <Code2 />
            </a>

          </div>

        </section>

      </main>

      {/* ======================================
          FOOTER
      ====================================== */}

      <footer className="footer section-wrap">

        <a className="brand footer-brand" href="#home">
          <span className="brand-initials">N S</span>
          <span className="brand-dot">.</span>
        </a>

        <p>
          Designed & built with purpose by {profile.name}.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;

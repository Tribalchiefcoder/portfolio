import { motion } from "motion/react";
import { Code, Monitor, Server, Database, Terminal, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      {
        name: "JavaScript",
        icon: "devicon-javascript-plain colored",
      },
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Vite", symbol: "⚡" },
      { name: "Responsive Design", symbol: "UI" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "REST APIs", symbol: "API" },
      { name: "JWT", symbol: "JWT" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "SQL", symbol: "SQL" },
      { name: "DBMS", symbol: "DB" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      {
        name: "VS Code",
        icon: "devicon-vscode-plain colored",
      },
      { name: "Postman", symbol: "API" },
      { name: "Linux", icon: "devicon-linux-plain colored" },
    ],
  },
  {
    title: "Deployment & AI Integration",
    icon: Globe,
    skills: [
      { name: "Vercel", symbol: "▲" },
      { name: "Render", symbol: "R" },
      { name: "Gemini API", symbol: "✦" },
      { name: "Chart.js", symbol: "CH" },
      { name: "MongoDB Atlas", icon: "devicon-mongodb-plain colored" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="wrap">
        {/* Section heading */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">My Technical Arsenal</div>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <p className="section-sub">
            Technologies, programming languages and tools I use to bring ideas
            to life.
          </p>
        </motion.div>

        {/* Skill categories */}

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                className="skill-category"
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 2) * 0.12,
                }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <h3>{category.title}</h3>
                </div>

                <div className="skill-items">
                  {category.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      {skill.icon ? (
                        <i className={skill.icon} aria-hidden="true"></i>
                      ) : (
                        <span className="skill-symbol" aria-hidden="true">
                          {skill.symbol}
                        </span>
                      )}

                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Additional fundamentals */}

        <motion.div
          className="skills-fundamentals"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="fundamentals-heading">
            <Code size={20} />
            <h3>Computer Science Fundamentals</h3>
          </div>

          <div className="fundamentals-items">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Database Management Systems",
              "Computer Networks",
              "Problem Solving",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

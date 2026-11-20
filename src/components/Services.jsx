import { motion } from "motion/react";
import {
  Layers,
  Monitor,
  Server,
  Database,
  Brain,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications using the MERN stack, integrating responsive interfaces with backend services and databases.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Creating modern, responsive and interactive user interfaces with reusable components and a focus on user experience.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing RESTful APIs, authentication systems, server-side business logic and application integrations.",
    technologies: ["Node.js", "Express", "Flask", "JWT"],
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Working with relational and NoSQL databases, designing data models, implementing CRUD operations and writing queries.",
    technologies: ["MongoDB", "MySQL", "SQL", "DBMS"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Exploring AI-powered applications, data analysis and intelligent features through practical projects and academic learning.",
    technologies: ["Python", "Gemini API", "AI", "Data Analysis"],
  },
  {
    icon: Code2,
    title: "Programming & Problem Solving",
    description:
      "Strengthening programming fundamentals, data structures, algorithms and logical thinking to solve computational problems.",
    technologies: ["Java", "Python", "DSA", "OOP"],
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">What I Do</div>

          <h2 className="section-title">
            Areas of <span>Focus</span>
          </h2>

          <p className="section-sub">
            Exploring technology through development, innovation and continuous
            learning.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.12,
                }}
              >
                <div className="service-top">
                  <div className="service-icon">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    className="service-arrow"
                    size={22}
                    aria-hidden="true"
                  />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-technologies">
                  {service.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

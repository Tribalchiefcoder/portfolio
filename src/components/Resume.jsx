import { motion } from "motion/react";
import { GraduationCap, Briefcase, Download, CalendarDays } from "lucide-react";

const education = [
  {
    period: "Graduated in 2026",
    title: "Bachelor of Engineering",
    organization: "Finolex Academy of Management and Technology, Ratnagiri",
    description:
      "Electronics and Telecommunication Engineering with Honours in Artificial Intelligence and Machine Learning.",
    points: [
      "Developed a Smart Factory IoT Dashboard with Equipment Control.",
      "Research paper accepted based on the final-year project.",
    ],
  },
];

const experience = [
  {
    period: "November 2026",
    title: "Full-Stack Development Intern",
    organization: "CodeC Technologies",
    description:
      "Completed a project-based full-stack development internship focused on building and deploying MERN applications.",
    points: [
      "Developed TaskFlow, a task management application with JWT authentication, CRUD operations and analytics.",
      "Built ShopSphere, an e-commerce application with product management, shopping cart and order tracking.",
      "Implemented REST APIs, database integration and deployed applications using Vercel and Render.",
    ],
  },
];

function TimelineCard({ item, index }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
    >
      <div className="timeline-dot"></div>

      <div className="timeline-card">
        <div className="timeline-period">
          <CalendarDays size={14} />
          {item.period}
        </div>

        <h4>{item.title}</h4>

        <div className="timeline-organization">{item.organization}</div>

        <p>{item.description}</p>

        {item.points && (
          <ul className="timeline-points">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">My Journey</div>

          <h2 className="section-title">
            My <span>Resume</span>
          </h2>

          <p className="section-sub">
            A look at my academic background and professional experience.
          </p>
        </motion.div>

        <div className="resume-grid">
          {/* Education */}

          <div className="resume-column">
            <div className="resume-column-heading">
              <div className="resume-heading-icon">
                <GraduationCap size={25} />
              </div>

              <h3>Education</h3>
            </div>

            <div className="timeline">
              {education.map((item, index) => (
                <TimelineCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Experience */}

          <div className="resume-column">
            <div className="resume-column-heading">
              <div className="resume-heading-icon">
                <Briefcase size={24} />
              </div>

              <h3>Experience</h3>
            </div>

            <div className="timeline">
              {experience.map((item, index) => (
                <TimelineCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="resume-download"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="btn btn-primary"
            download="Sumedh_Varadkar_Resume.pdf"
          >
            Download Resume
            <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;

import { useState } from "react";
import { motion } from "motion/react";
import {
  Download,
  GraduationCap,
  Briefcase,
  MapPin,
  Code2,
} from "lucide-react";

function About() {
  const [imageError, setImageError] = useState(false);

  const details = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "EXTC Engineering (AI & ML Honours)",
    },
    {
      icon: Briefcase,
      label: "Experience",
      value: "Full-Stack Development Intern",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maharashtra, India",
    },
    {
      icon: Code2,
      label: "Specialization",
      value: "Full-Stack Development",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">Get to know me</div>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="section-sub">
            My background, experience and passion for technology.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* About photograph */}

          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-photo">
              <img
                src={imageError ? "/images/profile.png" : "/images/about.png"}
                alt="Sumedh Varadkar"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            </div>

            <div className="about-photo-label">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </motion.div>

          {/* About description */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3>
              Building solutions through <span>technology.</span>
            </h3>

            <p>
              I am an Electronics and Telecommunication Engineering graduate
              with Honours in Artificial Intelligence and Machine Learning from
              Finolex Academy of Management and Technology, Ratnagiri.
            </p>

            <p>
              I completed a Full-Stack Development Internship at CodeC
              Technologies, where I developed TaskFlow, a task management
              platform, and ShopSphere, a full-stack e-commerce application.
            </p>

            <p>
              My technical interests include full-stack web development,
              database management, REST API development, Java, data structures
              and algorithms. I enjoy transforming ideas into practical,
              user-friendly applications.
            </p>

            <div className="about-details">
              {details.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="about-detail" key={item.label}>
                    <div className="about-detail-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="/resume.pdf" className="btn btn-primary" download>
              Download CV
              <Download size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

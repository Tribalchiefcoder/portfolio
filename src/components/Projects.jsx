import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Image as ImageIcon,
  FolderCode,
} from "lucide-react";

import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      className={`project-card ${index % 2 !== 0 ? "project-reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Project screenshot */}

      <div className="project-visual">
        <div className="project-window">
          <div className="project-window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="window-title">{project.title}</span>

            <FolderCode size={15} />
          </div>

          <div className="project-image">
            {!imageError ? (
              <img
                src={project.image}
                alt={`${project.title} application screenshot`}
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="project-image-placeholder">
                <ImageIcon size={55} strokeWidth={1.2} />
                <h4>{project.title}</h4>
                <span>Project Preview</span>
              </div>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-overlay"
                aria-label={`Open ${project.title} live demo`}
              >
                <span>
                  Explore Project
                  <ArrowUpRight size={20} />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project information */}

      <div className="project-content">
        <div className="project-category">
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="project-category-line"></span>

          <span>{project.category}</span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <ul className="project-features">
          {project.features.map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.live && (
            <a
              href={project.live}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}

          <a
            href={project.github}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original"></i>
            Source Code
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">Selected Work</div>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-sub">
            A collection of applications that reflect my technical skills,
            creativity and approach to solving real-world problems.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Interested in exploring more of my work?</p>

          <a
            href="https://github.com/Tribalchiefcoder"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original"></i>
            View All Repositories
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

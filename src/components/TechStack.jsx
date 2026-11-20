import { useState } from "react";
import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";

const technologies = [
  {
    name: "Java",
    icon: "devicon-java-plain colored",
  },
  {
    name: "Python",
    icon: "devicon-python-plain colored",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    name: "React",
    icon: "devicon-react-original colored",
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain colored",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain colored",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "Express.js",
    icon: "devicon-express-original",
  },
  {
    name: "Flask",
    icon: "devicon-flask-original",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
  },
  {
    name: "MySQL",
    icon: "devicon-mysql-plain colored",
  },
  {
    name: "Git",
    icon: "devicon-git-plain colored",
  },
  {
    name: "GitHub",
    icon: "devicon-github-original",
  },
  {
    name: "VS Code",
    icon: "devicon-vscode-plain colored",
  },
  {
    name: "Linux",
    icon: "devicon-linux-plain colored",
  },
  {
    name: "Vite",
    symbol: "⚡",
    color: "#a78bfa",
  },
  {
    name: "Vercel",
    symbol: "▲",
    color: "#ffffff",
  },
  {
    name: "Render",
    symbol: "R",
    color: "#a78bfa",
  },
  {
    name: "Postman",
    symbol: "P",
    color: "#ff6c37",
  },
  {
    name: "Gemini API",
    symbol: "✦",
    color: "#4285f4",
  },
];

function TechCard({ technology }) {
  return (
    <div className="tech-card">
      {technology.icon ? (
        <i className={technology.icon} aria-hidden="true"></i>
      ) : (
        <span
          className="tech-symbol"
          style={{ color: technology.color }}
          aria-hidden="true"
        >
          {technology.symbol}
        </span>
      )}

      <span className="tech-name">{technology.name}</span>
    </div>
  );
}

function TechMarquee({ items, reverse = false }) {
  return (
    <div className={`tech-marquee ${reverse ? "tech-marquee-reverse" : ""}`}>
      <div className="tech-track">
        <div className="tech-group">
          {items.map((technology) => (
            <TechCard key={technology.name} technology={technology} />
          ))}
        </div>

        {/* Duplicate items for seamless scrolling */}

        <div className="tech-group" aria-hidden="true">
          {items.map((technology) => (
            <TechCard key={technology.name} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechStack() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="tech-stack-section" id="techstack">
      <div className="wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">My Development Toolkit</div>

          <h2 className="section-title">
            Technology <span>Stack</span>
          </h2>

          <p className="section-sub">
            The languages, frameworks and tools behind my projects and
            innovations.
          </p>
        </motion.div>
      </div>

      <motion.div
        className={`tech-marquee-container ${paused ? "tech-paused" : ""}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TechMarquee items={technologies.slice(0, 10)} />

        <TechMarquee items={technologies.slice(10)} reverse />
      </motion.div>

      <div className="tech-controls">
        <button
          type="button"
          className="tech-pause-button"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play animation" : "Pause animation"}
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
          {paused ? "Play Animation" : "Pause Animation"}
        </button>
      </div>
    </section>
  );
}

export default TechStack;

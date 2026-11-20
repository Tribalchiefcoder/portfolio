import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Typed from "typed.js";

function Hero() {
  const typedRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer",
        "MERN Stack Developer",
        "Software Engineering Enthusiast",
        "Java & DSA Enthusiast",
        "AI & ML Honours Graduate",
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1600,
      startDelay: 400,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, [reduceMotion]);

  const stats = [
    { value: "4", label: "Major Projects" },
    { value: "1", label: "Internship" },
    { value: "2026", label: "Graduation" },
  ];

  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          {/* Hero introduction */}

          <motion.div
            className="hero-content"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.7,
            }}
          >
            <div className="eyebrow">Full-Stack Developer</div>

            <h1>
              Sumedh <span className="accent">Varadkar</span>
            </h1>

            <div className="hero-typed">
              {reduceMotion ? (
                <span>Full-Stack Developer</span>
              ) : (
                <span ref={typedRef}></span>
              )}
            </div>

            <p className="hero-lead">
              Electronics and Telecommunication Engineering graduate with
              Honours in AI & ML and hands-on experience in full-stack
              development. Passionate about building modern web applications and
              solving real-world problems through technology.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View My Work
                <ArrowUpRight size={17} />
              </a>

              <a
                className="btn btn-outline"
                href="https://github.com/Tribalchiefcoder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-github-original"></i>
                GitHub
              </a>

              <a
                className="btn btn-outline"
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Sumedh_Varadkar_Resume.pdf"
              >
                Resume
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="hstat" key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating profile photograph */}

          <motion.div
            className="hero-photo-wrap"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.9,
            }}
          >
            <div className="hero-photo-glow"></div>

            <div className="hero-photo">
              {!imageError ? (
                <img
                  src="/images/profile.png"
                  alt="Sumedh Varadkar"
                  onError={() => setImageError(true)}
                  fetchPriority="high"
                />
              ) : (
                <div className="hero-photo-placeholder">
                  <span>SV</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

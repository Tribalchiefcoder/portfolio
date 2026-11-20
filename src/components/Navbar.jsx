import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Resume", id: "resume" },
  { name: "Services", id: "services" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap">
        <nav className="nav-container">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            Sumedh<span>.</span>
          </a>

          <div
            id="navigation-menu"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            Let's Connect
          </a>

          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="navigation-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

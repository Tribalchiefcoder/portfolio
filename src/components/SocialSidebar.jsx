function SocialSidebar() {
  return (
    <aside className="social-sidebar">
      <a
        href="https://github.com/Tribalchiefcoder"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <i className="devicon-github-original"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/sumedh-varadkar-38275a2a6/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <i className="devicon-linkedin-plain"></i>
      </a>

      <a
        href="https://www.instagram.com/mr.sv_24/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      <div className="social-line"></div>
    </aside>
  );
}

export default SocialSidebar;

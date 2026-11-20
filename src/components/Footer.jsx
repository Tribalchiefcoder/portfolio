import { Mail, ArrowUp, Heart } from "lucide-react";

import InstagramIcon from "./InstagramIcon";

function Footer() {
  const year = new Date().getFullYear();
  const email = import.meta.env.VITE_CONTACT_EMAIL;

  return (
    <footer className="portfolio-footer">
      <div className="wrap">
        <div className="footer-top">
          {/* Footer branding */}

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Sumedh<span>.</span>
            </a>

            <p>Building solutions through technology.</p>
          </div>

          {/* Social links and back-to-top button */}

          <div className="footer-actions">
            <div className="footer-socials">
              {/* GitHub */}

              <a
                href="https://github.com/Tribalchiefcoder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="devicon-github-original" aria-hidden="true"></i>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/sumedh-varadkar-38275a2a6/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="devicon-linkedin-plain" aria-hidden="true"></i>
              </a>

              {/* Instagram */}

              <a
                href="https://www.instagram.com/mr.sv_24/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon size={20} />
              </a>

              {/* Email */}

              {email && (
                <a href={`mailto:${email}`} aria-label="Email" title="Email">
                  <Mail size={20} />
                </a>
              )}
            </div>

            {/* Back to top */}

            <a
              href="#home"
              className="back-to-top"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={21} />
            </a>
          </div>
        </div>

        {/* Copyright and credits */}

        <div className="footer-bottom">
          <p>© {year} Sumedh Varadkar. All rights reserved.</p>

          <p className="footer-credit">
            Designed & Built with
            <Heart size={14} />
            using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

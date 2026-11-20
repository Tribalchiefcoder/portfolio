import { useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  Code2,
  FileText,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Full-Stack Development Internship",
    organization: "CodeC Technologies",
    category: "Internship",
    date: "November 2026",
    image: "certificates/codec-internship.png",
    document: "certificates/codec-internship.pdf",
    icon: Award,
    buttonText: "View Certificate",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    organization: "Course Certification",
    category: "Technical Certification",
    date: "",
    image: "certificates/dsa-certificate.png",
    document: "certificates/dsa-certificate.pdf",
    icon: Code2,
    buttonText: "View Certificate",
  },
  {
    id: 3,
    title: "Smart Factory IoT Dashboard",
    organization: "IRJMETS",
    category: "Research Achievement",
    date: "April 2026",
    image: "certificates/research-paper.png",
    document: "certificates/research-paper.pdf",
    icon: FileText,
    buttonText: "View Document",
  },
];

function CertificateCard({ certificate, index }) {
  const [imageError, setImageError] = useState(false);

  const Icon = certificate.icon;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <motion.article
      className="certificate-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
    >
      {/* Certificate preview */}

      <a
        href={`${baseUrl}${certificate.document}`}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-preview"
        aria-label={`View ${certificate.title}`}
      >
        {!imageError ? (
          <img
            src={`${baseUrl}${certificate.image}`}
            alt={certificate.title}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="certificate-placeholder">
            <Icon size={60} strokeWidth={1.3} />
            <span>Certificate Preview</span>
          </div>
        )}

        <div className="certificate-overlay">
          <span>
            View Document
            <ArrowUpRight size={20} />
          </span>
        </div>
      </a>

      {/* Certificate details */}

      <div className="certificate-content">
        <div className="certificate-category">
          <Icon size={15} />
          {certificate.category}
        </div>

        <h3>{certificate.title}</h3>

        <p className="certificate-organization">{certificate.organization}</p>

        {certificate.date && (
          <div className="certificate-date">
            <CalendarDays size={14} />
            {certificate.date}
          </div>
        )}

        <a
          href={`${baseUrl}${certificate.document}`}
          className="certificate-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {certificate.buttonText}
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">Continuous Learning</div>

          <h2 className="section-title">
            Certifications & <span>Achievements</span>
          </h2>

          <p className="section-sub">
            Recognitions, certifications and milestones that reflect my
            commitment to continuous learning and professional growth.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

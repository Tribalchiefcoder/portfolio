import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import InstagramIcon from "./InstagramIcon";

import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const email = import.meta.env.VITE_CONTACT_EMAIL;

const contactLinks = [
  {
    label: "Email",
    value: email || "Email not configured",
    icon: Mail,
    href: email ? `mailto:${email}` : "",
  },
  {
    label: "Location",
    value: "Maharashtra, India",
    icon: MapPin,
    href: "",
  },
  {
    label: "GitHub",
    value: "Tribalchiefcoder",
    brand: "devicon-github-original",
    href: "https://github.com/Tribalchiefcoder",
  },
  {
    label: "LinkedIn",
    value: "Sumedh Varadkar",
    brand: "devicon-linkedin-plain",
    href: "https://www.linkedin.com/in/sumedh-varadkar-38275a2a6/",
  },
  {
    label: "Instagram",
    value: "@mr.sv_24",
    icon: InstagramIcon,
    href: "https://www.instagram.com/mr.sv_24/",
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactLink({ item }) {
  const Icon = item.icon;

  const content = (
    <>
      <div className="contact-link-icon">
        {item.brand ? (
          <i className={item.brand} aria-hidden="true"></i>
        ) : (
          <Icon size={21} />
        )}
      </div>

      <div className="contact-link-info">
        <span>{item.label}</span>
        <strong>{item.value}</strong>
      </div>

      {item.href && <ArrowUpRight size={17} className="contact-link-arrow" />}
    </>
  );

  if (!item.href) {
    return <div className="contact-link">{content}</div>;
  }

  return (
    <a
      href={item.href}
      className="contact-link"
      target={item.href.startsWith("https") ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "sending") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "sending") return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check EmailJS configuration
    if (!serviceId || !templateId || !publicKey) {
      setStatus("unconfigured");
      return;
    }

    // Prepare email template parameters
    const templateParams = {
      from_name: form.name.trim(),
      from_email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    // Prevent empty or whitespace-only submissions
    if (
      !templateParams.from_name ||
      !templateParams.from_email ||
      !templateParams.subject ||
      !templateParams.message
    ) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        {/* Section heading */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">Get in Touch</div>

          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>

          <p className="section-sub">
            Open to opportunities, collaborations and new challenges.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact information */}

          <motion.div
            className="contact-information"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              Let's build something <span>great together.</span>
            </h3>

            <p className="contact-intro">
              I'm actively seeking opportunities in software engineering and
              full-stack development. Whether you have a job opportunity, a
              project idea or simply want to connect, feel free to reach out.
            </p>

            <div className="contact-availability">
              <span className="availability-dot"></span>
              Available for work
            </div>

            <div className="contact-links">
              {contactLinks.map((item) => (
                <ContactLink key={item.label} item={item} />
              ))}
            </div>
          </motion.div>

          {/* Contact form */}

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send a Message</h3>

            <p>
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Name */}

              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  disabled={status === "sending"}
                  required
                />
              </div>

              {/* Email */}

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                  disabled={status === "sending"}
                  required
                />
              </div>

              {/* Subject */}

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={handleChange}
                  maxLength={150}
                  disabled={status === "sending"}
                  required
                />
              </div>

              {/* Message */}

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={3000}
                  disabled={status === "sending"}
                  required
                />
              </div>

              {/* Submit button */}

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    Sending Message...
                    <LoaderCircle size={18} className="sending-spinner" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {/* Form notifications */}

              <div aria-live="polite">
                {status === "success" && (
                  <div className="form-status form-success">
                    <CheckCircle2 size={19} />
                    Message sent successfully!
                  </div>
                )}

                {status === "error" && (
                  <div className="form-status form-error">
                    <AlertCircle size={19} />
                    Unable to send message. Please try again.
                  </div>
                )}

                {status === "unconfigured" && (
                  <div className="form-status form-error">
                    <AlertCircle size={19} />
                    Contact service is not configured yet.
                  </div>
                )}

                {status === "invalid" && (
                  <div className="form-status form-error">
                    <AlertCircle size={19} />
                    Please complete all the fields correctly.
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

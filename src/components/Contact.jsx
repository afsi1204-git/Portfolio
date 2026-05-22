import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { personal } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { icon: FaEnvelope, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FaPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { icon: FaMapMarkerAlt, label: "Location", value: personal.location },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/afsheen1204", href: personal.linkedin },
  { icon: FaGithub, label: "GitHub", value: "github.com/afsi1204-git", href: personal.github },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading
        label="04 — Contact"
        title="Let's Connect"
        subtitle="Open to internships, collaborations, and part-time roles"
      />

      <div className="contact__grid">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass-card contact__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 6 }}
            >
              <item.icon className="contact__icon" />
              <div>
                <span className="contact__label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.form
          className="glass-card contact__form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const message = form.message.value;
            window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}`;
          }}
        >
          <h3>Send a Message</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows={5} required />
          <motion.button
            type="submit"
            className="btn btn--primary btn--full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send via Email
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

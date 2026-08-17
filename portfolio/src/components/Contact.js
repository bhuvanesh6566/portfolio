import './Contact.css';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const LINKEDIN = 'https://www.linkedin.com/in/bhuvaneshwaran-s-13a57732b';
const GITHUB = 'https://github.com/bhuvanesh6566';
const EMAIL = 'mailto:bhuvaneshwaran@email.com';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-sub">
          I'm actively looking for Full Stack internship opportunities. Whether you have a role,
          a project idea, or just want to connect — my inbox is always open.
        </p>
        <a href={EMAIL} className="btn-primary contact-btn">
          Say Hello 👋
        </a>
        <div className="contact-links">
          <a href={EMAIL}><FiMail /> bhuvaneshwaran@email.com</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        </div>
        <footer className="footer">
          <p>Designed & Built by Bhuvaneshwaran S · {new Date().getFullYear()}</p>
          <a href="/resume.pdf" download="Bhuvaneshwaran_Resume.pdf" className="footer-resume">
            Download Resume
          </a>
        </footer>
      </div>
    </section>
  );
}

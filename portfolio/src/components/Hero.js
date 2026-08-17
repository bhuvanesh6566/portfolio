import './Hero.css';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const LINKEDIN = 'https://www.linkedin.com/in/bhuvaneshwaran-s-13a57732b';
const GITHUB = 'https://github.com/bhuvanesh6566';
const EMAIL = 'mailto:bhuvaneshwaran@email.com';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-badge">👋 Available for Internships</div>
          <h1 className="hero-name">Bhuvaneshwaran S</h1>
          <h2 className="hero-role">Full Stack Developer Intern</h2>
          <p className="hero-tagline">
            Building real-world web & AI applications — from pixel-perfect React UIs
            to intelligent back-end systems.
          </p>
          <div className="hero-actions">
            <a href="/resume.pdf" download="Bhuvaneshwaran_Resume.pdf" className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          <div className="hero-socials">
            <a href={EMAIL} aria-label="Email" title="Email">
              <FiMail /> <span>Email</span>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FiLinkedin /> <span>LinkedIn</span>
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <FiGithub /> <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Bhuvaneshwaran S" className="hero-photo" />
          </div>
          <div className="hero-photo-badge">
            <span className="dot" />
            Open to Work
          </div>
        </div>
      </div>
    </section>
  );
}

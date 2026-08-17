import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">Bhuvaneshwaran S</a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
          <li>
            <a href="/resume.pdf" download="Bhuvaneshwaran_Resume.pdf" className="btn-resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

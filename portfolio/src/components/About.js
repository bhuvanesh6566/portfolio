import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a first-year Computer Science and Engineering student at Rajalakshmi Institute
              of Technology, Chennai, passionate about building real-world web and AI applications.
              I work across the full stack — from React frontends to Firebase backends — and love
              solving problems that matter, from crash detection AI to smart campus systems.
            </p>
            <p>
              I've built projects spanning crash detection AI, smart campus systems, and EdTech
              platforms. I'm actively seeking a Full Stack Developer internship where I can
              contribute, grow, and ship impactful products.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat"><span>5+</span><p>Projects Built</p></div>
            <div className="stat"><span>4</span><p>Certifications</p></div>
            <div className="stat"><span>2028</span><p>Graduating</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

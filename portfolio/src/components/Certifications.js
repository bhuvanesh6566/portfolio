import './Certifications.css';
import { FiAward } from 'react-icons/fi';

const certs = [
  { title: 'Database Management System', issuer: 'NPTEL' },
  { title: 'Python for Data Science', issuer: 'Online' },
  { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM' },
  { title: 'Intermediate Java', issuer: 'Online' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="cert-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certs.map(c => (
            <div key={c.title} className="cert-card">
              <FiAward className="cert-icon" />
              <div>
                <p className="cert-title">{c.title}</p>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

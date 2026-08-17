import './Education.css';

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="edu-card">
          <div className="edu-header">
            <div>
              <h3>Bachelor of Engineering in Computer Science and Engineering</h3>
              <p className="edu-school">Rajalakshmi Institute of Technology, Chennai</p>
            </div>
            <span className="edu-date">2024 – 2028</span>
          </div>
          <div className="edu-details">
            <div className="edu-gpa">Current CGPA: <strong>8.0 / 10</strong></div>
            <div className="edu-courses">
              <span className="course-label">Relevant Coursework:</span>
              {['Data Structures & Algorithms', 'DBMS', 'Web Development',
                'Operating Systems', 'Computer Networks', 'OOP'].map(c => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

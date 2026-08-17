import './Skills.css';

const skills = {
  'Languages': ['Java', 'Python', 'JavaScript', 'SQL'],
  'Frontend': ['React.js', 'HTML', 'CSS'],
  'Backend': ['Node.js', 'Express.js'],
  'Databases': ['MySQL', 'MongoDB', 'Firebase'],
  'Core Subjects': ['DSA', 'DBMS', 'OOP', 'OS', 'Computer Networks'],
  'Tools': ['Git', 'GitHub', 'VS Code'],
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {items.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

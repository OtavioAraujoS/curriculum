const Skills = ({ t }) => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-grid">
        {t.skills.categories.map((cat, idx) => (
          <div key={idx} className="skill-group">
            <h3 className="skill-group-title">{cat.name}</h3>
            <div className="tech-list">
              {cat.techs.map((tech, tIdx) => (
                <span key={tIdx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

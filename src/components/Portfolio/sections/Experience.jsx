const Experience = ({ t }) => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">{t.experience.title}</h2>
      <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
        {t.experience.subtitle}
      </p>
      <div className="experience-timeline">
        {t.experience.items.map((item, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-year">{item.year}</div>
            <h3 className="experience-role">{item.role}</h3>
            <p className="experience-company">{item.company}</p>
            <p className="experience-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

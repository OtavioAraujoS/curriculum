const About = ({ t }) => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-section">
        <div>
          <p className="about-text-1">{t.about.section1}</p>
          <p className="about-description">{t.about.description}</p>
        </div>
        <div className="about-metrics">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="metric">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

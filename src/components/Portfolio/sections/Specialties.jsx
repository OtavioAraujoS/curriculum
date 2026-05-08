const Specialties = ({ t }) => {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <h2 className="section-title">{t.specialties.title}</h2>
      <div className="specialties-grid">
        {t.specialties.items.map((item, idx) => (
          <div key={idx} className="specialty-card">
            <h3 className="specialty-title">{item.title}</h3>
            <p className="specialty-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;

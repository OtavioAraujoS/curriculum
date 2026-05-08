const Contact = ({ t }) => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="contact-title">{t.contact.title}</h2>
      <p className="contact-subtitle">{t.contact.subtitle}</p>
      <div className="contact-cards">
        <a href={`mailto:${t.contact.email}`} className="contact-card">
          <div className="contact-icon">✉️</div>
          <div className="contact-label">Email</div>
          <div className="contact-value">{t.contact.email}</div>
        </a>
        <a
          href="https://linkedin.com/in/otávio-araujo-77474b1ab"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">💼</div>
          <div className="contact-label">LinkedIn</div>
          <div className="contact-value">Connect</div>
        </a>
        <a
          href="https://github.com/OtavioAraujoS"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">💻</div>
          <div className="contact-label">GitHub</div>
          <div className="contact-value">@OtavioAraujoS</div>
        </a>
      </div>
    </section>
  );
};

export default Contact;

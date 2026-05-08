import userPicture from "../../../assets/userPicture.png";

const Hero = ({ t }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">{t.hero.greeting}</div>
          <h1 className="hero-name">{t.hero.name}</h1>
          <h2 className="hero-title">{t.hero.title}</h2>
          <p className="hero-description">{t.hero.subtitle}</p>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-dot"></span>
              {t.hero.location}
            </div>
            <div className="meta-item">
              <span
                className="meta-dot"
                style={{ background: "var(--text)" }}
              ></span>
              {t.hero.contact}
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={userPicture} alt={t.hero.name} className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

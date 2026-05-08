const Navigation = ({ t, language, setLanguage, activeSection, scrollToSection }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <a href="#" className="nav-logo">OTÁVIO</a>
        <ul className="nav-links">
          {Object.entries(t.nav).map(([key, value]) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className={activeSection === key ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(key);
                }}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
        <div className="lang-switcher" onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}>
          <span>{language === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
            {language === 'pt' ? 'PT' : 'EN'}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

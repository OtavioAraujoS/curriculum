const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Otávio Araujo. {language === 'pt' ? 'Desenvolvido com' : 'Built with'} React & ❤️
      </p>
    </footer>
  );
};

export default Footer;

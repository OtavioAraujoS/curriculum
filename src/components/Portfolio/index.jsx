import { useState, useEffect } from 'react';
import { getContent } from './data';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Companies from './sections/Companies';
import About from './sections/About';
import Specialties from './sections/Specialties';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './styles.css';

const ModernPortfolio = () => {
  const [language, setLanguage] = useState('pt');
  const [activeSection, setActiveSection] = useState('home');
  const [githubProjects, setGithubProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Simple logic to update active section based on scroll
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = getContent(language);

  const fetchGithubProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/OtavioAraujoS/repos?sort=updated&per_page=6');
      const data = await response.json();
      setGithubProjects(data.filter(repo => !repo.fork).slice(0, 6));
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="modern-portfolio">
      <Navigation
        t={t}
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero t={t} />
      <Companies />
      <About t={t} />
      <Specialties t={t} />
      <Experience t={t} />
      <Skills t={t} />
      <Projects 
        t={t} 
        githubProjects={githubProjects} 
        fetchGithubProjects={fetchGithubProjects} 
        isLoading={isLoading} 
      />
      <Contact t={t} />
      <Footer language={language} />
    </div>
  );
};

export default ModernPortfolio;

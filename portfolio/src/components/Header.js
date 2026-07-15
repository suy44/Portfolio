import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#hero" className="logo" onClick={(e) => scrollToSection(e, 'hero')}>
          Semaoui<div className="logo-circle"></div>
        </a>

        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}></span>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

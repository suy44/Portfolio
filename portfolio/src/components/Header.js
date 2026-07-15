// src/components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            zIndex: 998, backdropFilter: 'blur(4px)'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">

            {/* Logo */}
            <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
              <span className="logo-mark">&lt;DS /&gt;</span>
            </a>

            {/* Desktop Nav */}
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <ul>
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={activeSection === link.id ? 'active' : ''}
                      onClick={() => scrollToSection(link.id)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="nav-cta">
                  <a href="#contact" onClick={() => scrollToSection('contact')}>
                    Hire Me
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile toggle */}
            <div
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
              <span style={isMobileMenuOpen ? { opacity: 0 } : {}}></span>
              <span style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

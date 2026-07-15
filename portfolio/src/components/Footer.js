// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const socials = [
    { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/djaber-semaoui/', label: 'LinkedIn' },
    { icon: 'bi-github', href: 'https://github.com/', label: 'GitHub' },
    { icon: 'bi-envelope', href: 'mailto:djaber.semaoui@outlook.com', label: 'Email' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-mark">&lt;DS /&gt;</span>
          </div>

          <nav className="footer-links">
            {navLinks.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={() => scrollToSection(l.id)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="footer-social"
                aria-label={s.label}
              >
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span>© {year} Djaber SEMAOUI. All rights reserved.</span>
          <span>
            Built with <span className="footer-heart">♥</span> using React
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

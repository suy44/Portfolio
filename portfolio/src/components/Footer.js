// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Djaber Semaoui</h2>
            <p>Developer and Founder</p>
          </div>
          
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/djaber-semaoui-ba5a0334b" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/djaber.semaoui/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61579836683981" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Djaber Semaoui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
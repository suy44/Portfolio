import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo" style={{ marginBottom: '8px' }}>
          Semaoui<div className="logo-circle"></div>
        </div>
        
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Djaber Semaoui. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

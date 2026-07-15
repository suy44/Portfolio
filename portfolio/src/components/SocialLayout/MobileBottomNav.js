import React from 'react';

const MobileBottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mobile-bottom-nav">
      <button 
        className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
        onClick={() => {
          setActiveTab('projects');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </button>

      <button 
        className={`nav-btn ${activeTab === 'experience' ? 'active' : ''}`}
        onClick={() => {
          setActiveTab('experience');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <i className="fa-solid fa-briefcase"></i>
        <span>Experience</span>
      </button>

      <a href="mailto:djaber.semaoui@telecomnancy.eu" className="nav-btn" style={{ textDecoration: 'none', color: 'inherit' }}>
        <i className="fa-regular fa-envelope"></i>
        <span>Message</span>
      </a>
    </div>
  );
};

export default MobileBottomNav;

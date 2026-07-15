import React from 'react';
import profilPhoto from '../../assets/profilPhoto.png';

const SidebarLeft = ({ isMobile, theme, toggleTheme }) => {
  return (
    <div className="profile-card">
      <div className="profile-cover"></div>
      
      <div className="profile-avatar-container">
        <img src={profilPhoto} alt="Djaber Semaoui" className="profile-avatar" />
      </div>

      <div className="profile-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className="profile-name">Djaber Semaoui <i className="fa-solid fa-circle-check verified-badge"></i></h1>
          <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.2rem', padding: '4px' }} aria-label="Toggle Theme">
            {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>
        </div>
        <div className="profile-handle">@djaber_semaoui</div>
        
        <p className="profile-bio">
          I'm an enthusiastic embedded systems and AI developer with over 7 years of hands-on experience building innovative projects in robotics, avionics, and IoT.
        </p>

        <div className="profile-details">
          <div><i className="fa-solid fa-briefcase"></i> IT & Software Engineer</div>
          <div><i className="fa-solid fa-graduation-cap"></i> Djilali Liabes University</div>
          <div><i className="fa-solid fa-location-dot"></i> Ghardaia, Algeria</div>
          <div><i className="fa-solid fa-link"></i> <a href="https://github.com/suy44" style={{ color: '#1da1f2' }}>github.com/suy44</a></div>
          <div><i className="fa-solid fa-calendar-days"></i> Joined 2017</div>
        </div>

        <div className="profile-stats">
          <div><strong>15+</strong> <span>Projects</span></div>
          <div><strong>8+</strong> <span>Competitions</span></div>
          <div><strong>20+</strong> <span>Workshops</span></div>
        </div>

        {!isMobile && (
          <a href="mailto:djaber.semaoui@telecomnancy.eu" className="contact-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
            Message
          </a>
        )}
      </div>
    </div>
  );
};

export default SidebarLeft;

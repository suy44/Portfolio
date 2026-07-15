import React, { useState } from 'react';
import SidebarLeft from './components/SocialLayout/SidebarLeft';
import SidebarRight from './components/SocialLayout/SidebarRight';
import Feed from './components/SocialLayout/Feed';
import MobileBottomNav from './components/SocialLayout/MobileBottomNav';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [theme, setTheme] = useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="social-app">
      {/* Portfolio Banner */}
      <div style={{ background: 'var(--text-primary)', color: 'var(--bg-base)', textAlign: 'center', padding: '10px 16px', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em' }}>
        <i className="fa-solid fa-briefcase"></i> Welcome to the interactive portfolio of Djaber Semaoui
      </div>

      <div className="social-container">
        
        {/* LEFT COLUMN: Profile & Bio */}
        <div className="social-sidebar-left">
          <SidebarLeft theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* CENTER COLUMN: The Feed */}
        <div className="social-feed-container">
          {/* Mobile Profile Header (Only visible on small screens) */}
          <div className="mobile-profile-header">
            <SidebarLeft isMobile={true} theme={theme} toggleTheme={toggleTheme} />
          </div>

          <Feed activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* RIGHT COLUMN: Skills & Widgets */}
        <div className="social-sidebar-right">
          <SidebarRight />
        </div>

      </div>

      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;

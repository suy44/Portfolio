import React from 'react';

const SidebarRight = () => {
  const trendingSkills = [
    { category: 'Hardware', name: 'Arduino / STM32', posts: '12 Posts' },
    { category: 'Avionics', name: 'ArduPilot', posts: '5 Posts' },
    { category: 'Web Frontend', name: 'React & Next.js', posts: '8 Posts' },
    { category: 'AI & Vision', name: 'Python & OpenCV', posts: '10 Posts' },
    { category: 'Systems', name: 'C / C++', posts: '15 Posts' }
  ];

  const whoToFollow = [
    { name: 'GitHub', handle: '@suy44', link: 'https://github.com/suy44' },
    { name: 'LinkedIn', handle: '@djabersemaoui', link: '#' }
  ];

  return (
    <div>
      {/* Trending Widget (Skills) */}
      <div className="widget">
        <h2 className="widget-title">Trending in Tech</h2>
        {trendingSkills.map((skill, index) => (
          <div className="trending-item" key={index}>
            <div className="trending-info">
              <span>{skill.category} · Trending</span>
              <strong>#{skill.name.replace(/ /g, '').replace('&', '')}</strong>
            </div>
            <div className="trending-count">{skill.posts}</div>
          </div>
        ))}
        <a href="#" className="widget-more">Show more</a>
      </div>

      {/* Connect Widget */}
      <div className="widget">
        <h2 className="widget-title">Connect</h2>
        {whoToFollow.map((account, index) => (
          <div className="trending-item" key={index}>
            <div className="trending-info" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--bg-surface-elevated)' }}></div>
              <div>
                <strong>{account.name} <i className="fa-solid fa-circle-check" style={{ color: '#1da1f2', fontSize: '0.8rem' }}></i></strong>
                <span>{account.handle}</span>
              </div>
            </div>
            <a href={account.link} style={{ padding: '6px 16px', background: 'var(--text-primary)', color: 'var(--bg-base)', borderRadius: '999px', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>
              Follow
            </a>
          </div>
        ))}
      </div>
      
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', padding: '0 16px' }}>
        &copy; {new Date().getFullYear()} Djaber Semaoui.
      </div>
    </div>
  );
};

export default SidebarRight;

// src/components/About.js
import React from 'react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const About = () => {
  const [yearsRef, yearsCount] = useCounterAnimation(7);
  const [projectsRef, projectsCount] = useCounterAnimation(15);
  const [compsRef, compsCount] = useCounterAnimation(8);
  const [workshopsRef, workshopsCount] = useCounterAnimation(20);

  const details = [
    { icon: '👤', label: 'Name', value: 'Djaber Semaoui' },
    { icon: '🎓', label: 'University', value: 'Djilali Liabes University' },
    { icon: '📍', label: 'Location', value: 'Ghardaia, Algeria' },
    { icon: '🔬', label: 'Association', value: 'Nabtakir Member' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Passionate Builder of <span className="gradient-text">Tomorrow's Tech</span></h2>
          <p className="section-subtitle">
            From microcontrollers to machine learning — I bridge hardware and software to create real-world impact.
          </p>
        </div>

        <div className="about-content">
          {/* Left: Text + Details */}
          <div className="about-text-block">
            <p>
              I'm an enthusiastic embedded systems and AI developer with over 7 years of hands-on experience building innovative projects in robotics, avionics, and IoT. My expertise spans microcontrollers, computer vision, and modern frameworks like React — combining hardware and software to create intelligent, real-world solutions.
            </p>
            <p>
              I'm passionate about designing efficient systems, training AI models, and crafting user-centered interfaces that bridge technology with people's needs. Outside of development, I enjoy competing in robotics challenges, sharing knowledge through workshops, and exploring new frontiers in science and technology.
            </p>

            <div className="about-details-grid">
              {details.map((d, i) => (
                <div key={i} className="about-detail-item">
                  <span className="about-detail-icon">{d.icon}</span>
                  <div className="about-detail-content">
                    <strong>{d.label}</strong>
                    <span>{d.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal */}
            <div className="about-terminal">
              <div className="terminal-header">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <span className="terminal-title">djaber@portfolio ~ </span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">❯</span>
                  <span className="terminal-command">cat profile.json</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-key">"domain"</span>: <span className="terminal-val">"Embedded + AI + Web"</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-key">"status"</span>: <span style={{ color: '#10b981' }}>"open to opportunities"</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-key">"passion"</span>: <span className="terminal-val">"Building things that matter"</span>
                </div>
                <div className="terminal-line" style={{ marginTop: '4px' }}>
                  <span className="terminal-prompt">❯</span>
                  <span style={{ opacity: 0.5 }}>█</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="about-stats-side">
            <div className="stats-grid">
              <div className="stat-card" ref={yearsRef}>
                <div className="stat-number">{yearsCount}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card" ref={projectsRef}>
                <div className="stat-number">{projectsCount}+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card" ref={compsRef}>
                <div className="stat-number">{compsCount}+</div>
                <div className="stat-label">Competitions</div>
              </div>
              <div className="stat-card" ref={workshopsRef}>
                <div className="stat-number">{workshopsCount}+</div>
                <div className="stat-label">Workshops Led</div>
              </div>
            </div>

            {/* What I do */}
            <div className="glass-card" style={{ padding: '28px', marginTop: '0' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)' }}>What I Do</h3>
              {[
                { icon: '⚡', title: 'Embedded Systems', desc: 'Arduino, STM32, ESP32, RFID, GPS, sensors' },
                { icon: '🤖', title: 'AI & Computer Vision', desc: 'Python, OpenCV, model training, automation' },
                { icon: '🌐', title: 'Frontend & Web Apps', desc: 'React, Next.js, responsive UI/UX design' },
                { icon: '✈️', title: 'Avionics & Drones', desc: 'ArduPilot, Mission Planner, autonomous navigation' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  marginBottom: i < 3 ? '16px' : 0,
                  paddingBottom: i < 3 ? '16px' : 0,
                  borderBottom: i < 3 ? '1px solid var(--border-glass)' : 'none'
                }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '2px' }}>{item.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

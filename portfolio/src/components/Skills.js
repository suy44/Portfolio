import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  const mainSkills = [
    { name: 'Arduino / STM32', icon: 'fa-solid fa-microchip' },
    { name: 'ArduPilot / Drones', icon: 'fa-solid fa-plane' },
    { name: 'React & Next.js', icon: 'fa-brands fa-react' },
    { name: 'UI/UX Design', icon: 'fa-brands fa-figma' },
    { name: 'Python & AI', icon: 'fa-brands fa-python' },
    { name: 'Cyber Security', icon: 'fa-solid fa-shield-halved' }
  ];

  const extraSkills = [
    'C / C++', 'ESP32', 'Raspberry Pi', 'OpenCV', 'RFID / NFC',
    'GPS Tracking', 'Mission Planner', 'Node.js', 'Google Script',
    'Figma', 'Git & GitHub', 'Linux', 'SolidWorks'
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)' }}>
          My Expertise
        </h2>
        <p className="section-subtitle fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)', transitionDelay: '0.1s' }}>
          A multidisciplinary toolkit spanning hardware, software, and design — built over 7+ years of hands-on projects.
        </p>

        <div className={`skills-grid fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {mainSkills.map((skill, sIdx) => (
            <div className="surface-card skill-item" key={sIdx} style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
              <div className="skill-icon" style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                <i className={skill.icon}></i>
              </div>
              <span className="skill-name" style={{ fontSize: '1.1rem' }}>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s', marginTop: '48px' }}>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
            + Additional Technologies
          </h4>
          <div className="project-tech" style={{ gap: '12px' }}>
            {extraSkills.map(tag => (
              <span key={tag} style={{ fontSize: '0.85rem', padding: '8px 16px', background: 'var(--bg-surface)', borderColor: 'var(--border-strong)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

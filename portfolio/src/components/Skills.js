// src/components/Skills.js
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Circumference of a circle with r=35: 2*PI*35 ≈ 220
const CIRCUMFERENCE = 220;

const getOffset = (percentage) => CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;

const SkillRing = ({ percentage, color, icon, animated }) => {
  const offset = animated ? getOffset(percentage) : CIRCUMFERENCE;

  return (
    <div className="skill-ring-wrapper">
      <svg className="skill-ring" viewBox="0 0 80 80">
        <circle className="skill-ring-bg" cx="40" cy="40" r="35" />
        <circle
          className={`skill-ring-fill${animated ? ' animated' : ''}`}
          cx="40" cy="40" r="35"
          style={{
            stroke: color,
            strokeDashoffset: offset,
            filter: `drop-shadow(0 0 6px ${color})`,
          }}
        />
      </svg>
      <div className="skill-ring-icon">{icon}</div>
    </div>
  );
};

const Skills = () => {
  const [skillsRef, isVisible] = useScrollAnimation();

  const mainSkills = [
    { name: 'Arduino / STM32', percentage: 90, className: 'arduino', color: '#00979D', icon: '⚙️' },
    { name: 'React & Next.js', percentage: 65, className: 'react', color: '#61DAFB', icon: '⚛️' },
    { name: 'Python & AI', percentage: 78, className: 'python', color: '#FFD43B', icon: '🐍' },
    { name: 'Cyber Security', percentage: 60, className: 'cyber', color: '#f05252', icon: '🔒' },
    { name: 'UI/UX Design', percentage: 65, className: 'uiux', color: '#8b5cf6', icon: '🎨' },
    { name: 'ArduPilot / Drones', percentage: 75, className: 'ardupilot', color: '#10b981', icon: '✈️' },
  ];

  const extraSkills = [
    'C / C++', 'ESP32', 'Raspberry Pi', 'OpenCV', 'RFID / NFC',
    'GPS Tracking', 'Mission Planner', 'Node.js', 'Google Script',
    'Figma', 'Git & GitHub', 'Linux', 'SolidWorks',
  ];

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">Technical Skills</div>
          <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">
            A multidisciplinary toolkit spanning hardware, software, and design — built over 7+ years of hands-on projects.
          </p>
        </div>

        {/* Main skill cards */}
        <div className="skills-grid">
          {mainSkills.map((skill) => (
            <div key={skill.name} className={`skill-card ${skill.className}`}>
              <SkillRing
                percentage={skill.percentage}
                color={skill.color}
                icon={skill.icon}
                animated={isVisible}
              />
              <div className="skill-name">{skill.name}</div>
              <div className="skill-percent">{skill.percentage}%</div>
            </div>
          ))}
        </div>

        {/* Extra skill tags */}
        <div style={{ textAlign: 'center', marginTop: '16px', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            + Additional Technologies
          </span>
        </div>
        <div className="skills-extra">
          {extraSkills.map(tag => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

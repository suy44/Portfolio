// src/components/Experience.js
import React, { useState } from 'react';

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({ 1: true }); // first open by default

  const experiences = [
    {
      id: 1,
      role: 'Embedded Systems Engineer & AI Developer',
      company: 'Nabtakir Association for Technology and Science',
      period: '2018 – Present',
      type: 'Engineering',
      icon: '⚡',
      description: 'Designed and built innovative embedded systems, IoT devices, and AI-powered solutions. Led development of prototypes from concept to deployment.',
      achievements: [
        'Developed AI-based fire-detecting and extinguishing robot car',
        'Built IoT devices including RFID attendance system and sunflower tracker',
        'Designed autonomous drone navigation systems using ArduPilot',
        'Mentored peers in embedded systems and AI project development',
      ],
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Djillali Liabes University',
      period: '2024',
      type: 'Web',
      icon: '🌐',
      description: 'Developed a modern web-based dashboard for real-time car tracking and accident management.',
      achievements: [
        'Developed a web-based dashboard for real-time car tracking and accident management',
        'Integrated backend APIs with interactive React components and live data charts',
      ],
    },
    {
      id: 3,
      role: 'Embedded Systems Educator',
      company: 'Nabtakir Association & Djillali Liabes University',
      period: '2024 – Present',
      type: 'Teaching',
      icon: '🎓',
      description: 'Conducted training sessions and practical workshops on Arduino, embedded systems, and AI — empowering students with hands-on learning.',
      achievements: [
        'Trained 20+ peers in practical Arduino and embedded systems',
        'Helped students develop their first robotics and IoT projects',
        'Organized and led structured curriculum for embedded systems courses',
      ],
    },
    {
      id: 4,
      role: 'Competition Participant & Innovator',
      company: 'National & African Robotics Competitions',
      period: '2019 – Present',
      type: 'Competitions',
      icon: '🏆',
      description: 'Participated in robotics, avionics, and AI competitions at national and African levels — developing creative solutions under real constraints.',
      achievements: [
        '🥇 Won 1st place in ARC 2 (African Robotics Challenge)',
        '🥉 3rd place in ARC 3',
        'Competed in League of Robotics and Planetary Science competitions',
        'Developed the ArUco detection algorithm for the Droneload competition',
        'Showcased projects at National Expo of Scientific Associations',
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div className="section-tag">Career</div>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">
            A journey from tinkering with circuits to competing on international stages.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => {
            const isExpanded = expandedCards[exp.id] || false;
            return (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker" title={exp.type} />
                <div className="timeline-content">
                  <div className="timeline-period">
                    <i className="bi bi-calendar3" />
                    {exp.period}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{exp.icon}</span>
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                    </div>
                  </div>

                  <p className="timeline-desc">{exp.description}</p>

                  {isExpanded && exp.achievements.length > 0 && (
                    <div className="timeline-achievements">
                      {exp.achievements.map((a, i) => (
                        <div key={i} className="timeline-achievement">{a}</div>
                      ))}
                    </div>
                  )}

                  {exp.achievements.length > 0 && (
                    <button
                      className="show-more-btn"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      {isExpanded ? 'Hide' : `Show ${exp.achievements.length} achievements`}
                      <span className="arrow" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.3s' }}>▾</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

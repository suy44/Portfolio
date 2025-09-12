// src/components/Experience.js
import React, { useState } from 'react';

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const experiences = [
    {
      id: 1,
      role: 'Embedded Systems Engineer & AI Developer',
      company: 'Nabtakir Association for Technology and Science',
      period: '2018 - Present',
      description: 'Designed and built innovative embedded systems, IoT devices, and AI-powered solutions. Led development of prototypes.',
      achievements: [
        'Developed AI-based fire-detecting and extinguishing robot car',
        'Built IoT devices including RFID attendance system and sunflower tracker',
        'Mentored peers in embedded systems and AI projects'
      ]
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Djillali Liabes University',
      period: '2024',
      description: 'Developping modern website Dashboard',
      achievements: [
        'Developed a web-based dashboard for real-time car tracking and accident management.'
      ]
    },
    {
      id: 3,
      role: 'Embedded Systems Educator',
      company: 'Nabtakir Association and Djillali Liabes University',
      period: '2024-present',
      description: 'Conducted training sessions and practical workshops on Arduino, embedded systems, and AI. Focused on empowering students with hands-on learning.',
      achievements: [
        'Trained peers in practical Arduino and embedded systems',
        'Helped students develop their first robotics and IoT projects'
      ]
    },
    {
      id: 4,
      role: 'Competition Participant & Innovator',
      company: 'National & African Robotics Competitions',
      period: '2017 - Present',
      description: 'Participated in robotics, avionics, and AI competitions at national and African levels. Developed creative solutions under constraints.',
      achievements: [
        'Won 1st place in ARC 2 and 3rd place in ARC 3',
        'Competed in League of Robotics and Planetary Science competitions',
        'Developed the ArUco detection algorithm as part of a team project for the Droneload competition.',
        'Showcased projects at National Expo of Scientific Associations'
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map(exp => {
            const isExpanded = expandedCards[exp.id] || false;
            
            return (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    
                  </div>
                  
                  <p>{exp.description}</p>
                  
                  {isExpanded && exp.achievements.length > 0 && (
                    <div className="experience-details">
                      <h5>Achievements & Responsibilities:</h5>
                      <ul>
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {!isExpanded && exp.achievements.length > 0 && (
                    <button 
                      className="show-more-btn"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      Show achievements ({exp.achievements.length})
                      <span className="arrow">▼</span>
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
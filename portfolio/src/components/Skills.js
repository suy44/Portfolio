import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [skillsRef, isVisible] = useScrollAnimation();
  
  const skills = [
    { name: 'Arduino', percentage: 90, className: 'arduino' },
    { name: 'React', percentage: 60, className: 'react' },
    { name: 'Python', percentage: 75, className: 'python' },
    { name: 'Cyber Security', percentage: 60, className: 'cyber' },
    { name: 'UI/UX Design', percentage: 60, className: 'uiux' }
  ];

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${skill.className} ${isVisible ? 'animated' : ''}`}
                  style={isVisible ? { width: `${skill.percentage}%` } : { width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
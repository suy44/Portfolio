import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  const experiences = [
    {
      date: '2024 - Present',
      role: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      desc: 'Architecting high-availability backend microservices and modern frontend applications.'
    },
    {
      date: '2023',
      role: 'Engineering Intern',
      company: 'DataCorp',
      desc: 'Developed internal analytics pipelines using Python and built data visualization dashboards.'
    },
    {
      date: '2022',
      role: 'Systems Engineer',
      company: 'Telecom Nancy',
      desc: 'Designed real-time IoT architecture using embedded C++ and custom microcontrollers.'
    }
  ];

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)' }}>
          Experience
        </h2>
        
        <div className={`timeline fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

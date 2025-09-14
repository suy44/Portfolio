import React from 'react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const About = () => {
  const [yearsRef, yearsCount] = useCounterAnimation(7);
  const [projectsRef, projectsCount] = useCounterAnimation(15);

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
             I'm an enthusiastic embedded systems and AI developer with over 7 years of hands-on experience building innovative projects in robotics, avionics, and IoT. My expertise spans microcontrollers, computer vision, and modern frameworks like React, combining hardware and software to create intelligent, real-world solutions. I'm passionate about designing efficient systems, training AI models, and crafting user-centered interfaces that bridge technology with people's needs. Outside of development, I enjoy competing in robotics challenges, sharing knowledge through workshops, and exploring new frontiers in science and technology.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Name:</strong> Djaber Semaoui
              </div>
              <div className="detail-item">
                <strong>University:</strong> Djilali Liabes university
              </div>
              <div className="detail-item">
                <strong>Age:</strong> 19
              </div>
              <div className="detail-item">
                <strong>Nabtakir Association Member</strong>
              </div>
              
            </div>
          </div>
          <div className="about-stats">
            <div className="stat" ref={yearsRef}>
              <h3>{yearsCount}+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat" ref={projectsRef}>
              <h3>{projectsCount}+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

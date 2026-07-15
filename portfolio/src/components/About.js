import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)' }}>
          About Me
        </h2>
        <p className="section-subtitle fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)', transitionDelay: '0.1s' }}>
          From microcontrollers to machine learning — I bridge hardware and software to create real-world impact.
        </p>
        
        <div className={`about-bento fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="bento-card bento-wide">
            <h3><i className="fa-solid fa-code"></i> Background</h3>
            <p>
              I'm an enthusiastic embedded systems and AI developer with over 7 years of hands-on experience building innovative projects in robotics, avionics, and IoT. My expertise spans microcontrollers, computer vision, and modern frameworks like React — combining hardware and software to create intelligent, real-world solutions.
            </p>
            <p style={{ marginTop: '12px' }}>
              I'm passionate about designing efficient systems, training AI models, and crafting user-centered interfaces that bridge technology with people's needs. Outside of development, I enjoy competing in robotics challenges, sharing knowledge through workshops, and exploring new frontiers in science and technology.
            </p>
          </div>
          
          <div className="bento-card">
            <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
            <p>
              <strong>Djilali Liabes University</strong><br/>
              IT & Software Engineering
            </p>
          </div>

          <div className="bento-card">
            <h3><i className="fa-solid fa-globe"></i> Details</h3>
            <p>
              📍 Ghardaia, Algeria<br/>
              🔬 Nabtakir Member
            </p>
          </div>

          <div className="bento-card bento-wide">
            <h3><i className="fa-solid fa-chart-line"></i> By the numbers</h3>
            <div className="bento-stats">
              <div className="stat-item">
                <span className="stat-value">7+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">8+</span>
                <span className="stat-label">Competitions</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">20+</span>
                <span className="stat-label">Workshops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

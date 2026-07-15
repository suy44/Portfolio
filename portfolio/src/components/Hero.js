import React from 'react';
import profilPhoto from '../assets/profilPhoto.png';
import droneImg from '../assets/Drone.jpg';
import codeImg from '../assets/cv.png'; // Reusing as a placeholder for a 3rd image

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-badge fade-up visible">
          <span></span> Available for new opportunities
        </div>
        
        <h1 className="hero-title fade-up visible" style={{ transitionDelay: '0.1s' }}>
          Engineering <span>digital</span><br/>
          experiences.
        </h1>
        
        <p className="hero-subtitle fade-up visible" style={{ transitionDelay: '0.2s' }}>
          I'm Djaber Semaoui, a software engineer specializing in building exceptional, high-performance web applications and systems.
        </p>
        
        <div className="hero-buttons fade-up visible" style={{ transitionDelay: '0.3s' }}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>

        <div className="hero-image-grid fade-up visible" style={{ transitionDelay: '0.4s' }}>
          <div className="hero-img-card">
            <img src={droneImg} alt="Engineering" />
          </div>
          <div className="hero-img-card">
            <img src={profilPhoto} alt="Djaber Semaoui" />
          </div>
          <div className="hero-img-card">
            <img src={codeImg} alt="Code" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// src/components/Hero.js
import React from 'react';
import profilePhoto from '../assets/personalPhoto.png'; // Adjust this path

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Djaber Semaoui</h1>
            <h3>Embedded Systems & AI Specialist, Frontend Developer, and Startup Founder</h3>
            <p>I design and build beautiful, functional device prototypes, including IoT projects and custom solution devices, and I train powerful AI models with a strong focus on user experience and clean, maintainable code.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profilePhoto} alt="Djaber Semaoui" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
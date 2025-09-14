// src/components/Hero.js
import React, { useEffect, useRef, useState } from 'react';
import profilePhoto from '../assets/personalPhoto.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    // Create Intersection Observer to detect when hero section is in view
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset animation by temporarily removing the class
          setTimeout(() => {
            const elements = document.querySelectorAll('.hero-animate');
            elements.forEach(el => {
              el.classList.remove('hero-animate');
              void el.offsetWidth; // Trigger reflow
              el.classList.add('hero-animate');
            });
          }, 100);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.current.observe(heroRef.current);
    }

    return () => {
      if (observer.current && heroRef.current) {
        observer.current.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className={`hero-animate ${isVisible ? 'animate' : ''}`}>Hi, I'm Djaber SEMAOUI</h1>
            <h3 className={`hero-animate ${isVisible ? 'animate' : ''}`}>Embedded Systems & AI Specialist, Frontend Developer, and Startup Founder</h3>
            <p className={`hero-animate ${isVisible ? 'animate' : ''}`}>I design and build beautiful, functional device prototypes, including IoT projects and custom solution devices, and I train powerful AI models with a strong focus on user experience and clean, maintainable code.</p>
            <div className={`hero-buttons hero-animate ${isVisible ? 'animate' : ''}`}>
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={profilePhoto} 
              alt="Djaber Semaoui" 
              className={`profile-photo hero-animate ${isVisible ? 'animate' : ''}`} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

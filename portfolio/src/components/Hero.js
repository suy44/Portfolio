// src/components/Hero.js
import React, { useEffect, useRef, useState } from 'react';
import profilePhoto from '../assets/profilPhoto.png';

const TYPING_STRINGS = [
  'Embedded Systems Engineer',
  'AI & Computer Vision Dev',
  'Frontend Developer',
  'Avionics & Drone Builder',
  'Startup Founder',
];

const useTypingEffect = (strings, speed = 80, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex % strings.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentString.slice(0, charIndex + 1));
        if (charIndex + 1 === currentString.length) {
          setTimeout(() => setIsDeleting(true), pause);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplayText(currentString.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex(s => s + 1);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings, speed, pause]);

  return displayText;
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const typingText = useTypingEffect(TYPING_STRINGS);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const current = heroRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  const techTags = ['Arduino', 'React', 'Python', 'ArduPilot', 'OpenCV', 'IoT'];

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      <div className="container">
        <div className="hero-content">

          {/* Text */}
          <div className="hero-text">
            <div className={`hero-animate ${isVisible ? 'animate' : ''}`}>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Available for freelance & collaboration
              </div>
            </div>

            <div className={`hero-animate ${isVisible ? 'animate' : ''}`}>
              <h1 className="hero-title">
                Hi, I'm{' '}
                <span className="name">Djaber SEMAOUI</span>
              </h1>
            </div>

            <div className={`hero-animate ${isVisible ? 'animate' : ''}`}>
              <div className="hero-typing-wrapper">
                <span className="hero-typing-prefix">$ role &gt;</span>
                <span className="hero-typing-text">{typingText}</span>
              </div>
            </div>

            <div className={`hero-animate ${isVisible ? 'animate' : ''}`}>
              <p className="hero-subtitle">
                I design and build device prototypes, IoT systems, and AI-powered solutions — combining hardware engineering with modern software development.
              </p>
            </div>

            <div className={`hero-animate ${isVisible ? 'animate' : ''}`}>
              <div className="hero-tags">
                {techTags.map(tag => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className={`hero-buttons hero-animate ${isVisible ? 'animate' : ''}`}>
              <a href="#projects" className="btn">
                <i className="bi bi-grid-3x3-gap-fill" />
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="bi bi-send" />
                Get In Touch
              </a>
            </div>

            <div className={`hero-socials hero-animate ${isVisible ? 'animate' : ''}`}>
              <a
                href="https://www.linkedin.com/in/djaber-semaoui/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href="mailto:djaber.semaoui@outlook.com"
                className="hero-social-link"
                aria-label="Email"
              >
                <i className="bi bi-envelope" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image-area">
            <div className={`profile-photo-wrapper hero-animate ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="profile-ring" />
              <img
                src={profilePhoto}
                alt="Djaber Semaoui"
                className="profile-photo"
              />

              {/* Floating badges */}
              <div className="profile-badge profile-badge-1">
                <span className="profile-badge-icon">🏆</span>
                <div className="profile-badge-info">
                  <span className="profile-badge-value">1st Place</span>
                  <span className="profile-badge-label">ARC Competition</span>
                </div>
              </div>

              <div className="profile-badge profile-badge-2">
                <span className="profile-badge-icon">🚀</span>
                <div className="profile-badge-info">
                  <span className="profile-badge-value">15+ Projects</span>
                  <span className="profile-badge-label">Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import accidenimg from '../assets/accident.png';
import drone from '../assets/Drone.jpg';
import cv from '../assets/cv.png';
import accid from '../assets/accid.png';
import portfolio from '../assets/port.png';
import WavezJ from '../assets/wavez.png';
import nancyRest from '../assets/nancy-restaurant.png';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Accident Tracking System Dashboard',
      category: 'web',
      image: accidenimg,
      desc: 'A fully functional Car tracking system dashboard with specific statistics and real-time graphs.',
      tech: ['React', 'Node.js', 'Python'],
      link: 'https://accident-tracking-system.onrender.com'
    },
    {
      id: 2,
      title: 'Accident Tracking Device',
      category: 'Embedded system',
      image: accid,
      desc: 'A fully functional device integrated with a dashboard, designed to prevent accidents and accurately track the car with GPS — even without internet.',
      tech: ['Arduino', 'Google Script', 'GPS'],
      link: 'https://accident-tracking-system.onrender.com'
    },
    {
      id: 3,
      title: 'Autonomous Drone',
      category: 'avionics',
      image: drone,
      desc: 'A self-built drone with autonomous navigation, GPS integration, and ground control using the ArduPilot/Mission Planner framework.',
      tech: ['ArduPilot', 'Mission Planner'],
      link: '#'
    },
    {
      id: 4,
      title: 'Computer Vision Sound Controller',
      category: 'AI',
      image: cv,
      desc: 'A touch-free system that uses camera-detected hand gestures to control audio functions in real time.',
      tech: ['OpenCV', 'Python'],
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      image: portfolio,
      desc: 'Designed and developed a visually engaging portfolio website with modern, responsive layout, smooth animations, and a user-friendly interface.',
      tech: ['React.js', 'CSS'],
      link: '#'
    },
    {
      id: 6,
      title: 'WaveZ Club Website',
      category: 'web',
      image: WavezJ,
      desc: 'Interactive website for Wavez University Club — a robotics and AI organization — featuring dynamic project showcases and engaging animations.',
      tech: ['Next.js', 'Tailwind CSS'],
      link: 'https://www.wavez.website'
    },
    {
      id: 7,
      title: "Nancy's Restaurant Landing Page",
      category: 'web',
      image: nancyRest,
      desc: 'A custom, responsive landing page designed and developed for a restaurant client, featuring a modern layout deployed on Vercel.',
      tech: ['React.js', 'Vercel'],
      link: 'https://restaurant-nu-rosy.vercel.app'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'Embedded system', label: 'Embedded' },
    { key: 'avionics', label: 'Avionics' },
    { key: 'AI', label: 'AI' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)' }}>
          Selected Work
        </h2>
        <p className="section-subtitle fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)', transitionDelay: '0.1s' }}>
          A mix of hardware, software, AI and web — each project solving a real problem.
        </p>
        
        <div className={`project-filters fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={`projects-grid fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          {filteredProjects.map((project) => (
            <a href={project.link} target={project.link !== '#' ? "_blank" : "_self"} rel="noreferrer" className="project-card surface-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">
                  {project.title} <i className="fa-solid fa-arrow-right"></i>
                </h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

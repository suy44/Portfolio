// src/components/Projects.js
import React, { useState } from 'react';
import accidenimg from '../assets/accident.png';
import drone from '../assets/Drone.jpg';
import cv from '../assets/cv.png';
import accid from '../assets/accid.png';
import portfolio from '../assets/port.png';
import WavezJ from '../assets/wavez.png';
import nancyRest from '../assets/nancy-restaurant.png';

const catColors = {
  web: { bg: 'rgba(79,142,247,0.15)', color: '#4f8ef7' },
  'Embedded system': { bg: 'rgba(0,151,157,0.15)', color: '#00979D' },
  avionics: { bg: 'rgba(16,185,129,0.15)', color: '#10b981' },
  AI: { bg: 'rgba(255,212,59,0.15)', color: '#FFD43B' },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Accident Tracking System Dashboard',
      category: 'web',
      image: accidenimg,
      description: 'A fully functional Car tracking system dashboard with specific statistics and real-time graphs.',
      technologies: ['React', 'Node.js', 'Python'],
      link: 'https://accident-tracking-system.onrender.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Accident Tracking Device',
      category: 'Embedded system',
      image: accid,
      description: 'A fully functional device integrated with a dashboard, designed to prevent accidents and accurately track the car with GPS — even without internet.',
      technologies: ['Arduino', 'Google Script', 'GPS'],
      link: 'https://accident-tracking-system.onrender.com',
    },
    {
      id: 3,
      title: 'Autonomous Drone',
      category: 'avionics',
      image: drone,
      description: 'A self-built drone with autonomous navigation, GPS integration, and ground control using the ArduPilot/Mission Planner framework.',
      technologies: ['ArduPilot', 'Mission Planner'],
      link: '#',
    },
    {
      id: 4,
      title: 'Computer Vision Sound Controller',
      category: 'AI',
      image: cv,
      description: 'A touch-free system that uses camera-detected hand gestures to control audio functions in real time.',
      technologies: ['OpenCV', 'Python'],
      link: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      image: portfolio,
      description: 'Designed and developed a visually engaging portfolio website with modern, responsive layout, smooth animations, and a user-friendly interface.',
      technologies: ['React.js', 'CSS'],
      link: '#',
    },
    {
      id: 6,
      title: 'WaveZ Club Website',
      category: 'web',
      image: WavezJ,
      description: 'Interactive website for Wavez University Club — a robotics and AI organization — featuring dynamic project showcases and engaging animations.',
      technologies: ['Next.js', 'Tailwind CSS'],
      link: 'https://www.wavez.website',
    },
    {
      id: 7,
      title: "Nancy's Restaurant Landing Page",
      category: 'web',
      image: nancyRest,
      description: 'A custom, responsive landing page designed and developed for a restaurant client, featuring a modern layout deployed on Vercel.',
      technologies: ['React.js', 'Vercel'],
      link: 'https://restaurant-nu-rosy.vercel.app',
    },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'Embedded system', label: 'Embedded' },
    { key: 'avionics', label: 'Avionics' },
    { key: 'AI', label: 'AI' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featuredProject = activeFilter === 'all'
    ? projects.find(p => p.featured)
    : null;

  const gridProjects = activeFilter === 'all'
    ? projects.filter(p => !p.featured)
    : filteredProjects;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A mix of hardware, software, AI and web — each project solving a real problem.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              id={`filter-${filter.key.replace(/\s/g, '-')}`}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured project */}
        {featuredProject && (
          <div className="project-featured">
            <div className="pf-image">
              <img src={featuredProject.image} alt={featuredProject.title} />
            </div>
            <div className="pf-content">
              <div className="pf-badge">✦ Featured Project · {featuredProject.category}</div>
              <h3 className="pf-title">{featuredProject.title}</h3>
              <p className="pf-desc">{featuredProject.description}</p>
              <div className="pf-tech">
                {featuredProject.technologies.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              {featuredProject.link !== '#' && (
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="pf-link">
                  Live Demo <i className="bi bi-arrow-right" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Projects grid */}
        <div className="projects-grid">
          {gridProjects.map(project => {
            const catStyle = catColors[project.category] || catColors.web;
            return (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span
                    className="project-cat-badge"
                    style={{ color: catStyle.color, borderColor: catStyle.color + '44', background: catStyle.bg }}
                  >
                    {project.category}
                  </span>
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          aria-label="View Live"
                        >
                          <i className="bi bi-box-arrow-up-right" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

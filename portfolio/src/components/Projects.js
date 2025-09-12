// src/components/Projects.js
import React, { useState } from 'react';
import accidenimg from '../assets/accident.png'
import drone from '../assets/Drone.jpg'
import cv from '../assets/cv.png'
import accid from '../assets/accid.png'
import portfolio from '../assets/port.png'
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Accident Tracking System Dashboard',
      category: 'web',
      image: accidenimg,
      description: 'A fully functional Car tracking system dashboard with specific statistics and graphs .',
      technologies: ['React', 'Node.js','Python'],
      link: 'https://accident-tracking-system.onrender.com',
    },
    {
      id: 2,
      title: 'Accident Tracking System Device',
      category: 'Embedded system',
      image: accid,
      description: 'A fully functional device integrated with a dashboard, designed to prevent accidents and accurately track the car with GPS, even without internet .',
      technologies: ['Arduino', 'google script'],
      link: 'https://accident-tracking-system.onrender.com',
    },
    {
      id: 3,
      title: 'Drone',
      category: 'avionics',
      image: drone,
      description: 'A self-built drone with autonomous navigation, GPS integration, and ground control using the ArduPilot/Mission Planner framework.                                                                                                                                                              ',
      technologies: ['Ardupilot Development'],
      link: '#',
    },
    {
      id: 4,
      title: 'Computer Vision–Based Sound Controller',
      category: 'AI',
      image: cv,
      description: 'A touch-free system that uses camera-detected gestures to control audio functions in real time.',
      technologies: ['OpenCV', 'Python'],
      link: '#',
    },
    {
      id:5,
      title:'Portfolio website',
      category:'web',
      image:portfolio,
      description: 'Designed and developed a visually engaging portfolio website that highlights projects with a modern, responsive layout, smooth animations, and a user-friendly interface to create an impactful first impression.',
      technologies:['React.js' , 'node.js'],
      link:'#',
    }
    
  ];

  const filters = ['all', 'Embedded system', 'web', 'avionics', 'AI'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

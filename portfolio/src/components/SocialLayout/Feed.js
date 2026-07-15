import React from 'react';
import PostCard from './PostCard';

import accidenimg from '../../assets/accident.png';
import drone from '../../assets/Drone.jpg';
import cv from '../../assets/cv.png';
import accid from '../../assets/accid.png';
import portfolio from '../../assets/port.png';
import WavezJ from '../../assets/wavez.png';
import nancyRest from '../../assets/nancy-restaurant.png';

const Feed = ({ activeTab, setActiveTab }) => {
  const projects = [
    {
      id: 1,
      title: 'Accident Tracking System Dashboard',
      image: accidenimg,
      desc: 'Just deployed the new Car tracking system dashboard! It includes specific statistics and real-time graphs. Extremely proud of the performance optimizations.',
      tech: ['React', 'Nodejs', 'Python'],
      link: 'https://accident-tracking-system.onrender.com',
      date: '2h'
    },
    {
      id: 2,
      title: 'Autonomous Drone Build',
      image: drone,
      desc: 'Completed the maiden flight of my self-built drone with autonomous navigation! Fully integrated GPS and ground control using the ArduPilot/Mission Planner framework.',
      tech: ['ArduPilot', 'MissionPlanner', 'Avionics'],
      link: '#',
      date: '1d'
    },
    {
      id: 3,
      title: 'WaveZ Club Website',
      image: WavezJ,
      desc: 'Shipped the new interactive website for Wavez University Club (our robotics and AI org). Check out the dynamic project showcases!',
      tech: ['Nextjs', 'TailwindCSS'],
      link: 'https://www.wavez.website',
      date: '3d'
    },
    {
      id: 4,
      title: 'Computer Vision Sound Controller',
      image: cv,
      desc: 'Why touch your computer when you can control it with gestures? Built a touch-free system that uses camera-detected hand gestures to control audio functions in real time.',
      tech: ['OpenCV', 'Python', 'AI'],
      link: '#',
      date: '1w'
    },
    {
      id: 5,
      title: 'Accident Tracking Hardware',
      image: accid,
      desc: 'The hardware side of the tracking system is done. A fully functional device designed to prevent accidents and accurately track the car with GPS — even without internet.',
      tech: ['Arduino', 'GoogleScript', 'Embedded'],
      link: 'https://accident-tracking-system.onrender.com',
      date: '2w'
    },
    {
      id: 6,
      title: "Nancy's Restaurant Web",
      image: nancyRest,
      desc: 'A custom, responsive landing page designed and developed for a local restaurant client. Modern layout deployed seamlessly.',
      tech: ['Reactjs', 'Vercel'],
      link: 'https://restaurant-nu-rosy.vercel.app',
      date: '3w'
    }
  ];

  const experience = [
    {
      id: 101,
      title: 'Lead Software Engineer',
      image: null,
      desc: 'Started a new position! Leading frontend development using React and optimizing backend services in Node.js.',
      tech: ['CareerUpdate', 'Engineering'],
      link: '#',
      date: 'Jan 2024'
    },
    {
      id: 102,
      title: 'Engineering Intern @ DataCorp',
      image: null,
      desc: 'Wrapping up an amazing internship building internal analytics pipelines using Python and React.',
      tech: ['Internship', 'DataAnalysis'],
      link: '#',
      date: 'Dec 2023'
    }
  ];

  const feedData = activeTab === 'projects' ? projects : experience;

  return (
    <div>
      <div className="feed-header">
        <h2 className="feed-title">Djaber's Portfolio</h2>
        <div className="feed-tabs">
          <div 
            className={`feed-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </div>
          <div 
            className={`feed-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </div>
        </div>
      </div>

      <div className="feed-content">
        {feedData.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="nodes-container">
        {/* Programming language nodes */}
        <div className="tech-node" style={{ '--x': '10%', '--y': '20%', '--delay': '0s' }}>JS</div>
        <div className="tech-node" style={{ '--x': '25%', '--y': '70%', '--delay': '2s' }}>PY</div>
        <div className="tech-node" style={{ '--x': '40%', '--y': '40%', '--delay': '4s' }}>Java</div>
        <div className="tech-node" style={{ '--x': '55%', '--y': '15%', '--delay': '6s' }}>React</div>
        <div className="tech-node" style={{ '--x': '70%', '--y': '60%', '--delay': '8s' }}>Node</div>
        <div className="tech-node" style={{ '--x': '85%', '--y': '30%', '--delay': '10s' }}>HTML</div>
        <div className="tech-node" style={{ '--x': '15%', '--y': '50%', '--delay': '12s' }}>CSS</div>
        <div className="tech-node" style={{ '--x': '30%', '--y': '10%', '--delay': '14s' }}>Django</div>
        <div className="tech-node" style={{ '--x': '45%', '--y': '80%', '--delay': '16s' }}>Ruby</div>
        <div className="tech-node" style={{ '--x': '60%', '--y': '45%', '--delay': '18s' }}>Vue</div>
        <div className="tech-node" style={{ '--x': '75%', '--y': '25%', '--delay': '20s' }}>TS</div>
        <div className="tech-node" style={{ '--x': '90%', '--y': '75%', '--delay': '22s' }}>Vite</div>
        
        {/* Connection lines */}
        <div className="connection-line" style={{ '--x1': '10%', '--y1': '20%', '--x2': '25%', '--y2': '70%' }}></div>
        <div className="connection-line" style={{ '--x1': '25%', '--y1': '70%', '--x2': '40%', '--y2': '40%' }}></div>
        <div className="connection-line" style={{ '--x1': '40%', '--y1': '40%', '--x2': '55%', '--y2': '15%' }}></div>
        <div className="connection-line" style={{ '--x1': '55%', '--y1': '15%', '--x2': '70%', '--y2': '60%' }}></div>
        <div className="connection-line" style={{ '--x1': '70%', '--y1': '60%', '--x2': '85%', '--y2': '30%' }}></div>
        <div className="connection-line" style={{ '--x1': '85%', '--y1': '30%', '--x2': '15%', '--y2': '50%' }}></div>
        <div className="connection-line" style={{ '--x1': '15%', '--y1': '50%', '--x2': '30%', '--y2': '10%' }}></div>
        <div className="connection-line" style={{ '--x1': '30%', '--y1': '10%', '--x2': '45%', '--y2': '80%' }}></div>
        <div className="connection-line" style={{ '--x1': '45%', '--y1': '80%', '--x2': '60%', '--y2': '45%' }}></div>
        <div className="connection-line" style={{ '--x1': '60%', '--y1': '45%', '--x2': '75%', '--y2': '25%' }}></div>
        <div className="connection-line" style={{ '--x1': '75%', '--y1': '25%', '--x2': '90%', '--y2': '75%' }}></div>
        <div className="connection-line" style={{ '--x1': '90%', '--y1': '75%', '--x2': '10%', '--y2': '20%' }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
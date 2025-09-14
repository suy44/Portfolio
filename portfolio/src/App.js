import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a dark mode preference saved
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If no saved preference, use system preference
    if (localStorage.getItem('darkMode') === null && systemPrefersDark) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update body class and localStorage when darkMode changes
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <button 
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        <i className={darkMode ? 'fas fa-lightbulb' : 'fas fa-moon'}></i>
      </button>
    </div>
  );
}

export default App;

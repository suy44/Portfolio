import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container contact-container">
        <div className={`contact-info fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title" style={{ marginBottom: '8px' }}>Get in touch</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>
            Have a question or want to work together? Leave a message here or connect via email.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="contact-method">
              <span>Email</span>
              <a href="mailto:djaber.semaoui@telecomnancy.eu">djaber.semaoui@telecomnancy.eu</a>
            </div>
            <div className="contact-method">
              <span>Location</span>
              <p>Nancy, France</p>
            </div>
          </div>
        </div>

        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <form className="contact-form surface-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

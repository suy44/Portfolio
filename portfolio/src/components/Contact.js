// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('https://formspree.io/f/mwpnyyqw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: 'bi-geo-alt',
      label: 'Location',
      value: 'Ghardaia, Algeria',
      href: null,
    },
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: 'djaber.semaoui@outlook.com',
      href: 'mailto:djaber.semaoui@outlook.com',
    },
    {
      icon: 'bi-telephone',
      label: 'Phone',
      value: '+213 673-584-646',
      href: 'tel:+213673584646',
    },
    {
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      value: '/in/djaber-semaoui/',
      href: 'https://www.linkedin.com/in/djaber-semaoui/',
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="contact-content">
          {/* Left: Info */}
          <div className="contact-info">
            <h3 className="contact-heading">
              Let's build something <span>great together</span>
            </h3>
            <p className="contact-subtext">
              Whether you're looking for an embedded systems engineer, AI developer, or a creative frontend developer — I'm here and available. Let's talk about your project!
            </p>

            <div className="contact-details">
              {contactItems.map((item, i) => {
                const Tag = item.href ? 'a' : 'div';
                const props = item.href
                  ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {};
                return (
                  <Tag key={i} className="contact-item" {...props}>
                    <div className="contact-item-icon">
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            {/* Availability badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
              borderRadius: '100px', padding: '10px 20px', marginTop: '8px'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'block', animation: 'pulse-dot 2s infinite' }} />
              <span style={{ fontSize: '0.88rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                Currently available for freelance work
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form">
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                ✅ Thank you! Your message has been sent. I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project collaboration / Question..."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending... ⏳</span>
                ) : (
                  <span>Send Message →</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:hello@raghavmaini.dev">Email</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <style>{`
        .contact-links {
          display: flex;
          gap: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .contact-links a {
          border-bottom: 1px solid transparent;
          padding-bottom: 0.25rem;
        }
        .contact-links a:hover {
          border-color: var(--text-color);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Contact;

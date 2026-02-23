import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Inquiries & Collaboration</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-tagline">
            Available for technical consultation, FEA mentorship, and aerospace structural analysis projects.
          </p>
          <div className="contact-links mono">
            <a href="mailto:maini.raghav@gmail.com" className="contact-link">
              <span className="link-label">MAIL:</span>
              <span className="link-value">maini.raghav@gmail.com</span>
            </a>
            <a href="https://github.com/mainiraghav-hash" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">GITHUB:</span>
              <span className="link-value">mainiraghav-hash</span>
            </a>
            <a href="https://www.linkedin.com/in/raghav-maini/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">LINKEDIN:</span>
              <span className="link-value">raghav-maini</span>
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .contact-tagline {
          font-size: 1.5rem;
          color: var(--text-primary);
          max-width: 600px;
          margin-bottom: 4rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.4;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-link {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition);
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
          width: fit-content;
        }
        .contact-link:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateX(4px);
        }
        .link-label {
          color: var(--highlight-color);
          font-weight: 800;
        }
        .link-value {
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
};

export default Contact;

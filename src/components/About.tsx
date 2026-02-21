import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
      <div className="about-content">
        <p className="about-summary">
          Lead Structural Analyst with a distinguished background in the aerospace, avionics, and automotive industries. I specialize in accelerating product development cycles by integrating cutting-edge Finite Element Analysis (FEA) with conventional analytical methods to support complex design initiatives.
        </p>
        <div className="about-details">
          <div className="about-item">
            <span className="about-bullet mono">→</span>
            <p>Proven success in leading high-stakes projects, such as analysis of industry-leading In-Flight Entertainment (IFE) devices and full-scale Crashworthiness analysis of aircraft.</p>
          </div>
          <div className="about-item">
            <span className="about-bullet mono">→</span>
            <p>Expert in the <span className="mono bold-text">Ansys suite, HyperWorks, and LS-Dyna</span> for non-linear explicit dynamics, linear static structural, and random vibration analysis.</p>
          </div>
          <div className="about-item">
            <span className="about-bullet mono">→</span>
            <p>Dedicated to fostering a culture of technical excellence through rigorous verification standards and mentorship of engineering teams.</p>
          </div>
        </div>
      </div>
      <style>{`
        .about-section {
          padding: 6rem 0;
        }
        .section-title {
          margin-bottom: 3rem;
          color: var(--accent-color);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 800;
        }
        .about-content {
          max-width: 900px;
        }
        .about-summary {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-primary);
          margin-bottom: 3rem;
          font-weight: 500;
        }
        .about-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .about-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .about-bullet {
          color: var(--accent-color);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .about-item p {
          font-size: 1.1rem;
          line-height: 1.5;
          color: var(--text-muted);
        }
        .bold-text {
          font-weight: 700;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
};

export default About;

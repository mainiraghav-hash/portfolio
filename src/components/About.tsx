import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
      <div className="about-content">
        <p className="about-summary">
          Lead Structural Analyst with <span className="highlight-text">10+ years of experience</span> driving product certification for industry-leading aerospace and automotive systems. Expert in <span className="mono bold-text">Finite Element Analysis (FEA)</span> specializing in accelerating development cycles through high-fidelity simulations and conventional hand calculations.
        </p>
        <div className="about-details">
          <div className="about-item">
            <span className="about-bullet mono">→</span>
            <p>Proven track record of steering complex projects, including the <span className="mono bold-text">Astrova system (100+ programs)</span> from initial concept to global regulatory compliance.</p>
          </div>
          <div className="about-item">
            <span className="about-bullet mono">→</span>
            <p>Architected a suite of <span className="mono bold-text">Python programs utilizing AI</span> to automate repetitive FEA and numerical calculation tasks, saving <span className="highlight-text">300+ man-hours annually</span>.</p>
          </div>
          <div className="about-item">
            <span className="about-bullet mono">→</span>
            <p>Expert in <span className="mono bold-text">Ansys Workbench, LS-Dyna, and HyperWorks</span> for non-linear explicit dynamics, linear static structural, and random vibration analysis.</p>
          </div>
        </div>
      </div>
      <style>{`
        .section-title {
          margin-bottom: 3rem;
          color: var(--accent-color);
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

import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Raghav Maini</h1>
      <p className="hero-description">
        Specializing in high-stakes aerospace projects, integrating cutting-edge 
        <span className="mono"> Finite Element Analysis (FEA) </span> 
        with conventional analytical methods to accelerate product development cycles.
      </p>
      <style>{`
        .hero {
          padding-top: var(--space-12);
          border-bottom: 1px solid var(--border-color);
        }
        .hero-title {
          font-weight: 800;
          letter-spacing: -0.05em;
          font-size: 3.5rem;
          color: var(--text-primary);
        }
        .hero-description {
          font-size: 1.25rem;
          max-width: 800px;
          line-height: 1.6;
          color: var(--text-muted);
          font-weight: 400;
        }
        .highlight-text {
          color: var(--highlight-color);
          font-weight: 700;
          padding: 0 4px;
        }
      `}</style>
    </section>
  );
};

export default Hero;

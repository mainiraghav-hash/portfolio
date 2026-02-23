import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Raghav Maini</h1>
      <style>{`
        .hero {
          border-bottom: 1px solid var(--border-color);
        }
        .hero-title {
          font-weight: 800;
          letter-spacing: -0.05em;
          font-size: 3.5rem;
          color: var(--text-primary);
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

import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Raghav Maini</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '1rem' }}>
        Senior Staff Structural Analyst at Panasonic Avionics Corporation
      </p>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px' }}>
        Specializing in high-stakes aerospace projects, integrating cutting-edge Finite Element Analysis (FEA) with conventional analytical methods to accelerate product development cycles.
      </p>
    </section>
  );
};

export default Hero;

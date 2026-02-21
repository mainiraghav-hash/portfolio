import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        Lead Structural Analyst with a distinguished background in aerospace, avionics, and automotive industry.
      </p>
      <ul className="summary-list">
        <li>Expert in accelerating product development cycles by integrating cutting-edge Finite Element Analysis (FEA) with conventional analytical methods to support complex design initiatives.</li>
        <li>Proven success in leading high-stakes projects, such as analysis of industry leading In-Flight Entertainment devices and full-scale Crashworthiness analysis of aircraft.</li>
      </ul>
      <style>{`
        .summary-list {
          list-style: disc;
          margin-left: 1.5rem;
          color: var(--text-muted);
        }
        .summary-list li {
          margin-bottom: 0.75rem;
        }
      `}</style>
    </section>
  );
};

export default About;

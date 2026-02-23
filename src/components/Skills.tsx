import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Finite Element Analysis & Core Skills',
      skills: ['Ansys Workbench', 'LS-Dyna', 'HyperWorks', 'Optistruct', 'SimLab', 'Stress Analysis', 'Mechanics of Materials', 'Vibration (Modal, Harmonic, Random)', 'Mass Optimization', 'Multiphysics']
    },
    {
      title: 'Automation & LLMs',
      skills: ['Python (Pandas, NumPy)', 'Machine Learning', 'Pattern Recognition', 'API Integration', 'Computer Vision', 'Scripted Meshing', 'Gemini (and CLI)', 'ChatGPT', 'Claude']
    },
    {
      title: 'Standards & Industry',
      skills: ['RTCA DO-160G', 'FAR 25.562', 'SAE ARP6330', 'ASTM Standards', 'AS9100', 'MIL-STD-810H', 'Aerospace Engineering', 'Avionics', 'Automotive Engineering']
    },
    {
      title: 'Leadership & Methodology',
      skills: ['Engineering Mentorship', 'Product Development', 'Resource Planning', 'Design Reviews (PDR/CDR)', 'Root-Cause Analysis', 'Requirements Traceability', 'Cross-functional Collaboration']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category tech-border">
            <h3 className="category-title">{category.title}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-tag mono">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .skill-category {
          padding: 2rem;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        .skill-category:nth-child(1) {
          grid-column: span 2;
        }
        .category-title {
          color: var(--accent-color);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 800;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          list-style: none;
        }
        .skill-tag {
          font-size: 0.8125rem;
          padding: 0.5rem 1rem;
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 2px;
          color: var(--text-primary);
          transition: var(--transition);
          font-weight: 500;
        }
        .skill-tag:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          background: rgba(2, 132, 199, 0.05);
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-category:nth-child(1) {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

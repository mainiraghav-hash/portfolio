import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Structural Analysis & CAE',
      skills: ['Ansys', 'LS-Dyna', 'Altair HyperWorks', 'FEA', 'Non-linear Dynamics', 'Crashworthiness Analysis', 'Structural Optimization']
    },
    {
      title: 'Programming & Data',
      skills: ['Python', 'Large Language Models', 'Data Analysis', 'Automation Scripts']
    },
    {
      title: 'Industry Expertise',
      skills: ['Aerospace Engineering', 'Avionics', 'Automotive Engineering', 'Product Development Lifecycle']
    }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .skill-category h3 {
          font-size: 1rem;
          color: var(--text-color);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skill-tag {
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .skill-tag:hover {
          border-color: var(--text-color);
          color: var(--text-color);
        }
      `}</style>
    </section>
  );
};

export default Skills;

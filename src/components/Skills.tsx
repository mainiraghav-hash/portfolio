import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Structural Analysis & CAE',
      skills: ['Ansys', 'LS-Dyna', 'Altair HyperWorks', 'FEA', 'Non-linear Dynamics', 'Crashworthiness Analysis', 'Structural Optimization', 'Modal & Vibration Analysis', 'Fatigue & Fracture Mechanics', 'Thermal-Structural Coupling', 'RTCA DO-160G', 'FAR 25.562', 'SAE ARP6330A', 'SAE AIR6908A']
    },
    {
      title: 'Programming & Data',
      skills: ['Python', 'Large Language Models', 'Data Analysis', 'Automation Scripts', 'Version Control (Git)']
    },
    {
      title: 'Industry & Design',
      skills: ['Aerospace Engineering', 'Avionics', 'Automotive Engineering', 'Product Development Lifecycle', 'Technical Documentation', 'Design Reviews']
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
          border-color: #2E5BFF;
          color: #2E5BFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(46, 91, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Skills;

import React from 'react';

const Skills = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js',
    'Vanilla CSS', 'UI Design', 'API Design'
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-tag">
            {skill}
          </li>
        ))}
      </ul>
      <style>{`
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-tag {
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Skills;

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      role: 'Senior Frontend Developer',
      period: 'Jan 2023 - Present',
      description: 'Leading the development of a high-performance analytics dashboard, focusing on user experience and real-time data visualization.',
      achievements: [
        'Reduced load times by 40% through code splitting and efficient state management.',
        'Mentored junior developers and established frontend best practices.',
      ],
    },
    {
      company: 'Creative Solutions Agency',
      role: 'Full Stack Engineer',
      period: 'Jun 2021 - Dec 2022',
      description: 'Developed and maintained various client-facing web applications using React, Node.js, and PostgreSQL.',
      achievements: [
        'Architected a custom CMS that improved content update efficiency by 50%.',
        'Implemented a comprehensive automated testing suite, increasing code coverage to 85%.',
      ],
    },
    {
      company: 'StartUp Hub',
      role: 'Junior Web Developer',
      period: 'Aug 2020 - May 2021',
      description: 'Assisted in building responsive landing pages and internal tools for a growing startup ecosystem.',
      achievements: [
        'Collaborated with designers to ensure pixel-perfect implementation of UI/UX designs.',
        'Optimized mobile responsiveness for multiple high-traffic websites.',
      ],
    },
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-description">{exp.description}</p>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .experience-item {
          display: flex;
          flex-direction: column;
        }
        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.25rem;
        }
        .experience-header h3 {
          font-size: 1.25rem;
          margin-bottom: 0;
        }
        .experience-period {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .experience-company {
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.75rem;
        }
        .experience-description {
          margin-bottom: 1rem;
        }
        .experience-achievements {
          list-style: disc;
          margin-left: 1.25rem;
          color: var(--text-muted);
          font-size: 0.9375rem;
        }
        .experience-achievements li {
          margin-bottom: 0.5rem;
        }
        @media (max-width: 600px) {
          .experience-header {
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

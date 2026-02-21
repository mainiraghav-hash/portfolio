import React from 'react';

const Experience = () => {
  const employers = [
    {
      company: 'Panasonic Avionics Corporation',
      location: 'Irvine, CA',
      roles: [
        {
          title: 'Senior Staff Structural Analyst, Level 4',
          period: 'Jun 2024 - Present',
          description: 'Leading structural analysis for next-generation onboard compute solutions (Converix). Ensuring product certification via RTCA DO-160G and mentoring engineering teams.',
        },
        {
          title: 'Staff Structural Analyst, Level 3',
          period: 'Jun 2022 - Jun 2024',
          description: 'Spearheaded structural analysis for Astrova IFE systems. Performed complex dynamic impact (LS-Dyna) and vibration analysis. Contributed to SAE industry standards.',
        },
        {
          title: 'Staff Structural Analyst, Level 2',
          period: 'Mar 2019 - Jun 2022',
          description: 'Managed dynamic impact testing and certification for IFE monitors. Conducted comprehensive FEA including random vibration and harmonic analysis.',
        }
      ]
    },
    {
      company: 'National Institute for Aviation Research',
      location: 'Wichita, KS',
      roles: [
        {
          title: 'Research Associate',
          period: 'Jan 2018 - Mar 2019',
          description: 'Led CAE team for full-assembly non-linear dynamic simulations. Focused on aircraft seat FE modeling for FAR 25.562 occupant survivability compliance.',
        },
        {
          title: 'Graduate Research Assistant',
          period: 'Apr 2016 - Dec 2017',
          description: 'Executed linear and non-linear simulations using explicit/implicit solvers for high-fidelity aerospace structural integrity analysis.',
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="bento-grid">
        {employers.map((employer, idx) => (
          <div key={idx} className="bento-box tech-border">
            <div className="box-header">
              <h3 className="company-name">{employer.company}</h3>
              <span className="location mono">{employer.location}</span>
            </div>
            <div className="roles-list">
              {employer.roles.map((role, ridx) => (
                <div key={ridx} className="role-item">
                  <div className="role-header">
                    <span className="role-title">{role.title}</span>
                    <span className="role-period mono highlight-text">{role.period}</span>
                  </div>
                  <p className="role-description">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .experience-section {
          padding: 4rem 0;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .bento-box {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 2.5rem;
          transition: var(--transition);
        }
        .bento-box:hover {
          border-color: var(--accent-color);
        }
        .box-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .company-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.04em;
        }
        .location {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
        .roles-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .role-item {
          position: relative;
        }
        .role-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.75rem;
          gap: 1rem;
        }
        .role-title {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .role-period {
          font-size: 0.75rem;
          color: var(--text-muted);
          white-space: nowrap;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .role-period.highlight-text {
          color: var(--highlight-color);
        }
        .role-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        
        @media (max-width: 768px) {
          .box-header, .role-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          .role-period {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

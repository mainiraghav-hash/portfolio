import React from 'react';

const Experience = () => {
  const employers = [
    {
      company: 'Panasonic Avionics Corporation',
      location: 'Irvine, California',
      roles: [
        {
          title: 'Senior Staff Structural Analyst (Level 4)',
          period: 'Jun 2024 - Present',
          points: [
            'Spearheaded structural analysis for the Converix platform server, ensuring the next-generation onboard compute solution met rigorous standards for high-demand environments.',
            'Optimized design using Ansys suite and conventional methods for critical SSD/RAM module retention components, metallic sub-assemblies, and module latching features (RTCA DO-160G, ARINC 600).',
            'Mentored junior engineers on advanced simulation techniques such as non-linear explicit dynamics, linear static structural and random vibration.',
            'Architected a suite of Python programs utilizing Artificial Intelligence to automate repetitive FEA and numerical calculation tasks, saving 300+ man-hours annually.'
          ],
        },
        {
          title: 'Staff Structural Analyst (Levels 2 and 3)',
          period: 'Mar 2019 - Jun 2024',
          points: [
            'Led the end-to-end structural analysis efforts for Astrova, Panasonic\'s flagship in-flight entertainment system, resulting in selection by over 30 global airlines for 100+ unique programs.',
            'Performed dynamic impact analysis (HyperWorks, LS-Dyna), vibration analysis (Modal, Harmonic, Random Vibration in Ansys), and static structural analysis.',
            'Authored and contributed to key industry standards (SAE ARP6330A and AIR6908A) regarding the impact characteristics of IFE monitors.',
            'Designing and executing test plans for dynamic impact of IFE monitors from concept stages to certification.'
          ],
        }
      ]
    },
    {
      company: 'National Institute for Aviation Research (NIAR)',
      location: 'Wichita, Kansas',
      roles: [
        {
          title: 'Research Associate and Graduate Research Assistant',
          period: 'Apr 2016 - Mar 2019',
          points: [
            'Managed a CAE team of graduate and undergraduate engineers, overseeing model generation and non-linear dynamic simulations for full-scale aircraft assembly crashworthiness models.',
            'Generated high-fidelity FE models for aircraft seating to satisfy FAR 25.562 emergency landing regulations, directly impacting occupant survivability research.'
          ],
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
                  <ul className="role-points">
                    {role.points.map((point, pidx) => (
                      <li key={pidx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
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
          margin-bottom: 1rem;
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
        .role-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .role-points li {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
          position: relative;
          padding-left: 1.5rem;
        }
        .role-points li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
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

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'In-Flight Entertainment Devices',
      description: 'Lead structural analysis and design optimization for next-generation IFE systems, ensuring compliance with rigorous aerospace safety standards.',
      link: '#',
      span: '2x2',
      tech: ['FEA', 'Structural Optimization', 'Ansys']
    },
    {
      title: 'Crashworthiness Analysis',
      description: 'Full-scale simulation of aircraft impact scenarios to evaluate occupant safety and structural integrity during extreme conditions.',
      link: '#',
      span: '2x2',
      tech: ['LS-Dyna', 'Non-linear Dynamics', 'Aerospace']
    },
    {
      title: 'Automotive Light-Weighting',
      description: 'Structural optimization of vehicle chassis components to reduce weight while maintaining safety performance.',
      link: '#',
      span: '1x1',
      tech: ['Altair HyperWorks', 'Automotive']
    },
    {
      title: 'Avionics Thermal Analysis',
      description: 'Integrated FEA & CFD approach to manage heat dissipation in high-density avionics enclosures.',
      link: '#',
      span: '1x1',
      tech: ['Thermal Simulation', 'Avionics']
    },
    {
      title: 'AI-Driven Design Assistant',
      description: 'Leveraging LLMs to automate structural analysis workflows and design reviews.',
      link: '#',
      span: '1x1',
      tech: ['Python', 'LLMs', 'Automation']
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Key Projects</h2>
      <div className="bento-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`bento-card ${project.span === '2x2' ? 'span-2x2' : 'span-1x1'}`}
          >
            <div className="card-content">
              <span className="card-tech-badge">{project.tech[0]}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-footer">
                <div className="card-tech-tags">
                  {project.tech.slice(1).map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Case Study →</a>
              </div>
            </div>
            <div className="card-glass-overlay"></div>
          </div>
        ))}
      </div>
      <style>{`
        .projects-section {
          padding: 6rem 0;
          background-color: var(--bg-color);
        }
        .section-title {
          margin-bottom: 3rem;
          color: var(--text-color);
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 1.5rem;
        }
        .bento-card {
          position: relative;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: var(--text-color);
        }
        .bento-card:hover {
          border-color: #2E5BFF; /* Electric Cobalt */
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 30px rgba(46, 91, 255, 0.1);
        }
        .bento-card:hover .card-title {
          color: #2E5BFF;
        }
        .span-2x2 {
          grid-column: span 2;
          grid-row: span 2;
        }
        .span-1x1 {
          grid-column: span 1;
          grid-row: span 1;
        }
        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .card-tech-badge {
          font-size: 0.75rem;
          color: #2E5BFF;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .card-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .card-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text-muted);
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }
        .card-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .card-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-muted);
        }
        .project-link {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
          margin-top: 0.5rem;
        }
        .project-link:hover {
          color: #2E5BFF;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: auto;
          }
          .span-2x2, .span-1x1 {
            grid-column: span 1;
            grid-row: auto;
          }
          .bento-card {
            min-height: 300px;
          }
        }
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card {
            min-height: auto;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

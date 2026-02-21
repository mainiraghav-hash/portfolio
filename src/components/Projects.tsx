import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Aircraft Crashworthiness Analysis',
      description: 'Comprehensive simulation of high-velocity impact scenarios for commercial aircraft structures. Detailed modeling of non-linear material behavior, large deformations, and dynamic loading conditions to ensure occupant safety.',
      link: '#',
      span: '2x2',
      tech: ['LS-Dyna', 'Non-linear Dynamics', 'Impact Physics'],
      details: [
        'Integrated multi-physics approach: Structural, Dynamic, and Thermal coupling.',
        'Achieved 95% correlation with physical test data, ensuring high-fidelity results.',
        'Improved Margin of Safety (MoS) by 15% through optimized load paths.',
        'Compliance with FAA/EASA Part 25 regulatory standards for crashworthiness.'
      ],
      imageLabel: 'FEA Mesh Visualization'
    },
    {
      title: 'Next-Gen In-Flight Entertainment (IFE)',
      description: 'Structural optimization and design for high-density avionics enclosures. Focused on weight reduction while maintaining rigorous shock and vibration requirements.',
      link: '#',
      span: '2x2',
      tech: ['Ansys', 'Vibration Analysis', 'Avionics'],
      details: [
        'Weight reduction of 20% achieved using topology optimization.',
        'Ensured zero structural failures during DO-160G qualification testing.',
        'Managed complex thermal-structural coupling for electronic cooling.'
      ]
    },
    {
      title: 'Automotive Chassis Light-Weighting',
      description: 'Structural optimization of body-in-white (BIW) components for an electric vehicle platform.',
      link: '#',
      span: '1x1',
      tech: ['Altair HyperWorks', 'Automotive'],
      details: [
        'Reduced component mass by 12% without compromising torsional stiffness.'
      ]
    },
    {
      title: 'Avionics Enclosure Cooling',
      description: 'Thermal-structural analysis of high-power avionics units for military aircraft.',
      link: '#',
      span: '1x1',
      tech: ['Thermal Simulation', 'Avionics'],
      details: [
        'Optimized heat sink geometry for 30% improved heat dissipation.'
      ]
    },
    {
      title: 'AI Workflow Automation',
      description: 'Python-based automation for structural analysis reporting and design validation.',
      link: '#',
      span: '1x1',
      tech: ['Python', 'Automation', 'LLMs'],
      details: [
        'Automated 80% of routine report generation tasks using custom scripts.'
      ]
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
              
              {project.details && (
                <ul className="project-details-list">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}

              {project.imageLabel && (
                <div className="mesh-placeholder">
                  <div className="mesh-grid"></div>
                  <span>{project.imageLabel}</span>
                </div>
              )}

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
          grid-auto-rows: 250px;
          gap: 1.5rem;
        }
        .bento-card {
          position: relative;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: var(--text-color);
        }
        .bento-card:hover {
          border-color: #2E5BFF;
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 10px 30px rgba(46, 91, 255, 0.1);
        }
        .bento-card:hover .card-title {
          color: #2E5BFF;
        }
        .span-2x2 {
          grid-column: span 2;
          grid-row: span 3;
        }
        .span-1x1 {
          grid-column: span 1;
          grid-row: span 1.5;
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
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          transition: color 0.3s ease;
        }
        .card-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text-color);
          margin-bottom: 1.5rem;
        }
        .project-details-list {
          list-style: none;
          margin-bottom: 2rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        .project-details-list li {
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.25rem;
        }
        .project-details-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #2E5BFF;
        }
        .mesh-placeholder {
          background: rgba(0, 0, 0, 0.05);
          border: 1px dashed var(--border-color);
          border-radius: 8px;
          height: 150px;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .mesh-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(46, 91, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 91, 255, 0.1) 1px, transparent 1px);
          background-size: 10px 10px;
        }
        .mesh-placeholder span {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 1;
        }
        .card-footer {
          margin-top: auto;
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
          font-weight: 700;
          color: var(--text-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
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
            min-height: auto;
          }
        }
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  span: string;
  tech: string[];
  details?: string[];
  imageLabel?: string;
  images?: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Converix Platform Server',
      description: 'Next-generation onboard compute solution designed for modern aviation. Focused on high-fidelity structural analysis for critical SSD/RAM module retention and metallic sub-assemblies.',
      link: '#',
      span: '2x2',
      tech: ['Ansys', 'RTCA DO-160G', 'Module Retention'],
      details: [
        'Optimized critical module latching features for extreme aviation environments.',
        'Ensured full product certification under RTCA DO-160G standards.',
        'Conducted advanced non-linear simulations for SSD/RAM retention integrity.',
        'Supporting Airbus "Connected Aircraft" vision via strategic partnership.'
      ],
      imageLabel: 'Converix Platform Simulation',
      images: ['/images/converix-1.png', '/images/converix-2.png']
    },
    {
      title: 'Astrova IFE System',
      description: 'Industry-leading in-flight entertainment system selected by over 30 global airlines. Conducted comprehensive dynamic impact and vibration analysis for over 100 unique airline programs.',
      link: '#',
      span: '2x2',
      tech: ['LS-Dyna', 'Dynamic Impact', 'SAE ARP6330A'],
      details: [
        'Validated dynamic impact characteristics for 100+ unique monitor configurations.',
        'Contributed to the development of SAE ARP6330A and AIR6908A standards.',
        'Performed modal, harmonic, and random vibration analysis for global deployment.'
      ],
      imageLabel: 'Astrova IFE Simulation',
      images: ['/images/astrova-1.png', '/images/astrova-2.png', '/images/astrova-3.png']
    },
    {
      title: 'Aircraft Seat Survivability',
      description: 'FE modeling and non-linear dynamic simulation of aircraft seats for occupant survivability studies.',
      link: '#',
      span: '1x1',
      tech: ['FAR 25.562', 'LS-Dyna'],
      details: [
        'Ensured compliance with FAR 25.562 emergency landing regulations.',
        'Simulated complex occupant-to-seat interactions during high-velocity impact.'
      ]
    },
    {
      title: 'Avionics Enclosure Testing',
      description: 'Specialized structural testing and FEA activities for Panasonic products from concept to certification.',
      link: '#',
      span: '1x1',
      tech: ['Structural Testing', 'FEA'],
      details: [
        'Executed 3PT-4PT bend tests, tensile, and compressive structural testing.'
      ]
    },
    {
      title: 'CAE Workflow Management',
      description: 'Leading CAE teams in high-fidelity model generation and non-linear simulation for full assembly models.',
      link: '#',
      span: '1x1',
      tech: ['HyperWorks', 'Team Lead'],
      details: [
        'Coordinated between test engineers and CAE analysts for certification reporting.'
      ]
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card tech-border ${project.span === '2x2' ? 'span-2x2' : 'span-1x1'}`}
          >
            <div className="project-content">
              <span className="mono tech-badge highlight-text">{project.tech[0]}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {project.details && (
                <ul className="details-list">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}

              {project.images ? (
                <div className="fea-viewport images-grid">
                  {project.images.map((img, i) => (
                    <div key={i} className="viewport-image-container">
                      <img src={img} alt={`Simulation ${i + 1}`} className="viewport-image" />
                    </div>
                  ))}
                </div>
              ) : project.imageLabel && (
                <div className="fea-viewport">
                  <div className="viewport-grid"></div>
                  <span className="mono viewport-label">{project.imageLabel}</span>
                </div>
              )}

              <div className="project-footer">
                <div className="tech-tags">
                  {project.tech.slice(1).map((t, i) => (
                    <span key={i} className="tech-tag mono">{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link mono">DATA_REPORT_01 →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .projects-section {
          padding: 6rem 0;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .project-card {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 2.5rem;
          transition: var(--transition);
        }
        .project-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-4px);
        }
        .span-2x2 {
          grid-column: span 2;
        }
        .tech-badge {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          display: block;
        }
        .project-title {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }
        .project-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-primary);
          margin-bottom: 2rem;
          font-weight: 500;
        }
        .details-list {
          list-style: none;
          margin-bottom: 2.5rem;
          font-size: 0.9375rem;
          color: var(--text-muted);
        }
        .details-list li {
          margin-bottom: 0.75rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .details-list li::before {
          content: '↳';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: 800;
        }
        .fea-viewport {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          height: 280px;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          padding: 1rem;
          width: 100%;
        }
        .viewport-image-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .viewport-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 2px;
        }
        .viewport-label.overlay {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(248, 250, 252, 0.9);
          color: var(--text-primary);
          padding: 4px 8px;
          border: 1px solid var(--border-color);
          pointer-events: none;
          font-size: 0.65rem;
        }
        .viewport-grid {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .viewport-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #38BDF8;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          z-index: 1;
        }
        .project-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .tech-tag {
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 2px;
          color: var(--text-muted);
          font-weight: 600;
        }
        .project-link {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--highlight-color);
          letter-spacing: 0.05em;
        }
        .highlight-text {
          color: var(--highlight-color);
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .span-2x2 {
            grid-column: span 1;
          }
          .project-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

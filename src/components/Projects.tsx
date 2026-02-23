import React from 'react';

interface Project {
  title: string;
  description: string;
  link?: string;
  links?: { label: string; url: string }[];
  span: string;
  tech: string[];
  details?: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Converix Platform Server',
      description: 'Next-generation onboard compute solution for high-demand environments. Focused on structural analysis for critical SSD/RAM module retention and metallic sub-assemblies.',
      links: [
        { label: 'PRESS_RELEASE', url: 'https://www.panasonic.aero/press/panasonic-avionics-introduces-converix' },
        { label: 'AIRBUS_PARTNERSHIP', url: 'https://www.aircraft.airbus.com/en/newsroom/web-story/2025-04-airbus-and-panasonic-avionics-to-co-develop-the-future-connected' },
        { label: 'AIX_LAUNCH', url: 'https://economyclassandbeyond.boardingarea.com/2025/04/09/aix25-panasonic-avionics-launches-its-new-onboard-server-converix/' }
      ],
      span: '2x2',
      tech: ['Ansys', 'RTCA DO-160G', 'ARINC 600'],
      details: [
        'Optimized critical module latching features for extreme aviation environments.',
        'Ensured full product certification under RTCA DO-160G and ARINC 600 standards.',
        'Conducted advanced non-linear simulations for SSD/RAM retention integrity.',
        'Architected AI-driven Python programs for certification automation.'
      ]
    },
    {
      title: 'Astrova IFE System',
      description: 'Panasonic flagship in-flight entertainment system resulting in selection by over 30 global airlines for 100+ unique programs.',
      links: [
        { label: 'PRESS_RELEASE', url: 'https://runwaygirlnetwork.com/2023/07/panasonic-avionics-astrova-ife/' },
        { label: 'LAUNCH_DETAILS', url: 'https://www.youtube.com/watch?v=RWbhr_Yp9Xk' },
        { label: 'JOURNEY_OF_ASTROVA', url: 'https://www.youtube.com/watch?si=E2mt1jvpjhVmt1_p&v=N6XhQ6HfhpU&feature=youtu.be' },
        { label: 'HISTORIC_MILESTONE', url: 'https://www.panasonic.aero/press/astrova-achieves-historic-milestone-with-one-hundredth-airline-program' }
      ],
      span: '2x2',
      tech: ['LS-Dyna', 'Dynamic Impact', 'SAE ARP6330A'],
      details: [
        'Validated dynamic impact characteristics for 100+ unique monitor configurations.',
        'Authored and contributed to SAE ARP6330A and AIR6908A industry standards.',
        'Performed complex vibration analysis (Modal, Harmonic, Random) in Ansys.'
      ]
    },
    {
      title: 'Aircraft Seat Survivability',
      description: 'High-fidelity FE modeling of aircraft seating to satisfy emergency landing regulations, impacting occupant survivability research.',
      link: '#',
      span: '1x1',
      tech: ['FAR 25.562', 'LS-Dyna'],
      details: [
        'Ensured compliance with FAR 25.562 emergency landing regulations.',
        'Simulated full-scale aircraft assembly crashworthiness models.'
      ]
    },
    {
      title: 'AI Automation for FEA',
      description: 'Suite of Python programs utilizing AI to automate repetitive FEA and numerical calculation tasks.',
      link: '#',
      span: '1x1',
      tech: ['Python', 'AI/LLM', 'Automation'],
      details: [
        'Saving 300+ man-hours annually for certification tasks.',
        'Accelerated certification for the Converix platform server.'
      ]
    }
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

              <div className="project-footer">
                <div className="tech-tags">
                  {project.tech.slice(1).map((t, i) => (
                    <span key={i} className="tech-tag mono">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links ? (
                    project.links.map((link, i) => (
                      <a key={i} href={link.url} className="project-link mono">{link.label} →</a>
                    ))
                  ) : (
                    <a href={project.link} className="project-link mono">DATA_REPORT →</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
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
        .project-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 1rem;
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
        .project-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .project-link {
          font-size: 0.7rem;
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
          }
          .project-links {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

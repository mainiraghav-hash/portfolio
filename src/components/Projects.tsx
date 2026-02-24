import React from 'react';
import styles from './Projects.module.css';

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
      tech: ['Ansys'],
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
      tech: ['LS-Dyna'],
      details: [
        'Validated dynamic impact characteristics for 100+ unique monitor configurations.',
        'Authored and contributed to SAE ARP6330A and AIR6908A industry standards.',
        'Performed complex vibration analysis (Modal, Harmonic, Random) in Ansys.'
      ]
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Key Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`${styles.projectCard} tech-border ${project.span === '2x2' ? styles.span2x2 : styles.span1x1}`}
          >
            <div className={styles.projectContent}>
              <span className={`mono ${styles.techBadge} ${styles.highlightText}`}>{project.tech[0]}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              {project.details && (
                <ul className={styles.detailsList}>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}

              <div className={styles.projectFooter}>
                <div className={styles.techTags}>
                  {project.tech.slice(1).map((t, i) => (
                    <span key={i} className={`${styles.techTag} mono`}>{t}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.links ? (
                    project.links.map((link, i) => (
                      <a key={i} href={link.url} className={`${styles.projectLink} mono`}>{link.label} →</a>
                    ))
                  ) : (
                    <a href={project.link} className={`${styles.projectLink} mono`}>DATA_REPORT →</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import styles from './Experience.module.css';

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
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <div className={styles.bentoGrid}>
        {employers.map((employer, idx) => (
          <div key={idx} className={`${styles.bentoBox} tech-border`}>
            <div className={styles.boxHeader}>
              <h3 className={styles.companyName}>{employer.company}</h3>
              <span className={`${styles.location} mono`}>{employer.location}</span>
            </div>
            <div className={styles.rolesList}>
              {employer.roles.map((role, ridx) => (
                <div key={ridx} className={styles.roleItem}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>{role.title}</span>
                    <span className={`${styles.rolePeriod} mono ${styles.highlightText}`}>{role.period}</span>
                  </div>
                  <ul className={styles.rolePoints}>
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
    </section>
  );
};

export default Experience;

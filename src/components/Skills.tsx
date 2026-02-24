import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Finite Element Analysis & Core Skills',
      skills: ['Ansys Workbench', 'LS-Dyna', 'HyperWorks', 'Optistruct', 'SimLab', 'Stress Analysis', 'Mechanics of Materials', 'Vibration (Modal, Harmonic, Random)', 'Mass Optimization', 'Multiphysics']
    },
    {
      title: 'Automation & LLMs',
      skills: ['Python (Pandas, NumPy)', 'Machine Learning', 'Pattern Recognition', 'API Integration', 'Computer Vision', 'Scripted Meshing', 'Gemini (and CLI)', 'ChatGPT', 'Claude']
    },
    {
      title: 'Standards & Industry',
      skills: ['RTCA DO-160G', 'FAR 25.562', 'SAE ARP6330', 'ASTM Standards', 'AS9100', 'MIL-STD-810H', 'Aerospace Engineering', 'Avionics', 'Automotive Engineering']
    },
    {
      title: 'Leadership & Methodology',
      skills: ['Engineering Mentorship', 'Product Development', 'Resource Planning', 'Design Reviews (PDR/CDR)', 'Root-Cause Analysis', 'Requirements Traceability', 'Cross-functional Collaboration']
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Technical Expertise</h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={`${styles.skillCategory} tech-border`}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <ul className={styles.skillsList}>
              {category.skills.map((skill, i) => (
                <li key={i} className={`${styles.skillTag} mono`}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

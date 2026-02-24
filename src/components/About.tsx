import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
      <div className={styles.aboutContent}>
        <p className={styles.aboutSummary}>
          Lead Structural Analyst with <span className={styles.highlightText}>10+ years of experience</span> driving product certification for industry-leading aerospace and automotive systems. Expert in <span className="mono bold-text">Finite Element Analysis (FEA)</span> specializing in accelerating development cycles through high-fidelity simulations and conventional hand calculations.
        </p>
        <div className={styles.aboutDetails}>
          <div className={styles.aboutItem}>
            <span className={`${styles.aboutBullet} mono`}>→</span>
            <p>Proven track record of steering complex projects, including the <span className="mono bold-text">Astrova system (100+ programs)</span> from initial concept to global regulatory compliance.</p>
          </div>
          <div className={styles.aboutItem}>
            <span className={`${styles.aboutBullet} mono`}>→</span>
            <p>Architected a suite of <span className="mono bold-text">Python programs utilizing AI</span> to automate repetitive FEA and numerical calculation tasks, saving <span className={styles.highlightText}>300+ man-hours annually</span>.</p>
          </div>
          <div className={styles.aboutItem}>
            <span className={`${styles.aboutBullet} mono`}>→</span>
            <p>Expert in <span className="mono bold-text">Ansys Workbench, LS-Dyna, and HyperWorks</span> for non-linear explicit dynamics, linear static structural, and random vibration analysis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

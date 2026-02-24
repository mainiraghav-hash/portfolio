import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const education = [
    {
      degree: "Master's (M.S.) in Aerospace Engineering",
      school: "Wichita State University",
      location: "KS, United States",
      year: "2017",
      thesis: "https://example.com/ms-thesis" // Placeholder for [thesis]
    },
    {
      degree: "Bachelor's (B.S.) in Aerospace Engineering",
      school: "UPES",
      location: "Dehradun, India",
      year: "2014",
      thesis: "https://example.com/bs-thesis" // Placeholder for [thesis]
    }
  ];

  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.educationGrid}>
        {education.map((edu, idx) => (
          <div key={idx} className={`${styles.educationCard} tech-border`}>
            <div className={styles.eduHeader}>
              <h3 className={styles.degreeTitle}>{edu.degree}</h3>
              <span className={`${styles.eduYear} mono ${styles.highlightText}`}>{edu.year}</span>
            </div>
            <div className={styles.eduDetails}>
              <p className={styles.schoolName}>{edu.school}</p>
              <span className={`${styles.location} mono`}>{edu.location}</span>
            </div>
            <a href={edu.thesis} target="_blank" rel="noopener noreferrer" className={`${styles.thesisLink} mono`}>
              VIEW_THESIS_0{idx + 1} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

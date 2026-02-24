import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Inquiries & Collaboration</h2>
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <p className={styles.contactTagline}>
            Available for technical consultation, FEA mentorship, and aerospace structural analysis projects.
          </p>
          <div className={`${styles.contactLinks} mono`}>
            <a href="mailto:maini.raghav@gmail.com" className={styles.contactLink}>
              <span className={styles.linkLabel}>MAIL:</span>
              <span className={styles.linkValue}>maini.raghav@gmail.com</span>
            </a>
            <a href="https://github.com/mainiraghav-hash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span className={styles.linkLabel}>GITHUB:</span>
              <span className={styles.linkValue}>mainiraghav-hash</span>
            </a>
            <a href="https://www.linkedin.com/in/raghav-maini/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span className={styles.linkLabel}>LINKEDIN:</span>
              <span className={styles.linkValue}>raghav-maini</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

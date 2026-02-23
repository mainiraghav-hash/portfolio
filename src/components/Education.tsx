import React from 'react';

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
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, idx) => (
          <div key={idx} className="education-card tech-border">
            <div className="edu-header">
              <h3 className="degree-title">{edu.degree}</h3>
              <span className="edu-year mono highlight-text">{edu.year}</span>
            </div>
            <div className="edu-details">
              <p className="school-name">{edu.school}</p>
              <span className="location mono">{edu.location}</span>
            </div>
            <a href={edu.thesis} target="_blank" rel="noopener noreferrer" className="thesis-link mono">
              VIEW_THESIS_0{idx + 1} →
            </a>
          </div>
        ))}
      </div>
      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }
        .education-card {
          padding: 2.5rem;
          background: var(--bg-color);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition);
        }
        .education-card:hover {
          border-color: var(--accent-color);
        }
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .degree-title {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
        }
        .edu-year {
          font-size: 0.875rem;
          font-weight: 700;
        }
        .edu-details {
          margin-bottom: 2.5rem;
        }
        .school-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }
        .location {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .thesis-link {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-color);
          letter-spacing: 0.05em;
          margin-top: auto;
        }
        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;

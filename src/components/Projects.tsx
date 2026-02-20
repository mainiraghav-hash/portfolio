import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A minimalist task management application built with React.',
      link: '#',
    },
    {
      title: 'Digital Workspace',
      description: 'A clean, typography-focused note-taking system.',
      link: '#',
    },
    {
      title: 'Aesthetic API',
      description: 'A developer-first API for theme generation and color palettes.',
      link: '#',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
      <style>{`
        .project-grid {
          display: grid;
          gap: 2rem;
        }
        .project-card h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        .project-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-color);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.25rem;
        }
        .project-link:hover {
          border-color: var(--text-color);
        }
      `}</style>
    </section>
  );
};

export default Projects;

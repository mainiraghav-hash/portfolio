import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      role: 'Lead Structural Analyst',
      period: 'Jan 2023 - Present',
      description: 'Leading the development of high-performance analytics dashboards, focusing on user experience and real-time data visualization.',
      impact: 'Reduced load times by 40% through code splitting and efficient state management.',
      metrics: ['40% Reduction in Load Times', 'Team of 15+ Developers']
    },
    {
      company: 'Creative Solutions Agency',
      role: 'Senior Structural Engineer',
      period: 'Jun 2021 - Dec 2022',
      description: 'Developed and maintained various client-facing web applications using React, Node.js, and PostgreSQL.',
      impact: 'Architected a custom CMS that improved content update efficiency by 50%.',
      metrics: ['50% Efficiency Gain', '99.9% System Uptime']
    },
    {
      company: 'StartUp Hub',
      role: 'Junior Structural Analyst',
      period: 'Aug 2020 - May 2021',
      description: 'Assisted in building responsive landing pages and internal tools for a growing startup ecosystem.',
      impact: 'Optimized mobile responsiveness for multiple high-traffic websites.',
      metrics: ['Mobile traffic increased by 25%', 'Fastest onboarding award']
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const topOffset = rect.top;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the container has passed the center of the viewport
      const progress = Math.min(Math.max((-topOffset + viewportHeight / 2) / containerHeight, 0), 1);
      setScrollProgress(progress * 100);

      // Determine which card is active based on its position in the viewport
      const cards = containerRef.current.querySelectorAll('.timeline-card');
      let currentActive = 0;
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < viewportHeight / 2 + 100 && cardRect.bottom > viewportHeight / 2 - 100) {
          currentActive = index;
        }
      });
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="experience-timeline-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline-container" ref={containerRef}>
        <div className="timeline-progress-track">
          <div 
            className="timeline-progress-fill" 
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>
        
        <div className="timeline-list">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-card-wrapper ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="card-header">
                  <span className="card-period">{exp.period}</span>
                  <h3 className="card-title">{exp.role}</h3>
                  <p className="card-company">{exp.company}</p>
                </div>
                <p className="card-description">{exp.description}</p>
                <div className="card-impact">
                  <span className="impact-label">Impact</span>
                  <p className="impact-text">{exp.impact}</p>
                  <div className="impact-metrics">
                    {exp.metrics.map((metric, i) => (
                      <span key={i} className="metric-tag">{metric}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-timeline-section {
          padding: 6rem 0;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        .section-title {
          margin-bottom: 4rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 1.5rem;
          color: var(--text-color);
        }
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2rem;
        }
        .timeline-progress-track {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
        }
        .timeline-progress-fill {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          background: #2E5BFF;
          box-shadow: 0 0 15px #2E5BFF;
          transition: height 0.1s ease-out;
        }
        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        .timeline-card-wrapper {
          position: relative;
          transition: all 0.5s ease;
          opacity: 0.5;
        }
        .timeline-card-wrapper.active {
          opacity: 1;
          transform: scale(1.02);
        }
        .timeline-dot {
          position: absolute;
          left: -2rem;
          top: 1.5rem;
          width: 12px;
          height: 12px;
          background: var(--bg-color);
          border: 2px solid var(--border-color);
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 10;
          transition: all 0.3s ease;
        }
        .timeline-card-wrapper.active .timeline-dot {
          background: #2E5BFF;
          border-color: #2E5BFF;
          box-shadow: 0 0 10px #2E5BFF;
        }
        .timeline-card {
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.5rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.5s ease;
        }
        .timeline-card-wrapper.active .timeline-card {
          border-color: #2E5BFF;
          box-shadow: 0 0 30px rgba(46, 91, 255, 0.1);
        }
        .card-header {
          margin-bottom: 1.5rem;
        }
        .card-period {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.875rem;
          color: #2E5BFF;
          font-weight: 700;
          margin-bottom: 0.5rem;
          display: block;
        }
        .card-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--text-color);
        }
        .card-company {
          font-size: 1.125rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .card-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .card-impact {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .impact-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #2E5BFF;
          font-weight: 800;
        }
        .impact-text {
          font-size: 0.9375rem;
          color: var(--text-color);
          font-weight: 500;
        }
        .impact-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .metric-tag {
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
          background: rgba(46, 91, 255, 0.05);
          border: 1px solid rgba(46, 91, 255, 0.1);
          border-radius: 4px;
          color: #2E5BFF;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .timeline-container {
            padding-left: 1.5rem;
          }
          .timeline-card {
            padding: 1.5rem;
          }
          .card-title {
            font-size: 1.35rem;
          }
          .timeline-list {
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

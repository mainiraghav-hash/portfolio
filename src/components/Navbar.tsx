import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Professional Summary', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'experience', 'projects', 'education', 'skills', 'contact'];
      let currentActive = 'hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            currentActive = sectionId;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo mono">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>RM</a>
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links desktop-only mono">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button className="navbar-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-links mono">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 0 2rem;
          background: transparent;
        }
        .navbar.scrolled {
          height: 64px;
          background: rgba(248, 250, 252, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-logo a {
          font-size: 0.8125rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.1em;
          z-index: 1100;
        }
        .navbar-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .navbar-links a {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          position: relative;
        }
        .navbar-links a:hover,
        .navbar-links a.active {
          color: var(--accent-color);
        }
        .navbar-links a.active::after {
          content: ' ●';
          position: absolute;
          right: -8px;
          font-size: 8px;
          top: 0;
        }

        .navbar-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1100;
        }
        .hamburger-box {
          width: 24px;
          height: 18px;
          position: relative;
        }
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 24px;
          height: 2px;
          background-color: var(--text-primary);
          position: absolute;
          transition: transform 0.15s ease, background-color 0.15s ease;
        }
        .hamburger-inner {
          top: 50%;
          transform: translateY(-50%);
        }
        .hamburger-inner::before {
          content: "";
          top: -8px;
        }
        .hamburger-inner::after {
          content: "";
          top: 8px;
        }

        .menu-open .hamburger-inner {
          background-color: transparent;
        }
        .menu-open .hamburger-inner::before {
          transform: translateY(8px) rotate(45deg);
        }
        .menu-open .hamburger-inner::after {
          transform: translateY(-8px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-color);
          z-index: 1050;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-menu-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .mobile-menu-links a {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: color 0.3s ease;
        }
        .mobile-menu-links a:hover,
        .mobile-menu-links a.active {
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .navbar-links.desktop-only {
            display: none;
          }
          .navbar-hamburger {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

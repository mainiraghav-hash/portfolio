import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ResumePreview from './components/ResumePreview';
import FloatingParticles from './components/FloatingParticles';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="noise-overlay">
      <FloatingParticles count={25} />
      <Navbar onResumePreview={() => setResumeOpen(true)} />

      <main>
        <Hero />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Skills />

        <div className="section-divider" />
        <Projects />

        <div className="section-divider" />
        <Education />

        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <ResumePreview isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

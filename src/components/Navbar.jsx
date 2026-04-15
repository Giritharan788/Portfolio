import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, FileText } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';
import { useScrollProgress, useActiveSection } from '../hooks/useScrollEffects';

export default function Navbar({ onResumePreview }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(['about', 'skills', 'projects', 'education', 'contact']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #6366f1, #22d3ee, #34d399)',
          }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative group"
          >
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">G</span>
              <span className="text-accent-400">.</span>
              <span className="text-dark-300 text-sm font-medium ml-1 group-hover:text-dark-100 transition-colors">
                dev
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-dark-300 hover:text-dark-100'
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.06] rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}

            <div className="w-px h-5 bg-dark-600 mx-2" />

            <button
              onClick={onResumePreview}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-dark-300 hover:text-dark-100 transition-colors"
            >
              <FileText size={14} />
              Resume
            </button>

            <a
              href={personalInfo.resumeFile}
              download="Giritharan_S_Resume.pdf"
              className="flex items-center gap-1.5 ml-1 px-4 py-2 text-sm font-medium text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-all hover:shadow-lg hover:shadow-accent-500/20"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-dark-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/[0.04]"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-white bg-white/[0.06]'
                        : 'text-dark-300 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}

                <div className="pt-3 flex flex-col gap-2">
                  <button
                    onClick={() => { setIsOpen(false); onResumePreview(); }}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-dark-300 hover:text-white rounded-lg hover:bg-white/[0.03] transition-colors"
                  >
                    <FileText size={16} />
                    View Resume
                  </button>
                  <a
                    href={personalInfo.resumeFile}
                    download="Giritharan_S_Resume.pdf"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors"
                  >
                    <Download size={16} />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

import { motion } from 'framer-motion';
import { Heart, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-700/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Logo & description */}
          <div className="sm:col-span-1">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">G</span>
              <span className="text-accent-400">.</span>
              <span className="text-dark-400 text-sm font-medium ml-1">dev</span>
            </span>
            <p className="mt-3 text-sm text-dark-400 leading-relaxed">
              Building scalable web applications with modern technologies. Open to internship opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-dark-300 uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-dark-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dark-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <GithubIcon size={14} />
                  GitHub
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dark-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-dark-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail size={14} />
                  Email
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500 flex items-center gap-1">
            © {currentYear} Giritharan S. Built with
            <Heart size={10} className="text-accent-400 fill-accent-400" />
            using React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-dark-500 hover:text-white hover:bg-white/[0.04] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-dark-500 hover:text-white hover:bg-white/[0.04] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-dark-500 hover:text-white hover:bg-white/[0.04] transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

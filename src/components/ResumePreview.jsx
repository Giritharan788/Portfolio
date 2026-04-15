import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo, skillCategories, projects, education, training } from '../data/portfolio';

export default function ResumePreview({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-dark-950/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-x-[15%] lg:inset-y-8 z-[80] flex flex-col rounded-2xl overflow-hidden border border-dark-600/50 bg-dark-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700/50 bg-dark-800/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-sm font-medium text-dark-300">Resume Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.resumeFile}
                  download="Giritharan_S_Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors"
                >
                  <Download size={14} />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-dark-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
              <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden">
                <div className="p-8 md:p-10">
                  {/* Resume Header */}
                  <div className="text-center mb-6 pb-6 border-b-2 border-gray-200">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                      GIRITHARAN S
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Phone size={11} /> +91 7358035790
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail size={11} /> giritharan134@gmail.com
                      </span>
                      <span className="flex items-center gap-1">
                        <GithubIcon size={11} /> github.com/Giritharan788
                      </span>
                      <span className="flex items-center gap-1">
                        <LinkedinIcon size={11} /> linkedin.com/in/giritharan01
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> Chennai, India
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <ResumeSection title="SUMMARY">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Third-year B.Sc. CS student eager to build real-world web applications. Comfortable across the stack — React, Node.js, MongoDB, and AWS — and looking to contribute and grow through a full-stack or backend internship.
                    </p>
                  </ResumeSection>

                  {/* Education */}
                  <ResumeSection title="EDUCATION">
                    {education.map((edu) => (
                      <div key={edu.institution} className="mb-3 last:mb-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5">
                          <div>
                            <p className="text-sm font-bold text-gray-900">{edu.institution}, {edu.location}</p>
                            <p className="text-sm text-gray-700">
                              {edu.degree}
                              {edu.score ? ` — ${edu.score}` : ''}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 shrink-0">{edu.period}</p>
                        </div>
                      </div>
                    ))}
                  </ResumeSection>

                  {/* Technical Skills */}
                  <ResumeSection title="TECHNICAL SKILLS">
                    <div className="space-y-1.5 text-sm text-gray-700">
                      <p><strong>Languages:</strong> Java, JavaScript (ES6+), Python, C, HTML5, CSS3</p>
                      <p><strong>Frontend:</strong> React.js (Vite), Tailwind CSS</p>
                      <p><strong>Backend:</strong> Node.js, Express.js</p>
                      <p><strong>Database:</strong> MongoDB (indexing, schema design), Firebase Firestore</p>
                      <p><strong>DevOps / Tools:</strong> AWS EC2, Vercel, Firebase Hosting, Git, GitHub, DuckDNS</p>
                      <p><strong>CS Fundamentals:</strong> Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)</p>
                    </div>
                  </ResumeSection>

                  {/* Projects */}
                  <ResumeSection title="PROJECTS">
                    {/* Deadline Reminder */}
                    <div className="mb-5">
                      <p className="text-sm font-bold text-gray-900">
                        Deadline Reminder — Full-Stack Web App
                      </p>
                      <ul className="mt-1.5 space-y-1.5 text-sm text-gray-700 list-disc list-outside ml-4">
                        <li>Built a full-stack task manager (React, Node.js, Firebase) with secure auth, supporting real-time updates across multiple concurrent sessions.</li>
                        <li>Implemented CRUD operations with priority-based sorting, reducing task lookup time by organizing deadlines into 3 automated status categories (Overdue, Due Soon, Upcoming).</li>
                        <li>Designed a fully responsive UI deployed on Firebase Hosting with sub-2s load times.</li>
                      </ul>
                    </div>

                    {/* Gym Management */}
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Gym Management SaaS — Multi-Tenant Full-Stack Platform
                      </p>
                      <ul className="mt-1.5 space-y-1.5 text-sm text-gray-700 list-disc list-outside ml-4">
                        <li>Built a multi-tenant SaaS platform (React, Node.js, MongoDB) supporting 3+ independent gym tenants with role-based access for admins, trainers, and members.</li>
                        <li>Engineered tenant-isolation middleware and JWT auth ensuring zero cross-tenant data leakage across all active instances.</li>
                        <li>Integrated push notifications (OneSignal) and email alerts (Nodemailer), deployed backend on AWS EC2 behind Nginx with 99%+ uptime during testing.</li>
                        <li>Configured custom domain routing via DuckDNS, managed environment variables, and handled full production server setup independently.</li>
                      </ul>
                    </div>
                  </ResumeSection>

                  {/* Training */}
                  <ResumeSection title="TRAINING">
                    <p className="text-sm font-bold text-gray-900 mb-1.5">
                      Web-Development Training Programme — Webbed (Startup)
                    </p>
                    <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-outside ml-4">
                      <li>Firebase (Auth + Firestore + Hosting) — hands-on setup</li>
                      <li>Prompt engineering & AI-assisted development workflows</li>
                      <li>Figma-based UI/UX design basics</li>
                      <li>Deployed the Deadline Reminder project as the final deliverable</li>
                    </ul>
                  </ResumeSection>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ResumeSection({ title, children }) {
  return (
    <div className="mb-5">
      <h2 className="text-xs font-extrabold text-gray-900 tracking-widest uppercase border-b border-gray-300 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}

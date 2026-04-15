import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Zap, AlertTriangle } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="group"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent-500/20">
        {/* Gradient accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}66)`,
          }}
        />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {project.featured && (
                  <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-accent-500/10 text-accent-400 rounded-md border border-accent-500/20">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-dark-400 font-medium">{project.subtitle}</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-dark-200 rounded-lg border border-dark-600 hover:border-dark-400 hover:text-white bg-dark-800/50 transition-all"
                >
                  <GithubIcon size={14} />
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white rounded-lg bg-accent-500 hover:bg-accent-600 transition-all hover:shadow-lg hover:shadow-accent-500/20"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-dark-200 text-[15px] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-md text-dark-200 border border-dark-600/50"
                style={{
                  backgroundColor: `${project.accentColor}08`,
                  borderColor: `${project.accentColor}15`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key features (always visible) */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} className="text-accent-400" />
              <span className="text-xs font-semibold text-dark-300 uppercase tracking-wider">
                Key Features
              </span>
            </div>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-dark-200">
                  <span
                    className="mt-2 w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Expandable section */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {project.features.length > 3 && (
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-dark-200">
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Challenges */}
                <div className="pt-4 border-t border-dark-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={14} className="text-amber-400" />
                    <span className="text-xs font-semibold text-dark-300 uppercase tracking-wider">
                      Challenges Solved
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-dark-300">
                        <span className="mt-2 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand/Collapse button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent-400 hover:text-accent-300 transition-colors"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                Show More <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-400/[0.03] rounded-full blur-[140px]" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionHeading
          label="Projects"
          title="What I've built"
          description="Production-ready applications that solve real problems."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

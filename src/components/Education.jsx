import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education, training } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const fadeInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
});

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Background"
          title="Education & Training"
          description="My academic journey and professional training."
        />

        <div className="space-y-12">
          {/* Education timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-dark-700/50 hidden sm:block" />

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  variants={fadeInLeft(i * 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-accent-500 bg-dark-950 hidden sm:flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-400" />
                  </div>

                  <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap size={16} className="text-accent-400" />
                          <h3 className="text-base font-semibold text-heading">
                            {edu.degree}
                          </h3>
                        </div>
                        <p className="text-sm text-dark-300">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="flex items-center gap-1.5 text-xs text-dark-400">
                          <Calendar size={12} />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-dark-400">
                          <MapPin size={12} />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {edu.score && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                        <Award size={12} />
                        Score: {edu.score}
                      </span>
                    )}

                    {edu.status && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-accent-500/10 text-accent-400 rounded-md border border-accent-500/20">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training section */}
          <motion.div
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-400/10">
                  <BookOpen size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-heading">{training.title}</h3>
                  <p className="text-sm text-dark-400">{training.organization}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {training.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-200">
                    <span className="mt-2 w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

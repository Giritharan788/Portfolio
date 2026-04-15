import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function SkillCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="glass-card glass-card-hover rounded-2xl p-6 group transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="p-2.5 rounded-xl transition-colors duration-300"
          style={{ backgroundColor: `${category.color}10` }}
        >
          <Icon
            size={20}
            style={{ color: category.color }}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-base font-semibold text-white">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-dark-700/60 text-dark-200 border border-dark-600/50 hover:border-dark-400/50 hover:text-white transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-500/[0.03] rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading
          label="Skills"
          title="Tech I work with"
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

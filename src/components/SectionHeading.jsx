import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-400 mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-dark-300 max-w-lg mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { aboutText } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2, ease: 'easeOut' } },
};

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="About"
          title="A little about me"
          description="From curious student to building production applications."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            {aboutText.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-dark-200 leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Highlights card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <h3 className="text-sm font-semibold text-dark-300 tracking-wide uppercase">
                Quick Info
              </h3>
              <div className="space-y-4">
                {aboutText.highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeInUp(0.3 + i * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-3 border-b border-dark-700/50 last:border-0"
                  >
                    <span className="text-sm text-dark-400">{item.label}</span>
                    <span className="text-sm font-medium text-heading">{item.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative accent */}
              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-accent-500" />
                  <div className="h-1 w-4 rounded-full bg-cyan-400" />
                  <div className="h-1 w-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

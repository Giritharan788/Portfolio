import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const fadeInRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
});

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: '#818cf8',
    },
    {
      label: 'GitHub',
      value: 'Giritharan788',
      href: personalInfo.github,
      icon: GithubIcon,
      color: '#e2e8f0',
    },
    {
      label: 'LinkedIn',
      value: 'giritharan01',
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
      color: '#22d3ee',
    },
    {
      label: 'Location',
      value: personalInfo.location,
      href: null,
      icon: MapPin,
      color: '#34d399',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/[0.04] rounded-full blur-[140px]" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="I'm always open to discussing new opportunities, projects, or just connecting."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — message */}
          <motion.div
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                Get in touch
              </h3>
              <p className="text-sm text-dark-300 leading-relaxed mb-6">
                Whether it's an internship opportunity, a project collaboration,
                or just a conversation about tech — I'd love to hear from you.
                Drop me an email and I'll get back to you as soon as possible.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/20"
              >
                <Send size={16} />
                Send an Email
                <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>

              <div className="mt-4">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-xs text-dark-400 hover:text-dark-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>{personalInfo.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right — links */}
          <div className="space-y-3">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              const Wrapper = link.href ? 'a' : 'div';
              const wrapperProps = link.href
                ? {
                    href: link.href,
                    target: link.href.startsWith('http') ? '_blank' : undefined,
                    rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                  }
                : {};

              return (
                <motion.div
                  key={link.label}
                  variants={fadeInRight(0.1 + i * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={`flex items-center gap-4 p-4 rounded-xl glass-card glass-card-hover transition-all duration-300 group ${
                      link.href ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <div
                      className="p-2.5 rounded-xl transition-colors"
                      style={{ backgroundColor: `${link.color}10` }}
                    >
                      <Icon size={18} style={{ color: link.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-dark-400 mb-0.5">{link.label}</p>
                      <p className="text-sm font-medium text-dark-100 truncate">
                        {link.value}
                      </p>
                    </div>
                    {link.href && (
                      <ArrowUpRight
                        size={16}
                        className="text-dark-500 group-hover:text-dark-200 transition-colors shrink-0"
                      />
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

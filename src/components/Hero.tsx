'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiDownload, HiChevronDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeIn, staggerContainer, textVariant } from '@/utils/animations';
import { scrollToElement } from '@/utils/helpers';
import portfolioData from '@/data/portfolio-content';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { personal, hero } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeIn('down', 0.2)} className="mb-6">
            <span className="badge-graphite">
              {personal.subtitle}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={textVariant(0.3)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold mb-4 text-white"
          >
            {personal.name}
          </motion.h1>

          {/* Title with Graphite Green */}
          <motion.h2
            variants={textVariant(0.4)}
            className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-6 text-graphite-green"
          >
            {personal.title}
          </motion.h2>

          {/* Headline */}
          <motion.p
            variants={fadeIn('up', 0.5)}
            className="text-lg sm:text-xl text-[#999] mb-4 max-w-2xl mx-auto"
          >
            {hero.headline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeIn('up', 0.6)}
            className="text-base text-[#666] max-w-3xl mx-auto mb-10"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToElement('projects')}
              className="w-full sm:w-auto btn-graphite flex items-center justify-center gap-2"
            >
              View My Work
              <HiChevronDown className="w-5 h-5" />
            </button>

            <a
              href={personal.resumeUrl}
              download
              className="w-full sm:w-auto btn-graphite-secondary flex items-center justify-center gap-2"
            >
              <HiDownload className="w-5 h-5" />
              Download CV
            </a>

            <button
              onClick={() => scrollToElement('contact')}
              className="w-full sm:w-auto btn-graphite-outline flex items-center justify-center gap-2"
            >
              <HiMail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>

          {/* Stats - Graphite Style Cards */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {hero.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.8 + index * 0.1)}
                className="card-minimal p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-2">
                  {stat.prefix && <span className="text-graphite-green">{stat.prefix}</span>}
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix || ''}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </div>
                <div className="text-xs text-[#999]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn('up', 0.9)}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#3a3a3a] hover:border-graphite-green rounded-lg text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#3a3a3a] hover:border-graphite-green rounded-lg text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#3a3a3a] hover:border-graphite-green rounded-lg text-white transition-all duration-300"
              aria-label="Email"
            >
              <HiMail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <HiChevronDown className="w-8 h-8 text-[#666]" />
      </motion.div>
    </section>
  );
}

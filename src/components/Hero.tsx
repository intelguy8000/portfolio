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
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

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
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-medium">
              {personal.subtitle}
            </span>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={textVariant(0.3)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="block text-white mb-2">{personal.name}</span>
            <span className="block gradient-text">{personal.title}</span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-4"
          >
            {hero.headline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeIn('up', 0.5)}
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto mb-10"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToElement('projects')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work
              <HiChevronDown className="w-5 h-5" />
            </button>

            <a
              href={personal.resumeUrl}
              download
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <HiDownload className="w-5 h-5" />
              Download CV
            </a>

            <button
              onClick={() => scrollToElement('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-blue-500 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <HiMail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {hero.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.7 + index * 0.1)}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.prefix && stat.prefix}
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
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            className="flex items-center justify-center gap-6"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-blue-600 rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-purple-600 rounded-full text-white transition-all duration-300 hover:scale-110"
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
        <HiChevronDown className="w-8 h-8 text-slate-400" />
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { scrollToElement } from '@/utils/helpers';
import portfolioData from '@/data/portfolio-content';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { hero } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Name - Huge */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold mb-8 tracking-tight">
            andres
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-600 mb-6">
            Building. Learning. Evolving.
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Data architect transforming complexity into clarity.
          </p>

          <p className="text-base sm:text-lg text-gray-500 mb-12">
            Currently: GenAI @ Vanderbilt | Ex-Graphite | 6+ Years Building Solutions
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={() => scrollToElement('projects')}
              className="btn-primary w-full sm:w-auto"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToElement('contact')}
              className="btn-outline w-full sm:w-auto"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>

        {/* Stats - Single Line */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {hero.stats.map((stat, index) => (
            <div
              key={index}
              className="card-stat"
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.prefix && <span className="text-brand-green">{stat.prefix}</span>}
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
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

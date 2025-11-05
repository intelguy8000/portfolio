'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio-content';

export default function TypesOfWork() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { typesOfWork } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="types" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Types of Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized solutions across data architecture, AI, and business intelligence
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {typesOfWork.map((type, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#42CA80] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Animated Icon */}
              <div className="mb-6 relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="w-16 h-16 bg-gray-100 group-hover:bg-[#42CA80] rounded-xl flex items-center justify-center text-4xl transition-colors duration-300"
                >
                  {type.icon}
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#42CA80] transition-colors duration-300">
                {type.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {type.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {type.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 group-hover:bg-[#42CA80]/10 group-hover:text-[#42CA80] text-gray-600 text-sm rounded-lg transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-black font-semibold text-sm group/link"
              >
                <span>See examples</span>
                <motion.span
                  className="group-hover/link:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

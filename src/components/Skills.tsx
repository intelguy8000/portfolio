'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '@/utils/animations';
import portfolioData from '@/data/portfolio-content';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { skills } = portfolioData;

  const getColorClass = (category: string) => {
    switch (category) {
      case 'Business Intelligence':
        return 'from-blue-600 to-blue-400';
      case 'Data Engineering':
        return 'from-purple-600 to-purple-400';
      case 'SaaS Metrics':
        return 'from-green-600 to-green-400';
      case 'Cloud & Tools':
        return 'from-pink-600 to-pink-400';
      default:
        return 'from-blue-600 to-purple-600';
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case 'Business Intelligence':
        return 'border-blue-500/50';
      case 'Data Engineering':
        return 'border-purple-500/50';
      case 'SaaS Metrics':
        return 'border-green-500/50';
      case 'Cloud & Tools':
        return 'border-pink-500/50';
      default:
        return 'border-blue-500/50';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={fadeIn('down', 0.1)} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Specialized in Business Intelligence, Data Engineering, and SaaS Analytics
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={fadeIn('up', 0.2 + categoryIndex * 0.1)}
                className={`bg-slate-800/50 backdrop-blur-sm border ${getBorderColor(
                  category
                )} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                {/* Category Title */}
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <span
                    className={`w-2 h-8 bg-gradient-to-b ${getColorClass(category)} rounded-full`}
                  />
                  {category}
                </h3>

                {/* Skills List */}
                <div className="space-y-5">
                  {skillList.map((skill, index) => (
                    <div key={index} className="group">
                      {/* Skill Name and Level */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <HiStar
                              key={i}
                              className={`w-4 h-4 ${
                                i < skill.level
                                  ? 'text-yellow-500'
                                  : 'text-slate-600'
                              } transition-colors`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${(skill.level / 5) * 100}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${getColorClass(category)} rounded-full`}
                        />
                        {/* Glow effect */}
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={
                            inView
                              ? { width: `${(skill.level / 5) * 100}%`, opacity: 0.5 }
                              : { width: 0, opacity: 0 }
                          }
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                          className={`absolute top-0 h-full bg-gradient-to-r ${getColorClass(
                            category
                          )} blur-sm`}
                        />
                      </div>

                      {/* Percentage */}
                      <div className="mt-1 text-right">
                        <span className="text-xs text-slate-500">
                          {(skill.level / 5) * 100}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Summary */}
          <motion.div variants={fadeIn('up', 0.6)} className="mt-12">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">Expert</div>
                  <div className="text-sm text-slate-400">BI Tools & DAX</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">Advanced</div>
                  <div className="text-sm text-slate-400">SQL & BigQuery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">Specialist</div>
                  <div className="text-sm text-slate-400">SaaS Metrics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">Proficient</div>
                  <div className="text-sm text-slate-400">Cloud & APIs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

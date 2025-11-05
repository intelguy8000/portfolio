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

  return (
    <section id="skills" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={fadeIn('down', 0.1)} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4">
              Skills & <span className="text-graphite-green">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-graphite-green mx-auto rounded-full" />
            <p className="text-[#999] mt-4 max-w-2xl mx-auto">
              Specialized in Business Intelligence, Data Engineering, and SaaS Analytics
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={fadeIn('up', 0.2 + categoryIndex * 0.1)}
                className="bg-[#2a2a2a] border border-graphite-green rounded-xl p-8 hover:shadow-lg hover:shadow-[#42CA80]/20 transition-all duration-300"
              >
                {/* Category Title */}
                <h3 className="text-2xl font-mono font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-graphite-green rounded-full" />
                  {category}
                </h3>

                {/* Skills List */}
                <div className="space-y-5">
                  {skillList.map((skill, index) => (
                    <div key={index} className="group">
                      {/* Skill Name and Level */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#ccc] font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <HiStar
                              key={i}
                              className={`w-4 h-4 ${
                                i < skill.level
                                  ? 'text-graphite-green'
                                  : 'text-[#3a3a3a]'
                              } transition-colors`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${(skill.level / 5) * 100}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                          className="h-full bg-graphite-green rounded-full"
                        />
                      </div>

                      {/* Percentage */}
                      <div className="mt-1 text-right">
                        <span className="text-xs text-[#666] font-mono">
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
            <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">Expert</div>
                  <div className="text-sm text-[#999]">BI Tools & DAX</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">Advanced</div>
                  <div className="text-sm text-[#999]">SQL & BigQuery</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">Specialist</div>
                  <div className="text-sm text-[#999]">SaaS Metrics</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">Proficient</div>
                  <div className="text-sm text-[#999]">Cloud & APIs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

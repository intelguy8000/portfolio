'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOfficeBuilding, HiLocationMarker, HiBriefcase } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '@/utils/animations';
import portfolioData from '@/data/portfolio-content';

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-900/50">
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              6+ years building data solutions for SaaS and enterprise companies
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experience.map((exp, index) => {
                const isGraphite = exp.company === 'Graphite';
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={fadeIn(isEven ? 'right' : 'left', 0.2 + index * 0.1)}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      isEven ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-slate-950 z-10" />

                    {/* Card */}
                    <div
                      className={`${
                        isEven ? 'md:col-start-2' : 'md:col-start-1'
                      } ml-8 md:ml-0`}
                    >
                      <div
                        className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${
                          isGraphite
                            ? 'border-yellow-500/50 hover:border-yellow-500 shadow-yellow-500/20'
                            : 'border-slate-700 hover:border-blue-500'
                        }`}
                      >
                        {/* Featured Badge for Graphite */}
                        {isGraphite && (
                          <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                            FEATURED
                          </div>
                        )}

                        {/* Type Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              exp.type === 'contract'
                                ? 'bg-purple-600/20 text-purple-400 border border-purple-500/50'
                                : 'bg-blue-600/20 text-blue-400 border border-blue-500/50'
                            }`}
                          >
                            {exp.type === 'contract' ? 'Contract' : 'Full-Time'}
                          </span>
                          <span className="flex items-center text-slate-400 text-sm">
                            <HiLocationMarker className="w-4 h-4 mr-1" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Company & Role */}
                        <div className="mb-4">
                          <h3
                            className={`text-2xl font-display font-bold mb-2 ${
                              isGraphite ? 'text-yellow-400' : 'text-white'
                            }`}
                          >
                            {exp.company}
                          </h3>
                          <div className="flex items-center text-blue-400 font-semibold mb-2">
                            <HiBriefcase className="w-5 h-5 mr-2" />
                            {exp.role}
                          </div>
                          <p className="text-slate-400 text-sm">{exp.period}</p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 mb-4">{exp.description}</p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-slate-300 text-sm"
                              >
                                <span className="text-green-500 mr-2 mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600 hover:border-blue-500 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className={`hidden md:block ${isEven ? 'md:col-start-1' : 'md:col-start-2'}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

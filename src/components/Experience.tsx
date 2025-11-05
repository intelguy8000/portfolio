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
    <section id="experience" className="py-20 md:py-32 bg-[#141414]">
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
              Professional <span className="text-graphite-green">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-graphite-green mx-auto rounded-full" />
            <p className="text-[#999] mt-4 max-w-2xl mx-auto">
              6+ years building data solutions for SaaS and enterprise companies
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-graphite-green via-[#42CA80] to-graphite-green opacity-50" />

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
                    <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#141414] z-10 ${
                      isGraphite ? 'bg-graphite-green' : 'bg-[#42CA80]'
                    }`} />

                    {/* Card */}
                    <div
                      className={`${
                        isEven ? 'md:col-start-2' : 'md:col-start-1'
                      } ml-8 md:ml-0`}
                    >
                      <div
                        className={`relative bg-[#2a2a2a] backdrop-blur-sm rounded-xl p-6 md:p-8 transition-all duration-300 ${
                          isGraphite
                            ? 'border-2 border-graphite-green shadow-lg shadow-[#42CA80]/20'
                            : 'border border-[#3a3a3a] hover:border-[#42CA80]'
                        }`}
                      >
                        {/* Graphite Special Badge */}
                        {isGraphite && (
                          <div className="absolute -top-3 -right-3 px-4 py-2 bg-graphite-green text-[#1a1a1a] text-xs font-mono font-bold rounded-full shadow-lg">
                            ⭐ FEATURED
                          </div>
                        )}

                        {/* Type & Location */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              exp.type === 'contract'
                                ? 'bg-graphite-green/20 text-graphite-green border border-graphite-green'
                                : 'bg-[#3a3a3a] text-[#999] border border-[#4a4a4a]'
                            }`}
                          >
                            {exp.type === 'contract' ? 'Contract' : 'Full-Time'}
                          </span>
                          <span className="flex items-center text-[#999] text-sm">
                            <HiLocationMarker className="w-4 h-4 mr-1" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Company & Role */}
                        <div className="mb-4">
                          <h3
                            className={`text-2xl font-mono font-bold mb-2 ${
                              isGraphite ? 'text-graphite-green' : 'text-white'
                            }`}
                          >
                            {exp.company}
                          </h3>
                          <div className="flex items-center text-white font-semibold mb-2">
                            <HiBriefcase className="w-5 h-5 mr-2 text-graphite-green" />
                            {exp.role}
                          </div>
                          <p className="text-[#999] text-sm font-mono">{exp.period}</p>
                        </div>

                        {/* Description */}
                        <p className="text-[#ccc] mb-4 text-sm">{exp.description}</p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 text-sm">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-[#ccc] text-sm"
                              >
                                <span className="text-graphite-green mr-2 mt-1 font-bold">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-[#1a1a1a] text-[#999] text-xs rounded border border-[#3a3a3a] hover:border-graphite-green transition-colors font-mono"
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

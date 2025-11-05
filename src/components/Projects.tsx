'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '@/utils/animations';
import portfolioData from '@/data/portfolio-content';

const categories = ['All', 'SaaS Analytics', 'Power BI', 'Full-Stack', 'Machine Learning', 'Operations'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { projects } = portfolioData;

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={fadeIn('down', 0.1)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4">
              Featured <span className="text-graphite-green">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-graphite-green mx-auto rounded-full" />
            <p className="text-[#999] mt-4 max-w-2xl mx-auto">
              Transforming complex data into actionable insights
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-graphite-green text-[#1a1a1a] font-semibold'
                    : 'bg-[#2a2a2a] text-[#999] border border-[#3a3a3a] hover:border-graphite-green hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const isFeatured = project.featured;

                return (
                  <motion.div
                    key={project.id}
                    variants={fadeIn('up', 0.3 + index * 0.1)}
                    className={`group relative bg-[#2a2a2a] rounded-xl overflow-hidden transition-all duration-300 ${
                      isFeatured
                        ? 'border-2 border-graphite-green shadow-lg shadow-[#42CA80]/20'
                        : 'border border-[#3a3a3a] hover:border-[#42CA80]'
                    }`}
                  >
                    {/* Featured Badge */}
                    {isFeatured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center gap-1 px-3 py-1 bg-graphite-green text-[#1a1a1a] text-xs font-mono font-bold rounded-full">
                          <HiStar className="w-3 h-3" />
                          FEATURED
                        </div>
                      </div>
                    )}

                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-[#1a1a1a] overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <HiCode className="w-20 h-20 text-graphite-green/30" />
                      </div>
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                        isFeatured
                          ? 'bg-graphite-green/20 text-graphite-green border border-graphite-green'
                          : 'bg-[#1a1a1a] text-[#999] border border-[#3a3a3a]'
                      }`}>
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className={`text-xl font-mono font-bold mb-2 transition-colors ${
                        isFeatured ? 'text-graphite-green' : 'text-white group-hover:text-graphite-green'
                      }`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#ccc] text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {Object.entries(project.metrics)
                          .slice(0, 2)
                          .map(([key, value], idx) => (
                            <div
                              key={idx}
                              className="bg-[#1a1a1a] rounded-lg p-2 border border-[#3a3a3a]"
                            >
                              <p className="text-xs text-[#666]">{key}</p>
                              <p className="text-sm font-mono font-semibold text-white">{value}</p>
                            </div>
                          ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#1a1a1a] text-[#999] text-xs rounded border border-[#3a3a3a] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-[#666] text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4 border-t border-[#3a3a3a]">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#3a3a3a] hover:bg-[#4a4a4a] border border-[#4a4a4a] hover:border-graphite-green text-white text-sm rounded-lg transition-all"
                          >
                            <FaGithub className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-graphite-green hover:bg-[#38B672] text-[#1a1a1a] text-sm rounded-lg transition-colors font-semibold"
                          >
                            <HiExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                        {project.links.case && !project.links.demo && (
                          <a
                            href={project.links.case}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-graphite-green hover:bg-[#38B672] text-[#1a1a1a] text-sm rounded-lg transition-colors font-semibold"
                          >
                            <HiExternalLink className="w-4 h-4" />
                            Case Study
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Show count */}
          <motion.div variants={fadeIn('up', 0.5)} className="text-center mt-12">
            <p className="text-[#999]">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

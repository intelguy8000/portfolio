'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-content';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { projects } = portfolioData;

  // Get only featured projects (max 3)
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming complex data challenges into scalable solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="card-clean group"
              >
                {/* Project Number */}
                <div className="text-brand-green text-lg font-bold mb-4">
                  0{index + 1}
                </div>

                {/* Category */}
                <div className="text-sm text-gray-500 mb-3">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-brand-green transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                {Object.keys(project.metrics).length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(project.metrics)
                      .slice(0, 2)
                      .map(([key, value], idx) => (
                        <div
                          key={idx}
                          className="bg-gray-100 rounded-lg p-3 border border-gray-200"
                        >
                          <p className="text-xs text-gray-500 mb-1">{key}</p>
                          <p className="text-sm font-semibold text-black">{value}</p>
                        </div>
                      ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-gray-700 text-xs rounded-md border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-gray-500 text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-clean flex items-center gap-2 text-sm"
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
                      className="link-primary flex items-center gap-2 text-sm"
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
                      className="link-primary flex items-center gap-2 text-sm"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      Case Study
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-green hover:text-[#38B672] font-semibold text-lg transition-colors"
            >
              View all projects on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '@/utils/animations';
import portfolioData from '@/data/portfolio-content';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-32 bg-[#141414]">
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
              About <span className="text-graphite-green">Me</span>
            </h2>
            <div className="w-20 h-1 bg-graphite-green mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <motion.div variants={fadeIn('right', 0.2)}>
              <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-8">
                <h3 className="text-2xl font-mono font-bold text-white mb-6">
                  My Story
                </h3>
                <div className="prose prose-invert prose-slate max-w-none">
                  {about.bio.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-[#ccc] mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={fadeIn('left', 0.3)}>
              <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-8">
                <h3 className="text-2xl font-mono font-bold text-white mb-6">
                  Highlights
                </h3>
                <div className="space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn('left', 0.3 + index * 0.1)}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <HiCheckCircle className="w-6 h-6 text-graphite-green group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-[#ccc] group-hover:text-white transition-colors">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                variants={fadeIn('left', 0.4)}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="bg-[#2a2a2a] border border-graphite-green rounded-xl p-6 text-center hover:shadow-lg hover:shadow-[#42CA80]/20 transition-all duration-300">
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">6+</div>
                  <div className="text-sm text-[#999]">Years Experience</div>
                </div>
                <div className="bg-[#2a2a2a] border border-graphite-green rounded-xl p-6 text-center hover:shadow-lg hover:shadow-[#42CA80]/20 transition-all duration-300">
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">50+</div>
                  <div className="text-sm text-[#999]">Dashboards Built</div>
                </div>
                <div className="bg-[#2a2a2a] border border-graphite-green rounded-xl p-6 text-center hover:shadow-lg hover:shadow-[#42CA80]/20 transition-all duration-300">
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">$2M+</div>
                  <div className="text-sm text-[#999]">Cost Savings</div>
                </div>
                <div className="bg-[#2a2a2a] border border-graphite-green rounded-xl p-6 text-center hover:shadow-lg hover:shadow-[#42CA80]/20 transition-all duration-300">
                  <div className="text-3xl font-mono font-bold text-graphite-green mb-2">500M+</div>
                  <div className="text-sm text-[#999]">Records Processed</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div variants={fadeIn('up', 0.5)} className="mt-12">
            <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-8">
              <h3 className="text-2xl font-mono font-bold text-white mb-6">
                Education & Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Current Education */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a]">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {portfolioData.education.current.degree}
                    </h4>
                    <span className="px-3 py-1 bg-graphite-green/20 text-graphite-green text-xs font-medium rounded-full border border-graphite-green">
                      {portfolioData.education.current.status}
                    </span>
                  </div>
                  <p className="text-graphite-green font-medium">
                    {portfolioData.education.current.institution}
                  </p>
                  <p className="text-[#999] text-sm mt-1">
                    {portfolioData.education.current.year}
                  </p>
                </div>

                {/* Bachelor's Degree */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a]">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {portfolioData.education.degrees[0].degree}
                  </h4>
                  <p className="text-graphite-green font-medium">
                    {portfolioData.education.degrees[0].institution}
                  </p>
                  <p className="text-[#999] text-sm mt-1">
                    {portfolioData.education.degrees[0].year} • GPA: {portfolioData.education.degrees[0].gpa}
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                {portfolioData.education.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] hover:border-graphite-green transition-colors"
                  >
                    <p className="text-white font-medium text-sm mb-1">{cert.name}</p>
                    <p className="text-graphite-green text-xs">{cert.issuer}</p>
                    <p className="text-[#999] text-xs mt-1">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

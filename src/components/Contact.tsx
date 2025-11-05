'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-content';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { personal } = portfolioData;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Let's Build Something
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss data solutions? Let's talk.
          </p>

          {/* CTA Button */}
          <a
            href={`mailto:${personal.email}`}
            className="btn-primary inline-flex items-center gap-2 mb-16"
          >
            <HiMail className="w-5 h-5" />
            Get in Touch
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-clean flex items-center gap-2"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-clean flex items-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="link-clean flex items-center gap-2"
            >
              <HiMail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

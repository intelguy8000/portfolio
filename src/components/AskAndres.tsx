'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import portfolioData from '@/data/portfolio-content';

export default function AskAndres() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [question, setQuestion] = useState('');
  const { personal } = portfolioData;

  const handleAskAndres = () => {
    const subject = 'Let\'s discuss: ' + (question || 'Your project');
    const body = question
      ? `Hi Andres,\n\nI'd like to discuss:\n\n${question}\n\nLooking forward to connecting!`
      : `Hi Andres,\n\nI'd like to discuss a potential project.\n\nLooking forward to connecting!`;

    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAskAndres();
    }
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What problem are you up against?
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's explore how we can build a solution together
          </p>

          {/* Ask Andres Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="max-w-3xl mx-auto bg-[#1a1a1a] border-2 border-[#333] rounded-2xl p-2 flex flex-col sm:flex-row gap-3 hover:border-[#42CA80] transition-colors duration-300">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your challenge or idea..."
                className="flex-1 bg-transparent text-white text-base sm:text-lg px-6 py-4 outline-none placeholder-gray-600"
              />
              <button
                onClick={handleAskAndres}
                className="bg-[#42CA80] hover:bg-[#38B672] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#42CA80]/30 hover:-translate-y-1 whitespace-nowrap"
              >
                Ask Andres →
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#42CA80] transition-colors flex items-center gap-2 group"
            >
              <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#42CA80] transition-colors flex items-center gap-2 group"
            >
              <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="text-gray-400 hover:text-[#42CA80] transition-colors flex items-center gap-2 group"
            >
              <HiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

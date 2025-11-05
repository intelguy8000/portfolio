'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronUp, HiMail, HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { scrollToElement } from '@/utils/helpers';
import portfolioData from '@/data/portfolio-content';

const quickLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'Contact', href: 'contact' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-mono font-bold text-graphite-green mb-4">
              JAG
            </h3>
            <p className="text-[#999] text-sm mb-4">
              Senior BI Analyst specializing in SaaS metrics and data analytics.
            </p>
            <div className="flex gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2a2a2a] hover:bg-graphite-green hover:text-[#1a1a1a] border border-[#3a3a3a] rounded-lg flex items-center justify-center text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2a2a2a] hover:bg-graphite-green hover:text-[#1a1a1a] border border-[#3a3a3a] rounded-lg flex items-center justify-center text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 bg-[#2a2a2a] hover:bg-graphite-green hover:text-[#1a1a1a] border border-[#3a3a3a] rounded-lg flex items-center justify-center text-white transition-all duration-300"
                aria-label="Email"
              >
                <HiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToElement(link.href)}
                    className="text-[#999] hover:text-graphite-green transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm text-[#999]">
              <li>Business Intelligence</li>
              <li>Power BI & Looker Studio</li>
              <li>SaaS Metrics & Analytics</li>
              <li>Data Engineering</li>
              <li>Dashboard Development</li>
              <li>Automation & ETL</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[#999] hover:text-graphite-green transition-colors"
                >
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-[#999] hover:text-graphite-green transition-colors"
                >
                  {personal.phone}
                </a>
              </li>
              <li className="text-[#999]">{personal.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2a2a] my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#999] text-sm text-center md:text-left">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[#999] text-sm">
            <span>Built with</span>
            <HiHeart className="w-4 h-4 text-graphite-green" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-graphite-green text-[#1a1a1a] rounded-full flex items-center justify-center shadow-lg shadow-[#42CA80]/50 transition-all duration-300 hover:scale-110 z-40"
          aria-label="Back to top"
        >
          <HiChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
}

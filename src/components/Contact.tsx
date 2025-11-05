'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '@/utils/animations';
import { isValidEmail } from '@/utils/helpers';
import portfolioData from '@/data/portfolio-content';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { personal } = portfolioData;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with EmailJS integration)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1a1a1a]">
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
              Get In <span className="text-graphite-green">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-graphite-green mx-auto rounded-full" />
            <p className="text-[#999] mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss data analytics? Let&apos;s connect!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeIn('right', 0.2)} className="space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 hover:border-graphite-green transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-graphite-green/20 rounded-lg flex items-center justify-center border border-graphite-green">
                      <HiMail className="w-6 h-6 text-graphite-green" />
                    </div>
                    <div>
                      <p className="text-sm text-[#999] mb-1">Email</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-white hover:text-graphite-green transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 hover:border-graphite-green transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-graphite-green/20 rounded-lg flex items-center justify-center border border-graphite-green">
                      <HiPhone className="w-6 h-6 text-graphite-green" />
                    </div>
                    <div>
                      <p className="text-sm text-[#999] mb-1">Phone</p>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-white hover:text-graphite-green transition-colors"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 hover:border-graphite-green transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-graphite-green/20 rounded-lg flex items-center justify-center border border-graphite-green">
                      <HiLocationMarker className="w-6 h-6 text-graphite-green" />
                    </div>
                    <div>
                      <p className="text-sm text-[#999] mb-1">Location</p>
                      <p className="text-white">{personal.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#3a3a3a] hover:bg-graphite-green hover:text-[#1a1a1a] rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#3a3a3a] hover:bg-graphite-green hover:text-[#1a1a1a] rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="w-12 h-12 bg-[#3a3a3a] hover:bg-graphite-green hover:text-[#1a1a1a] rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    aria-label="Email"
                  >
                    <HiMail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeIn('left', 0.3)}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border ${
                      errors.name ? 'border-red-500' : 'border-[#3a3a3a]'
                    } rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-graphite-green transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border ${
                      errors.email ? 'border-red-500' : 'border-[#3a3a3a]'
                    } rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-graphite-green transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border ${
                      errors.subject ? 'border-red-500' : 'border-[#3a3a3a]'
                    } rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-graphite-green transition-colors`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border ${
                      errors.message ? 'border-red-500' : 'border-[#3a3a3a]'
                    } rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-graphite-green transition-colors resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-graphite-green hover:bg-[#38B672] text-[#1a1a1a] rounded-lg font-mono font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:shadow-lg hover:shadow-[#42CA80]/50'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-graphite-green/20 border border-graphite-green rounded-lg text-graphite-green">
                    <HiCheckCircle className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400">
                    <HiXCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

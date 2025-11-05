'use client';

import portfolioData from '@/data/portfolio-content';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} andres. All rights reserved.
          </p>

          {/* Built with */}
          <p className="text-gray-600 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

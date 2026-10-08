"use client";

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-slate-950/80 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity">FD</button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">O mnie</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Doświadczenie</button>
              <button onClick={() => scrollToSection('tech-stack')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Tech Stack</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Projekty</button>
              <button onClick={() => scrollToSection('qualifications')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Kwalifikacje</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Kontakt</button>
              <a href="/cv/Filip_Dziopa_CV.pdf" download target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-200">CV</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white transition-colors" aria-label="Mobile menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-slate-950/95 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors">O mnie</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors">Doświadczenie</button>
            <button onClick={() => scrollToSection('tech-stack')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors">Tech Stack</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors">Projekty</button>
            <button onClick={() => scrollToSection('qualifications')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors">Kwalifikacje</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors">Kontakt</button>
            <a href="/cv/Filip_Dziopa_CV.pdf" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-3 py-2 mt-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition-transform">Pobierz CV (PDF)</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

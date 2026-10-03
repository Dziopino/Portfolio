import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-600/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-blur text-sm text-cyan-400 font-medium animate-pulse-slow">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            Dostępny do pracy w Warszawie
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white">Filip</span>
          <span className="block text-gradient">Dziopa</span>
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">Full-Stack Developer</p>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">React 19 | Node.js | TypeScript | Express.js | MySQL | AI Integration</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://cinemix.xyz" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Zobacz Cinemix
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a href="https://github.com/Dziopino" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 card-blur rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              Mój GitHub
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <button aria-label="Scroll to about section" onClick={() => {const aboutSection = document.getElementById('about');aboutSection?.scrollIntoView({ behavior: 'smooth' });}} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

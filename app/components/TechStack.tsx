import React from 'react';

interface Technology {
  name: string;
  icon: string;
  category: string;
  color: string;
}

const technologies: Technology[] = [
  { name: 'React 19', icon: '⚛️', category: 'Frontend', color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', icon: '🔷', category: 'Frontend', color: 'from-blue-500 to-indigo-600' },
  { name: 'JavaScript ES6+', icon: '⚡', category: 'Frontend', color: 'from-yellow-400 to-amber-500' },
  { name: 'HTML5', icon: '🟧', category: 'Frontend', color: 'from-orange-500 to-red-600' },
  { name: 'CSS3', icon: '🎨', category: 'Frontend', color: 'from-blue-500 to-cyan-600' },
  { name: 'Tailwind CSS', icon: '💨', category: 'Frontend', color: 'from-cyan-500 to-teal-600' },
  { name: 'Bootstrap 5', icon: '🅱️', category: 'Frontend', color: 'from-purple-500 to-violet-600' },
  { name: 'Sass', icon: '💗', category: 'Frontend', color: 'from-pink-500 to-rose-600' },
  { name: 'Vite', icon: '⚡', category: 'Frontend', color: 'from-purple-500 to-fuchsia-600' },
  { name: 'Node.js', icon: '📗', category: 'Backend', color: 'from-green-500 to-emerald-600' },
  { name: 'Express.js', icon: '🚂', category: 'Backend', color: 'from-slate-500 to-gray-700' },
  { name: 'JWT', icon: '🔑', category: 'Backend', color: 'from-amber-500 to-orange-600' },
  { name: 'bcrypt', icon: '🔒', category: 'Backend', color: 'from-rose-500 to-red-600' },
  { name: 'Gemini AI API', icon: '🤖', category: 'Backend', color: 'from-purple-600 to-pink-700' },
  { name: 'REST API', icon: '🌐', category: 'Backend', color: 'from-indigo-500 to-purple-600' },
  { name: 'MySQL', icon: '🐬', category: 'Database', color: 'from-blue-600 to-cyan-700' },
  { name: 'Cloudinary', icon: '☁️', category: 'Tools', color: 'from-sky-500 to-blue-600' },
  { name: 'Resend API', icon: '📧', category: 'Tools', color: 'from-red-500 to-rose-600' },
  { name: 'Git & GitHub', icon: '🔧', category: 'Tools', color: 'from-slate-600 to-gray-700' },
  { name: 'Vitest', icon: '✅', category: 'Tools', color: 'from-green-500 to-emerald-600' },
];

const TechStack: React.FC = () => {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologie i narzędzia, z którymi pracuję na co dzień</p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">#</span>
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <div key={tech.name} className="group card-blur rounded-xl p-6 hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl group-hover:animate-pulse`}>
                          {tech.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-gradient transition-colors">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-400">{tech.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card-blur rounded-xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Bezpieczeństwo</h4>
            <p className="text-gray-400">Helmet, CORS, SQL Injection Prevention, JWT Authorization</p>
          </div>

          <div className="card-blur rounded-xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Optymalizacja</h4>
            <p className="text-gray-400">Connection Pooling, Lazy Loading, Code Splitting, Caching</p>
          </div>

          <div className="card-blur rounded-xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Architektura</h4>
            <p className="text-gray-400">Decoupled Architecture, RESTful API Design, Clean Code Principles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import React from 'react';

const Projects: React.FC = () => {

    return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-neutral-950 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Projekty</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Zaawansowane aplikacje webowe Full-Stack z naciskiem na bezpieczeństwo i optymalizację</p>
        </div>

        <div className="card-blur rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-3xl animate-pulse-slow">🎬</div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient">Cinemix</h3>
                  <p className="text-gray-400">Full-Stack Web Application</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Enterprise REST API z React 19 frontend - pełnowartościowa platforma do zarządzania
                katalogiem filmów z systemem uwierzytelniania JWT, Role-Based Access Control (RBAC),
                AI-moderowanymi komentarzami (Google Gemini Flash Lite), oraz cloud-native architekturą
                z Cloudinary i internacjonalizacją (PL/EN).
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">React 19</span>
                <span className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">Node.js + Express</span>
                <span className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">MySQL 8.0+</span>
                <span className="px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium">JWT + bcrypt</span>
                <span className="px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium">Google Gemini AI</span>
                <span className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">Cloudinary</span>
                <span className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium">i18next</span>
                <span className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">Vitest</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <a href="https://cinemix.xyz" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                  <span className="flex items-center justify-center gap-2">
                    Live Demo
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </span>
                </a>

                <a href="https://github.com/Dziopino/Movies-Frontend" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 card-blur rounded-lg text-white font-semibold text-center hover:scale-105 hover:border-cyan-500/50 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    Frontend Repo
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </span>
                </a>

                <a href="https://github.com/Dziopino/Movies-Backend" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 card-blur rounded-lg text-white font-semibold text-center hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 sm:col-span-2">
                  <span className="flex items-center justify-center gap-2">
                    Backend Repo
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">🎯</span>
                  Kluczowe Funkcjonalności
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-white">Bezpieczeństwo Enterprise:</strong> Stateless JWT z trzystopniową autoryzacją (publiczna/wymagana/admin), bcrypt adaptive salting, helmet.js headers, rate limiting (750 req/15min global, 10 req/15min auth), SQL injection prevention</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-white">AI Content Moderation:</strong> Google Gemini Flash Lite spoiler detection z 5s timeout i single retry. Fail-open design (komentarze są publikowane nawet przy niedostępności AI), rewalidacja przy każdej edycji</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-white">Cloud-Native Pipeline:</strong> Cloudinary image storage z in-memory processing (multer + sharp). Awatary: 300×300 WebP@80%, postery filmów: 200×285 WebP@90%, automatyczne czyszczenie usuniętych zasobów</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-white">Zaawansowana Baza Danych:</strong> MySQL z connection pooling, znormalizowany schemat relacyjny, composite unique indexes, ON DELETE CASCADE, LEFT JOIN integrity dla osieroconych rekordów, state machine dla statusów użytkowników</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-white">Frontend React 19:</strong> Functional components z hooks, React Router v7 protected guards, Bootstrap 5 + Sass, debounced search (500ms), infinite scroll (IntersectionObserver), Recharts data visualization, context-based JWT state</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-white">Panel Administracyjny:</strong> RBAC z re-autoryzacją dla krytycznych operacji, zarządzanie użytkownikami (ban/suspend/promote), auto-expiry dla czasowych blokad, dashboard analytics z KPI, audit logs (25+ typów akcji)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-white">Internacjonalizacja:</strong> i18next dwustopniowa: statyczne tłumaczenia UI (PL/EN) + dynamiczne lokalizacje treści filmowych przez <code className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded">film_translations</code>, server-side message keys</span>
                  </li>
                </ul>
              </div>

              <div className="card-blur rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">💡</span>
                  Architektura Enterprise
                </h4>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Cinemix to <strong className="text-cyan-400">production-grade full-stack application</strong> (v0.8 Beta) z enterprise security patterns: stateless JWT sessions, trzystopniową middleware cascade (publiczna → wymagana → admin), real-time account reconciliation z auto-expiring suspensions, oraz comprehensive audit logging (25+ typów akcji).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Innowacyjny moduł AI (Google Gemini Flash Lite) realizuje fail-open spoiler detection - komentarze są publikowane nawet przy niedostępności AI (5s timeout + single retry), z server-side rewalidacją przy każdej edycji. Cloud-native design: Cloudinary dla in-memory image processing (WebP conversion, sharp optimization), Resend API dla HTTPS-based email delivery, MySQL connection pooling z normalized schema i composite indexes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

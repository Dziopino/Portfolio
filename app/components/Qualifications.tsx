import React from 'react';

const Qualifications: React.FC = () => {
  return (
    <section id="qualifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Wykształcenie i Kwalifikacje</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="card-blur rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Wykształcenie</h3>
                <p className="text-cyan-400 font-medium mb-1">Zespół Szkół Informatycznych im. Gen. Józefa Hauke-Bosaka</p>
                <p className="text-gray-400 mb-3">Kielce | 2021 - 2026</p>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Technik programista</strong> (wykształcenie średnie)
                </p>
                <p className="text-gray-300 mb-2">
                  Tytuł zawodowy oraz zdane egzaminy <span className="text-cyan-400 font-medium">INF.03</span> i <span className="text-cyan-400 font-medium">INF.04</span>
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">🎓 Wyniki Maturalne:</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-gray-300">Język angielski (podstawa)</span>
                  <span className="text-cyan-400 font-bold text-lg">93%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-gray-300">Język angielski (rozszerzenie)</span>
                  <span className="text-cyan-400 font-bold text-lg">83%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-gray-300">Matematyka</span>
                  <span className="text-cyan-400 font-bold text-lg">94%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-blur rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Języki obce</h3>
                <p className="text-gray-400">Komunikacja międzynarodowa</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-white font-semibold text-lg">🇵🇱 Polski</p>
                    <p className="text-gray-400 text-sm">Język ojczysty</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium">Ojczysty</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-white font-semibold text-lg">🇬🇧 Angielski</p>
                    <p className="text-gray-400 text-sm">Poziom zaawansowany</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium">B2</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-gray-300 mt-3 text-sm">Swobodna komunikacja techniczna, czytanie dokumentacji, praca z międzynarodowymi zespołami</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-blur rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Egzamin INF.03</h4>
            <p className="text-gray-400 text-sm">Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych</p>
          </div>

          <div className="card-blur rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Egzamin INF.04</h4>
            <p className="text-gray-400 text-sm">Projektowanie, programowanie i testowanie aplikacji</p>
          </div>

          <div className="card-blur rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Prawo jazdy kat. B1</h4>
            <p className="text-gray-400 text-sm">Mobilność, własny samochód - gotowość do pracy w Warszawie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

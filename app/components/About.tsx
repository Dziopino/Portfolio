import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-neutral-950 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">O mnie</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:grid-rows-2">
          <div className="card-blur rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Wykształcenie i Osiągnięcia</h3>
                <p className="text-gray-400 leading-relaxed">
                  Absolwent technikum programistycznego z tytułem{' '}
                  <span className="text-cyan-400 font-medium">Technika Programisty</span>. Zdane egzaminy zawodowe{' '}
                  <span className="text-cyan-400 font-medium">INF.03</span> i{' '}
                  <span className="text-cyan-400 font-medium">INF.04</span>. Wyniki maturalne:{' '}
                  <span className="text-cyan-400 font-medium">matematyka 94%</span>,{' '}
                  <span className="text-cyan-400 font-medium">j. angielski 93%</span> (podst.) i{' '}
                  <span className="text-cyan-400 font-medium">83%</span> (rozsz.). Poziom angielskiego{' '}
                  <span className="text-cyan-400 font-medium">B2</span> - swobodna komunikacja techniczna.
                </p>
              </div>
            </div>
          </div>

          <div className="card-blur rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Pasja do Czystej Architektury</h3>
                <p className="text-gray-400 leading-relaxed">
                  Przykładam ogromną wagę do{' '}
                  <span className="text-cyan-400 font-medium">czystej architektury kodu</span>,{' '}
                  <span className="text-cyan-400 font-medium">bezpieczeństwa aplikacji</span>{' '}oraz{' '}
                  <span className="text-cyan-400 font-medium">optymalizacji wydajności</span>. Każdy projekt traktuję jak wyzwanie do stworzenia profesjonalnego, skalowalnego i bezpiecznego rozwiązania.
                </p>
              </div>
            </div>
          </div>

          <div className="card-blur rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Specjalizacja Full-Stack
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Specjalizuję się w tworzeniu aplikacji webowych z
                  wykorzystaniem{' '}
                  <span className="text-cyan-400 font-medium">React.js, Node.js, Express.js, TypeScript, MySQL</span>{' '}
                  oraz nowoczesnych technologii frontendowych. Posiadam
                  praktyczne doświadczenie w pracy z bazami danych, API,
                  autoryzacją użytkowników oraz rozwojem własnych aplikacji
                  webowych.
                </p>
              </div>
            </div>
          </div>

          <div className="card-blur rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up flex flex-col">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Dyscyplina i Ciągły Rozwój
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Podchodzę do programowania z{' '}
                  <span className="text-cyan-400 font-medium">bezwzględną dyscypliną</span>{' '}
                  wzorowaną na treningach siłowych. Stale poszukuję nowych
                  technologii, uczę się najlepszych praktyk i szybko
                  adaptuję się do zmieniającego się środowiska programistycznego.{' '}
                  <span className="text-cyan-400 font-medium">Posiadam prawo jazdy kat. B1 i własny samochód</span>{' '}
                  - obecnie aktywnie poszukuję możliwości rozwoju zawodowego w{' '}
                  <span className="text-cyan-400 font-medium">Warszawie</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

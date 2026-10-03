import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
  type: 'tech' | 'other';
}

const experiences: ExperienceItem[] = [
  {
    company: 'Projekty własne - Cinemix',
    position: 'Full-Stack Developer',
    period: '06.2026 - obecnie',
    location: 'Projekt osobisty',
    responsibilities: [
      'Projektowanie i implementacja enterprise REST API (Node.js, Express.js)',
      'Rozwój frontendu w React 19 z TypeScript, React Router v7, i18next',
      'Integracja Google Gemini AI do automatycznej moderacji treści (spoiler detection)',
      'Zarządzanie bazą danych MySQL 8.0+ (connection pooling, normalized schema)',
      'Implementacja systemu bezpieczeństwa: JWT, bcrypt, helmet, rate limiting',
      'Cloud-native architecture: Cloudinary (image processing), Resend API',
      'Comprehensive testing z Vitest, version control Git/GitHub'
    ],
    type: 'tech'
  },
  {
    company: 'PCTECH24',
    position: 'Praktykant | Serwis komputerowy',
    period: '10.2024 - 11.2024',
    location: 'Stacjonarnie',
    responsibilities: [
      'Serwisowanie laptopów i komputerów PC',
      'Wymiana podzespołów komputerowych',
      'Instalacja systemów operacyjnych (Windows, Linux)',
      'Diagnozowanie usterek sprzętu',
      'Wprowadzanie terminali płatniczych do systemu',
      'Przygotowywanie i pakowanie sprzętu do wysyłki'
    ],
    type: 'other'
  },
  {
    company: 'P.H.MAM Sp. z o.o.',
    position: 'Praktykant | Sklep internetowy',
    period: '01.2024 - 02.2024',
    location: 'Stacjonarnie',
    responsibilities: [
      'Obsługa i aktualizacja bazy danych sklepu internetowego',
      'Edycja i przygotowywanie dokumentów PDF w Adobe Acrobat',
      'Wykonywanie prac administracyjnych',
      'Realizacja zadań związanych z funkcjonowaniem sklepu'
    ],
    type: 'other'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 via-slate-950 to-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Doświadczenie</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Praktyczne doświadczenie w tworzeniu aplikacji webowych i pracy z technologią</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-blur rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-12 h-12 rounded-lg ${
                        exp.type === 'tech'
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600'
                          : 'bg-gradient-to-br from-purple-500 to-pink-600'
                      } flex items-center justify-center`}
                    >
                      {exp.type === 'tech' ? (
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <p className="text-cyan-400 font-medium">{exp.position}</p>
                    </div>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-300 font-medium">{exp.period}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

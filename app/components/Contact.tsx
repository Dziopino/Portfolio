"use client";

import React, {type FormEvent, useState, useEffect, useRef} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });


    // eslint-disable-next-line react-hooks/purity
  const formMountTime = useRef<number>(Date.now());

  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    formMountTime.current = Date.now();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Bot detected: honeypot filled');
      setStatus({type: 'error', message: 'Wystąpił błąd. Spróbuj ponownie.',});
      return;
    }

    const timeSinceMount = Date.now() - formMountTime.current;
    if (timeSinceMount < 3000) {
      console.warn('Bot detected: form submitted too quickly');
      setStatus({type: 'error', message: 'Proszę poświęcić chwilę na wypełnienie formularza.',});
      return;
    }

    if (!hasInteracted) {
      console.warn('Bot detected: no interaction detected');
      setStatus({type: 'error', message: 'Wystąpił błąd walidacji. Spróbuj ponownie.',});
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Wszystkie pola są wymagane',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Proszę podać poprawny adres email',
      });
      return;
    }

    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: formMountTime.current,
          submittedAt: Date.now(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Wiadomość została wysłana! Odpowiem najszybciej jak to możliwe.',
        });
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setHasInteracted(false);
        formMountTime.current = Date.now();
      } else if (response.status === 429) {
        setStatus({
          type: 'error',
          message: data.error || 'Zbyt wiele prób. Spróbuj ponownie później.',
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie lub skontaktować się bezpośrednio przez email.',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHasInteracted(true); // Track user interaction

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Kontakt</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Masz pytania lub propozycję współpracy? Napisz do mnie!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a href="mailto:filip.dziopa@gmail.com" className="group card-blur rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 group-hover:text-cyan-300 transition-colors">filip.dziopa@gmail.com</p>
              </div>
            </div>
          </a>

          <a href="tel:+48516258138" className="group card-blur rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Telefon</h3>
                <p className="text-cyan-400 group-hover:text-cyan-300 transition-colors">+48 516 258 138</p>
              </div>
            </div>
          </a>
        </div>

        <div className="card-blur rounded-2xl p-8 md:p-12 animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off"/>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Imię i Nazwisko</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200" placeholder="Jan Kowalski" required/>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Adres Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200" placeholder="jan.kowalski@example.com" required/>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Wiadomość</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none" placeholder="Twoja wiadomość..." required/>
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : status.type === 'error'
                    ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                    : ''
                }`}
              >
                {status.message}
              </div>
            )}

            <button type="submit" disabled={status.type === 'loading'} className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3">
              {status.type === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Wysyłanie...
                </>
              ) : (
                <>
                  Wyślij Wiadomość
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Lub znajdź mnie na:</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Dziopino" target="_blank" aria-label="Link to my github" rel="noopener noreferrer" className="w-12 h-12 card-blur rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/filip-dziopa" target="_blank" aria-label="Link to my linkedin" rel="noopener noreferrer" className="w-12 h-12 card-blur rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

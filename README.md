# 🚀 Portfolio - Filip Dziopa

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

**Nowoczesne portfolio z zaawansowanym formularzem kontaktowym**

[Demo na żywo](#) · [Zgłoś Problem](https://github.com/Dziopino/portfolio-next/issues) · [Zaproponuj Funkcjonalność](https://github.com/Dziopino/portfolio-next/issues)

</div>

---

## 📋 Spis Treści

- [O Projekcie](#-o-projekcie)
- [Główne Funkcjonalności](#-główne-funkcjonalności)
- [Stack Technologiczny](#-stack-technologiczny)
- [Szybki Start](#-szybki-start)
- [Konfiguracja](#-konfiguracja)
- [Struktura Projektu](#-struktura-projektu)
- [Sekcje Portfolio](#-sekcje-portfolio)
- [System Email](#-system-email)
- [Deployment](#-deployment)
- [Kontakt](#-kontakt)

---

## 🎯 O Projekcie

Profesjonalne, responsywne portfolio stworzone z wykorzystaniem najnowszych technologii web development. Projekt został zaprojektowany z myślą o wydajności, dostępności i nowoczesnym designie z animacjami gradientowymi i płynnym UX.

### ✨ Dlaczego to portfolio?

- **⚡ Błyskawiczna wydajność** - Next.js 16 z App Router i Turbopack
- **🎨 Nowoczesny design** - Gradienty, animacje, dark mode ready
- **📱 Fully responsive** - Perfekcyjne wyświetlanie na wszystkich urządzeniach
- **🔒 Bezpieczne** - XSS protection, walidacja danych, sanityzacja HTML
- **📧 Zaawansowany system email** - Automatyczne potwierdzenia i powiadomienia
- **♿ Accessibility** - ARIA labels, semantic HTML, keyboard navigation

---

## 🎨 Główne Funkcjonalności

### 🌟 Portfolio Sections

| Sekcja | Opis |
|--------|------|
| **Hero** | Dynamiczne powitanie z call-to-action |
| **About** | Prezentacja biografii i pasji |
| **Experience** | Timeline doświadczenia zawodowego |
| **Projects** | Showcase najważniejszych projektów |
| **Tech Stack** | Prezentacja umiejętności technicznych |
| **Qualifications** | Wykształcenie i certyfikaty |
| **Contact** | Interaktywny formularz kontaktowy |

### 📧 System Kontaktowy

- ✅ **Real-time validation** - Walidacja formularza po stronie klienta i serwera
- ✅ **Dual email system** - Powiadomienia dla administratora + auto-reply dla użytkownika
- ✅ **Beautiful email templates** - Responsywne, profesjonalne szablony HTML
- ✅ **Advanced anti-spam** - Honeypot, rate limiting, time-based protection, spam detection
- ✅ **Security first** - Sanityzacja HTML, XSS protection, bot detection
- ✅ **User feedback** - Loading states, success/error messages, UX animations

### 🛡️ Ochrona Anty-Spamowa

| Mechanizm | Opis |
|-----------|------|
| **Honeypot Field** | Ukryte pole widoczne tylko dla botów |
| **Rate Limiting** | Max 3 wiadomości/godzinę na IP |
| **Time-Based Protection** | Minimum 3 sekundy na wypełnienie formularza |
| **Interaction Tracking** | Wykrywanie rzeczywistych interakcji użytkownika |
| **Spam Detection** | Heurystyki: nadmiar URLs, słowa kluczowe, CAPS |
| **Content Analysis** | Detekcja powtarzających się znaków i podejrzanych wzorców |

---

## 🛠️ Stack Technologiczny

### Frontend

```json
{
  "framework": "Next.js 16.3.8 (App Router)",
  "library": "React 19.2.8",
  "language": "TypeScript 5",
  "styling": "Tailwind CSS 4",
  "fonts": "Geist Sans & Geist Mono"
}
```

### Backend & Services

```json
{
  "api": "Next.js Route Handlers",
  "email": "Resend API",
  "runtime": "Node.js",
  "bundler": "Turbopack"
}
```

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Type safety
- **PostCSS** - CSS processing

---

## 🚀 Szybki Start

### Wymagania

Upewnij się, że masz zainstalowane:

- **Node.js** 18.17 lub nowszy
- **npm** / **pnpm** / **yarn**
- Konto w [Resend](https://resend.com) (do funkcjonalności email)

### Instalacja

1. **Sklonuj repozytorium**

```bash
git clone https://github.com/Dziopino/portfolio-next.git
cd portfolio-next
```

2. **Zainstaluj dependencje**

```bash
npm install
# lub
pnpm install
# lub
yarn install
```

3. **Skonfiguruj zmienne środowiskowe**

Utwórz plik `.env.local` w głównym katalogu:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
EMAIL_FROM=kontakt@twojadomena.pl
EMAIL_TO=twoj.email@gmail.com
```

> 💡 **Jak uzyskać RESEND_API_KEY?**
> 1. Załóż darmowe konto na [resend.com](https://resend.com)
> 2. Przejdź do [API Keys](https://resend.com/api-keys)
> 3. Wygeneruj nowy klucz API
> 4. Opcjonalnie: Dodaj i zweryfikuj swoją domenę w Resend

4. **Uruchom serwer deweloperski**

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

---

## ⚙️ Konfiguracja

### Email Templates

Szablony email znajdują się w `app/api/contact/route.ts`. Możesz je dostosować:

```typescript
// Notyfikacja dla administratora
subject: `Nowa wiadomość z portfolio od ${sanitizedName}`

// Auto-reply dla użytkownika
subject: 'Potwierdzenie otrzymania wiadomości - Filip Dziopa'
```

### Walidacja Formularza

Limity można dostosować w `app/api/contact/route.ts`:

```typescript
name.length > 100      // Max długość imienia
email.length > 254     // Max długość email
message.length > 5000  // Max długość wiadomości
```

### Personalizacja Treści

Edytuj komponenty w `app/components/`:

- `Hero.tsx` - Główne powitanie i CTA
- `About.tsx` - O mnie
- `Experience.tsx` - Doświadczenie zawodowe
- `Projects.tsx` - Portfolio projektów
- `TechStack.tsx` - Umiejętności techniczne
- `Qualifications.tsx` - Wykształcenie
- `Contact.tsx` - Formularz kontaktowy

---

## 📁 Struktura Projektu

```
portfolio_next/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint dla formularza
│   ├── components/
│   │   ├── About.tsx             # Sekcja O mnie
│   │   ├── Contact.tsx           # Formularz kontaktowy
│   │   ├── Experience.tsx        # Doświadczenie
│   │   ├── Footer.tsx            # Stopka
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Navbar.tsx            # Nawigacja
│   │   ├── Projects.tsx          # Projekty
│   │   ├── Qualifications.tsx    # Kwalifikacje
│   │   └── TechStack.tsx         # Stack technologiczny
│   ├── globals.css               # Style globalne
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Strona główna
├── lib/
│   ├── resend.ts                 # Konfiguracja Resend
│   └── anti-spam.ts              # Rate limiting i detekcja spamu
├── public/
│   └── cv/                       # CV do pobrania
├── .env.local                    # Zmienne środowiskowe (nie w repo)
├── package.json                  # Dependencje projektu
├── tailwind.config.ts            # Konfiguracja Tailwind
├── tsconfig.json                 # Konfiguracja TypeScript
└── README.md                     # Dokumentacja
```

---

## 🎭 Sekcje Portfolio

### Hero Section
Dynamiczne powitanie z animowanym tekstem i call-to-action buttons.

### About Me
Personalna historia, pasje i motywacje.

### Experience
Timeline z doświadczeniem zawodowym - stanowiska, firmy, okresy zatrudnienia.

### Projects
Showcase najważniejszych projektów z linkami do demo i repo.

### Tech Stack
Wizualna prezentacja umiejętności technicznych z ikonami technologii.

### Qualifications
Wykształcenie, certyfikaty i osiągnięcia.

### Contact
Zaawansowany formularz kontaktowy z:
- Real-time validation
- Loading states
- Success/error feedback
- Email i telefon kontaktowy
- Linki do social media

---

## 📧 System Email

### Przepływ Wiadomości

```
Użytkownik wypełnia formularz
         ↓
Walidacja po stronie klienta
         ↓
POST /api/contact
         ↓
Walidacja po stronie serwera
         ↓
Sanityzacja danych (XSS protection)
         ↓
Resend API
         ↓
    ┌────┴────┐
    ↓         ↓
Email do   Auto-reply
admin      do użytkownika
```

### Funkcje Bezpieczeństwa

- ✅ **XSS Protection** - Sanityzacja HTML w treści wiadomości
- ✅ **Input Validation** - Walidacja długości i formatu danych
- ✅ **Type Safety** - TypeScript type guards
- ✅ **Error Handling** - Graceful error handling z logowaniem
- ✅ **POST Only** - Endpoint akceptuje tylko metody POST
- ✅ **Rate Limiting** - Ochrona przed nadużyciami (3 req/h na IP)
- ✅ **Honeypot Trap** - Ukryte pola łapiące boty
- ✅ **Time-Based Checks** - Wykrywanie zbyt szybkich zgłoszeń
- ✅ **Spam Heuristics** - Inteligentna detekcja spamu
- ✅ **Bot Detection** - Wielowarstwowa ochrona przed automatami

### Email Templates

**Administrator Notification:**
- Dane kontaktowe nadawcy
- Pełna treść wiadomości
- Reply-to ustawione na email nadawcy
- Responsywny HTML template z gradientami

**User Auto-Reply:**
- Spersonalizowane powitanie (użycie imienia)
- Potwierdzenie otrzymania wiadomości
- Kopia wysłanej wiadomości
- Dodatkowe dane kontaktowe
- Informacja o czasie odpowiedzi (24-48h)
- Responsywny HTML template

---

## 🚀 Deployment

### Vercel (Zalecane)

Najłatwiejszy sposób deployment Next.js:

1. **Push do GitHub**
```bash
git push origin main
```

2. **Deploy na Vercel**
   - Przejdź do [vercel.com](https://vercel.com)
   - Importuj projekt z GitHub
   - Dodaj zmienne środowiskowe
   - Deploy!

3. **Dodaj Environment Variables w Vercel**
```
RESEND_API_KEY=re_your_api_key
EMAIL_FROM=kontakt@twojadomena.pl
EMAIL_TO=twoj.email@gmail.com
```

### Inne Platformy

Portfolio działa na każdej platformie wspierającej Next.js:

- **Netlify** - [Netlify Guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- **Railway** - [Railway Guide](https://docs.railway.app/guides/nextjs)
- **AWS Amplify** - [Amplify Guide](https://docs.amplify.aws/guides/hosting/nextjs/)
- **DigitalOcean** - [DO App Platform](https://docs.digitalocean.com/products/app-platform/)

### Build Production

```bash
# Build aplikacji
npm run build

# Start production server
npm run start
```

---

## 📈 Roadmap

- [ ] Dodanie animacji scroll reveal
- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Multi-language support (EN/PL)
- [ ] Analytics integration (Google Analytics / Plausible)
- [ ] SEO optimization z meta tags
- [ ] PWA support
- [ ] Rate limiting dla API
- [ ] Admin dashboard do zarządzania treścią
- [ ] Sitemap i robots.txt

---

## 🤝 Contributing

Chcesz przyczynić się do rozwoju projektu?

1. Fork projektu
2. Utwórz branch (`git checkout -b feature/AmazingFeature`)
3. Commit zmian (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

---

## 📝 Licencja

Ten projekt jest prywatny i służy jako osobiste portfolio.

---

## 📞 Kontakt

**Filip Dziopa**

- 📧 Email: [filip.dziopa@gmail.com](mailto:filip.dziopa@gmail.com)
- 📱 Telefon: [+48 516 258 138](tel:+48516258138)
- 💼 LinkedIn: [linkedin.com/in/filip-dziopa](https://www.linkedin.com/in/filip-dziopa)
- 🐙 GitHub: [github.com/Dziopino](https://github.com/Dziopino)

---

## 🙏 Podziękowania

- [Next.js](https://nextjs.org/) - Niesamowity React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Resend](https://resend.com/) - Modern email API
- [Vercel](https://vercel.com/) - Deployment platform
- [Geist Font](https://vercel.com/font) - Beautiful typography

---

<div align="center">

**⭐ Jeśli podoba Ci się ten projekt, zostaw gwiazdkę!**

Made with ❤️ and ☕ by [Filip Dziopa](https://github.com/Dziopino)

</div>

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
- [Polityka Prywatności (RODO)](#-polityka-prywatności-rodo)
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
- **🔐 Zgodność z RODO** - Podstrona z polityką prywatności i klauzula zgody przy formularzu

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
| **Contact** | Formularz kontaktowy z klauzulą zgody RODO |
| **Polityka prywatności** | Osobna trasa `/polityka-prywatnosci` (nie sekcja na stronie głównej) |

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
- Konto w [Upstash](https://console.upstash.com) z bazą Redis (do rate limitingu formularza)

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

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_rest_token
```

> ⚠️ Rate limiting działa tylko gdy ustawione są obie zmienne Upstash. Bez nich `lib/anti-spam.ts` loguje ostrzeżenie `Redis credentials not configured, rate limiting disabled` i przepuszcza każde zgłoszenie — formularz działa, ale bez ograniczenia 3 wiadomości/godzinę.

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

Treść polityki prywatności: `app/polityka-prywatnosci/page.tsx`. Spis treści generuje tablica `sections` (`id`, `label`), więc dodanie punktu wymaga wpisania go w tej tablicy **i** w JSX z pasującą kotwicą `id`.

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
│   │   ├── Contact.tsx           # Formularz kontaktowy + klauzula zgody
│   │   ├── Experience.tsx        # Doświadczenie
│   │   ├── Footer.tsx            # Stopka (link do polityki prywatności)
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Navbar.tsx            # Nawigacja (przewijanie po hashu)
│   │   ├── Projects.tsx          # Projekty
│   │   ├── Qualifications.tsx    # Kwalifikacje
│   │   └── TechStack.tsx         # Stack technologiczny
│   ├── polityka-prywatnosci/
│   │   └── page.tsx              # Podstrona RODO (Server Component + metadata)
│   ├── globals.css               # Style globalne, warstwa .policy
│   ├── layout.tsx                # Root layout: Navbar, <main>, Footer
│   └── page.tsx                  # Strona główna (sekcje portfolio)
├── lib/
│   ├── resend.ts                 # Konfiguracja Resend
│   └── anti-spam.ts              # Rate limiting i detekcja spamu
├── public/
│   └── cv/                       # CV do pobrania
├── .env.local                    # Zmienne środowiskowe (nie w repo)
├── package.json                  # Dependencje projektu
├── postcss.config.mjs            # @tailwindcss/postcss (Tailwind v4 bez configa)
├── tsconfig.json                 # Konfiguracja TypeScript
└── README.md                     # Dokumentacja
```

> Tailwind CSS 4 nie wymaga `tailwind.config.ts` — motyw i warstwy (`@layer base`, `components`, `utilities`) definiowane są w `app/globals.css`.

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
- Klauzulą zgody RODO z linkiem do polityki prywatności
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

## 🔐 Polityka Prywatności (RODO)

### Trasa `/polityka-prywatnosci`

Dokument RODO to osobna strona, nie sekcja na stronie głównej — jest za długa, żeby wrzucać ją do layoutu jednostronicowego portfolio.

| Element | Realizacja |
|---------|------------|
| **Trasa** | `app/polityka-prywatnosci/page.tsx` |
| **Typ komponentu** | Server Component (bez `"use client"`) — wymaga tego `export const metadata` |
| **Metadata** | Osobny `title` i `description` dla tej trasy |
| **Treść** | 10 punktów + spis treści z kotwicami (`#administrator`, `#cele`, ...) |
| **Typografia** | Warstwa `.policy` w `app/globals.css` (`@layer components` + `@apply`) |
| **Dostęp do polityki** | Klauzula pod formularzem (`Contact.tsx`) i link w stopce (`Footer.tsx`) |

Klauzula zgody wyświetlana pod formularzem (tekst w `app/components/Contact.tsx`):

> Klikając „Wyślij Wiadomość”, zgadzasz się na przetwarzanie Twoich danych w celu obsługi zapytania. Szczegółowe informacje o tym, jak dbamy o Twoją prywatność, znajdziesz w naszej Polityce Prywatności.

Aplikacja nie prowadzi bazy danych — treść zgłoszenia przekazywana jest wyłącznie e-mailem (Resend), więc samo kliknięcie przycisku nigdzie nie jest zapisywane.

### Nawigacja między trasami

Navbar i Footer żyją w `app/layout.tsx`, więc są wspólne dla obu tras. Wynikają z tego trzy rzeczy:

- `Footer.tsx` ma `"use client"` — po przeniesieniu do layoutu serverowego rok w copyrightzie liczyłby się raz przy buildzie i przestałby się aktualizować.
- Przyciski sekcji w `Navbar.tsx` sprawdzają `usePathname()`: na stronie głównej robią `scrollIntoView({ behavior: 'smooth' })`, a z podstrony `router.push('/#sekcja')` — Next 16 sam odpala wtedy natywne hash scroll. `router.push` nie przyjmuje stanu, więc nie da się tu przenieść triku z `location.state` z react-router.
- `scroll-padding-top: 5rem` na `html` offsetuje sticky navbar (64 px), a `data-scroll-behavior="smooth"` na `<html>` sprawia, że przejścia między trasami przeskakują natychmiast, natomiast kliknięcia kotwic zostają płynne.

> ⚠️ **Ograniczenie:** wejście od razu w adres z hashem (np. `filipdziopa.tech/#contact` wklejony w nową kartkę) ładuje stronę na górze. Przeglądarka próbuje przewinąć do kotwicy podczas parsowania HTML-a, czyli zanim komponenty klienckie ułożą sekcje. Nawigacja wewnątrz aplikacji działa poprawnie.

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
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_rest_token
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
- [x] SEO optimization z meta tags
- [ ] PWA support
- [x] Rate limiting dla API
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

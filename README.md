# Phoenix Tanzania — Push-to-Talk Communication Solutions

A production-ready marketing website for **Phoenix Tanzania**, a provider of next-generation Push-to-Talk (PoC) communication devices and dispatcher software. Built with React, Vite, TypeScript, and Tailwind CSS, with bilingual (English / Swahili) support and full SEO optimization.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Routing](#pages--routing)
- [Components](#components)
- [Internationalization (i18n)](#internationalization-i18n)
- [SEO](#seo)
- [Styling & Theming](#styling--theming)
- [Assets](#assets)
- [Deployment](#deployment)

---

## Overview

This site showcases Phoenix Tanzania's products and services, including:

- **PoC devices** (Etera T780, Telo TE320, Telo TE590, M6L Vehicle Unit)
- **Dispatcher software** for centralized fleet and field-team coordination
- **Feature comparisons** against traditional 2-way / trunked radio systems
- **Case studies** for TANESCO, TAA, and JNIA
- **Contact & sales** flows with a WhatsApp widget

The site supports two languages — English (`en`) and Swahili (`sw`) — toggleable from the header.

---

## Tech Stack

| Concern        | Technology                                     |
| -------------- | ---------------------------------------------- |
| Framework      | React 18                                       |
| Build tool     | Vite 4                                         |
| Language       | TypeScript 5                                   |
| Styling        | Tailwind CSS 3                                 |
| Animation      | Framer Motion 10                               |
| Routing        | React Router 7                                 |
| SEO / Meta     | react-helmet-async 2                           |
| Icons          | lucide-react                                   |

No backend or database is required — the site is fully static. Product data, case studies, and translations are defined in-code.

---

## Project Structure

```
project/
├── index.html                  # HTML entry, SEO meta tags, structured data
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.tsx                # App bootstrap (HelmetProvider, LanguageProvider)
    ├── App.tsx                 # Router + route definitions
    ├── index.css               # Tailwind directives + global styles
    ├── vite-env.d.ts
    ├── i18n/
    │   ├── LanguageContext.tsx # Context provider + useLanguage() hook
    │   └── translations.ts     # EN + SW translation strings
    ├── components/
    │   ├── Header.tsx
    │   ├── Navigation.tsx
    │   ├── LanguageToggle.tsx
    │   ├── Hero.tsx
    │   ├── Overview.tsx
    │   ├── Comparison.tsx
    │   ├── DispatcherSoftware.tsx
    │   ├── Features.tsx
    │   ├── Products.tsx
    │   ├── ProductDetail.tsx
    │   ├── Partners.tsx
    │   ├── Contact.tsx
    │   ├── WhatsAppWidget.tsx
    │   ├── SEOHead.tsx
    │   ├── Banner.tsx          # Unused legacy component
    │   ├── Gallery.tsx         # Unused legacy component
    │   └── Navbar.tsx          # Unused legacy component (see notes below)
    └── pages/
        ├── HomePage.tsx
        ├── ProductsPage.tsx
        ├── CaseStudies.tsx
        └── CaseStudyDetail.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & run

```bash
npm install
npm run dev
```

The dev server starts on the URL shown in the terminal (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Available Scripts

| Script           | Description                                  |
| ---------------- | -------------------------------------------- |
| `npm run dev`    | Start the Vite dev server with HMR           |
| `npm run build`  | Type-check (`tsc`) and produce a production bundle |
| `npm run preview`| Serve the production build locally           |
| `npm run lint`   | Run ESLint over `src/**/*.{ts,tsx}`          |

---

## Pages & Routing

Routes are defined in `src/App.tsx`:

| Path                    | Page                | Description                                      |
| ----------------------- | ------------------- | ------------------------------------------------ |
| `/`                     | `HomePage`          | Hero, case-study teasers, overview, comparison, dispatcher software, features, partners, contact |
| `/products`             | `ProductsPage`      | Product grid with expandable per-product detail  |
| `/case-studies`         | `CaseStudies`       | Grid of case-study cards                         |
| `/case-studies/:slug`   | `CaseStudyDetail`   | Single case study (TANESCO, TAA, JNIA)           |

In-page navigation uses anchor scrolling (`#features`, `#contact`, etc.).

---

## Components

### Layout & navigation

- **`Header`** — fixed top bar with the Phoenix logo, navigation, and language toggle.
- **`Navigation`** — desktop nav links + mobile menu. Routes handled by React Router; in-page sections scroll to anchors.
- **`LanguageToggle`** — EN / SW pill switch backed by `LanguageContext`.
- **`WhatsAppWidget`** — floating chat button that opens WhatsApp with a prefilled, localized message.

### Home sections

- **`Hero`** — headline, product imagery, and CTAs ("Contact Sales", "View Products").
- **`Overview`** — nationwide-coverage pitch + ecosystem bullet list.
- **`Comparison`** — table comparing traditional radios vs. Push-to-Talk across ~20 features, plus an upgrade CTA.
- **`DispatcherSoftware`** — dispatcher responsibilities, software features, and an interactive screenshot gallery with a lightbox modal.
- **`Features`** — 8 feature cards, an autoplaying product video, and an infinite-scrolling testimonial marquee.
- **`Partners`** — grayscale partner logo grid that colorizes on hover.
- **`Contact`** — contact info (email, phone, address) and a contact form (front-end only; `onSubmit` is a no-op).

### Products

- **`Products`** — grid of 4 device cards; selecting one renders `ProductDetail` in place.
- **`ProductDetail`** — full spec sheet, key features, industries served, accessories, and a contact CTA. Data is hard-coded in `Products.tsx`.

### Case studies

- **`CaseStudies`** / **`CaseStudyDetail`** — data sourced from the `caseData` map in `CaseStudyDetail.tsx` and the `caseImages` array in `HomePage.tsx` / `CaseStudies.tsx`.

### SEO

- **`SEOHead`** — wraps `react-helmet-async` to inject localized `<title>`, description, keywords, Open Graph, Twitter Card, and canonical tags per route.

### Legacy / unused

`Banner.tsx`, `Gallery.tsx`, and `Navbar.tsx` are **not imported anywhere**. `Navbar.tsx` also references a different brand ("Push2Talk Kenya"). These can be safely removed during cleanup.

---

## Internationalization (i18n)

Bilingual support is implemented with a lightweight React Context — no external i18n library.

- **`src/i18n/LanguageContext.tsx`** — provides `language`, `setLanguage`, and a `t(key)` translation function. Defaults to `en`.
- **`src/i18n/translations.ts`** — a flat `en` / `sw` dictionary keyed by `TranslationKey`.

Usage in a component:

```tsx
import { useLanguage } from '../i18n/LanguageContext';

const { t, language } = useLanguage();
return <h1>{t('heroTitle')}</h1>;
```

To add a new string:

1. Add the key + English value to the `en` object in `translations.ts`.
2. Add the matching Swahili value to the `sw` object under the same key.
3. The `TranslationKey` type updates automatically.

To add a third language, extend the `Language` union and add a new top-level object, then update the provider.

---

## SEO

- **`index.html`** contains static meta tags, Open Graph / Twitter cards, canonical URL, geo tags, and two JSON-LD blocks (`Organization` + `LocalBusiness`) with product catalog data.
- **`SEOHead`** (via `react-helmet-async`) injects route-specific, localized meta tags at runtime.
- **`public/robots.txt`** allows all major crawlers and points to the sitemap.
- **`public/sitemap.xml`** lists the homepage, anchor sections, and the `/case-studies` route.

The canonical domain is `https://phoenix.tz`. Update `index.html`, `SEOHead` defaults, `robots.txt`, and `sitemap.xml` if deploying under a different domain.

---

## Styling & Theming

- Tailwind CSS is configured in `tailwind.config.js` with a custom **`phoenix`** red color ramp (`50`–`950`) used for primary actions, accents, and the comparison table.
- Global styles live in `src/index.css` (Tailwind directives, `bg-grid-pattern`, `.gallery-grid`, responsive root font sizes, and overflow guards).
- Animations use Framer Motion throughout (`whileInView`, hover/tap micro-interactions, the testimonial marquee, and the screenshot lightbox).
- The layout follows an 8px spacing rhythm and is fully responsive (mobile → desktop breakpoints in `index.css`).

---

## Assets

All imagery is hosted on **ImageKit** (`ik.imagekit.io/8jn9lgbbcw`) and referenced by URL — nothing is downloaded into the repo. This includes the logo, hero images, product renders, dispatcher screenshots, partner logos, and the autoplaying product video.

If an image needs to change, update the URL in the relevant component (`Hero.tsx`, `Products.tsx`, `DispatcherSoftware.tsx`, `Partners.tsx`, etc.).

---

## Deployment

This is a static SPA — the `npm run build` output in `dist/` can be hosted on any static provider (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

SPA routing notes:
- Configure the host to **fall back to `index.html`** for all routes so that direct visits to `/products` or `/case-studies/*` resolve client-side.
- Update `robots.txt`, `sitemap.xml`, canonical URLs, and Open Graph tags to the production domain.

---

## Notes for maintainers

- The contact form in `Contact.tsx` does not submit anywhere (`onSubmit` calls `e.preventDefault()`). Wire it to an email service or backend endpoint before relying on it.
- Case study detail pages (`CaseStudyDetail.tsx`) currently render only the image and a placeholder line — real case-study content still needs to be authored.
- Remove the unused `Banner.tsx`, `Gallery.tsx`, and `Navbar.tsx` components to keep the tree clean.

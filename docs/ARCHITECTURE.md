# Architecture

A high-level view of how the Phoenix Tanzania site fits together.

## Runtime model

The app is a **single-page application** with no backend. Everything renders client-side:

```
index.html
  └── /src/main.tsx          # bootstrap
        ├── HelmetProvider   # SEO/meta tag injection
        ├── LanguageProvider # EN/SW translation context
        └── App              # <Router><Routes>…
```

`App.tsx` defines four routes (`/`, `/products`, `/case-studies`, `/case-studies/:slug`). All other navigation is in-page anchor scrolling.

## Data flow

There is no external data source. Three categories of content are hard-coded:

1. **Products** — the `products` array in `src/components/Products.tsx`. `Products` manages selection with local `useState` and hands the selected product to `ProductDetail`.
2. **Case studies** — the `caseData` map in `src/pages/CaseStudyDetail.tsx` and the `caseImages` arrays in `HomePage.tsx` / `CaseStudies.tsx`.
3. **Translations** — the `en` / `sw` dictionaries in `src/i18n/translations.ts`, consumed via `LanguageContext`.

Everything else (features, comparison rows, dispatcher responsibilities, partners, testimonials) is defined inline in its component.

## Internationalization

A minimal hand-rolled i18n layer:

- `LanguageProvider` holds the active `Language` (`'en' | 'sw'`) in React state and exposes it through context.
- `useLanguage()` returns `{ language, setLanguage, t }`.
- `t(key)` does a flat dictionary lookup, falling back to the key itself if missing.
- `LanguageToggle` switches the language; every component that calls `t()` re-renders with the new strings.

No lazy loading or namespacing — the full dictionary is tiny and ships in the main bundle.

## SEO strategy

Two layers work together:

1. **Static** (`index.html`) — meta tags, Open Graph, Twitter cards, canonical link, geo tags, and two JSON-LD blocks (`Organization` with a product catalog, and `LocalBusiness`). These are present on first paint.
2. **Dynamic** (`SEOHead` + `react-helmet-async`) — injects route-specific, localized `<title>`, description, keywords, OG, and Twitter tags into `<head>` at runtime. `SEOHead` is mounted once inside `App` and accepts optional props to override per page.

`public/robots.txt` and `public/sitemap.xml` cover crawl directives.

## Styling & theming

- Tailwind CSS scans `index.html` and `src/**/*.{js,ts,jsx,tsx}`.
- One custom color ramp (`phoenix`, a red scale) is defined in `tailwind.config.js` and used for all primary UI.
- `src/index.css` holds Tailwind directives plus a few helpers: `.bg-grid-pattern`, `.gallery-grid`, responsive root font sizes, and overflow guards.
- Framer Motion handles all animation — scroll reveals, hover/tap micro-interactions, the testimonial marquee, and the dispatcher screenshot lightbox.

## Rendering pipeline (build)

```
tsc (type-check) → vite build → dist/
  ├── index.html
  └── assets/
      ├── index-*.css
      └── index-*.js
```

`dist/` is a static bundle. The host must fall back to `index.html` for all routes so client-side routing works on direct visits.

# Development Guide

Practical reference for working on the Phoenix Tanzania site. Start here after reading the top-level [README](../README.md).

## Environment

- Node.js 18+
- npm (ships with Node)
- No environment variables are required — the app is fully static and all assets are remote.

```bash
npm install
npm run dev      # http://localhost:5173
```

## Common tasks

### Add a navigation item

1. Add a key to `en` and `sw` in `src/i18n/translations.ts`.
2. Add an entry to `navItems` in `src/components/Navigation.tsx`. Set `isRoute: true` for React Router paths, or use a `#anchor` for in-page scrolling.

### Add or edit a product

Product data lives in the `products` array at the top of `src/components/Products.tsx`. Each entry has `name`, `image`, `description`, `features`, `specifications`, and optional `industries` / `accessories`. Editing that array is all that's required — `ProductDetail` renders whatever it receives.

### Add a case study

1. Add an image URL entry to `caseData` in `src/pages/CaseStudyDetail.tsx` and to `caseImages` in both `src/pages/HomePage.tsx` and `src/pages/CaseStudies.tsx`.
2. Author the body content in `CaseStudyDetail.tsx` (currently a placeholder).
3. Add the route slug to `public/sitemap.xml`.

### Add a translation string

1. Add the key + English value to the `en` object in `src/i18n/translations.ts`.
2. Add the matching Swahili value under the same key in the `sw` object.
3. The `TranslationKey` type is inferred from `translations.en`, so it updates automatically. Call `t('yourKey')` in any component via `useLanguage()`.

### Change the brand color

The primary palette is the `phoenix` red ramp in `tailwind.config.js` (`phoenix.50`–`phoenix.950`). Updating those hex values cascades to every component that uses `bg-phoenix-*`, `text-phoenix-*`, etc.

### Update an image

All assets are hosted on ImageKit and referenced by URL. Find the URL in the relevant component (`Hero.tsx`, `Products.tsx`, `DispatcherSoftware.tsx`, `Partners.tsx`, `Contact.tsx`) and swap it. No images are stored in the repo.

## Code conventions

- **Components** are function components, one default export per file, PascalCase filenames.
- **State** is local React state / context — no global store.
- **Animation** uses Framer Motion (`motion.*`, `whileInView`, `whileHover`, `whileTap`). Prefer `viewport={{ once: true }}` for scroll-in reveals to avoid re-triggering.
- **Icons** come from `lucide-react`. Import only what you use.
- **Styling** is Tailwind utility classes inline. Custom CSS lives in `src/index.css` only when Tailwind can't express it (e.g. the grid pattern, marquee overflow).
- **Routing** is React Router v7 (`Link`, `useNavigate`, `useParams`). In-page section links scroll via `element.scrollIntoView({ behavior: 'smooth' })`.
- **No comments** unless a non-obvious constraint needs explaining.

## Cleanup candidates

These files are not imported anywhere and can be deleted safely:

- `src/components/Banner.tsx`
- `src/components/Gallery.tsx`
- `src/components/Navbar.tsx` (also references a different brand — "Push2Talk Kenya")

Verify with: `grep -r "from.*\(Banner\|Gallery\|Navbar\)" src/` before removing.

## Wiring the contact form

`src/components/Contact.tsx` currently has `onSubmit={(e) => e.preventDefault()}`. To make it functional, point it at an email service (Formspree, EmailJS) or a backend endpoint and replace the no-op handler. The form fields are `name`, `email`, and `message`.

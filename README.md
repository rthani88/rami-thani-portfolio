# Rami Thani — Executive Portfolio

Bilingual (Arabic/English, RTL/LTR) personal portfolio. Next.js 14 App Router,
TypeScript, Tailwind CSS, GSAP/ScrollTrigger, next-intl.

## 1. Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — it redirects to `/ar` (default locale).
Switch language with the button in the header; English lives at `/en`.

## 2. Build

```bash
npm run build
npm start
```

## 3. Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables required.
4. Deploy. Connect a custom domain afterward from the Vercel project settings.

## 4. Content & asset checklist — complete before going live

These were explicitly flagged as missing during content discovery and were
**not** invented. The site works and deploys without them, but shows clearly
labeled placeholders until you provide the real assets:

- [ ] **Executive portrait** → replace `public/images/profile/portrait-placeholder.svg`
      and update `src/sections/hero/Hero.tsx` to render an `<Image>` instead of
      the placeholder block.
- [ ] **Executive CV (PDF)** → add `public/documents/executive-cv.pdf`, then set
      `cvAvailable: true` in `src/data/site-config.ts`. The download button is
      disabled until you do this.
- [ ] **Real contact details** → `src/data/site-config.ts`: `email`, `whatsapp`,
      `linkedin`. Current values are non-functional placeholders.
- [ ] **legacy.sa status** → confirm the URL and beta-stage wording in
      `src/data/content.ts` (`projects.legacy`, `ventures[0]`) still matches reality.
- [ ] **Project photography** → replace the four SVG placeholders in
      `public/images/projects/` with real photos (port environments, the HCIS
      project, logistics operations, LEGACY screenshots).
- [ ] **Port project narrative** → `projects.ports.results` in
      `src/data/content.ts` is intentionally left open — fill in once
      publishable detail is available (confidential details should stay out).
- [ ] **Employment dates, employer names, exact job titles, degree detail**
      were not supplied and do not appear anywhere on the site. Add them only
      if you want that level of detail public.

## 5. Where things live

```
src/data/content.ts        bilingual structured content (journey, impact, projects, expertise, ventures)
src/data/site-config.ts    contact details, CV path/flag, legacy.sa URL
src/messages/{ar,en}.json  UI strings (nav, buttons, section labels)
src/sections/              one folder per homepage section
src/components/            shared layout, nav, UI, and animation primitives
src/i18n/                  next-intl routing, middleware, request config
```

To add a new venture: append an object to `ventures` in both the `ar` and `en`
blocks of `src/data/content.ts` — the Ventures section renders the list
automatically, no component changes needed.

## 6. Notes on what was intentionally simplified vs. the original brief

- Lenis smooth-scroll was left out to avoid conflicting scroll control with
  GSAP ScrollTrigger (flagged as a risk in the discovery report). Native CSS
  `scroll-behavior: smooth` plus ScrollTrigger covers the brief's requirements;
  Lenis can be added later if a specific effect needs it.
- Horizontal project scrolling was not implemented — the vertical card layout
  reads better bilingually (RTL mirroring of horizontal scroll adds real risk
  of disorientation) and keeps the Projects section simpler to maintain.
- Impact statistics are rendered exactly as supplied, each clearly separate
  (project value vs. team scale vs. duration) — none are summed or combined.
- No testimonials, client logos, or awards are included, since none were supplied.

## 7. Accessibility & performance

- `prefers-reduced-motion` disables all GSAP entrance/counter animations.
- Visible focus outlines (`:focus-visible`) on all interactive elements.
- Fonts loaded via `next/font/google` (no external font request blocking render).
- No client-side state beyond the mobile menu and language toggle.

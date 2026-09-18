# MASTER PROMPT — VIP Taxi Service KSA

### Next.js + Tailwind · Black luxury UI · Mobile-first · Local SEO + AEO + GEO + AIO + Technical SEO

> This file is the source-of-truth operating contract for every Claude Code session on this project.

---

## 0. OPERATING RULES (read first, obey always)

1. **Plan before code.** Phase 0 = recon + written plan (`PLAN.md`). Wait for "go" only if something is ambiguous; otherwise proceed phase by phase. Commit after each phase with a clear message.
2. **Never invent facts.** Anything about the business not given by the owner (street address, licence numbers, prices, fleet models, years in business, staff names, awards) goes into `src/config/site.ts` as `TODO_*` placeholders and is listed in `TODO_OWNER.md`. No fake stats, no fake reviews, no fake schema values.
3. **Verify, don't recall.** Run `npm view next version` and `npm view tailwindcss version`. Use the latest stable Next.js (App Router, TypeScript strict) and Tailwind CSS v4 (CSS-first `@theme`). Next.js APIs change between majors (async `params`/`searchParams`, `middleware` → `proxy` rename in Next 16, removed `next lint`, etc.) — when unsure, read the official docs or `node_modules/next/dist/docs` instead of guessing.
4. **Server-first.** React Server Components + static generation for every public page. Client components only for tiny interactive islands (quote widget, mobile menu, sticky bar, consent banner). Zero client-side rendering of primary content — AI crawlers and many bots do not run JS.
5. **Quality gate.** `npm run check` must pass before every commit: `tsc --noEmit` + ESLint + Prettier check + `next build` + schema validation + placeholder scan (warn locally, fail when `STRICT=1`).
6. **No template look.** Avoid generic "AI landing page" patterns (purple gradients, glassmorphism spam, stock 3-card grids everywhere). Make deliberate typographic and layout choices.
7. **At the end of each phase** print: what was done, files changed, what's verified, what's open.

---

## 1. YOUR ROLE

You are a principal Next.js engineer, conversion-focused UI/UX designer, and technical/local/AI-search SEO lead in one. Build a production-ready, fast, black-themed, mobile-first website for a Saudi Arabia private taxi and pilgrim-transfer business that wins **local pack, organic, AI Overviews, ChatGPT/Perplexity/Gemini/Claude citations, and WhatsApp bookings**.

---

## 2. BUSINESS FACTS (source of truth — do not contradict)

- **Brand:** VIP Taxi Service KSA (Google Business Profile name: "VIP TAXI KSA")
- **Domain:** https://viptaxiserviceksa.com (currently WordPress on LiteSpeed — see §16 migration)
- **Phone / WhatsApp:** +966 53 972 0003 → `tel:+966539720003`, `https://wa.me/966539720003`
- **Positioning:** Reliable private transfers between Makkah, Madinah and Jeddah for Umrah/Hajj pilgrims, families and tourists. Door-to-door, hotel-to-hotel.
- **Services (exact list from the current site):**
  Taxi Service · Limousines · Jeddah Airport to Makkah · Makkah to Jeddah Airport · Makkah to Madinah · Madinah to Makkah · Makkah Ziyarah · Madinah Ziyarah · Makkah to Jeddah sightseeing · Airport transfers for Umrah/Hajj pilgrims
- **Google Business Profile:** 4.8 rating, 35 Google reviews (verify current numbers). Short link: https://share.google/KtTCWGbTSkkSePAP6 — resolve it once and store the full Google Maps/GBP URL in config (`TODO_` if you cannot).
- **Currently indexed URLs (must be preserved or 301'd):**
  `/`, `/about-us/`, `/about/`, `/airport-transfers-for-umrah-hajj-pilgrims/`, plus junk `/.lsrecap/recaptcha` (→ return **410 Gone**).
- **Proof points from real Google reviews (use only as real, attributed testimonials; do not alter meaning):**
  - Punctual hotel-lobby pickup with constant communication before pickup (Nurul Hidayah Shuhaimi, Clock Tower Makkah → Jeddah Airport)
  - Two extra stops added at no additional charge, Madinah hotel → Makkah hotel (Maryam Amaran)
  - "No hidden fee", easy booking, on time (Tris Seti)
  - Six large suitcases + several small ones fit in the van; courteous, punctual staff (Hisban Zaidi)
  - Fast WhatsApp responses, clean cars (omar maher)
  - Drivers who show iconic sites en route, e.g. Jabal Noor on Hilton Makkah → Jeddah Airport (Abdirahman)
  - Suitable for families / children (Faiz Miah, faisal khaled)
- **Known weak spot (turn into a UX rule, don't hide it):** one reviewer received a Hyundai H1 instead of the requested Toyota Camry. → Vehicle class must be explicit on every route page and in every booking message, and the booking summary must repeat the requested vehicle.
- **Competitor context to address honestly in content:** Haramain high-speed train (Makkah–Madinah), buses, ride-hailing apps, other taxi companies.

Do NOT state prices, licence numbers (e.g. TGA), fleet models, or founding year unless present in `site.ts` with a real value.

---

## 3. GOALS & KPIs

| Goal                           | Target                                                           |
| ------------------------------ | ---------------------------------------------------------------- |
| Primary conversions            | WhatsApp click, phone call, quote form submit                    |
| Lighthouse (mobile, throttled) | Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100 |
| Core Web Vitals (mobile)       | LCP < 2.0 s, INP < 150 ms, CLS < 0.03                            |
| JS shipped on a content page   | < 90 KB gzip (first load)                                        |
| Rich-result / schema errors    | 0 in Rich Results Test & Schema validator                        |
| Indexation                     | 100 % of sitemap URLs indexable, 0 orphan pages                  |

---

## 4. STACK & TOOLING

- Next.js 16.3.5 (latest stable, App Router), React 19, TypeScript 7 `strict`, Tailwind CSS v4 (4.3.3), `next/font`, `next/image`, `next/og`.
- `schema-dts` 2.0.0 for typed JSON-LD. `zod` 4.6.5 for form validation. `clsx` 2.1.1 + `tailwind-merge` 3.7.0. `lucide-react` 1.47.0 for icons (tree-shaken imports only).
- Content: typed TS data files for routes/services/fleet/FAQ; MDX (`@next/mdx` 16.3.5) for blog.
- Testing: Playwright 1.63 smoke tests + `@axe-core/playwright` 4.13 a11y checks on key pages; a custom `scripts/validate-seo.ts` that reads `.next` output/HTML and asserts: one H1, title 30–60 chars, meta description 120–160 chars, canonical present & self-referencing (or intentional), valid JSON-LD parse, no `noindex` on public pages, all internal links resolve.
- Formatting: ESLint flat config + Prettier with `prettier-plugin-tailwindcss`.
- **No `next lint`** — removed in Next.js 16; use `eslint .` directly.
- Deploy target: Vercel (also keep it portable). Env: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, `RESEND_API_KEY` (optional), `TURNSTILE_*` (optional), `INDEXNOW_KEY`.
- `next.config`: `trailingSlash: true`, `poweredByHeader: false`, `images.formats: ['image/avif','image/webp']`, `compress: true`, security headers (§15), redirects (§16).

---

## 5. INFORMATION ARCHITECTURE & URLS

```
/                                            Home
/services/                                   Services hub
/jeddah-airport-to-makkah-taxi/
/makkah-to-jeddah-airport-taxi/
/makkah-to-madinah-taxi/
/madinah-to-makkah-taxi/
/makkah-ziyarah-tour/
/madinah-ziyarah-tour/
/makkah-to-jeddah-sightseeing-tour/
/limousine-service-saudi-arabia/
/airport-transfers-for-umrah-hajj-pilgrims/  (KEEP — already indexed)
/fleet/
/about-us/                                   (KEEP — already indexed; /about/ → 301)
/contact/
/faq/
/reviews/
/blog/  and  /blog/[slug]/
/privacy-policy/   /terms/
/404 (custom)
```

**Optional routes behind `enabled` flags** (only turn on after owner confirms): Madinah Airport (MED) ↔ Madinah hotels, Jeddah Airport ↔ Madinah, Madinah Airport → Makkah, Taif / Badr day trips.

Internal linking: every route page links to reverse route, 2–3 related routes, fleet page, relevant blog guides, and quote CTA. Breadcrumbs on all inner pages. Footer contains all service links (crawl depth ≤ 2 from home).

---

## 6. DESIGN SYSTEM — BLACK, PREMIUM, PILGRIM-FRIENDLY

**Tokens (Tailwind v4 `@theme` in `globals.css`):**

```css
--color-bg: #050505;
--color-surface: #0d0d0d;
--color-surface-2: #151515;
--color-border: #262626;
--color-text: #f5f5f4;
--color-muted: #a8a29e;
--color-gold: #c9a24b;
--color-gold-hi: #e0bb62;
--color-wa: #25d366;
--color-danger: #ef4444;
```

- Force dark: `color-scheme: dark`, no theme toggle.
- **Type:** max 2 families via `next/font`. Refined serif/display for H1/H2 (Fraunces or Cormorant Garamond) + clean humanist sans for body/UI (Manrope or Inter). Fluid scale with `clamp()`. Body ≥ 17 px mobile, line-height 1.6.
- **Radius/shadows:** 14–20 px radius, thin 1 px borders, subtle gold glow only on primary CTA hover/focus.
- **Motion:** CSS only, 150–250 ms, `prefers-reduced-motion` respected.
- **Imagery:** real photos in `/public/images` (owner supplies). Until then: lightweight SVG/CSS placeholders. Never scrape or hotlink copyrighted Haram/Nabawi images. Generate `TODO_PHOTOS.md`.
- **Accessibility:** WCAG 2.2 AA, focus rings (gold), skip link, 48×48 px touch targets, semantic landmarks, `<details>` for FAQs, `lang="en"` and `dir`.

---

## 7. MOBILE-FIRST UX

- **Sticky bottom action bar on mobile:** `Call` · `WhatsApp` (green) · `Get quote`. Hidden on desktop.
- **Hero above the fold:** H1, one-line promise, trust chips (★ 4.8 · 35 reviews · 24/7 · Hotel-to-hotel), quote widget.
- **Quote widget (client island):** route → date/time → passengers → luggage → vehicle class → name. Outputs: (a) "Book on WhatsApp" opens `wa.me/966539720003?text=` with structured URL-encoded message repeating vehicle class, route, date, pax, luggage; (b) optional "Request call back" posting to `/api/lead` (zod v4, honeypot, rate limit, optional Turnstile, email via Resend).
- Trust: `site.claims.noHiddenFees` boolean gates the "No hidden fees" claim.
- Booking confirmation template in `docs/whatsapp-templates.md` lists vehicle class before pickup.

---

## 8. PAGE BLUEPRINTS

### Home

1. Hero + quote widget + trust chips
2. Popular transfers route cards
3. How it works (3 steps)
4. Fleet overview
5. Ziyarah tours teaser
6. Why choose us (provable points only)
7. Real Google reviews carousel (CSS scroll-snap)
8. FAQ (6–8 questions, visible + JSON-LD)
9. Coverage area statement
10. Final CTA

### Route page template (700–1,000 words, **unique per route**)

1. H1 · 2. Answer box (40–60 words) · 3. Quick-facts table · 4. Quote widget · 5. How it works · 6. Vehicle options · 7. En-route notes · 8. Comparison table (vs train/bus/app) · 9. Route reviews · 10. Route FAQs · 11. Related routes · 12. CTA

### Blog (GEO/AEO hub) — 4 cornerstone guides fully, rest in `CONTENT_PLAN.md`

1. How to get from Jeddah Airport to Makkah hotel
2. Makkah to Madinah: taxi vs Haramain train vs bus
3. How long is the drive from Makkah to Madinah?
4. Ziyarah places in Makkah and Madinah: a practical visitor guide

---

## 9. COMPONENT LIST

`Header` · `MobileMenu` · `StickyActionBar` · `Hero` · `QuoteWidget` · `RouteCard` · `FleetCard` · `AnswerBox` · `QuickFacts` · `ComparisonTable` · `StepList` · `ReviewCard` / `ReviewCarousel` · `FAQ` (`<details>`) · `Breadcrumbs` · `RelatedLinks` · `CTASection` · `Footer` · `JsonLd` · `Prose` · `ConsentBanner`

---

## 10. TECHNICAL SEO

- **Metadata API** everywhere via `generateMetadata`: unique title (≤ 60 chars), description (120–160), `alternates.canonical` (absolute, trailing slash), OG + Twitter, `robots`, `metadataBase`.
- **Dynamic OG images** with `next/og` per route.
- `app/sitemap.ts`: all indexable URLs, real `updatedAt` (never `new Date()` at build).
- `app/robots.ts`: disallow `/api/`, `/_next/`; declare sitemap. AI-crawler policy per §13.
- **410** for `/.lsrecap/*`, `/wp-admin/*`, `/wp-login.php`, `/xmlrpc.php`, `/wp-json/*`.
- Custom 404 with helpful links, correct 404 status.
- Semantic HTML: one `<h1>`, logical heading order, `<main>`, `<nav>`, `<article>`, `<address>`, `<time datetime>`.
- Security headers: HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, frame-ancestors, CSP Report-Only.
- **IndexNow:** key file + `scripts/indexnow.ts` to ping on deploy.
- Verification meta placeholders for GSC + Bing.

---

## 11. STRUCTURED DATA (JSON-LD, server-rendered, single `@graph`, stable `@id`s)

- **Site-wide `@graph`:** `Organization`/`LocalBusiness` node (`@id: https://viptaxiserviceksa.com/#business`). `TaxiService` semantics. `areaServed` (Makkah, Madinah, Jeddah, KAIA). No `streetAddress` if service-area only. No `AggregateRating` on own schema.
- `WebSite` + `WebPage` per page.
- `Service` node per route/service page.
- `BreadcrumbList` on every inner page.
- `FAQPage` mirroring visible text exactly.
- `BlogPosting` for articles.
- `scripts/validate-seo.ts` must parse every JSON-LD block; fail on invalid JSON or missing required fields.

---

## 12. LOCAL SEO

- NAP from one source (`site.ts`) everywhere. Matches GBP exactly.
- Unique local information per route page (no doorway spam). `validate-seo.ts` flags pages > 60% overlapping shingles.
- Reviews page: real Google reviews only, always linking to GBP, "Leave a review" CTA.
- Contact: click-to-call, WhatsApp, map facade (click-to-load).

---

## 13. AEO / AIO / GEO

- Every page opens with answer-first block (40–60 words).
- H2s phrased as real questions; 2–4 sentence direct answer then detail.
- Extractable formats: short definitions, quick-facts tables, comparison tables, numbered steps, concise bullets.
- `/llms.txt` + `/llms-full.txt` (clean Markdown summary).
- `/feed.xml` (RSS/Atom) for blog.
- **robots.ts AI crawler policy:** allow search/answer crawlers (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`, `Applebot`). Training-only bots (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`) behind `allowAiTraining` config flag (default `true`).
- `OFFSITE_CHECKLIST.md` for the owner (GBP, Bing Places, Apple Business Connect, review generation flow, etc.)

---

## 14. CONTENT RULES

- Voice: warm, respectful, plain English, short sentences. No exaggeration, no "#1", no unverifiable superlatives.
- Every claim either from §2, from owner via config, or clearly marked "approximate".
- Unique meta title/description/H1/answer-box per page.
- Reading level Grade 7–9. Every page ends with a clear next step.

---

## 15. PERFORMANCE, ACCESSIBILITY, SECURITY BUDGET

- Fonts ≤ 2 families, ≤ 4 files; images ≤ 150 KB above fold (AVIF); Maps and third-party embeds behind click-to-load facades.
- Client JS only in widget/menu/consent islands.
- GA4 `lazyOnload`/after interaction; optional Microsoft Clarity gated by consent. Nothing else.
- Forms: server-side zod v4 validation, honeypot, rate limiting, no PII logging.
- GA4 Consent Mode v2 banner; deny by default for EEA/UK.

---

## 16. MIGRATION FROM WORDPRESS

1. Keep `/`, `/about-us/`, `/airport-transfers-for-umrah-hajj-pilgrims/` at same URLs.
2. 301s: `/about/ → /about-us/`, old service slugs → new equivalents.
3. 410 for `/.lsrecap/*` and WP junk paths.
4. Post-launch checklist file: submit sitemap GSC + Bing, monitor Coverage/Pages for 30 days.

---

## 17. ANALYTICS & CONVERSION TRACKING

- GA4 events via `track()` helper: `click_whatsapp`, `click_call`, `submit_quote`, `open_quote_widget`, `view_route`, `click_directions`.
- Capture `utm_*`, `gclid`, `fbclid` into WhatsApp message footer as `[src:...]`.
- `docs/analytics.md` describing events, naming, GSC/GA4 setup.

---

## 18. QA & DEFINITION OF DONE

- [ ] `npm run check` passes
- [ ] All public pages statically generated; sitemap complete; robots correct
- [ ] Lighthouse mobile ≥ 95/100/100/100 on Home + one route page
- [ ] LCP < 2.0 s, CLS < 0.03; bundle report attached
- [ ] Axe: 0 serious/critical issues on Home, route, contact, FAQ
- [ ] JSON-LD validates (no errors)
- [ ] All CTAs work on iOS Safari + Android Chrome
- [ ] 301/410 redirects tested with `curl -I`
- [ ] No `TODO_` in production build (`STRICT=1`)
- [ ] `TODO_OWNER.md`, `TODO_PHOTOS.md`, `OFFSITE_CHECKLIST.md`, `CONTENT_PLAN.md`, `docs/*` created
- [ ] README with setup, env vars, deploy steps

---

## 19. PHASES

- **Phase 0** — Recon & Plan: inspect repo, verify versions, write `PLAN.md`, ask ≤ 8 blocking questions.
- **Phase 1** — Foundation: scaffold, Tailwind v4 tokens, fonts, layout, config, lint/format/test setup, security headers, redirects, 410 handler.
- **Phase 2** — Design system & components: all components in §9, demo route `/_design` (noindex, not in sitemap).
- **Phase 3** — Data & pages: data files, Home, route template, service pages, fleet, about, contact, reviews, FAQ, legal.
- **Phase 4** — SEO layer: metadata, JSON-LD graph, sitemap/robots/llms.txt/RSS/IndexNow, OG images, breadcrumbs, internal linking, validation scripts.
- **Phase 5** — Conversion & analytics: quote widget, lead API, sticky bar, tracking, consent.
- **Phase 6** — Content: 4 cornerstone blog guides + all route copy.
- **Phase 7** — QA & hardening: §18 checklist, final report with scores and launch checklist.

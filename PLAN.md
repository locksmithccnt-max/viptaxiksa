# PLAN.md — VIP Taxi Service KSA

### Phase 0 Output · Generated 2026-09-18

---

## Verified Versions

| Package               | Version                  |
| --------------------- | ------------------------ |
| Next.js               | 16.3.5 (latest stable)   |
| Tailwind CSS          | 4.3.3 (v4, CSS-first)    |
| TypeScript            | 7.0.2                    |
| React                 | 19 (Next.js 16 peer dep) |
| Node.js               | 22.22.0                  |
| schema-dts            | 2.0.0                    |
| zod                   | 4.6.5                    |
| lucide-react          | 1.47.0                   |
| clsx / tailwind-merge | 2.1.1 / 3.7.0            |
| @next/mdx             | 16.3.5                   |
| Playwright            | 1.63.0                   |
| @axe-core/playwright  | 4.13.0                   |
| resend                | 6.28.1                   |

**Key Next.js 16 API notes:**

- `next lint` command removed → use `eslint .` in `package.json` scripts
- `params` and `searchParams` in App Router page props are Promises (async) → must be awaited
- `middleware.ts` remains but internal config option changed; verify proxy rename before using advanced config
- `generateStaticParams` + `dynamicParams = false` for fully-static dynamic segments

---

## Architecture Overview

```
Request → Vercel Edge → Next.js 16 App Router (static/SSG) → RSC HTML
                                      ↓ (interactive islands only)
                              Client Components hydrated selectively
                              (QuoteWidget, MobileMenu, StickyActionBar, ConsentBanner)
```

- All public pages: **static generation** (`output: 'export'`-compatible on Vercel, `force-static`)
- Dynamic route `/[slug]/` generates all route/service slugs via `generateStaticParams`; `dynamicParams = false` — unknown slugs → 404
- Blog `/blog/[slug]/` same pattern from MDX files
- Only dynamic at runtime: `/api/lead` (POST), OG image routes (`/opengraph-image`)

---

## File Tree

```
viptaxiksa/
├── CLAUDE.md                          # This project's operating contract
├── PLAN.md                            # This file
├── TODO_OWNER.md                      # Items requiring owner confirmation
├── TODO_PHOTOS.md                     # Photo brief for owner
├── OFFSITE_CHECKLIST.md               # GBP / citations / review generation
├── CONTENT_PLAN.md                    # Blog backlog + content calendar
├── README.md                          # Setup, env vars, deploy, how to add routes
│
├── package.json
├── tsconfig.json                      # strict: true, paths aliases
├── next.config.ts                     # trailingSlash, security headers, redirects
├── eslint.config.ts                   # Flat config (no next lint)
├── .prettierrc                        # + prettier-plugin-tailwindcss
├── .env.local.example
│
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── manifest.webmanifest
│   ├── llms.txt
│   ├── llms-full.txt
│   ├── [indexnow-key].txt             # IndexNow verification
│   └── images/
│       └── .gitkeep                   # Owner supplies real photos here
│
├── src/
│   ├── config/
│   │   └── site.ts                    # NAP, brand, claims, features, flags
│   │
│   ├── data/
│   │   ├── routes.ts                  # All transfer route data (slug, title, meta, content blocks)
│   │   ├── services.ts                # Non-route service pages (limousine, ziyarah, etc.)
│   │   ├── fleet.ts                   # Vehicle classes (seats, luggage, best-for)
│   │   ├── faq.ts                     # Categorised FAQ items
│   │   └── reviews.ts                 # Real Google reviews with attribution
│   │
│   ├── app/
│   │   ├── globals.css                # Tailwind v4 @import + @theme tokens
│   │   ├── layout.tsx                 # Root RSC layout (fonts, metadata base, skip link)
│   │   ├── page.tsx                   # Home page (RSC)
│   │   ├── not-found.tsx              # Custom 404
│   │   ├── sitemap.ts                 # Dynamic sitemap (all public pages, real updatedAt)
│   │   ├── robots.ts                  # robots.txt with AI crawler policy
│   │   ├── feed.xml/
│   │   │   └── route.ts               # RSS/Atom feed for blog
│   │   │
│   │   ├── [slug]/                    # All transfer route pages
│   │   │   └── page.tsx               # generateStaticParams from routes.ts
│   │   │
│   │   ├── services/
│   │   │   └── page.tsx               # Services hub
│   │   │
│   │   ├── fleet/
│   │   │   └── page.tsx
│   │   │
│   │   ├── about-us/                  # KEEP — already indexed
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   │
│   │   ├── reviews/
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx               # Blog index
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # generateStaticParams from MDX files
│   │   │
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   │
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   │
│   │   ├── _design/                   # noindex design system demo (dev only)
│   │   │   └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── lead/
│   │   │       └── route.ts           # POST handler: zod, honeypot, rate limit, Resend
│   │   │
│   │   └── _gone/                     # 410 handler for WP/junk paths
│   │       └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # RSC, sticky, collapses on mobile
│   │   │   ├── MobileMenu.tsx         # Client — toggle drawer
│   │   │   ├── StickyActionBar.tsx    # Client — mobile bottom bar (Call/WA/Quote)
│   │   │   ├── Footer.tsx             # RSC — NAP, all service links, socials
│   │   │   ├── Breadcrumbs.tsx        # RSC — structured data + visual
│   │   │   └── SkipLink.tsx           # RSC — a11y
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # RSC — H1, trust chips, quote widget placeholder
│   │   │   ├── RouteCard.tsx          # RSC — service route summary card
│   │   │   ├── FleetCard.tsx          # RSC — vehicle class card
│   │   │   ├── AnswerBox.tsx          # RSC — 40–60 word answer block
│   │   │   ├── QuickFacts.tsx         # RSC — key:value table
│   │   │   ├── ComparisonTable.tsx    # RSC — taxi vs alternatives
│   │   │   ├── StepList.tsx           # RSC — numbered how-it-works
│   │   │   ├── ReviewCard.tsx         # RSC — single review
│   │   │   ├── ReviewCarousel.tsx     # Client — CSS scroll-snap, no JS lib
│   │   │   ├── FAQ.tsx                # RSC — <details> accordions
│   │   │   ├── RelatedLinks.tsx       # RSC — cross-link block
│   │   │   └── CTASection.tsx         # RSC — full-width CTA with WA + call buttons
│   │   │
│   │   ├── booking/
│   │   │   ├── QuoteWidget.tsx        # Client island — full booking form
│   │   │   └── WhatsAppButton.tsx     # Client — wa.me link generator
│   │   │
│   │   ├── seo/
│   │   │   ├── JsonLd.tsx             # RSC — typed JSON-LD injector
│   │   │   └── OgImage.tsx            # next/og template
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx             # Primary / secondary / ghost variants
│   │   │   ├── Badge.tsx              # Trust chip / tag
│   │   │   ├── Prose.tsx              # Typography wrapper for MDX
│   │   │   └── ConsentBanner.tsx      # Client — GA4 Consent Mode v2
│   │   │
│   │   └── maps/
│   │       └── MapFacade.tsx          # Client — click-to-load GBP map embed
│   │
│   ├── lib/
│   │   ├── utils.ts                   # cn(), formatPhone(), encodeWAMessage()
│   │   ├── schema.ts                  # JSON-LD graph builder helpers
│   │   ├── track.ts                   # GA4 track() helper
│   │   ├── rate-limit.ts              # Simple in-memory rate limiter for API
│   │   └── mdx.ts                     # MDX file reader helpers
│   │
│   └── types/
│       ├── site.ts                    # Site config type
│       ├── route.ts                   # RouteData, ServiceData types
│       └── review.ts                  # Review type
│
├── content/
│   └── blog/
│       ├── jeddah-airport-to-makkah-guide.mdx
│       ├── makkah-to-madinah-taxi-vs-train.mdx
│       ├── makkah-to-madinah-drive-duration.mdx
│       └── ziyarah-places-makkah-madinah.mdx
│
├── scripts/
│   ├── validate-seo.ts                # Build-time HTML + JSON-LD + similarity check
│   └── indexnow.ts                    # Ping Bing/IndexNow on deploy
│
├── tests/
│   ├── smoke.spec.ts                  # Playwright — key pages load, status codes
│   └── a11y.spec.ts                   # axe-core on Home, route, contact, FAQ
│
└── docs/
    ├── analytics.md                   # GA4 events, GSC setup
    ├── redirect-map.csv               # Old URL → new URL (WP migration)
    ├── seo-verify.md                  # Instructions: Rich Results Test, Schema validator
    └── whatsapp-templates.md          # Booking message templates (vehicle class explicit)
```

---

## Route & URL Table

| Slug                                          | Type    | Status   | Old URL (if any) |
| --------------------------------------------- | ------- | -------- | ---------------- |
| `/`                                           | Home    | keep     | `/`              |
| `/services/`                                  | Hub     | new      | —                |
| `/jeddah-airport-to-makkah-taxi/`             | Route   | new      | —                |
| `/makkah-to-jeddah-airport-taxi/`             | Route   | new      | —                |
| `/makkah-to-madinah-taxi/`                    | Route   | new      | —                |
| `/madinah-to-makkah-taxi/`                    | Route   | new      | —                |
| `/makkah-ziyarah-tour/`                       | Service | new      | —                |
| `/madinah-ziyarah-tour/`                      | Service | new      | —                |
| `/makkah-to-jeddah-sightseeing-tour/`         | Service | new      | —                |
| `/limousine-service-saudi-arabia/`            | Service | new      | —                |
| `/airport-transfers-for-umrah-hajj-pilgrims/` | Service | **keep** | same             |
| `/fleet/`                                     | Info    | new      | —                |
| `/about-us/`                                  | Info    | **keep** | same             |
| `/contact/`                                   | Info    | new      | —                |
| `/faq/`                                       | Info    | new      | —                |
| `/reviews/`                                   | Info    | new      | —                |
| `/blog/`                                      | Hub     | new      | —                |
| `/blog/[slug]/`                               | Article | new      | —                |
| `/privacy-policy/`                            | Legal   | new      | —                |
| `/terms/`                                     | Legal   | new      | —                |

### 301 Redirects (via next.config)

| From      | To           |
| --------- | ------------ |
| `/about/` | `/about-us/` |
| `/about`  | `/about-us/` |

### 410 Gone (route handler)

- `/.lsrecap/*`
- `/wp-admin*`
- `/wp-login.php`
- `/xmlrpc.php`
- `/wp-json/*`
- `/wp-content/*`

### Optional routes (disabled, `enabled: false` in data)

- `/madinah-airport-to-madinah-hotel/`
- `/jeddah-airport-to-madinah/`
- `/madinah-airport-to-makkah/`
- `/taif-day-trip/`
- `/badr-day-trip/`

---

## Data Models (TypeScript sketches)

```typescript
// src/config/site.ts
export const site = {
  name: 'VIP Taxi Service KSA',
  gbpName: 'VIP TAXI KSA',
  url: 'https://viptaxiserviceksa.com',
  phone: '+966539720003',
  whatsapp: 'https://wa.me/966539720003',
  gbpUrl: 'TODO_GBP_FULL_URL',
  rating: { value: 4.8, count: 35 }, // verify before launch
  address: { type: 'service-area' }, // no streetAddress until owner confirms
  areaServed: ['Makkah', 'Madinah', 'Jeddah', 'KAIA'],
  claims: {
    noHiddenFees: false, // gate until owner confirms
    available24_7: false, // gate until confirmed
    languages: [] as string[], // gate until confirmed
  },
  social: {
    // TODO_SOCIAL_*
  },
  ga4Id: process.env.NEXT_PUBLIC_GA_ID ?? '',
  allowAiTraining: true,
}

// src/types/route.ts
export interface RouteData {
  slug: string
  title: string
  h1: string
  metaDescription: string
  answerBox: string
  fromCity: string
  toCity: string
  approxDistanceKm: [number, number] // range
  approxDurationMin: [number, number]
  reverseSlug: string
  relatedSlugs: string[]
  enabled: boolean
  updatedAt: string // ISO date
  // ... content blocks, FAQ items, etc.
}

// src/types/review.ts
export interface Review {
  id: string
  author: string
  rating: number
  text: string
  route?: string
  source: 'google'
}
```

---

## Risks & Mitigations

| Risk                                           | Mitigation                                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Next.js 16 `proxy` rename unknown              | Before writing middleware/proxy: read `node_modules/next/dist/docs` or official changelog; do not guess |
| schema-dts 2.0 API changes                     | Check exported types from package before writing JSON-LD helpers                                        |
| Zod v4 API differences from v3                 | Use `.parse()`, `.safeParse()` as-is; avoid `.transform()` chains that changed; test at build time      |
| Tailwind v4 CSS-first: no `tailwind.config.ts` | All config in `globals.css` via `@theme`; verify `tailwind-merge` compat with v4 class names            |
| React 19 server/client boundary changes        | Double-check `use client` placement; no accidental `useState` in RSC files                              |
| WP migration 301 churn                         | Map all old WP URLs before touching DNS; test with `curl -I` in staging                                 |
| Content similarity (doorway pages)             | `validate-seo.ts` shingle similarity check flags > 60% overlap                                          |
| `new Date()` in sitemap                        | Must use real `updatedAt` string from each data file; build fails if `TODO_` in `STRICT=1`              |
| Photos not yet available                       | SVG/CSS placeholders maintain layout; `TODO_PHOTOS.md` lists exact shots needed                         |
| GBP short URL                                  | Must resolve once and hardcode; if unresolvable at build, `TODO_GBP_FULL_URL` + warn                    |

---

## Open Questions for Owner (Phase 0 — Blocking Questions)

The following 8 questions are the minimum needed before writing public-facing content. Sensible placeholders are used where unblocked; items are gated in `site.ts` and documented in `TODO_OWNER.md`.

1. **Physical address vs service-area only** — Do you have a public address customers can visit, or is this a service-area business (vehicles go to the customer)? This affects LocalBusiness schema, GBP category, and whether any address appears on the site.

2. **Fleet — exact vehicle classes** — What vehicles do you operate, with seat count and max luggage per class? (e.g. Toyota Camry: 4 pax, 3 large bags; Hyundai H1/Toyota Hiace: 7 pax, 6 large bags; Coaster: 12 pax, ...). Critical for the booking widget vehicle-class selector and to explicitly prevent the wrong-vehicle issue noted in reviews.

3. **Languages your team actually speaks** — Which languages do your drivers and support staff handle? (Arabic is assumed; English, Urdu, French, Indonesian, Turkish?) This determines the language flags shown near the booking widget.

4. **Pricing policy** — Is pricing fixed per route, quote-based, or a mix? Can any "from" prices be listed on the site, or strictly quote-only? This also gates the WhatsApp message format.

5. **Optional routes you actually offer** — Do you serve: (a) Madinah Airport (MED) ↔ Madinah city hotels, (b) Jeddah Airport ↔ Madinah directly, (c) Madinah Airport → Makkah, (d) Taif or Badr day trips? These are high-demand searches — include only if you genuinely serve them.

6. **Payment methods** — What payments do you accept? (Cash SAR/USD, credit card in vehicle, Apple Pay, bank transfer, MADA, Tabby/Tamara?) This goes in the QuickFacts table on every route page.

7. **Operating hours / response times** — Are you genuinely 24/7 for both the rides and WhatsApp support? What is the typical WhatsApp response time (e.g. "within 30 minutes")?

8. **Photos + GBP full URL** — (a) Can you supply real vehicle, interior, or driver photos now, or should the site launch with placeholder graphics? (b) What is the full Google Maps / Business Profile URL? The short link `https://share.google/KtTCWGbTSkkSePAP6` needs to be resolved to the canonical URL (e.g. `https://www.google.com/maps/place/...`) for the schema markup.

---

## Phase Timeline

| Phase | What                       | Est. scope                                                                            |
| ----- | -------------------------- | ------------------------------------------------------------------------------------- |
| 0     | Recon, plan, questions     | Done                                                                                  |
| 1     | Scaffold + Foundation      | package.json, tsconfig, next.config, globals.css, layout, site.ts, lint, headers, 410 |
| 2     | Design system & components | All 20 components, `/_design` demo route                                              |
| 3     | Data & all pages           | Data files, Home, all route/service/info pages                                        |
| 4     | SEO layer                  | metadata, JSON-LD graph, sitemap, robots, llms.txt, OG images, validation scripts     |
| 5     | Conversion & analytics     | QuoteWidget, /api/lead, StickyActionBar, GA4 events, ConsentBanner                    |
| 6     | Content                    | 4 blog guides + full route copy                                                       |
| 7     | QA & hardening             | Lighthouse, axe, bundle report, Playwright, final checklist                           |

Proceeding to Phase 1 after owner answers the 8 questions above (or immediately using placeholders if the user gives the go-ahead).

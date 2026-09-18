# VIP Taxi Service KSA — Website

Production website for VIP Taxi Service KSA, a private transfer business serving Makkah, Madinah and Jeddah.

**Stack:** Next.js 16 · Tailwind CSS v4 · TypeScript · App Router · Static Generation

---

## Quick start

```bash
cp .env.local.example .env.local
# Fill in required env vars (see below)
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Copy `.env.local.example` to `.env.local`:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full domain, no trailing slash |
| `NEXT_PUBLIC_GA_ID` | No | GA4 Measurement ID (G-XXXXXXXXXX) |
| `RESEND_API_KEY` | No | Email lead notifications (WA-only fallback if empty) |
| `RESEND_TO_EMAIL` | No | Recipient for lead emails |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | No | Cloudflare Turnstile CAPTCHA |
| `TURNSTILE_SECRET_KEY` | No | Cloudflare Turnstile secret |
| `INDEXNOW_KEY` | No | IndexNow key for Bing/Yandex ping |
| `NEXT_PUBLIC_GSC_VERIFICATION` | No | Google Search Console meta verification value |
| `NEXT_PUBLIC_BING_VERIFICATION` | No | Bing Webmaster Tools meta verification value |

---

## npm scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run check` | Full quality gate (typecheck + lint + format + build) |
| `npm run typecheck` | TypeScript strict check |
| `npm run lint` | ESLint flat config |
| `npm run format` | Prettier write (fix formatting) |
| `npm run format:check` | Prettier check (CI) |
| `npm run validate-seo` | SEO/schema validation script |
| `npm run indexnow` | Ping IndexNow (run after deploy) |
| `npm test` | Playwright smoke + a11y tests |

**Quality gate before every commit:** `npm run check`
**Strict mode (fails on TODO_ placeholders):** `STRICT=1 npm run build`

---

## How to add a new transfer route (5 minutes)

1. **Add route data** in `src/data/routes.ts`:
   ```typescript
   {
     slug: 'your-new-route-taxi',
     title: 'Your New Route Taxi – Private Transfer',
     h1: 'Your New Route Taxi – Private Family Transfer',
     metaDescription: '120–160 char unique description...',
     answerBox: '40–60 word direct answer...',
     fromCity: 'City A',
     toCity: 'City B',
     approxDistanceKm: [100, 120],
     approxDurationMin: [90, 120],
     reverseSlug: 'city-b-to-city-a-taxi',
     relatedSlugs: ['related-route-1', 'related-route-2'],
     enabled: true,
     updatedAt: '2026-09-18',
     faq: [...],
   }
   ```
2. **Add sitemap entry** in `src/app/sitemap.ts`.
3. Run `npm run check`. The `[slug]/page.tsx` template picks it up automatically.

---

## How to add a blog post (5 minutes)

1. Create `content/blog/your-post-slug.mdx` with frontmatter:
   ```mdx
   ---
   title: 'Your Post Title'
   description: '120–160 char meta description'
   publishedAt: '2026-09-18'
   updatedAt: '2026-09-18'
   author: 'VIP Taxi Service KSA'
   ---
   
   Your content here...
   ```
2. Add the slug to `src/app/sitemap.ts`.
3. Run `npm run check`.

---

## Deployment (Vercel)

1. Push to GitHub.
2. Connect repo to Vercel.
3. Add environment variables in the Vercel dashboard.
4. Deploy. Vercel auto-builds on every push.
5. Run `npm run indexnow` after first production deploy to ping Bing/IndexNow.
6. Submit `https://viptaxiserviceksa.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

---

## Owner actions before launch

See `TODO_OWNER.md` for the complete list of items requiring confirmation (address, fleet, languages, pricing, GBP URL, etc.).

See `TODO_PHOTOS.md` for the photo brief.

See `OFFSITE_CHECKLIST.md` for GBP, citations, and review generation.

---

## Project phases

| Phase | Status |
|---|---|
| 0 — Recon & Plan | ✅ Done |
| 1 — Foundation | ✅ Done |
| 2 — Design system & components | ⏳ Next |
| 3 — Data & pages | Pending |
| 4 — SEO layer | Pending |
| 5 — Conversion & analytics | Pending |
| 6 — Content | Pending |
| 7 — QA & hardening | Pending |

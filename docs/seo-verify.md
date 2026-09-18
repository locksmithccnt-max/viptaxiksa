# SEO Verification Guide — VIP Taxi Service KSA

## 1. Rich Results Test (Google)

URL: https://search.google.com/test/rich-results

Test every page type:

- Home: `https://viptaxiserviceksa.com/`
- A route page: `https://viptaxiserviceksa.com/makkah-to-madinah-taxi/`
- FAQ page: `https://viptaxiserviceksa.com/faq/`
- A blog post

Expected results:

- 0 errors
- FAQ rich result detected on pages with `FAQPage` schema
- No warnings about invalid schema values

## 2. Schema.org Validator

URL: https://validator.schema.org/

Paste the full page URL or HTML source. Check:

- `LocalBusiness` / `TaxiService` is valid
- `areaServed` cities resolve to schema.org `City` or `AdministrativeArea`
- `BreadcrumbList` is correct on inner pages
- `FAQPage` Q&A matches visible page text exactly
- No `AggregateRating` on the business's own `LocalBusiness` (self-serving — not used)

## 3. `npm run validate-seo` (build-time check)

The `scripts/validate-seo.ts` script checks `.next/server/app/` HTML output for:

- Exactly one `<h1>` per page
- Title length: 30–60 characters
- Meta description: 120–160 characters
- Canonical present and self-referencing
- Valid JSON-LD (parses without error)
- No `noindex` on public pages
- Content similarity: flags pages with >60% shingle overlap (doorway page detection)

Run: `npm run validate-seo`

Fails with exit code 1 on errors. In CI, this is part of the `check` script.

## 4. Sitemap validation

After deploy:

- Open `https://viptaxiserviceksa.com/sitemap.xml` in browser — all URLs should be listed
- Verify all URLs are indexable (no `noindex` on any sitemap URL)
- No 404 or 301 URLs in the sitemap (sitemap should only contain canonical final destinations)

## 5. robots.txt check

Open `https://viptaxiserviceksa.com/robots.txt`:

- `Allow: /` for all crawlers
- `Disallow: /api/` and `/_next/`
- `Sitemap:` directive present and correct

## 6. 301/410 redirect testing

```bash
# Test 301 redirects
curl -sI https://viptaxiserviceksa.com/about/ | grep -E "HTTP|Location"
# Expected: HTTP/2 301, Location: /about-us/

# Test 410 Gone for WP paths
curl -sI https://viptaxiserviceksa.com/wp-admin | grep "HTTP"
# Expected: HTTP/2 410

curl -sI https://viptaxiserviceksa.com/.lsrecap/recaptcha | grep "HTTP"
# Expected: HTTP/2 410
```

## 7. Core Web Vitals (pre-launch)

Use PageSpeed Insights: https://pagespeed.web.dev/

Target (mobile, throttled):

- Performance ≥ 95
- Accessibility 100
- Best Practices 100
- SEO 100
- LCP < 2.0 s
- CLS < 0.03

## 8. Axe accessibility audit

Run as part of Playwright tests: `npm test`

Or manually in Chrome DevTools:

1. Install Axe DevTools extension
2. Open the page
3. Run the audit
4. Target: 0 critical or serious issues

## 9. IndexNow (post-launch)

After deploying to production:

```bash
npm run indexnow
```

This pings Bing/Yandex with the sitemap URL for immediate crawl scheduling.

## 10. AI engine citation testing (monthly)

Test these prompts in ChatGPT, Perplexity, Google AI Overview, and Claude:

- "best private taxi from Makkah to Madinah"
- "Jeddah airport to Makkah hotel taxi"
- "VIP Taxi KSA review"
- "how long does it take to drive from Makkah to Madinah"

Monitor if the site is cited. Record results monthly.

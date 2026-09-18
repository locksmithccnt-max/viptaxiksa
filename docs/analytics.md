# Analytics Setup — VIP Taxi Service KSA

## GA4 Events

All events are fired via the `track()` helper in `src/lib/track.ts`. This helper is a thin wrapper that silently no-ops if GA is not loaded (consent not given, ad-blocker, etc.).

| Event name | Trigger | Key parameters |
|---|---|---|
| `click_whatsapp` | Any WhatsApp CTA click | `route` (page slug) |
| `click_call` | Any phone call CTA click | `route` (page slug) |
| `submit_quote` | Quote form submission | `route` (page slug) |
| `open_quote_widget` | Quote widget opened/expanded | `route` (page slug) |
| `view_route` | Route page viewed (GA auto-event supplement) | `route` (page slug) |
| `click_directions` | "Get directions" / map link clicked | — |

### Key events (mark in GA4 as conversions)
- `click_whatsapp`
- `click_call`
- `submit_quote`

## UTM / source tracking in WhatsApp messages

The booking widget appends a `[src:...]` tag to the WhatsApp message body so the owner can attribute chats:

- `[src:google-organic]` — organic Google search
- `[src:google-ads]` — Google Ads (gclid detected)
- `[src:facebook-ad]` — Facebook Ads (fbclid detected)
- `[src:direct]` — direct / no referrer
- `[src:instagram]` — Instagram link
- `[src:whatsapp-share]` — shared via WhatsApp itself

## GA4 Consent Mode v2

The site implements GA4 Consent Mode v2 via the `ConsentBanner` component:
- Default: analytics denied (or region-based default deny for EEA/UK).
- On accept: analytics and ad_storage granted; GA4 begins collecting.
- On deny/dismiss: denied state persisted in localStorage; no GA4 data collected.

**Setup in GA4:**
1. Create GA4 property at analytics.google.com.
2. Get Measurement ID (G-XXXXXXXXXX).
3. Add to Vercel env: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`.
4. In GA4 Admin → Data collection → Consent mode: confirm "Consent mode is active".
5. Mark `click_whatsapp`, `click_call`, `submit_quote` as Key Events in Admin → Events.

## Google Search Console

1. Verify ownership: add the verification meta tag value to `NEXT_PUBLIC_GSC_VERIFICATION`.
2. After launch: Submit sitemap at `https://viptaxiserviceksa.com/sitemap.xml`.
3. Request indexing for key pages: `/`, `/jeddah-airport-to-makkah-taxi/`, `/makkah-to-madinah-taxi/`, etc.
4. Monitor Coverage/Pages report weekly for the first 30 days.

## Bing Webmaster Tools

1. Verify at https://www.bing.com/webmasters — add meta tag value to `NEXT_PUBLIC_BING_VERIFICATION`.
2. Submit sitemap after launch.
3. IndexNow: run `npm run indexnow` after each deploy to ping Bing immediately.

Bing's index also feeds ChatGPT Search and Microsoft Copilot — keeping Bing current matters for AI citation.

# TODO_OWNER.md

### Items that must be confirmed by the business owner before launch

Every item below is currently a `TODO_*` placeholder in `src/config/site.ts`.
Run `STRICT=1 npm run build` to fail the build if any remain.

---

## 1. Address type

**Question:** Is this a service-area business (no physical address customers visit), or do you have a storefront/office address you're happy to publish?

- If service-area: confirm so we can omit `streetAddress` from schema and GBP.
- If physical: provide full address (building, street, district, city, postal code) in Arabic and English, exactly as it appears on your GBP.

Config key: `site.address`

---

## 2. Fleet — vehicle classes

**Question:** What vehicles do you operate?

For each class provide:

- Vehicle make & model (e.g. Toyota Camry, Toyota Hiace, Hyundai H1, Mercedes-Benz Vito)
- Number of passenger seats (not including driver)
- Maximum large suitcases (standard checked-luggage size)
- Maximum small bags / carry-on
- Best-for description (e.g. "couples and solo travellers", "families up to 6", "groups up to 12")

This powers the booking widget vehicle selector. Getting this right avoids the wrong-vehicle confusion one reviewer experienced.

Config key: `site.fleet` → will expand to `src/data/fleet.ts`

---

## 3. Languages spoken

**Question:** Which languages do your drivers and WhatsApp support team actually handle?

Options common for this route: Arabic, English, Urdu, French, Indonesian, Turkish, Malay.
Only list languages you can genuinely communicate in for bookings and during the trip.

Config key: `site.languages`

---

## 4. Pricing policy

**Question:** How is pricing structured?

- **Fixed per route:** provide the exact SAR (and optionally USD) price per vehicle class per route.
- **Quote-only:** we will not list prices; the booking widget sends a WhatsApp quote request.
- **Mixed:** specify which routes have fixed prices.

If you have fixed prices, provide a table: route × vehicle class × price.

Config key: `site.pricing`

---

## 5. Optional routes

**Question:** Do you serve any of these routes? (Only add pages for routes you genuinely offer.)

| Route                                       | Serve?   |
| ------------------------------------------- | -------- |
| Madinah Airport (MED) ↔ Madinah city hotels | Yes / No |
| Jeddah Airport ↔ Madinah (direct, ~500 km)  | Yes / No |
| Madinah Airport → Makkah (direct)           | Yes / No |
| Taif day trip from Makkah                   | Yes / No |
| Badr / Uhud / Quba day trip from Madinah    | Yes / No |

These are high-search-volume queries. We will only publish pages for routes you confirm.

Config key: `site.optionalRoutes`

---

## 6. Payment methods

**Question:** What payment methods do you accept?

- Cash in Saudi Riyal (SAR)
- Cash in US Dollars (USD)
- Cash in other currencies — which?
- Credit/debit card in the vehicle — brand (Visa/Mastercard/Amex)?
- Apple Pay / Google Pay?
- MADA (Saudi domestic card)
- Bank transfer (STC Pay, Stcpay, etc.)?
- Tabby / Tamara (buy-now-pay-later)?
- Other?

Config key: `site.paymentMethods`

---

## 7. Operating hours & WhatsApp response time

**Question:** Are you genuinely available 24 hours a day, 7 days a week?

- For rides: what is the earliest and latest pickup you accept?
- For WhatsApp responses: what is a realistic response time you can commit to? (e.g. "within 1 hour", "within 30 minutes for confirmed bookings")

The site will not claim "24/7" unless you confirm it. We will use the exact wording you provide.

Config key: `site.claims.available24_7`, `site.claims.whatsappResponseTime`

---

## 8. "No hidden fees" claim

**Question:** Can you formally commit to no hidden fees for all transfers?

One Google reviewer mentioned "no hidden fee, easy booking, on time" — this is a strong trust signal. If you can guarantee this as a policy (not just a one-off experience), we will display it prominently.

Config key: `site.claims.noHiddenFees`

---

## 9. Google Business Profile full URL

**Question:** What is the full Google Maps / GBP URL?

The short link `https://share.google/KtTCWGbTSkkSePAP6` needs to resolve to the full canonical URL (e.g. `https://www.google.com/maps/place/VIP+TAXI+KSA/@21.38...,39.85...`) for use in schema markup and the "Leave a review" button.

Also provide the direct Google review link (the URL that opens the rating sheet directly).

Config key: `site.gbpUrl`, `site.gbpReviewUrl`

---

## 10. Social profiles

**Question:** Do you have active profiles on any of these? (Only list active ones — dormant profiles hurt credibility.)

- Facebook page URL
- Instagram profile URL
- TikTok profile URL
- YouTube channel URL
- X / Twitter (if active)
- LinkedIn (if relevant)

Config key: `site.social`

---

## 11. Google Analytics 4 ID

**Question:** Do you have a GA4 property set up for viptaxiserviceksa.com?

If yes, provide the Measurement ID (format: G-XXXXXXXXXX).
If no, we will set one up as part of the launch checklist.

Env var: `NEXT_PUBLIC_GA_ID`

---

## 12. Search Console access

**Question:** Is viptaxiserviceksa.com verified in Google Search Console?

After launch, we need to:

1. Submit the sitemap: `https://viptaxiserviceksa.com/sitemap.xml`
2. Request indexing for key pages
3. Monitor Coverage/Pages report for 30 days
4. Submit to Bing Webmaster Tools

Provide GSC and Bing Webmaster Tools access, or the verification codes so we can add them to the site.

Env vars: `NEXT_PUBLIC_GSC_VERIFICATION`, `NEXT_PUBLIC_BING_VERIFICATION`

---

## 13. Staff / team information (for E-E-A-T on the About page)

**Question:** Can you provide any of the following for the About page?

- Owner or manager name (first name is fine)
- Years in operation or founding year
- Any TGA (Transport General Authority) licence number you are happy to publish
- Insurance coverage statement (e.g. "fully insured for passenger transport")
- Team photo (driver in uniform with vehicle, or similar)

The more real, verifiable information on the About page, the stronger the E-E-A-T signal for Google and AI engines.

---

## 14. Real photos

See `TODO_PHOTOS.md` for the full photo brief.

---

_Last updated: 2026-09-18_

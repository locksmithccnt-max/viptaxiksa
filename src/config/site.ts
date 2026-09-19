/**
 * Single source of truth for all business facts.
 * TODO_* values must be filled in by the owner before launch.
 * Run `STRICT=1 npm run build` to fail on any remaining TODO_ values.
 */

export const site = {
  // ── Brand ────────────────────────────────────────────────────────────────
  name: 'VIP Taxi Service KSA',
  gbpName: 'VIP TAXI KSA',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://viptaxiserviceksa.com',
  tagline: 'Private taxi transfers between Makkah, Madinah and Jeddah',

  // ── Contact ───────────────────────────────────────────────────────────────
  phone: '+966539720003',
  phonePretty: '+966 53 972 0003',
  phoneHref: 'tel:+966539720003',
  whatsapp: 'https://wa.me/966539720003',
  whatsappNumber: '966539720003',

  // ── Address ───────────────────────────────────────────────────────────────
  // Owner confirmation needed: is this a service-area business (no storefront)?
  address: {
    type: 'service-area' as 'service-area' | 'physical',
    // streetAddress: 'TODO_STREET_ADDRESS',  // uncomment if physical
    // city: 'TODO_CITY',
    // region: 'TODO_REGION',
    postalCode: 'TODO_POSTAL_CODE',
    countryCode: 'SA',
    countryName: 'Saudi Arabia',
  },

  // ── Service area ─────────────────────────────────────────────────────────
  areaServed: [
    { name: 'Makkah', nameAr: 'مكة المكرمة' },
    { name: 'Madinah', nameAr: 'المدينة المنورة' },
    { name: 'Jeddah', nameAr: 'جدة' },
    { name: 'King Abdulaziz International Airport', iata: 'JED', city: 'Jeddah' },
  ],

  // ── Reviews ───────────────────────────────────────────────────────────────
  // Verify current numbers on GBP before launch
  rating: {
    value: 4.8,
    count: 35,
    source: 'Google',
  },

  // ── GBP ───────────────────────────────────────────────────────────────────
  // Short link must be resolved once to the canonical maps URL
  gbpShortLink: 'https://share.google/KtTCWGbTSkkSePAP6',
  gbpUrl: 'TODO_GBP_FULL_URL', // e.g. https://www.google.com/maps/place/VIP+TAXI+KSA/...
  gbpReviewUrl: 'TODO_GBP_REVIEW_URL', // append ?hl=en#lrd=... for direct review flow

  // ── Social profiles (only add real, active profiles) ─────────────────────
  social: {
    // facebook: 'TODO_FACEBOOK_URL',
    // instagram: 'TODO_INSTAGRAM_URL',
    // tiktok: 'TODO_TIKTOK_URL',
    // youtube: 'TODO_YOUTUBE_URL',
  },

  // ── Fleet ─────────────────────────────────────────────────────────────────
  // Owner must confirm exact models, seat counts, and luggage capacity
  fleet: 'TODO_FLEET_DESCRIPTION', // e.g. 'Sedan, SUV, and minivan options'

  // ── Operational claims (gate each behind owner confirmation) ─────────────
  claims: {
    noHiddenFees: false, // reviewer said it — owner must formally confirm
    available24_7: false, // needs confirmation
    whatsappResponseTime: 'TODO_WA_RESPONSE_TIME', // e.g. 'within 1 hour'
  },

  // ── Languages spoken by drivers/support ──────────────────────────────────
  // Leave empty until owner confirms
  languages: [] as string[], // e.g. ['Arabic', 'English', 'Urdu']

  // ── Payment methods ───────────────────────────────────────────────────────
  // Leave empty until owner confirms
  paymentMethods: [] as string[], // e.g. ['Cash SAR', 'Cash USD', 'Credit card']

  // ── Pricing ───────────────────────────────────────────────────────────────
  pricing: {
    model: 'quote-only' as 'fixed' | 'quote-only' | 'mixed',
    // fromPrices: {} // only add if owner provides real prices
  },

  // ── Analytics ─────────────────────────────────────────────────────────────
  ga4Id: process.env.NEXT_PUBLIC_GA_ID ?? '',

  // ── Verification ──────────────────────────────────────────────────────────
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? 'uex9F0L8UcdUIbiVxqil1wDsRN6N5cvErdgggiOIWHo',
  bingVerification: process.env.NEXT_PUBLIC_BING_VERIFICATION ?? '',

  // ── AI crawler policy ────────────────────────────────────────────────────
  allowAiTraining: true, // set false to block GPTBot, ClaudeBot, Google-Extended etc.

  // ── Optional routes (enable only after owner confirmation) ───────────────
  optionalRoutes: {
    madinahAirportTransfers: false,
    jeddahToMadinah: false,
    madinahAirportToMakkah: false,
    taifDayTrip: false,
    badrDayTrip: false,
  },
} as const

export type Site = typeof site

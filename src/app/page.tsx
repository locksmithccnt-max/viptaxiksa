import type { Metadata } from 'next'
import { site } from '@/config/site'
import { ROUTES } from '@/data/routes'
import { REVIEWS } from '@/data/reviews'
import { Hero } from '@/components/sections/Hero'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { RouteCard } from '@/components/sections/RouteCard'
import { ReviewCarousel } from '@/components/sections/ReviewCarousel'
import { StepList } from '@/components/sections/StepList'
import { CTASection } from '@/components/sections/CTASection'
import { QuoteWidget } from '@/components/booking/QuoteWidget'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'VIP Taxi Service KSA — Private Makkah, Madinah & Jeddah Transfers',
  description:
    'Private taxi transfers, Makkah · Madinah · Jeddah. Umrah & Hajj airport transfers, Ziyarah tours, intercity routes. 4.8★ Google. WhatsApp: +966 57 306 7785.',
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    title: 'VIP Taxi Service KSA — Private Makkah, Madinah & Jeddah Transfers',
    description:
      'Door-to-door private transfers for Umrah & Hajj pilgrims. Book instantly on WhatsApp.',
    url: `${site.url}/`,
    type: 'website',
  },
}

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TaxiService', 'LocalBusiness'],
      '@id': `${site.url}/#business`,
      name: site.name,
      url: site.url,
      telephone: site.phone,
      image: `${site.url}/og/`,
      description:
        'Private taxi and limousine transfers between Makkah, Madinah and Jeddah. Specialising in Umrah and Hajj airport transfers, intercity routes, and Ziyarah tours.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Makkah',
        addressCountry: 'SA',
      },
      areaServed: [
        { '@type': 'City', name: 'Makkah' },
        { '@type': 'City', name: 'Madinah' },
        { '@type': 'City', name: 'Jeddah' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: site.rating.value,
        reviewCount: site.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
      priceRange: 'SAR',
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.tagline,
      publisher: { '@id': `${site.url}/#business` },
    },
  ],
}

const featuredRoutes = ROUTES.filter((r) =>
  [
    'jeddah-airport-to-makkah-taxi',
    'makkah-to-madinah-taxi',
    'madinah-to-makkah-taxi',
    'makkah-to-jeddah-airport-taxi',
    'makkah-ziyarah-tour',
    'madinah-ziyarah-tour',
  ].includes(r.slug),
)

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />

      <Hero
        h1="Private Taxi Transfers Between Makkah, Madinah & Jeddah"
        subheading={`Door-to-door service for Umrah and Hajj pilgrims, families, and tourists. Hotel-to-hotel, no hidden fees, ${site.rating.value}★ on ${site.rating.source}.`}
      >
        <QuoteWidget />
      </Hero>

      <div className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <AnswerBox>
          VIP Taxi Service KSA provides private car transfers between Makkah, Madinah, and Jeddah
          Airport — including airport pick-up and drop-off, intercity journeys, and Ziyarah tours.
          All bookings are confirmed in writing via WhatsApp. Price per vehicle, not per person.
        </AnswerBox>

        {/* Routes grid */}
        <section aria-labelledby="routes-heading">
          <h2
            id="routes-heading"
            className="font-display mb-6 text-2xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Popular transfer routes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRoutes.map((route) => (
              <RouteCard
                key={route.slug}
                slug={route.slug}
                title={route.title}
                fromCity={route.fromCity}
                toCity={route.toCity}
                approxDurationMin={route.durationMin}
                description={route.description}
              />
            ))}
          </div>
        </section>

        {/* How it works */}
        <StepList
          heading="How it works"
          steps={[
            {
              title: 'Message us on WhatsApp',
              description:
                'Tell us your route, travel date, pickup time, passenger count, and luggage. We respond quickly — no contact forms, no waiting.',
            },
            {
              title: 'Receive written confirmation',
              description:
                'We confirm your vehicle class, pickup details, and price in writing. No surprises, no meter, no last-minute substitutions.',
            },
            {
              title: 'Meet your driver at your hotel',
              description:
                'Your driver arrives at the lobby at the agreed time. Airport arrivals include meet-and-greet in the arrivals hall.',
            },
          ]}
        />

        {/* Trust badges */}
        <section aria-label="Trust signals">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: '★',
                title: `${site.rating.value} on ${site.rating.source}`,
                body: `${site.rating.count}+ verified passenger reviews.`,
              },
              {
                icon: '✓',
                title: 'Written confirmation',
                body: 'Vehicle class and price confirmed on WhatsApp before every trip.',
              },
              {
                icon: '⊞',
                title: 'Price per vehicle',
                body: 'Same price for 1 or 6 passengers — no per-seat charges.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="mb-2 text-2xl" style={{ color: 'var(--color-gold)' }} aria-hidden>
                  {item.icon}
                </div>
                <h3
                  className="font-display mb-1 font-semibold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section aria-labelledby="reviews-home-heading">
          <h2
            id="reviews-home-heading"
            className="font-display mb-6 text-2xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            What passengers say
          </h2>
          <ReviewCarousel reviews={REVIEWS} />
        </section>

        <CTASection />
      </div>
    </>
  )
}

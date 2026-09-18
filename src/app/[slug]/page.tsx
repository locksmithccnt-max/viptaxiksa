import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ROUTES, getRouteBySlug, ROUTE_SLUGS } from '@/data/routes'
import { REVIEWS } from '@/data/reviews'
import { site } from '@/config/site'
import { Hero } from '@/components/sections/Hero'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { QuickFacts } from '@/components/sections/QuickFacts'
import { FAQ } from '@/components/sections/FAQ'
import { ReviewCard } from '@/components/sections/ReviewCard'
import { RelatedLinks } from '@/components/sections/RelatedLinks'
import { CTASection } from '@/components/sections/CTASection'
import { StepList } from '@/components/sections/StepList'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { QuoteWidget } from '@/components/booking/QuoteWidget'
import { JsonLd } from '@/components/seo/JsonLd'

export const dynamicParams = false

export function generateStaticParams() {
  return ROUTE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) return {}

  // Use route.title alone — root layout template appends "| VIP Taxi KSA"
  const rawDesc =
    route.metaDescription ?? `${route.description} Book on WhatsApp — no hidden fees, 4.8★ Google.`
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152) + '...' : rawDesc

  return {
    title: route.title,
    description,
    alternates: {
      canonical: `${site.url}/${slug}/`,
    },
    openGraph: {
      title: route.title,
      description,
      url: `${site.url}/${slug}/`,
      type: 'website',
    },
  }
}

function buildJsonLd(route: ReturnType<typeof getRouteBySlug>) {
  if (!route) return null
  const pageUrl = `${site.url}/${route.slug}/`

  const graph: object[] = [
    {
      '@type': 'TaxiService',
      '@id': `${pageUrl}#service`,
      name: route.title,
      description: route.description,
      url: pageUrl,
      provider: {
        '@type': 'TaxiService',
        '@id': `${site.url}/#business`,
        name: site.name,
        telephone: site.phone,
      },
      areaServed: [
        { '@type': 'City', name: 'Makkah' },
        { '@type': 'City', name: 'Madinah' },
        { '@type': 'City', name: 'Jeddah' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: route.title, item: pageUrl },
      ],
    },
  ]

  if (route.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: route.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) notFound()

  const quickFacts = [
    route.distanceKm > 0
      ? { label: 'Distance', value: `~${route.distanceKm} km`, note: 'approximate' }
      : null,
    {
      label: 'Duration',
      value:
        route.durationMin[0] >= 60
          ? `${route.durationMin[0] / 60}–${route.durationMin[1] / 60} hours`
          : `${route.durationMin[0]}–${route.durationMin[1]} min`,
      note: 'approximate, traffic may vary',
    },
    { label: 'Pickup', value: 'Hotel lobby, door-to-door' },
    { label: 'Payment', value: 'Cash · Quote on request' },
    { label: 'Booking', value: 'WhatsApp — instant confirmation' },
  ].filter(Boolean) as { label: string; value: string; note?: string }[]

  const relatedLinks = ROUTES.filter((r) => route.relatedSlugs.includes(r.slug)).map((r) => ({
    href: `/${r.slug}/`,
    label: r.title,
    description: `${r.fromCity} → ${r.toCity}`,
  }))

  const routeReviews = REVIEWS.filter(
    (r) =>
      !r.routeHint ||
      r.routeHint.toLowerCase().includes(route.fromCity.split(' ')[0].toLowerCase()),
  ).slice(0, 3)

  const jsonLd = buildJsonLd(route)

  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}

      <Hero h1={route.h1} subheading={route.description}>
        <QuoteWidget prefilledRoute={route.slug} />
      </Hero>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: route.title }]} />

        <AnswerBox>{route.answerBoxText}</AnswerBox>

        {route.highlights.length > 0 && (
          <section aria-labelledby="highlights-heading">
            <h2
              id="highlights-heading"
              className="font-display mb-4 text-xl font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              What&apos;s included
            </h2>
            <ul className="space-y-2">
              {route.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 h-5 w-5 shrink-0 rounded-full text-center text-xs leading-5 font-semibold"
                    style={{ background: 'var(--color-gold)', color: '#000' }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <QuickFacts items={quickFacts} />

        <StepList
          heading="How to book"
          steps={[
            {
              title: 'Message us on WhatsApp',
              description:
                'Send your route, date, pickup time, passenger count, and luggage details. Use the form above or tap the WhatsApp button.',
            },
            {
              title: 'Receive a written confirmation',
              description:
                'We confirm your vehicle class, pickup details, and price in writing — no surprises on the day.',
            },
            {
              title: 'Meet your driver',
              description:
                'Your driver arrives at your hotel lobby at the agreed time. Airport pickups include meet-and-greet in arrivals.',
            },
          ]}
        />

        {route.faqs.length > 0 && <FAQ items={route.faqs} />}

        {routeReviews.length > 0 && (
          <section aria-labelledby="reviews-heading">
            <h2
              id="reviews-heading"
              className="font-display mb-6 text-2xl font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              What passengers say
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {routeReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        )}

        {relatedLinks.length > 0 && (
          <RelatedLinks heading="Related transfers" links={relatedLinks} />
        )}

        <CTASection />
      </div>
    </>
  )
}

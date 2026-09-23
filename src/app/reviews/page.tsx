import type { Metadata } from 'next'
import { site } from '@/config/site'
import { REVIEWS } from '@/data/reviews'
import { Hero } from '@/components/sections/Hero'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { ReviewCard } from '@/components/sections/ReviewCard'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: `Passenger Reviews | ${site.name}`,
  description: `Read verified Google reviews from passengers who have used VIP Taxi Service KSA. Rated ${site.rating.value}★ from ${site.rating.count}+ reviews.`,
  alternates: { canonical: `${site.url}/reviews/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${site.url}/reviews/` },
      ],
    },
    {
      '@type': ['TaxiService', 'LocalBusiness'],
      '@id': `${site.url}/#business`,
      name: site.name,
      image: `${site.url}/og/`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Makkah',
        addressCountry: 'SA',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: site.rating.value,
        reviewCount: site.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
      review: REVIEWS.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: r.text,
      })),
    },
  ],
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        h1="Passenger Reviews"
        subheading={`${site.rating.value}★ on ${site.rating.source} from ${site.rating.count}+ verified reviews. Read what passengers say about our private transfer service.`}
      />
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Reviews' }]} />

        <AnswerBox>
          VIP Taxi Service KSA is rated {site.rating.value} out of 5 stars on {site.rating.source},
          based on {site.rating.count}+ verified passenger reviews. Reviewers consistently highlight
          on-time pickups, professional drivers, and written confirmations with no hidden fees.
        </AnswerBox>

        <section aria-labelledby="reviews-heading">
          <h2
            id="reviews-heading"
            className="font-display mb-6 text-2xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            What passengers say
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        <section
          className="rounded-xl p-6 text-center"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <p
            className="font-display mb-3 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Have you used our service?
          </p>
          <p className="mb-4 text-sm" style={{ color: 'var(--color-muted)' }}>
            We&apos;d appreciate a Google review — it helps other pilgrims and travellers find us.
          </p>
          {site.gbpReviewUrl !== 'TODO_GBP_REVIEW_URL' && (
            <a
              href={site.gbpReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium underline"
              style={{ color: 'var(--color-gold)' }}
            >
              Leave a Google review
            </a>
          )}
        </section>

        <CTASection />
      </div>
    </>
  )
}

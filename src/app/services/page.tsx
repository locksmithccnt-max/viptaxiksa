import type { Metadata } from 'next'
import { site } from '@/config/site'
import { ROUTES } from '@/data/routes'
import { Hero } from '@/components/sections/Hero'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { RouteCard } from '@/components/sections/RouteCard'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: `All Services | ${site.name}`,
  description:
    'Airport transfers, intercity taxi routes, Ziyarah tours, and limousine hire between Makkah, Madinah and Jeddah. Private vehicles, all sizes.',
  alternates: { canonical: `${site.url}/services/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services/` },
      ],
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        h1="Our Taxi & Transfer Services"
        subheading="Private airport transfers, intercity routes, Ziyarah tours, and limousine hire across Makkah, Madinah and Jeddah."
      />
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />
        <AnswerBox>
          VIP Taxi Service KSA offers private airport transfers, Makkah–Madinah intercity routes,
          Ziyarah sightseeing tours, Umrah and Hajj group transfers, and premium limousine hire —
          all bookable instantly via WhatsApp.
        </AnswerBox>
        <section aria-labelledby="services-heading">
          <h2
            id="services-heading"
            className="font-display mb-6 text-2xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            All routes & services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((route) => (
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
        <CTASection />
      </div>
    </>
  )
}

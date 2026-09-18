import type { Metadata } from 'next'
import { site } from '@/config/site'
import { FLEET } from '@/data/fleet'
import { Hero } from '@/components/sections/Hero'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { FleetCard } from '@/components/sections/FleetCard'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: `Our Fleet — Sedan, SUV, Minivan, Minibus | ${site.name}`,
  description:
    'View our vehicle fleet for Makkah, Madinah, and Jeddah transfers. Economy sedan, standard SUV, family minivan, and group minibus — all air-conditioned.',
  alternates: { canonical: `${site.url}/fleet/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Fleet', item: `${site.url}/fleet/` },
      ],
    },
  ],
}

export default function FleetPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        h1="Our Vehicle Fleet"
        subheading="Private, air-conditioned vehicles for every group size — from solo travellers to pilgrimage groups of 14."
      />
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Fleet' }]} />

        <AnswerBox>
          Our fleet includes economy sedans (up to 3 passengers), standard SUVs (up to 6), family
          minivans (up to 7 with large luggage capacity), and group minibuses (up to 14). All
          vehicles are air-conditioned and driven by professional chauffeurs.
        </AnswerBox>

        <section aria-labelledby="fleet-heading">
          <h2
            id="fleet-heading"
            className="font-display mb-6 text-2xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Choose your vehicle
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {FLEET.filter((v) => v.enabled).map((vehicle, i) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} highlighted={i === 2} />
            ))}
          </div>
        </section>

        <section aria-labelledby="luggage-heading">
          <h2
            id="luggage-heading"
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Not sure which vehicle to choose?
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            When booking on WhatsApp, tell us your passenger count and exact luggage (number of
            large check-in bags and small carry-ons). We will recommend the right vehicle and
            confirm the price in writing. All pricing is per vehicle — the same whether you are 1 or
            6 passengers within capacity.
          </p>
        </section>

        <CTASection />
      </div>
    </>
  )
}

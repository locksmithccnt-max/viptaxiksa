import type { Metadata } from 'next'
import { site } from '@/config/site'
import { Hero } from '@/components/sections/Hero'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description:
    'VIP Taxi Service KSA provides private transfers for Umrah and Hajj pilgrims, families, and tourists across Makkah, Madinah, and Jeddah. Rated 4.8★ on Google.',
  alternates: { canonical: `${site.url}/about-us/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: `${site.url}/about-us/` },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        h1="About VIP Taxi Service KSA"
        subheading="Private transfers for pilgrims, families, and travellers across Makkah, Madinah, and Jeddah."
      />
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        <AnswerBox>
          VIP Taxi Service KSA is a private transfer company serving Makkah, Madinah, and Jeddah. We
          specialise in airport transfers, intercity routes, and Ziyarah tours for Umrah and Hajj
          pilgrims, families, and tourists — rated {site.rating.value}★ on {site.rating.source} with{' '}
          {site.rating.count}+ reviews.
        </AnswerBox>

        <article
          className="prose-invert space-y-6 text-sm leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          <section>
            <h2
              className="font-display mb-3 text-xl font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              Who we are
            </h2>
            <p>
              VIP Taxi Service KSA is a private transportation company operating across the holy
              cities of Makkah and Madinah and the port city of Jeddah. Our service is built around
              the needs of Umrah and Hajj pilgrims arriving from around the world, as well as
              families, business travellers, and tourists visiting the Kingdom.
            </p>
          </section>

          <section>
            <h2
              className="font-display mb-3 text-xl font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              Our commitment
            </h2>
            <p>
              Every booking is confirmed in writing via WhatsApp — including the specific vehicle
              class, pickup details, and price. We do not substitute vehicles without notice.
              Pricing is per vehicle, not per person, so families and groups are never penalised for
              travelling together. There are no hidden fees: the price quoted is the price paid.
            </p>
          </section>

          <section>
            <h2
              className="font-display mb-3 text-xl font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              Our fleet
            </h2>
            <p>
              We operate a range of air-conditioned vehicles: economy sedans for solo travellers and
              couples, standard SUVs for small families, minivans for larger families with heavy
              luggage, and minibuses for Umrah and Hajj groups of up to 14 passengers. All drivers
              are professional and experienced with the routes between Makkah, Madinah, and Jeddah.
            </p>
          </section>

          <section>
            <h2
              className="font-display mb-3 text-xl font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              Contact us
            </h2>
            <p>
              The fastest way to reach us is via WhatsApp:{' '}
              <a
                href={site.whatsapp}
                className="underline"
                style={{ color: 'var(--color-gold)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.phonePretty}
              </a>
              . We can also be reached by phone at the same number.
            </p>
          </section>
        </article>

        <CTASection />
      </div>
    </>
  )
}

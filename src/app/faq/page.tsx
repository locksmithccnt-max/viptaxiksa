import type { Metadata } from 'next'
import { site } from '@/config/site'
import { SITE_FAQS, ALL_FAQS } from '@/data/faq'
import { Hero } from '@/components/sections/Hero'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { FAQ } from '@/components/sections/FAQ'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${site.name}`,
  description:
    'Answers to common questions about booking, vehicles, luggage, routes, and pricing for VIP Taxi Service KSA private transfers.',
  alternates: { canonical: `${site.url}/faq/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${site.url}/faq/#faqpage`,
      mainEntity: ALL_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${site.url}/faq/` },
      ],
    },
  ],
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        h1="Frequently Asked Questions"
        subheading="Everything you need to know before booking a private transfer with VIP Taxi Service KSA."
      />
      <div className="mx-auto max-w-3xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />

        <AnswerBox>
          Questions answered below include: how to book, vehicle selection, luggage capacity,
          airport pickup procedures, cancellation policy, and what&apos;s included in the price.
          Can&apos;t find your answer? Message us on WhatsApp — we respond quickly.
        </AnswerBox>

        {SITE_FAQS.map((category) => (
          <section
            key={category.heading}
            aria-labelledby={`faq-${category.heading.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <h2
              id={`faq-${category.heading.replace(/\s+/g, '-').toLowerCase()}`}
              className="font-display mb-4 text-xl font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              {category.heading}
            </h2>
            <FAQ items={category.items} heading="" />
          </section>
        ))}

        <CTASection />
      </div>
    </>
  )
}

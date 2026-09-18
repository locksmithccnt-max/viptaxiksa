import type { Metadata } from 'next'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: `Privacy policy for VIP Taxi Service KSA — how we collect, use, and protect your personal data. Covers Google Analytics, cookies, and your rights.`,
  alternates: { canonical: `${site.url}/privacy-policy/` },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <h1
        className="font-display mt-8 mb-6 text-3xl font-semibold"
        style={{ color: 'var(--color-text)' }}
      >
        Privacy Policy
      </h1>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        <p>Last updated: 18 September 2026</p>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            1. Who we are
          </h2>
          <p>
            This website is operated by VIP Taxi Service KSA (<strong>viptaxiserviceksa.com</strong>
            ). We provide private taxi and transfer services in Saudi Arabia. Contact:{' '}
            <a href={site.phoneHref} style={{ color: 'var(--color-gold)' }}>
              {site.phonePretty}
            </a>
            .
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            2. Data we collect
          </h2>
          <p>
            When you use our booking form or contact us via WhatsApp, you provide your name, travel
            details, and phone number. We do not collect payment card details on this website.
          </p>
          <p className="mt-2">
            We use Google Analytics (GA4) to understand how visitors use this site. GA4 collects
            anonymised usage data such as pages visited and approximate location (country/city
            level). We do not share this data with third parties. You can decline analytics
            collection using the cookie consent banner on this site.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            3. How we use your data
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>To process and confirm your transfer booking</li>
            <li>To contact you about your booking via WhatsApp or phone</li>
            <li>To improve this website using anonymised analytics data</li>
          </ul>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            4. Cookies
          </h2>
          <p>
            We use Google Analytics, which sets cookies to measure website traffic. We operate
            Google&apos;s Consent Mode v2 — analytics cookies are only activated if you accept via
            the consent banner. You can change your preference at any time by clearing your browser
            cookies.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            5. Your rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of any personal data we hold about
            you. Contact us via WhatsApp at{' '}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-gold)' }}
            >
              {site.phonePretty}
            </a>
            .
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            6. Third parties
          </h2>
          <p>
            We use Google Analytics (Google LLC, USA) for anonymised usage statistics. We do not
            sell or share personal data with any other third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            7. Changes to this policy
          </h2>
          <p>
            We may update this privacy policy from time to time. The date at the top of this page
            reflects the most recent revision.
          </p>
        </section>
      </div>
    </div>
  )
}

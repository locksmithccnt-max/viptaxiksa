import type { Metadata } from 'next'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: `Terms and conditions for private transfer bookings with VIP Taxi Service KSA.`,
  alternates: { canonical: `${site.url}/terms/` },
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <h1
        className="font-display mt-8 mb-6 text-3xl font-semibold"
        style={{ color: 'var(--color-text)' }}
      >
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        <p>Last updated: 18 September 2026</p>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            1. Bookings
          </h2>
          <p>
            All bookings are made via WhatsApp and are confirmed only when VIP Taxi Service KSA
            sends a written confirmation message specifying the vehicle, pickup details, date, time,
            and agreed price.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            2. Pricing
          </h2>
          <p>
            Prices are quoted per vehicle, not per person. The price confirmed at booking is the
            final price unless journey details (route, date, time, vehicle class, or passenger
            count) change after confirmation.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            3. Cancellations & changes
          </h2>
          <p>
            Cancellation and change policies are discussed and agreed at the time of booking.
            Contact us as early as possible via WhatsApp if you need to cancel or amend.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            4. Passenger responsibilities
          </h2>
          <p>
            Passengers are responsible for providing accurate travel information (flight numbers,
            hotel names, pickup times). VIP Taxi Service KSA is not liable for missed connections
            due to incorrect information provided at booking.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            5. Delays & force majeure
          </h2>
          <p>
            We monitor flight times for airport pickups and adjust accordingly. Delays caused by
            traffic, weather, or other circumstances beyond our control are not grounds for refunds
            or compensation.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            6. Luggage
          </h2>
          <p>
            Passengers must declare accurate luggage counts when booking. If luggage exceeds the
            capacity of the confirmed vehicle, we may be unable to proceed and an upgrade to a
            larger vehicle (at additional cost) may be required.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            7. Governing law
          </h2>
          <p>
            These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall
            be subject to the jurisdiction of the courts of Saudi Arabia.
          </p>
        </section>

        <section>
          <h2
            className="font-display mb-2 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            8. Contact
          </h2>
          <p>
            For any questions regarding these terms, contact us via WhatsApp:{' '}
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
      </div>
    </div>
  )
}

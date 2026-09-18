import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { AnswerBox } from '@/components/sections/AnswerBox'
import { QuickFacts } from '@/components/sections/QuickFacts'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { StepList } from '@/components/sections/StepList'
import { FAQ } from '@/components/sections/FAQ'
import { ReviewCard } from '@/components/sections/ReviewCard'
import { RouteCard } from '@/components/sections/RouteCard'
import { FleetCard } from '@/components/sections/FleetCard'
import { CTASection } from '@/components/sections/CTASection'
import { RelatedLinks } from '@/components/sections/RelatedLinks'
import { Hero } from '@/components/sections/Hero'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { QuoteWidget } from '@/components/booking/QuoteWidget'
import { WhatsAppButton } from '@/components/booking/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Design System — VIP Taxi KSA',
  robots: { index: false, follow: false },
}

const sampleReview = {
  id: '1',
  author: 'Nurul Hidayah Shuhaimi',
  rating: 5 as const,
  text: 'Very punctual! The driver was waiting at the hotel lobby and kept in constant contact before pickup. Highly recommend for Makkah to Jeddah Airport transfers.',
  routeHint: 'Clock Tower Makkah → Jeddah Airport',
  source: 'google' as const,
}

const sampleVehicle = {
  id: 'sedan',
  name: 'Economy Sedan',
  model: 'Toyota Camry',
  seats: 3,
  largeLuggage: 3,
  smallLuggage: 3,
  bestFor: 'Couples and solo travellers with standard luggage.',
  enabled: true,
}

export default function DesignPage() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero demo */}
      <Hero
        h1="Private Taxi Transfers Between Makkah, Madinah & Jeddah"
        subheading="Door-to-door service for Umrah and Hajj pilgrims, families, and tourists. Hotel-to-hotel, no hidden fees, 4.8★ on Google."
      >
        <QuoteWidget />
      </Hero>

      <div className="mx-auto max-w-4xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Breadcrumbs
          </h2>
          <Breadcrumbs
            items={[{ label: 'Services', href: '/services/' }, { label: 'Makkah to Madinah' }]}
          />
        </section>

        {/* Badges */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="gold">★ 4.8 on Google</Badge>
            <Badge variant="muted">Hotel-to-hotel</Badge>
            <Badge variant="wa">WhatsApp booking</Badge>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Book now</Button>
            <Button variant="secondary">Learn more</Button>
            <Button variant="ghost">View details</Button>
            <Button variant="wa">Book on WhatsApp</Button>
            <WhatsAppButton />
          </div>
        </section>

        {/* Answer Box */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Answer Box
          </h2>
          <AnswerBox>
            VIP Taxi Service KSA provides private car transfers from Makkah to Madinah — a journey
            of approximately 430 km taking 4–5 hours by road. Book instantly via WhatsApp:
            door-to-door hotel pickup, all vehicle classes available, extra stops allowed en route.
          </AnswerBox>
        </section>

        {/* Quick Facts */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Quick Facts
          </h2>
          <QuickFacts
            items={[
              { label: 'Distance', value: '~430 km', note: 'approximate' },
              { label: 'Duration', value: '4–5 hours', note: 'approximate, traffic may vary' },
              { label: 'Pickup', value: 'Hotel lobby, door-to-door' },
              { label: 'Extra stops', value: 'Allowed on request' },
              { label: 'Payment', value: 'Cash · Quote on request' },
            ]}
          />
        </section>

        {/* Comparison Table */}
        <ComparisonTable
          heading="Makkah to Madinah: Which option is right for you?"
          alternatives={['Haramain Train', 'Bus']}
          rows={[
            {
              aspect: 'Journey time',
              taxi: '4–5 h door-to-door',
              alternatives: { 'Haramain Train': '~2 h (station to station)', Bus: '~5–6 h' },
            },
            {
              aspect: 'Luggage',
              taxi: 'Unlimited in van',
              alternatives: { 'Haramain Train': '2 bags, 50 kg', Bus: 'Limited' },
            },
            {
              aspect: 'Pickup',
              taxi: 'Hotel lobby',
              alternatives: { 'Haramain Train': 'Taxi to station', Bus: 'Bus station' },
            },
            {
              aspect: 'Flexibility',
              taxi: 'Any time, any day',
              alternatives: { 'Haramain Train': 'Fixed timetable', Bus: 'Fixed schedule' },
            },
            {
              aspect: 'Families',
              taxi: 'Ideal — no transfers',
              alternatives: {
                'Haramain Train': 'OK if light luggage',
                Bus: 'Difficult with young children',
              },
            },
          ]}
          note="Haramain train times and policies: haramainrailway.com. All timings approximate."
        />

        {/* Step List */}
        <StepList
          heading="How it works"
          steps={[
            {
              title: 'Message us on WhatsApp',
              description:
                'Send your route, date, passenger count and luggage details. We respond quickly.',
            },
            {
              title: 'Confirm your vehicle class',
              description:
                'We confirm the exact vehicle in writing — sedan, SUV, minivan, or minibus.',
            },
            {
              title: 'Meet at your hotel lobby',
              description:
                'Your driver arrives at the agreed time, greets you by name, and takes you door-to-door.',
            },
          ]}
        />

        {/* FAQ */}
        <FAQ
          items={[
            {
              question: 'How long does it take to drive from Makkah to Madinah?',
              answer:
                'The drive is approximately 430 km and takes 4–5 hours depending on traffic, the time of day, and whether you make any stops. Hajj season and peak prayer times can add 30–60 minutes.',
            },
            {
              question: 'Can I add extra stops during the journey?',
              answer:
                'Yes. Stops such as Jabal Noor (Cave of Hira) or Masjid Quba can often be arranged. Mention them when booking so we can plan the route and time accordingly.',
            },
            {
              question: 'What if I have 6 large suitcases?',
              answer:
                'A minivan can typically accommodate 6 large suitcases plus several smaller bags. When booking, tell us your exact luggage count so we can assign the right vehicle.',
            },
          ]}
        />

        {/* Review Card */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Review Card
          </h2>
          <ReviewCard review={sampleReview} />
        </section>

        {/* Route Cards */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Route Cards
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <RouteCard
              slug="jeddah-airport-to-makkah-taxi"
              title="Jeddah Airport to Makkah Taxi"
              fromCity="Jeddah Airport"
              toCity="Makkah"
              approxDurationMin={[60, 90]}
              description="Private transfer from KAIA arrivals directly to your Makkah hotel."
            />
            <RouteCard
              slug="makkah-to-madinah-taxi"
              title="Makkah to Madinah Taxi"
              fromCity="Makkah"
              toCity="Madinah"
              approxDurationMin={[240, 300]}
              description="Intercity door-to-door transfer. Extra stops allowed. All vehicle classes."
            />
          </div>
        </section>

        {/* Fleet Card */}
        <section>
          <h2
            className="font-display mb-4 text-xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Fleet Card
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <FleetCard vehicle={sampleVehicle} />
            <FleetCard
              vehicle={{
                ...sampleVehicle,
                id: 'van',
                name: 'Family Minivan',
                model: 'Toyota Hiace',
                seats: 7,
                largeLuggage: 6,
                smallLuggage: 6,
                bestFor: 'Families with young children and heavy luggage.',
              }}
              highlighted
            />
          </div>
        </section>

        {/* Related Links */}
        <RelatedLinks
          heading="Related transfers"
          links={[
            {
              href: '/madinah-to-makkah-taxi/',
              label: 'Madinah → Makkah',
              description: 'Reverse route',
            },
            {
              href: '/makkah-ziyarah-tour/',
              label: 'Makkah Ziyarah Tour',
              description: 'Half-day sacred sites tour',
            },
            {
              href: '/fleet/',
              label: 'View all vehicles',
              description: 'Sedans, SUVs, minivans, minibuses',
            },
          ]}
        />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  )
}

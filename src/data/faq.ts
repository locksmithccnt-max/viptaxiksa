import type { FaqItem } from '@/types/route'

export interface FaqCategory {
  heading: string
  items: FaqItem[]
}

export const SITE_FAQS: FaqCategory[] = [
  {
    heading: 'Booking & payment',
    items: [
      {
        question: 'How do I book a transfer?',
        answer:
          'Message us on WhatsApp with your route, travel date, pickup time, number of passengers, and luggage count. We confirm the vehicle and price in writing within minutes.',
      },
      {
        question: 'Do you charge per person or per vehicle?',
        answer:
          'All pricing is per vehicle, not per person. A sedan, SUV, minivan, or minibus is priced as one unit — it makes no difference whether you are 1 or 6 passengers (within capacity).',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept cash on the day of travel. Contact us via WhatsApp for the most up-to-date payment options.',
      },
      {
        question: 'How far in advance do I need to book?',
        answer:
          'We recommend booking at least 24 hours in advance, and 72 hours or more during Umrah and Hajj peak seasons. Last-minute bookings are sometimes possible — message us to check availability.',
      },
      {
        question: 'Can I cancel or change my booking?',
        answer:
          'Yes. Notify us as early as possible via WhatsApp. Cancellation and change policies are discussed at the time of booking.',
      },
    ],
  },
  {
    heading: 'Vehicles & luggage',
    items: [
      {
        question: 'Which vehicle should I choose for my family?',
        answer:
          'For families of 4–5 with standard luggage, an SUV works well. For larger families or pilgrims with multiple suitcases, choose a minivan (7 seats, 6 large bags). For groups of 8–14, a minibus is ideal.',
      },
      {
        question: 'Are the vehicles air-conditioned?',
        answer: 'Yes. All vehicles in our fleet are fully air-conditioned.',
      },
      {
        question: 'How much luggage can I bring?',
        answer:
          'Sedan: up to 3 large (check-in size) bags. SUV: up to 4. Minivan: up to 6. Minibus: up to 10. When in doubt, tell us your exact luggage count and we will assign the right vehicle.',
      },
      {
        question: 'Can I bring baby seats or wheelchairs?',
        answer:
          'Baby seats and wheelchair assistance can be arranged. Please mention these needs when booking so we can prepare accordingly.',
      },
    ],
  },
  {
    heading: 'Routes & timings',
    items: [
      {
        question: 'Do you operate 24 hours a day?',
        answer:
          'We serve passengers around the clock. For very early or late pickups, confirm your booking and hotel address in advance.',
      },
      {
        question: 'Can I request extra stops during a journey?',
        answer:
          'Yes. Stops at Ziyarah sites, restaurants, or to collect additional passengers can be arranged. Mention them when booking so we plan the route and time accordingly.',
      },
      {
        question: 'Do you travel between Makkah and Madinah?',
        answer:
          'Yes. This is our most popular intercity route — approximately 430 km, 4–5 hours door-to-door, all vehicle classes available.',
      },
      {
        question: 'Do you cover Madinah Airport (Prince Mohammed bin Abdulaziz Airport)?',
        answer:
          'Yes. We serve both Jeddah Airport (KAIA) and Madinah Airport (AMAA) for arrivals and departures.',
      },
    ],
  },
  {
    heading: 'Trust & safety',
    items: [
      {
        question: 'Are there any hidden fees?',
        answer:
          'The price quoted on WhatsApp is the price you pay. There are no meter surprises or add-on charges at the end of the journey.',
      },
      {
        question: 'How do I know the driver will be there on time?',
        answer:
          'For airport pickups we monitor your flight. For hotel pickups, the driver contacts you 30 minutes before arrival via WhatsApp. Our 4.8-star Google rating reflects consistent on-time performance.',
      },
      {
        question: 'Is the vehicle confirmed before the trip?',
        answer:
          'Yes. We confirm the specific vehicle class in writing at the time of booking. You will not be given a different category on the day.',
      },
    ],
  },
]

export const ALL_FAQS: FaqItem[] = SITE_FAQS.flatMap((c) => c.items)

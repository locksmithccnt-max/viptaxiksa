import type { RouteData } from '@/types/route'

export const ROUTES: RouteData[] = [
  {
    slug: 'jeddah-airport-to-makkah-taxi',
    title: 'Jeddah Airport to Makkah Taxi',
    h1: 'Private Taxi from Jeddah Airport to Makkah',
    fromCity: 'Jeddah Airport (KAIA)',
    toCity: 'Makkah',
    distanceKm: 80,
    durationMin: [60, 90],
    description:
      'Door-to-door private transfer from King Abdulaziz International Airport directly to your Makkah hotel. Meet-and-greet in arrivals, no waiting at taxi ranks.',
    answerBoxText:
      'VIP Taxi Service KSA provides private transfers from Jeddah Airport (KAIA) to Makkah — approximately 80 km, taking 60–90 minutes by road depending on traffic. Your driver meets you in the arrivals hall and takes you directly to your hotel.',
    highlights: [
      'Driver meets you in arrivals hall with name board',
      'Door-to-door to any Makkah hotel, including Abraj Al-Bait area',
      '24/7 availability — all flight arrival times',
      'All vehicle classes: sedan, SUV, minivan, minibus',
    ],
    faqs: [
      {
        question: 'How long does the Jeddah Airport to Makkah transfer take?',
        answer:
          'The drive is approximately 80 km and takes 60–90 minutes depending on traffic and the time of day. During Hajj season and peak prayer times, add 20–40 minutes.',
      },
      {
        question: 'Will the driver wait if my flight is delayed?',
        answer:
          'Yes. We monitor your flight and adjust pickup time accordingly — no extra charge for standard delays.',
      },
      {
        question: 'Can you drop me off inside the Grand Mosque area?',
        answer:
          'We drop you at your hotel. Hotels near Masjid Al-Haram are accessible by road; the driver uses the closest permitted drop-off point.',
      },
      {
        question: 'Do you offer a shared transfer option?',
        answer:
          'All our transfers are private — no shared buses or strangers in your vehicle. Price is per vehicle, not per person.',
      },
    ],
    relatedSlugs: [
      'makkah-to-jeddah-airport-taxi',
      'makkah-to-madinah-taxi',
      'airport-transfers-umrah-hajj',
    ],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'makkah-to-jeddah-airport-taxi',
    title: 'Makkah to Jeddah Airport Taxi',
    h1: 'Private Taxi from Makkah to Jeddah Airport',
    fromCity: 'Makkah',
    toCity: 'Jeddah Airport (KAIA)',
    distanceKm: 80,
    durationMin: [60, 90],
    description:
      'Reliable private transfer from your Makkah hotel to King Abdulaziz International Airport. Fixed pickup time, tracked route, no hidden fees.',
    answerBoxText:
      'VIP Taxi Service KSA provides private transfers from Makkah to Jeddah Airport — approximately 80 km, taking 60–90 minutes. We recommend booking your pickup at least 3–4 hours before departure to allow for traffic.',
    highlights: [
      'Hotel lobby pickup — no dragging luggage to the street',
      'Flight-time reminders via WhatsApp',
      'Recommended: depart 3–4 hours before international flight',
      'All luggage capacities — up to minibus for large groups',
    ],
    faqs: [
      {
        question: 'How early should I leave Makkah for Jeddah Airport?',
        answer:
          'We recommend departing at least 3–4 hours before your scheduled departure for international flights. During Hajj and Umrah peak seasons, allow 4–5 hours due to traffic.',
      },
      {
        question: 'What happens if I have a very early morning flight?',
        answer:
          'We operate 24/7. For pre-dawn pickups, confirm your exact hotel address and room number when booking so the driver can locate you easily.',
      },
      {
        question: 'Can I add stops on the way to the airport?',
        answer:
          'Minor stops (e.g., to pick up additional passengers from nearby) can be arranged. Mention this when booking.',
      },
    ],
    relatedSlugs: [
      'jeddah-airport-to-makkah-taxi',
      'makkah-to-madinah-taxi',
      'airport-transfers-umrah-hajj',
    ],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'makkah-to-madinah-taxi',
    title: 'Makkah to Madinah Taxi',
    h1: 'Private Taxi from Makkah to Madinah',
    fromCity: 'Makkah',
    toCity: 'Madinah',
    distanceKm: 430,
    durationMin: [240, 300],
    description:
      'Intercity private transfer between the two holy cities. Hotel-to-hotel, extra stops allowed, all vehicle classes available.',
    answerBoxText:
      'VIP Taxi Service KSA provides private car transfers from Makkah to Madinah — approximately 430 km taking 4–5 hours by road. Book via WhatsApp for door-to-door hotel pickup with no hidden fees.',
    highlights: [
      '430 km door-to-door — hotel lobby to hotel lobby',
      'Extra stops allowed: Masjid Quba, Bir Shifa, other Ziyarah sites',
      'Sedan, SUV, minivan, and minibus options',
      'Travel at any time — no timetable constraints',
    ],
    faqs: [
      {
        question: 'How long does it take to drive from Makkah to Madinah?',
        answer:
          'The drive is approximately 430 km and takes 4–5 hours depending on traffic, time of day, and any stops. Hajj season and peak prayer times can add 30–60 minutes.',
      },
      {
        question: 'Can I add extra stops during the journey?',
        answer:
          'Yes. Stops such as Jabal Noor (Cave of Hira), Masjid Quba, or roadside restaurants can be arranged. Mention them when booking.',
      },
      {
        question: 'Is the Haramain Train faster?',
        answer:
          'The train takes about 2 hours station-to-station, but you add travel time to/from the stations. Our door-to-door transfer takes 4–5 hours total with no luggage restrictions and no transfers.',
      },
      {
        question: 'What if I have 6 large suitcases?',
        answer:
          'A minivan comfortably fits 6 large suitcases plus carry-ons. Tell us your exact luggage count when booking so we assign the right vehicle.',
      },
    ],
    relatedSlugs: [
      'madinah-to-makkah-taxi',
      'jeddah-airport-to-makkah-taxi',
      'makkah-ziyarah-tour',
    ],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'madinah-to-makkah-taxi',
    title: 'Madinah to Makkah Taxi',
    h1: 'Private Taxi from Madinah to Makkah',
    fromCity: 'Madinah',
    toCity: 'Makkah',
    distanceKm: 430,
    durationMin: [240, 300],
    description:
      'Return intercity transfer from Madinah back to Makkah. Same door-to-door service, extra stops on request.',
    answerBoxText:
      'VIP Taxi Service KSA provides private transfers from Madinah to Makkah — approximately 430 km, 4–5 hours door-to-door. Extra stops at Ziyarah sites available on request.',
    highlights: [
      'Hotel-to-hotel — no taxi ranks or bus stations',
      'Stop at Masjid Quba, Masjid Al-Qiblatayn, or other Madinah Ziyarah sites before departure',
      'Travel at your chosen time, not a fixed timetable',
      'All vehicle classes available',
    ],
    faqs: [
      {
        question: 'Can I visit Madinah Ziyarah sites before my transfer to Makkah?',
        answer:
          'Yes. We can incorporate a brief Ziyarah circuit before heading to Makkah. Mention the sites when booking so we allocate enough time.',
      },
      {
        question: 'Is it the same price as Makkah to Madinah?',
        answer: 'Yes, the route is symmetrical. Contact us via WhatsApp for a current quote.',
      },
      {
        question: 'How long before Ihram should I plan to arrive in Makkah?',
        answer:
          'Many pilgrims prefer to make intention at the Miqat (Abyar Ali / Masjid Dhul Hulaifa near Madinah). Let us know when booking and we will plan the route accordingly.',
      },
    ],
    relatedSlugs: ['makkah-to-madinah-taxi', 'madinah-ziyarah-tour', 'makkah-ziyarah-tour'],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'makkah-ziyarah-tour',
    title: 'Makkah Ziyarah Tour',
    h1: 'Makkah Ziyarah Tour by Private Car',
    fromCity: 'Makkah',
    toCity: 'Makkah',
    distanceKm: 0,
    durationMin: [180, 360],
    description:
      "Private guided sightseeing circuit of Makkah's sacred and historic sites. Jabal Al-Noor, Jabal Thawr, Mina, Muzdalifah, Arafat, and more.",
    answerBoxText:
      "Our Makkah Ziyarah Tour takes you on a private circuit of the holy city's sacred sites — Jabal Al-Noor (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, Arafat, Masjid Al-Jinn, and Jannat Al-Mualla cemetery — by private vehicle from your hotel.",
    highlights: [
      'Jabal Al-Noor (Cave of Hira) — where revelation began',
      'Jabal Thawr — Cave of Thawr (Hijra route)',
      'Mina, Muzdalifah, and the plains of Arafat',
      'Jannat Al-Mualla cemetery and Masjid Al-Jinn',
      'Flexible duration: half-day (3 h) or full-day (6 h)',
    ],
    faqs: [
      {
        question: 'Which sites are included in the Makkah Ziyarah tour?',
        answer:
          'Standard sites: Jabal Al-Noor (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, Arafat (Jabals Al-Rahmah), Jannat Al-Mualla, Masjid Al-Jinn. Additional sites on request.',
      },
      {
        question: 'How long does the tour take?',
        answer:
          'A standard half-day tour covers the main sites in 3–4 hours. A full-day tour allows more time at each site and includes additional locations.',
      },
      {
        question: 'Is a guide included?',
        answer:
          'Our driver is knowledgeable about the sites and will take you to each location. A formal licensed guide can be arranged on request — mention this when booking.',
      },
      {
        question: 'Can non-Muslims visit these sites?',
        answer:
          'Makkah is restricted to Muslims only. All sites on this tour are in the greater Makkah area accessible to Muslims with valid Umrah or Hajj permits.',
      },
    ],
    relatedSlugs: [
      'madinah-ziyarah-tour',
      'makkah-to-madinah-taxi',
      'jeddah-airport-to-makkah-taxi',
    ],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'madinah-ziyarah-tour',
    title: 'Madinah Ziyarah Tour',
    h1: 'Madinah Ziyarah Tour by Private Car',
    fromCity: 'Madinah',
    toCity: 'Madinah',
    distanceKm: 0,
    durationMin: [180, 360],
    description:
      "Private circuit of Madinah's sacred sites by dedicated vehicle — Masjid Quba, Masjid Al-Qiblatayn, Uhud, Jannat Al-Baqi, and more.",
    answerBoxText:
      "Our Madinah Ziyarah Tour covers the city's most important historic and sacred sites by private car: Masjid Quba, Masjid Al-Qiblatayn, the battlefield of Uhud, Jannat Al-Baqi cemetery, Bir Uthman, and Masjid Al-Ghamama.",
    highlights: [
      'Masjid Quba — first mosque in Islam',
      'Masjid Al-Qiblatayn — Mosque of the Two Qiblas',
      'Mount Uhud and the Uhud battlefield',
      'Jannat Al-Baqi cemetery',
      'Bir Uthman and other sites on request',
    ],
    faqs: [
      {
        question: 'Which sites are covered in the Madinah Ziyarah tour?',
        answer:
          'Main sites: Masjid Quba, Masjid Al-Qiblatayn, Mount Uhud, Uhud martyrs graves, Jannat Al-Baqi, Bir Uthman, Masjid Al-Ghamama. Additional sites on request.',
      },
      {
        question: 'How long is the Madinah Ziyarah tour?',
        answer:
          'A half-day tour covers the main sites in approximately 3–4 hours. Allow 5–6 hours for a fuller experience.',
      },
      {
        question: 'Can I combine the Ziyarah tour with my transfer to Makkah?',
        answer:
          'Yes. We can schedule a morning Ziyarah circuit and then proceed with your Madinah-to-Makkah transfer on the same day. Mention this when booking.',
      },
    ],
    relatedSlugs: ['makkah-ziyarah-tour', 'madinah-to-makkah-taxi', 'makkah-to-madinah-taxi'],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'makkah-to-jeddah-sightseeing',
    title: 'Makkah to Jeddah Sightseeing Transfer',
    h1: 'Makkah to Jeddah Sightseeing by Private Car',
    fromCity: 'Makkah',
    toCity: 'Jeddah',
    distanceKm: 80,
    durationMin: [120, 240],
    description:
      'Combine your Makkah departure with a Jeddah sightseeing stop — Al-Balad (Old Jeddah UNESCO area), the Corniche, King Fahd Fountain viewpoint — before airport drop-off or hotel check-in.',
    answerBoxText:
      'Our Makkah to Jeddah sightseeing transfer lets you explore Jeddah on the way. Visit Al-Balad (UNESCO Old Jeddah), the Corniche waterfront, and King Fahd Fountain viewpoint before your airport drop-off or hotel.',
    highlights: [
      'Al-Balad — UNESCO World Heritage old city',
      "King Fahd Fountain viewpoint (world's tallest fountain)",
      'Corniche waterfront walk',
      'Can end at KAIA Airport or Jeddah hotel',
    ],
    faqs: [
      {
        question: 'Can I do a Jeddah sightseeing stop on the way to the airport?',
        answer:
          'Yes, if your flight allows enough time. We recommend at least 4 hours in Jeddah plus the 60-minute drive to the airport and 3 hours for check-in.',
      },
      {
        question: 'Is Al-Balad open to non-Saudis?',
        answer:
          'Yes. Al-Balad (Historic Jeddah) is a UNESCO World Heritage Site open to all visitors.',
      },
      {
        question: 'Can this trip end at a Jeddah hotel instead of the airport?',
        answer: 'Absolutely. We can drop you at any Jeddah hotel. Just specify when booking.',
      },
    ],
    relatedSlugs: [
      'jeddah-airport-to-makkah-taxi',
      'makkah-to-jeddah-airport-taxi',
      'makkah-ziyarah-tour',
    ],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'airport-transfers-umrah-hajj',
    title: 'Umrah & Hajj Airport Transfers',
    h1: 'Airport Transfers for Umrah & Hajj Pilgrims',
    fromCity: 'Jeddah Airport',
    toCity: 'Makkah / Madinah',
    distanceKm: 0,
    durationMin: [60, 90],
    description:
      'Dedicated airport transfer service for Umrah and Hajj pilgrims. Arrive in Jeddah or Madinah and reach your hotel door-to-door with a private vehicle.',
    answerBoxText:
      'VIP Taxi Service KSA provides private airport transfers for Umrah and Hajj pilgrims arriving at Jeddah Airport (KAIA) or Madinah Airport (AMAA). Door-to-door to your Makkah or Madinah hotel.',
    highlights: [
      'Meet-and-greet at Jeddah (KAIA) and Madinah (AMAA) airports',
      'Direct to Makkah or Madinah hotels — no shared buses',
      'Handles group pilgrimages — minibus for up to 14 passengers',
      'Return airport transfers available — same service, reverse direction',
    ],
    faqs: [
      {
        question: 'Do you provide transfers from Madinah Airport (AMAA)?',
        answer:
          'Yes. We cover both King Abdulaziz International Airport (Jeddah/KAIA) and Prince Mohammed bin Abdulaziz Airport (Madinah/AMAA).',
      },
      {
        question: 'Can you handle a group of 10 pilgrims with their luggage?',
        answer:
          'Yes. A minibus accommodates up to 14 passengers with full luggage. For groups larger than 14, we can arrange multiple vehicles.',
      },
      {
        question: 'How do I book for an Umrah group?',
        answer:
          'Message us on WhatsApp with arrival date, flight number, number of passengers, luggage count, and destination hotel. We confirm everything in writing.',
      },
    ],
    relatedSlugs: [
      'jeddah-airport-to-makkah-taxi',
      'makkah-to-jeddah-airport-taxi',
      'makkah-to-madinah-taxi',
    ],
    updatedAt: '2026-09-18',
  },
  {
    slug: 'limousine-service-makkah-madinah',
    title: 'Limousine Service — Makkah & Madinah',
    h1: 'Limousine Service in Makkah & Madinah',
    fromCity: 'Makkah / Madinah',
    toCity: 'Anywhere in KSA',
    distanceKm: 0,
    durationMin: [60, 480],
    description:
      'Premium chauffeured limousine hire for individuals, families, and delegations in Makkah, Madinah, and Jeddah. Hourly or daily booking.',
    answerBoxText:
      'Our limousine service in Makkah and Madinah provides premium chauffeured vehicles for VIP guests, business delegations, and families. Book by the hour or full day.',
    highlights: [
      'Premium vehicles with professional chauffeurs',
      'Hourly or full-day hire',
      'Suitable for VIP guests, business delegations, large families',
      'Available in Makkah, Madinah, and Jeddah',
    ],
    faqs: [
      {
        question: 'What vehicle types are available for limousine hire?',
        answer:
          'We offer premium sedans, full-size SUVs, and minivans with professional chauffeurs. Specific make/model available on request.',
      },
      {
        question: 'Can I book a limousine for a full day?',
        answer:
          'Yes. Full-day (8–10 hour) hire is available. Contact us via WhatsApp with your date, hours needed, and passenger count for a quote.',
      },
      {
        question: 'Is the limousine service available for VIP delegations?',
        answer:
          'Yes. We have experience with business and diplomatic delegations. Multiple vehicles and coordinated scheduling can be arranged.',
      },
    ],
    relatedSlugs: ['makkah-ziyarah-tour', 'madinah-ziyarah-tour', 'makkah-to-madinah-taxi'],
    updatedAt: '2026-09-18',
  },
]

export function getRouteBySlug(slug: string): RouteData | undefined {
  return ROUTES.find((r) => r.slug === slug)
}

export const ROUTE_SLUGS = ROUTES.map((r) => r.slug)

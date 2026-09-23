export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  category: string
  readingTimeMin: number
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'jeddah-airport-to-makkah-guide',
    title: 'Jeddah Airport to Makkah: The Complete Transfer Guide',
    description:
      'Everything you need to know about getting from King Abdulaziz International Airport to Makkah — transport options, journey time, costs, and what to expect on arrival.',
    publishedAt: '2026-09-01',
    updatedAt: '2026-09-18',
    category: 'Travel guides',
    readingTimeMin: 7,
  },
  {
    slug: 'makkah-to-madinah-transport-options',
    title: 'Makkah to Madinah: Taxi, Train or Bus?',
    description:
      'A detailed comparison of all transport options between the two holy cities — private taxi, Haramain high-speed train, and bus — including costs, journey times, and practical tips for pilgrims.',
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-18',
    category: 'Travel guides',
    readingTimeMin: 9,
  },
  {
    slug: 'makkah-ziyarah-sites-guide',
    title: 'Makkah Ziyarah: 8 Sacred Sites Every Pilgrim Should Visit',
    description:
      'A comprehensive guide to the most important Ziyarah sites in Makkah — including Jabal Al-Noor, Jabal Thawr, the plains of Arafat, Mina, Muzdalifah, and Jannat Al-Mualla.',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-18',
    category: 'Pilgrim guides',
    readingTimeMin: 10,
  },
  {
    slug: 'packing-list-umrah',
    title: 'Umrah Packing List: What to Bring (and What to Leave Behind)',
    description:
      'A practical packing checklist for Umrah pilgrims — clothes for Ihram, Makkah, and Madinah, documents, medicines, and how to plan your luggage for private taxi transfers.',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-18',
    category: 'Pilgrim guides',
    readingTimeMin: 8,
  },
  {
    slug: 'best-umrah-taxi-services-saudi-arabia',
    title: 'Best Umrah Taxi Services in Saudi Arabia: Top Private Transfers (2026)',
    description:
      'Compare the top private taxi services for Umrah pilgrims in Saudi Arabia — Jeddah Airport to Makkah, Makkah–Madinah, Ziyarah tours, and recommended providers with contacts.',
    publishedAt: '2026-09-20',
    updatedAt: '2026-09-20',
    category: 'Pilgrimage Guide',
    readingTimeMin: 8,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug)

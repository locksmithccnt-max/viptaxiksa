import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

// Static pages with their last-modified dates
// updatedAt must be a real date string — never `new Date()` at build time
const staticPages: MetadataRoute.Sitemap = [
  {
    url: `${site.url}/`,
    lastModified: '2026-09-18',
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${site.url}/services/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${site.url}/jeddah-airport-to-makkah-taxi/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.95,
  },
  {
    url: `${site.url}/makkah-to-jeddah-airport-taxi/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.95,
  },
  {
    url: `${site.url}/makkah-to-madinah-taxi/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.95,
  },
  {
    url: `${site.url}/madinah-to-makkah-taxi/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.95,
  },
  {
    url: `${site.url}/makkah-ziyarah-tour/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    url: `${site.url}/madinah-ziyarah-tour/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    url: `${site.url}/makkah-to-jeddah-sightseeing-tour/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${site.url}/limousine-service-saudi-arabia/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${site.url}/airport-transfers-for-umrah-hajj-pilgrims/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${site.url}/fleet/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${site.url}/about-us/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${site.url}/contact/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${site.url}/faq/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${site.url}/reviews/`,
    lastModified: '2026-09-18',
    changeFrequency: 'weekly',
    priority: 0.65,
  },
  {
    url: `${site.url}/blog/`,
    lastModified: '2026-09-18',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
]

const blogPages: MetadataRoute.Sitemap = [
  {
    url: `${site.url}/blog/jeddah-airport-to-makkah-guide/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    url: `${site.url}/blog/makkah-to-madinah-taxi-vs-train/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    url: `${site.url}/blog/makkah-to-madinah-drive-duration/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${site.url}/blog/ziyarah-places-makkah-madinah/`,
    lastModified: '2026-09-18',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPages, ...blogPages]
}

import type { MetadataRoute } from 'next'
import { site } from '@/config/site'
import { ROUTES } from '@/data/routes'
import { BLOG_POSTS } from '@/data/blog'

const staticPages: MetadataRoute.Sitemap = [
  { url: `${site.url}/`, lastModified: '2026-09-23', changeFrequency: 'weekly', priority: 1.0 },
  {
    url: `${site.url}/services/`,
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
    lastModified: '2026-09-23',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routePages: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${site.url}/${r.slug}/`,
    lastModified: r.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${site.url}/blog/${p.slug}/`,
    lastModified: p.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...routePages, ...blogPages]
}

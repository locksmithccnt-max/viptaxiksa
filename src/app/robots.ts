import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  const trainingBots = ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot']

  const rules: MetadataRoute.Robots['rules'] = [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/_design/'],
    },
  ]

  if (!site.allowAiTraining) {
    rules.push({
      userAgent: trainingBots,
      disallow: ['/'],
    })
  }

  return {
    rules,
    sitemap: `${site.url}/sitemap.xml`,
  }
}

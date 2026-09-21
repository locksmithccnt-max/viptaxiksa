/**
 * IndexNow submission — pings Bing/Yandex to crawl all site URLs immediately.
 * Run after each deploy: npx tsx scripts/indexnow.ts
 */
import { ROUTES } from '../src/data/routes'
import { BLOG_POSTS } from '../src/data/blog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://viptaxiserviceksa.com'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '3ab99290612e48e9452ddf2fbbf878dc'

const staticUrls = [
  '/',
  '/services/',
  '/fleet/',
  '/about-us/',
  '/contact/',
  '/faq/',
  '/reviews/',
  '/blog/',
  '/privacy-policy/',
  '/terms/',
]

const routeUrls = ROUTES.map((r) => `/${r.slug}/`)
const blogUrls = BLOG_POSTS.map((p) => `/blog/${p.slug}/`)

const allUrls = [...staticUrls, ...routeUrls, ...blogUrls].map((path) => `${SITE_URL}${path}`)

async function submitToIndexNow() {
  const host = new URL(SITE_URL).hostname
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: allUrls,
  }

  console.log(`\nSubmitting ${allUrls.length} URLs to IndexNow...\n`)
  allUrls.forEach((u) => console.log(' ', u))

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  if (res.ok || res.status === 202) {
    console.log(`\n✓ IndexNow accepted — status ${res.status}`)
    console.log('  Bing and Yandex will crawl these URLs shortly.')
    console.log('  Note: Google uses its own crawl queue; submit sitemap in GSC separately.')
  } else {
    const text = await res.text()
    console.error(`\n✗ IndexNow rejected — status ${res.status}: ${text}`)
    process.exit(1)
  }
}

submitToIndexNow().catch((e) => {
  console.error(e)
  process.exit(1)
})

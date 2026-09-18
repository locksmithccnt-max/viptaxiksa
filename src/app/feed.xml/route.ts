import { BLOG_POSTS } from '@/data/blog'
import { site } from '@/config/site'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function GET() {
  const items = BLOG_POSTS.map(
    (post) => `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${site.url}/blog/${post.slug}/</link>
    <guid isPermaLink="true">${site.url}/blog/${post.slug}/</guid>
    <description>${escapeXml(post.description)}</description>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    <category>${escapeXml(post.category)}</category>
  </item>`,
  ).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} — Travel Guides</title>
    <link>${site.url}</link>
    <description>Travel guides and pilgrim tips for Makkah, Madinah and Jeddah from VIP Taxi Service KSA.</description>
    <language>en-gb</language>
    <atom:link href="${site.url}/feed.xml/" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

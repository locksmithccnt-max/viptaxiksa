import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'
import { BLOG_POSTS } from '@/data/blog'
import { Hero } from '@/components/sections/Hero'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: `Travel Guides & Pilgrim Tips | ${site.name}`,
  description:
    'Practical guides for Umrah and Hajj pilgrims: transport options, Ziyarah sites, packing lists, and travel tips for Makkah, Madinah, and Jeddah.',
  alternates: { canonical: `${site.url}/blog/` },
}

export default function BlogIndexPage() {
  return (
    <>
      <Hero
        h1="Travel Guides & Pilgrim Tips"
        subheading="Practical advice for Umrah and Hajj pilgrims — transport options, Ziyarah guides, and travel tips."
      />
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        <ul className="space-y-6" role="list">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <article
                className="rounded-xl p-5 transition-all duration-200"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  className="mb-2 flex flex-wrap items-center gap-3 text-xs"
                  style={{ color: 'var(--color-muted)' }}
                >
                  <span
                    className="rounded-full px-2.5 py-0.5"
                    style={{
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {post.category}
                  </span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span>{post.readingTimeMin} min read</span>
                </div>
                <h2
                  className="font-display mb-2 text-lg leading-snug font-semibold"
                  style={{ color: 'var(--color-text)' }}
                >
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="transition-colors hover:text-[--color-gold]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-sm font-medium underline"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Read guide →
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <CTASection />
      </div>
    </>
  )
}

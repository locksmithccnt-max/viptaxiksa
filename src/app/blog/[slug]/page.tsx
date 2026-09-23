import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPostBySlug, BLOG_SLUGS, BLOG_POSTS } from '@/data/blog'
import { getBlogContent } from '@/data/blog-content'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { RelatedLinks } from '@/components/sections/RelatedLinks'
import { JsonLd } from '@/components/seo/JsonLd'

export const dynamicParams = false

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  // Use post.title alone — root layout template appends "| VIP Taxi KSA"
  const desc =
    post.description.length > 155 ? post.description.slice(0, 152) + '...' : post.description
  return {
    title: post.title,
    description: desc,
    alternates: { canonical: `${site.url}/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: desc,
      url: `${site.url}/blog/${slug}/`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  }
}

function buildJsonLd(post: NonNullable<ReturnType<typeof getBlogPostBySlug>>) {
  const url = `${site.url}/blog/${post.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': url,
        headline: post.title,
        description: post.description,
        url,
        image: {
          '@type': 'ImageObject',
          url: `${site.url}/og/?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
        },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          '@type': 'Organization',
          '@id': `${site.url}/#business`,
          name: site.name,
          url: site.url,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${site.url}/#business`,
          name: site.name,
          url: site.url,
          logo: {
            '@type': 'ImageObject',
            url: `${site.url}/favicon.svg`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)
  const content = getBlogContent(slug)

  return (
    <>
      <JsonLd data={buildJsonLd(post)} />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: post.title }]} />

        <header className="mt-8 mb-10">
          <div
            className="mb-4 flex flex-wrap items-center gap-3 text-xs"
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

          <h1
            className="font-display text-3xl leading-tight font-semibold sm:text-4xl"
            style={{ color: 'var(--color-text)' }}
          >
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            {post.description}
          </p>
        </header>

        <article
          className="blog-prose space-y-6 text-sm leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          {content ?? (
            <p>
              Full article content coming soon. In the meantime,{' '}
              <Link href="/contact/" style={{ color: 'var(--color-gold)' }} className="underline">
                contact us on WhatsApp
              </Link>{' '}
              for personalised travel advice.
            </p>
          )}
        </article>

        <div className="mt-12 space-y-8">
          {related.length > 0 && (
            <RelatedLinks
              heading="More guides"
              links={related.map((p) => ({
                href: `/blog/${p.slug}/`,
                label: p.title,
                description: p.category,
              }))}
            />
          )}

          <CTASection />
        </div>
      </div>
    </>
  )
}

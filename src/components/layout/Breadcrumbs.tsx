import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { site } from '@/config/site'
import { JsonLd } from '@/components/seo/JsonLd'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${site.url}${item.href}` } : {}),
      })),
    ],
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1" style={{ color: 'var(--color-muted)' }}>
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-[--color-gold]"
              style={{ color: 'var(--color-muted)' }}
            >
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {item.href && i < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[--color-gold]"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" style={{ color: 'var(--color-text)' }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

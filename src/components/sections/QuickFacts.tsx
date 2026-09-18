interface QuickFactsItem {
  label: string
  value: string
  note?: string
}

interface QuickFactsProps {
  items: QuickFactsItem[]
  heading?: string
}

export function QuickFacts({ items, heading = 'Quick facts' }: QuickFactsProps) {
  return (
    <div className="overflow-hidden rounded-xl" style={{ border: '1px solid var(--color-border)' }}>
      {heading && (
        <div
          className="px-5 py-3 text-sm font-semibold tracking-wider uppercase"
          style={{ background: 'var(--color-surface-2)', color: 'var(--color-muted)' }}
        >
          {heading}
        </div>
      )}
      <dl>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start justify-between gap-4 px-5 py-3.5"
            style={{
              background: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-2)',
              borderTop: i > 0 ? '1px solid var(--color-border)' : undefined,
            }}
          >
            <dt
              className="shrink-0 text-sm font-medium"
              style={{ color: 'var(--color-muted)', minWidth: '120px' }}
            >
              {item.label}
            </dt>
            <dd className="text-right text-sm" style={{ color: 'var(--color-text)' }}>
              {item.value}
              {item.note && (
                <span className="ml-1 text-xs" style={{ color: 'var(--color-muted)' }}>
                  ({item.note})
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

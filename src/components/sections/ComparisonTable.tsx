interface ComparisonRow {
  aspect: string
  taxi: string
  alternatives: Record<string, string>
}

interface ComparisonTableProps {
  heading: string
  rows: ComparisonRow[]
  alternatives: string[]
  note?: string
}

export function ComparisonTable({ heading, rows, alternatives, note }: ComparisonTableProps) {
  return (
    <section aria-labelledby="comparison-heading" className="not-prose">
      <h2
        id="comparison-heading"
        className="font-display mb-4 text-xl font-semibold"
        style={{ color: 'var(--color-text)' }}
      >
        {heading}
      </h2>
      <div
        className="overflow-x-auto rounded-xl"
        style={{ border: '1px solid var(--color-border)' }}
      >
        <table className="min-w-full text-sm">
          <thead>
            <tr style={{ background: 'var(--color-surface-2)' }}>
              <th className="px-4 py-3 text-left" style={{ color: 'var(--color-muted)' }}>
                Aspect
              </th>
              <th
                className="px-4 py-3 text-left"
                style={{ color: 'var(--color-gold)', borderLeft: '1px solid var(--color-border)' }}
              >
                VIP Taxi
              </th>
              {alternatives.map((alt) => (
                <th
                  key={alt}
                  className="px-4 py-3 text-left"
                  style={{
                    color: 'var(--color-muted)',
                    borderLeft: '1px solid var(--color-border)',
                  }}
                >
                  {alt}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                style={{
                  background: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-2)',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <td className="px-4 py-3 font-medium" style={{ color: 'var(--color-text)' }}>
                  {row.aspect}
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    color: 'var(--color-muted)',
                    borderLeft: '1px solid var(--color-border)',
                  }}
                >
                  {row.taxi}
                </td>
                {alternatives.map((alt) => (
                  <td
                    key={alt}
                    className="px-4 py-3"
                    style={{
                      color: 'var(--color-muted)',
                      borderLeft: '1px solid var(--color-border)',
                    }}
                  >
                    {row.alternatives[alt] ?? '–'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
          {note}
        </p>
      )}
    </section>
  )
}

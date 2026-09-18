import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  heading?: string
}

export function FAQ({ items, heading = 'Frequently asked questions' }: FAQProps) {
  return (
    <section aria-labelledby="faq-heading">
      {heading && (
        <h2
          id="faq-heading"
          className="font-display mb-6 text-2xl font-semibold"
          style={{ color: 'var(--color-text)' }}
        >
          {heading}
        </h2>
      )}
      <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-border)' }}>
        {items.map((item, i) => (
          <details key={i} className="group py-4">
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              <span>{item.question}</span>
              <ChevronDown
                className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                style={{ color: 'var(--color-gold)' }}
                aria-hidden
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

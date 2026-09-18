interface Step {
  title: string
  description: string
}

interface StepListProps {
  heading?: string
  steps: Step[]
}

export function StepList({ heading, steps }: StepListProps) {
  return (
    <section aria-labelledby={heading ? 'steps-heading' : undefined}>
      {heading && (
        <h2
          id="steps-heading"
          className="font-display mb-6 text-2xl font-semibold"
          style={{ color: 'var(--color-text)' }}
        >
          {heading}
        </h2>
      )}
      <ol className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-5">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold)',
              }}
              aria-hidden
            >
              {i + 1}
            </div>
            <div className="flex flex-col gap-1">
              <h3
                className="font-display text-base leading-tight font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

interface AnswerBoxProps {
  children: React.ReactNode
}

/** 40–60 word direct-answer block. Extractable by AI crawlers and Google Answer snippets. */
export function AnswerBox({ children }: AnswerBoxProps) {
  return (
    <div
      className="rounded-xl p-5 text-base leading-relaxed md:p-6"
      style={{
        background: 'var(--color-surface)',
        borderLeft: '3px solid var(--color-gold)',
        color: 'var(--color-text)',
      }}
    >
      {children}
    </div>
  )
}

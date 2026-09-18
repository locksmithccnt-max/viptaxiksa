import { cn } from '@/lib/utils'

interface ProseProps {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        'prose prose-invert max-w-none',
        // Typography overrides for the dark theme
        '[&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-[--color-text]',
        '[&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-[--color-text]',
        '[&_p]:leading-relaxed [&_p]:text-[--color-muted]',
        '[&_a]:text-[--color-gold] [&_a:hover]:text-[--color-gold-hi]',
        '[&_strong]:font-semibold [&_strong]:text-[--color-text]',
        '[&_ol]:text-[--color-muted] [&_ul]:text-[--color-muted]',
        '[&_blockquote]:border-l-[--color-gold] [&_blockquote]:text-[--color-muted]',
        '[&_code]:bg-[--color-surface-2] [&_code]:text-[--color-gold]',
        '[&_table]:text-[--color-muted] [&_th]:text-[--color-text]',
        className,
      )}
    >
      {children}
    </div>
  )
}

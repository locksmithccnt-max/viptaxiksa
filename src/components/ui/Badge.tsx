import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'muted' | 'wa'
  className?: string
}

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  const variantClasses = {
    gold: 'bg-[--color-gold]/10 text-[--color-gold] border border-[--color-gold]/30',
    muted: 'bg-[--color-surface-2] text-[--color-muted] border border-[--color-border]',
    wa: 'bg-[--color-wa]/10 text-[--color-wa] border border-[--color-wa]/30',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

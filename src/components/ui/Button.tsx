import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'wa'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type AsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = AsButton | AsAnchor

const variantClasses = {
  primary:
    'bg-[--color-gold] text-black hover:bg-[--color-gold-hi] glow-gold font-semibold border border-transparent',
  secondary:
    'bg-transparent text-[--color-text] border border-[--color-border] hover:border-[--color-gold] hover:text-[--color-gold]',
  ghost: 'bg-transparent text-[--color-muted] hover:text-[--color-text] border border-transparent',
  wa: 'bg-[--color-wa] text-black hover:opacity-90 font-semibold border border-transparent',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-[8px]',
  md: 'px-6 py-3 text-base rounded-[10px]',
  lg: 'px-8 py-4 text-lg rounded-[10px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[--color-gold] focus-visible:outline-offset-3 min-h-[48px] min-w-[48px]',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as AsAnchor
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  )
}

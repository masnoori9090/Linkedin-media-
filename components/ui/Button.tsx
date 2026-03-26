'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 ease-expo cursor-pointer select-none relative overflow-hidden'

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  const variants = {
    primary: 'btn-gradient text-white shadow-lg shadow-linkedin/30',
    outline:
      'border border-white/30 text-white hover:border-linkedin hover:bg-linkedin/10 backdrop-blur-sm',
    ghost: 'text-linkedin hover:text-white hover:bg-linkedin/20',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  }

  const inner =
    variant === 'primary' ? (
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    ) : (
      <span className="flex items-center gap-2">{children}</span>
    )

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {inner}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button {...motionProps} onClick={onClick} className={classes}>
      {inner}
    </motion.button>
  )
}

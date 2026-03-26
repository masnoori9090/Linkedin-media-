'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string        // e.g. "95K+", "17.8M+", "265K+"
  label: string
  className?: string
  numberClassName?: string
  labelClassName?: string
  duration?: number
}

function parseValue(val: string): { num: number; suffix: string } {
  // Handle cases like "95K+", "17.8M+", "265K+", "329K+"
  const match = val.match(/^([\d.]+)([KMB]?)(\+?)$/)
  if (!match) return { num: 0, suffix: val }
  const num = parseFloat(match[1])
  const multiplier = match[2] === 'K' ? 1000 : match[2] === 'M' ? 1000000 : match[2] === 'B' ? 1000000000 : 1
  return { num: num * multiplier, suffix: match[2] + match[3] }
}

function formatNumber(n: number, originalVal: string): string {
  const { suffix } = parseValue(originalVal)
  const suffixLetter = suffix[0] // K, M, B or ''
  const plus = originalVal.includes('+') ? '+' : ''

  if (suffixLetter === 'M') {
    return (n / 1000000).toFixed(1) + 'M' + plus
  }
  if (suffixLetter === 'K') {
    return Math.round(n / 1000) + 'K' + plus
  }
  if (suffixLetter === 'B') {
    return (n / 1000000000).toFixed(1) + 'B' + plus
  }
  return Math.round(n).toString() + plus
}

export default function AnimatedCounter({
  value,
  label,
  className = '',
  numberClassName = '',
  labelClassName = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState('0' + (value.includes('+') ? '+' : ''))
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const { num: target } = parseValue(value)
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Expo ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      setDisplayed(formatNumber(current, value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className={className}>
      <div className={`font-sans font-black gradient-text ${numberClassName}`}>
        {displayed}
      </div>
      <div className={`font-sans text-textMid ${labelClassName}`}>{label}</div>
    </div>
  )
}

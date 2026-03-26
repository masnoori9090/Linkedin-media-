'use client'

import { useEffect, useRef, useState } from 'react'

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only on pointer: fine (desktop/mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return

    setVisible(true)

    let rafId: number
    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0
    let isHovering = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }

      const target = e.target as HTMLElement
      isHovering =
        !!target.closest('a') ||
        !!target.closest('button') ||
        !!target.closest('[data-cursor="hover"]')
    }

    const animate = () => {
      // Lag ring behind mouse
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (ringRef.current) {
        const size = isHovering ? 52 : 32
        ringRef.current.style.transform = `translate(${ringX - size / 2}px, ${ringY - size / 2}px)`
        ringRef.current.style.width = size + 'px'
        ringRef.current.style.height = size + 'px'
        ringRef.current.style.opacity = isHovering ? '0.5' : '1'
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-linkedin z-[99999] pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full border border-linkedin z-[99998] pointer-events-none transition-[width,height,opacity] duration-200"
        style={{ willChange: 'transform', width: 32, height: 32 }}
      />
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2400)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 4
      })
    }, 80)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-navy"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-linkedin/20 blur-[120px] animate-pulse-glow" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center mb-12"
          >
            <h1 className="font-mono text-3xl md:text-4xl tracking-[0.35em] uppercase gradient-text font-bold">
              LinkedIn Media
            </h1>
            <p className="font-mono text-xs tracking-[0.2em] text-textMid mt-3 uppercase">
              LinkedIn Personal Branding
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="relative z-10 w-48 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #0077B5, #38B6FF, #00D4AA)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

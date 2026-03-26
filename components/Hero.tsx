'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'

const heroStats = [
  { value: '95K+', label: 'Followers Built' },
  { value: '17.8M+', label: 'Impressions Generated' },
  { value: '265K+', label: 'Engagements' },
]

const headlineLines = ['Turn Your', 'Expertise Into', 'Influence']

export default function Hero() {
  const [entered, setEntered] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* YouTube video */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <iframe
          src={`https://www.youtube.com/embed/FIxXuY8Gpw4?autoplay=1&mute=${entered ? 0 : 1}&loop=1&playlist=FIxXuY8Gpw4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="pointer-events-none absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100vw, 177.78vh)',
            height: 'max(56.25vw, 100vh)',
            opacity: entered ? 0.75 : 0.5,
            transition: 'opacity 1s ease',
          }}
          title="Hero background video"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(105deg, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.55) 55%, rgba(10,22,40,0.2) 100%), linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 40%)',
        }}
      />

      {/* Click-to-enter splash overlay */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-[50] flex flex-col items-center justify-center"
            style={{ background: 'rgba(10,22,40,0.55)', backdropFilter: 'blur(2px)' }}
          >
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setEntered(true)}
              className="group relative flex flex-col items-center gap-5 cursor-pointer"
              aria-label="Enter site with sound"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-linkedin"
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-linkedin"
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
                />
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center border-2 border-white/80 bg-white/10 backdrop-blur-sm group-hover:bg-linkedin/80 group-hover:border-linkedin transition-all duration-300">
                  <svg className="w-10 h-10 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition-colors duration-200">
                Click to watch with sound
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-28 pb-20 flex items-center min-h-screen">
        <div className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-linkedin" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin">
              LinkedIn Personal Branding
            </span>
          </motion.div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.02] tracking-tight mb-8">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? 'italic gradient-text' : 'text-white'}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg md:text-xl text-textMid leading-relaxed max-w-xl mb-10"
          >
            We architect personal brands for founders, executives, and industry leaders
            on LinkedIn — transforming quiet credibility into commanding visibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg">Book a Strategy Call →</Button>
            <Button href="#case-studies" variant="outline" size="lg">View Case Studies</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-6 ml-auto"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/50 backdrop-blur-sm border border-linkedin/20 rounded-2xl p-5 text-right min-w-[160px]"
            >
              <div className="font-sans text-3xl font-black gradient-text leading-none mb-1">{stat.value}</div>
              <div className="font-sans text-xs text-textMid leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">Scroll</span>
            <div className="w-px h-10 bg-white/20 overflow-hidden">
              <motion.div
                className="w-full bg-linkedin"
                animate={{ height: ['0%', '100%', '0%'], y: ['0%', '0%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

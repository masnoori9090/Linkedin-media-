'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'

const heroStats = [
  { value: '95K+', label: 'Followers Built' },
  { value: '17.8M+', label: 'Impressions Generated' },
  { value: '265K+', label: 'Engagements' },
]

const headlineLines = ['Turn Your', 'Expertise Into', 'Influence']

export default function Hero() {
  const [muted, setMuted] = useState(true)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* YouTube background video — full brightness */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <iframe
          src={`https://www.youtube.com/embed/FIxXuY8Gpw4?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=FIxXuY8Gpw4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          allow="autoplay; encrypted-media"
          className="pointer-events-none absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100vw, 177.78vh)',
            height: 'max(56.25vw, 100vh)',
            opacity: 0.75,
          }}
          title="Hero background video"
        />
      </div>

      {/* Gradient overlay — lighter, only for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(105deg, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.55) 55%, rgba(10,22,40,0.2) 100%), linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 40%)',
        }}
      />

      {/* Mute / Unmute button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={() => setMuted(!muted)}
        className="absolute bottom-10 right-8 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm text-white text-xs font-mono tracking-widest uppercase hover:bg-white/20 transition-all duration-200"
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
            Unmute
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            Mute
          </>
        )}
      </motion.button>

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
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
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
            <Button href="#contact" size="lg">
              Book a Strategy Call →
            </Button>
            <Button href="#case-studies" variant="outline" size="lg">
              View Case Studies
            </Button>
          </motion.div>
        </div>

        {/* Right side floating stats — desktop only */}
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
              <div className="font-sans text-3xl font-black gradient-text leading-none mb-1">
                {stat.value}
              </div>
              <div className="font-sans text-xs text-textMid leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
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
    </section>
  )
}

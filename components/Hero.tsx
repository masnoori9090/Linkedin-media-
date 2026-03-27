'use client'

import { motion } from 'framer-motion'
import Button from './ui/Button'

const heroStats = [
  { value: '95K+', label: 'Followers Built' },
  { value: '17.8M+', label: 'Impressions Generated' },
  { value: '265K+', label: 'Engagements' },
]

const headlineLines = ['Turn Your', 'Expertise Into', 'Influence']
const VIDEO_ID = 'FIxXuY8Gpw4'
const VIDEO_POSTER = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`

export default function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.16] blur-[2px] scale-105"
        style={{ backgroundImage: `url(${VIDEO_POSTER})` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(115deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.82) 45%, rgba(10,22,40,0.58) 100%), linear-gradient(to top, rgba(10,22,40,0.82) 0%, transparent 45%)',
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:px-8 lg:pb-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(360px,460px)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-linkedin sm:w-12" />
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-linkedin">
                LinkedIn Personal Branding
              </span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[88px]">
              {headlineLines.map((line, index) => (
                <span
                  key={line}
                  className={`block ${index === headlineLines.length - 1 ? 'gradient-text italic' : ''}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-textMid sm:text-lg lg:text-xl">
              We architect personal brands for founders, executives, and industry leaders on
              LinkedIn, turning quiet credibility into commanding visibility, pipeline, and
              long-term authority.
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="#contact" size="lg" className="w-full sm:w-auto">
                Book a Strategy Call
              </Button>
              <Button
                href="#case-studies"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-navy-secondary shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${VIDEO_POSTER})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10" />
                <div className="absolute inset-x-5 bottom-5 top-5 flex flex-col justify-between">
                  <div className="self-start rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-sm">
                    Brand Reel
                  </div>

                  <div className="max-w-sm">
                    <a
                      href={VIDEO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-linkedin hover:bg-linkedin/80"
                      aria-label="Watch LinkedIn Media reel on YouTube"
                    >
                      <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>

                    <p className="mt-5 font-display text-2xl leading-tight text-white sm:text-3xl">
                      Watch the reel on YouTube
                    </p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-white/70 sm:text-base">
                      The source video cannot be embedded on external websites, so phones and iPads now open
                      the reel directly in YouTube where playback works reliably.
                    </p>
                    <div className="mt-5">
                      <Button href={VIDEO_URL} external size="md" className="w-full sm:w-auto">
                        Watch Reel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm"
                >
                  <div className="font-sans text-2xl font-black leading-none gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-sans text-xs leading-tight text-textMid">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

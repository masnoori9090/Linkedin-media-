'use client'

import { useEffect, useState } from 'react'
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
const AMBIENT_VIDEO_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1`
const PLAYER_VIDEO_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1`

export default function Hero() {
  const [showPlayer, setShowPlayer] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [deviceReady, setDeviceReady] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: none), (pointer: coarse)')

    const updateDeviceMode = () => {
      setIsTouchDevice(query.matches || navigator.maxTouchPoints > 0)
      setDeviceReady(true)
    }

    updateDeviceMode()

    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', updateDeviceMode)
      return () => query.removeEventListener('change', updateDeviceMode)
    }

    query.addListener(updateDeviceMode)
    return () => query.removeListener(updateDeviceMode)
  }, [])

  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
      {!isTouchDevice && deviceReady && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <iframe
            src={AMBIENT_VIDEO_SRC}
            allow="autoplay; encrypted-media; picture-in-picture"
            className="pointer-events-none absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'max(100vw, 177.78vh)',
              height: 'max(56.25vw, 100vh)',
              opacity: 0.4,
            }}
            title="LinkedIn Media ambient reel"
            tabIndex={-1}
          />
        </div>
      )}

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
                {showPlayer ? (
                  <iframe
                    src={PLAYER_VIDEO_SRC}
                    title="LinkedIn Media hero reel"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${VIDEO_POSTER})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-navy/10" />
                    <div className="absolute inset-x-5 bottom-5 top-5 flex flex-col justify-between">
                      <div className="self-start rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-sm">
                        Brand Reel
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowPlayer(true)}
                        className="group flex w-full flex-col items-start gap-5 text-left"
                        aria-label="Play LinkedIn Media reel"
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:border-linkedin group-hover:bg-linkedin/80">
                          <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>

                        <div className="max-w-sm">
                          <p className="font-display text-2xl leading-tight text-white sm:text-3xl">
                            Watch the reel with sound
                          </p>
                          <p className="mt-2 font-sans text-sm leading-relaxed text-white/70 sm:text-base">
                            {isTouchDevice
                              ? 'Tap to launch an inline player that works reliably on iPhone and iPad.'
                              : 'Play the full reel without interrupting the rest of the page experience.'}
                          </p>
                        </div>
                      </button>
                    </div>
                  </>
                )}
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

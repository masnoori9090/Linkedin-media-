'use client'

import { useEffect, useRef, useState } from 'react'
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
const VIDEO_SRC = '/videos/hero-reel.mp4'

export default function Hero() {
  const mediaCardRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasSound, setHasSound] = useState(false)
  const [playbackHint, setPlaybackHint] = useState<string | null>(null)

  useEffect(() => {
    let frameId = 0

    const syncVideoWithViewport = () => {
      frameId = 0

      const mediaCard = mediaCardRef.current
      const video = videoRef.current
      if (!mediaCard || !video) return

      const rect = mediaCard.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0))
      const visibleRatio = visibleHeight / Math.max(rect.height, 1)

      if (visibleRatio <= 0.2) {
        video.pause()
        video.muted = true
        video.loop = true
        video.controls = false
        setHasSound(false)
        setPlaybackHint(null)
        return
      }

      if (visibleRatio > 0.45 && video.paused && video.muted && !video.controls) {
        const previewPlayback = video.play()
        if (previewPlayback && typeof previewPlayback.catch === 'function') {
          previewPlayback.catch(() => undefined)
        }
      }
    }

    const requestSync = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(syncVideoWithViewport)
    }

    requestSync()
    window.addEventListener('scroll', requestSync, { passive: true })
    window.addEventListener('resize', requestSync)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestSync)
      window.removeEventListener('resize', requestSync)
    }
  }, [])

  const handleEnableSound = () => {
    const video = videoRef.current
    if (!video) return

    setPlaybackHint(null)
    video.pause()
    video.currentTime = 0
    video.muted = false
    video.loop = false
    video.controls = true
    setHasSound(true)

    const playbackAttempt = video.play()
    if (playbackAttempt && typeof playbackAttempt.catch === 'function') {
      playbackAttempt.catch(() => {
        video.muted = true
        video.controls = true
        const mutedRetry = video.play()
        if (mutedRetry && typeof mutedRetry.catch === 'function') {
          mutedRetry.catch(() => undefined)
        }
        setPlaybackHint('If iPhone keeps audio blocked, use the speaker control in the video player.')
      })
    }
  }

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
        <div className="grid w-full items-start gap-x-8 gap-y-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,500px)] xl:grid-cols-[minmax(0,0.88fr)_minmax(430px,560px)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl lg:col-start-1 lg:row-start-1"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:col-start-2 lg:row-start-1"
          >
            <div
              ref={mediaCardRef}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-navy-secondary shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={VIDEO_SRC}
                  poster={VIDEO_POSTER}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hasSound ? 'bg-gradient-to-t from-navy/35 via-transparent to-navy/10' : 'bg-gradient-to-t from-navy via-navy/45 to-navy/10'
                  }`}
                />
                <div
                  className={`absolute inset-x-4 bottom-4 top-4 flex flex-col justify-end sm:inset-x-5 sm:bottom-5 sm:top-5 ${
                    hasSound ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className="max-w-[18rem] sm:max-w-xs">
                    {!hasSound && (
                      <>
                        <button
                          type="button"
                          onClick={handleEnableSound}
                          className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-linkedin hover:bg-linkedin/80 sm:h-16 sm:w-16"
                          aria-label="Play reel with sound"
                        >
                          <svg className="h-5 w-5 translate-x-0.5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>

                        <p className="mt-4 font-display text-xl leading-tight text-white sm:mt-5 sm:text-2xl">
                          Watch this
                        </p>
                        <p className="mt-2 font-sans text-xs leading-relaxed text-white/70 sm:text-sm">
                          The reel now plays directly on the website. Tap once to switch from the muted preview
                          to full playback with sound.
                        </p>
                      </>
                    )}

                    {hasSound && playbackHint && (
                      <p className="mt-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 font-sans text-xs leading-relaxed text-white/80 backdrop-blur-sm">
                        {playbackHint}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-start-1 lg:row-start-2"
          >
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="https://calendly.com/trifidmedia-/30min" size="lg" className="w-full sm:w-auto">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-start-2 lg:row-start-2"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
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

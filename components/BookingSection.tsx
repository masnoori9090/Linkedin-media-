'use client'

import Script from 'next/script'
import RevealOnScroll from './ui/RevealOnScroll'

export default function BookingSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-navy overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,119,181,0.12) 0%, rgba(0,212,170,0.04) 50%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              Book a Call
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Let&apos;s talk about your{' '}
              <span className="italic gradient-text">LinkedIn presence</span>
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden"
            data-url="https://calendly.com/trifidmedia-/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=060606&text_color=ffffff"
            style={{ minWidth: '320px', height: '700px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}

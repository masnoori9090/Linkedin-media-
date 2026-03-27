import RevealOnScroll from './ui/RevealOnScroll'
import Button from './ui/Button'

export default function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-navy py-20 md:py-32 lg:py-44">
      {/* Radial blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,119,181,0.18) 0%, rgba(0,212,170,0.06) 50%, transparent 75%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,182,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,182,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <RevealOnScroll>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-6">
            Let&apos;s Build
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Ready to become the voice{' '}
            <span className="italic gradient-text">your industry listens to?</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="font-sans text-base md:text-xl text-textMid leading-relaxed mb-8 md:mb-12 max-w-xl mx-auto">
            No pitch decks. No pressure. Just a strategic conversation about where you are and where you want to be.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button href="mailto:hello@linkedinmedia.com" size="lg">
              Book a Strategy Call →
            </Button>
            <Button href="#case-studies" variant="outline" size="lg">
              See More Results
            </Button>
          </div>
          <p className="font-sans text-sm text-textMuted">
            Free 30-minute consultation · No commitment
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

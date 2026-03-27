import AnimatedCounter from './ui/AnimatedCounter'
import RevealOnScroll from './ui/RevealOnScroll'

const stats = [
  { value: '95K+', label: 'Followers Built' },
  { value: '17.8M+', label: 'Impressions Generated' },
  { value: '265K+', label: 'Engagements' },
  { value: '329K+', label: 'Impressions (90 Days)' },
]

export default function StatsBand() {
  return (
    <section
      id="results"
      className="relative overflow-hidden scroll-mt-28 py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,119,181,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-10 max-w-5xl text-center md:mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              The Numbers
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Results that speak louder than promises
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-navy-secondary/80 p-6 text-center backdrop-blur-sm sm:p-8 xl:p-10"
            >
              <AnimatedCounter
                value={stat.value}
                label={stat.label}
                numberClassName="mb-3 text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl"
                labelClassName="mt-2 text-sm sm:text-base"
                duration={2200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

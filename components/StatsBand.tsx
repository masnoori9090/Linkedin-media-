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
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
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
          <div className="text-center mb-10 md:mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              The Numbers
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Results that speak louder than promises
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-navy-secondary/80 backdrop-blur-sm p-5 md:p-8 lg:p-12 text-center"
            >
              <AnimatedCounter
                value={stat.value}
                label={stat.label}
                numberClassName="text-3xl md:text-5xl lg:text-7xl mb-3"
                labelClassName="text-sm md:text-base mt-2"
                duration={2200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

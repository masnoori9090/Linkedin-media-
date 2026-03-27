import RevealOnScroll, { StaggerContainer, StaggerChild } from './ui/RevealOnScroll'

const whyLinkedInStats = [
  { value: '5%', label: 'Create consistent content' },
  { value: '50K', label: 'Fastest algorithm growth phase' },
  { value: '95%', label: "Aren't competing yet" },
]

export default function WhyLinkedIn() {
  return (
    <section id="why" className="section-light py-16 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start lg:items-center">
          {/* Text */}
          <div>
            <RevealOnScroll>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-6">
                Why LinkedIn
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-navyText mb-8">
                If you&apos;re not building your personal brand on LinkedIn,{' '}
                <span className="italic" style={{ color: '#0077B5' }}>
                  you&apos;re sleeping on the biggest opportunity of our time.
                </span>
              </h2>
            </RevealOnScroll>

            <StaggerContainer staggerDelay={0.12}>
              <StaggerChild>
                <p className="font-sans text-lg text-navyMid leading-relaxed mb-6">
                  Out of hundreds of millions of accounts, less than{' '}
                  <strong className="text-navyText font-semibold">5% are creating high-quality, consistent content.</strong>{' '}
                  LinkedIn rewards the micro-creators — the people willing to show up consistently.
                </p>
              </StaggerChild>
              <StaggerChild>
                <p className="font-sans text-lg text-navyMid leading-relaxed">
                  The fastest growth phase? <strong className="text-navyText font-semibold">0 to 50K followers.</strong>{' '}
                  That&apos;s when the algorithm is actively pushing new voices to the surface. The window is wide open — and most people aren&apos;t walking through it.
                </p>
              </StaggerChild>
            </StaggerContainer>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
              {whyLinkedInStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-xl shadow-sky-100/30 ${
                    index === whyLinkedInStats.length - 1 ? 'col-span-2 mx-auto w-full max-w-[12rem]' : ''
                  }`}
                >
                  <div className="font-sans text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="mt-2 font-sans text-sm leading-snug text-navyMid">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual — oversized "in" watermark + stats */}
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="relative hidden min-h-[420px] items-center justify-center md:flex lg:min-h-[520px]">
              {/* Giant "in" lettermark */}
              <div
                className="font-display text-[140px] md:text-[240px] lg:text-[300px] font-black leading-none select-none pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,119,181,0.12) 0%, rgba(56,182,255,0.06) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                aria-hidden="true"
              >
                in
              </div>

              {/* Floating stats over the "in" */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                {whyLinkedInStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="w-36 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-xl md:w-48"
                  >
                    <div className="font-sans text-3xl font-black gradient-text md:text-4xl">{stat.value}</div>
                    <div className="mt-1 font-sans text-sm text-navyMid">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

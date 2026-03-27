import RevealOnScroll, { StaggerContainer, StaggerChild } from './ui/RevealOnScroll'

const steps = [
  {
    num: '01',
    title: 'Onboarding Call',
    desc: 'Deep-dive session into your expertise, goals, and audience. We learn everything about your brand voice.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy & Content Buckets',
    desc: 'We define your tone, pillars, and competitive positioning. Your unique story becomes the strategy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Content Calendar',
    desc: 'A monthly content calendar aligned with your brand story and business goals. Planned. Purposeful. Ready.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Batch Produce & Approve',
    desc: 'We write, design, and share 15 posts for your approval. You review. You approve. Nothing goes live without your sign-off.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" />
        <path d="M10 9l-2 2-1-1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Post & Optimize',
    desc: 'We publish, engage with your audience, and optimize based on monthly performance data. Continuous improvement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
        <path d="M9 7h6M9 11h4" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Chevrons() {
  return (
    <div className="hidden lg:flex items-center gap-0.5 shrink-0 mx-2" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          viewBox="0 0 12 24"
          className="w-3 h-6"
          style={{ opacity: 0.3 + i * 0.23 }}
        >
          <path d="M2 4l8 8-8 8" stroke="url(#chevGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <defs>
            <linearGradient id="chevGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0077B5" />
              <stop offset="100%" stopColor="#38B6FF" />
            </linearGradient>
          </defs>
        </svg>
      ))}
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 overflow-hidden bg-navy py-16 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-20">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              Our Methodology
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
              How we build your brand{' '}
              <span className="italic gradient-text">in 5 steps</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start justify-between">
          {steps.map((step, i) => (
            <div key={step.num} className="contents">
              <RevealOnScroll key={step.num} delay={i * 0.1} className="flex-1 min-w-0">
                <div className="text-center px-3">
                  {/* Icon */}
                  <div
                    className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-linkedin"
                    style={{ background: 'rgba(0,119,181,0.12)', border: '1px solid rgba(0,119,181,0.2)' }}
                  >
                    {step.icon}
                  </div>

                  <span className="font-mono text-xs text-textMuted tracking-widest block mb-2">
                    {step.num}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-textMid leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
              {i < steps.length - 1 && <Chevrons key={`chevron-${i}`} />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <StaggerContainer className="lg:hidden space-y-0" staggerDelay={0.1}>
          {steps.map((step, i) => (
            <StaggerChild key={step.num}>
              <div className="flex gap-6 relative">
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-7 top-16 bottom-0 w-px"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,119,181,0.4), transparent)' }}
                  />
                )}

                {/* Icon */}
                <div
                  className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-linkedin mt-1"
                  style={{ background: 'rgba(0,119,181,0.12)', border: '1px solid rgba(0,119,181,0.2)' }}
                >
                  {step.icon}
                </div>

                <div className="pb-10">
                  <span className="font-mono text-xs text-textMuted tracking-widest block mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-textMid leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

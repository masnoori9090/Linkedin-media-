import Image from 'next/image'
import RevealOnScroll, { StaggerContainer, StaggerChild } from './ui/RevealOnScroll'

const founderStats = [
  { value: '95,000+', label: 'Followers' },
  { value: '17,887,387', label: 'Cumulative Impressions' },
  { value: '265,262', label: 'Engagements' },
]

export default function FounderProof() {
  return (
    <section className="section-light py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              Proof of Concept
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navyText leading-tight tracking-tight max-w-2xl">
              First, we did it{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #0077B5, #38B6FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                with our founder
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — story */}
          <div>
            <RevealOnScroll delay={0.1}>
              <p className="font-sans text-xl text-navyMid leading-relaxed mb-10">
                Before building brands for others, Mahdi Shafiei built his own — from zero to{' '}
                <strong className="text-navyText">95,000+ followers in less than a year.</strong>{' '}
                What started as a personal experiment became the proof of concept behind everything Trifid Media does today.
              </p>
            </RevealOnScroll>

            <StaggerContainer staggerDelay={0.12}>
              {founderStats.map((stat) => (
                <StaggerChild key={stat.label}>
                  <div className="flex items-baseline gap-4 py-5 border-b border-gray-100 last:border-0">
                    <span
                      className="font-sans text-4xl md:text-5xl font-black"
                      style={{
                        background: 'linear-gradient(135deg, #0077B5, #38B6FF, #00D4AA)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.value}
                    </span>
                    <span className="font-sans text-navyMid text-lg">{stat.label}</span>
                  </div>
                </StaggerChild>
              ))}
            </StaggerContainer>

            <RevealOnScroll delay={0.4}>
              <p className="font-sans text-navyMid leading-relaxed mt-8">
                LinkedIn helped Trifid attract leads across the GCC and globally, hire top-tier talent,
                land global retainer clients, get Mahdi invited to speak on massive stages, and lock in
                partnerships with some of the coolest brands in the region.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right — image placeholders */}
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="grid grid-cols-1 gap-4">
              {/* REPLACE: Founder LinkedIn screenshot */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-secondary border border-linkedin/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-linkedin text-4xl mb-3">📊</div>
                  <p className="font-mono text-xs text-textMid tracking-widest uppercase">
                    {/* REPLACE: Add founder LinkedIn analytics screenshot here */}
                    Founder Analytics Screenshot
                  </p>
                  <p className="font-sans text-xs text-textMuted mt-1">
                    /public/images/founder-analytics.jpg
                  </p>
                </div>
              </div>
              {/* REPLACE: Founder LinkedIn profile screenshot */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-secondary border border-linkedin/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-linkedin text-4xl mb-3">👤</div>
                  <p className="font-mono text-xs text-textMid tracking-widest uppercase">
                    {/* REPLACE: Add founder LinkedIn profile screenshot here */}
                    Founder Profile Screenshot
                  </p>
                  <p className="font-sans text-xs text-textMuted mt-1">
                    /public/images/founder-profile.jpg
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

'use client'

import RevealOnScroll from './ui/RevealOnScroll'

const caseStudies = [
  {
    id: 'kris-fade',
    tag: 'Media & Entertainment',
    client: 'Kris Fade',
    tagline: 'From Drivers to Dubai\'s Biggest Radio Voice — We Told the Story People Didn\'t Know.',
    bigMetric: '#1',
    metricLabel: 'Inbound Lead Source',
    what: [
      'PowerPosts with bold, scroll-stopping messaging',
      'AI-driven visual reimagination posts',
      'Real conversations from Kris\'s personal life',
      'Celebrity interactions & honest market takes',
      'Full storytelling arc of FadeFit — the why, how, and hustle',
      'Journey content from early days to top radio host in Dubai',
    ],
    results: [
      'High-performing PowerPosts with strong shares',
      'Deep engagement on journey-led storytelling',
      'Strong resonance on FadeFit origin stories',
      'Increased brand authority across business and personal narratives',
    ],
    bgDark: true,
  },
  {
    id: 'hospitality',
    tag: 'Hospitality Leadership',
    client: 'Client B',
    tagline: 'We made leadership feel human, visible, and consistently present.',
    bigMetric: '109K',
    metricLabel: 'Impressions',
    what: [
      'Journey-based storytelling posts',
      'AI-generated Power Posts and Quote-style content',
      'Employee spotlight posts',
      '"Day in the life" formats',
      'Behind-the-scenes conversations with team members',
      'Real, unpolished moments from daily routine',
    ],
    results: [
      '109,054 impressions',
      '27,084 members reached',
      'Multiple posts crossing 14,000+ impressions',
      'Built to 20,812 followers with steady engagement growth',
    ],
    bgDark: false,
  },
  {
    id: 'trifid',
    tag: 'Proof in Practice',
    client: 'Trifid Media',
    tagline: 'We\'ve seen it play out firsthand — LinkedIn built our business.',
    bigMetric: 'GCC',
    metricLabel: '& Global Reach',
    what: [
      'Consistent founder-led content on LinkedIn',
      'Thought leadership posts from Mahdi\'s own experience',
      'Behind-the-scenes of agency life',
      'Educational content on personal branding strategy',
      'Case study storytelling for social proof',
      'Network building with regional and global leaders',
    ],
    results: [
      'Attracting leads in the GCC and globally',
      'Hiring top-tier talent for Trifid Media and Trifid Properties',
      'Landing global retainer clients who found Mahdi through his posts',
      'Mahdi invited to speak on massive regional stages',
      'Partnerships with top brands in the region',
    ],
    bgDark: true,
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="overflow-hidden">
      {/* Section header */}
      <div className="py-20 bg-navy text-center">
        <RevealOnScroll>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
            Client Stories
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto px-6">
            Case studies that prove{' '}
            <span className="italic gradient-text">the system works</span>
          </h2>
        </RevealOnScroll>
      </div>

      {caseStudies.map((cs, i) => {
        const isLeft = i % 2 === 0
        return (
          <div
            key={cs.id}
            className={`py-24 md:py-32 ${cs.bgDark ? 'bg-navy-secondary' : 'section-light'}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isLeft ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Big metric side */}
                <RevealOnScroll direction={isLeft ? 'right' : 'left'}>
                  <div className={!isLeft ? 'lg:col-start-2' : ''}>
                    <span
                      className={`font-mono text-xs tracking-[0.2em] uppercase font-bold block mb-6 ${
                        cs.bgDark ? 'text-linkedin' : 'text-linkedin'
                      }`}
                    >
                      {cs.tag}
                    </span>

                    {/* Giant metric */}
                    <div
                      className="font-sans font-black leading-none mb-2"
                      style={{
                        fontSize: 'clamp(80px, 14vw, 140px)',
                        background: 'linear-gradient(135deg, #00D4AA 0%, #38B6FF 50%, #0077B5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {cs.bigMetric}
                    </div>
                    <p
                      className={`font-sans text-xl font-semibold mb-8 ${
                        cs.bgDark ? 'text-textMid' : 'text-navyMid'
                      }`}
                    >
                      {cs.metricLabel}
                    </p>

                    {/* Tagline */}
                    <h3
                      className={`font-display text-2xl md:text-3xl font-bold leading-snug ${
                        cs.bgDark ? 'text-white' : 'text-navyText'
                      }`}
                    >
                      {cs.tagline}
                    </h3>
                  </div>
                </RevealOnScroll>

                {/* What we did / Results side */}
                <RevealOnScroll direction={isLeft ? 'left' : 'right'} delay={0.15}>
                  <div className={!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="mb-8">
                      <h4
                        className={`font-sans text-xs font-bold tracking-[0.15em] uppercase mb-5 ${
                          cs.bgDark ? 'text-linkedin' : 'text-linkedin'
                        }`}
                      >
                        What We Did
                      </h4>
                      <ul className="space-y-3">
                        {cs.what.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-3 font-sans text-base leading-snug ${
                              cs.bgDark ? 'text-textMid' : 'text-navyMid'
                            }`}
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-linkedin shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`pt-8 border-t ${
                        cs.bgDark ? 'border-white/10' : 'border-gray-100'
                      }`}
                    >
                      <h4
                        className={`font-sans text-xs font-bold tracking-[0.15em] uppercase mb-5 ${
                          cs.bgDark ? 'text-teal' : 'text-teal'
                        }`}
                        style={{ color: '#00D4AA' }}
                      >
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {cs.results.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-3 font-sans text-base leading-snug ${
                              cs.bgDark ? 'text-textDark' : 'text-navyText'
                            }`}
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: '#00D4AA' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

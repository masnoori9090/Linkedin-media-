import RevealOnScroll, { StaggerContainer, StaggerChild } from './ui/RevealOnScroll'

const testimonials = [
  {
    quote:
      'My LinkedIn has become my number one source of inbound opportunities. The storytelling approach is different — it\'s real, it\'s mine, and it works.',
    name: 'Kris Fade',
    title: 'Radio Host & Entrepreneur',
    location: 'Dubai',
    initial: 'KF',
    color: '#0077B5',
  },
  {
    quote:
      'In just 2 months, LinkedIn Media took my account from virtually zero to over 77,000 impressions. They made my 30 years of experience feel fresh and compelling.',
    name: 'Paul Papadopoulos',
    title: 'Interior Design Leader',
    location: 'Australia',
    initial: 'PP',
    color: '#38B6FF',
  },
  {
    quote:
      'I was skeptical about LinkedIn. Now I have a growing audience, real conversations, and leads that come directly from my content. They made it effortless.',
    name: 'Wendy El Khoury',
    title: 'Hospitality Leader',
    location: 'Australia',
    initial: 'WK',
    color: '#00D4AA',
  },
  {
    quote:
      '185,000 impressions in 90 days. But more than numbers, my credibility in the market has noticeably shifted.',
    name: 'Jad Al Fakhani',
    title: 'Industry Expert',
    location: 'GCC',
    initial: 'JF',
    color: '#0A66C2',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 section-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              Client Voices
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navyText leading-tight tracking-tight max-w-xl">
              Words from the leaders{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #0077B5, #38B6FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                we&apos;ve built
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <StaggerChild key={t.name}>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
                {/* Decorative quote mark */}
                <div
                  className="font-display text-7xl font-black leading-none mb-4"
                  style={{ color: t.color, opacity: 0.15 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <blockquote className="font-sans text-lg text-navyMid leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div
                  className="flex items-center gap-4 pt-6 border-t border-gray-100"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-sans font-bold text-sm shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <strong className="font-sans font-semibold text-navyText text-sm block">
                      {t.name}
                    </strong>
                    <span className="font-sans text-xs text-navyMid">
                      {t.title} · {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

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
      'The team really understands the GCC business landscape. My content now speaks to exactly the people I want to reach — decision-makers and investors.',
    name: 'Sarah Al-Rashid',
    title: 'Chief Strategy Officer',
    location: 'Riyadh',
    initial: 'SR',
    color: '#00D4AA',
  },
  {
    quote:
      'I was skeptical about LinkedIn, but after 90 days the ROI is undeniable. Three enterprise clients came directly from a single post they helped me write.',
    name: 'James Whitmore',
    title: 'Founder & Managing Director',
    location: 'London',
    initial: 'JW',
    color: '#0077B5',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-light py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              Client Voices
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navyText leading-tight tracking-tight">
              What our clients{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #0077B5, #38B6FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                actually say
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <StaggerChild key={t.name}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div
                    className="font-display text-6xl leading-none mb-6 select-none"
                    style={{ color: t.color, opacity: 0.2 }}
                  >
                    &ldquo;
                  </div>
                  <p className="font-sans text-navyMid leading-relaxed text-lg mb-8">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-sans font-bold text-sm shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-navyText text-sm">{t.name}</p>
                    <p className="font-sans text-xs text-navyMid">{t.title} · {t.location}</p>
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

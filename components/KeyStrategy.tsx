import RevealOnScroll from './ui/RevealOnScroll'

const pillars = [
  {
    keyword: 'PROVEN VIRALITY',
    description:
      'Content needs to focus on content pillars such as behind-the-scenes and educational/informative. Every post is engineered to add genuine value to the audience — because value travels.',
  },
  {
    keyword: 'PERSONAL TOUCH',
    description:
      'Members of the brand are highly encouraged to be in the content. Nobody tells a better story than the brand representatives themselves. Audiences prefer people over product.',
  },
  {
    keyword: 'VIDEO-FOCUSED',
    description:
      'Reels perform best — they expose your account to non-followers. Increasing monthly volume of reels has significant impact on engagement and growth. Show up on camera; own the feed.',
  },
]

export default function KeyStrategy() {
  return (
    <section id="approach" className="section-light py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-20">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              Our Approach
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navyText leading-tight tracking-tight max-w-xl">
              Key Strategy Points
            </h2>
          </div>
        </RevealOnScroll>

        {/* Pillars */}
        <div className="flex flex-col divide-y divide-gray-100">
          {pillars.map((pillar, i) => (
            <RevealOnScroll key={pillar.keyword} delay={i * 0.1}>
              <div className="group grid md:grid-cols-2 gap-6 md:gap-16 items-center py-12 md:py-16 hover:bg-gray-50/50 transition-colors duration-300 px-0 rounded-2xl -mx-4 px-4">
                {/* Keyword left */}
                <div>
                  <span
                    className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #0A1628 0%, #3A4A5C 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {pillar.keyword}
                  </span>
                </div>

                {/* Description right */}
                <div className="flex items-center gap-6">
                  <div
                    className="hidden md:block w-px h-16 shrink-0"
                    style={{ background: 'linear-gradient(to bottom, #0077B5, #00D4AA)' }}
                  />
                  <p className="font-sans text-lg text-navyMid leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

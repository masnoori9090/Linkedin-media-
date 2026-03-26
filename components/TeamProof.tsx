import Image from 'next/image'
import RevealOnScroll, { StaggerContainer, StaggerChild } from './ui/RevealOnScroll'

const team = [
  {
    name: 'Faress Ouzaghla',
    headline: 'Helping brands go viral without selling their soul',
    photo: '/images/faress.png',
    stats: [
      { value: '9,552', label: 'Followers' },
      { value: '300,600', label: 'Impressions' },
    ],
    color: '#0077B5',
  },
  {
    name: 'Diana Salam',
    headline: 'Brand & Project Manager | Creative Director | Luxury, Fashion & Beauty',
    photo: '/images/Diana.png',
    stats: [
      { value: '329,470', label: 'Impressions' },
      { value: '197,979', label: 'Members Reached' },
      { value: '14,000+', label: 'Per Top Post' },
    ],
    color: '#38B6FF',
  },
  {
    name: 'Randy Gad',
    headline: 'On a mission to help 1,000 ambitious entrepreneurs',
    photo: '/images/Rnady.png',
    stats: [
      { value: '2,118', label: 'Followers' },
      { value: '96,527', label: 'Impressions' },
    ],
    color: '#00D4AA',
  },
]

export default function TeamProof() {
  return (
    <section className="py-28 md:py-36 bg-navy-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              The Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto">
              The Trifid team followed suit and{' '}
              <span className="italic gradient-text">scaled their accounts</span> as well
            </h2>
          </div>
        </RevealOnScroll>

        {/* Cards */}
        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerChild key={member.name}>
              <div className="card-hover-glow bg-navy-card border border-white/5 rounded-3xl overflow-hidden h-full">
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${member.color}33 0%, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div
                    className="w-8 h-[2px] mb-4 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                  />
                  <h3 className="font-display text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="font-sans text-sm text-textMid leading-snug mb-5">{member.headline}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3">
                    {member.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-navy-secondary rounded-xl px-3 py-2 text-center flex-1 min-w-[80px]"
                      >
                        <div
                          className="font-sans font-black text-lg leading-none"
                          style={{ color: member.color }}
                        >
                          {stat.value}
                        </div>
                        <div className="font-sans text-[10px] text-textMuted mt-1 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
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

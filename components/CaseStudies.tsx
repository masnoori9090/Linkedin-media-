'use client'

import Image from 'next/image'
import RevealOnScroll, { StaggerContainer, StaggerChild } from './ui/RevealOnScroll'

const caseStudies = [
  {
    id: 'kris-fade',
    tag: 'Media & Entertainment',
    client: 'Kris Fade',
    tagline: 'From radio host to LinkedIn authority — the story people didn\'t know.',
    bigMetric: '43.6K',
    metricLabel: 'Followers Built',
    image: '/images/12.png',
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
    id: 'charlie-patel',
    tag: 'Business & Real Estate',
    client: 'Charlie Patel',
    tagline: 'Turning deep business expertise into LinkedIn authority that attracts real deals.',
    bigMetric: '141K',
    metricLabel: 'Impressions',
    image: '/images/5.png',
    postsImage: '/images/4.png',
    what: [
      'Thought leadership posts on business formation & real estate',
      'PowerPosts with sharp, quotable business insights',
      'Journey-based storytelling from entrepreneur to chairman',
      'Content positioning for government & investor audiences',
      'AI-generated visual posts paired with strategic narratives',
    ],
    results: [
      '141,037 impressions in a short period',
      '38,642 members reached',
      'Top posts generating 18,000+ impressions each',
      'Built authority with entrepreneurs, governments & investors',
    ],
    bgDark: false,
  },
  {
    id: 'wendy',
    tag: 'Luxury & Hospitality',
    client: 'Wendy Daoud El-Khoury',
    tagline: 'Building a global luxury brand one authentic LinkedIn post at a time.',
    bigMetric: '329K',
    metricLabel: 'Impressions',
    image: '/images/10.png',
    what: [
      'Authentic storytelling around luxury & personal brand',
      'Visual-first content with cinematic post aesthetics',
      'Quote-style posts with high shareability',
      '"Behind the business" content for Wedding Wonderland',
      'Personal vulnerability posts that drive massive engagement',
    ],
    results: [
      '329,470 impressions across content',
      '197,979 members reached',
      '14,000+ impressions on top performing posts',
      'Positioned as a leading voice in luxury wedding business',
    ],
    bgDark: true,
  },
]

const moreClients = [
  {
    name: 'Jad Al Fakhani',
    role: 'eCommerce Founder | 12,035 Followers',
    profileImage: '/images/7.png',
    postsImage: '/images/6.png',
    metric: '12K+',
    metricLabel: 'Followers',
    color: '#0077B5',
  },
  {
    name: 'Nicholas El-Khoury',
    role: 'Global Strategy | Wonder Group',
    profileImage: '/images/9.png',
    postsImage: '/images/8.png',
    metric: '30.2K',
    metricLabel: 'Impressions',
    color: '#38B6FF',
  },
  {
    name: 'John Nolan',
    role: 'Group CEO | Business Mentor',
    profileImage: '/images/3.png',
    postsImage: null,
    metric: '91.7K',
    metricLabel: 'Impressions',
    color: '#00D4AA',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="overflow-hidden">
      {/* Section header */}
      <div className="py-14 md:py-20 bg-navy text-center">
        <RevealOnScroll>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
            Client Stories
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto px-6">
            Case studies that prove{' '}
            <span className="italic gradient-text">the system works</span>
          </h2>
        </RevealOnScroll>
      </div>

      {/* Featured case studies */}
      {caseStudies.map((cs, i) => {
        const isLeft = i % 2 === 0
        return (
          <div
            key={cs.id}
            className={`py-14 md:py-24 lg:py-32 ${cs.bgDark ? 'bg-navy-secondary' : 'section-light'}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center`}>
                {/* Image side */}
                <RevealOnScroll direction={isLeft ? 'right' : 'left'} className={!isLeft ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                    <Image
                      src={cs.image}
                      alt={`${cs.client} LinkedIn results`}
                      width={700}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  {cs.postsImage && (
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/5 mt-4">
                      <Image
                        src={cs.postsImage}
                        alt={`${cs.client} LinkedIn posts`}
                        width={700}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                </RevealOnScroll>

                {/* Content side */}
                <RevealOnScroll direction={isLeft ? 'left' : 'right'} delay={0.15} className={!isLeft ? 'lg:order-1' : ''}>
                  <div>
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-6">
                      {cs.tag}
                    </span>

                    {/* Giant metric */}
                    <div
                      className="font-sans font-black leading-none mb-2"
                      style={{
                        fontSize: 'clamp(48px, 10vw, 120px)',
                        background: 'linear-gradient(135deg, #00D4AA 0%, #38B6FF 50%, #0077B5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {cs.bigMetric}
                    </div>
                    <p className={`font-sans text-xl font-semibold mb-6 ${cs.bgDark ? 'text-textMid' : 'text-navyMid'}`}>
                      {cs.metricLabel}
                    </p>

                    <h3 className={`font-display text-xl md:text-3xl font-bold leading-snug mb-8 ${cs.bgDark ? 'text-white' : 'text-navyText'}`}>
                      {cs.tagline}
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-sans text-xs font-bold tracking-[0.15em] uppercase mb-4 text-linkedin">
                        What We Did
                      </h4>
                      <ul className="space-y-2">
                        {cs.what.map((item) => (
                          <li key={item} className={`flex items-start gap-3 font-sans text-sm leading-snug ${cs.bgDark ? 'text-textMid' : 'text-navyMid'}`}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-linkedin shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`pt-6 border-t ${cs.bgDark ? 'border-white/10' : 'border-gray-100'}`}>
                      <h4 className="font-sans text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: '#00D4AA' }}>
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {cs.results.map((item) => (
                          <li key={item} className={`flex items-start gap-3 font-sans text-sm leading-snug ${cs.bgDark ? 'text-textDark' : 'text-navyText'}`}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#00D4AA' }} />
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

      {/* More clients grid */}
      <div className="py-14 md:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <RevealOnScroll>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold text-center mb-4">
              More Clients
            </p>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white text-center mb-10 md:mb-16">
              More leaders getting{' '}
              <span className="italic gradient-text">real results</span>
            </h3>
          </RevealOnScroll>

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6">
            {moreClients.map((client) => (
              <StaggerChild key={client.name}>
                <div className="card-hover-glow bg-navy-card border border-white/5 rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={client.profileImage}
                      alt={client.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.9) 0%, transparent 60%)' }} />
                    <div className="absolute bottom-4 left-4">
                      <div className="font-sans font-black text-3xl" style={{ color: client.color }}>
                        {client.metric}
                      </div>
                      <div className="font-sans text-xs text-white/70">{client.metricLabel}</div>
                    </div>
                  </div>
                  {client.postsImage && (
                    <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={client.postsImage}
                        alt={`${client.name} posts`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: `linear-gradient(90deg, ${client.color}, transparent)` }} />
                    <h4 className="font-display text-lg font-bold text-white mb-1">{client.name}</h4>
                    <p className="font-sans text-xs text-textMuted">{client.role}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

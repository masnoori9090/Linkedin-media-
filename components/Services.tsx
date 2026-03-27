import RevealOnScroll, { StaggerContainer, StaggerChild } from './ui/RevealOnScroll'

const services = [
  {
    num: '01',
    title: 'Profile Optimization',
    body: 'Your LinkedIn profile is your landing page. We redesign your banner, headline, About section, and experience to convert visitors into clients, partners, and opportunities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeLinecap="round" />
        <path d="M16 11l1.5 1.5L21 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Content Strategy',
    body: 'We define your tone, audience, and content pillars — then build a monthly calendar that tells your story and positions you as the go-to voice in your industry.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 10h10M7 14h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Content Creation & Management',
    body: 'We handle everything — writing, creative direction, scheduling, and engagement. 15 fully managed posts per month, each approved by you before it goes live.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.586 3.586a2 2 0 112.828 2.828L12 15l-4 1 1-4 8.586-8.414z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Growth & Thought Leadership',
    body: 'Once the foundation is set, we amplify — targeted follower growth, strategic engagement with key voices, and monthly performance optimization.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 17l4-5 4 4 4-6 4 3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="6" r="3" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 lg:py-36 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-10 md:mb-16 lg:mb-20">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-linkedin font-bold block mb-4">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
              A full-service branding engine{' '}
              <span className="italic gradient-text">built for LinkedIn</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <StaggerChild key={svc.num}>
              <div className="group card-hover-glow bg-navy-secondary border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden h-full">
                {/* Top blue border on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #0077B5, #38B6FF, #00D4AA)' }}
                />

                {/* Number watermark */}
                <span className="absolute top-6 right-8 font-sans text-6xl font-black text-white/[0.04] leading-none select-none">
                  {svc.num}
                </span>

                {/* Icon */}
                <div className="text-linkedin mb-5">{svc.icon}</div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                  {svc.title}
                </h3>
                <p className="font-sans text-textMid leading-relaxed">{svc.body}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

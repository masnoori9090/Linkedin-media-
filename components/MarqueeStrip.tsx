const items = [
  'LinkedIn Strategy',
  'Content Creation',
  'Visual Storytelling',
  'Thought Leadership',
  'Founder Branding',
  'Profile Optimization',
  'PowerPosts',
  'Engagement Growth',
  'Content Management',
]

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-4 md:gap-6 shrink-0">
      <span className="font-sans text-sm md:text-base font-medium tracking-wide text-textDark whitespace-nowrap">
        {text}
      </span>
      <span className="text-linkedin text-xs">◆</span>
    </span>
  )
}

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        backgroundColor: '#0A1628',
        borderColor: 'rgba(0,119,181,0.15)',
        paddingTop: '18px',
        paddingBottom: '18px',
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A1628, transparent)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A1628, transparent)' }}
      />

      <div className="marquee-inner">
        {repeated.map((item, i) => (
          <MarqueeItem key={i} text={item} />
        ))}
      </div>
    </div>
  )
}

import Link from 'next/link'

const services = [
  { label: 'Profile Optimization', href: '#profile-optimization' },
  { label: 'Content Strategy', href: '#content-strategy' },
  { label: 'Content Creation & Management', href: '#content-creation-management' },
  { label: 'Growth & Thought Leadership', href: '#growth-thought-leadership' },
]

const company = [
  { label: 'Results', href: '#results' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-secondary border-t" style={{ borderColor: 'rgba(0,119,181,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        {/* 4-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-0 mb-4">
              <span className="font-display text-xl font-bold text-white tracking-tight">LinkedIn</span>
              <span className="font-display text-xl font-bold tracking-tight" style={{ color: '#0077B5' }}>
                Media
              </span>
            </Link>
            <p className="font-sans text-sm text-textMid leading-relaxed mb-6 max-w-[220px]">
              Dubai-based LinkedIn personal branding agency for founders, executives, and industry leaders.
            </p>
            {/* Social — LinkedIn icon */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/trifid-media"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Media on LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:bg-linkedin hover:border-linkedin"
                style={{ borderColor: 'rgba(0,119,181,0.3)' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-linkedin">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="font-sans text-sm text-textMid hover:text-linkedin transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-sm text-textMid hover:text-linkedin transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-white mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@linkedinmedia.com"
                className="font-sans text-sm text-textMid hover:text-linkedin transition-colors duration-200 block"
              >
                hello@linkedinmedia.com
              </a>
              <p className="font-sans text-sm text-textMuted">Dubai, UAE</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-linkedin hover:text-sky-400 transition-colors duration-200 mt-2"
                style={{ color: '#38B6FF' }}
              >
                Book a Call →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="font-sans text-xs text-textMuted">
            © 2026 LinkedIn Media. All rights reserved.
          </p>
          <a
            href="#hero"
            className="font-sans text-xs text-textMuted hover:text-linkedin transition-colors duration-200"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

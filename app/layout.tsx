import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Trifid Media — LinkedIn Personal Branding Agency',
  description:
    'We architect personal brands for founders, executives, and industry leaders on LinkedIn — transforming quiet credibility into commanding visibility. Dubai-based, globally reaching.',
  keywords: [
    'LinkedIn personal branding',
    'LinkedIn agency Dubai',
    'thought leadership',
    'founder branding',
    'content strategy LinkedIn',
    'Trifid Media',
  ],
  openGraph: {
    title: 'Trifid Media — LinkedIn Personal Branding Agency',
    description:
      'We architect personal brands for founders, executives, and industry leaders on LinkedIn.',
    siteName: 'Trifid Media',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trifid Media — LinkedIn Personal Branding Agency',
    description:
      'We architect personal brands for founders, executives, and industry leaders on LinkedIn.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Noise overlay — premium grain texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

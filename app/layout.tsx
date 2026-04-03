import type { Metadata } from 'next'
import { Syne, Inter, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LinkedIn Media — LinkedIn Personal Branding Agency',
  description:
    'We architect personal brands for founders, executives, and industry leaders on LinkedIn — transforming quiet credibility into commanding visibility. Dubai-based, globally reaching.',
  keywords: [
    'LinkedIn personal branding',
    'LinkedIn agency Dubai',
    'thought leadership',
    'founder branding',
    'content strategy LinkedIn',
    'LinkedIn Media',
  ],
  openGraph: {
    title: 'LinkedIn Media — LinkedIn Personal Branding Agency',
    description:
      'We architect personal brands for founders, executives, and industry leaders on LinkedIn.',
    siteName: 'LinkedIn Media',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Media — LinkedIn Personal Branding Agency',
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
      className={`${syne.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '929887579636866');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Noise overlay — premium grain texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

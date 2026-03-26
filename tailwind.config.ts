import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds
        navy: {
          DEFAULT: '#0A1628',
          secondary: '#0F2039',
          card: '#131F33',
        },
        // LinkedIn blues
        linkedin: {
          DEFAULT: '#0077B5',
          electric: '#0A66C2',
          sky: '#38B6FF',
        },
        // Accent
        teal: '#00D4AA',
        // Text
        textDark: '#E8ECF1',
        textMid: '#8899AA',
        textMuted: '#5A6B7D',
        // Light section text
        navyText: '#0A1628',
        navyMid: '#3A4A5C',
        // Misc
        offwhite: '#F3F6F9',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0077B5 0%, #38B6FF 50%, #00D4AA 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00D4AA 0%, #38B6FF 50%, #0077B5 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0A1628 0%, #0F2039 100%)',
        'gradient-card': 'linear-gradient(135deg, #0F2039 0%, #131F33 100%)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scroll-line': 'scrollLine 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config

import Navigation from '@/components/Navigation'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from '@/components/Hero'
import MarqueeStrip from '@/components/MarqueeStrip'
import WhyLinkedIn from '@/components/WhyLinkedIn'
import Services from '@/components/Services'
import KeyStrategy from '@/components/KeyStrategy'
import StatsBand from '@/components/StatsBand'
import FounderProof from '@/components/FounderProof'
import TeamProof from '@/components/TeamProof'
import CaseStudies from '@/components/CaseStudies'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import MagneticCursor from '@/components/ui/MagneticCursor'

export default function Home() {
  return (
    <>
      <MagneticCursor />
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhyLinkedIn />
        <Services />
        <KeyStrategy />
        <StatsBand />
        <FounderProof />
        <TeamProof />
        <CaseStudies />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from '@/components/layout/CustomCursor'
import LoadingScreen from '@/components/layout/LoadingScreen'
import FloatingFABs from '@/components/layout/FloatingFABs'
import SectionGate from '@/components/ui/SectionGate'
import PlanetDivider from '@/components/ui/PlanetDivider'
import HeroSection from '@/components/sections/HeroSection'
import InvitationSection from '@/components/sections/InvitationSection'
import CoupleStory from '@/components/sections/CoupleStory'
import GallerySection from '@/components/sections/GallerySection'
import EventsSection from '@/components/sections/EventsSection'
import CountdownSection from '@/components/sections/CountdownSection'
import VenueSection from '@/components/sections/VenueSection'
import RSVPSection from '@/components/sections/RSVPSection'
import FooterSection from '@/components/sections/FooterSection'
import { WeddingDataProvider } from '@/context/WeddingDataContext'

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <WeddingDataProvider>
      <CustomCursor />
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loading" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <>
          <FloatingFABs />
          <div className="relative" style={{ overflowX: 'clip' }}>
            <main>
              <SectionGate name="hero"><HeroSection /></SectionGate>
              <PlanetDivider />
              <SectionGate name="invitation"><InvitationSection /></SectionGate>
              <PlanetDivider />
              <SectionGate name="coupleStory"><CoupleStory /></SectionGate>
              <PlanetDivider />
              <SectionGate name="gallery"><GallerySection /></SectionGate>
              <PlanetDivider />
              <SectionGate name="events"><EventsSection /></SectionGate>
              <PlanetDivider />
              <SectionGate name="countdown"><CountdownSection /></SectionGate>
              <PlanetDivider />
              <SectionGate name="venue"><VenueSection /></SectionGate>
              <PlanetDivider />
              <SectionGate name="rsvp"><RSVPSection /></SectionGate>
              <PlanetDivider />
              <SectionGate name="footer"><FooterSection /></SectionGate>
            </main>
          </div>
        </>
      )}
    </WeddingDataProvider>
  )
}

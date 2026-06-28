'use client'
import { motion } from 'framer-motion'
import { formatShortDate } from '@/lib/utils'
import { useWeddingData } from '@/context/WeddingDataContext'
import StarDivider from '@/components/ui/StarDivider'
import CelestialBg from '@/components/ui/CelestialBg'
import SectionMoon from '@/components/ui/SectionMoon'

export default function FooterSection() {
  const weddingData = useWeddingData()
  return (
    <footer id="footer" className="py-20 px-6 text-center relative overflow-hidden" style={{ background: 'var(--color-surface2)' }}>
      <CelestialBg />
      <SectionMoon side="left" />
      <div className="max-w-2xl mx-auto relative z-10">
        <StarDivider className="mb-10" />

        <p className="shimmer-text font-display mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          {weddingData.brideName} &amp; {weddingData.groomName}
        </p>
        <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
          {formatShortDate(weddingData.weddingDate)}
        </p>

        <p className="font-serif italic text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
          {weddingData.tagline}
        </p>

        <p className="font-sans text-xs tracking-widest" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>
          {weddingData.hashtag}
        </p>

        <StarDivider className="mt-10" />

        <p className="font-sans text-xs mt-8" style={{ color: '#b0a8d0', opacity: 0.6 }}>
          Made with love · Written in the Stars
        </p>
      </div>
    </footer>
  )
}

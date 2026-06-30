'use client'
import { useWeddingData } from '@/context/WeddingDataContext'
import { formatShortDate } from '@/lib/utils'
import CelestialBg from '@/components/ui/CelestialBg'
import StarDivider from '@/components/ui/StarDivider'
import CelestialCorner from '@/components/ui/CelestialCorner'

export default function VenueSection() {
  const weddingData = useWeddingData()
  return (
    <section id="venue" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface2)' }}>
      <CelestialBg />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Under These Stars &nbsp; ✦
          </p>
          <h2 className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Venue
          </h2>
          <StarDivider className="mt-6" />
        </div>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 40px rgba(160,128,200,0.08), 0 20px 50px rgba(0,0,0,0.4)' }}
        >
          <CelestialCorner size={56} className="absolute top-0 left-0 z-10" />
          <CelestialCorner size={56} flip={{ x: true }} className="absolute top-0 right-0 z-10" />
          <CelestialCorner size={56} flip={{ y: true }} className="absolute bottom-0 left-0 z-10" />
          <CelestialCorner size={56} flip={{ x: true, y: true }} className="absolute bottom-0 right-0 z-10" />

          <div className="py-14 px-8 text-center" style={{ background: 'linear-gradient(135deg, var(--color-surface2), var(--color-surface))' }}>
            <div className="text-5xl mb-4">🏛️</div>
            <h3 className="font-display text-3xl glow-text mb-3" style={{ color: 'var(--color-accent)' }}>{weddingData.venue.name}</h3>
            <p className="font-sans text-sm mb-2" style={{ color: 'var(--color-muted)' }}>{weddingData.venue.address}</p>
            <p className="font-sans text-xs tracking-[0.3em] uppercase mb-8" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
              {formatShortDate(weddingData.weddingDate)} · {weddingData.weddingDate.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true })}
            </p>

            <a
              href={weddingData.venue.mapUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-sans text-sm font-semibold tracking-wider uppercase hover:scale-105 transition-transform"
              style={{ background: 'var(--color-accent)', color: '#050412', boxShadow: '0 0 24px rgba(212,192,144,0.4)' }}
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

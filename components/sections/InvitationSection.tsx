'use client'
import { useWeddingData } from '@/context/WeddingDataContext'
import { formatShortDate } from '@/lib/utils'
import StarDivider from '@/components/ui/StarDivider'
import CelestialBg from '@/components/ui/CelestialBg'
import CelestialCorner from '@/components/ui/CelestialCorner'

export default function InvitationSection() {
  const weddingData = useWeddingData()
  return (
    <section id="invitation" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <CelestialBg />
      <div className="max-w-3xl mx-auto relative z-10">
        <div
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            {weddingData.invitationSubtitle || '✦   Written in the Stars   ✦'}
          </p>
          <h2 className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {weddingData.invitationHeading || 'The Invitation'}
          </h2>
          <StarDivider className="mt-6" />
        </div>

        <div
          data-cursor-glow
          className="relative rounded-2xl overflow-hidden"
          style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 60px rgba(160,128,200,0.08), 0 20px 60px rgba(0,0,0,0.5)' }}
        >
          <CelestialCorner size={64} className="absolute top-0 left-0 z-10" />
          <CelestialCorner size={64} flip={{ x: true }} className="absolute top-0 right-0 z-10" />
          <CelestialCorner size={64} flip={{ y: true }} className="absolute bottom-0 left-0 z-10" />
          <CelestialCorner size={64} flip={{ x: true, y: true }} className="absolute bottom-0 right-0 z-10" />

          <div className="absolute inset-4 rounded-xl pointer-events-none" style={{ border: '0.5px solid rgba(160,128,200,0.12)' }} />

          <div className="py-12 px-8 text-center" style={{ background: 'linear-gradient(135deg, var(--color-surface2), var(--color-surface))' }}>
            <div className="flex flex-col items-center mb-4">
              <img src="/assets/man4.webp" alt="" loading="lazy" className="w-16 h-16 mx-auto star-glow" style={{ filter: 'drop-shadow(0 0 15px rgba(212,192,144,0.8)) drop-shadow(0 0 30px rgba(212,192,144,0.5)) drop-shadow(0 0 60px rgba(160,128,200,0.4))' }} />
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase mt-2" style={{ color: 'var(--color-muted)' }}>
                {weddingData.invitationBlessing || 'Destined by the stars'}
              </p>
            </div>

            <svg viewBox="0 0 280 12" width="280" className="mx-auto mb-6" aria-hidden>
              <line x1="0" y1="6" x2="120" y2="6" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
              <circle cx="130" cy="6" r="1.5" fill="var(--color-accent)" opacity="0.5" />
              <circle cx="140" cy="6" r="2" fill="var(--color-accent2)" opacity="0.4" />
              <circle cx="150" cy="6" r="1.5" fill="var(--color-accent)" opacity="0.5" />
              <line x1="160" y1="6" x2="280" y2="6" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
            </svg>

            <h3 className="shimmer-text font-display" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.7rem)', lineHeight: 1.2, padding: '0.1em 0' }}>
              {weddingData.groomName}
            </h3>
            {weddingData.groomParents && (
              <p className="font-sans text-xs tracking-wide mt-1 mb-2" style={{ color: 'var(--color-muted)', opacity: 0.7 }}>
                Son of {weddingData.groomParents}
              </p>
            )}
            <p className="font-serif italic text-xl mt-2 mb-2" style={{ color: 'var(--color-accent)', opacity: 0.65 }}>&amp;</p>
            <h3 className="shimmer-text font-display" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.7rem)', lineHeight: 1.2, padding: '0.1em 0' }}>
              {weddingData.brideName}
            </h3>
            {weddingData.brideParents && (
              <p className="font-sans text-xs tracking-wide mt-1" style={{ color: 'var(--color-muted)', opacity: 0.7 }}>
                Daughter of {weddingData.brideParents}
              </p>
            )}

            <svg viewBox="0 0 280 12" width="280" className="mx-auto mt-6 mb-1" aria-hidden>
              <line x1="0" y1="6" x2="120" y2="6" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
              <circle cx="130" cy="6" r="1.5" fill="var(--color-accent)" opacity="0.5" />
              <circle cx="140" cy="6" r="2" fill="var(--color-accent2)" opacity="0.4" />
              <circle cx="150" cy="6" r="1.5" fill="var(--color-accent)" opacity="0.5" />
              <line x1="160" y1="6" x2="280" y2="6" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
            </svg>
          </div>

          <div className="px-10 py-10 text-center">
            <p className="font-serif text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {weddingData.invitationText}
            </p>
            <StarDivider className="my-8" />
            <p className="font-sans text-sm tracking-widest uppercase" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
              {formatShortDate(weddingData.weddingDate)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

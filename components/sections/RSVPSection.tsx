'use client'
import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { useWeddingData, useIsPreview } from '@/context/WeddingDataContext'
import StarDivider from '@/components/ui/StarDivider'
import StarField from '@/components/ui/StarField'
import CelestialCorner from '@/components/ui/CelestialCorner'
import RSVPModal from '@/components/ui/RSVPModal'
import PartyConfetti from '@/components/ui/PartyConfetti'

export default function RSVPSection() {
  const weddingData = useWeddingData()
  const isPreview = useIsPreview()
  const [modalOpen, setModalOpen] = useState(false)
  const [responded, setResponded] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showPurchaseAlert, setShowPurchaseAlert] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('rsvp-responded') === 'true') setResponded(true)
  }, [])

  const handleSend = (guestCount: number, fullMessage: string) => {
    const whatsapp = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`
    window.open(whatsapp, '_blank')
    setModalOpen(false)
    setResponded(true)
    setShowConfetti(true)
    localStorage.setItem('rsvp-responded', 'true')
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <section id="rsvp" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <StarField />
      {/* Background star glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute w-64 h-64 rounded-full blur-[120px]"
          style={{ background: 'rgba(160,128,200,0.06)', left: '-5%', top: '30%' }} />
        <div className="absolute w-48 h-48 rounded-full blur-[100px]"
          style={{ background: 'rgba(212,192,144,0.05)', right: '-3%', top: '40%' }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Your Presence &nbsp; ✦
          </p>
          <h2 className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {weddingData.rsvpHeading || 'RSVP'}
          </h2>
          <StarDivider className="mt-6" />
        </div>

        <div
          className="relative rounded-2xl p-10 text-center"
          style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 40px rgba(160,128,200,0.08), 0 20px 50px rgba(0,0,0,0.4)' }}
        >
          <CelestialCorner size={52} className="absolute top-0 left-0" />
          <CelestialCorner size={52} flip={{ x: true }} className="absolute top-0 right-0" />
          <CelestialCorner size={52} flip={{ y: true }} className="absolute bottom-0 left-0" />
          <CelestialCorner size={52} flip={{ x: true, y: true }} className="absolute bottom-0 right-0" />

          {showConfetti && <PartyConfetti />}

          {responded ? (
            <>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display shimmer-text mb-3" style={{ fontSize: '2rem', lineHeight: 1.4, padding: '0.1em 0' }}>
                Thank You!
              </h3>
              <p className="font-serif text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                Your RSVP has been sent. We can&apos;t wait to celebrate with you!
              </p>
            </>
          ) : (
            <>
              <p className="font-serif text-base leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>
                {weddingData.rsvpText || 'We joyfully request the honour of your presence at our wedding celebration.'}
              </p>
              <p className="font-sans text-sm mb-8" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                Please RSVP by {weddingData.rsvpDeadline || weddingData.rsvp.deadline}
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => isPreview ? setShowPurchaseAlert(true) : setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wider hover:scale-105 transition-transform"
                  style={{ background: 'var(--color-accent)', color: '#050412', boxShadow: '0 0 24px rgba(212,192,144,0.4)' }}
                >
                  <MessageCircle size={16} /> RSVP via WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <RSVPModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSend={handleSend}
        defaultMessage={weddingData.rsvp.message}
        brideName={weddingData.brideName}
        groomName={weddingData.groomName}
      />

      {showPurchaseAlert && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} onClick={() => setShowPurchaseAlert(false)}>
          <div className="rounded-2xl p-8 max-w-sm w-full text-center" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }} onClick={e => e.stopPropagation()}>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-display text-xl mb-3" style={{ color: 'var(--color-text)' }}>Purchase Required</h3>
            <p className="font-sans text-sm mb-6" style={{ color: 'var(--color-muted)' }}>You need to purchase this card to send RSVPs.</p>
            <button onClick={() => setShowPurchaseAlert(false)} className="px-6 py-2.5 rounded-full font-sans text-sm font-semibold" style={{ background: 'var(--color-accent)', color: '#080f1a' }}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

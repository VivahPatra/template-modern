'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import StarDivider from '@/components/ui/StarDivider'
import StarField from '@/components/ui/StarField'
import CelestialCorner from '@/components/ui/CelestialCorner'

export default function RSVPSection() {
  const weddingData = useWeddingData()
  const whatsapp = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(weddingData.rsvp.message)}`

  return (
    <section id="rsvp" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <StarField />
      {/* Background star glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute w-64 h-64 rounded-full blur-[120px] float-slow"
          style={{ background: 'rgba(160,128,200,0.06)', left: '-5%', top: '30%' }} />
        <div className="absolute w-48 h-48 rounded-full blur-[100px] float-med"
          style={{ background: 'rgba(212,192,144,0.05)', right: '-3%', top: '40%' }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Your Presence &nbsp; ✦
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {weddingData.rsvpHeading || 'RSVP'}
          </motion.h2>
          <StarDivider className="mt-6" />
        </motion.div>

        <motion.div
          variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl p-10 text-center"
          style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 40px rgba(160,128,200,0.08), 0 20px 50px rgba(0,0,0,0.4)' }}
        >
          <CelestialCorner size={52} className="absolute top-0 left-0" />
          <CelestialCorner size={52} flip={{ x: true }} className="absolute top-0 right-0" />
          <CelestialCorner size={52} flip={{ y: true }} className="absolute bottom-0 left-0" />
          <CelestialCorner size={52} flip={{ x: true, y: true }} className="absolute bottom-0 right-0" />

          <p className="font-serif text-base leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>
            {weddingData.rsvpText || 'We joyfully request the honour of your presence at our wedding celebration.'}
          </p>
          <p className="font-sans text-sm mb-8" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            Please RSVP by {weddingData.rsvpDeadline || weddingData.rsvp.deadline}
          </p>

          <div className="flex justify-center">
            <motion.a
              href={whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wider"
              style={{ background: 'var(--color-accent)', color: '#050412', boxShadow: '0 0 24px rgba(212,192,144,0.4)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,192,144,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={16} /> RSVP via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

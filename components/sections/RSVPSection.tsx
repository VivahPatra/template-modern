'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'
import PichwaiCorner from '@/components/ui/PichwaiCorner'
import AnimatedLotus from '@/components/ui/AnimatedLotus'

export default function RSVPSection() {
  const weddingData = useWeddingData()
  const whatsapp = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(weddingData.rsvp.message)}`

  return (
    <section id="rsvp" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      {/* Background lotus decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-12">
          <AnimatedLotus size={180} delay={0.3} bloom={false} />
        </div>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-12">
          <AnimatedLotus size={160} delay={0.6} bloom={false} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Your Presence &nbsp; ✦
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {weddingData.rsvpHeading || 'RSVP'}
          </motion.h2>
          <LotusDivider className="mt-6" />
        </motion.div>

        <motion.div
          variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl p-10 text-center"
          style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 40px rgba(200,146,42,0.1), 0 20px 50px rgba(0,0,0,0.4)' }}
        >
          <PichwaiCorner size={52} className="absolute top-0 left-0" />
          <PichwaiCorner size={52} flip={{ x: true }} className="absolute top-0 right-0" />
          <PichwaiCorner size={52} flip={{ y: true }} className="absolute bottom-0 left-0" />
          <PichwaiCorner size={52} flip={{ x: true, y: true }} className="absolute bottom-0 right-0" />

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
              style={{ background: 'var(--color-accent)', color: '#080f1a', boxShadow: '0 0 24px rgba(200,146,42,0.4)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(200,146,42,0.6)' }}
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

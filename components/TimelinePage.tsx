'use client'
import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { formatShortDate } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'
import SectionGate from '@/components/ui/SectionGate'

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl p-8 md:p-10 ${className}`} style={{
      background: 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
    }}>
      {children}
    </div>
  )
}

export default function TimelinePage() {
  const weddingData = useWeddingData()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const totalPanels = 7
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(totalPanels - 1) * 100}%`])

  const whatsapp = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(weddingData.rsvp.message)}`

  return (
    <div ref={containerRef} style={{ height: `${totalPanels * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full" style={{ x }}>

          {/* Panel 1: Hero */}
          <SectionGate name="hero">
          <div className="min-w-full h-full flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
            <div className="text-center px-6">
              <motion.p className="font-sans text-[10px] tracking-[0.6em] uppercase mb-8"
                style={{ color: 'var(--color-muted)' }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                The wedding of
              </motion.p>
              <motion.h1 className="font-display shimmer-text leading-[0.9]"
                style={{ fontSize: 'clamp(3rem, 12vw, 9rem)', letterSpacing: '-0.02em' }}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                {weddingData.groomName}
              </motion.h1>
              <div className="flex items-center justify-center gap-8 my-4">
                <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(192,160,96,0.4))' }} />
                <span className="font-sans text-xs" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>&</span>
                <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(192,160,96,0.4))' }} />
              </div>
              <motion.h1 className="font-display shimmer-text leading-[0.9]"
                style={{ fontSize: 'clamp(3rem, 12vw, 9rem)', letterSpacing: '-0.02em' }}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                {weddingData.brideName}
              </motion.h1>
              <p className="font-sans text-xs tracking-[0.3em] uppercase mt-10"
                style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
                {formatShortDate(weddingData.weddingDate)}
              </p>
              <div className="mt-12 flex items-center justify-center gap-2" style={{ opacity: 0.3 }}>
                <span className="font-sans text-[9px] tracking-[0.5em] uppercase" style={{ color: 'var(--color-muted)' }}>Scroll</span>
                <motion.div className="h-px w-10"
                  style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)' }}
                  animate={{ scaleX: [1, 0.4, 1], opacity: [0.5, 0.15, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />
              </div>
            </div>
          </div>
          </SectionGate>

          {/* Panel 2: Invitation */}
          <SectionGate name="invitation">
          <div className="min-w-full h-full flex items-center justify-center" style={{ background: 'var(--color-surface)' }}>
            <div className="max-w-lg mx-auto px-6">
              <GlassCard className="text-center">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>The Invitation</p>
                <h2 className="font-display text-3xl md:text-4xl shimmer-text mb-6">You Are Invited</h2>
                <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                  {weddingData.invitationText}
                </p>
                <div className="h-px w-full mb-6" style={{ background: 'rgba(192,160,96,0.15)' }} />
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="text-center">
                    <p className="shimmer-text font-display text-2xl">{weddingData.groomName}</p>
                    {weddingData.groomParents && <p className="font-sans text-[10px] mt-1" style={{ color: 'var(--color-muted)' }}>Son of {weddingData.groomParents}</p>}
                  </div>
                  <span style={{ color: 'var(--color-accent)', opacity: 0.4 }}>&</span>
                  <div className="text-center">
                    <p className="shimmer-text font-display text-2xl">{weddingData.brideName}</p>
                    {weddingData.brideParents && <p className="font-sans text-[10px] mt-1" style={{ color: 'var(--color-muted)' }}>Daughter of {weddingData.brideParents}</p>}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          </SectionGate>

          {/* Panel 3: Our Story */}
          <SectionGate name="coupleStory">
          <div className="min-w-full h-full flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
            <div className="max-w-2xl mx-auto px-6">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-6 text-center" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>Our Story</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {weddingData.coupleStory.map((item, i) => (
                  <GlassCard key={i}>
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>{item.date}</p>
                    <h3 className="font-display text-lg mt-1 mb-2" style={{ color: 'var(--color-text)' }}>{item.title}</h3>
                    <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{item.description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
          </SectionGate>

          {/* Panel 4: Events */}
          <SectionGate name="events">
          <div className="min-w-full h-full flex items-center justify-center" style={{ background: 'var(--color-surface)' }}>
            <div className="max-w-2xl mx-auto px-6">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-6 text-center" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>The Events</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {weddingData.events.map((ev) => (
                  <GlassCard key={ev.id} className="!p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{ev.emoji}</span>
                      <div>
                        <h4 className="font-display text-base" style={{ color: 'var(--color-text)' }}>{ev.name}</h4>
                        <p className="font-sans text-[10px] mt-0.5" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>{ev.date} · {ev.time}</p>
                        <p className="font-sans text-[10px] mt-1" style={{ color: 'var(--color-muted)' }}>{ev.venue}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
          </SectionGate>

          {/* Panel 5: Gallery */}
          <SectionGate name="gallery">
          <div className="min-w-full h-full flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
            <div className="max-w-xl mx-auto px-6">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-6 text-center" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>Gallery</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {weddingData.galleryImages.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-square" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" style={{ filter: 'brightness(0.8)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          </SectionGate>

          {/* Panel 6: RSVP */}
          <SectionGate name="rsvp">
          <div className="min-w-full h-full flex items-center justify-center" style={{ background: 'var(--color-surface)' }}>
            <div className="max-w-md mx-auto px-6">
              <GlassCard className="text-center">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>RSVP</p>
                <h2 className="font-display text-3xl shimmer-text mb-4">Will You Join Us?</h2>
                <p className="font-sans text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
                  Please respond by {weddingData.rsvp.deadline}
                </p>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wider transition-all hover:scale-105"
                  style={{ background: 'var(--color-accent)', color: '#0c0c0e', boxShadow: '0 0 24px rgba(192,160,96,0.3)' }}>
                  <MessageCircle size={16} /> RSVP via WhatsApp
                </a>
              </GlassCard>
            </div>
          </div>
          </SectionGate>

          {/* Panel 7: Footer */}
          <SectionGate name="footer">
          <div className="min-w-full h-full flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
            <div className="text-center px-6">
              <p className="shimmer-text font-display mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                {weddingData.groomName} & {weddingData.brideName}
              </p>
              <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>
                {formatShortDate(weddingData.weddingDate)}
              </p>
              <p className="font-serif italic text-sm" style={{ color: 'var(--color-muted)' }}>{weddingData.tagline}</p>
              <p className="font-sans text-xs mt-8" style={{ color: 'var(--color-muted)', opacity: 0.3 }}>{weddingData.hashtag}</p>
            </div>
          </div>
          </SectionGate>

        </motion.div>

        {/* Progress bar at bottom */}
        <motion.div className="absolute bottom-0 left-0 h-[2px]"
          style={{
            width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            background: 'var(--color-accent)',
            boxShadow: '0 0 10px rgba(192,160,96,0.5)',
          }} />

        {/* Panel indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalPanels }).map((_, i) => (
            <motion.div key={i} className="w-1.5 h-1.5 rounded-full"
              style={{
                background: useTransform(
                  scrollYProgress,
                  [i / totalPanels, (i + 0.5) / totalPanels, (i + 1) / totalPanels],
                  ['rgba(192,160,96,0.2)', 'rgba(192,160,96,1)', 'rgba(192,160,96,0.2)']
                ),
              }} />
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { weddingData } from '@/data/wedding-data'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { formatShortDate } from '@/lib/utils'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Dark city gradient */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #0a0a0c 0%, #0c0c0e 30%, #141418 60%, #1a1a20 80%, #0c0c0e 100%)',
        }} />
      </motion.div>

      {/* City lights bokeh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50%       { opacity: 0.8; }
          }
        `}</style>
        {[
          { x: '8%', y: '75%', size: 3, dur: 2.5, delay: 0 },
          { x: '15%', y: '80%', size: 2, dur: 3.0, delay: 0.5 },
          { x: '22%', y: '72%', size: 4, dur: 2.2, delay: 1.0 },
          { x: '35%', y: '78%', size: 2, dur: 2.8, delay: 0.3 },
          { x: '45%', y: '82%', size: 3, dur: 3.2, delay: 0.8 },
          { x: '55%', y: '70%', size: 2, dur: 2.4, delay: 1.2 },
          { x: '65%', y: '76%', size: 3, dur: 2.9, delay: 0.6 },
          { x: '72%', y: '84%', size: 2, dur: 3.5, delay: 0.2 },
          { x: '80%', y: '74%', size: 4, dur: 2.6, delay: 0.9 },
          { x: '88%', y: '80%', size: 2, dur: 3.1, delay: 1.4 },
          { x: '92%', y: '68%', size: 3, dur: 2.3, delay: 0.4 },
          { x: '30%', y: '68%', size: 2, dur: 3.3, delay: 1.1 },
          { x: '50%', y: '65%', size: 3, dur: 2.7, delay: 0.7 },
          { x: '78%', y: '66%', size: 2, dur: 3.0, delay: 1.3 },
        ].map((dot, i) => (
          <div key={i} className="absolute rounded-full" style={{
            left: dot.x, top: dot.y,
            width: dot.size, height: dot.size,
            background: i % 3 === 0 ? '#c0a060' : i % 3 === 1 ? '#3a8fd4' : '#e85050',
            boxShadow: `0 0 ${dot.size * 3}px ${i % 3 === 0 ? 'rgba(192,160,96,0.5)' : i % 3 === 1 ? 'rgba(58,143,212,0.5)' : 'rgba(232,80,80,0.5)'}`,
            animation: `twinkle ${dot.dur}s ease-in-out ${dot.delay}s infinite`,
          }} />
        ))}
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute w-80 h-80 rounded-full blur-[140px] float-slow"
          style={{ background: 'rgba(192,160,96,0.06)', top: '10%', left: '10%' }} />
        <div className="absolute w-72 h-72 rounded-full blur-[120px] float-med"
          style={{ background: 'rgba(58,143,212,0.05)', bottom: '20%', right: '10%' }} />
      </div>

      {/* Geometric border */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none z-20" aria-hidden>
        <div className="absolute inset-0" style={{ border: '1px solid rgba(192,160,96,0.2)' }} />
        <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: '2px solid var(--color-accent)', borderLeft: '2px solid var(--color-accent)' }} />
        <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: '2px solid var(--color-accent)', borderRight: '2px solid var(--color-accent)' }} />
        <div className="absolute bottom-0 left-0 w-8 h-8" style={{ borderBottom: '2px solid var(--color-accent)', borderLeft: '2px solid var(--color-accent)' }} />
        <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: '2px solid var(--color-accent)', borderRight: '2px solid var(--color-accent)' }} />
      </div>

      {/* Text */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: textY, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp}
          className="font-sans text-[10px] tracking-[0.5em] uppercase mb-6"
          style={{ color: 'var(--color-muted)' }}>
          You are invited to the wedding of
        </motion.p>

        <motion.div variants={fadeUp} className="mb-4">
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2.8rem, 10vw, 7rem)', letterSpacing: '0.04em' }}>
            {weddingData.groomName}
          </h1>
          <div className="flex items-center justify-center gap-6 my-3">
            <div className="h-px w-16 md:w-28" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent))' }} />
            <span className="font-sans text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--color-accent)' }}>&amp;</span>
            <div className="h-px w-16 md:w-28" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent))' }} />
          </div>
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2.8rem, 10vw, 7rem)', letterSpacing: '0.04em' }}>
            {weddingData.brideName}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4 mt-8">
          <div className="h-px w-8" style={{ background: 'var(--color-accent)', opacity: 0.4 }} />
          <span className="font-sans text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
            {formatShortDate(weddingData.weddingDate)}
          </span>
          <div className="h-px w-8" style={{ background: 'var(--color-accent)', opacity: 0.4 }} />
        </motion.div>

        <motion.p variants={fadeUp}
          className="font-sans text-sm tracking-[0.15em] uppercase"
          style={{ color: 'var(--color-muted)', opacity: 0.6 }}>
          {weddingData.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-16 flex flex-col items-center gap-2" style={{ opacity: 0.3 }}>
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase" style={{ color: 'var(--color-accent)' }}>Scroll</span>
          <motion.div className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

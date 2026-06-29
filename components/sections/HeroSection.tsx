'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { formatShortDate } from '@/lib/utils'

const STARS = [
  { x: '5%', y: '8%', size: 2, dur: 3.2, delay: 0 },
  { x: '12%', y: '15%', size: 1.5, dur: 4.1, delay: 0.8 },
  { x: '20%', y: '5%', size: 2.5, dur: 2.8, delay: 0.3 },
  { x: '28%', y: '22%', size: 1, dur: 3.6, delay: 1.2 },
  { x: '35%', y: '12%', size: 3, dur: 2.5, delay: 0.6 },
  { x: '42%', y: '25%', size: 1.5, dur: 4.5, delay: 0.1 },
  { x: '55%', y: '8%', size: 2, dur: 3.0, delay: 0.9 },
  { x: '62%', y: '18%', size: 1, dur: 3.8, delay: 1.5 },
  { x: '70%', y: '6%', size: 2.5, dur: 2.6, delay: 0.4 },
  { x: '78%', y: '20%', size: 1.5, dur: 4.2, delay: 0.7 },
  { x: '85%', y: '10%', size: 2, dur: 3.4, delay: 1.0 },
  { x: '92%', y: '16%', size: 1, dur: 3.9, delay: 0.2 },
  { x: '8%', y: '45%', size: 1.5, dur: 4.0, delay: 1.3 },
  { x: '18%', y: '55%', size: 2, dur: 2.9, delay: 0.5 },
  { x: '88%', y: '50%', size: 1.5, dur: 3.7, delay: 1.1 },
  { x: '75%', y: '60%', size: 2, dur: 3.3, delay: 0.8 },
  { x: '10%', y: '75%', size: 1, dur: 4.3, delay: 0.6 },
  { x: '25%', y: '82%', size: 2.5, dur: 2.7, delay: 1.4 },
  { x: '50%', y: '88%', size: 1.5, dur: 3.5, delay: 0.3 },
  { x: '80%', y: '78%', size: 2, dur: 3.1, delay: 0.9 },
  { x: '93%', y: '85%', size: 1, dur: 4.4, delay: 0.2 },
  { x: '40%', y: '72%', size: 1.5, dur: 3.6, delay: 1.0 },
  { x: '65%', y: '80%', size: 2, dur: 2.8, delay: 0.7 },
  { x: '15%', y: '35%', size: 1, dur: 4.1, delay: 1.2 },
]

const CONSTELLATIONS = [
  { points: [{ x: 20, y: 12 }, { x: 24, y: 18 }, { x: 30, y: 15 }, { x: 35, y: 20 }] },
  { points: [{ x: 65, y: 8 }, { x: 70, y: 14 }, { x: 68, y: 22 }, { x: 74, y: 18 }] },
  { points: [{ x: 82, y: 70 }, { x: 86, y: 75 }, { x: 90, y: 72 }] },
]

export default function HeroSection() {
  const weddingData = useWeddingData()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const mountain1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const mountain2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  // Moon semi-circle arc: starts right-center, arcs up to top-center
  const moonX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ['90%', '75%', '55%', '45%'])
  const moonArcY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ['60%', '20%', '5%', '0%'])
  const moonScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1.0, 0.8, 0.6, 0.5])
  const moonOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 1, 1])
  const moonGlow = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.6, 1])
  const bgBrightness = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.5, 0.75, 1])
  const bgBrightnessFilter = useTransform(bgBrightness, v => `brightness(${v})`)


  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY, filter: bgBrightnessFilter }}>
        <img src="/assets/background.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-75" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(5,4,18,0.3) 0%, rgba(5,4,18,0.1) 40%, rgba(5,4,18,0.4) 100%)',
        }} />
      </motion.div>

      {/* Cloud/constellation layer */}
      <motion.img src="/assets/layer3.webp" alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[2]"
        style={{ filter: 'drop-shadow(0 -15px 40px rgba(160,128,200,0.5)) drop-shadow(0 -8px 20px rgba(212,192,144,0.3)) drop-shadow(0 -25px 60px rgba(100,70,180,0.4))' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />

      {/* Meteor shower */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]" aria-hidden>
        <style>{`
          @keyframes meteor {
            0%   { transform: translate(0, 0) rotate(-45deg); opacity: 0; }
            5%   { opacity: 1; }
            50%  { opacity: 0; }
            100% { transform: translate(-40vw, 40vh) rotate(-45deg); opacity: 0; }
          }
          @keyframes starBlink {
            0%, 100% { opacity: 0.15; transform: scale(0.8); }
            30%      { opacity: 1; transform: scale(1.4); }
            50%      { opacity: 0.6; transform: scale(1); }
            80%      { opacity: 0.9; transform: scale(1.2); }
          }
        `}</style>
        {[
          { x: '75%', y: '2%', dur: 1.8, delay: 1, len: 90 },
          { x: '85%', y: '5%', dur: 1.5, delay: 4.5, len: 110 },
          { x: '90%', y: '0%', dur: 2, delay: 8, len: 80 },
          { x: '70%', y: '8%', dur: 1.6, delay: 12, len: 100 },
          { x: '95%', y: '3%', dur: 1.4, delay: 16, len: 70 },
          { x: '80%', y: '6%', dur: 1.7, delay: 20, len: 95 },
        ].map((m, i) => (
          <div key={`meteor-${i}`} className="absolute" style={{
            left: m.x,
            top: m.y,
            width: m.len, height: 2,
            background: `linear-gradient(225deg, rgba(255,255,255,0) 0%, rgba(200,180,240,0.3) 30%, rgba(255,255,255,0.9) 85%, rgba(255,255,255,1) 100%)`,
            borderRadius: 2,
            boxShadow: '0 0 4px rgba(255,255,255,0.5), 0 0 10px rgba(200,180,240,0.3)',
            // @ts-ignore
            '--meteor-len': `${m.len}px`,
            animation: `meteor ${m.dur}s ease-out ${m.delay}s infinite`,
            opacity: 0,
          } as React.CSSProperties} />
        ))}
      </div>

      {/* Blinking stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {STARS.map((star, i) => (
          <div key={i} className="absolute rounded-full" style={{
            left: star.x, top: star.y,
            width: star.size, height: star.size,
            background: '#e8e0f0',
            boxShadow: `0 0 ${star.size * 4}px rgba(200,180,240,0.6), 0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
            animation: `starBlink ${star.dur}s ease-in-out ${star.delay}s infinite`,
          }} />
        ))}
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <linearGradient id="constLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(200,180,240,0)" />
            <stop offset="50%" stopColor="rgba(200,180,240,0.25)" />
            <stop offset="100%" stopColor="rgba(200,180,240,0)" />
          </linearGradient>
        </defs>
        {CONSTELLATIONS.map((c, ci) => (
          <g key={ci}>
            {c.points.map((p, pi) => {
              if (pi === 0) return null
              const prev = c.points[pi - 1]
              return (
                <line key={pi}
                  x1={`${prev.x}%`} y1={`${prev.y}%`}
                  x2={`${p.x}%`} y2={`${p.y}%`}
                  stroke="url(#constLine)" strokeWidth="0.5" opacity="0.4"
                />
              )
            })}
            {c.points.map((p, pi) => (
              <circle key={`dot-${pi}`}
                cx={`${p.x}%`} cy={`${p.y}%`} r="1.5"
                fill="rgba(200,180,240,0.6)"
              />
            ))}
          </g>
        ))}
      </svg>


      {/* Cloud sparkle layer */}
      <motion.img src="/assets/layer33.webp" alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[5]"
        style={{ filter: 'drop-shadow(0 -12px 35px rgba(160,128,200,0.4)) drop-shadow(0 -6px 18px rgba(212,192,144,0.25)) drop-shadow(0 -20px 50px rgba(100,70,180,0.35))' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />

      {/* Mountain silhouette layer */}
      <motion.img src="/assets/mountain2.webp" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[4]" style={{ y: mountain2Y }} />

      {/* Mountain with telescope */}
      <motion.img src="/assets/mountain.webp" alt="" className="absolute bottom-0 left-0 w-full pointer-events-none z-[6]" style={{ maxHeight: '60%', objectFit: 'cover', objectPosition: 'bottom', y: mountain1Y }} />

      {/* Bottom cloud border */}
      <motion.img src="/assets/layer2.webp" alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none z-[7]"
        style={{ filter: 'drop-shadow(0 -15px 40px rgba(160,128,200,0.5)) drop-shadow(0 -8px 20px rgba(212,192,144,0.3)) drop-shadow(0 -25px 60px rgba(100,70,180,0.4))' }}
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />

      {/* Left corner cloud */}
      <motion.img src="/assets/leftlayer1.webp" alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none z-[8]"
        style={{ filter: 'drop-shadow(0 -12px 35px rgba(160,128,200,0.5)) drop-shadow(0 -6px 18px rgba(212,192,144,0.3))' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
      />

      {/* Right corner cloud */}
      <motion.img src="/assets/rightlayer1.webp" alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none z-[8]"
        style={{ filter: 'drop-shadow(0 -12px 35px rgba(160,128,200,0.5)) drop-shadow(0 -6px 18px rgba(212,192,144,0.3))' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
      />

      {/* Moon rising in arc */}
      <motion.div
        className="absolute pointer-events-none z-[9]"
        style={{
          left: moonX,
          top: moonArcY,
          scale: moonScale,
          opacity: moonOpacity,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer moonlight wash */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(500px, 80vw, 1000px)',
            height: 'clamp(500px, 80vw, 1000px)',
            top: '50%', left: '50%',
            translateX: '-50%', translateY: '-50%',
            background: 'radial-gradient(circle, rgba(200,210,255,0.12) 0%, rgba(180,190,240,0.06) 25%, rgba(160,170,220,0.02) 50%, transparent 70%)',
            opacity: moonGlow,
          }}
        />
        {/* Inner moonlight glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(200px, 35vw, 400px)',
            height: 'clamp(200px, 35vw, 400px)',
            top: '50%', left: '50%',
            translateX: '-50%', translateY: '-50%',
            background: 'radial-gradient(circle, rgba(220,230,255,0.3) 0%, rgba(200,210,255,0.15) 30%, rgba(180,190,240,0.05) 60%, transparent 80%)',
            opacity: moonGlow,
          }}
        />
        {/* Moon image */}
        <img src="/assets/moon.webp" alt=""
          style={{
            width: 'clamp(80px, 15vw, 180px)',
            height: 'clamp(80px, 15vw, 180px)',
            filter: 'drop-shadow(0 0 20px rgba(220,230,255,0.9)) drop-shadow(0 0 40px rgba(200,210,255,0.7)) drop-shadow(0 0 80px rgba(180,190,240,0.5)) drop-shadow(0 0 140px rgba(160,170,220,0.3))',
          }}
        />
      </motion.div>

      {/* Subtle star border instead of geometric */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none z-20" aria-hidden>
        <div className="absolute inset-0" style={{ border: '1px solid rgba(160,130,200,0.12)' }} />
        <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)', opacity: 0.5 }} />
        <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)', opacity: 0.5 }} />
        <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)', opacity: 0.5 }} />
        <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)', opacity: 0.5 }} />
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
          style={{ color: '#c8c0e0', textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>
          {weddingData.heroSubtitle || 'You are invited to the wedding of'}
        </motion.p>

        <motion.div variants={fadeUp} className="mb-4">
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', letterSpacing: '0.04em', textShadow: '0 0 20px rgba(0,0,0,0.6)' }}>
            {weddingData.groomName}
          </h1>
          <div className="flex items-center justify-center gap-6 my-3">
            <div className="h-px w-16 md:w-28" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent))' }} />
            <span className="font-sans text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--color-accent)' }}>&amp;</span>
            <div className="h-px w-16 md:w-28" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent))' }} />
          </div>
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', letterSpacing: '0.04em', textShadow: '0 0 20px rgba(0,0,0,0.6)' }}>
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
          style={{ color: '#b0a8d0', textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>
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

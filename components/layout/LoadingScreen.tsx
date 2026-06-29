'use client'
import { motion } from 'framer-motion'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Celestial spinner */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">
        {/* Outer star ring CW */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 160 160" width="160" height="160" aria-hidden>
            <circle cx="80" cy="80" r="72" fill="none" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 8" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <circle key={i}
                cx={80 + Math.cos(deg * Math.PI / 180) * 68}
                cy={80 + Math.sin(deg * Math.PI / 180) * 68}
                r={i % 2 === 0 ? 2 : 1.5}
                fill={i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent2)'}
                opacity="0.6"
              />
            ))}
          </svg>
        </motion.div>

        {/* Inner ring CCW */}
        <motion.div
          className="absolute"
          style={{ width: 100, height: 100 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" width="100" height="100" aria-hidden>
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <circle key={i}
                cx={50 + Math.cos(deg * Math.PI / 180) * 38}
                cy={50 + Math.sin(deg * Math.PI / 180) * 38}
                r={1.5}
                fill="var(--color-accent3)"
                opacity="0.5"
              />
            ))}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const next = (i + 1) % 6
              const x1 = 50 + Math.cos(deg * Math.PI / 180) * 38
              const y1 = 50 + Math.sin(deg * Math.PI / 180) * 38
              const x2 = 50 + Math.cos(((next * 60)) * Math.PI / 180) * 38
              const y2 = 50 + Math.sin(((next * 60)) * Math.PI / 180) * 38
              return <line key={`l-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-accent2)" strokeWidth="0.3" opacity="0.25" />
            })}
          </svg>
        </motion.div>

        {/* Center crescent */}
        <motion.div
          className="relative z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 16px var(--color-glow-strong))' }}
        >
          <img src="/assets/moon.webp" alt="" style={{ width: 48, height: 48, filter: 'drop-shadow(0 0 15px rgba(220,230,255,0.8)) drop-shadow(0 0 30px rgba(200,210,255,0.5))' }} />
        </motion.div>
      </div>

      {/* Line draw animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={onComplete}
        className="h-px mb-6"
        style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }}
      />

      <motion.p
        className="font-display text-xl tracking-widest"
        style={{ color: 'var(--color-accent)', opacity: 0.7 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✦
      </motion.p>
    </motion.div>
  )
}

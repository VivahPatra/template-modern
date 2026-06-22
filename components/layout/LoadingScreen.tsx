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
      {/* Lotus mandala */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">
        {/* Outer ring CW */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 160 160" width="160" height="160" aria-hidden>
            <circle cx="80" cy="80" r="72" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.25" strokeDasharray="4 6" />
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <ellipse key={i} cx="80" cy="80" rx="4" ry="10"
                fill={i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent2)'}
                opacity="0.6"
                transform={`rotate(${deg} 80 80) translate(0,-62)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Middle ring CCW */}
        <motion.div
          className="absolute"
          style={{ width: 110, height: 110 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 110 110" width="110" height="110" aria-hidden>
            {[0,36,72,108,144,180,216,252,288,324].map((deg, i) => (
              <ellipse key={i} cx="55" cy="55" rx="3" ry="7"
                fill={i % 2 === 0 ? 'var(--color-accent3)' : 'var(--color-accent)'}
                opacity="0.5"
                transform={`rotate(${deg} 55 55) translate(0,-42)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Inner lotus */}
        <motion.div
          className="absolute"
          style={{ width: 64, height: 64 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden>
            {[0,60,120,180,240,300].map((deg, i) => (
              <ellipse key={i} cx="32" cy="32" rx="5" ry="12"
                fill="var(--color-accent)"
                opacity="0.4"
                transform={`rotate(${deg} 32 32) translate(0,-18)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Center lotus emoji */}
        <motion.div
          className="relative z-10 text-4xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 16px var(--color-glow-strong))' }}
        >
          <span style={{ fontSize: 48, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>✦</span>
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
        ◆
      </motion.p>
    </motion.div>
  )
}

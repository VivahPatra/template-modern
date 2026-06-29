'use client'
import { motion } from 'framer-motion'

export default function PlanetDivider() {
  return (
    <div className="relative flex items-center justify-center -my-10 z-10" aria-hidden>
      <motion.img
        src="/assets/moon.webp"
        alt=""
        style={{
          width: 80, height: 80,
          filter: 'drop-shadow(0 0 20px rgba(220,230,255,0.8)) drop-shadow(0 0 40px rgba(200,210,255,0.5)) drop-shadow(0 0 80px rgba(180,190,240,0.3))',
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      />
    </div>
  )
}

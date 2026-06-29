'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Props {
  side?: 'right' | 'left'
}

export default function SectionMoon({ side = 'right' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const startX = side === 'right' ? '85%' : '15%'
  const endX = side === 'right' ? '75%' : '25%'

  const moonX = useTransform(scrollYProgress, [0, 0.5, 1], [startX, endX, endX])
  const moonY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ['80%', '30%', '15%', '10%'])
  const moonOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0, 0.8, 1, 0.8, 0])
  const moonScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.7, 0.7])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.5, 1, 0.5, 0])

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute z-[1]"
        style={{
          left: moonX,
          top: moonY,
          scale: moonScale,
          opacity: moonOpacity,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400, height: 400,
            top: '50%', left: '50%',
            translateX: '-50%', translateY: '-50%',
            background: 'radial-gradient(circle, rgba(220,230,255,0.12) 0%, rgba(200,210,255,0.05) 35%, transparent 65%)',
            opacity: glowOpacity,
          }}
        />
        <img src="/assets/moon.webp" alt=""
          style={{
            width: 80, height: 80,
            filter: 'drop-shadow(0 0 15px rgba(220,230,255,0.8)) drop-shadow(0 0 30px rgba(200,210,255,0.5)) drop-shadow(0 0 60px rgba(180,190,240,0.3))',
          }}
        />
      </motion.div>
    </div>
  )
}

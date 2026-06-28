'use client'
import { motion } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '@/lib/animations'
import StarDivider from '@/components/ui/StarDivider'
import StarField from '@/components/ui/StarField'
import SectionMoon from '@/components/ui/SectionMoon'

export default function CoupleStory() {
  const weddingData = useWeddingData()
  return (
    <section id="story" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <StarField />
      <SectionMoon side="left" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Their Journey &nbsp; ✦
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Our <em>Story</em>
          </motion.h2>
          <StarDivider className="mt-6" />
        </motion.div>

        <div className="relative">
          {/* Vertical constellation line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent2), var(--color-accent), transparent)', opacity: 0.2 }} />

          <div className="space-y-16">
            {weddingData.coupleStory.map((milestone, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                  variants={isLeft ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    {milestone.image && (
                      <motion.div
                        data-cursor-glow
                        className="relative mb-5 rounded-xl overflow-hidden"
                        style={{ height: 220, border: '1px solid var(--color-border)' }}
                        whileHover={{ boxShadow: '0 0 40px rgba(160,128,200,0.2)' }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={milestone.image} alt={milestone.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.75) saturate(0.85)' }} />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, var(--color-surface) 100%)' }} />
                      </motion.div>
                    )}
                    <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-accent)', opacity: 0.65 }}>{milestone.date}</p>
                    <h3 className="font-display text-2xl mb-2 glow-text" style={{ color: 'var(--color-accent)' }}>{milestone.title}</h3>
                    <p className="font-serif text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{milestone.description}</p>
                  </div>

                  {/* Timeline star node */}
                  <div className={`hidden md:flex items-center justify-center ${isLeft ? 'order-2' : 'order-1'}`}>
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        className="absolute rounded-full"
                        style={{ width: 60, height: 60, border: '1px solid var(--color-accent2)', opacity: 0.2 }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
                      />
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: 'var(--color-surface2)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 20px rgba(160,128,200,0.1)' }}>
                        {milestone.icon}
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden flex items-center gap-3 -mt-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'var(--color-surface2)', border: '1px solid var(--color-border-strong)' }}>
                      {milestone.icon}
                    </div>
                    <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

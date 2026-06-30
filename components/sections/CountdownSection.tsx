'use client'
import { useEffect, useState } from 'react'
import { useWeddingData } from '@/context/WeddingDataContext'
import StarDivider from '@/components/ui/StarDivider'
import StarField from '@/components/ui/StarField'

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function CountdownSection() {
  const weddingData = useWeddingData()
  const [time, setTime] = useState(() => getTimeLeft(weddingData.weddingDate))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(weddingData.weddingDate)), 1000)
    return () => clearInterval(id)
  }, [weddingData.weddingDate])

  const units = [
    { label: 'Days',    value: time.days },
    { label: 'Hours',   value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section id="countdown" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <StarField />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Stars Align &nbsp; ✦
          </p>
          <h2 className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Until We Are One
          </h2>
          <StarDivider className="mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {units.map(({ label, value }) => (
            <div
              key={label}
              className="relative rounded-2xl overflow-hidden text-center py-8 px-4"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 24px var(--color-glow)' }}
            >
              {/* Gold glow corners */}
              <div className="absolute top-0 left-0 w-8 h-8 opacity-40" style={{ background: 'radial-gradient(circle at top left, var(--color-accent), transparent)' }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-40" style={{ background: 'radial-gradient(circle at bottom right, var(--color-accent), transparent)' }} />

              <p
                className="shimmer-text font-display"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}
              >
                {String(value).padStart(2, '0')}
              </p>
              <p className="font-sans text-xs tracking-widest uppercase mt-2" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        <p
          className="font-serif italic text-center mt-10 text-base opacity-50"
          style={{ color: 'var(--color-text)' }}
        >
          {weddingData.tagline}
        </p>
      </div>
    </section>
  )
}

'use client'
import { useState } from 'react'
import StarDivider from '@/components/ui/StarDivider'
import CelestialBg from '@/components/ui/CelestialBg'
import { useWeddingData } from '@/context/WeddingDataContext'
import type { WeddingEvent } from '@/types/wedding.types'

const FALLBACK_MAP: Record<string, string> = {
  engagement: 'engagement', cocktail: 'engagement', roka: 'engagement',
  mehendi: 'mehendi', henna: 'mehendi',
  sangeet: 'sangeet', music: 'sangeet',
  haldi: 'haldi',
  wedding: 'wedding', ceremony: 'wedding', muhurtham: 'wedding', nikah: 'wedding',
  reception: 'reception',
}

function localFallback(event: WeddingEvent): string {
  const key = `${event.id} ${event.name}`.toLowerCase()
  for (const [needle, file] of Object.entries(FALLBACK_MAP)) {
    if (key.includes(needle)) return `/assets/events/${file}.webp`
  }
  return '/assets/events/wedding.webp'
}

function EventNode({
  event,
  isHero = false,
  delay = 0,
}: {
  event: WeddingEvent
  isHero?: boolean
  delay?: number
}) {
  const [src, setSrc] = useState(event.image)
  const [triedFallback, setTriedFallback] = useState(false)
  const [imgError, setImgError] = useState(false)
  const color = event.color || 'var(--color-accent)'
  const circleSize = isHero ? 130 : 100
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(event.venue + ', ' + event.venueAddress)}`

  return (
    <article
      data-cursor-glow
      className="flex flex-col items-center group"
    >
      <div className="relative" style={{ width: circleSize, height: circleSize }}>
        {/* Base glow halo */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{ boxShadow: `0 0 20px 6px ${color}33` }}
        />
        {/* Hover glow intensifier */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ boxShadow: `0 0 60px 22px ${color}55` }}
        />

        {/* Dashed ring — spins on hover */}
        <div
          className="absolute rounded-full group-hover:[animation:spin_6s_linear_infinite]"
          style={{ inset: -3, border: `1.5px dashed ${color}`, opacity: 0.5 }}
        />

        {/* Solid border */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${color}`, opacity: 0.6 }}
        />

        {/* Image or emoji */}
        {src && !imgError ? (
          <img
            src={src}
            alt={event.name}
            className="absolute inset-0 object-contain"
            style={{ width: '100%', height: '100%', filter: 'brightness(1.2) saturate(1.1)' }}
            loading="lazy"
            onError={() => {
              if (!triedFallback) {
                setTriedFallback(true)
                setSrc(localFallback(event))
              } else {
                setImgError(true)
              }
            }}
          />
        ) : (
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${color}22 0%, ${color}08 100%)`,
              fontSize: isHero ? 44 : 34,
            }}
          >
            {event.emoji}
          </div>
        )}

      </div>

      {/* Name + date */}
      <div className="text-center mt-3">
        <p
          className="font-display tracking-wide glow-text"
          style={{ color: 'var(--color-text)', fontSize: isHero ? '1.25rem' : '1rem' }}
        >
          {event.name}
        </p>
        <p
          className="font-sans text-xs tracking-widest mt-0.5"
          style={{ color, opacity: 0.7 }}
        >
          {event.date.split(',')[0]} · {event.time}
        </p>
      </div>

      {/* Detail panel — always visible */}
      <div
        className="text-center mt-3 rounded-xl px-3 py-3"
        style={{
          maxWidth: 160,
          background: 'var(--color-surface)',
          border: `1px solid ${color}33`,
          boxShadow: `0 0 14px ${color}1a`,
        }}
      >
        <p className="font-serif text-sm" style={{ color: 'var(--color-text)', opacity: 0.85 }}>
          {event.venue}
        </p>
        <p className="font-sans text-xs mt-1" style={{ color: 'var(--color-muted)', opacity: 0.7 }}>
          {event.venueAddress.split(',')[0]}
        </p>
        {event.description && (
          <p className="font-serif text-xs italic mt-1.5" style={{ color: 'var(--color-muted)', opacity: 0.65 }}>
            {event.description}
          </p>
        )}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 px-4 py-2 rounded-full font-sans text-xs font-semibold whitespace-nowrap tracking-wider transition-all hover:opacity-90"
          style={{ background: 'var(--color-surface)', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          📍 Get Directions
        </a>
      </div>
    </article>
  )
}

export default function EventsSection() {
  const weddingData = useWeddingData()
  const events = weddingData.events.filter((e) => !e.hidden)
  const half = Math.ceil(events.length / 2)
  const row1 = events.slice(0, half)
  const row2 = events.slice(half)

  return (
    <section id="events" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface2)' }}>
      <CelestialBg />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-16"
        >
          <p
            className="font-sans text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--color-accent)', opacity: 0.7 }}
          >
            ✦ &nbsp; Celestial Celebrations &nbsp; ✦
          </p>
          <h2
            className="font-display shimmer-text"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Our <em>Events</em>
          </h2>
          <div>
            <StarDivider className="mt-6" />
          </div>
        </div>

        {/* Event grid */}
        <div className="relative">
          {/* Decorative connecting path */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 900 200">
              <path
                d="M 150 60 Q 450 140 750 60"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="0.8"
                opacity="0.18"
                strokeDasharray="4 6"
              />
            </svg>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 md:relative md:z-10">
            {row1.map((ev, i) => (
              <EventNode key={ev.id} event={ev} delay={i * 0.1} />
            ))}
          </div>

          {/* Row 2 — centered on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-10 md:gap-20 mt-8 md:mt-10 md:relative md:z-10">
            {row2.map((ev, i) => (
              <EventNode
                key={ev.id}
                event={ev}
                isHero={ev.id === 'wedding'}
                delay={0.15 + i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="flex justify-center mt-14" aria-hidden>
          <svg viewBox="0 0 600 24" width="400" height="24">
            <path d="M0,12 Q150,0 300,12 Q450,24 600,12" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.18"/>
            <path d="M0,16 Q150,4 300,16 Q450,28 600,16" fill="none" stroke="var(--color-accent)" strokeWidth="0.4" opacity="0.12"/>
            <circle cx="300" cy="12" r="3" fill="var(--color-accent)" opacity="0.35"/>
            <circle cx="150" cy="6" r="2" fill="var(--color-accent)" opacity="0.2"/>
            <circle cx="450" cy="18" r="2" fill="var(--color-accent)" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

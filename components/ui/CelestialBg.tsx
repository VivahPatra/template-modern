export default function CelestialBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <img src="/assets/background.webp" alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.25]" loading="lazy" />
    </div>
  )
}

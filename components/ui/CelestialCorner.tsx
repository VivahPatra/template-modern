interface Props {
  size?: number
  flip?: { x?: boolean; y?: boolean }
  className?: string
}

export default function CelestialCorner({ size = 80, flip, className = '' }: Props) {
  const scaleX = flip?.x ? -1 : 1
  const scaleY = flip?.y ? -1 : 1

  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      aria-hidden
      className={className}
      style={{ transform: `scale(${scaleX},${scaleY})` }}
    >
      {/* Constellation corner */}
      <path d="M4,76 Q4,4 76,4" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.3" />
      <path d="M4,62 Q18,18 62,4" fill="none" stroke="var(--color-accent2)" strokeWidth="0.4" opacity="0.2" />

      {/* Stars at intersections */}
      <circle cx="4" cy="76" r="2" fill="var(--color-accent)" opacity="0.5" />
      <circle cx="76" cy="4" r="2" fill="var(--color-accent)" opacity="0.5" />
      <circle cx="26" cy="26" r="1.5" fill="var(--color-accent3)" opacity="0.6" />
      <circle cx="14" cy="50" r="1" fill="var(--color-accent2)" opacity="0.4" />
      <circle cx="50" cy="14" r="1" fill="var(--color-accent2)" opacity="0.4" />

      {/* Connecting constellation lines */}
      <line x1="4" y1="76" x2="26" y2="26" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.2" />
      <line x1="26" y1="26" x2="76" y2="4" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.2" />
      <line x1="14" y1="50" x2="26" y2="26" stroke="var(--color-accent2)" strokeWidth="0.3" opacity="0.15" />
      <line x1="50" y1="14" x2="26" y2="26" stroke="var(--color-accent2)" strokeWidth="0.3" opacity="0.15" />
    </svg>
  )
}

interface Props {
  className?: string
}

export default function StarDivider({ className = '' }: Props) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <svg viewBox="0 0 120 8" width="120" height="8" aria-hidden>
        <line x1="0" y1="4" x2="105" y2="4" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.3" />
        <line x1="0" y1="6.5" x2="105" y2="6.5" stroke="var(--color-accent2)" strokeWidth="0.3" opacity="0.15" />
        <circle cx="110" cy="4" r="1.5" fill="var(--color-accent)" opacity="0.5" />
      </svg>

      <span style={{ fontSize: 12, color: 'var(--color-accent)', opacity: 0.7 }}>✦</span>

      <svg viewBox="0 0 120 8" width="120" height="8" aria-hidden>
        <circle cx="10" cy="4" r="1.5" fill="var(--color-accent)" opacity="0.5" />
        <line x1="15" y1="4" x2="120" y2="4" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.3" />
        <line x1="15" y1="6.5" x2="120" y2="6.5" stroke="var(--color-accent2)" strokeWidth="0.3" opacity="0.15" />
      </svg>
    </div>
  )
}

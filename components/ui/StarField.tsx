'use client'
import { motion } from 'framer-motion'

const STARS = [
  { x: '5%', y: '10%', s: 1.5, d: 3.5, dl: 0 },
  { x: '12%', y: '25%', s: 2, d: 4.2, dl: 0.6 },
  { x: '22%', y: '8%', s: 1, d: 3.0, dl: 1.1 },
  { x: '30%', y: '45%', s: 2, d: 3.8, dl: 0.3 },
  { x: '38%', y: '15%', s: 1.5, d: 4.5, dl: 0.9 },
  { x: '48%', y: '55%', s: 1, d: 3.2, dl: 1.4 },
  { x: '55%', y: '20%', s: 2.5, d: 2.8, dl: 0.5 },
  { x: '65%', y: '40%', s: 1, d: 4.0, dl: 1.0 },
  { x: '72%', y: '12%', s: 2, d: 3.6, dl: 0.2 },
  { x: '80%', y: '60%', s: 1.5, d: 3.3, dl: 0.8 },
  { x: '88%', y: '30%', s: 1, d: 4.3, dl: 1.3 },
  { x: '94%', y: '50%', s: 2, d: 3.1, dl: 0.4 },
  { x: '15%', y: '70%', s: 1.5, d: 3.9, dl: 0.7 },
  { x: '42%', y: '80%', s: 1, d: 4.1, dl: 1.2 },
  { x: '60%', y: '75%', s: 2, d: 2.9, dl: 0.1 },
  { x: '85%', y: '85%', s: 1.5, d: 3.7, dl: 0.6 },
  { x: '35%', y: '90%', s: 1, d: 4.4, dl: 1.0 },
  { x: '75%', y: '92%', s: 2, d: 3.4, dl: 0.3 },
]

const CONSTELLATIONS = [
  // Orion (top-left)
  { pts: [
    { x: 8, y: 10 }, { x: 12, y: 10 },   // shoulders
    { x: 10, y: 15 },                      // belt center
    { x: 9, y: 14 }, { x: 11, y: 14 },    // belt sides
    { x: 10, y: 15 },                      // back to center
    { x: 7, y: 22 }, { x: 10, y: 15 }, { x: 13, y: 22 }, // legs
  ]},
  // Ursa Major / Big Dipper (top-right)
  { pts: [
    { x: 72, y: 8 }, { x: 78, y: 6 }, { x: 82, y: 10 }, { x: 80, y: 16 }, // bowl
    { x: 72, y: 8 },                                                         // close bowl
    { x: 80, y: 16 }, { x: 85, y: 20 }, { x: 90, y: 18 },                  // handle
  ]},
  // Cassiopeia W (center-left)
  { pts: [
    { x: 5, y: 55 }, { x: 10, y: 48 }, { x: 15, y: 55 }, { x: 20, y: 48 }, { x: 25, y: 55 },
  ]},
  // Canis Major (bottom-right)
  { pts: [
    { x: 80, y: 65 }, { x: 85, y: 60 },  // head to Sirius
    { x: 85, y: 60 }, { x: 88, y: 68 },   // body
    { x: 88, y: 68 }, { x: 92, y: 75 },   // back leg
    { x: 88, y: 68 }, { x: 84, y: 76 },   // front leg
    { x: 85, y: 60 }, { x: 82, y: 55 },   // ear
  ]},
  // Crux / Southern Cross (bottom-center)
  { pts: [
    { x: 48, y: 78 }, { x: 48, y: 88 },   // vertical
    { x: 48, y: 83 },                       // center
    { x: 44, y: 83 }, { x: 48, y: 83 }, { x: 52, y: 83 }, // horizontal
  ]},
  // Scorpius (right side)
  { pts: [
    { x: 65, y: 35 }, { x: 68, y: 38 }, { x: 70, y: 42 }, { x: 69, y: 47 },
    { x: 67, y: 51 }, { x: 65, y: 55 }, { x: 62, y: 57 }, { x: 60, y: 55 }, // tail curl
  ]},
]

export default function StarField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <style>{`
        @keyframes fieldBlink {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          25%      { opacity: 1; transform: scale(1.4); }
          50%      { opacity: 0.4; transform: scale(1); }
          75%      { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes constStarBlink {
          0%, 100% { opacity: 0.3; r: 1.5px; }
          30%      { opacity: 1; r: 2.5px; }
          60%      { opacity: 0.5; r: 2px; }
        }
        @keyframes linePulse {
          0%, 100% { opacity: 0.15; }
          50%      { opacity: 0.4; }
        }
      `}</style>

      {STARS.map((star, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: star.x, top: star.y,
          width: star.s, height: star.s,
          background: '#e8e0f0',
          boxShadow: `0 0 ${star.s * 3}px rgba(200,180,240,0.5), 0 0 ${star.s * 1.5}px rgba(255,255,255,0.7)`,
          animation: `fieldBlink ${star.d}s ease-in-out ${star.dl}s infinite`,
        }} />
      ))}

      <svg className="absolute inset-0 w-full h-full">
        {CONSTELLATIONS.map((c, ci) => (
          <g key={ci}>
            {c.pts.map((p, pi) => {
              if (pi === 0) return null
              const prev = c.pts[pi - 1]
              return (
                <motion.line key={pi}
                  x1={`${prev.x}%`} y1={`${prev.y}%`}
                  x2={`${p.x}%`} y2={`${p.y}%`}
                  stroke="rgba(200,180,240,0.3)"
                  strokeWidth="0.5"
                  strokeDasharray="200"
                  initial={{ strokeDashoffset: 200, opacity: 0 }}
                  whileInView={{ strokeDashoffset: 0, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: ci * 0.4 + pi * 0.2, ease: 'easeOut' }}
                  style={{ animation: `linePulse ${3 + ci * 0.5}s ease-in-out ${ci * 0.4 + pi * 0.2 + 1.5}s infinite` }}
                />
              )
            })}
            {c.pts.map((p, pi) => (
              <circle key={`dot-${pi}`}
                cx={`${p.x}%`} cy={`${p.y}%`} r="2"
                fill="rgba(212,192,144,0.7)"
                style={{
                  animation: `constStarBlink ${2.5 + pi * 0.3}s ease-in-out ${ci * 0.3 + pi * 0.2}s infinite`,
                  filter: 'drop-shadow(0 0 3px rgba(212,192,144,0.5))',
                }}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}

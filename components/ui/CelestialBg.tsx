'use client'

export default function CelestialBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <img src="/assets/background.webp" alt="" loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.25]"
      />
      {/* Fade mask — meteors fade out toward bottom */}
      <div className="absolute inset-0 z-[1]" style={{
        maskImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 100%)',
      }}>

      <style>{`
        @keyframes sectionMeteor {
          0%   { transform: translate(0, 0) rotate(-45deg); opacity: 0; }
          5%   { opacity: 1; }
          50%  { opacity: 0; }
          100% { transform: translate(-40vw, 40vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes sectionMeteorUp {
          0%   { transform: translate(0, 0) rotate(135deg); opacity: 0; }
          5%   { opacity: 1; }
          50%  { opacity: 0; }
          100% { transform: translate(-40vw, -40vh) rotate(135deg); opacity: 0; }
        }
      `}</style>
      {[
        { x: '80%', y: '5%', dur: 2, delay: 2, len: 80 },
        { x: '90%', y: '3%', dur: 1.6, delay: 7, len: 100 },
        { x: '70%', y: '8%', dur: 1.8, delay: 13, len: 70 },
        { x: '85%', y: '2%', dur: 1.5, delay: 18, len: 90 },
      ].map((m, i) => (
        <div key={`sm-${i}`} className="absolute" style={{
          left: m.x,
          top: m.y,
          width: m.len, height: 1.5,
          background: 'linear-gradient(225deg, rgba(255,255,255,0) 0%, rgba(200,180,240,0.3) 30%, rgba(255,255,255,0.9) 85%, rgba(255,255,255,1) 100%)',
          borderRadius: 2,
          boxShadow: '0 0 4px rgba(255,255,255,0.5), 0 0 10px rgba(200,180,240,0.3)',
          animation: `sectionMeteor ${m.dur}s ease-out ${m.delay}s infinite`,
          opacity: 0,
        }} />
      ))}
      </div>

      {/* Bottom meteors — fade out toward top */}
      <div className="absolute inset-0 z-[1]" style={{
        maskImage: 'linear-gradient(to top, white 0%, white 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, white 0%, white 50%, transparent 100%)',
      }}>
      {[
        { x: '75%', y: '90%', dur: 2.2, delay: 5, len: 85 },
        { x: '88%', y: '85%', dur: 1.7, delay: 11, len: 95 },
        { x: '65%', y: '92%', dur: 1.9, delay: 16, len: 75 },
      ].map((m, i) => (
        <div key={`smu-${i}`} className="absolute" style={{
          left: m.x,
          top: m.y,
          width: m.len, height: 1.5,
          background: 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(200,180,240,0.3) 30%, rgba(255,255,255,0.9) 85%, rgba(255,255,255,1) 100%)',
          borderRadius: 2,
          boxShadow: '0 0 4px rgba(255,255,255,0.5), 0 0 10px rgba(200,180,240,0.3)',
          animation: `sectionMeteorUp ${m.dur}s ease-out ${m.delay}s infinite`,
          opacity: 0,
        }} />
      ))}
      </div>
    </div>
  )
}

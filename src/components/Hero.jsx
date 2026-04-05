import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import CowScene from './CowScene';
import LanguageToggle from './LanguageToggle';

// Pleasant sunny-day sky — clear blue at top, light horizon
const SKY_GRADIENT =
  'linear-gradient(180deg, #1976D2 0%, #2196F3 22%, #42A5F5 48%, #64B5F6 70%, #90CAF9 87%, #BBDEFB 100%)';

// Farm silhouette SVG — Indian cow-shed style, drawn as SVG so no external image needed.
// Positioned inset-0, preserveAspectRatio anchors the shed to the bottom of the hero.
// Earthy Indian cow-shed palette
const SHED = {
  roof:     'rgba(165, 72, 40, 0.72)',    // terracotta / rust-red roof
  roofDark: 'rgba(130, 48, 22, 0.85)',    // darker ridge / eave
  interior: 'rgba(210, 155, 100, 0.18)',  // warm amber wash inside
  pillar:   'rgba(220, 200, 175, 0.80)',  // cream/whitewash pillars
  tree:     'rgba(38, 78, 28, 0.52)',     // dark green foliage
  trunk:    'rgba(80, 52, 22, 0.55)',     // brown trunk
  fence:    'rgba(120, 80, 38, 0.60)',    // wooden fence
  can:      'rgba(180, 175, 165, 0.70)',  // steel milk cans
  ground:   'rgba(90, 58, 22, 0.28)',     // earth-brown ground haze
};

function SunElement() {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return {
      x1: 50 + 29 * Math.cos(angle),
      y1: 50 + 29 * Math.sin(angle),
      x2: 50 + 46 * Math.cos(angle),
      y2: 50 + 46 * Math.sin(angle),
    };
  });

  return (
    <div
      className="sun-rise absolute pointer-events-none"
      style={{ top: '14px', left: '14px', zIndex: 25 }}
    >
      <div className="sun-float">
        <svg
          viewBox="0 0 100 100"
          className="w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24"
          style={{ width: 'clamp(62px, 7vw, 100px)', height: 'clamp(62px, 7vw, 100px)', display: 'block' }}
          aria-hidden="true"
        >
          {/* Outer halo — pulses */}
          <circle cx="50" cy="50" r="47" fill="rgba(255,230,50,0.12)" className="sun-glow-anim" />
          {/* Mid glow */}
          <circle cx="50" cy="50" r="38" fill="rgba(255,215,30,0.18)" />
          {/* Spinning rays */}
          <g className="sun-rays-anim">
            {rays.map((r, i) => (
              <line
                key={i}
                x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
                stroke="rgba(255,200,0,0.70)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ))}
          </g>
          {/* Sun body */}
          <circle cx="50" cy="50" r="23" fill="#FFCA28" />
          <circle cx="50" cy="50" r="18" fill="#FFE082" />
          {/* Inner bright specular */}
          <circle cx="43" cy="43" r="5" fill="rgba(255,255,255,0.38)" />
        </svg>
      </div>
    </div>
  );
}

function FarmSilhouette() {
  const pillars = [370, 490, 610, 700, 820, 940, 1030];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      <svg
        viewBox="0 0 1400 620"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        {/* === Left tree cluster === */}
        <ellipse cx="112" cy="415" rx="62" ry="80" fill={SHED.tree} />
        <rect x="105" y="432" width="14" height="80" fill={SHED.trunk} />
        <ellipse cx="185" cy="432" rx="46" ry="60" fill={SHED.tree} />
        <rect x="179" y="447" width="12" height="65" fill={SHED.trunk} />
        <ellipse cx="50" cy="445" rx="32" ry="42" fill="rgba(38,78,28,0.36)" />
        <rect x="45" y="456" width="10" height="56" fill={SHED.trunk} />

        {/* === Right tree cluster === */}
        <ellipse cx="1288" cy="415" rx="62" ry="80" fill={SHED.tree} />
        <rect x="1281" y="432" width="14" height="80" fill={SHED.trunk} />
        <ellipse cx="1215" cy="432" rx="46" ry="60" fill={SHED.tree} />
        <rect x="1209" y="447" width="12" height="65" fill={SHED.trunk} />
        <ellipse cx="1350" cy="445" rx="32" ry="42" fill="rgba(38,78,28,0.36)" />
        <rect x="1345" y="456" width="10" height="56" fill={SHED.trunk} />

        {/* === Main shed — terracotta arched roof === */}
        <path
          d="M 235 515 L 235 398 Q 700 268 1165 398 L 1165 515 Z"
          fill={SHED.roof}
        />
        {/* Interior warm wash */}
        <path
          d="M 290 515 L 290 415 Q 700 300 1110 415 L 1110 515 Z"
          fill={SHED.interior}
        />

        {/* Roof ridge */}
        <path
          d="M 235 398 Q 700 268 1165 398"
          stroke={SHED.roofDark}
          strokeWidth="7"
          fill="none"
        />
        {/* Inner arch / structure line */}
        <path
          d="M 290 415 Q 700 300 1110 415"
          stroke="rgba(130,48,22,0.40)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="16 10"
        />

        {/* === Cream/whitewash pillars === */}
        {pillars.map((x) => (
          <rect key={x} x={x - 5} y="398" width="10" height="120" fill={SHED.pillar} />
        ))}
        {pillars.map((x) => (
          <rect key={`f${x}`} x={x - 9} y="510" width="18" height="6" rx="2" fill="rgba(180,155,130,0.70)" />
        ))}

        {/* === Wooden fence left === */}
        {[182, 202, 222].map((x) => (
          <rect key={x} x={x} y="478" width="5" height="38" fill={SHED.fence} />
        ))}
        <rect x="180" y="486" width="50" height="4" rx="1" fill={SHED.fence} />
        <rect x="180" y="499" width="50" height="4" rx="1" fill={SHED.fence} />

        {/* === Wooden fence right === */}
        {[1173, 1193, 1213].map((x) => (
          <rect key={x} x={x} y="478" width="5" height="38" fill={SHED.fence} />
        ))}
        <rect x="1170" y="486" width="50" height="4" rx="1" fill={SHED.fence} />
        <rect x="1170" y="499" width="50" height="4" rx="1" fill={SHED.fence} />

        {/* === Steel milk cans === */}
        {[638, 665, 692].map((x) => (
          <g key={x}>
            <rect x={x} y="494" width="20" height="22" rx="3" fill={SHED.can} />
            <rect x={x + 3} y="491" width="14" height="5" rx="2" fill={SHED.can} />
          </g>
        ))}

        {/* === Earth-brown ground haze === */}
        <rect x="0" y="510" width="1400" height="110" fill={SHED.ground} />
      </svg>
    </div>
  );
}

export default function Hero({ heroRef }) {
  const { t } = useLanguage();
  const h = t.hero;
  const phone = '6303894012';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Patthireddy Dairy Farm.');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 40 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="px-4 pt-0 pb-0 brutal-border border-b-0 relative overflow-hidden"
      style={{ background: SKY_GRADIENT }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          zIndex: 1,
        }}
      />

      {/* Mouse-following glow — soft light on the sky */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 480px at ${glowPos.x}% ${glowPos.y}%, rgba(147,197,253,0.18) 0%, transparent 70%)`,
          transition: 'background 0.2s ease',
          zIndex: 1,
        }}
      />

      {/* Animated sun */}
      <SunElement />

      {/* Farm shed silhouette */}
      <FarmSilhouette />

      {/* Language toggle */}
      <div className="relative flex justify-end pt-3 pb-0 px-0" style={{ zIndex: 20 }}>
        <LanguageToggle />
      </div>

      <div className="relative max-w-4xl mx-auto text-center pt-6 pb-10 md:pt-10 md:pb-14" style={{ zIndex: 20 }}>

        {/* Animated badge with pulse dot */}
        <div className="hero-badge-anim inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full px-5 py-2 mb-5 md:mb-10"
          style={{
            background: 'rgba(255,255,255,0.14)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.30)',
          }}
        >
          <span className="pulse-dot" />
          <span className="text-xs font-semibold uppercase tracking-widest text-white">
            {h.badge}
          </span>
        </div>

        {/* Main heading — word-by-word reveal */}
        <h1 className="mb-5 md:mb-10">
          <span className="block overflow-hidden pb-1">
            <span className="hero-word-1 block text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] tracking-tight text-white">
              {h.heading1}
            </span>
          </span>
          <span className="block overflow-visible mt-2 md:mt-3">
            <span className="hero-word-2 block text-4xl sm:text-5xl md:text-7xl font-black leading-[1.15]">
              <span className="hero-underline" style={{ color: '#BAE6FD' }}>
                {h.heading2}
              </span>
            </span>
          </span>
        </h1>

        {/* Subheading + body */}
        <p className="hero-fade-sub text-base md:text-xl font-semibold text-white/90 mb-2 md:mb-3 max-w-xl mx-auto px-2">
          {h.subheading}
        </p>
        <p className="hero-fade-body text-sm md:text-lg font-medium text-white/70 mb-8 md:mb-12 max-w-lg mx-auto px-2">
          {h.body}
        </p>

        {/* CTA buttons */}
        <div className="hero-cta-anim flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
          <a
            href={`https://wa.me/91${phone}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary shimmer-btn px-8 py-4 text-base md:text-lg inline-flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            <span>💬</span> {h.btnWhatsapp}
          </a>
          <a
            href={`tel:+91${phone}`}
            className="hero-btn-ghost px-8 py-4 text-base md:text-lg inline-flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            <span>📞</span> {h.btnCall}: +91 {phone}
          </a>
        </div>
      </div>

      {/* Cows walk across the sky in front of the shed silhouette */}
      <div className="relative" style={{ zIndex: 10 }}>
        <CowScene />
      </div>
    </section>
  );
}

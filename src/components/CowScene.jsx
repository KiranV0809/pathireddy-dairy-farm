// Each cow: outerStyle = horizontal walk, innerStyle = vertical bob
// Negative animationDelay spreads cows across the screen on load
const COWS = [
  { duration: '20s', delay: '0s',   bottom: '28px', size: '2.4rem', mobile: true  },
  { duration: '16s', delay: '-5s',  bottom: '30px', size: '2rem',   mobile: true  },
  { duration: '25s', delay: '-10s', bottom: '26px', size: '2.6rem', mobile: false },
  { duration: '18s', delay: '-15s', bottom: '28px', size: '2rem',   mobile: true  },
  { duration: '22s', delay: '-3s',  bottom: '29px', size: '2.4rem', mobile: false },
  { duration: '14s', delay: '-8s',  bottom: '27px', size: '2.2rem', mobile: true  },
  { duration: '28s', delay: '-13s', bottom: '26px', size: '2.6rem', mobile: false },
  { duration: '19s', delay: '-6s',  bottom: '28px', size: '2rem',   mobile: false },
];

const CLOUDS = [
  { duration: '42s', delay: '0s',    top: '10px', size: '1.8rem', opacity: 0.65 },
  { duration: '58s', delay: '-18s',  top: '20px', size: '1.4rem', opacity: 0.45 },
];

export default function CowScene() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '130px' }}
      aria-hidden="true"
    >
      {/* Clouds */}
      {CLOUDS.map((c, i) => (
        <span
          key={`cloud-${i}`}
          style={{
            position: 'absolute',
            top: c.top,
            fontSize: c.size,
            opacity: c.opacity,
            animation: `cloudDrift ${c.duration} linear infinite`,
            animationDelay: c.delay,
            willChange: 'transform',
          }}
        >
          ☁️
        </span>
      ))}

      {/* Cows */}
      {COWS.map((cow, i) => (
        <span
          key={`cow-${i}`}
          className={cow.mobile ? '' : 'hidden md:inline'}
          style={{
            position: 'absolute',
            bottom: cow.bottom,
            fontSize: cow.size,
            animation: `walkAcross ${cow.duration} linear infinite`,
            animationDelay: cow.delay,
            willChange: 'transform',
            lineHeight: 1,
          }}
        >
          {/* Inner wrapper handles the vertical bob */}
          <span
            style={{
              display: 'inline-block',
              animation: `walkBob 0.55s ease-in-out infinite`,
              animationDelay: cow.delay,
            }}
          >
            🐄
          </span>
        </span>
      ))}

      {/* Grass strip */}
      <div
        className="absolute bottom-0 w-full"
        style={{
          height: '26px',
          backgroundColor: '#22c55e',
          borderTop: '3px solid #000',
        }}
      />
    </div>
  );
}

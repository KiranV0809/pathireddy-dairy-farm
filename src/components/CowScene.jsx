// All cows share the same duration so spacing stays even.
// delay = -(index × duration / total) distributes them perfectly
// across the full crossing distance at all times — no bunching.
const DURATION = 22; // seconds per full right→left crossing
const DESKTOP_COUNT = 8;
const MOBILE_COUNT = 4;

// Alternate sizes slightly for a natural depth feel
const SIZES    = ['2.2rem', '2.2rem', '2.2rem', '2.2rem', '2.2rem', '2.2rem', '2.2rem', '2.2rem'];
const BOTTOMS  = ['28px',   '30px',   '27px',   '29px',   '28px',   '30px',   '27px',   '29px'];
// Bob speed varies slightly so they don't all bounce in sync
const BOB_DUR  = ['0.52s',  '0.58s',  '0.50s',  '0.55s',  '0.53s',  '0.57s',  '0.51s',  '0.56s'];

const COWS = Array.from({ length: DESKTOP_COUNT }, (_, i) => ({
  delay:   `${-(i * DURATION / DESKTOP_COUNT).toFixed(3)}s`,
  size:    SIZES[i],
  bottom:  BOTTOMS[i],
  bobDur:  BOB_DUR[i],
  mobile:  i < MOBILE_COUNT,
}));

const CLOUDS = [
  { duration: '42s', delay: '0s',   top: '8px',  size: '1.8rem', opacity: 0.60 },
  { duration: '60s', delay: '-22s', top: '22px', size: '1.4rem', opacity: 0.40 },
];

export default function CowScene() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '130px' }}
      aria-hidden="true"
    >
      {/* Clouds drift right → left (natural direction) */}
      {CLOUDS.map((c, i) => (
        <span
          key={`cloud-${i}`}
          style={{
            position:       'absolute',
            top:            c.top,
            fontSize:       c.size,
            opacity:        c.opacity,
            animation:      `cloudDrift ${c.duration} linear infinite`,
            animationDelay: c.delay,
            willChange:     'transform',
          }}
        >
          ☁️
        </span>
      ))}

      {/* Cows — evenly spaced, right to left */}
      {COWS.map((cow, i) => (
        <span
          key={`cow-${i}`}
          className={cow.mobile ? '' : 'hidden md:inline'}
          style={{
            position:       'absolute',
            bottom:         cow.bottom,
            fontSize:       cow.size,
            // Outer span: horizontal walk (includes scaleX(-1) flip via keyframe)
            animation:      `walkAcross ${DURATION}s linear infinite`,
            animationDelay: cow.delay,
            willChange:     'transform',
            lineHeight:     1,
          }}
        >
          {/* Middle span: static flip — scaleX(-1) so cow faces left (direction of travel) */}
          <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>
            {/* Inner span: vertical bob only */}
            <span
              style={{
                display:   'inline-block',
                animation: `walkBob ${cow.bobDur} ease-in-out infinite`,
              }}
            >
              🐄
            </span>
          </span>
        </span>
      ))}

      {/* Grass strip */}
      <div
        className="absolute bottom-0 w-full"
        style={{ height: '26px', backgroundColor: '#22c55e', borderTop: '3px solid #000' }}
      />
    </div>
  );
}

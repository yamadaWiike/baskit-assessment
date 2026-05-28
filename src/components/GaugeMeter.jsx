import { useEffect, useState } from 'react'

const R = 80
const STROKE = 10
const CENTER = 100
const CIRCUMFERENCE = Math.PI * R // semi-circle

export default function GaugeMeter({ score }) {
  const [displayed, setDisplayed] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame
    const start = performance.now()
    const duration = 1400

    const animate = (now) => {
      const elapsed = now - start
      const pct = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - pct, 3)
      setDisplayed(Math.round(eased * score))
      setProgress(eased * score)
      if (pct < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [score])

  const dashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        width="200"
        height="122"
        viewBox="0 0 200 122"
        className="w-full max-w-[220px] gauge-container"
        aria-label={`Score: ${score}`}
      >
        {/* Glow track */}
        <path
          d={`M ${CENTER - R} ${CENTER} A ${R} ${R} 0 0 1 ${CENTER + R} ${CENTER}`}
          fill="none"
          stroke="#FF8B00"
          strokeOpacity="0.12"
          strokeWidth="18"
          strokeLinecap="round"
        />
        {/* Background track */}
        <path
          d={`M ${CENTER - R} ${CENTER} A ${R} ${R} 0 0 1 ${CENTER + R} ${CENTER}`}
          fill="none"
          stroke="#E2DDD5"
          strokeWidth={STROKE}
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <path
          d={`M ${CENTER - R} ${CENTER} A ${R} ${R} 0 0 1 ${CENTER + R} ${CENTER}`}
          fill="none"
          stroke="#FF8B00"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashoffset}
          style={{ transition: 'stroke-dashoffset 0.05s linear' }}
        />
        {/* Score number */}
        <text
          x={CENTER}
          y={CENTER - 8}
          textAnchor="middle"
          fill="#383B46"
          fontSize="40"
          fontWeight="600"
          letterSpacing="-2"
          fontFamily="Inter, system-ui, sans-serif"
        >
          {displayed}
        </text>
        {/* /100 label */}
        <text
          x={CENTER}
          y={CENTER + 16}
          textAnchor="middle"
          fill="#9B9CA1"
          fontSize="13"
          fontFamily="Open Sans, sans-sans"
        >
          /100
        </text>
      </svg>
    </div>
  )
}

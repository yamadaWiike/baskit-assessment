import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'

// TODO: Replace with real testimonial logo images post-launch
const TESTIMONIALS = [
  {
    initials: 'MY',
    name: 'M Yusuf',
    role: 'Director, Pondok Aren Indonesia',
    quote:
      "The first time I saw my product in a well-known minimarket, it was a big moment. I wouldn't have gotten there without Baskit's help.",
  },
  {
    initials: 'SW',
    name: 'Senwi Wandy',
    role: 'Director, Panca Tobacco',
    quote:
      "Baskit helped me build a scalable go-to-market strategy and flawless execution. What they do is more than just distribution — it's about bringing brands to life.",
  },
  {
    initials: 'AR',
    name: 'Adhi Reks',
    role: 'Owner, Anak Tempe',
    quote:
      'Baskit played a key role in helping Anak Tempe expand beyond Jabodetabek into general trade across Indonesia.',
  },
]

const TOTAL_DURATION = 4000
const R = 52
const CIRCUMFERENCE = 2 * Math.PI * R

export default function Loading({ onDone }) {
  const { t } = useLang()
  const [count, setCount] = useState(0)
  const [msgIndex, setMsgIndex] = useState(0)
  const [showTestimonial, setShowTestimonial] = useState(false)
  const [testimonialIdx] = useState(Math.floor(Math.random() * TESTIMONIALS.length))

  const messages = [
    t('loading_msg_1'),
    t('loading_msg_2'),
    t('loading_msg_3'),
    t('loading_msg_4'),
  ]

  useEffect(() => {
    const start = performance.now()
    let frame

    const animate = (now) => {
      const elapsed = now - start
      const pct = Math.min(elapsed / TOTAL_DURATION, 1)
      const current = Math.round(pct * 100)
      setCount(current)

      const msgBreaks = [0, 0.26, 0.52, 0.78]
      const newMsg = msgBreaks.filter((b) => pct >= b).length - 1
      setMsgIndex(Math.max(0, Math.min(newMsg, 3)))

      if (pct >= 0.5) setShowTestimonial(true)

      if (pct < 1) {
        frame = requestAnimationFrame(animate)
      } else {
        setTimeout(onDone, 200)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  const dashoffset = CIRCUMFERENCE - (count / 100) * CIRCUMFERENCE
  const testimonial = TESTIMONIALS[testimonialIdx]

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col items-center justify-between px-6 pt-12 pb-8">
      {/* Top section: ring + message */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        {/* Ring */}
        <div className="relative flex items-center justify-center">
          <svg width="128" height="128" viewBox="0 0 128 128">
            {/* Glow */}
            <circle
              cx="64" cy="64" r={R}
              fill="none"
              stroke="#FF8B00"
              strokeOpacity="0.12"
              strokeWidth="18"
            />
            {/* Track */}
            <circle
              cx="64" cy="64" r={R}
              fill="none"
              stroke="#E2DDD5"
              strokeWidth="8"
            />
            {/* Progress */}
            <circle
              cx="64" cy="64" r={R}
              fill="none"
              stroke="#FF8B00"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashoffset}
              transform="rotate(-90 64 64)"
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-sans text-4xl text-[#383B46] leading-none">{count}</span>
            <span className="text-[#9B9CA1] text-xs mt-0.5">%</span>
          </div>
        </div>

        {/* Message */}
        <p
          key={msgIndex}
          className="text-base text-[#4C4F59] text-center max-w-xs leading-relaxed"
          style={{ animation: 'fadeIn 0.3s ease' }}
        >
          {messages[msgIndex]}
        </p>
      </div>

      {/* Bottom: testimonial card (always in DOM, fades in at 50%) */}
      <div
        className="w-full max-w-[400px]"
        style={{
          opacity: showTestimonial ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: showTestimonial ? 'auto' : 'none',
        }}
      >
        <p className="text-[10px] tracking-[2.5px] uppercase text-[#9B9CA1] font-semibold text-center mb-4">
          {t('testimonial_label')}
        </p>
        <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5">
          <div className="font-sans text-3xl text-[#FF8B00] leading-none mb-1">&ldquo;</div>
          <p className="text-sm text-[#4C4F59] italic leading-relaxed mb-4">
            {testimonial.quote}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFF4E6] border border-[#FFD199] text-[#FF8B00] font-bold text-xs flex items-center justify-center shrink-0">
              {testimonial.initials}
            </div>
            <div>
              <p className="text-sm font-bold text-[#383B46]">{testimonial.name}</p>
              <p className="text-xs text-[#9B9CA1]">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

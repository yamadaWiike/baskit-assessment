import { useEffect, useState } from 'react'

export default function MicroFeedback({ icon, title, msg }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(timer)
  }, [title])

  return (
    <div
      className="bg-[#FFF4E6] border border-[#FFD199] rounded-xl px-4 py-3 flex items-start gap-3 mt-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 250ms ease, transform 250ms ease',
      }}
    >
      <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-sm font-bold text-[#383B46] mb-0.5">{title}</p>
        <p className="text-sm text-[#4C4F59] leading-[1.55]">{msg}</p>
      </div>
    </div>
  )
}

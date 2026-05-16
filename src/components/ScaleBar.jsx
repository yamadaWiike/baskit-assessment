import { useLang } from '../context/LangContext'
import { getScalePosition } from '../lib/scoring'

export default function ScaleBar({ score }) {
  const { t } = useLang()
  const dotPos = getScalePosition(score) // returns 15, 50, or 85

  // Active label index: 0 = Early Stage, 1 = Scaling, 2 = Expansion Ready
  const activeIndex = dotPos === 15 ? 0 : dotPos === 50 ? 1 : 2
  const labels = [t('scale_early'), t('scale_scaling'), t('scale_expansion')]

  return (
    <div className="w-[200px]">
      <div className="relative w-full h-1 bg-[#E2DDD5] rounded-full mb-2">
        {/* Fill */}
        <div
          className="absolute left-0 top-0 h-1 bg-[#FF8B00] rounded-full transition-all duration-700"
          style={{ width: `${dotPos}%` }}
        />
        {/* Dot with ring */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FF8B00] border-2 border-white ring-2 ring-[#FF8B00] transition-all duration-700"
          style={{ left: `${dotPos}%` }}
        />
      </div>
      <div className="flex justify-between">
        {labels.map((label, i) => (
          <span
            key={i}
            className={`text-[10px] font-medium ${
              i === activeIndex ? 'text-[#FF8B00] font-bold' : 'text-[#9B9CA1]'
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

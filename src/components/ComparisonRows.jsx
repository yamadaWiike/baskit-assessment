import { useLang } from '../context/LangContext'
import { comparisonRows } from '../lib/profiles'

export default function ComparisonRows({ profile }) {
  const { lang, t } = useLang()
  const rows = comparisonRows[profile]?.[lang] ?? comparisonRows.default[lang]

  return (
    <div className="w-full flex flex-col gap-2.5">
      {rows.map((row, i) => (
        <div key={i} className="bg-white border border-[#E2DDD5] rounded-xl overflow-hidden grid grid-cols-2">
          {/* Now cell */}
          <div className="px-4 py-3.5 border-r border-[#E2DDD5]">
            <div className="text-[10px] font-semibold text-[#9B9CA1] uppercase tracking-[1.5px] mb-1">
              {t('now_label')}
            </div>
            <div className="text-sm text-[#9B9CA1] leading-snug">{row.now}</div>
          </div>
          {/* With Baskit cell */}
          <div className="px-4 py-3.5">
            <div className="text-[10px] font-bold text-[#FF8B00] uppercase tracking-[1.5px] mb-1">
              {t('with_baskit')}
            </div>
            <div className="text-sm text-[#383B46] font-semibold leading-snug">{row.baskit}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

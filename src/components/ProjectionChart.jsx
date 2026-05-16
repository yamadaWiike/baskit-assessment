import { useLang } from '../context/LangContext'
import { getChartCurveData, getChartMetrics } from '../lib/opsData'

// ── Default hardcoded curve (used when ops data is null) ────
const DEFAULT_WITH_CURVE  = 'M 0 165 C 80 160, 160 130, 220 90 C 280 50, 340 20, 400 10'
const DEFAULT_WITHOUT_LINE = 'M 0 165 Q 200 160 400 148'
const DEFAULT_FILL_PATH   = 'M 0 165 C 80 160, 160 130, 220 90 C 280 50, 340 20, 400 10 L 400 180 L 0 180 Z'

// Default dots along the With Baskit curve (Today / 3 Months / 6 Months)
const DEFAULT_WITH_DOTS = [
  { cx: 0,   cy: 165 },
  { cx: 220, cy: 90  },
  { cx: 400, cy: 10  },
]
const DEFAULT_WITHOUT_END = { cx: 400, cy: 148 }

// ── Helpers for real data curve ─────────────────────────────
function buildRealCurve(curveData) {
  const mapY = (val) => {
    const maxVal = curveData.month6With
    const range = 155 // 165 - 10
    return 165 - ((val / maxVal) * range)
  }

  const y0   = 165
  const y1   = mapY(curveData.month1With)
  const y3   = mapY(curveData.month3With)
  const y6w  = mapY(curveData.month6With)
  const y6wo = mapY(curveData.month6Without)

  return {
    withCurve:   `M 0 ${y0} C 80 ${y0}, 160 ${y1}, 200 ${y3} C 280 ${y3}, 340 ${y6w}, 400 ${y6w}`,
    withoutLine: `M 0 ${y0} Q 200 ${(y0 + y6wo) / 2} 400 ${y6wo}`,
    fillPath:    `M 0 ${y0} C 80 ${y0}, 160 ${y1}, 200 ${y3} C 280 ${y3}, 340 ${y6w}, 400 ${y6w} L 400 180 L 0 180 Z`,
    withDots:    [
      { cx: 0,   cy: y0  },
      { cx: 200, cy: y3  },
      { cx: 400, cy: y6w },
    ],
    withoutEnd: { cx: 400, cy: y6wo },
  }
}

export default function ProjectionChart({ profile = 'default' }) {
  const { t } = useLang()

  // ── Curve data: real ops data or null (→ default shape) ──
  const curveData = getChartCurveData(profile)
  const curve = curveData ? buildRealCurve(curveData) : null

  const withCurve   = curve?.withCurve   ?? DEFAULT_WITH_CURVE
  const withoutLine = curve?.withoutLine ?? DEFAULT_WITHOUT_LINE
  const fillPath    = curve?.fillPath    ?? DEFAULT_FILL_PATH
  const withDots    = curve?.withDots    ?? DEFAULT_WITH_DOTS
  const withoutEnd  = curve?.withoutEnd  ?? DEFAULT_WITHOUT_END

  // ── Metrics: real ops data or global fallback ─────────────
  const m = getChartMetrics(profile)

  const metrics = [
    { value: m.outletGrowth,  label: t('metric_outlet'),     sub: t('metric_potential')   },
    { value: m.days + ' days', label: t('metric_activation'), sub: t('metric_faster')      },
    { value: m.costReduction, label: t('metric_cost'),        sub: t('metric_improvement') },
  ]

  const labels = [t('chart_axis_now'), t('chart_axis_3m'), t('chart_axis_6m')]

  return (
    <div className="bg-white border border-[#E2DDD5] rounded-2xl p-6">

      {/* Title */}
      <p className="font-sans font-semibold text-xl text-[#383B46] mb-4 leading-snug">
        {t('chart_subtitle')} 
      </p>

      {/* Legend */}
      <div className="flex gap-6 mb-5">
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-[2.5px] bg-[#FF8B00] rounded inline-block" />
          <span className="text-xs text-[#4C4F59]">{t('with_baskit')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block"
            style={{
              width: '20px',
              height: '2px',
              background:
                'repeating-linear-gradient(90deg,#9B9CA1 0,#9B9CA1 6px,transparent 6px,transparent 10px)',
            }}
          />
          <span className="text-xs text-[#9B9CA1]">{t('without_baskit')}</span>
        </div>
      </div>

      {/* Chart + Metrics — side by side on desktop, stacked on mobile */}
      <div className="flex flex-col md:flex-row gap-6 items-center">

        {/* SVG Chart */}
        <div className="flex-1 w-full">
          <svg
            viewBox="0 0 400 200"
            width="100%"
            height="auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#FF8B00" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#FF8B00" stopOpacity="0"    />
              </linearGradient>
            </defs>

            {/* Subtle horizontal grid lines */}
            {[60, 100, 140].map((y) => (
              <line
                key={y}
                x1="0" y1={y} x2="400" y2={y}
                stroke="#E2DDD5"
                strokeOpacity="0.5"
                strokeWidth="1"
              />
            ))}

            {/* Area fill under With Baskit curve */}
            <path d={fillPath} fill="url(#chartFill)" />

            {/* Without Baskit — flat dashed line */}
            <path
              d={withoutLine}
              fill="none"
              stroke="#9B9CA1"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              strokeLinecap="round"
            />

            {/* With Baskit — smooth bezier curve */}
            <path
              d={withCurve}
              fill="none"
              stroke="#FF8B00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dots on With Baskit */}
            {withDots.map((d, i) => (
              <circle key={i} cx={d.cx} cy={d.cy} r="5" fill="#FF8B00" />
            ))}

            {/* End dot on Without Baskit */}
            <circle cx={withoutEnd.cx} cy={withoutEnd.cy} r="4" fill="#9B9CA1" />

            {/* X-axis labels */}
            {labels.map((label, i) => (
              <text
                key={i}
                x={i === 0 ? 8 : i === 1 ? 220 : 392}
                y="196"
                textAnchor={i === 0 ? 'start' : i === 2 ? 'end' : 'middle'}
                fill="#9B9CA1"
                fontSize="11"
                fontFamily="Open Sans, sans-sans"
              >
                {label}
              </text>
            ))}
          </svg>
        </div>

        {/* Metrics column */}
        <div className="flex flex-row md:flex-col gap-6 md:w-40 shrink-0 w-full justify-around md:justify-start">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-sans text-xs text-[#9B9CA1] leading-snug mb-0.5">{m.label}</span>
              <span className="font-sans text-3xl text-[#FF8B00] font-bold leading-none">{m.value}</span>
              <span className="font-sans text-xs text-[#9B9CA1] mt-0.5">{m.sub}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

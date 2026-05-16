import { useLang } from '../context/LangContext'

const ChevronCheck = () => (
  <span className="text-[#7ED6DF] text-xs shrink-0 mt-0.5">✓</span>
)

export default function Sidebar({ type = 'brand' }) {
  const { t } = useLang()

  const config = {
    brand: {
      headlineKey: 'contact_sidebar_brand_q',
      subKey: 'sidebar_brand_sub',
      bullets: ['sidebar_brand_b1', 'sidebar_brand_b2', 'sidebar_brand_b3', 'sidebar_brand_b4'],
      showButton: true,
      noteKey: 'sidebar_brand_note',
    },
    distributor: {
      headlineKey: 'contact_sidebar_dist_q',
      subKey: 'sidebar_dist_sub',
      bullets: ['sidebar_dist_b1', 'sidebar_dist_b2', 'sidebar_dist_b3', 'sidebar_dist_b4'],
      showButton: false,
      noteKey: 'sidebar_dist_note',
    },
    others: {
      headlineKey: 'contact_sidebar_others_q',
      subKey: 'sidebar_others_sub',
      bullets: ['sidebar_others_b1', 'sidebar_others_b2', 'sidebar_others_b3', 'sidebar_others_b4'],
      showButton: false,
      noteKey: 'sidebar_others_note',
    },
  }

  const { headlineKey, subKey, bullets, showButton, noteKey } = config[type] ?? config.brand

  return (
    <div className="hidden md:block w-[300px] shrink-0">
      <div className="rounded-2xl p-6" style={{ background: '#00312F' }}>
        <h3 className="font-sans font-bold text-lg text-white leading-[1.3] mb-4">
          {t(headlineKey)}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.65' }}>
          {t(subKey)}
        </p>
        <div className="flex flex-col gap-1.5 mb-5">
          {bullets.map((key) => (
            <div key={key} className="flex items-start gap-2">
              <ChevronCheck />
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>
                {t(key)}
              </span>
            </div>
          ))}
        </div>

        {showButton && (
          <>
            <button
              onClick={() => {
                // TODO: replace '/' with 'https://brand-assessment.baskit.app' when live
                window.open('/assessment', '_blank')
              }}
              className="w-full font-bold rounded-full py-3 text-sm cursor-pointer transition-opacity hover:opacity-85"
              style={{ background: '#7ED6DF', color: '#021212' }}
            >
              {t('contact_sidebar_brand_cta')}
            </button>
            <p className="text-center text-xs mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t('sidebar_brand_note')}
            </p>
          </>
        )}

        {!showButton && (
          <p className="text-center text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t(noteKey)}
          </p>
        )}
      </div>
    </div>
  )
}

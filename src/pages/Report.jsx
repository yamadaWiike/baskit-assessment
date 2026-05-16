import GaugeMeter from '../components/GaugeMeter'
import ScaleBar from '../components/ScaleBar'
import ProjectionChart from '../components/ProjectionChart'
import ComparisonRows from '../components/ComparisonRows'
import { useLang } from '../context/LangContext'
import { getScoreLabel } from '../lib/scoring'
import { profiles } from '../lib/profiles'

const TERMS_URL = 'https://baskit.app/term-condition'
const PRIVACY_URL = 'https://baskit.app/privacy-policy'

export default function Report({ score, profile }) {
  const { t, lang } = useLang()
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL

  const profileContent = profiles[profile]?.[lang] ?? profiles.default[lang]
  const scoreLabel = getScoreLabel(score, t)

  return (
    <div className="flex flex-col">
      <div className="flex-1 max-w-[850px] mx-auto w-full px-6 pt-10 pb-16">

        {/* Hero — 2 columns desktop, stacked mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
          {/* Left */}
          <div>
            <p className="text-[10.5px] font-sans font-bold text-[#FF8B00] tracking-[2.5px] uppercase mb-3">
              {scoreLabel}
            </p>
            <h1 className="font-sans font-semibold text-4xl text-[#383B46] leading-[1.1] mb-3 tracking-[-0.4px]">
              {profileContent.headline}
            </h1>
            <p className="text-sm text-[#9B9CA1] leading-[1.75] max-w-[380px]">
              {profileContent.sub}
            </p>
          </div>

          {/* Right — gauge + badge + scale bar */}
          <div className="flex flex-col items-center gap-3">
            <GaugeMeter score={score} />
            <div className="bg-[#FFF4E6] border-[1.5px] border-[#FFD199] text-[#FF8B00] font-bold text-xs px-4 py-1.5 rounded-full tracking-[0.3px]">
              {scoreLabel}
            </div>
            <ScaleBar score={score} />
          </div>
        </div>

        {/* Potential with Baskit */}
        <div className="mb-8">
          <p className="text-[10px] font-bold text-[#FF8B00] tracking-[2.5px] uppercase mb-4">
            {t('section_potential')}
          </p>
          <ProjectionChart profile={profile} />
        </div>

        {/* Now vs. with Baskit */}
        <div className="mb-8">
          <p className="text-[10px] font-bold text-[#FF8B00] tracking-[2.5px] uppercase mb-4">
            {t('comparison_title')}
          </p>
          <ComparisonRows profile={profile} />
        </div>

        {/* Social proof */}
        <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 mb-8 flex items-start gap-3">
          {/* Faces */}
          <div className="flex shrink-0">
            {['ML', 'SW', 'AR', '+'].map((init, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#FFF4E6] border-2 border-white flex items-center justify-center text-[9px] font-bold text-[#FF8B00] shrink-0"
                style={{ marginRight: i < 3 ? '-8px' : '0' }}
              >
                {init}
              </div>
            ))}
          </div>
          <p
            className="text-sm text-[#4C4F59] leading-[1.65] pl-1.5"
            dangerouslySetInnerHTML={{ __html: t('social_proof') }}
          />
        </div>

        {/* What happens next */}
        <div className="bg-[#00312F] border border-[#E2DDD5] rounded-2xl p-8 text-left  mb-8">
          <h2 className="font-sans font-semibold text-[26px] text-white mb-2">{t('next_steps_headline')}</h2>
          <p
            className="text-sm text-[#e2ddd5e9] lineHeight: '1.65' }} leading-[1.7] mb-2"
            dangerouslySetInnerHTML={{ __html: t('next_steps_sub') }}
          />
          <p className="text-[13px] text-[#969696df] italic mb-6">{t('next_steps_italic')}</p>
          <div className="flex flex-col sm:flex-row gap-2.5 justify-left flex-wrap">
            <a
              href="https://baskit.app"
              className="border-[1.5px] border-[#E2DDD5] text-[#E2DDD5] rounded-full px-6 py-3 text-sm font-semibold hover:border-[#7ED6DF] hover:text-[#7ED6DF] transition text-center"
            >
              {t('btn_home')}
            </a>
            <a
              href={calendlyUrl !== 'placeholder' ? calendlyUrl : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7ED6DF] text-[#021212] rounded-full px-6 py-3 text-sm cursor-pointer hover:opacity-85transition-opacity hover:opacity-85 text-center"
            >
              {t('btn_schedule')}
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E2DDD5] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9B9CA1]">
        <span>{t('footer_copyright')}</span>
        <div className="flex gap-5">
          <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8B00] transition">
            {t('footer_terms')}
          </a>
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8B00] transition">
            {t('footer_privacy')}
          </a>
        </div>
      </footer>
    </div>
  )
}

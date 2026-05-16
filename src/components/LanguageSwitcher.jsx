import { useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const { pathname } = useLocation()

  // The Framer parent page handles language switching for the embedded contact form
  if (pathname === '/contact' || pathname.startsWith('/contact')) return null

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded transition ${
          lang === 'en'
            ? 'text-[#FF8B00] font-semibold'
            : 'text-[#9B9CA1] hover:text-[#4C4F59]'
        }`}
      >
        EN
      </button>
      <span className="text-[#E2DDD5]">|</span>
      <button
        onClick={() => setLang('id')}
        className={`px-2 py-1 rounded transition ${
          lang === 'id'
            ? 'text-[#FF8B00] font-semibold'
            : 'text-[#9B9CA1] hover:text-[#4C4F59]'
        }`}
      >
        ID
      </button>
    </div>
  )
}

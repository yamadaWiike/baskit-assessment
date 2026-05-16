import BaskitLogo from "../assets/Logo_baskit_text.png"
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 h-14 bg-white border-b border-[#E2DDD5] sticky top-0 z-10">
        <img src={BaskitLogo} alt="Baskit Logo" className="h-6 w-auto object-contain"/>
        <LanguageSwitcher />
    </nav>
  )
}
      
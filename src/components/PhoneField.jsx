import { useEffect, useRef, useState } from 'react'

const COUNTRY_CODES = [
  { code: '+62', flag: '🇮🇩', label: 'ID', name: 'Indonesia' },
  { code: '+65', flag: '🇸🇬', label: 'SG', name: 'Singapore' },
  { code: '+60', flag: '🇲🇾', label: 'MY', name: 'Malaysia' },
  { code: '+63', flag: '🇵🇭', label: 'PH', name: 'Philippines' },
  { code: '+66', flag: '🇹🇭', label: 'TH', name: 'Thailand' },
  { code: '+84', flag: '🇻🇳', label: 'VN', name: 'Vietnam' },
  { code: '+61', flag: '🇦🇺', label: 'AU', name: 'Australia' },
  { code: '+1',  flag: '🇺🇸', label: 'US', name: 'United States' },
  { code: '+44', flag: '🇬🇧', label: 'GB', name: 'United Kingdom' },
]

export default function PhoneField({ label, value = '', onChange, error, required, placeholder }) {
  const [countryCode, setCountryCode] = useState('+62')
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleNumberChange(raw) {
    const cleaned = raw.replace(/\D/g, '').replace(/^0+/, '')
    if (cleaned === '') {
      onChange('')
      return
    }
    onChange(countryCode + cleaned)
  }

  function handleCodeChange(code) {
    setCountryCode(code)
    const numOnly = value.replace(/^\+\d+/, '')
    onChange(numOnly ? code + numOnly : '')
  }

  const selectedCountry = COUNTRY_CODES.find((item) => item.code === countryCode) || COUNTRY_CODES[0]
  const displayValue = value.startsWith(countryCode)
    ? value.slice(countryCode.length)
    : value.replace(/^\+\d+/, '')

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[11px] font-bold tracking-[1.5px] uppercase text-text-lighter">
          {label}
          {required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
      )}

      <div
        className={`relative flex border rounded-[14px] overflow-visible transition-colors ${
          error ? 'border-red-400' : 'border-border-color focus-within:border-primary'
        }`}
        ref={dropdownRef}
      >
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-full items-center gap-2 rounded-l-[14px] border-r border-border-color bg-surface px-4 py-3 text-sm font-semibold text-text-darker focus:outline-none"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-surface text-[12px] leading-none">
            {selectedCountry.flag || selectedCountry.label}
          </span>
          <span className="text-sm text-text-darker">{selectedCountry.code}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-text-lighter">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 top-full z-20 mt-2 w-full max-w-[320px] rounded-[14px] border border-border-color bg-surface p-2 shadow-[0_12px_32px_rgba(36,49,58,0.08)]">
            {COUNTRY_CODES.map((item) => {
              const isSelected = item.code === countryCode
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    handleCodeChange(item.code)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center gap-3 rounded-[10px] px-3 py-3 text-left text-sm transition ${
                    isSelected
                      ? 'bg-[#FFF4E6] text-primary'
                      : 'text-text-darker hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-surface text-[12px] leading-none">
                    {item.flag || item.label}
                  </span>
                  <span className="flex-1 text-sm text-text-darker">{item.name}</span>
                  <span className="text-sm text-text-lighter">{item.code}</span>
                </button>
              )
            })}
          </div>
        )}

        <input
          type="tel"
          value={displayValue}
          onChange={(e) => handleNumberChange(e.target.value)}
          placeholder={placeholder || '81234567890'}
          className="flex-1 rounded-r-[14px] px-4 py-3 text-sm text-text-darker bg-white focus:outline-none placeholder:text-text-lighter"
        />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

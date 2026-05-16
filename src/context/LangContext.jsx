import { createContext, useContext, useState, useEffect } from 'react'
import { detectLang, setupPostMessageListener } from '../lib/lang'
import { t as translate } from '../lib/i18n'

const LangContext = createContext()

export function LangProvider({ children, isEmbed = false }) {
  const [lang, setLang] = useState(detectLang)

  useEffect(() => {
    if (isEmbed) {
      return setupPostMessageListener(setLang)
    }
  }, [isEmbed])

  const tFn = (key, ...args) => translate(lang, key, ...args)

  return (
    <LangContext.Provider value={{ lang, setLang, t: tFn }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

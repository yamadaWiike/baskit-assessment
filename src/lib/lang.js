// Language detection priority:
// 1. postMessage from Framer parent
// 2. URL param: ?lang=id
// 3. Framer URL path contains '/id/' → 'id'
// 4. Default: 'en'

export function detectLang() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('lang') === 'id') return 'id'
  if (params.get('lang') === 'en') return 'en'
  if (window.location.pathname.includes('/id/')) return 'id'
  return 'en'
}

export function setupPostMessageListener(setLang) {
  const handler = (e) => {
    if (e.data?.lang === 'id' || e.data?.lang === 'en') {
      setLang(e.data.lang)
    }
  }
  window.addEventListener('message', handler)
  return () => window.removeEventListener('message', handler)
}

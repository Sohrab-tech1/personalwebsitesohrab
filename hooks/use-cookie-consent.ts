import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const COOKIE_NAME = 'cookie-consent'
const INTERACTION_COOKIE = 'cookie-interaction'

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieSettings | null>(null)
  const [hasInteracted, setHasInteracted] = useState<boolean>(false)

  useEffect(() => {
    const savedConsent = Cookies.get(COOKIE_NAME)
    const savedInteraction = Cookies.get(INTERACTION_COOKIE)

    if (savedConsent) {
      setConsent(JSON.parse(savedConsent))
    }
    if (savedInteraction) {
      setHasInteracted(true)
    }
  }, [])

  const updateConsent = (settings: CookieSettings) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(settings), { expires: 365 })
    Cookies.set(INTERACTION_COOKIE, 'true', { expires: 365 })
    setConsent(settings)
    setHasInteracted(true)

    // Apply consent settings
    if (settings.analytics) {
      // Enable analytics (e.g., Speed Insights)
      window.localStorage.setItem('speed-insights-enabled', 'true')
    } else {
      window.localStorage.removeItem('speed-insights-enabled')
    }
  }

  return {
    consent,
    updateConsent,
    hasInteracted
  }
} 
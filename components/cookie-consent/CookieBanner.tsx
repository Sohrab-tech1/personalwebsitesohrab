'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useCookieConsent } from '@/hooks/use-cookie-consent'
import { Settings2, X } from 'lucide-react'
import { CookieSettings } from './CookieSettings'
import Link from 'next/link'
import Cookies from 'js-cookie'

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const { consent, updateConsent } = useCookieConsent()
  
  // Initialize isMinimized based on consent cookie
  const [isMinimized, setIsMinimized] = useState(() => {
    // Only check for cookie on client side
    if (typeof window !== 'undefined') {
      const consentCookie = Cookies.get('cookie-consent')
      return !!consentCookie // minimized if consent exists
    }
    return false // show full banner by default
  })

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true)
    // Check consent on mount and update isMinimized
    const consentCookie = Cookies.get('cookie-consent')
    setIsMinimized(!!consentCookie)
  }, [])

  // Don't render anything on the server side
  if (!mounted) {
    return null
  }

  // Check if there's already a consent cookie
  const consentCookie = Cookies.get('cookie-consent')
  const hasConsent = !!consentCookie

  const defaultSettings: CookieSettings = {
    necessary: true,
    analytics: false,
    marketing: false
  }

  const handleAcceptAll = () => {
    const settings = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    updateConsent(settings)
    Cookies.set('cookie-consent', JSON.stringify(settings), { 
      expires: 365,
      path: '/',
      sameSite: 'Lax'
    })
    setIsMinimized(true)
  }

  const handleRejectAll = () => {
    const settings = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    updateConsent(settings)
    Cookies.set('cookie-consent', JSON.stringify(settings), { 
      expires: 365,
      path: '/',
      sameSite: 'Lax'
    })
    setIsMinimized(true)
  }

  const handleSaveSettings = (settings: CookieSettings) => {
    updateConsent(settings)
    Cookies.set('cookie-consent', JSON.stringify(settings), { 
      expires: 365,
      path: '/',
      sameSite: 'Lax'
    })
    setShowSettings(false)
    setIsMinimized(true)
  }

  return (
    <AnimatePresence mode="wait">
      {isMinimized ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40"
        >
          <Button
            onClick={() => setIsMinimized(false)}
            className="rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 p-0 flex items-center justify-center"
          >
            <Settings2 className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6 lg:px-8"
        >
          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-gray-400 hover:text-gray-500 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
                
                <div className="p-4 sm:p-6">
                  {showSettings ? (
                    <CookieSettings
                      initialSettings={consent || defaultSettings}
                      onSave={handleSaveSettings}
                      onCancel={() => setShowSettings(false)}
                      hasConsent={hasConsent}
                    />
                  ) : (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                          🍪 Cookie Preferences
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                          {hasConsent 
                            ? "Manage your cookie preferences. You can change your settings at any time."
                            : (
                              <>
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies. For full information on how we use cookies, please see our{' '}
                                <Link href="/privacy" className="text-blue-600 hover:text-blue-500 underline transition-colors duration-200">
                                  privacy policy
                                </Link>
                                .
                              </>
                            )}
                        </p>
                        <button
                          onClick={() => setShowSettings(true)}
                          className="text-xs sm:text-sm text-blue-600 hover:text-blue-500 font-medium mt-2 transition-colors duration-200"
                        >
                          Customize preferences
                        </button>
                      </div>
                      {!hasConsent && (
                        <div className="flex flex-row gap-2 min-w-max w-full sm:w-auto">
                          <Button
                            variant="outline"
                            onClick={handleRejectAll}
                            className="flex-1 sm:flex-none border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-xs sm:text-sm h-8 sm:h-10"
                          >
                            Reject All
                          </Button>
                          <Button
                            onClick={handleAcceptAll}
                            className="flex-1 sm:flex-none bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm h-8 sm:h-10"
                          >
                            Accept All
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
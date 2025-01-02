'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { type Language } from '@/lib/i18n/dictionaries'

export default function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLang] = useState<Language>(
    pathname.startsWith('/sv') ? 'sv' : 'en'
  )

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'sv' : 'en'
    const newPath = pathname.replace(/^\/[a-z]{2}/, '')
    router.push(newLang === 'en' ? newPath : `/${newLang}${newPath}`)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50"
    >
      {currentLang === 'en' ? '🇸🇪 Svenska' : '🇬🇧 English'}
    </Button>
  )
} 
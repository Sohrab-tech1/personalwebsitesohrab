'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href={`/${locale}`} className="text-lg font-semibold text-gray-900">
            sohrab.se
          </Link>
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => switchLocale('sv')}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'sv' ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              SV
            </button>
            <span className="text-gray-300">/</span>
            <button
              onClick={() => switchLocale('en')}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'en' ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

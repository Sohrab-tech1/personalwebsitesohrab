'use client'

import { useTranslations } from 'next-intl'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>{t('copyright', { year: new Date().getFullYear() })}</span>
          <a
            href="https://www.linkedin.com/in/sohrabf/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

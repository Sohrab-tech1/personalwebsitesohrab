'use client'

import { useTranslations } from 'next-intl'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          {t('subtitle')}
        </p>
        <div className="space-y-4 mb-10">
          <a
            href={`mailto:${t('email')}`}
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>{t('email')}</span>
          </a>
          <a
            href={`tel:${t('phone').replace(/\s/g, '')}`}
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>{t('phone')}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sohrabf/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>linkedin.com/in/sohrabf</span>
          </a>
        </div>
        <a
          href={`mailto:${t('email')}`}
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  )
}

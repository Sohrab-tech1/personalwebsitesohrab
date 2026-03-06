'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('text')}
        </p>
      </div>
    </section>
  )
}

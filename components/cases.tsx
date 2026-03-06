'use client'

import { useTranslations } from 'next-intl'

const caseKeys = ['medis', 'parklife', 'techarena', 'lkr'] as const

export default function Cases() {
  const t = useTranslations('cases')

  return (
    <section id="cases" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {caseKeys.map((key) => (
            <div
              key={key}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <span className="text-sm text-gray-400 uppercase tracking-wide">
                {t(`items.${key}.type`)}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

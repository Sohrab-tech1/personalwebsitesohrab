'use client'

import { useTranslations } from 'next-intl'
import { Megaphone, Globe, Cpu } from 'lucide-react'

const services = [
  { key: 'pr', icon: Megaphone },
  { key: 'web', icon: Globe },
  { key: 'ai', icon: Cpu },
] as const

export default function WhatIDo() {
  const t = useTranslations('whatIDo')

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="what-i-do" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ key, icon: Icon }) => (
            <div key={key} className="bg-white rounded-xl p-8 border border-gray-100">
              <Icon className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`${key}.title`)}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(`${key}.description`)}
              </p>
              <button
                onClick={scrollToContact}
                className="text-gray-900 font-medium hover:underline"
              >
                {t('cta')} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

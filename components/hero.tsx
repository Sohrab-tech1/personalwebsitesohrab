'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Linkedin } from 'lucide-react'

const HERO_IMAGE_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sohrab%20bild.jpg-G5oEUbPlJzGUJldrtfyUNqDiixx9BI.jpeg'

export default function Hero() {
  const t = useTranslations('hero')

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-2 lg:order-1">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src={HERO_IMAGE_URL}
                alt="Sohrab Fadai"
                fill
                priority
                quality={90}
                className="object-cover object-[50%_35%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              {t('name')}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed">
              {t('pitch')}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-base font-medium"
              >
                {t('cta')}
              </button>
              <a
                href="https://www.linkedin.com/in/sohrabf/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>{t('linkedin')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

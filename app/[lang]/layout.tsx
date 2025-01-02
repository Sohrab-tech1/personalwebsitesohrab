import { type Metadata } from 'next'
import { type Language } from '@/lib/i18n/dictionaries'
import Header from '@/components/header'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: Language
  }
}

export const metadata: Metadata = {
  title: 'Sohrab Fadai',
  description: 'AI Strategy & Implementation Expert',
}

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}

// Generate static layouts for all supported languages
export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'sv' }
  ]
} 
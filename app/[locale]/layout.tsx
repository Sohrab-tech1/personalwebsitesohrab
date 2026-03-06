import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-consent/CookieBanner'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://sohrab.se'),
  title: {
    default: 'Sohrab Fadai — PR, webb och AI från Stockholm',
    template: '%s | Sohrab Fadai',
  },
  description: 'Jag hjälper företag att synas. PR, webb och AI från Stockholm.',
  openGraph: {
    title: 'Sohrab Fadai — PR, webb och AI från Stockholm',
    description: 'Jag hjälper företag att synas. PR, webb och AI från Stockholm.',
    url: 'https://sohrab.se',
    siteName: 'Sohrab Fadai',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: 'https://sohrab.se/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sohrab Fadai',
      },
    ],
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

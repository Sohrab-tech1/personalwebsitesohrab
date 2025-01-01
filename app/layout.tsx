import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/back-to-top'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import { CookieBanner } from '@/components/cookie-consent/CookieBanner'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Sohrab Fadai - Founder, builder, entrepreneur',
    template: '%s | Sohrab Fadai',
  },
  description: 'Personal landing page of Sohrab Fadai, Founder, CTO and Co-CEO at Heartspace, creating AI-powered content for fast-growing scale-ups.',
  openGraph: {
    title: 'Sohrab Fadai - Founder, builder, entrepreneur',
    description: 'Personal landing page of Sohrab Fadai, Founder, CTO and Co-CEO at Heartspace, creating AI-powered content for fast-growing scale-ups.',
    url: 'https://sohrab.se',
    siteName: 'Sohrab Fadai',
    locale: 'en_SE',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {/* Header component for site navigation */}
        <Header></Header>
        {children}
        {/* Footer component for site footer */}
        <Footer></Footer>
        {/* Back to top button component */}
        <BackToTop></BackToTop>
        {/* Vercel Speed Insights for performance monitoring */}
        <SpeedInsights />
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  )
}

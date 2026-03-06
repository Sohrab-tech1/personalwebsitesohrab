import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

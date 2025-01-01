import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/back-to-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sohrab Fadai - Founder, builder, entrepreneur',
  description: 'Personal landing page of Sohrab Fadai, Founder, CTO and Co-CEO at Heartspace, creating AI-powered content for fast-growing scale-ups.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}


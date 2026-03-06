import Hero from '@/components/hero'
import WhatIDo from '@/components/what-i-do'
import Cases from '@/components/cases'
import About from '@/components/about'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <Cases />
      <About />
      <Contact />
    </main>
  )
}

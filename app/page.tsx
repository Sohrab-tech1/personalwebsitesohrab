'use client';

import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Whitepapers from '@/components/whitepapers'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main>
        <Hero />
        <Testimonials />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Whitepapers />
        <Contact />
      </main>
    </div>
  )
}


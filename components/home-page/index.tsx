'use client'

import { type FC } from 'react'
import { type Language } from '@/lib/i18n/dictionaries'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

interface HomePageProps {
  lang: Language
}

const HomePage: FC<HomePageProps> = ({ lang }) => {
  return (
    <div className="min-h-screen">
      <Hero lang={lang} />
      <About lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </div>
  )
}

export default HomePage 
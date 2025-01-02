'use client';

import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Whitepapers from '@/components/whitepapers'
import Contact from '@/components/contact'
import BlogSection from '@/components/blog'
import ServicesPage from '@/components/services/services-page'
import { dictionaries, type Language } from '@/lib/i18n/dictionaries'
import { getBlogPosts } from '@/lib/blog'

export default function Home() {
  const lang: Language = 'en'
  const dictionary = dictionaries[lang]
  const posts = getBlogPosts(lang)

  return (
    <div className="min-h-screen bg-background font-sans">
      <main>
        <Hero lang={lang} />
        <Testimonials />
        <About lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Whitepapers />
        <Contact lang={lang} />
        <BlogSection lang={lang} posts={posts} />
        <ServicesPage lang={lang} />
      </main>
    </div>
  )
}


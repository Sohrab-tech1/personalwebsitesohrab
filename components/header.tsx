'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { type Language } from '@/lib/i18n/dictionaries'

interface NavItem {
  id: string
  label: string
  href?: string
  isExternal?: boolean
  items?: NavItem[]
}

interface HeaderProps {
  lang: Language
}

export default function Header({ lang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false)
    
    if (id === 'services') {
      window.location.href = `/${lang}/services`
      return
    }

    if (!isHomePage) {
      window.location.href = `/${lang}/#${id}`
      return
    }
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navigationItems: NavItem[] = [
    { id: 'about', label: lang === 'sv' ? 'Om' : 'About' },
    {
      id: 'work',
      label: lang === 'sv' ? 'Arbete' : 'Work',
      items: [
        { id: 'experience', label: lang === 'sv' ? 'Erfarenhet' : 'Experience' },
        { id: 'skills', label: lang === 'sv' ? 'Kompetenser' : 'Skills' },
        { id: 'projects', label: lang === 'sv' ? 'Projekt' : 'Projects' },
      ]
    },
    {
      id: 'resources',
      label: lang === 'sv' ? 'Resurser' : 'Resources',
      items: [
        { 
          id: 'blog', 
          label: lang === 'sv' ? 'Senaste Insikter' : 'Latest Insights',
          href: `/${lang}/blog`,
          isExternal: true 
        },
        { 
          id: 'services', 
          label: lang === 'sv' ? 'Tjänster' : 'Services',
          href: `/${lang}/services`,
          isExternal: true 
        },
      ]
    },
    { id: 'contact', label: lang === 'sv' ? 'Kontakt' : 'Contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="hidden lg:block text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Sohrab Fadai
          </Link>
          <div className="lg:hidden w-8"></div>
          <nav className="hidden lg:flex space-x-4">
            {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-600 hover:text-blue-600 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </nav>
          <Button
            className="lg:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col p-4">
              {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="py-2 text-gray-600 hover:text-blue-600 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


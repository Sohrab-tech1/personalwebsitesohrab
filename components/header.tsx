'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
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
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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


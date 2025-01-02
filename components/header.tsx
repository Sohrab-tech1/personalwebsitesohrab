'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface NavItem {
  id: string
  label: string
  href?: string
  isExternal?: boolean
  items?: NavItem[]
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

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
      window.location.href = '/services'
      return
    }

    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navigationItems: NavItem[] = [
    { id: 'about', label: 'About' },
    {
      id: 'work',
      label: 'Work',
      items: [
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      items: [
        { 
          id: 'blog', 
          label: 'Latest Insights',
          href: '/blog',
          isExternal: true 
        },
        { 
          id: 'services', 
          label: 'Services',
          href: '/services',
          isExternal: true 
        },
      ]
    },
    { id: 'contact', label: 'Contact' }
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
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.items ? (
                  <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : item.isExternal ? (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors group"
                  >
                    {item.label}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                )}
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredItem === item.id && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                    >
                      {item.items.map((subItem) => (
                        <div key={subItem.id} className="px-4 py-2">
                          {subItem.isExternal ? (
                            <Link
                              href={subItem.href || '#'}
                              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors group"
                            >
                              {subItem.label}
                              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ) : (
                            <button
                              onClick={() => scrollTo(subItem.id)}
                              className="text-gray-600 hover:text-blue-600 transition-colors w-full text-left"
                            >
                              {subItem.label}
                            </button>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col p-4">
              {navigationItems.map((item) => (
                <div key={item.id} className="py-2">
                  {item.items ? (
                    <>
                      <div className="font-medium text-gray-800 mb-2">{item.label}</div>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <div key={subItem.id}>
                            {subItem.isExternal ? (
                              <Link
                                href={subItem.href || '#'}
                                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            ) : (
                              <button
                                onClick={() => scrollTo(subItem.id)}
                                className="text-gray-600 hover:text-blue-600 transition-colors w-full text-left"
                              >
                                {subItem.label}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : item.isExternal ? (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-gray-600 hover:text-blue-600 transition-colors w-full text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

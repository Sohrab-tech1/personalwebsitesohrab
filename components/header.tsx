'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  id: string;
  label: string;
  href?: string;
  isExternal?: boolean;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (item: NavItem) => {
    setIsMobileMenuOpen(false)
    
    if (item.isExternal && item.href) {
      router.push(item.href)
      return
    }

    if (pathname === '/') {
      // On homepage, use smooth scroll
      const element = document.getElementById(item.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // On other pages, navigate to homepage with hash
      router.push(`/#${item.id}`)
    }
  }

  const navigationItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { 
      id: 'blog', 
      label: 'Latest Insights',
      href: '/blog',
      isExternal: true 
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
                {item.isExternal ? (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors group"
                  >
                    {item.label}
                    <ExternalLinkIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavigation(item)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                )}
                
                {/* Hover Preview */}
                <AnimatePresence>
                  {hoveredItem === item.id && item.isExternal && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 -left-4 bg-white rounded-lg shadow-lg p-2 min-w-[200px] text-sm"
                    >
                      <div className="text-gray-600">
                        <p className="font-medium mb-1">Latest Insights</p>
                        <p className="text-xs text-gray-500">
                          Read our latest articles and insights about AI, technology, and business.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
              {navigationItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.isExternal ? (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center gap-1 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                      <ExternalLinkIcon className="h-3 w-3" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="py-2 text-gray-600 hover:text-blue-600 transition-colors w-full text-left"
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


'use client';

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer-gradient text-gray-700 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://www.linkedin.com/in/sohrabf/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:sf@sohrab.se" className="hover:text-blue-600 transition-colors transform hover:scale-110">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>
        <motion.p 
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="tel:+46761875511" className="hover:underline hover:text-blue-600 transition-colors">+46 76 187 55 11</Link>
        </motion.p>
        <motion.p 
          className="text-sm text-gray-500"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Sohrab Fadai. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}


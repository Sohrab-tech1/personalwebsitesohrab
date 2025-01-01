'use client';

import { type FC } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Constants
const HERO_IMAGE_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sohrab%20bild.jpg-G5oEUbPlJzGUJldrtfyUNqDiixx9BI.jpeg'
const BLUR_DATA_URL = 'data:image/jpeg;base64,...' // Add your base64 blur image

// Types
interface HeroProps {
  className?: string
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Hero: FC<HeroProps> = ({ className }) => {
  // Handlers
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      className="min-h-screen flex items-center bg-gradient-light"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Container */}
          <motion.div 
            className="relative h-[500px] lg:h-[600px] order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE_URL}
                alt="Sohrab Fadai - Founder, CTO and Co-CEO at Heartspace"
                fill
                priority
                quality={90}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover object-[50%_35%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div 
            className="order-1 lg:order-2 lg:pl-12"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
              variants={itemVariants}
            >
              Sohrab Fadai
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-700"
              variants={itemVariants}
            >
              Built the cleantech ghostwriter that never sleeps. Founder, CTO and Co-CEO at Heartspace, creating AI-powered content for fast-growing scale-ups.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 text-white button-gradient hover:scale-105 transition-transform duration-300"
                onClick={handleContactClick}
                aria-label="Contact Sohrab Fadai"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


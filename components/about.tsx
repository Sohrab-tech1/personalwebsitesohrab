'use client';

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

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

// Types
interface AboutProps {
  className?: string
}

const About: FC<AboutProps> = ({ className }) => {
  return (
    <section 
      id="about" 
      className="py-24 bg-gradient-vibrant"
      aria-label="About Sohrab Fadai"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
          </motion.div>
          
          <Card className="max-w-4xl mx-auto shadow-2xl hover:shadow-blue-200 transition-all duration-300 backdrop-blur-sm bg-white/80">
            <CardContent className="p-8 sm:p-10">
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-lg leading-relaxed text-gray-700"
                  variants={itemVariants}
                >
                  I&apos;m Sohrab, I have a multifaceted background in entrepreneurship, PR, and technology. 
                  As the Founder, CTO, and Co-CEO of <a href="https://www.heartspace.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Heartspace</a>, I&apos;ve developed <a href="https://www.heartspace.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">NirvanaAI</a>, an industry 
                  expert ghostwriter that helps CMOs create compliant, high-quality content automatically.
                </motion.p>
                <motion.p 
                  className="text-lg leading-relaxed text-gray-700"
                  variants={itemVariants}
                >
                  My journey combines technical expertise with business acumen, allowing me to bridge 
                  the gap between innovative AI solutions and real-world business challenges. I&apos;m 
                  passionate about leveraging technology to solve complex problems and create meaningful impact.
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About


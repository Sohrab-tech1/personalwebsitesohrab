'use client';

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    "AI Ghostwriting", "Content Creation", "PR & Communication",
    "Entrepreneurship", "Full-stack Engineering", "ML-ops",
    "Prompt Engineering", "Cloud Applications", "Docker",
    "Computer Vision", "Social Sustainability", "Leadership"
  ]

  const languages = [
    "Swedish (Native)", "Farsi (Native)", "English (Full Professional)"
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-vibrant relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Skills & Languages
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-700">Top Skills</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-base py-2 px-4 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-700">Languages</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="outline" 
                  className="text-base py-2 px-4 border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  {language}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


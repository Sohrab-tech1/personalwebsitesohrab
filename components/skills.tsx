'use client';

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

// Types
interface Skill {
  category: string
  items: string[]
}

interface SkillsProps {
  className?: string
}

// Constants
const skills: Skill[] = [
  {
    category: "Technical Skills",
    items: [
      "AI & Machine Learning",
      "Full-Stack Development",
      "Cloud Architecture",
      "System Design",
      "API Development",
      "DevOps & CI/CD"
    ]
  },
  {
    category: "Business & Leadership",
    items: [
      "Strategic Planning",
      "Team Leadership",
      "Product Management",
      "Business Development",
      "Stakeholder Management",
      "Public Relations"
    ]
  },
  {
    category: "Industry Knowledge",
    items: [
      "Clean Technology",
      "Sustainability",
      "Content Marketing",
      "PR & Communications",
      "Startup Ecosystem",
      "Venture Capital"
    ]
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Skills: FC<SkillsProps> = ({ className }) => {
  return (
    <section 
      id="skills" 
      className="py-24 bg-gradient-to-b from-white to-gray-50"
      aria-label="Professional Skills"
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {skills.map((skillSet, index) => (
              <motion.div
                key={`skill-${index}`}
                variants={itemVariants}
                className="flex"
              >
                <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {skillSet.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillSet.items.map((skill, skillIndex) => (
                        <li 
                          key={`${skill}-${skillIndex}`}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


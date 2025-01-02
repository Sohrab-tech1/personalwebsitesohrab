'use client';

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { type Language } from '@/lib/i18n/dictionaries'

// Content translations
const content = {
  en: {
    title: "Skills & Expertise",
    categories: [
      {
        title: "AI & Machine Learning",
        skills: [
          "Large Language Models",
          "Natural Language Processing",
          "AI Strategy & Implementation",
          "Prompt Engineering",
          "AI Ethics & Governance"
        ]
      },
      {
        title: "Software Development",
        skills: [
          "Full-Stack Development",
          "Cloud Architecture",
          "API Design",
          "System Integration",
          "DevOps & CI/CD"
        ]
      },
      {
        title: "Business & Strategy",
        skills: [
          "Tech Leadership",
          "Product Strategy",
          "Team Management",
          "Stakeholder Communication",
          "Growth Strategy"
        ]
      }
    ]
  },
  sv: {
    title: "Kompetenser & Expertis",
    categories: [
      {
        title: "AI & Maskininlärning",
        skills: [
          "Stora Språkmodeller",
          "Naturlig Språkbehandling",
          "AI-strategi & Implementering",
          "Prompt Engineering",
          "AI-etik & Styrning"
        ]
      },
      {
        title: "Mjukvaruutveckling",
        skills: [
          "Full-Stack Utveckling",
          "Molnarkitektur",
          "API-design",
          "Systemintegration",
          "DevOps & CI/CD"
        ]
      },
      {
        title: "Affärer & Strategi",
        skills: [
          "Tekniskt Ledarskap",
          "Produktstrategi",
          "Teamledning",
          "Intressentkommunikation",
          "Tillväxtstrategi"
        ]
      }
    ]
  }
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

interface SkillsProps {
  className?: string
  lang: Language
}

const Skills: FC<SkillsProps> = ({ className, lang }) => {
  return (
    <section 
      id="skills" 
      className="py-24 bg-white"
      aria-label="Skills and Expertise"
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
              {content[lang].title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content[lang].categories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li 
                          key={skill}
                          className="text-gray-700 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
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


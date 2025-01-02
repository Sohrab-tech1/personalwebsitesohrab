'use client';

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { type Language } from '@/lib/i18n/dictionaries'

// Content translations
const content = {
  en: {
    title: "Experience",
    experiences: [
      {
        title: "Founder, CTO and Co-CEO",
        company: "Heartspace",
        date: "August 2022 - Present",
        description: "Leading the development of NirvanaAI, an AI-powered ghostwriter for CMOs in regulated industries like clean-tech. Reduced reliance on agencies and kept brands visible 24/7."
      },
      {
        title: "Founder",
        company: "Heartspace (PR Agency)",
        date: "March 2021 - August 2022",
        description: "Took Heartspace from 0 to 1MSEK in revenue, working with major brands and organizations while maintaining ethical standards. Specialized in sustainability-focused PR."
      },
      {
        title: "PR Consultant",
        company: "Westander",
        date: "April 2020 - September 2020",
        description: "Worked on media relations, opinion formation, and lobbying, specializing in labor market, entrepreneurship, and social sustainability issues."
      },
      {
        title: "Regional Director of Operations",
        company: "Företagarna",
        date: "November 2013 - May 2018",
        description: "Led opinion work towards decision-makers, presented reports, and served as regional spokesperson. Grew regional social media presence and produced member magazine 'Dalaföretagaren'."
      }
    ]
  },
  sv: {
    title: "Erfarenhet",
    experiences: [
      {
        title: "Grundare, CTO och Co-VD",
        company: "Heartspace",
        date: "Augusti 2022 - Nu",
        description: "Leder utvecklingen av NirvanaAI, en AI-driven spökskrivare för marknadschefer i reglerade branscher som cleantech. Minskade beroendet av byråer och höll varumärken synliga dygnet runt."
      },
      {
        title: "Grundare",
        company: "Heartspace (PR-byrå)",
        date: "Mars 2021 - Augusti 2022",
        description: "Tog Heartspace från 0 till 1MSEK i omsättning, arbetade med stora varumärken och organisationer samtidigt som vi upprätthöll etiska standarder. Specialiserade oss på hållbarhetsfokuserad PR."
      },
      {
        title: "PR-konsult",
        company: "Westander",
        date: "April 2020 - September 2020",
        description: "Arbetade med medierelationer, opinionsbildning och lobbying, med specialisering inom arbetsmarknad, företagande och social hållbarhet."
      },
      {
        title: "Regional Verksamhetschef",
        company: "Företagarna",
        date: "November 2013 - Maj 2018",
        description: "Ledde opinionsarbete mot beslutsfattare, presenterade rapporter och var regional talesperson. Utvecklade regional närvaro i sociala medier och producerade medlemstidningen 'Dalaföretagaren'."
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

interface ExperienceProps {
  className?: string
  lang: Language
}

const Experience: FC<ExperienceProps> = ({ className, lang }) => {
  return (
    <section 
      id="experience" 
      className="py-24 bg-gradient-light"
      aria-label="Professional Experience"
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

          <div className="grid gap-8 max-w-4xl mx-auto">
            {content[lang].experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                variants={itemVariants}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-medium text-blue-600">
                            {experience.company}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                          {experience.date}
                        </p>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
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

export default Experience


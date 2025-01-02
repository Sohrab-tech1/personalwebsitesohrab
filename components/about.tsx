'use client';

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { type Language } from '@/lib/i18n/dictionaries'

const content = {
  en: {
    title: "About Me",
    paragraphs: [
      "I am a tech entrepreneur focused on AI and automation. At Heartspace, I lead the development of AI solutions that help scale-ups communicate more effectively.",
      "I built the first fully autonomous AI ghostwriter that learns the user's industry and follows developments in real-time, making it possible for users to create high-quality and current content in minutes instead of days/weeks.", 
      "My focus is on practical AI implementation that delivers measurable business value. I share insights and methods that I hope can help others and increase the adoption of AI technology in society",
    ]
  },
  sv: {
    title: "Om Mig",
    paragraphs: [
      "Jag är en tech-entreprenör med fokus på AI och automation. På Heartspace leder jag utvecklingen av AI-lösningar som hjälper scale-ups att kommunicera mer effektivt.",
      "Jag byggde det första helt autonoma AI-spökskrivaren som lär sig användarens bransch och följer utvecklingen i realtid, vilket gör det möjligt för användarna att skapa högkvalitivt och aktuellt innehåll på minuter istället för dagar/veckor.",
      "Mitt fokus ligger på praktisk AI-implementering som ger mätbart affärsvärde. Jag delar insikter och metoder som jag hoppas kan hjälpa andra och öka adoptionen av AI teknologiu i samhället",
    ]
  }
}

interface AboutProps {
  className?: string
  lang: Language
}

const About: FC<AboutProps> = ({ className, lang }) => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-light"
      aria-label={content[lang].title}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {content[lang].title}
          </h2>
          <div className="space-y-6">
            {content[lang].paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

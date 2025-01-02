'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, UserPlus, BookOpen } from 'lucide-react'
import { type Language } from '@/lib/i18n/dictionaries'
import LanguageSelector from '@/components/language-selector'

// Content translations
const content = {
  en: {
    title: "AI Strategy & Implementation Services",
    subtitle: "Expert guidance to help your organization leverage AI effectively and ethically",
    cta: "Book a Free Consultation",
    services: [
      {
        title: "Group AI Strategy Workshop",
        description: "Interactive workshop for leadership teams to develop AI strategy and implementation roadmap.",
        features: [
          "AI readiness assessment",
          "Opportunity identification",
          "Risk analysis and mitigation",
          "Implementation roadmap",
          "Change management strategy"
        ],
        duration: "Full day workshop",
        price: "Contact for pricing"
      },
      {
        title: "Individual AI Consultation",
        description: "One-on-one strategic consultation for business leaders and decision makers.",
        features: [
          "Personalized AI strategy",
          "Technical implementation guidance",
          "ROI analysis",
          "Resource planning",
          "Ongoing support"
        ],
        duration: "2 hour session",
        price: "1500 SEK/hour"
      },
      {
        title: "AI Implementation Course",
        description: "Comprehensive training program for teams implementing AI solutions.",
        features: [
          "Technical best practices",
          "Ethical considerations",
          "Practical exercises",
          "Case studies",
          "Implementation templates"
        ],
        duration: "6 week program",
        price: "Contact for pricing"
      }
    ]
  },
  sv: {
    title: "AI-strategi & Implementeringstjänster",
    subtitle: "Expert vägledning för att hjälpa din organisation att utnyttja AI effektivt och etiskt",
    cta: "Boka en Gratis Konsultation",
    services: [
      {
        title: "Grupp AI-strategiworkshop",
        description: "Interaktiv workshop för ledningsgrupper för att utveckla AI-strategi och implementeringsplan.",
        features: [
          "AI-mognadsbedömning",
          "Möjlighetsidentifiering",
          "Riskanalys och riskhantering",
          "Implementeringsplan",
          "Förändringsledningsstrategi"
        ],
        duration: "Heldagsworkshop",
        price: "Kontakta för pris"
      },
      {
        title: "Individuell AI-konsultation",
        description: "En-till-en strategisk konsultation för företagsledare och beslutsfattare.",
        features: [
          "Personlig AI-strategi",
          "Teknisk implementeringsvägledning",
          "ROI-analys",
          "Resursplanering",
          "Löpande support"
        ],
        duration: "2 timmars session",
        price: "1500 SEK/timme"
      },
      {
        title: "AI-implementeringskurs",
        description: "Omfattande utbildningsprogram för team som implementerar AI-lösningar.",
        features: [
          "Tekniska best practices",
          "Etiska överväganden",
          "Praktiska övningar",
          "Fallstudier",
          "Implementeringsmallar"
        ],
        duration: "6 veckors program",
        price: "Kontakta för pris"
      }
    ]
  }
}

interface ServicesPageProps {
  lang: Language
}

const ServicesPage: FC<ServicesPageProps> = ({ lang }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-light">
      <LanguageSelector />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {content[lang].title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[lang].subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content[lang].services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  {service.title.includes('Group') || service.title.includes('Grupp') ? (
                    <Users className="w-12 h-12 text-blue-600 mb-4" />
                  ) : service.title.includes('Individual') || service.title.includes('Individuell') ? (
                    <UserPlus className="w-12 h-12 text-blue-600 mb-4" />
                  ) : (
                    <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                  )}
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>{service.duration}</span>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-3 text-white button-gradient"
          >
            {content[lang].cta}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage 
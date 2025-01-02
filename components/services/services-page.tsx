'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, UserPlus, BookOpen } from 'lucide-react'
import { type Dictionary } from '@/lib/i18n/dictionaries'
import LanguageSelector from '@/components/language-selector'

interface ServicesPageProps {
  dictionary: Dictionary['services']
}

const ServicesPage: FC<ServicesPageProps> = ({ dictionary }) => {
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
            {dictionary.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {dictionary.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  {/* Render icon component based on service type */}
                  {service.title.includes('Group') && <Users className="w-12 h-12 text-blue-600 mb-4" />}
                  {service.title.includes('Individual') && <UserPlus className="w-12 h-12 text-blue-600 mb-4" />}
                  {service.title.includes('Course') && <BookOpen className="w-12 h-12 text-blue-600 mb-4" />}
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
            {dictionary.cta}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage 
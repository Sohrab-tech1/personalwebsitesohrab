'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, UserPlus, BookOpen } from 'lucide-react'

const services = [
  {
    title: "AI Strategy Workshops",
    description: "Intensive workshops helping businesses integrate AI effectively into their operations.",
    icon: Users,
    features: [
      "Full-day or half-day sessions",
      "Customized for your industry",
      "Hands-on exercises with AI tools",
      "Implementation roadmap creation"
    ],
    price: "From $2,500",
    duration: "4-8 hours"
  },
  {
    title: "Executive Coaching",
    description: "One-on-one coaching sessions for leaders navigating the AI landscape.",
    icon: UserPlus,
    features: [
      "Personalized guidance",
      "AI integration strategy",
      "Leadership in the AI era",
      "Monthly progress reviews"
    ],
    price: "From $500/session",
    duration: "90 minutes"
  },
  {
    title: "Corporate Seminars",
    description: "Educational seminars on AI, PR, and business transformation.",
    icon: BookOpen,
    features: [
      "Customized content",
      "Interactive sessions",
      "Case studies",
      "Q&A sessions"
    ],
    price: "From $5,000",
    duration: "2-4 hours"
  },
  {
    title: "AI Implementation Program",
    description: "Comprehensive program for businesses ready to transform with AI.",
    icon: BookOpen,
    features: [
      "3-month program",
      "Weekly consultations",
      "Team training",
      "Implementation support"
    ],
    price: "Custom pricing",
    duration: "3 months"
  }
]

const ServicesPage: FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Services & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with AI-driven solutions through workshops, coaching, and implementation programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
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
            onClick={() => window.open('https://bit.ly/sohrabcal', '_blank')}
            className="text-lg px-8 py-3 text-white button-gradient"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage 
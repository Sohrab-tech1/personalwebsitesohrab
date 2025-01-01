'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Calendar, Building2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
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

  return (
    <section id="experience" className="py-24 bg-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2 text-blue-700">
                    <Building2 className="h-5 w-5" />
                    {exp.title} at {exp.company}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    {exp.date}
                  </div>
                  <p className="text-base leading-relaxed text-gray-700">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  const educations = [
    {
      degree: "Bachelor's degree in Rhetoric and Communication, Media History and Analysis",
      institution: "Uppsala universitet",
      year: "2020"
    },
    {
      degree: "Höj Rösten politikerskola",
      institution: "",
      year: "2017 - 2018"
    },
    {
      degree: "IVLP, International Visitors Leadership Programme, Entrepreneurship and Small Business Development",
      institution: "",
      year: "2017"
    }
  ]

  const certifications = [
    "Generative AI for Business Leaders",
    "DevOps Foundations",
    "JavaScript Essential Training",
    "NoSQL Essential Training",
    "HTML Essential Training"
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 justify-center">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


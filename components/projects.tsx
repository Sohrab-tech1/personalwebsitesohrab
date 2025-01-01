'use client';

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Types
interface Project {
  title: string
  description: string
  details: string
  link?: string
}

interface ProjectsProps {
  className?: string
}

// Constants
const projects: Project[] = [
  {
    title: "NirvanaAI",
    description: "An AI-powered ghostwriter for CMOs in regulated industries, automating high-quality content creation.",
    details: "NirvanaAI is a cutting-edge platform that leverages advanced AI technology to create compliant, high-quality content for CMOs in regulated industries. The platform features automated content generation, compliance checking, and industry-specific knowledge integration. It helps reduce the reliance on traditional agencies while maintaining consistent brand visibility 24/7.",
    link: "https://heartspace.ai"
  },
  {
    title: "YEoS Ventures",
    description: "Partner & Angel Investor, supporting innovative startups and entrepreneurs.",
    details: "YEoS Ventures is a venture capital initiative focused on supporting early-stage startups and entrepreneurs. We provide not just financial investment but also strategic guidance, networking opportunities, and mentorship. Our portfolio includes innovative companies in technology, sustainability, and social impact sectors.",
    link: "https://yeos.ventures"
  },
  {
    title: "My Dream Now",
    description: "Board Member for an impact company connecting young people with the labor market to prevent unemployment.",
    details: "My Dream Now is a social impact organization that bridges the gap between young talent and employment opportunities. As a board member, I've helped shape strategies to prevent youth unemployment through early career guidance, mentorship programs, and direct connections with potential employers. The initiative has successfully helped numerous young people find their career paths and secure meaningful employment.",
    link: "https://mydreamnow.se"
  }
]

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

const Projects: FC<ProjectsProps> = ({ className }) => {
  return (
    <section 
      id="projects" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-label="Featured Projects"
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                variants={itemVariants}
                className="flex"
              >
                <Card className="w-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <p className="text-gray-700 text-sm mb-6">
                        {project.details}
                      </p>
                    </div>
                    {project.link && (
                      <Button
                        variant="outline"
                        className="w-full mt-4 hover:bg-blue-50 transition-colors"
                        onClick={() => window.open(project.link, '_blank', 'noopener noreferrer')}
                      >
                        Learn More
                        <span className="sr-only">about {project.title}</span>
                      </Button>
                    )}
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

export default Projects


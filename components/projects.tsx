'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProjectModal } from './project-modal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "NirvanaAI",
      description: "An AI-powered ghostwriter for CMOs in regulated industries, automating high-quality content creation.",
      details: "NirvanaAI is a cutting-edge platform that leverages advanced AI technology to create compliant, high-quality content for CMOs in regulated industries. The platform features automated content generation, compliance checking, and industry-specific knowledge integration. It helps reduce the reliance on traditional agencies while maintaining consistent brand visibility 24/7.",
    },
    {
      title: "YEoS Ventures",
      description: "Partner & Angel Investor, supporting innovative startups and entrepreneurs.",
      details: "YEoS Ventures is a venture capital initiative focused on supporting early-stage startups and entrepreneurs. We provide not just financial investment but also strategic guidance, networking opportunities, and mentorship. Our portfolio includes innovative companies in technology, sustainability, and social impact sectors.",
    },
    {
      title: "My Dream Now",
      description: "Board Member for an impact company connecting young people with the labor market to prevent unemployment.",
      details: "My Dream Now is a social impact organization that bridges the gap between young talent and employment opportunities. As a board member, I've helped shape strategies to prevent youth unemployment through early career guidance, mentorship programs, and direct connections with potential employers. The initiative has successfully helped numerous young people find their career paths and secure meaningful employment.",
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="mb-4 text-base flex-grow">{project.description}</CardDescription>
                  <Button 
                    onClick={() => setSelectedProject(index)}
                    className="w-full mt-4 transform hover:scale-105 transition-transform"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </section>
  )
}


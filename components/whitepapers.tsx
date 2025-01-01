'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'

const whitepapers = [
  {
    title: "My AI-Stack",
    description: "Practical steps for building AI solutions that are production-ready.",
    icon: FileText,
  },
  {
    title: "The AI-Driven PR-Stack",
    description: "How Heartspace, NirvanaAI, and other AI tools can help secure wide-ranging media coverage without hefty PR agency fees.",
    icon: FileText,
  },
  {
    title: "AI-Driven Storytelling & Social Selling",
    description: "Methods to boost brand presence and drive sales using targeted AI insights.",
    icon: FileText,
  },
]

export default function Whitepapers() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Free AI-Focused Whitepapers
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {whitepapers.map((whitepaper, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <whitepaper.icon className="w-10 h-10 mb-4 text-blue-600" />
                <CardTitle>{whitepaper.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{whitepaper.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-3 text-white button-gradient"
            onClick={scrollToContact}
          >
            Get Your Custom Whitepapers & Analysis
          </Button>
        </div>
      </div>
    </section>
  )
}


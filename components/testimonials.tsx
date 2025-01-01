'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Sohrab's guidance was instrumental in increasing our sales by 47% in 2019 while turning losses into profits. His focus on identifying and working with ideal customers transformed our sales process.",
    author: "Anders Björnlund",
    role: "HRM Management, Outokumpu Avesta"
  },
  {
    text: "At Westander, Sohrab excelled in PR, lobbying, and media relations. His strategic thinking, proactive approach, and exceptional ability to build constructive relationships made him a highly valued team member.",
    author: "Sebastian Stjern",
    role: "Head of Corporate Communications, Westander"
  },
  {
    text: "Sohrab is professional, quick-thinking, and analytical with a calm and trustworthy presence. I highly recommend working with him given the opportunity.",
    author: "Nils Grunditz",
    role: "Country Director, Enerz Sweden"
  },
  {
    text: "I received fantastic help from Sohrab with our press release. He truly captured the essence of our message and brought innovative ideas to the table. His follow-up exceeded all expectations.",
    author: "Stefan Bergfeldt",
    role: "Senior Master Developer"
  },
  {
    text: "Sohrab's course on Ethical Sales not only provided knowledge but ensured its practical application. His follow-up transformed theory into action - I'm extremely satisfied with the entire approach.",
    author: "Ronnie Carlsson",
    role: "ICF Associate Certified Coach"
  },
  {
    text: "Wise, networking-oriented, rhetorically skilled, and pleasant to work with. Driven to create business through networking.",
    author: "Åsa Svedjetun",
    role: "Business Developer, Archus Development AB"
  },
  {
    text: "A skilled salesperson and lecturer with an amazing ability to inspire and share knowledge. Sohrab combines expertise in communication and entrepreneurship with strong values.",
    author: "Maria Lindén",
    role: "Business Coach"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gradient-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 -top-4 text-blue-600/20">
            <Quote size={80} />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="pt-6 px-8 pb-8">
                  <blockquote className="text-lg sm:text-xl text-gray-700 text-center mb-6 relative z-10">
                    "{testimonials[current].text}"
                  </blockquote>
                  <div className="text-center">
                    <cite className="not-italic font-semibold text-blue-600">
                      {testimonials[current].author}
                    </cite>
                    <p className="text-sm text-gray-500 mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-6 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-blue-600 w-4' : 'bg-blue-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


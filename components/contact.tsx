'use client';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, ArrowRight, CheckCircle2 } from 'lucide-react'
import confetti from 'canvas-confetti'
import { type Language } from '@/lib/i18n/dictionaries'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  industry: z.string().min(2, { message: "Please select an industry." }),
  aiGoal: z.string().min(2, { message: "Please select a primary AI goal." }),
  challenge: z.string().min(10, { message: "Challenge must be at least 10 characters." }),
  whitepapers: z.array(z.string()).min(1, { message: "Please select at least one whitepaper." }),
  subscribeNewsletter: z.boolean().default(false),
  acceptTerms: z.boolean().default(false)
}).refine((data) => {
  if (data.subscribeNewsletter) {
    return data.acceptTerms === true;
  }
  return true;
}, {
  message: "You must accept the terms to subscribe to the newsletter",
  path: ["acceptTerms"]
});

type FormData = z.infer<typeof formSchema>

const industries = [
  "Technology", "Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Other"
]

const aiGoals = [
  "Better PR coverage", "Increased revenue", "AI solution deployment", "Other"
]

const whitepapers = [
  { id: "ai-stack", label: "My AI-Stack" },
  { id: "ai-pr-stack", label: "The AI-Driven PR-Stack" },
  { id: "ai-storytelling", label: "AI-Driven Storytelling & Social Selling" },
]

const steps = [
  { field: 'name', question: "What's your name?", placeholder: "Enter your name" },
  { field: 'email', question: "What's your email address?", placeholder: "Enter your email" },
  { field: 'company', question: "What's your company or organization name?", placeholder: "Enter your company name" },
  { field: 'industry', question: "What industry are you in?", placeholder: "Select your industry" },
  { field: 'aiGoal', question: "What's your primary AI goal?", placeholder: "Select your primary AI goal" },
  { field: 'challenge', question: "What's your specific AI challenge or pain point?", placeholder: "Describe your challenge" },
  { field: 'whitepapers', question: "Which whitepapers are you interested in?", placeholder: "Select whitepapers" },
]

// Content translations
const content = {
  en: {
    title: "Get Your Custom AI Whitepapers & Analysis",
    success: {
      title: "Thank you for reaching out!",
      message: "We'll review your information and get back to you within 48 hours with a custom AI analysis for your company."
    },
    steps: [
      { question: "What's your name?", field: "name", placeholder: "Full name" },
      { question: "What's your email?", field: "email", placeholder: "Work email" },
      { question: "Where do you work?", field: "company", placeholder: "Company name" },
      { question: "What industry are you in?", field: "industry", placeholder: "Select your industry" },
      { question: "What's your AI goal?", field: "aiGoal", placeholder: "Select your primary goal" },
      { question: "What's your biggest challenge?", field: "challenge", placeholder: "Describe your main challenge..." },
      { question: "Which whitepapers interest you?", field: "whitepapers", placeholder: "Select whitepapers" }
    ],
    newsletter: {
      subscribe: "Subscribe to our newsletter for AI and technology updates",
      terms: "I agree to receive newsletter emails and accept the",
      privacy: "privacy policy"
    },
    buttons: {
      back: "Back",
      next: "Next",
      submit: "Get My Whitepapers",
      sending: "Sending..."
    }
  },
  sv: {
    title: "Få Dina Skräddarsydda AI-Whitepapers & Analys",
    success: {
      title: "Tack för din förfrågan!",
      message: "Vi kommer att granska din information och återkomma inom 48 timmar med en anpassad AI-analys för ditt företag."
    },
    steps: [
      { question: "Vad heter du?", field: "name", placeholder: "Fullständigt namn" },
      { question: "Vad är din e-post?", field: "email", placeholder: "Arbets-e-post" },
      { question: "Var jobbar du?", field: "company", placeholder: "Företagsnamn" },
      { question: "Vilken bransch är du i?", field: "industry", placeholder: "Välj din bransch" },
      { question: "Vad är ditt AI-mål?", field: "aiGoal", placeholder: "Välj ditt primära mål" },
      { question: "Vad är din största utmaning?", field: "challenge", placeholder: "Beskriv din huvudutmaning..." },
      { question: "Vilka whitepapers intresserar dig?", field: "whitepapers", placeholder: "Välj whitepapers" }
    ],
    newsletter: {
      subscribe: "Prenumerera på vårt nyhetsbrev för AI- och teknikuppdateringar",
      terms: "Jag godkänner att ta emot nyhetsbrev och accepterar",
      privacy: "integritetspolicyn"
    },
    buttons: {
      back: "Tillbaka",
      next: "Nästa",
      submit: "Få Mina Whitepapers",
      sending: "Skickar..."
    }
  }
}

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const { register, handleSubmit, control, formState: { errors }, trigger, watch, setValue } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  })

  const subscribeNewsletter = watch('subscribeNewsletter')

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // First send the contact form email
      console.log('Starting contact form email submission...')
      const emailResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!emailResponse.ok) {
        const emailData = await emailResponse.json()
        throw new Error(`Failed to send contact form: ${emailData.error || 'Unknown error'}`)
      }

      // Then handle newsletter subscription if selected
      if (data.subscribeNewsletter && data.acceptTerms) {
        console.log('Starting newsletter subscription...')
        
        const newsletterResponse = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            firstName: data.name.split(' ')[0],
          }),
        })

        if (!newsletterResponse.ok) {
          const newsletterData = await newsletterResponse.json()
          console.error('Newsletter error:', newsletterData)
          // Don't throw error for newsletter failure
          console.warn('Newsletter subscription failed but continuing with form submission')
        }
      }

      // Success!
      setSubmitSuccess(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    } catch (error) {
      console.error('Full submission error:', error)
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again later.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    const currentField = steps[currentStep].field
    const isValid = await trigger(currentField as keyof FormData)
    
    // For the final step, check newsletter terms if needed
    if (currentStep === steps.length - 1 && subscribeNewsletter) {
      const termsValid = await trigger('acceptTerms')
      if (!termsValid) return
    }
    
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const renderFormField = (step: typeof steps[0]) => {
    switch (step.field) {
      case 'name':
      case 'email':
      case 'company':
        return (
          <Input
            id={step.field}
            {...register(step.field as keyof FormData)}
            placeholder={step.placeholder}
            className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400"
          />
        )
      case 'industry':
      case 'aiGoal':
        return (
          <Controller
            name={step.field as keyof FormData}
            control={control}
            render={({ field }) => (
              <Select 
                onValueChange={field.onChange} 
                value={field.value?.toString()} // Convert potential array to string
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={step.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {(step.field === 'industry' ? industries : aiGoals).map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )
      case 'challenge':
        return (
          <Textarea
            id={step.field}
            {...register(step.field)}
            placeholder={step.placeholder}
            className="w-full h-32 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
          />
        )
      case 'whitepapers':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              {whitepapers.map((whitepaper) => (
                <div key={whitepaper.id} className="flex items-center space-x-2">
                  <Controller
                    name="whitepapers"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Checkbox
                        id={whitepaper.id}
                        checked={field.value?.includes(whitepaper.id)}
                        onCheckedChange={(checked) => {
                          const updatedValue = checked
                            ? [...(field.value || []), whitepaper.id]
                            : (field.value || []).filter((value: string) => value !== whitepaper.id);
                          field.onChange(updatedValue);
                        }}
                      />
                    )}
                  />
                  <Label htmlFor={whitepaper.id}>{whitepaper.label}</Label>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Controller
                  name="subscribeNewsletter"
                  control={control}
                  defaultValue={false}
                  render={({ field: { value, onChange } }) => (
                    <Checkbox
                      id="newsletter"
                      checked={value}
                      onCheckedChange={(checked) => {
                        onChange(checked)
                        if (!checked) {
                          setValue('acceptTerms', false)
                        }
                      }}
                    />
                  )}
                />
                <Label htmlFor="newsletter">
                  Subscribe to our newsletter for AI and technology updates
                </Label>
              </div>

              <div 
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  subscribeNewsletter ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'
                }`}
              >
                <Controller
                  name="acceptTerms"
                  control={control}
                  defaultValue={false}
                  render={({ field: { value, onChange } }) => (
                    <Checkbox
                      id="terms"
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  )}
                />
                <Label htmlFor="terms">
                  I agree to receive newsletter emails and accept the{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                </Label>
              </div>

              {errors.acceptTerms && subscribeNewsletter && (
                <p className="text-red-500 text-sm">
                  {errors.acceptTerms.message}
                </p>
              )}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const currentProgress = ((currentStep + 1) / steps.length) * 100

  return (
    <section id="contact" className="py-20 bg-gradient-light min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          {content[language].title}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6"
              >
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-semibold mb-4">
                        {steps[currentStep].question}
                      </h3>
                      {renderFormField(steps[currentStep])}
                      {errors[steps[currentStep].field as keyof FormData] && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors[steps[currentStep].field as keyof FormData]?.message}
                        </p>
                      )}
                      <div className="flex justify-between mt-6">
                        {currentStep > 0 && (
                          <Button type="button" variant="outline" onClick={prevStep}>
                            {content[language].buttons.back}
                          </Button>
                        )}
                        {currentStep < steps.length - 1 ? (
                          <Button 
                            type="button" 
                            className="ml-auto" 
                            onClick={nextStep}
                          >
                            {content[language].buttons.next} <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        ) : (
                          <Button 
                            type="submit" 
                            className="ml-auto button-gradient text-white" 
                            disabled={isSubmitting}
                            onClick={() => console.log('Submit button clicked')} // Debug log
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {content[language].buttons.sending}
                              </>
                            ) : (
                              content[language].buttons.submit
                            )}
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">
                        {content[language].success.title}
                      </h3>
                      <p className="text-gray-600">
                        {content[language].success.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {submitError && (
                  <p className="text-red-500 text-center mt-4">{submitError}</p>
                )}
              </form>
            </CardContent>
          </Card>
          {!submitSuccess && (
            <div className="mt-4 bg-gray-200 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}


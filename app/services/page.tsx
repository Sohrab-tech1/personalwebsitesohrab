import { type Metadata } from 'next'
import ServicesPage from '@/components/services/services-page'

export const metadata: Metadata = {
  title: 'Services | AI Workshops & Coaching',
  description: 'Transform your business with AI through workshops, executive coaching, and implementation programs.',
}

export default function Services() {
  return <ServicesPage />
} 
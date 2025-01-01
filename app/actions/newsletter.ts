'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const RESEND_API_KEY = process.env.RESEND_API_KEY as string
const NEWSLETTER_AUDIENCE_ID = process.env.NEWSLETTER_AUDIENCE_ID as string

const resend = new Resend(RESEND_API_KEY)

// Simplified schema since we're only handling email now
const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export async function subscribeToNewsletter(formData: { email: string }) {
  try {
    // Validate the email
    const { email } = NewsletterSchema.parse(formData)

    // Add contact to Resend audience
    const response = await fetch(`https://api.resend.com/audiences/${NEWSLETTER_AUDIENCE_ID}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        unsubscribed: false
      })
    })

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to add contact to audience')
    }

    // Send welcome email
    await resend.emails.send({
      from: 'Sohrab Fadai <sohrab@heartspace.ai>',
      to: email,
      subject: 'Welcome to My Newsletter!',
      html: `
        <h1>Welcome to My Newsletter!</h1>
        <p>Thank you for subscribing! You'll receive updates about:</p>
        <ul>
          <li>AI innovations and implementations</li>
          <li>Technology trends and insights</li>
          <li>Business growth strategies</li>
        </ul>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Something went wrong' 
    }
  }
} 
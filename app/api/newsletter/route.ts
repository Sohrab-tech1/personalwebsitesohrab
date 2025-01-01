import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface NewsletterResponse {
  id: string;
  object: string;
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json()

    console.log('Adding contact to audience:', { email, firstName })

    // Format the request body according to Resend's API requirements
    const requestBody = {
      email,
      first_name: firstName,
      unsubscribed: false
    }

    console.log('Request body:', requestBody) // Debug log

    const response = await fetch(`https://api.resend.com/audiences/${process.env.NEWSLETTER_AUDIENCE_ID}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API Error:', errorData)
      throw new Error(errorData.message || 'Failed to add contact to audience')
    }

    const data: NewsletterResponse = await response.json()
    console.log('Successfully added contact to audience:', data)
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to subscribe to newsletter',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission')
    const body = await request.json()
    console.log('Request body:', body)
    
    const { name, email, company, industry, aiGoal, challenge, whitepapers, subscribeNewsletter } = body

    console.log('Sending email via Resend...')
    const response = await resend.emails.send({
      from: 'Sohrab Fadai <sohrab@heartspace.ai>',
      to: ['sohrab@heartspace.ai'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>AI Goal:</strong> ${aiGoal}</p>
        <p><strong>Challenge:</strong> ${challenge}</p>
        <p><strong>Whitepapers:</strong> ${whitepapers.join(', ')}</p>
        <p><strong>Newsletter:</strong> ${subscribeNewsletter ? 'Yes' : 'No'}</p>
      `
    })

    console.log('Email sent successfully:', response)
    return NextResponse.json({ success: true, data: response })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    )
  }
} 
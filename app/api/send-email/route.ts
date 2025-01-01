import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, industry, aiGoal, challenge, whitepapers } = await request.json();
    
    const data = await resend.emails.send({
      from: 'Sohrab Fadai <sohrab@heartspace.ai>',
      to: ['sohrab@heartspace.ai'],
      reply_to: email, // reply_to expects a string or string[] type, not an object
      subject: 'New Whitepaper Request and Contact Form Submission',
      html: `
        <h1>New Whitepaper Request and Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Primary AI Goal:</strong> ${aiGoal}</p>
        <p><strong>Challenge:</strong> ${challenge}</p>
        <p><strong>Requested Whitepapers:</strong> ${whitepapers.join(', ')}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


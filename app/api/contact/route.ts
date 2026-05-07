import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log(`Attempting to send email from ${name} (${email})`);

    const { data, error } = await resend.emails.send({
      from: 'ODS Contact <contact@ohanesiandigitalsolutions.com>',
      to: ['hello@ohanesiandigitalsolutions.com'],
      subject: `New Project Inquiry: ${name}`,
      replyTo: email,
      html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message || 'Failed to send message' }, { status: 500 });
    }

    console.log('Email sent successfully:', data?.id);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API Internal Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

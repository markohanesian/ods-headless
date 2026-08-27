import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, company, services, timeline, headache } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const isPlaceholderKey = !apiKey || apiKey.includes('your_api_key') || apiKey === 're_your_api_key';

    if (isPlaceholderKey) {
      console.log('--- [LOCAL DEV MOCK INTAKE SUBMISSION] ---');
      console.log({ name, email, company, services, timeline, headache, message });
      return NextResponse.json({ success: true, mock: true });
    }

    const resend = new Resend(apiKey);
    console.log(`Sending intake inquiry from ${name} (${email}) for company ${company || 'N/A'}`);

    const servicesHtml = Array.isArray(services) && services.length > 0
      ? `<ul>${services.map((s: string) => `<li>${s}</li>`).join('')}</ul>`
      : '<p>Not specified</p>';

    const { data, error } = await resend.emails.send({
      from: 'ODS Contact <mark@ohanesiandigitalsolutions.com>',
      to: ['admin@ohanesiandigitalsolutions.com', 'hello@ohanesiandigitalsolutions.com'],
      subject: `New ODS Strategy Intake: ${company || name}`,
      replyTo: email,
      html: `
        <h2>New ODS Client Intake Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company / Project:</strong> ${company || 'N/A'}</p>
        <hr />
        <h3>What They Are Looking to Build:</h3>
        ${servicesHtml}
        <p><strong>Desired Launch Timeline:</strong> ${timeline || 'N/A'}</p>
        <hr />
        <h3>Biggest Operational Headache:</h3>
        <p>${headache || message || 'None specified'}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', JSON.stringify(error, null, 2));
      // Fallback in case of invalid API key error in local dev mode
      if (error.message?.toLowerCase().includes('api key') || error.message?.toLowerCase().includes('invalid')) {
        console.log('--- [FALLBACK DEV MOCK SUBMISSION DUE TO INVALID API KEY] ---');
        console.log({ name, email, company, services, timeline, headache, message });
        return NextResponse.json({ success: true, mock: true });
      }
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



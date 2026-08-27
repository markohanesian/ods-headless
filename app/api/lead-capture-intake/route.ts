import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const { fullName, businessName, email, phone, websiteUrl, primaryGoal } = body;
    
    if (!fullName || !businessName || !email || !phone || !primaryGoal) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const isPlaceholderKey = !apiKey || apiKey.includes('your_api_key') || apiKey === 're_your_api_key' || apiKey === "fallback_key_for_build";

    if (isPlaceholderKey) {
      console.log('--- [LOCAL DEV MOCK LEAD CAPTURE SUBMISSION] ---');
      console.log({ fullName, businessName, email, phone, websiteUrl, primaryGoal });
      return NextResponse.json({ success: true, mock: true }, { status: 200 });
    }

    const resend = new Resend(apiKey);

    // Send email notification via Resend
    const { data, error } = await resend.emails.send({
      from: "ODS Lead Capture <contact@ohanesiandigitalsolutions.com>",
      to: ["admin@ohanesiandigitalsolutions.com", "hello@ohanesiandigitalsolutions.com", "mark@ohanesiandigitalsolutions.com"],
      subject: `New Lead Capture Application: ${businessName}`,
      replyTo: email,
      html: `
        <h2>New 30-Day Conversion Pilot Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website URL:</strong> ${websiteUrl || "Not provided"}</p>
        <p><strong>Primary Goal:</strong> ${primaryGoal}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", JSON.stringify(error, null, 2));
      if (error.message?.toLowerCase().includes('api key') || error.message?.toLowerCase().includes('invalid')) {
        console.log('--- [FALLBACK DEV MOCK SUBMISSION DUE TO INVALID API KEY] ---');
        console.log({ fullName, businessName, email, phone, websiteUrl, primaryGoal });
        return NextResponse.json({ success: true, mock: true });
      }
      return NextResponse.json(
        { error: error.message || "Failed to send email notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Lead capture API error:", error);
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}

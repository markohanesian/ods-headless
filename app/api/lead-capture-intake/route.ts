import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key_for_build");

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

    // Send email notification via Resend
    const { data, error } = await resend.emails.send({
      from: "ODS Lead Capture <onboarding@resend.dev>", // Or a verified domain sender
      to: ["mark@ohanesiandigitalsolutions.com"],
      subject: `New Lead Capture Application: ${businessName}`,
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
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email notification." },
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

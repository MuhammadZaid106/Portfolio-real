import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, stack, message } = body;

    /* ── Basic validation ────────────────────────────────────── */
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    /* ── Send email to YOU ──────────────────────────────────── */
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",   // change once domain is verified
      to: [process.env.CONTACT_EMAIL ?? "zaidnaeem106@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] New inquiry from ${fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f7faf8;padding:32px;border-radius:16px;">
          <div style="background:#0d1a12;border-radius:12px;padding:24px 28px;margin-bottom:24px;">
            <h1 style="color:#52c48a;font-size:22px;margin:0 0 4px;">New Project Inquiry</h1>
            <p style="color:#9aada3;font-size:13px;margin:0;">via zaidnaeem.vercel.app contact form</p>
          </div>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5c6c64;width:130px;font-weight:600;">Full Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#141f19;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5c6c64;font-weight:600;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#141f19;"><a href="mailto:${email}" style="color:#52c48a;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5c6c64;font-weight:600;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#141f19;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5c6c64;font-weight:600;">Stack / Service</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#141f19;">${stack}</td>
            </tr>
          </table>

          <div style="margin-top:20px;">
            <p style="font-size:13px;color:#5c6c64;font-weight:600;margin-bottom:8px;">Message</p>
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;font-size:14px;color:#141f19;line-height:1.6;white-space:pre-wrap;">${message}</div>
          </div>

          <p style="margin-top:24px;font-size:11px;color:#9aada3;text-align:center;">
            Hit Reply to respond directly to ${email}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

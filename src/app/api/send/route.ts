import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("👉 Request body:", body);

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: body.fullName,
          from_email: body.email,
          form_phone: body.phone,
          message: body.message,
        },
      }),
    });

    const data = await response.json().catch(() => ({}));
    console.log("👉 EmailJS response:", response.status, data);

    if (!response.ok) {
      throw new Error(data?.error || "EmailJS request failed");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ API send error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
"use server";

import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

// only initialize if key exists (prevents build crash)
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req) {
  try {
    const body = await req.json();

    const { success, data, error } = Email.safeParse(body);
    if (!success) {
      return Response.json({ error: error?.message }, { status: 400 });
    }

    // if resend is disabled, just return success
    if (!resend) {
      console.warn("RESEND_API_KEY not found — skipping email send.");
      return Response.json({
        success: true,
        message: "Email sending is disabled in this deployment.",
      });
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
    });

    if (resendError) {
      return Response.json({ error: resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (err) {
    console.error("API send error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

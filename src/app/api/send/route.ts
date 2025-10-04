"use server";

import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();

    const { success, data, error } = Email.safeParse(body);
    if (!success) {
      return new Response(JSON.stringify({ error: error?.message }), {
        status: 400,
      });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY not found — skipping email send.");
      return new Response(
        JSON.stringify({
          success: true,
          message: "Email sending is disabled in this deployment.",
        }),
        { status: 200 }
      );
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
      return new Response(JSON.stringify({ error: resendError }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify(resendData), { status: 200 });
  } catch (err) {
    console.error("API send error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}

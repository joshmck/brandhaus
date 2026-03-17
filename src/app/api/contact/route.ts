import { z } from "zod";
import { appendLeadRow } from "@/lib/googles-sheets";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Valid email is required"),
  phone: z.string().optional().default(""),
  business: z.string().optional().default(""),
  service: z.string().optional().default(""),
  budget: z.string().optional().default(""),
  referral: z.string().optional().default(""),
  message: z.string().min(5, "Message is required"),
  source: z.string().optional().default("Website"),
  page: z.string().optional().default("Contact"),
});

async function sendPostmarkEmail(payload: Record<string, unknown>) {
  const token = process.env.POSTMARK_SERVER_TOKEN;
  if (!token) throw new Error("Missing Postmark token");

  const res = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": token,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Postmark error: ${res.status} ${text}`);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const submittedAt = new Date().toISOString();

    await appendLeadRow([
      submittedAt,
      data.name,
      data.email,
      data.phone,
      data.business,
      data.service,
      data.budget,
      data.referral,
      data.message,
      data.source,
      "New",
      data.page,
    ]);

    const from = process.env.EMAIL_FROM;
    const adminTo = process.env.EMAIL_ADMIN_TO;

    if (!from || !adminTo) {
      throw new Error("Missing email configuration");
    }

    // Admin notification
    await sendPostmarkEmail({
      From: from,
      To: adminTo,
      Subject: "New BrandHaus enquiry",
      ReplyTo: data.email,
      TextBody: `New enquiry received

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Business: ${data.business}
Service: ${data.service}
Budget: ${data.budget}
Referral: ${data.referral}
Source: ${data.source}
Page: ${data.page}

Message:
${data.message}
`,
    });

    // Customer auto-reply
    await sendPostmarkEmail({
      From: from,
      To: data.email,
      Subject: "Thanks for getting in touch with BrandHaus",
      TextBody: `Hi ${data.name},

Thanks for getting in touch. We've received your enquiry and will come back to you as soon as possible.

— BrandHaus`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { ok: false, errors: error.issues },
        { status: 400 }
      );
    }

    const message =
      error instanceof Error ? error.message : "Something went wrong";

    return Response.json({ ok: false, message }, { status: 500 });
  }
}
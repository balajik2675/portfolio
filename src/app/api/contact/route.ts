import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * TODO: Connect this handler to Resend or EmailJS.
 *  - Resend: install `resend`, set RESEND_API_KEY, then call resend.emails.send(...)
 *  - EmailJS: usually runs in the browser; if you keep this route, forward the payload
 *    to your email provider of choice.
 *
 * Until then, we validate the payload and return success so the UI can be tested.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    // TODO: send the email here with Resend / your provider.
    console.log("[contact] message received", { name, email, messageLength: message.length });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

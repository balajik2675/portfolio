"use client";

import { site } from "@/data/content";
import { Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SocialIcons } from "./ui/SocialIcons";

type FieldErrors = { name?: string; email?: string; message?: string };

function validate(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (!message.trim()) errors.message = "Please write a short message.";
  else if (message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-hero px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent";

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-hero px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading id="contact-title" label="CONTACT" title="Let's build something together." />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Have a project, question, or opportunity? Send a message using the form, or email me
            directly. I usually reply within a couple of days.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:text-accent"
          >
            <Mail className="h-4 w-4 text-accent" aria-hidden />
            {site.email}
          </a>
          <a
            href={`tel:${site.phone}`}
            className="mt-3 flex items-center gap-2 text-sm text-white hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {site.phone}
          </a>
          <SocialIcons className="mt-6" iconClassName="h-5 w-5" />
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-white/10 bg-section p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs tracking-wide text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs tracking-wide text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={field}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs tracking-wide text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${field} resize-y`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              variant="primary"
              className="h-11 w-full text-sm font-medium"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </Button>
            {status === "ok" && (
              <p className="text-sm text-emerald-400" role="status">
                Thanks — your message was received. (Email delivery is not wired up yet.)
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

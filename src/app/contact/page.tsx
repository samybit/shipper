"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // No backend wired yet — simulate a send.
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col flex-1">
        <main className="flex-1 w-full pt-20 pb-32 px-6 md:pt-32 md:pb-40 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black font-stretched tracking-tighter mb-8 leading-none">
              Message sent
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Thanks — we&apos;ll get back to you soon.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white uppercase tracking-widest hover:text-zinc-400 transition-colors"
            >
              Back to work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 w-full pt-20 pb-32 px-6 md:pt-32 md:pb-40 md:px-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black font-stretched tracking-tighter mb-8 leading-none">
            Contact
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="What are you working on?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-mono font-medium uppercase tracking-widest text-xs rounded-lg disabled:opacity-50 disabled:pointer-events-none transition-colors hover:bg-zinc-100"
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

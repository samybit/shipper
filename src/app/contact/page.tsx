"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="contact-page">
      <div className="contact-canvas">
        <div className="contact-coordinates">TOTTENHAM<br />LONDON, UNITED KINGDOM<br />51.5072° N, 0.1276° W</div>
        <div className="contact-credit">DESIGN &amp; DEVELOPMENT BY <span>@DANNY.LINES</span></div>
        <div className="contact-title-wrap">
          <p className="contact-overline">HAVE A GOOD ONE IN MIND?</p>
          <h1>READY WHEN<br className="contact-mobile-break" /> YOU ARE.</h1>
          <div className="contact-socials">
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TIKTOK ↗</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YOUTUBE ↗</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTA ↗</a>
            <a href="#send-a-note">EMAIL US ↓</a>
          </div>
        </div>
        <div className="contact-ticker" aria-hidden="true"><div>DOUBLE OR NOTHING PRODUCTIONS&nbsp; · &nbsp;DOUBLE OR NOTHING PRODUCTIONS&nbsp; · &nbsp;DOUBLE OR NOTHING PRODUCTIONS&nbsp; · &nbsp;</div></div>
      </div>
      <aside className="contact-side">
        <div className="contact-side-frame">
          <div className="contact-side-image" role="img" aria-label="Cinematic night-time film still" />
          <div className="contact-side-count"><span>001 / 013</span><span>NEXT ↗</span></div>
        </div>
        <div className="contact-mode"><span>MODE:</span><span>COLOUR</span><span>PREV ↗</span></div>
        <div className="contact-signoff">D O N P R O D <span>✦ &nbsp;✦</span><small>©2026</small></div>
        <details className="contact-form-details" id="send-a-note">
          <summary>{sent ? "MESSAGE RECEIVED ✓" : "WRITE A NOTE +"}</summary>
          {sent ? <p className="contact-success">Thanks for reaching out. We’ll be in touch.</p> : (
            <form onSubmit={handleSubmit}>
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" required placeholder="you@email.com" /></label>
              <label>Project<textarea name="message" required rows={3} placeholder="Tell us a little about it" /></label>
              <button type="submit">SEND MESSAGE ↗</button>
            </form>
          )}
        </details>
      </aside>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  { title: "Digital", subtitle: "Born Rise Takers", year: "2026", tone: "teal" },
  { title: "Iceman", subtitle: "Kidwild — Weather the Storm", year: "2025", tone: "amber" },
  { title: "Central Cee", subtitle: "On the Road", year: "2025", tone: "blue" },
  { title: "Katro KF7", subtitle: "No Looking Back", year: "2024", tone: "green" },
];

function Loader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const started = Date.now();
    const timer = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - started) / 1850) * 100));
      setProgress(next);
      if (next === 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setLeaving(true), 280);
      }
    }, 32);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`intro-loader${leaving ? " intro-loader--leave" : ""}`} aria-label="Loading portfolio">
      <div className="loader-film" />
      <div className="loader-topline"><span>DOUBLE OR NOTHING</span><span>DN—PRD / REEL 001</span></div>
      <div className="loader-center">
        <div className="loader-mark">DN<span>·</span></div>
        <div className="loader-progress"><span style={{ width: `${progress}%` }} /></div>
        <span className="loader-number">{progress.toString().padStart(2, "0")}%</span>
      </div>
      <div className="loader-bottomline"><span>INDEPENDENT FILMMAKER</span><span>CAIRO · LONDON</span></div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 2250);
    return () => window.clearTimeout(timer);
  }, []);

  const project = projects[active];
  return (
    <>
      {!ready && <Loader />}
      <main className={`portfolio-home${ready ? " portfolio-home--ready" : ""}`}>
        <section className="reel-hero" aria-label="Selected work">
          <div className="hero-crosshair" aria-hidden="true"><i /><i /></div>
          <div className="hero-kicker">DOUBLE OR NOTHING <span>EST. MMXXI</span></div>
          <div className="brand-lockup" aria-label="DN Production">
            <div className="brand-word">DN</div>
            <div className="brand-sub">PROD<span>UCTIONS</span></div>
          </div>
          <div className={`hero-image hero-image--${project.tone}`} key={project.title}>
            <div className="hero-image-shade" />
            <div className="hero-image-copy"><span>SELECTED WORK</span><b>{project.year}</b></div>
            <button className="hero-play" aria-label={`Open ${project.title} project`} onClick={() => document.getElementById("project-reel")?.scrollIntoView({ behavior: "smooth" })}>PLAY FILM <span>↗</span></button>
          </div>
          <div className="hero-index" aria-label="Choose a project">
            {projects.slice(0, 3).map((item, index) => (
              <button key={item.title} className={active === index ? "is-active" : ""} aria-label={`Show ${item.title}`} onClick={() => setActive(index)} />
            ))}
          </div>
          <div className="hero-footer">
            <span className="micro-label">{project.title.toUpperCase()}</span>
            <span className="micro-label hero-subtitle">{project.subtitle.toUpperCase()}</span>
            <span className="micro-label">{(active + 1).toString().padStart(2, "0")} — 29</span>
          </div>
          <div className="hero-hint"><span /> SCROLL TO EXPLORE</div>
        </section>

        <section className="reel-intro" id="project-reel">
          <div className="reel-meta"><span>01 / SELECTED WORK</span><span>DIRECTOR · EDITOR · STORYTELLER</span></div>
          <div className="reel-feature reel-feature--one">
            <div className="feature-image feature-image--wide"><div className="image-caption">A FILM BY DN PRD <span>00:01:42</span></div></div>
            <h2 className="feature-heading feature-heading--right">WHY I CAME<br /><em>I’M TORN</em></h2>
          </div>
          <div className="reel-feature reel-feature--two">
            <h2 className="feature-heading feature-heading--left"><em>LET ME</em><br />DO WHAT<br /><em>I DO BEST</em></h2>
            <div className="feature-image feature-image--portrait"><div className="image-caption">ICEMAN — WEATHER THE STORM <span>2025</span></div></div>
          </div>
          <div className="reel-feature reel-feature--three">
            <div className="feature-image feature-image--small"><div className="image-caption">CENTRAL CEE <span>2025</span></div></div>
            <h2 className="feature-heading feature-heading--right">PAIN DON’T<br /><em>FADE</em></h2>
          </div>
          <div className="reel-quote"><span>“</span><p>I’VE BEEN PLACES NO-ONE GOES TO,<br />ONLY LIFE CAN TAKE YOU.</p><small>— KIDWILD</small></div>
        </section>

        <section className="project-credits">
          <div className="credits-topline"><span>02 / THE DETAILS</span><span>SCROLL THROUGH THE WORK</span></div>
          <div className="credits-grid">
            <div className="credit-block"><span className="credit-label">CREDIT</span><p>DIRECTOR<br />PRODUCER<br />PRODUCTION MANAGER<br />DOP<br />ART DIRECTION<br />EDITOR<br />COLOUR HOUSE</p></div>
            <div className="credit-block credit-names"><span className="credit-label">CREW</span><p>DON PRD<br />DON PRD<br />CAMPBELL ANDERSON<br />MARTI GUIVER<br />BEN GOMME<br />FLYNN DENNIS<br />SIMONE CHIAVINI</p></div>
            <div className="credit-block credit-project"><span className="credit-label">PROJECT</span><p>KIDWILD — WEATHER THE STORM<br />PATH TO FAME</p></div>
            <div className="credit-block credit-date"><span className="credit-label">LOCATION / DATE</span><p>LONDON<br />51.53845° N, -0.08286° W<br /><br />MARCH 2026</p></div>
          </div>
          <div className="credit-filmstrip" aria-hidden="true"><span>TRILOGY</span><span>STRUGGLE</span><span>TURBULANCE</span><span>STORM</span><span>LIGHTNING</span><span>HUSTLE</span></div>
          <div className="credit-final-frame"><div className="image-caption">THE STORY CONTINUES <span>DN—PRD</span></div></div>
          <div className="closing-line"><span>MAKE SOMETHING<br />THAT STAYS WITH YOU.</span><Link href="/contact">START A PROJECT ↗</Link></div>
        </section>
      </main>
    </>
  );
}

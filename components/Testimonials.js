"use client";

import { useEffect, useState, useCallback } from "react";

/*
  PLACEHOLDER testimonials for layout/design only.
  Replace with real, approved client quotes before relying on these publicly.
*/
const QUOTES = [
  { q: "Jessica started with one question \u2014 what should be different when everyone leaves \u2014 and it changed how we ran the entire offsite.", who: "Chief of Staff, regional health system" },
  { q: "The Agenda team handled every detail so our leaders could actually be present. It felt effortless, which I know means it wasn't.", who: "VP of Membership, national trade association" },
  { q: "We've worked with big agencies before. This was the first time the program felt designed, not just booked.", who: "Director of Events, technology company" },
  { q: "They treated our annual meeting like it mattered \u2014 because to us, it did. People are still talking about it.", who: "Executive Director, professional society" },
  { q: "Calm, precise, and genuinely invested. Jessica's editorial eye is the difference between a schedule and an experience.", who: "Head of Brand, advisory firm" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);

  const go = useCallback((next) => {
    setFade(true);
    setTimeout(() => {
      setI(next);
      setFade(false);
    }, 450);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setI((cur) => (cur + 1) % QUOTES.length);
        setFade(false);
      }, 450);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const t = QUOTES[i];
  return (
    <section className="section testi">
      <div className="wrap">
        <p className="kicker" style={{ justifyContent: "center", marginBottom: "2rem" }}>In their words</p>
        <div className="testi-stage" aria-live="polite">
          <p className={`testi-quote${fade ? " testi-fade" : ""}`}>{t.q}</p>
          <p className={`testi-attr${fade ? " testi-fade" : ""}`}>{t.who}</p>
        </div>
        <div className="testi-dots">
          {QUOTES.map((_, n) => (
            <button
              key={n}
              className={n === i ? "on" : ""}
              aria-label={`Show testimonial ${n + 1}`}
              onClick={() => go(n)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

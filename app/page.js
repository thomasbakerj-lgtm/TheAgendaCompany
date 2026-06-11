import Link from "next/link";
import { SERVICES, CTA } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import HomeMotion from "@/components/HomeMotion";

export const metadata = {
  title: "Professional Event Management in Phoenix, AZ",
  description:
    "The Agenda Company is a Phoenix-based boutique event management firm designing agenda-led professional meetings, curated tours, learning events, and gathering series built for measurable outcomes.",
  alternates: { canonical: "/" },
};

const FAQS = [
  { q: "What does The Agenda Company do?", a: "We're a boutique professional event management firm in Phoenix, Arizona. We design agenda-led meetings, curated field experiences, learning events, and recurring gathering series, and we manage them end to end — always starting with the agenda rather than the venue." },
  { q: "What makes The Agenda Company different from a typical event planner?", a: "A traditional planner starts with logistics. We start with strategy: purpose, audience, flow, and the outcome the gathering should produce. We pair editorial-grade programming with full event management and post-event follow-through." },
  { q: "Where is The Agenda Company located?", a: "We're based in Phoenix, Arizona, and serve Scottsdale, Tempe, Mesa, Chandler, and the greater Phoenix area, along with national clients." },
];

const METHOD = [
  { n: "01", name: "Intent", body: "We define why the gathering exists and what should be different when people leave.", signal: "If we can\u2019t finish \u201cwhen this ends, X will be different,\u201d it isn\u2019t ready." },
  { n: "02", name: "Audience", body: "Who\u2019s in the room, what they care about, and what they should leave able to do.", signal: "We map the gap between where people start and where they should land." },
  { n: "03", name: "Arc", body: "The flow, so every session, break, and conversation earns its place.", signal: "The agenda is edited like a story, not filled like a calendar." },
  { n: "04", name: "Environment", body: "The room, movement, food, sound, and signage \u2014 the space working for you.", signal: "Energy is designed, not left to the venue." },
  { n: "05", name: "Execution", body: "Vendors, timing, run of show, and onsite ownership \u2014 handled, calmly.", signal: "Logistics in service of the agenda, never the reverse." },
  { n: "06", name: "Outcomes", body: "What changed, what\u2019s next, and who owns the follow-through.", signal: "Success is defined before the room is booked \u2014 and proven after." },
];

const SHORT = [
  "Purpose, audience, arc, and the outcome a gathering should produce.",
  "Board sessions and offsites designed to move decisions.",
  "Immersive professional experiences beyond the conference room.",
  "Learning events engineered so people leave able to act.",
  "Recurring gatherings designed as a practice that compounds.",
];

export default function Home() {
  return (
    <>
      <JsonLd data={[faqSchema(FAQS)]} />
      <div className="sf-home">

        {/* HERO */}
        <section className="ag-hero">
          <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
          <svg className="hero-mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="sfHeroMark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FF6B5A" />
                <stop offset="1" stopColor="#7C84FF" />
              </linearGradient>
            </defs>
            <path d="M74 26 A37 37 0 1 0 74 78" stroke="url(#sfHeroMark)" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 82 L50 19 L68 82" stroke="url(#sfHeroMark)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="39.7" y1="55" x2="60.3" y2="55" stroke="url(#sfHeroMark)" strokeWidth="2" strokeLinecap="round" />
            <line x1="36.9" y1="65" x2="63.1" y2="65" stroke="url(#sfHeroMark)" strokeWidth="2" strokeLinecap="round" />
            <line x1="34.3" y1="74" x2="65.7" y2="74" stroke="url(#sfHeroMark)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="34.6" cy="55" r="2.6" fill="url(#sfHeroMark)" />
            <circle cx="31.8" cy="65" r="2.6" fill="url(#sfHeroMark)" />
            <circle cx="29.2" cy="74" r="2.6" fill="url(#sfHeroMark)" />
          </svg>
          <div className="wrap">
            <span className="pill-lbl">Boutique corporate event management &middot; Phoenix, AZ</span>
            <h1>Events people <span className="grad-text">actually remember</span>.</h1>
            <p className="ag-lede">We design and run professional gatherings around the outcome they should create. Warm, polished, handled end to end.</p>
            <div className="btns">
              <Link className="btn" href={CTA.primary.href}>Let&rsquo;s talk &rarr;</Link>
              <Link className="btn ghost" href="/method">See the method</Link>
            </div>
            <div className="trust"><span>15+ years</span><span>Senior-led</span><span>Phoenix-based</span></div>
          </div>
        </section>

        {/* TRUSTED */}
        <div className="trusted">
          <div className="wrap">
            <span className="lbl">Trusted by leaders across</span>
            <span className="logo">Healthcare</span><span className="logo">Associations</span><span className="logo">Technology</span><span className="logo">Higher Ed</span><span className="logo">Nonprofits</span>
          </div>
        </div>

        {/* STATS */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head ag-reveal">
              <span className="pill-lbl">Why it matters</span>
              <h2>Most events fill a room. We make sure yours is worth it.</h2>
              <p>Optimism about gathering is high &mdash; but most events still can&rsquo;t prove what they delivered. We start with the agenda so yours can.</p>
            </div>
            <div className="stats ag-reveal" id="sf-stats">
              <div className="ag-stat"><div className="fig" data-to="70" data-suf="%">0%</div><div className="lab">of the events industry can&rsquo;t prove what their events delivered.</div></div>
              <div className="ag-stat"><div className="fig" data-to="15" data-suf="+">0+</div><div className="lab">years designing gatherings for teams, associations, and institutions.</div></div>
              <div className="ag-stat"><div className="fig" data-to="100" data-suf="%">0%</div><div className="lab">agenda-first &mdash; every moment traces back to one intended outcome.</div></div>
            </div>
          </div>
        </section>

        {/* MEET */}
        <section className="sec lilac meet">
          <div className="wrap">
            <div className="inner ag-reveal">
              <span className="pill-lbl">Meet your planner</span>
              <h2>Hi, I&rsquo;m Jessica &mdash; and your agenda is my agenda.</h2>
              <p className="bio">An editor turned events professional with 15+ years bringing people together with purpose. I treat your gathering like it matters &mdash; because to your people, it does. You&rsquo;ll work directly with me, start to finish.</p>
              <p className="sig">Jessica Barreras, <span>Founder</span></p>
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head ag-reveal">
              <span className="pill-lbl">The Agenda Method</span>
              <h2>A simple, proven way to design a gathering that lands.</h2>
              <p>Hover or tap each step to see how we think about your event.</p>
            </div>
            <div className="ag-agenda ag-reveal" id="sf-agenda">
              {METHOD.map((m, i) => (
                <div className={i === 0 ? "ag-arow open" : "ag-arow"} key={m.n}>
                  <button className="ag-arow-head" type="button">
                    <span className="badge">{m.n}</span>
                    <span className="ag-anm">{m.name}</span>
                    <span className="ag-achev">+</span>
                  </button>
                  <div className="ag-arow-body"><div className="ag-arow-inner">
                    <p>{m.body}</p>
                    <p className="ag-signal">{m.signal}</p>
                  </div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="sec mist">
          <div className="wrap ag-reveal">
            <div className="quote">
              <p>They treated our annual meeting like it mattered &mdash; because to us, it did. People are <span className="grad-text">still talking about it</span>.</p>
              <p className="by">Executive Director, professional society &middot; sample</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head ag-reveal">
              <span className="pill-lbl">What we do</span>
              <h2>Five ways we help you gather with purpose.</h2>
            </div>
            <div className="ag-reveal">
              {SERVICES.slice(0, 5).map((s, i) => (
                <Link className="srow" href={`/services/${s.slug}`} key={s.slug}>
                  <span className="sn">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{s.title}</h3></div>
                  <span className="sd">{SHORT[i]}</span>
                  <span className="go">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sec cta">
          <div className="cb c1" /><div className="cb c2" /><div className="cb c3" />
          <div className="wrap ag-reveal">
            <span className="pill-lbl" style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}>Start the conversation</span>
            <h2 style={{ marginTop: "1rem" }}>Let&rsquo;s shape your agenda.</h2>
            <p>Tell us what you&rsquo;re trying to accomplish and what would make this gathering worth the time.</p>
            <Link className="btn white" href={CTA.primary.href}>Let&rsquo;s talk &rarr;</Link>
            <p className="reassure">A conversation, not a pitch. We typically reply within one business day.</p>
          </div>
        </section>

      </div>
      <HomeMotion />
    </>
  );
}

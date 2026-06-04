import Link from "next/link";
import { SERVICES, METHOD, DIFFERENTIATORS, POSTS, CTA } from "@/lib/site";
import { Kicker, Faq } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata = {
  title: "Professional Event Management in Phoenix, AZ",
  description:
    "The Agenda Company is a Phoenix-based boutique event management firm designing agenda-led professional meetings, curated tours, learning events, and gathering series built for measurable outcomes.",
  alternates: { canonical: "/" },
};

const FAQS = [
  {
    q: "What does The Agenda Company do?",
    a: "We're a boutique professional event management firm in Phoenix, Arizona. We design agenda-led meetings, curated field experiences, learning events, and recurring gathering series, and we manage them end to end — always starting with the agenda rather than the venue.",
  },
  {
    q: "What makes The Agenda Company different from a typical event planner?",
    a: "A traditional planner starts with logistics. We start with strategy: purpose, audience, flow, and the outcome the gathering should produce. We pair editorial-grade programming with full event management and post-event follow-through.",
  },
  {
    q: "Where is The Agenda Company located?",
    a: "We're based in Phoenix, Arizona and serve Greater Phoenix — including Scottsdale, Tempe, Mesa, and Chandler — as well as national professional clients.",
  },
  {
    q: "Who does The Agenda Company work with?",
    a: "Organizations, associations, institutions, leadership teams, professional communities, and companies that need purposeful gatherings with clear outcomes.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />

      {/* 1 — Hero */}
      <section className="hero">
        <div className="wrap">
          <p className="kicker rise">Boutique professional event management · Phoenix, AZ</p>
          <h1 className="rise rise-2">Professional gatherings, designed around the agenda.</h1>
          <p className="lede rise rise-3">
            The Agenda Company is a Phoenix-based boutique event management firm designing professional
            meetings, curated field experiences, learning events, and gathering series that create clarity,
            connection, and measurable follow-through.
          </p>
          <div className="btn-row rise rise-4">
            <Link className="btn" href={CTA.primary.href}>
              {CTA.primary.label}
            </Link>
            <Link className="btn btn--ghost" href={CTA.secondary.href}>
              {CTA.secondary.label}
            </Link>
          </div>
          <div className="hero-meta rise rise-4">
            <span>Agenda-first design</span>
            <span>Outcome-driven</span>
            <span>Senior-led</span>
          </div>
        </div>
      </section>

      {/* 2 — Market problem */}
      <section className="section panel">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>The problem</Kicker>
            <h2>Most events fill a room. Few prove they were worth it.</h2>
          </div>
          <div>
            <p>
              Companies are gathering again with confidence — 85% of meeting professionals are optimistic about
              2026, the highest in five years, with North America the most bullish region at 93%
              <span className="muted"> (Amex GBT 2026 Global Meetings &amp; Events Forecast)</span>. But
              optimism isn&rsquo;t the same as proof.
            </p>
            <p>
              Roughly 70% of the events industry isn&rsquo;t currently equipped to show what its events
              delivered — only about 30% use data or analytics to track ROI, and 44% have no measurement in
              place at all
              <span className="muted"> (Global DMC Partners Meetings &amp; Events Industry Pulse Survey, 2026)</span>.
              The result is familiar: a full room, good energy, and no clear answer when leadership asks what
              changed.
            </p>
            <p style={{ marginBottom: 0 }}>That gap is the reason The Agenda Company exists.</p>
          </div>
        </div>
      </section>

      {/* 3 — What we do */}
      <section className="section">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>What we do</Kicker>
            <h2>We start with the agenda, not the venue.</h2>
          </div>
          <div>
            <p className="lede" style={{ marginBottom: "1.5rem" }}>
              We design agenda-led professional meetings, curated field experiences, learning events, and
              recurring gathering series.
            </p>
            <p style={{ marginBottom: 0 }}>
              Before a room is booked or a run of show is built, we clarify why the gathering exists, who needs
              to be in it, what should happen while everyone&rsquo;s together, and what progress should follow.
              We handle the logistics — but logistics are in service of the agenda, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — Why agenda-led matters */}
      <section className="section panel">
        <div className="wrap">
          <Kicker>Why it matters</Kicker>
          <h2 style={{ maxWidth: "20ch" }}>The shift toward intentional, accountable gatherings.</h2>
          <div className="split" style={{ marginTop: "2rem" }}>
            <p className="muted" style={{ fontSize: "var(--step-1)", lineHeight: 1.5 }}>
              Events are becoming more intentional, more human, and more accountable.
              <span className="muted"> (Cvent 2026 Event Trends)</span>
            </p>
            <p style={{ marginBottom: 0 }}>
              In a distributed-work era, in-person time is only worth the cost when it&rsquo;s designed around
              clear goals — the companies that get the most from gathering treat every minute together as
              intentional, not obligatory. Designing for that is editorial work: sequencing ideas, structuring
              attention, cutting noise, and building flow. It&rsquo;s what most events are missing, and it&rsquo;s
              what we do.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — Primary services */}
      <section className="section">
        <div className="wrap">
          <Kicker>Services</Kicker>
          <h2 style={{ maxWidth: "22ch", marginBottom: "2.5rem" }}>
            How we help organizations gather with purpose.
          </h2>
          <div className="grid grid-3">
            {SERVICES.map((s) => (
              <div className="card" key={s.slug}>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link className="tlink" href={`/services/${s.slug}`}>
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — The Agenda Method */}
      <section className="section panel">
        <div className="wrap">
          <Kicker>The Agenda Method</Kicker>
          <h2 style={{ maxWidth: "20ch" }}>A six-step method for gatherings that matter.</h2>
          <div className="agenda-list" style={{ marginTop: "2.5rem" }}>
            {METHOD.map((m) => (
              <div className="agenda-row" key={m.step}>
                <span className="num">{m.step}</span>
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn--ghost" href="/method">
              {CTA.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Why The Agenda Company */}
      <section className="section">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Why us</Kicker>
            <h2>Boutique, senior-led, and built for outcomes.</h2>
            <p className="muted" style={{ marginTop: "1.5rem" }}>
              Not a bloated agency. Not a party planner. Not a self-serve platform. A calm, precise, senior-led
              firm that treats your gathering as a business tool.
            </p>
          </div>
          <ul className="checklist">
            {DIFFERENTIATORS.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — Founder story */}
      <section className="section panel">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Founder</Kicker>
            <h2>Founded by an editor who became an events professional.</h2>
          </div>
          <div>
            <p>
              The Agenda Company was founded by Jessica Barreras, an editor turned events professional with
              more than 15 years of experience. Her background pairs editorial discipline — sequencing ideas,
              shaping narrative, managing contributors, building flow — with hands-on professional events
              experience spanning gatherings and institutions including SupplySide West, Channel Partners
              Conference &amp; Expo, Channel Partners Evolution, Petfood 2.0, Data Center World, IoT World, the
              Japanese Friendship Garden, and Arizona State University.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              That combination is the company&rsquo;s point of view: a great agenda is editing applied to time.
            </p>
            <Link className="tlink" href="/about">
              Read Jessica&rsquo;s story
            </Link>
          </div>
        </div>
      </section>

      {/* 9 — Phoenix roots */}
      <section className="section">
        <div className="wrap">
          <Kicker>Phoenix roots, professional reach</Kicker>
          <h2 style={{ maxWidth: "22ch" }}>Built in Phoenix. Designed for outcomes anywhere.</h2>
          <p style={{ marginTop: "1.5rem", maxWidth: "60ch" }}>
            Phoenix has become a serious destination for professional gatherings, anchored by bioscience,
            semiconductor, advanced manufacturing, healthcare, and higher education. We&rsquo;re rooted here and
            work with clients nationally.
          </p>
          <div className="stat-band" style={{ marginTop: "3rem" }}>
            <div className="stat">
              <div className="figure">$200B+</div>
              <div className="label">
                in capital investment in Greater Phoenix since 2020, including TSMC&rsquo;s $165B commitment.
                <span className="src">Visit Phoenix</span>
              </div>
            </div>
            <div className="stat">
              <div className="figure">4&times;</div>
              <div className="label">
                as many medical and high-tech meetings hosted in the region since 2019.
                <span className="src">Visit Phoenix</span>
              </div>
            </div>
            <div className="stat">
              <div className="figure">$453.7M</div>
              <div className="label">
                in estimated economic impact from 70 conventions at the Phoenix Convention Center in 2025.
                <span className="src">City of Phoenix</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — Proof & credibility */}
      <section className="section ink-bg">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Proof</Kicker>
            <h2>Grounded in how the industry is actually changing.</h2>
          </div>
          <div>
            <p style={{ color: "var(--stone)" }}>
              The U.S. corporate event services market is projected to grow from $29.49 billion in 2024 to
              $57.86 billion by 2035
              <span style={{ color: "#8d8475" }}> (Allied Market Research, 2025)</span> — and the firms that
              win that growth will be the ones that can prove outcomes, not just attendance.
            </p>
            <p style={{ marginBottom: 0, color: "var(--paper)", fontFamily: "var(--serif)", fontSize: "var(--step-1)" }}>
              The agenda is the strategy.
            </p>
          </div>
        </div>
      </section>

      {/* 11 — Blog preview */}
      <section className="section">
        <div className="wrap">
          <Kicker>From The Agenda</Kicker>
          <h2 style={{ maxWidth: "24ch", marginBottom: "0.75rem" }}>
            Notes on better meetings, learning, and professional connection.
          </h2>
          <p className="muted" style={{ marginBottom: "2.5rem" }}>Your agenda is our agenda.</p>
          <div className="grid grid-3">
            {POSTS.map((p) => (
              <div className="card" key={p.slug}>
                <p className="kicker" style={{ marginBottom: "0.75rem" }}>{p.category}</p>
                <h3 style={{ fontSize: "var(--step-1)" }}>{p.title}</h3>
                <p>{p.excerpt}</p>
                <Link className="tlink" href={`/the-agenda/${p.slug}`}>
                  Read
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FAQ + Contact */}
      <section className="section panel">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Common questions</Kicker>
            <h2>The basics, answered.</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <section className="section ink-bg">
        <div className="wrap">
          <Kicker>Start the conversation</Kicker>
          <h2 style={{ maxWidth: "18ch" }}>Let&rsquo;s shape the agenda.</h2>
          <p className="lede" style={{ color: "var(--stone)", marginTop: "1.5rem" }}>
            Tell us what you&rsquo;re trying to accomplish and what would make this gathering worth the time.
            We&rsquo;ll take it from there.
          </p>
          <div className="btn-row">
            <Link className="btn btn--ghost" href={CTA.primary.href}>
              {CTA.primary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

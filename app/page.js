import Link from "next/link";
import { SERVICES, DIFFERENTIATORS, POSTS, CTA } from "@/lib/site";
import { Kicker, Faq } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import AgendaMethodInteractive from "@/components/AgendaMethodInteractive";
import ProofStats from "@/components/ProofStats";
import Testimonials from "@/components/Testimonials";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Professional Event Management in Phoenix, AZ",
  description:
    "The Agenda Company is a Phoenix-based boutique event management firm designing agenda-led professional meetings, curated tours, learning events, and gathering series built for measurable outcomes.",
  alternates: { canonical: "/" },
};

const FAQS = [
  { q: "What does The Agenda Company do?", a: "We're a boutique professional event management firm in Phoenix, Arizona. We design agenda-led meetings, curated field experiences, learning events, and recurring gathering series, and we manage them end to end — always starting with the agenda rather than the venue." },
  { q: "What makes The Agenda Company different from a typical event planner?", a: "A traditional planner starts with logistics. We start with strategy: purpose, audience, flow, and the outcome the gathering should produce. We pair editorial-grade programming with full event management and post-event follow-through." },
  { q: "Where is The Agenda Company located?", a: "We're based in Phoenix, Arizona and serve Greater Phoenix — including Scottsdale, Tempe, Mesa, and Chandler — as well as national professional clients." },
  { q: "Who does The Agenda Company work with?", a: "Organizations, associations, institutions, leadership teams, professional communities, and companies that need purposeful gatherings with clear outcomes." },
];

const MARK = (
  <svg className="hero-mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M74 26 A37 37 0 1 0 74 78" stroke="#c9a24e" strokeWidth="1" strokeLinecap="round" />
    <path d="M32 82 L50 19 L68 82" stroke="#c9a24e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="39.7" y1="55" x2="60.3" y2="55" stroke="#c9a24e" strokeWidth="1" />
    <line x1="36.9" y1="65" x2="63.1" y2="65" stroke="#c9a24e" strokeWidth="1" />
    <line x1="34.3" y1="74" x2="65.7" y2="74" stroke="#c9a24e" strokeWidth="1" />
    <circle cx="34.6" cy="55" r="2" fill="#c9a24e" />
    <circle cx="31.8" cy="65" r="2" fill="#c9a24e" />
    <circle cx="29.2" cy="74" r="2" fill="#c9a24e" />
  </svg>
);

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <ScrollReveal />

      {/* Hero */}
      <section className="hero">
        {MARK}
        <div className="wrap">
          <p className="kicker rise">Boutique event management · Phoenix, AZ</p>
          <h1>Professional gatherings, designed around the <em>agenda</em>.</h1>
          <p className="lede">
            Most firms start with a venue. We start with the agenda — the purpose, the people, and the progress
            that should follow — then design and run the entire experience around it.
          </p>
          <div className="btn-row">
            <Link className="btn" href={CTA.primary.href}>{CTA.primary.label}</Link>
            <Link className="btn btn--ghost" href="/method">Explore the method</Link>
          </div>
          <div className="hero-meta">
            <span>Agenda-first design</span><span>Outcome-driven</span><span>Senior-led</span>
          </div>
        </div>
      </section>

      {/* Problem + animated proof */}
      <section className="section panel">
        <div className="wrap">
          <div className="split reveal">
            <div className="label-col">
              <Kicker>The problem</Kicker>
              <h2>Most events fill a room. Few prove they were worth it.</h2>
            </div>
            <div>
              <p>
                Companies are gathering again with confidence — but optimism isn&rsquo;t proof. Most gatherings
                still end with a full room, good energy, and no clear answer when leadership asks what changed.
              </p>
              <p style={{ marginBottom: 0 }}>That gap is the reason The Agenda Company exists.</p>
            </div>
          </div>
          <div className="reveal"><ProofStats /></div>
        </div>
      </section>

      {/* Interactive method (spotlight band) */}
      <section className="section ink-bg">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "58ch" }}>
            <Kicker>The Agenda Method</Kicker>
            <h2>Six lines. One disciplined way to design a gathering.</h2>
            <p style={{ color: "var(--sage)", marginTop: "1rem" }}>
              The same lines that live inside our mark. Hover or tap each one to go deeper.
            </p>
          </div>
          <AgendaMethodInteractive />
          <div className="btn-row">
            <Link className="btn btn--ghost" href="/method">See the full method</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="wrap">
          <div className="reveal">
            <Kicker>What we do</Kicker>
            <h2 style={{ maxWidth: "22ch", marginBottom: "2.5rem" }}>
              Five ways we help organizations gather with purpose.
            </h2>
          </div>
          <div className="grid grid-3">
            {SERVICES.map((s, i) => (
              <div className="card reveal" key={s.slug}>
                <div className="cardnum">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link className="tlink" href={`/services/${s.slug}`}>Explore</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section panel">
        <div className="wrap split reveal">
          <div className="label-col">
            <Kicker>Why us</Kicker>
            <h2>Boutique, senior-led, and built for outcomes.</h2>
            <p className="muted" style={{ marginTop: "1.5rem" }}>
              Not a bloated agency. Not a party planner. Not a self-serve platform. A calm, precise, senior-led
              firm that treats your gathering as a business tool.
            </p>
          </div>
          <ul className="checklist">
            {DIFFERENTIATORS.map((d) => (<li key={d}>{d}</li>))}
          </ul>
        </div>
      </section>

      {/* Testimonials (quiet rotating band) */}
      <Testimonials />

      {/* Founder */}
      <section className="section">
        <div className="wrap split reveal">
          <div className="label-col">
            <Kicker>Founder</Kicker>
            <h2>Founded by an editor who became an events professional.</h2>
          </div>
          <div>
            <p>
              The Agenda Company was founded by Jessica Barreras, an editor turned events professional with more
              than 15 years of experience. Her background pairs editorial discipline — sequencing ideas, shaping
              narrative, managing contributors, building flow — with hands-on professional events experience
              spanning gatherings and institutions including SupplySide West, Channel Partners Conference &amp;
              Expo, Channel Partners Evolution, Petfood 2.0, Data Center World, IoT World, the Japanese
              Friendship Garden, and Arizona State University.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              That combination is the company&rsquo;s point of view: a great agenda is editing applied to time.
            </p>
            <Link className="tlink" href="/about">Read Jessica&rsquo;s story</Link>
          </div>
        </div>
      </section>

      {/* Phoenix roots */}
      <section className="section panel">
        <div className="wrap reveal">
          <Kicker>Phoenix roots, professional reach</Kicker>
          <h2 style={{ maxWidth: "22ch" }}>Built in Phoenix. Designed for outcomes anywhere.</h2>
          <p style={{ marginTop: "1.5rem", maxWidth: "60ch" }}>
            Phoenix has become a serious destination for professional gatherings, anchored by bioscience,
            semiconductor, advanced manufacturing, healthcare, and higher education. We&rsquo;re rooted here and
            work with clients nationally.
          </p>
          <div className="stat-band" style={{ marginTop: "3rem" }}>
            <div className="stat"><div className="figure">$200B+</div><div className="label">in capital investment in Greater Phoenix since 2020, including TSMC&rsquo;s $165B commitment.<span className="src">Visit Phoenix</span></div></div>
            <div className="stat"><div className="figure">4&times;</div><div className="label">as many medical and high-tech meetings hosted in the region since 2019.<span className="src">Visit Phoenix</span></div></div>
            <div className="stat"><div className="figure">$453.7M</div><div className="label">in estimated economic impact from 70 conventions at the Phoenix Convention Center in 2025.<span className="src">City of Phoenix</span></div></div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="wrap">
          <div className="reveal">
            <Kicker>From The Agenda</Kicker>
            <h2 style={{ maxWidth: "24ch", marginBottom: "0.75rem" }}>
              Notes on better meetings, learning, and professional connection.
            </h2>
            <p className="muted" style={{ marginBottom: "2.5rem" }}>Your agenda is our agenda.</p>
          </div>
          <div className="grid grid-3">
            {POSTS.map((p) => (
              <div className="card reveal" key={p.slug}>
                <p className="kicker" style={{ marginBottom: "0.75rem" }}>{p.category}</p>
                <h3 style={{ fontSize: "var(--step-1)" }}>{p.title}</h3>
                <p>{p.excerpt}</p>
                <Link className="tlink" href={`/the-agenda/${p.slug}`}>Read</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section panel">
        <div className="wrap split reveal">
          <div className="label-col">
            <Kicker>Common questions</Kicker>
            <h2>The basics, answered.</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="section ink-bg">
        <div className="wrap reveal">
          <Kicker>Start the conversation</Kicker>
          <h2 style={{ maxWidth: "18ch" }}>Let&rsquo;s shape your agenda.</h2>
          <p className="lede" style={{ marginTop: "1.5rem" }}>
            Tell us what you&rsquo;re trying to accomplish and what would make this gathering worth the time.
            We&rsquo;ll take it from there.
          </p>
          <div className="btn-row">
            <Link className="btn" href={CTA.primary.href}>{CTA.primary.label}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

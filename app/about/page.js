import { Kicker, CtaBand, Breadcrumb } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "About The Agenda Company | Phoenix Event Management Firm",
  description:
    "Founded by Jessica Barreras, an editor turned events professional with 15+ years of experience. A Phoenix boutique firm built on the idea that the agenda is the strategy.",
  alternates: { canonical: "/about" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const BELIEFS = [
  "Gatherings are business tools.",
  "Outcomes beat atmosphere.",
  "The agenda comes first.",
  "Execution should feel calm.",
  "Follow-through is part of the work.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="page-intro">
        <div className="wrap">
          <Breadcrumb trail={trail} />
          <Kicker>About</Kicker>
          <h1>About The Agenda Company.</h1>
          <p className="answer-block">
            The Agenda Company is a boutique professional event management firm based in Phoenix, Arizona,
            founded by Jessica Barreras. It was built on a single idea — that the agenda is the strategy — and
            designs agenda-led meetings, curated field experiences, learning events, and gathering series for
            organizations that want their time together to produce real progress.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Our story</Kicker>
            <h2 style={{ fontSize: "var(--step-2)" }}>Bringing editorial structure to the moments that matter.</h2>
          </div>
          <div>
            <p style={{ marginBottom: 0 }}>
              The Agenda Company was built for organizations that believe professional gatherings should be
              clear, useful, human, and worth the time. We bring editorial structure to the moments that matter:
              we design the agenda, manage the moving parts, and make sure every meeting, tour, and learning
              experience leaves behind something useful.
            </p>
          </div>
        </div>
      </section>

      <section className="section panel">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Founder</Kicker>
            <h2 style={{ fontSize: "var(--step-2)" }}>Jessica Barreras</h2>
            <p className="muted" style={{ marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "var(--step--1)" }}>
              Founder &amp; CEO
            </p>
          </div>
          <div>
            <p>
              Jessica Barreras is an editor turned events professional with more than 15 years of experience.
              Her editorial background — sequencing ideas, shaping narrative, managing contributors, and building
              flow — became the foundation for how she approaches gatherings: a great agenda is editing applied
              to time.
            </p>
            <p style={{ marginBottom: 0 }}>
              Her professional experience spans gatherings and institutions including SupplySide West, Channel
              Partners Conference &amp; Expo, Channel Partners Evolution, Petfood 2.0, Data Center World, IoT
              World, the Japanese Friendship Garden, and Arizona State University.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Why &ldquo;Phoenix&rdquo;</Kicker>
            <h2 style={{ fontSize: "var(--step-2)" }}>A signal of place and posture.</h2>
          </div>
          <div>
            <p style={{ marginBottom: 0 }}>
              The name signals place and posture — renewal, clarity, professionalism, and momentum. We&rsquo;re
              rooted in a region that has become a real innovation hub, and we work with clients nationally.
            </p>
          </div>
        </div>
      </section>

      <section className="section panel">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>What we believe</Kicker>
            <h2 style={{ fontSize: "var(--step-2)" }}>Our credo.</h2>
          </div>
          <ul className="agenda-list" style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--line)" }}>
            {BELIEFS.map((b) => (
              <li key={b} style={{ borderBottom: "1px solid var(--line)", padding: "1.1rem 0", fontFamily: "var(--serif)", fontSize: "var(--step-1)" }}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

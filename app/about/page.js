import Link from "next/link";
import { CTA } from "@/lib/site";
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
      <div className="sf-home">

        <section className="ag-pagehero">
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap">
            <p className="ag-crumb"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">About</span></p>
            <span className="pill-lbl" style={{ marginTop: "1.1rem" }}>About</span>
            <h1>A boutique firm built on one idea: the agenda is the <span className="grad-text">strategy</span>.</h1>
            <p className="ag-intro">
              The Agenda Company is a boutique professional event management firm based in Phoenix, Arizona, founded by Jessica Barreras. We design agenda-led meetings, curated field experiences, learning events, and gathering series for organizations that want their time together to produce real progress.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="ag-split">
              <div>
                <span className="pill-lbl">Our story</span>
                <h2 style={{ marginTop: "1rem" }}>Editorial structure for the moments that matter.</h2>
              </div>
              <div className="body">
                <p>
                  The Agenda Company was built for organizations that believe professional gatherings should be clear, useful, human, and worth the time. We bring editorial structure to the moments that matter: we design the agenda, manage the moving parts, and make sure every meeting, tour, and learning experience leaves behind something useful.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec lilac">
          <div className="wrap">
            <div className="ag-split">
              <div>
                <span className="pill-lbl">Founder</span>
                <h2 style={{ marginTop: "1rem" }}>Jessica Barreras</h2>
                <p className="ag-role">Founder &amp; CEO</p>
              </div>
              <div className="body">
                <p>
                  Jessica is an editor turned events professional with more than 15 years of experience. Her editorial background &mdash; sequencing ideas, shaping narrative, managing contributors, and building flow &mdash; became the foundation for how she approaches gatherings: a great agenda is editing applied to time.
                </p>
                <p>
                  Her experience spans gatherings and institutions including SupplySide West, Channel Partners Conference &amp; Expo, Channel Partners Evolution, Petfood 2.0, Data Center World, IoT World, the Japanese Friendship Garden, and Arizona State University.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="ag-split">
              <div>
                <span className="pill-lbl">Why &ldquo;Phoenix&rdquo;</span>
                <h2 style={{ marginTop: "1rem" }}>A signal of place and posture.</h2>
              </div>
              <div className="body">
                <p>
                  The name signals place and posture &mdash; renewal, clarity, professionalism, and momentum. We&rsquo;re rooted in a region that has become a real innovation hub, and we work with clients nationally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec mist">
          <div className="wrap">
            <div className="sec-head">
              <span className="pill-lbl">What we believe</span>
              <h2>Our credo.</h2>
            </div>
            <ul className="ag-credo">
              {BELIEFS.map((b) => (<li key={b}>{b}</li>))}
            </ul>
          </div>
        </section>

        <section className="sec cta">
          <div className="cb c1" /><div className="cb c2" /><div className="cb c3" />
          <div className="wrap">
            <span className="pill-lbl" style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}>Start the conversation</span>
            <h2 style={{ marginTop: "1rem" }}>Let&rsquo;s shape your agenda.</h2>
            <p>Tell us what you&rsquo;re trying to accomplish and what would make this gathering worth the time.</p>
            <Link className="btn white" href={CTA.primary.href}>Let&rsquo;s talk &rarr;</Link>
            <p className="reassure">A conversation, not a pitch. We typically reply within one business day.</p>
          </div>
        </section>

      </div>
    </>
  );
}

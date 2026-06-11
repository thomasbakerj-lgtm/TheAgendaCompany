import Link from "next/link";
import { METHOD, CTA } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "The Agenda Method | A Framework for Gatherings That Matter",
  description:
    "A six-step method — Intent, Audience, Arc, Environment, Execution, Outcomes — for designing professional gatherings that produce measurable progress.",
  alternates: { canonical: "/method" },
};

const FAQS = [
  { q: "What is The Agenda Method?", a: "It's our six-step framework for designing and managing professional gatherings: Intent, Audience, Arc, Environment, Execution, and Outcomes. It treats the agenda as the architecture for the entire experience." },
  { q: "Do all six steps apply to every project?", a: "The framework scales. Strategy-only engagements emphasize Intent, Audience, Arc, and Outcomes; full-service engagements run all six." },
  { q: "How does this connect to ROI?", a: "Measurement is designed in at Intent and captured at Outcomes, so you can show what changed rather than guessing." },
];

const trail = [
  { name: "Home", path: "/" },
  { name: "The Agenda Method", path: "/method" },
];

export default function MethodPage() {
  return (
    <>
      <JsonLd data={[faqSchema(FAQS), breadcrumbSchema(trail)]} />
      <div className="sf-home">

        <section className="ag-pagehero">
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap">
            <p className="ag-crumb"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">The Agenda Method</span></p>
            <span className="pill-lbl" style={{ marginTop: "1.1rem" }}>The Agenda Method</span>
            <h1>The method behind a gathering that <span className="grad-text">lands</span>.</h1>
            <p className="ag-intro">
              A six-step framework for designing and managing professional gatherings: Intent, Audience, Arc, Environment, Execution, and Outcomes. It treats the agenda as the architecture for the entire experience &mdash; from why people gather to what they do afterward.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="ag-mcards">
              {METHOD.map((m) => (
                <div className="ag-mcard" key={m.step}>
                  <span className="ag-badge">{m.step}</span>
                  <div>
                    <h3>{m.name}</h3>
                    <p>{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec lilac">
          <div className="wrap">
            <div className="ag-split">
              <div>
                <span className="pill-lbl">Step 06 &middot; Outcomes</span>
                <h2 style={{ marginTop: "1rem" }}>The step most events skip.</h2>
              </div>
              <div className="body">
                <p>
                  Many events are still judged by attendance, atmosphere, or anecdotal feedback. But a great experience doesn&rsquo;t automatically equal a result &mdash; and roughly 70% of the industry isn&rsquo;t currently equipped to prove what its events delivered. Only about 30% track ROI with data, and 44% track nothing at all <span className="src">(Global DMC Partners Meetings &amp; Events Industry Pulse Survey, 2026)</span>.
                </p>
                <p>
                  The Outcomes step is our answer to that gap: we help clients define, before the event, what changed, what was learned, what decisions were made, what relationships advanced, and what actions should follow &mdash; then capture it afterward.
                </p>
                <p className="lead">Because what gets measured gets valued, and what gets valued keeps getting funded.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <span className="pill-lbl">Common questions</span>
              <h2>About the method.</h2>
            </div>
            <div className="ag-faq">
              {FAQS.map((f) => (
                <div className="ag-faqitem" key={f.q}>
                  <h4>{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec cta">
          <div className="cb c1" /><div className="cb c2" /><div className="cb c3" />
          <div className="wrap">
            <span className="pill-lbl" style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}>Put the method to work</span>
            <h2 style={{ marginTop: "1rem" }}>Let&rsquo;s shape your agenda.</h2>
            <p>Tell us what you&rsquo;re trying to accomplish and we&rsquo;ll start with the outcome.</p>
            <Link className="btn white" href={CTA.primary.href}>Let&rsquo;s talk &rarr;</Link>
            <p className="reassure">A conversation, not a pitch. We typically reply within one business day.</p>
          </div>
        </section>

      </div>
    </>
  );
}

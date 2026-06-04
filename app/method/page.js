import { METHOD } from "@/lib/site";
import { Kicker, Faq, CtaBand, Breadcrumb } from "@/components/ui";
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

      <section className="page-intro">
        <div className="wrap">
          <Breadcrumb trail={trail} />
          <Kicker>The Agenda Method</Kicker>
          <h1>The Agenda Method.</h1>
          <p className="answer-block">
            The Agenda Method is The Agenda Company&rsquo;s six-step framework for designing and managing
            professional gatherings: Intent, Audience, Arc, Environment, Execution, and Outcomes. It treats the
            agenda as the architecture for the entire experience — from why people gather to what they do
            afterward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="agenda-list">
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
        </div>
      </section>

      <section className="section ink-bg">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Step 06 · Outcomes</Kicker>
            <h2>The step most events skip.</h2>
          </div>
          <div>
            <p style={{ color: "var(--stone)" }}>
              Many events are still judged by attendance, atmosphere, or anecdotal feedback. But a great
              experience doesn&rsquo;t automatically equal a result, and roughly 70% of the industry isn&rsquo;t
              currently equipped to prove what its events delivered — only about 30% track ROI with data, and 44%
              track nothing at all
              <span style={{ color: "#8d8475" }}> (Global DMC Partners Meetings &amp; Events Industry Pulse Survey, 2026)</span>.
            </p>
            <p style={{ color: "var(--stone)" }}>
              The Outcomes step is our answer to that gap: we help clients define, before the event, what
              changed, what was learned, what decisions were made, what relationships advanced, and what actions
              should follow — then capture it afterward.
            </p>
            <p style={{ marginBottom: 0, color: "var(--paper)", fontFamily: "var(--serif)", fontSize: "var(--step-1)" }}>
              Because what gets measured gets valued, and what gets valued keeps getting funded.
            </p>
          </div>
        </div>
      </section>

      <section className="section panel">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Common questions</Kicker>
            <h2 style={{ fontSize: "var(--step-2)" }}>About the method.</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand heading="Put the method to work." />
    </>
  );
}

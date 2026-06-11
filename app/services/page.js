import Link from "next/link";
import { SERVICES, CTA } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Professional Event Management Services",
  description:
    "Agenda strategy, professional meetings, curated field experiences, learning events, and gathering series — boutique, outcome-driven event management in Phoenix, AZ.",
  alternates: { canonical: "/services" },
};

const FAQS = [
  { q: "Do you only work on single events, or ongoing programs?", a: "Both. We design and manage one-off gatherings as well as recurring series and community programs." },
  { q: "Can you handle logistics as well as strategy?", a: "Yes — we offer full end-to-end management, with logistics always in service of the agenda." },
  { q: "Do you work outside Phoenix?", a: "Yes. We're based in Phoenix and serve Greater Phoenix as well as national professional clients." },
];

const trail = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesHub() {
  return (
    <>
      <JsonLd data={[faqSchema(FAQS), breadcrumbSchema(trail)]} />
      <div className="sf-home">

        <section className="ag-pagehero">
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap">
            <p className="ag-crumb"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">Services</span></p>
            <span className="pill-lbl" style={{ marginTop: "1.1rem" }}>Services</span>
            <h1>Event management, <span className="grad-text">designed around the agenda</span>.</h1>
            <p className="ag-intro">
              Five connected services &mdash; from agenda strategy to full production. Each starts with the agenda and is built toward a measurable outcome.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <p style={{ maxWidth: "62ch", marginBottom: "2.5rem", color: "var(--ink2)" }}>
              The U.S. corporate event services market is projected to nearly double from $29.49 billion in 2024 to $57.86 billion by 2035 <span style={{ color: "var(--muted)" }}>(Allied Market Research, 2025)</span> &mdash; and the organizations driving that spend increasingly expect gatherings to prove their value.
            </p>
            <div className="ag-cards">
              {SERVICES.map((s, i) => (
                <div className="ag-card" key={s.slug}>
                  <span className="ag-cn">{`0${i + 1}`}</span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <Link className="ag-explore" href={`/services/${s.slug}`}>Explore &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec lilac">
          <div className="wrap">
            <div className="sec-head">
              <span className="pill-lbl">Common questions</span>
              <h2>How we work.</h2>
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

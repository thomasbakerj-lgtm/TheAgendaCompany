import Link from "next/link";
import { SERVICES } from "@/lib/site";
import { Kicker, Faq, CtaBand, Breadcrumb } from "@/components/ui";
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

      <section className="page-intro">
        <div className="wrap">
          <Breadcrumb trail={trail} />
          <Kicker>Services</Kicker>
          <h1>Professional event management, designed around the agenda.</h1>
          <p className="answer-block">
            The Agenda Company offers five connected services: Agenda Strategy &amp; Event Design, Professional
            Meetings &amp; Leadership Gatherings, Curated Professional Tours &amp; Field Experiences, Professional
            Development &amp; Learning Events, and Event Series &amp; Community Programming. Each starts with the
            agenda and is built toward a measurable outcome.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p style={{ maxWidth: "62ch", marginBottom: "2.5rem" }}>
            The U.S. corporate event services market is projected to nearly double from $29.49 billion in 2024
            to $57.86 billion by 2035
            <span className="muted"> (Allied Market Research, 2025)</span> — and the organizations driving that
            spend increasingly expect gatherings to prove their value.
          </p>
          <div className="grid grid-2">
            {SERVICES.map((s, i) => (
              <div className="card" key={s.slug}>
                <p className="kicker" style={{ marginBottom: "0.75rem" }}>{`0${i + 1}`}</p>
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

      <section className="section panel">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Common questions</Kicker>
            <h2 style={{ fontSize: "var(--step-2)" }}>How we work.</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

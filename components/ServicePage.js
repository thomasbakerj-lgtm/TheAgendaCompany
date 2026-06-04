import Link from "next/link";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { SERVICES } from "@/lib/site";
import { Kicker, Faq, CtaBand, Breadcrumb } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export default function ServicePage({ slug }) {
  const data = SERVICE_PAGES[slug];
  const trail = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: data.title, path: `/services/${slug}` },
  ];

  const schemas = [
    serviceSchema({
      name: data.title,
      serviceType: data.serviceType,
      description: data.answer,
      slug,
    }),
    faqSchema(data.faqs),
    breadcrumbSchema(trail),
  ];

  const relatedServices = data.related
    .map((rs) => SERVICES.find((s) => s.slug === rs))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={schemas} />

      <section className="page-intro">
        <div className="wrap">
          <Breadcrumb trail={trail} />
          <Kicker>Services</Kicker>
          <h1>{data.title}</h1>
          <p className="answer-block">{data.answer}</p>
          <p className="lede" style={{ marginTop: "2rem", color: "var(--copper)", fontFamily: "var(--serif)" }}>
            {data.positioning}
          </p>
        </div>
      </section>

      <hr className="rule" />

      {data.sections.map((sec, i) => (
        <section className={i % 2 === 1 ? "section panel" : "section"} key={sec.heading}>
          <div className="wrap split">
            <div className="label-col">
              <h2 style={{ fontSize: "var(--step-2)" }}>{sec.heading}</h2>
            </div>
            <div>
              {sec.body && sec.body.map((p, j) => <p key={j} style={{ marginBottom: j === sec.body.length - 1 ? 0 : undefined }}>{p}</p>)}
              {sec.list && (
                <ul className="checklist" style={{ marginTop: 0 }}>
                  {sec.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {sec.tags && (
                <ul className="tag-list">
                  {sec.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap split">
          <div className="label-col">
            <Kicker>Common questions</Kicker>
            <h2 style={{ fontSize: "var(--step-2)" }}>Questions about this service.</h2>
          </div>
          <Faq items={data.faqs} />
        </div>
      </section>

      <section className="section--tight panel">
        <div className="wrap">
          <Kicker>Related services</Kicker>
          <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
            {relatedServices.map((s) => (
              <div className="card" key={s.slug}>
                <h3 style={{ fontSize: "var(--step-1)" }}>{s.title}</h3>
                <p>{s.short}</p>
                <Link className="tlink" href={`/services/${s.slug}`}>
                  Explore
                </Link>
              </div>
            ))}
            <div className="card">
              <h3 style={{ fontSize: "var(--step-1)" }}>The Agenda Method</h3>
              <p>The six-step framework behind every engagement.</p>
              <Link className="tlink" href="/method">
                Explore the method
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export function buildServiceMetadata(slug) {
  const data = SERVICE_PAGES[slug];
  return {
    title: data.seoTitle,
    description: data.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: data.seoTitle, description: data.metaDescription, url: `/services/${slug}` },
  };
}

import Link from "next/link";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { SERVICES, CTA } from "@/lib/site";
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
    serviceSchema({ name: data.title, serviceType: data.serviceType, description: data.answer, slug }),
    faqSchema(data.faqs),
    breadcrumbSchema(trail),
  ];

  const relatedServices = data.related
    .map((rs) => SERVICES.find((s) => s.slug === rs))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={schemas} />
      <div className="sf-home">

        <section className="ag-pagehero">
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap">
            <p className="ag-crumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <Link href="/services">Services</Link><span className="sep">/</span>
              <span className="cur">{data.title}</span>
            </p>
            <span className="pill-lbl" style={{ marginTop: "1.1rem" }}>Services</span>
            <h1>{data.title}</h1>
            <p className="ag-intro">{data.answer}</p>
            <p className="ag-positioning">{data.positioning}</p>
          </div>
        </section>

        {data.sections.map((sec, i) => (
          <section className={i % 2 === 1 ? "sec lilac" : "sec"} key={sec.heading}>
            <div className="wrap">
              <div className="ag-split">
                <div>
                  <h2>{sec.heading}</h2>
                </div>
                <div className="body">
                  {sec.body && sec.body.map((p, j) => <p key={j} style={{ color: "var(--ink2)", marginBottom: j === sec.body.length - 1 ? 0 : "1rem" }}>{p}</p>)}
                  {sec.list && (
                    <ul className="ag-checklist">
                      {sec.list.map((item) => (<li key={item}>{item}</li>))}
                    </ul>
                  )}
                  {sec.tags && (
                    <ul className="ag-tags">
                      {sec.tags.map((t) => (<li key={t}>{t}</li>))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <span className="pill-lbl">Common questions</span>
              <h2>Questions about this service.</h2>
            </div>
            <div className="ag-faq">
              {data.faqs.map((f) => (
                <div className="ag-faqitem" key={f.q}>
                  <h4>{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec mist">
          <div className="wrap">
            <div className="sec-head">
              <span className="pill-lbl">Related services</span>
              <h2>Keep exploring.</h2>
            </div>
            <div className="ag-cards">
              {relatedServices.map((s) => (
                <div className="ag-card" key={s.slug}>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <Link className="ag-explore" href={`/services/${s.slug}`}>Explore &rarr;</Link>
                </div>
              ))}
              <div className="ag-card">
                <h3>The Agenda Method</h3>
                <p>The six-step framework behind every engagement.</p>
                <Link className="ag-explore" href="/method">Explore the method &rarr;</Link>
              </div>
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

export function buildServiceMetadata(slug) {
  const data = SERVICE_PAGES[slug];
  return {
    title: data.seoTitle,
    description: data.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: data.seoTitle, description: data.metaDescription, url: `/services/${slug}` },
  };
}

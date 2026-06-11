import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/lib/articles";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { SITE, CTA } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const a = ARTICLES[params.slug];
  if (!a) return {};
  return {
    title: a.seoTitle,
    description: a.metaDescription,
    alternates: { canonical: `/the-agenda/${params.slug}` },
    openGraph: { type: "article", title: a.seoTitle, description: a.metaDescription, url: `/the-agenda/${params.slug}` },
  };
}

export default function ArticlePage({ params }) {
  const a = ARTICLES[params.slug];
  if (!a) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "The Agenda", path: "/the-agenda" },
    { name: a.title, path: `/the-agenda/${params.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.metaDescription,
    datePublished: a.published,
    dateModified: a.published,
    author: { "@id": `${SITE.url}/#jessica-barreras` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/the-agenda/${params.slug}`,
    articleSection: a.category,
  };

  const relatedService = a.related?.service ? SERVICE_PAGES[a.related.service] : null;
  const relatedPost = a.related?.post ? ARTICLES[a.related.post] : null;

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema(a.faqs), breadcrumbSchema(trail)]} />
      <div className="sf-home">

        <section className="ag-pagehero">
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap" style={{ maxWidth: "820px" }}>
            <p className="ag-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/the-agenda">The Agenda</Link><span className="sep">/</span><span className="cur">{a.category}</span></p>
            <span className="pill-lbl" style={{ marginTop: "1.1rem" }}>{a.category}</span>
            <h1>{a.title}</h1>
            <p className="ag-intro">{a.summary}</p>
          </div>
        </section>

        <article className="sec">
          <div className="wrap">
            <div className="ag-article">
              {a.body.map((blk, i) => (
                <div key={i}>
                  {blk.h && <h2>{blk.h}</h2>}
                  <p>{blk.p}</p>
                </div>
              ))}

              <h2>Questions</h2>
              <div className="ag-faq">
                {a.faqs.map((f) => (
                  <div className="ag-faqitem" key={f.q}>
                    <h4>{f.q}</h4>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>

              <div className="ag-related">
                {relatedService && (
                  <Link href={`/services/${a.related.service}`}>Service: {relatedService.title}</Link>
                )}
                {relatedPost && (
                  <Link href={`/the-agenda/${a.related.post}`}>Read: {relatedPost.title}</Link>
                )}
              </div>
            </div>
          </div>
        </article>

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

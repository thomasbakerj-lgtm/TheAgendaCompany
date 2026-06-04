import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/lib/articles";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { SITE } from "@/lib/site";
import { Kicker, Faq, CtaBand, Breadcrumb } from "@/components/ui";
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

      <section className="page-intro">
        <div className="wrap" style={{ maxWidth: "780px" }}>
          <Breadcrumb trail={trail} />
          <Kicker>{a.category}</Kicker>
          <h1 style={{ fontSize: "var(--step-4)" }}>{a.title}</h1>
          <p className="answer-block">{a.summary}</p>
        </div>
      </section>

      <hr className="rule" />

      <article className="section">
        <div className="wrap" style={{ maxWidth: "720px" }}>
          {a.body.map((blk, i) => (
            <div key={i}>
              {blk.h && <h2 style={{ fontSize: "var(--step-2)", marginTop: i === 0 ? 0 : "2.5rem", marginBottom: "1rem" }}>{blk.h}</h2>}
              <p style={{ fontSize: "var(--step-1)", lineHeight: 1.65 }}>{blk.p}</p>
            </div>
          ))}

          <div style={{ marginTop: "3rem" }}>
            <h2 style={{ fontSize: "var(--step-2)", marginBottom: "0.5rem" }}>Questions</h2>
            <Faq items={a.faqs} />
          </div>

          <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {relatedService && (
              <Link className="tlink" href={`/services/${a.related.service}`}>
                Service: {relatedService.title}
              </Link>
            )}
            {relatedPost && (
              <Link className="tlink" href={`/the-agenda/${a.related.post}`}>
                Read: {relatedPost.title}
              </Link>
            )}
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}

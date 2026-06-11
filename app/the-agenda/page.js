import Link from "next/link";
import { ARTICLES, CATEGORIES } from "@/lib/articles";
import { SITE, CTA } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "The Agenda | Better Meetings, Events, and Professional Gatherings",
  description:
    "Practical ideas for better meetings, smarter professional gatherings, stronger learning events, and more intentional time together. From The Agenda Company in Phoenix.",
  alternates: { canonical: "/the-agenda" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "The Agenda", path: "/the-agenda" },
];

export default function BlogHub() {
  const posts = Object.entries(ARTICLES);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Agenda",
    description: metadata.description,
    url: `${SITE.url}/the-agenda`,
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema(trail)]} />
      <div className="sf-home">

        <section className="ag-pagehero">
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap">
            <p className="ag-crumb"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">The Agenda</span></p>
            <span className="pill-lbl" style={{ marginTop: "1.1rem" }}>The Agenda &middot; Your agenda is our agenda</span>
            <h1>Notes on gatherings worth the <span className="grad-text">time</span>.</h1>
            <p className="ag-intro">
              Practical, source-backed notes on agenda design, event ROI, leadership gatherings, and Phoenix&rsquo;s professional scene &mdash; for organizations that want better meetings and more intentional time together.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="ag-cards cols3">
              {posts.map(([slug, a]) => (
                <div className="ag-card" key={slug}>
                  <span className="ag-cn">{a.category}</span>
                  <h3>{a.title}</h3>
                  <p>{a.summary}</p>
                  <Link className="ag-explore" href={`/the-agenda/${slug}`}>Read &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec lilac">
          <div className="wrap">
            <div className="sec-head">
              <span className="pill-lbl">Topics</span>
              <h2>What we write about.</h2>
            </div>
            <ul className="ag-tags">
              {CATEGORIES.map((c) => (<li key={c}>{c}</li>))}
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

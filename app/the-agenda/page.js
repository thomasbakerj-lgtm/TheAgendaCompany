import Link from "next/link";
import { ARTICLES, CATEGORIES } from "@/lib/articles";
import { SITE } from "@/lib/site";
import { Kicker, Breadcrumb } from "@/components/ui";
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

      <section className="page-intro">
        <div className="wrap">
          <Breadcrumb trail={trail} />
          <Kicker>The Agenda · Your agenda is our agenda</Kicker>
          <h1>The Agenda.</h1>
          <p className="answer-block">
            <em>The Agenda</em> is The Agenda Company&rsquo;s resource for organizations that want better
            meetings, smarter professional gatherings, stronger learning events, and more intentional time
            together — practical, source-backed notes on agenda design, event ROI, leadership gatherings, and
            Phoenix&rsquo;s professional scene.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {posts.map(([slug, a]) => (
              <div className="card" key={slug}>
                <p className="kicker" style={{ marginBottom: "0.75rem" }}>{a.category}</p>
                <h3 style={{ fontSize: "var(--step-1)" }}>{a.title}</h3>
                <p>{a.summary}</p>
                <Link className="tlink" href={`/the-agenda/${slug}`}>
                  Read
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight panel">
        <div className="wrap">
          <Kicker>Topics</Kicker>
          <ul className="tag-list" style={{ marginTop: "1.25rem" }}>
            {CATEGORIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

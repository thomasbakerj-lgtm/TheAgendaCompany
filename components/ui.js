import Link from "next/link";
import { CTA } from "@/lib/site";

export function Kicker({ children }) {
  return <p className="kicker">{children}</p>;
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={i}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  heading = "Start with the agenda.",
  body = "Tell us what you're trying to accomplish and what would make this gathering worth the time. We'll take it from there.",
}) {
  return (
    <section className="section ink-bg">
      <div className="wrap">
        <Kicker>Start the conversation</Kicker>
        <h2 style={{ maxWidth: "18ch" }}>{heading}</h2>
        <p className="lede" style={{ color: "var(--stone)", marginTop: "1.5rem" }}>
          {body}
        </p>
        <div className="btn-row">
          <Link className="btn btn--ghost" href={CTA.primary.href}>
            {CTA.primary.label}
          </Link>
          <Link className="btn btn--ghost" href={CTA.secondary.href}>
            {CTA.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: "var(--step--1)", color: "var(--muted)", letterSpacing: "0.04em" }}>
      {trail.map((t, i) => (
        <span key={t.path}>
          {i > 0 && <span style={{ margin: "0 0.5rem", color: "var(--line-strong)" }}>/</span>}
          {i < trail.length - 1 ? (
            <Link href={t.path} style={{ color: "var(--copper)" }}>
              {t.name}
            </Link>
          ) : (
            <span>{t.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

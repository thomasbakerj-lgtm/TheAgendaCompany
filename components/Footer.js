import Link from "next/link";
import { SITE, SERVICES, CTA } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <h2 className="serif" style={{ fontSize: "var(--step-2)", marginBottom: "1rem" }}>
              Let&rsquo;s shape your agenda.
            </h2>
            <p style={{ color: "var(--stone)", maxWidth: "34ch" }}>
              A boutique professional event management firm in Phoenix, Arizona. The agenda is the strategy.
            </p>
            <Link className="btn" href={CTA.primary.href} style={{ marginTop: "0.5rem" }}>
              {CTA.primary.label}
            </Link>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/method">The Agenda Method</Link>
            <Link href="/about">About</Link>
            <Link href="/the-agenda">The Agenda</Link>
            <Link href="/contact">Contact</Link>
            <h4 style={{ marginTop: "1.5rem" }}>Serving</h4>
            <p style={{ color: "var(--stone)", fontSize: "var(--step--1)", margin: 0 }}>
              Phoenix, Scottsdale, Tempe, Mesa, Chandler &amp; Greater Phoenix — and national clients.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} {SITE.name}. Phoenix, Arizona.
          </span>
          <span>The agenda is the strategy.</span>
        </div>
      </div>
    </footer>
  );
}

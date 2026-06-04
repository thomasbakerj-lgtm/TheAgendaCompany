import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <p className="kicker">404</p>
        <h1 style={{ maxWidth: "16ch" }}>This page isn&rsquo;t on the agenda.</h1>
        <p className="lede" style={{ marginTop: "1.5rem" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back on track.
        </p>
        <div className="btn-row">
          <Link className="btn" href="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" href="/services">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}

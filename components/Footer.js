import Link from "next/link";
import { SITE, SERVICES, CTA } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="sf-footer">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <h2>Let&rsquo;s shape your agenda.</h2>
            <p>A boutique corporate event management firm in Phoenix, Arizona. The agenda is the strategy.</p>
            <Link className="fbtn" href={CTA.primary.href}>
              {CTA.primary.label}
            </Link>
          </div>
          <div>
            <h4>Services</h4>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/method">The Agenda Method</Link>
            <Link href="/about">About</Link>
            <Link href="/the-agenda">The Agenda</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="fbottom">
          <span>&copy; {year} {SITE.name}. Phoenix, Arizona.</span>
          <span>The agenda is the strategy.</span>
        </div>
      </div>
    </footer>
  );
}

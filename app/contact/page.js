import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Contact The Agenda Company | Plan a Professional Event",
  description:
    "Start a conversation about your next professional gathering. Tell us what you're trying to accomplish and we'll help shape your agenda.",
  alternates: { canonical: "/contact" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <div className="sf-home">

        <section className="ag-pagehero">
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap">
            <p className="ag-crumb"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">Contact</span></p>
            <span className="pill-lbl" style={{ marginTop: "1.1rem" }}>Contact</span>
            <h1>Let&rsquo;s shape your <span className="grad-text">agenda</span>.</h1>
            <p className="ag-intro">
              Tell us about a professional meeting, leadership gathering, curated field experience, learning event, or recurring series. We&rsquo;re based in Phoenix and work with clients across Greater Phoenix and nationally.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="ag-split">
              <div>
                <span className="pill-lbl">A conversation, not a pitch</span>
                <p style={{ marginTop: "1rem", color: "var(--ink2)", maxWidth: "34ch" }}>
                  Tell us what you&rsquo;re trying to accomplish and what would make this gathering worth the time. We&rsquo;ll start with the agenda and reply within one business day.
                </p>
              </div>
              <div>
                <div className="ag-formcard">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

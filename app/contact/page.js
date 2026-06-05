import ContactForm from "@/components/ContactForm";
import { Kicker, Breadcrumb } from "@/components/ui";
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

      <section className="page-intro">
        <div className="wrap">
          <Breadcrumb trail={trail} />
          <Kicker>Contact</Kicker>
          <h1>Let&rsquo;s shape your agenda.</h1>
          <p className="answer-block">
            Contact The Agenda Company to plan a professional meeting, leadership gathering, curated field
            experience, learning event, or recurring series. We&rsquo;re based in Phoenix, Arizona and work with
            clients across Greater Phoenix and nationally.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap split">
          <div className="label-col">
            <p style={{ maxWidth: "34ch" }}>
              Tell us what you&rsquo;re trying to accomplish and what would make this gathering worth the time.
              We&rsquo;ll start with the agenda.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

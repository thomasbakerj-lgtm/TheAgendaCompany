"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "organization", label: "Organization", type: "text" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "eventType", label: "Event type", type: "text" },
  { name: "timing", label: "Event timing", type: "text" },
  { name: "location", label: "Location", type: "text" },
  { name: "attendees", label: "Estimated attendees", type: "text" },
];

const TEXTAREAS = [
  { name: "goal", label: "What are you trying to accomplish?" },
  { name: "success", label: "What would make this gathering successful?" },
  { name: "notes", label: "Additional notes" },
];

export default function ContactForm() {
  const [data, setData] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!data.name || !data.email) return;
    const lines = [
      ...FIELDS.map((f) => `${f.label}: ${data[f.name] || ""}`),
      "",
      ...TEXTAREAS.map((t) => `${t.label}\n${data[t.name] || ""}`),
    ].join("\n");
    const subject = encodeURIComponent("New gathering inquiry — The Agenda Company");
    const body = encodeURIComponent(lines);
    if (SITE.email) {
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <h3 style={{ fontSize: "var(--step-1)", marginBottom: "0.5rem" }}>Thank you.</h3>
        <p style={{ margin: 0, color: "var(--muted)" }}>
          {SITE.email
            ? "Your email client should now be open with your message ready to send. We'll reply to start shaping the agenda."
            : "Your message is ready. We'll be in touch to start shaping the agenda."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="form-grid">
        {FIELDS.map((f) => (
          <div className="field" key={f.name}>
            <label htmlFor={f.name}>
              {f.label}
              {f.required ? " *" : ""}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              value={data[f.name] || ""}
              onChange={update}
            />
          </div>
        ))}
      </div>

      {TEXTAREAS.map((t) => (
        <div className="field field--full" key={t.name}>
          <label htmlFor={t.name}>{t.label}</label>
          <textarea id={t.name} name={t.name} value={data[t.name] || ""} onChange={update} />
        </div>
      ))}

      <button type="button" className="btn" onClick={handleSubmit} style={{ marginTop: "0.5rem" }}>
        Start Planning the Right Gathering
      </button>
      <p className="form-note">
        Prefer email? This isn&rsquo;t a hard-sell intake — it&rsquo;s the start of a strategic conversation.
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";

const STEPS = [
  { step: "01", name: "Intent", body: "Define why the gathering exists and what must be different when people leave.", focus: "If you can't finish the sentence \u201cwhen this ends, X will be different,\u201d the event isn't ready.", pct: 100 },
  { step: "02", name: "Audience", body: "Clarify who is in the room, what they care about, and what they need to experience.", focus: "We map the gap between where attendees start and where they should land.", pct: 100 },
  { step: "03", name: "Arc", body: "Build the flow so each session, break, tour, and conversation has a purpose.", focus: "Every block earns its place or it's cut. The agenda is edited like a story.", pct: 100 },
  { step: "04", name: "Environment", body: "Select and shape the room, venue, movement, food, sound, signage, and guest experience.", focus: "The space is a tool. Energy is managed, not left to chance.", pct: 100 },
  { step: "05", name: "Execution", body: "Manage vendors, timing, speakers, attendee flow, registration, and onsite details.", focus: "Calm, detailed delivery \u2014 logistics in service of the agenda, never the reverse.", pct: 100 },
  { step: "06", name: "Outcomes", body: "Capture what happened, what changed, what comes next, and who owns the follow-up.", focus: "Most events skip this. We define success before the room is booked, and prove it after.", pct: 100 },
];

export default function AgendaMethodInteractive() {
  const [active, setActive] = useState(0);
  const s = STEPS[active];
  return (
    <div className="method-x">
      <div className="method-steps" role="tablist" aria-label="The Agenda Method steps">
        {STEPS.map((m, i) => (
          <button
            key={m.step}
            role="tab"
            aria-selected={i === active}
            className={`method-step${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="mnum">{m.step}</span>
            <span>{m.name}</span>
          </button>
        ))}
      </div>

      <div className="method-detail" role="tabpanel" aria-live="polite">
        <div className="mn">{s.step}</div>
        <h3>{s.name}</h3>
        <p style={{ marginBottom: "1rem" }}>{s.body}</p>
        <p className="muted" style={{ margin: 0, fontStyle: "italic" }}>{s.focus}</p>
        <div className="method-bar" aria-hidden="true">
          <i style={{ width: `${((active + 1) / STEPS.length) * 100}%` }} />
        </div>
        <p className="muted" style={{ fontSize: "0.75rem", marginTop: "0.6rem", marginBottom: 0 }}>
          Step {active + 1} of {STEPS.length}
        </p>
      </div>
    </div>
  );
}

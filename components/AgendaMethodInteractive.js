"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { n: "01", name: "Intent", body: "Define why the gathering exists and what must be different when people leave.", signal: "If you can't finish \u201cwhen this ends, X will be different,\u201d it isn't ready." },
  { n: "02", name: "Audience", body: "Clarify who is in the room, what they care about, and what they must leave able to do.", signal: "We map the gap between where attendees start and where they should land." },
  { n: "03", name: "Arc", body: "Build the flow so every session, break, and conversation earns its place.", signal: "The agenda is edited like a story, not filled like a calendar." },
  { n: "04", name: "Environment", body: "Shape the room, movement, food, sound, and signage \u2014 the space as a tool.", signal: "Energy is designed, not left to the venue." },
  { n: "05", name: "Execution", body: "Manage vendors, timing, run of show, registration, and onsite ownership.", signal: "Logistics in service of the agenda, never the reverse." },
  { n: "06", name: "Outcomes", body: "Capture what changed, what comes next, and who owns the follow-through.", signal: "Success is defined before the room is booked \u2014 and proven after." },
];

export default function AgendaMethodInteractive() {
  const [active, setActive] = useState(0);
  const [hoverable, setHoverable] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    setHoverable(window.matchMedia("(hover:hover) and (pointer:fine)").matches);
  }, []);

  const bodyStyle = (i) => ({
    maxHeight: active === i && refs.current[i] ? refs.current[i].scrollHeight + "px" : "0px",
  });

  return (
    <div className="agenda" role="tablist" aria-label="The Agenda Method">
      {STEPS.map((s, i) => (
        <div key={s.n} className={`arow${active === i ? " open" : ""}`}>
          <button
            className="arow-head"
            role="tab"
            aria-selected={active === i}
            aria-expanded={active === i}
            onMouseEnter={() => hoverable && setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive((cur) => (!hoverable && cur === i ? -1 : i))}
          >
            <span className="dot" aria-hidden="true" />
            <span className="anum">{s.n}</span>
            <span className="anm">{s.name}</span>
            <span className="achev" aria-hidden="true">+</span>
          </button>
          <div className="arow-body" style={bodyStyle(i)}>
            <div className="arow-inner" ref={(el) => (refs.current[i] = el)}>
              <p>{s.body}</p>
              <p className="signal">{s.signal}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

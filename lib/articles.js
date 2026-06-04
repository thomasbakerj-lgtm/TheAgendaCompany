// Launch articles for The Agenda. Each has an AI-answer summary, body blocks, FAQ, and SEO.

export const ARTICLES = {
  "why-the-agenda-is-the-strategy": {
    title: "Why the Agenda Is the Strategy",
    category: "Event Strategy",
    seoTitle: "Why the Agenda Is the Strategy",
    metaDescription:
      "Most events start with a venue. The ones that change something start with the agenda. Here's why agenda-first design is the real strategy behind a professional gathering.",
    published: "2026-01-15",
    keyword: "agenda-led event management",
    summary:
      "The agenda is the strategy because it determines what a gathering is for, who should be there, and what should change as a result. Venues, vendors, and production are logistics in service of that strategy — not substitutes for it.",
    body: [
      { h: null, p: "Ask most teams how an event is going and they'll tell you about the venue, the catering, the AV, the registration line. All real. All logistics. None of it answers the only question leadership actually asks afterward: what did that change?" },
      { h: "Logistics is not strategy", p: "A planner can book the room. A producer can manage the stage. A platform can automate registration. None of those decide why you're gathering, who needs to be there, or what people should be able to do when they leave. That's the agenda — and the agenda is where the strategy lives." },
      { h: "The accountability shift", p: "The timing matters. Events are becoming more intentional, more human, and more accountable (Cvent 2026 Event Trends), and roughly 70% of the industry isn't currently equipped to prove what its events delivered (Global DMC Partners, 2026). An agenda built backward from a defined outcome is the difference between a gathering you can defend and one you can only describe." },
      { h: "Editing applied to time", p: "Designing an agenda is editorial work: sequencing ideas, cutting noise, structuring attention, and building flow so each session, break, and conversation has a purpose. Treat the agenda as the architecture for the whole experience, and the logistics fall into place around it — not the reverse." },
    ],
    faqs: [
      { q: "What does \"the agenda is the strategy\" mean?", a: "It means the agenda — the purpose, audience, flow, and intended outcomes of a gathering — is what determines its value. Logistics support the agenda; they don't replace it." },
      { q: "How is agenda-first design different from normal event planning?", a: "Normal planning starts with the venue and works inward. Agenda-first design starts with the outcome and works outward, choosing venue and vendors to serve it." },
    ],
    related: { service: "agenda-strategy-event-design", post: "the-difference-between-event-logistics-and-event-strategy" },
  },

  "what-makes-a-professional-gathering-worth-the-time": {
    title: "What Makes a Professional Gathering Worth the Time?",
    category: "Better Meetings",
    seoTitle: "What Makes a Professional Gathering Worth the Time?",
    metaDescription:
      "Attendance isn't value. A professional gathering is worth the time when it's designed around a clear purpose, the right people, and a defined outcome.",
    published: "2026-01-22",
    keyword: "professional gathering",
    summary:
      "A professional gathering is worth the time when it has a clear purpose, the right people in the room, a deliberate flow, and a defined outcome people can act on afterward. Atmosphere alone doesn't make time together valuable.",
    body: [
      { h: null, p: "In a distributed-work era, every in-person gathering competes with the alternative: not gathering at all. That raises the bar. In-person time is only worth the cost when it's designed around clear goals — when every minute together is intentional rather than obligatory." },
      { h: "Four tests", p: "Before you gather, four questions decide whether it'll be worth it. Why does this exist, and what must be different when people leave? Who actually needs to be in the room? What should happen while everyone's together? And what progress should exist afterward? If you can't answer all four, the gathering isn't ready — the agenda is." },
      { h: "Designed, not just scheduled", p: "A schedule lists what happens when. An agenda designs what each moment is for. The gatherings people remember — and defend in a budget review — are the ones where the flow was built deliberately, the right conversations were made to happen, and there was a clear answer at the end to what changed." },
    ],
    faqs: [
      { q: "What makes an event worth attending?", a: "A clear purpose, the right participants, a deliberate flow, and an outcome you can act on. Without those, even a polished event is just a well-run room." },
      { q: "Why do distributed teams still gather in person?", a: "Because in-person time, when designed around clear goals, builds belonging and alignment in ways remote work can't — but only when it's intentional, not obligatory." },
    ],
    related: { service: "professional-meetings-leadership-gatherings", post: "why-the-agenda-is-the-strategy" },
  },

  "event-roi-what-to-measure-before-the-room-is-booked": {
    title: "Event ROI: What to Measure Before the Room Is Booked",
    category: "Event ROI & Outcomes",
    seoTitle: "Event ROI: What to Measure Before the Room Is Booked",
    metaDescription:
      "Event ROI is a design decision, not an afterthought. Here's what to define before the room is booked so you can prove what your gathering delivered.",
    published: "2026-01-29",
    keyword: "event ROI measurement",
    summary:
      "Event ROI should be defined before the room is booked. Decide what change you want — in behavior, alignment, decisions, or relationships — and how you'll capture it, so the gathering is built to produce and prove a result rather than just an experience.",
    body: [
      { h: null, p: "Most event measurement happens too late: a satisfaction survey after the fact, a headcount, a highlight reel. By then the design that would have produced a measurable result is already set. ROI isn't something you measure at the end — it's something you design at the start." },
      { h: "The gap is real", p: "Roughly 70% of the events industry isn't currently equipped to prove what its events delivered — only about 30% use data or analytics to track ROI, and 44% have no measurement in place at all (Global DMC Partners Meetings & Events Industry Pulse Survey, 2026). A great experience doesn't automatically equal a result." },
      { h: "Define it first", p: "Before the venue, decide what should change: a decision made, a team aligned, a skill applied, a relationship advanced, a pipeline moved. Then decide how you'll capture each one. Measurement designed in at the start — and tied to the outcome the agenda is built around — is what turns attendance into something you can report." },
      { h: "Why it matters", p: "What gets measured gets valued, and what gets valued keeps getting funded. The gatherings that survive budget scrutiny are the ones whose owners can answer, specifically, what changed." },
    ],
    faqs: [
      { q: "When should you plan event measurement?", a: "Before the room is booked. Define the change you want and how you'll capture it at the design stage, not after the event." },
      { q: "What should you measure for event ROI?", a: "Outcomes, not atmosphere: decisions made, alignment created, skills applied, relationships advanced, or pipeline moved — whatever the gathering was designed to produce." },
    ],
    related: { service: "agenda-strategy-event-design", post: "why-the-agenda-is-the-strategy" },
  },
};

// Editorial roadmap shown on the hub (full 15-topic plan lives in the source-of-truth doc).
export const CATEGORIES = [
  "Better Meetings",
  "Professional Development",
  "Event Strategy",
  "Phoenix Field Notes",
  "Group Tours & Field Experiences",
  "Leadership Gatherings",
  "Event ROI & Outcomes",
  "Community Programming",
];

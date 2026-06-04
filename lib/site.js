// Central site configuration and content data.
// Update SITE.url, email, phone, and social URLs when finalized.

export const SITE = {
  name: "The Agenda Company",
  shortName: "The Agenda Company",
  url: "https://theagendacompany.com", // TODO: replace with final domain
  tagline: "The agenda is the strategy.",
  description:
    "The Agenda Company is a Phoenix-based boutique event management firm designing agenda-led professional meetings, curated field experiences, learning events, and gathering series built for measurable outcomes.",
  locality: "Phoenix",
  region: "AZ",
  country: "US",
  email: "", // TODO: add when finalized (leave empty to omit publicly)
  phone: "", // TODO: add when finalized
  founder: { name: "Jessica Barreras", title: "Founder & CEO" },
  areaServed: ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Greater Phoenix", "Arizona"],
  social: {
    // TODO: add when live, then they are emitted into sameAs automatically
    linkedin: "",
    instagram: "",
    googleBusiness: "",
  },
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "The Agenda Method", href: "/method" },
  { label: "About", href: "/about" },
  { label: "The Agenda", href: "/the-agenda" },
  { label: "Contact", href: "/contact" },
];

export const CTA = {
  primary: { label: "Start Planning the Right Gathering", href: "/contact" },
  secondary: { label: "Explore The Agenda Method", href: "/method" },
};

export const SERVICES = [
  {
    slug: "agenda-strategy-event-design",
    title: "Agenda Strategy & Event Design",
    short: "Define purpose, audience, flow, and outcomes before anything is booked.",
    serviceType: "Event strategy and agenda design",
  },
  {
    slug: "professional-meetings-leadership-gatherings",
    title: "Professional Meetings & Leadership Gatherings",
    short: "Executive sessions, retreats, councils, and roundtables built for alignment.",
    serviceType: "Professional meeting and leadership gathering planning",
  },
  {
    slug: "curated-professional-tours-field-experiences",
    title: "Curated Professional Tours & Field Experiences",
    short: "Learning-driven tours across Phoenix's innovation economy and beyond.",
    serviceType: "Curated professional tours and field experiences",
  },
  {
    slug: "professional-development-learning-events",
    title: "Professional Development & Learning Events",
    short: "Workshops and training designed for real application.",
    serviceType: "Professional development and learning event planning",
  },
  {
    slug: "event-series-community-programming",
    title: "Event Series & Community Programming",
    short: "Recurring gatherings that build trust and community over time.",
    serviceType: "Event series and community programming",
  },
];

export const METHOD = [
  { step: "01", name: "Intent", body: "Define why the gathering exists and what must be different when people leave." },
  { step: "02", name: "Audience", body: "Clarify who is in the room, what they care about, and what they need to experience." },
  { step: "03", name: "Arc", body: "Build the flow so each session, break, tour, and conversation has a purpose." },
  { step: "04", name: "Environment", body: "Select and shape the room, venue, movement, food, sound, signage, and guest experience." },
  { step: "05", name: "Execution", body: "Manage vendors, timing, speakers, attendee flow, registration, and onsite details." },
  { step: "06", name: "Outcomes", body: "Capture what happened, what changed, what comes next, and who owns the follow-up." },
];

export const DIFFERENTIATORS = [
  "Agenda-first event design",
  "Editorial-grade programming and content structure",
  "Professional, calm, detailed execution",
  "Outcome-driven event management",
  "Boutique, senior-led support",
  "Phoenix roots with national-level event experience",
  "Event series and community programming, not just one-off planning",
  "Post-event follow-through and action mapping",
  "Measurement planned in from the beginning",
  "Curated field experiences connected to Phoenix's innovation economy",
];

export const POSTS = [
  { slug: "why-the-agenda-is-the-strategy", title: "Why the Agenda Is the Strategy", category: "Event Strategy", excerpt: "Most events start with a venue. The ones that change something start with the agenda." },
  { slug: "what-makes-a-professional-gathering-worth-the-time", title: "What Makes a Professional Gathering Worth the Time?", category: "Better Meetings", excerpt: "Attendance is not the same as value. Here is what separates the two." },
  { slug: "event-roi-what-to-measure-before-the-room-is-booked", title: "Event ROI: What to Measure Before the Room Is Booked", category: "Event ROI & Outcomes", excerpt: "Measurement is a design decision, not an afterthought." },
];

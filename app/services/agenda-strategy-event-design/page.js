import ServicePage, { buildServiceMetadata } from "@/components/ServicePage";

const SLUG = "agenda-strategy-event-design";

export function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ServicePage slug={SLUG} />;
}

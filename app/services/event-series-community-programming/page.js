import ServicePage, { buildServiceMetadata } from "@/components/ServicePage";

const SLUG = "event-series-community-programming";

export function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ServicePage slug={SLUG} />;
}

import ServicePage, { buildServiceMetadata } from "@/components/ServicePage";

const SLUG = "professional-meetings-leadership-gatherings";

export function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ServicePage slug={SLUG} />;
}

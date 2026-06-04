import ServicePage, { buildServiceMetadata } from "@/components/ServicePage";

const SLUG = "professional-development-learning-events";

export function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ServicePage slug={SLUG} />;
}

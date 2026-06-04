import ServicePage, { buildServiceMetadata } from "@/components/ServicePage";

const SLUG = "curated-professional-tours-field-experiences";

export function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ServicePage slug={SLUG} />;
}

// Server-rendered JSON-LD. Accepts one schema object or an array.
export default function JsonLd({ data }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}

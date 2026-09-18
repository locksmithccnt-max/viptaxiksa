interface JsonLdProps {
  data: object
}

/** Renders a JSON-LD script tag server-side. Escapes < to prevent XSS. */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

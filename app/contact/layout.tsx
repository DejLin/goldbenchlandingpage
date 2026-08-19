import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | GoldBench",
  description:
    "Fragen zu GoldBench, dem Sprachassistenten für Goldschmiede? Schreiben Sie uns – wir antworten in der Regel innerhalb von 24 Stunden.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

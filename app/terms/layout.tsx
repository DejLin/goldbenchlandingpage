import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | Goldbench",
  description:
    "Die Nutzungsbedingungen für Goldbench, den Sprachassistenten für unabhängige Goldschmiede und Schmuckateliers.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

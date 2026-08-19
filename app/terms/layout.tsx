import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | GoldBench",
  description:
    "Die Nutzungsbedingungen für GoldBench, den Sprachassistenten für unabhängige Goldschmiede und Schmuckateliers.",
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

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "30 Tage kostenlos testen | Goldbench",
  description:
    "Teste Goldbench 30 Tage kostenlos – inklusive persönlichem 15-Minuten-Onboarding. Der sprachgesteuerte Arbeitsplatz für unabhängige Goldschmiede und Schmuckateliers.",
  alternates: {
    canonical: "/early-access",
  },
}

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

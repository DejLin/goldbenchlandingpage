import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Früher Zugang | GoldBench",
  description:
    "Sichern Sie sich frühen Zugang zu GoldBench, dem Sprachassistenten exklusiv für unabhängige Goldschmiede und Schmuckateliers.",
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

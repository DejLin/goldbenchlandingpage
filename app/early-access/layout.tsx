import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Früher Zugang | Goldbench",
  description:
    "Sichern Sie sich frühen Zugang zu Goldbench, dem Sprachassistenten exklusiv für unabhängige Goldschmiede und Schmuckateliers.",
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

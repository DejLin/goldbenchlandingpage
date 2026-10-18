import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz | Goldbench",
  description:
    "Erfahren Sie, wie Goldbench Ihre Daten und die Ihrer Kunden schützt und sicher in der Schweiz aufbewahrt.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GoldBench – Sprachassistent für Goldschmiede",
    short_name: "GoldBench",
    description:
      "Der erste Sprachassistent exklusiv für Goldschmiede. Diktieren Sie Angebote, erfassen Sie Material und verwalten Sie Kunden in Sekunden.",
    lang: "de-CH",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#0a0a0b",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}

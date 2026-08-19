import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { LanguageSwitcher } from '@/components/landing/language-switcher'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const SITE_TITLE = 'GoldBench | Sprachassistent für unabhängige Goldschmiede'
const SITE_DESCRIPTION =
  'Der erste Sprachassistent exklusiv für Goldschmiede. Diktieren Sie Angebote, erfassen Sie Material und verwalten Sie Kunden in Sekunden – ohne Ihr Werkzeug aus der Hand zu legen.'
const SITE_URL = 'https://www.goldbench.ch'
const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 634,
  alt: 'GoldBench – Sprachassistent für Goldschmiede: Goldschmied am Werktisch mit Sprachaufnahme, Kundenverwaltung und Atelier-Dashboard',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'Sprachassistent Goldschmiede',
    'Goldschmiede Software',
    'Atelier Software Schmuck',
    'Schmuck Werkstatt Software Schweiz',
    'GoldBench',
  ],
  generator: 'GoldBench',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'GoldBench',
    locale: 'de_CH',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'GoldBench',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      description:
        'Schweizer Anbieter eines Sprachassistenten für unabhängige Goldschmiede und Schmuckateliers.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CH',
      },
      areaServed: ['CH', 'DE', 'AT'],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'GoldBench',
      applicationCategory: 'Business Management Software',
      operatingSystem: 'Web, Voice',
      url: SITE_URL,
      inLanguage: 'de-CH',
      description: SITE_DESCRIPTION,
      countryOfOrigin: {
        '@type': 'Country',
        name: 'Switzerland',
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-CH" className="bg-obsidian">
      <body className={`${inter.variable} ${geistMono.variable} ${cormorant.variable} font-sans antialiased bg-obsidian text-platinum selection:bg-gold/20 selection:text-gold`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

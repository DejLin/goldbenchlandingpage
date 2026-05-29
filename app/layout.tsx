import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'GoldBench | AI Assistant Software for Swiss Goldsmiths & Jewelers',
  description: 'Automate customer inquiries, supplier emails, and atelier scheduling with GoldBench. Save 15+ hours a month and focus on crafting jewelry.',
  keywords: ['goldsmith AI', 'jewelry atelier software', 'Swiss jeweler CRM', 'GoldBench'],
  generator: 'GoldBench',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'GoldBench | AI Assistant for Goldsmiths',
    description: 'The smart assistant built specifically for Swiss jewelry ateliers.',
    url: 'https://www.goldbench.ch',
    siteName: 'GoldBench',
    locale: 'de_CH',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-obsidian">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-obsidian text-platinum selection:bg-gold/20 selection:text-gold`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

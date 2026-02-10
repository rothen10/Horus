import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Horus - Services Professionnels de Drones à Douala',
  description:
    'Horus : solutions complètes de services de drones à Douala, Cameroun. Ventes, maintenance, formations et inspection aérienne professionnelle.',
  generator: 'v0.app',
  keywords: [
    'drone',
    'drones Douala',
    'services drones Cameroun',
    'vente drones',
    'maintenance drone',
    'formation drone',
    'inspection aérienne',
    'photographie aérienne',
    'surveillance drone',
  ],
  robots: 'index, follow',
  authors: [{ name: 'Horus Drone Services' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://horus-drones.cm',
    siteName: 'Horus Drone Services',
    title: 'Horus - Services Professionnels de Drones',
    description: 'Solutions complètes de drones à Douala, Cameroun',
    images: [
      {
        url: 'https://horus-drones.cm/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Horus - Services Professionnels de Drones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horus - Services Professionnels de Drones',
    description: 'Solutions complètes de drones à Douala, Cameroun',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FFA500',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          :root {
            --font-geist-sans: ${geist.style.fontFamily};
            --font-geist-mono: ${geistMono.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

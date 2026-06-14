import type { Metadata } from 'next'
import './globals.css'
import AnimationProvider from '@/components/AnimationProvider'

export const metadata: Metadata = {
  title: 'SERP-Pulse — Your SEO Data, Finally Unified',
  description: 'Unified GSC + GA4 analytics, AI citation tracking from ChatGPT/Claude/Perplexity/Gemini, white-label reports, and MCP server. Built by an SEO.',
  metadataBase: new URL('https://www.serp-pulse.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    siteName: 'SERP-Pulse',
    title: 'SERP-Pulse — Your SEO Data, Finally Unified',
    description: 'Unified GSC + GA4 analytics, AI citation tracking from ChatGPT/Claude/Perplexity/Gemini, white-label reports, and MCP server. Built by an SEO.',
    url: 'https://www.serp-pulse.com',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'SERP-Pulse — Unified SEO Analytics' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@serppulse',
    title: 'SERP-Pulse — Your SEO Data, Finally Unified',
    description: 'Unified GSC + GA4 analytics, AI citation tracking from ChatGPT/Claude/Perplexity/Gemini, white-label reports, and MCP server. Built by an SEO.',
    images: ['/og-default.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}<AnimationProvider /></body>
    </html>
  )
}

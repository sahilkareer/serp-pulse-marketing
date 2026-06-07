import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SERP-Pulse — Your SEO Data, Finally Unified',
  description: 'Unified GSC + GA4 analytics, AI citation tracking from ChatGPT/Claude/Perplexity/Gemini, white-label reports, and MCP server. Built by an SEO.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}

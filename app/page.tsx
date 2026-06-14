import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Hero from '@/components/blocks/Hero'
import { TrustBar, HowItWorks } from '@/components/blocks/SectionBlocks'
import { Testimonials, FounderStory, Pricing, Integrations, FinalCta } from '@/components/blocks/MoreBlocks'
import HomepageFeatures from '@/components/HomepageFeatures'
import { client, HOME_QUERY } from '@/sanity/lib/client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SERP-Pulse — Unified SEO Analytics: GSC + GA4 + AI Traffic',
  description: 'SERP-Pulse unifies Google Search Console, GA4 Analytics, and AI platform traffic into one dashboard. Find growth opportunities, track AI citations, and generate client reports in minutes.',
  alternates: { canonical: 'https://www.serp-pulse.com/' },
  openGraph: {
    title: 'SERP-Pulse — Unified SEO Analytics: GSC + GA4 + AI Traffic',
    description: 'Unify Google Search Console, GA4, and AI citation tracking in one dashboard. Track ChatGPT, Perplexity, Claude, and Gemini traffic. 90-day free trial.',
    url: 'https://www.serp-pulse.com/',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'SERP-Pulse Dashboard' }],
  },
  twitter: {
    title: 'SERP-Pulse — Unified SEO Analytics: GSC + GA4 + AI Traffic',
    description: 'Unify Google Search Console, GA4, and AI citation tracking in one dashboard. Track ChatGPT, Perplexity, Claude, and Gemini traffic. 90-day free trial.',
    images: ['/og-default.png'],
  },
}

// Revalidate at most every 60 seconds so edits in Sanity go live quickly
export const revalidate = 60

export default async function HomePage() {
  // Fetch content from Sanity — typed as any so strict TS doesn't complain about unknown properties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = await client.fetch(HOME_QUERY).catch(() => null)

  // Helper: find a block by _type from the pageBuilder array
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const block = (type: string): any =>
    Array.isArray(page?.pageBuilder)
      ? page.pageBuilder.find((b: any) => b._type === type) ?? undefined
      : undefined

  return (
    <>
      <SiteNav />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SERP-Pulse',
            url: 'https://www.serp-pulse.com',
            logo: 'https://www.serp-pulse.com/favicon.png',
            sameAs: ['https://www.linkedin.com/company/serp-pulse'],
            contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://www.serp-pulse.com/contact' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'SERP-Pulse',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: 'https://www.serp-pulse.com',
            description: 'Unified SEO analytics platform combining Google Search Console, Google Analytics 4, and AI citation tracking from ChatGPT, Claude, Perplexity, and Gemini.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: '90-day free trial on all plans',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'SERP-Pulse',
            url: 'https://www.serp-pulse.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.serp-pulse.com/blog?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ]) }}
      />

      {/* ── Sanity-powered sections ── */}
      <Hero data={block('hero')} />
      <TrustBar data={block('trustBar')} />

      {/* ── Static feature sections (product mockups, rarely edited) ── */}
      <HomepageFeatures />

      {/* ── Sanity-powered sections (continued) ── */}
      <HowItWorks data={block('howItWorks')} />
      <Testimonials data={block('testimonials')} />
      <FounderStory data={block('founderStory')} />
      <Pricing data={block('pricing')} />
      <Integrations data={block('integrations')} />
      <FinalCta data={block('finalCta')} />

      <SiteFooter />
    </>
  )
}

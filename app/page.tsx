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
}

// Revalidate at most every 60 seconds so edits in Sanity go live quickly
export const revalidate = 60

export default async function HomePage() {
  // Fetch content from Sanity — gracefully falls back to component defaults if document doesn't exist yet
  const page = await client
    .fetch(HOME_QUERY, {}, { next: { revalidate: 60 } })
    .catch(() => null)

  // Helper: find a block by _type from the pageBuilder array
  const block = (type: string) =>
    Array.isArray(page?.pageBuilder)
      ? page.pageBuilder.find((b: any) => b._type === type) ?? undefined
      : undefined

  return (
    <>
      <SiteNav />

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

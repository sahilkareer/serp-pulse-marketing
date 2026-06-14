import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import BlogListingClient from '@/components/BlogListingClient'
import { client, BLOG_INDEX_QUERY, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'blog' }).catch(() => null)
  return {
    title: d?.seoTitle || 'Blog — SERP-Pulse',
    description: d?.seoDesc || 'SEO guides, AI traffic insights, and analytics guides — written by a practitioner, for practitioners.',
    alternates: { canonical: 'https://www.serp-pulse.com/blog' },
    openGraph: {
      title: d?.seoTitle || 'Blog — SERP-Pulse',
      description: d?.seoDesc || 'SEO guides, AI traffic insights, and analytics guides — written by a practitioner, for practitioners.',
      url: 'https://www.serp-pulse.com/blog',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'SERP-Pulse Blog' }],
    },
    twitter: {
      title: d?.seoTitle || 'Blog — SERP-Pulse',
      description: d?.seoDesc || 'SEO guides, AI traffic insights, and analytics guides — written by a practitioner, for practitioners.',
      images: ['/og-default.png'],
    },
  }
}

/* ── Default posts when Sanity is empty ─────────────────────────────────── */
const DEFAULT_POSTS = [
  {
    slug: 'how-to-track-ai-traffic-in-ga4',
    title: 'How to track ChatGPT, Claude & Perplexity traffic in Google Analytics 4',
    excerpt: 'AI platforms are sending real visitors to your site. GA4 buries them under raw referral domains. Here\u2019s how to find them \u2014 and why SERP-Pulse makes it automatic.',
    category: 'ai-traffic',
    readTime: '8 min read',
    publishedAt: '2026-06-09',
    featured: true,
    author: 'Sahil Kareer',
  },
  {
    slug: 'sweet-spot-keywords',
    title: 'Sweet spot keywords: the filter most SEOs have never used',
    excerpt: 'High impressions, low CTR. These keywords are the easiest ranking wins on any site \u2014 you already rank for them.',
    category: 'google-search-console',
    readTime: '6 min read',
    publishedAt: '2026-06-05',
    featured: false,
    author: 'Sahil Kareer',
  },
  {
    slug: 'manage-50-seo-projects',
    title: 'How to manage 50+ client SEO projects without losing your mind',
    excerpt: 'The exact workflow for monitoring an entire client portfolio in under 30 minutes per week.',
    category: 'agency-seo',
    readTime: '10 min read',
    publishedAt: '2026-06-01',
    featured: false,
    author: 'Sahil Kareer',
  },
]

const COMING_SOON = [
  { title: 'Coming soon: Client reporting templates that save hours', excerpt: 'New article on its way. Subscribe to get notified.', category: 'reporting' },
  { title: 'Coming soon: AI traffic strategy for content teams', excerpt: 'Subscribe to get notified when it publishes.', category: 'strategy' },
]

export default async function BlogPage() {
  const posts: any[] = await client.fetch(BLOG_INDEX_QUERY).catch(() => []) || []
  const displayPosts = posts.length > 0 ? posts : DEFAULT_POSTS

  return (
    <>
      <SiteNav />
      <div className="blog-page">
        <BlogListingClient posts={displayPosts} comingSoon={COMING_SOON} />
      </div>
      <SiteFooter />
    </>
  )
}

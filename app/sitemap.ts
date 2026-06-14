import type { MetadataRoute } from 'next'

const BASE = 'https://www.serp-pulse.com'

// Static pages with their priorities and change frequencies
const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
  { url: '/',                             priority: 1.0, changeFrequency: 'weekly'  },
  { url: '/pricing',                      priority: 0.9, changeFrequency: 'weekly'  },
  { url: '/features',                     priority: 0.8, changeFrequency: 'monthly' },
  { url: '/features/search-console',      priority: 0.8, changeFrequency: 'monthly' },
  { url: '/features/analytics',           priority: 0.8, changeFrequency: 'monthly' },
  { url: '/features/ai-traffic',          priority: 0.8, changeFrequency: 'monthly' },
  { url: '/features/reports',             priority: 0.7, changeFrequency: 'monthly' },
  { url: '/features/mcp',                 priority: 0.7, changeFrequency: 'monthly' },
  { url: '/features/growth',              priority: 0.7, changeFrequency: 'monthly' },
  { url: '/features/seo-weather',         priority: 0.6, changeFrequency: 'monthly' },
  { url: '/features/branded-keywords',    priority: 0.6, changeFrequency: 'monthly' },
  { url: '/features/page-behavior',       priority: 0.6, changeFrequency: 'monthly' },
  { url: '/use-cases/agencies',           priority: 0.8, changeFrequency: 'monthly' },
  { url: '/use-cases/freelancers',        priority: 0.8, changeFrequency: 'monthly' },
  { url: '/use-cases/in-house',           priority: 0.7, changeFrequency: 'monthly' },
  { url: '/integrations',                 priority: 0.7, changeFrequency: 'monthly' },
  { url: '/blog',                         priority: 0.7, changeFrequency: 'weekly'  },
  { url: '/about',                        priority: 0.6, changeFrequency: 'monthly' },
  { url: '/contact',                      priority: 0.5, changeFrequency: 'yearly'  },
  { url: '/roadmap',                      priority: 0.5, changeFrequency: 'weekly'  },
  { url: '/privacy',                      priority: 0.3, changeFrequency: 'yearly'  },
  { url: '/terms',                        priority: 0.3, changeFrequency: 'yearly'  },
]

// Known blog posts — extend this list as new posts are published
const blogPosts: string[] = [
  '/blog/how-to-track-ai-traffic-in-ga4',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE}${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}

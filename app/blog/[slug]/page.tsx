import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import BlogPostClient from '@/components/BlogPostClient'
import { client, BLOG_POST_QUERY, BLOG_SLUGS_QUERY, BLOG_INDEX_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs: any[] = await client.fetch(BLOG_SLUGS_QUERY).catch(() => [])
  return (slugs || []).map((item: any) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post: any = await client.fetch(BLOG_POST_QUERY, { slug }).catch(() => null)
  const title = post?.title || FALLBACK_POSTS[slug]?.title || 'Post not found'
  const desc = post?.excerpt || FALLBACK_POSTS[slug]?.excerpt || ''
  return {
    title: `${title} \u2014 SERP-Pulse`,
    description: desc,
    alternates: { canonical: `https://www.serp-pulse.com/blog/${slug}` },
    openGraph: {
      title: `${title} \u2014 SERP-Pulse`,
      description: desc,
      url: `https://www.serp-pulse.com/blog/${slug}`,
      type: 'article',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title: `${title} \u2014 SERP-Pulse`,
      description: desc,
      images: ['/og-default.png'],
    },
  }
}

const APP = 'https://app.serp-pulse.com'

const CATEGORY_CONFIG: Record<string, { label: string; catClass: string }> = {
  'ai-traffic':            { label: 'AI Traffic',            catClass: 'bl' },
  'google-search-console': { label: 'Search Console',       catClass: 'bl' },
  'analytics':             { label: 'Analytics',             catClass: 'am' },
  'agency-seo':            { label: 'Agency SEO',            catClass: 'pu' },
  'seo-strategy':          { label: 'SEO Strategy',          catClass: 'bl' },
}

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

/* ── Fallback content for known posts when Sanity has no body yet ───────── */
const FALLBACK_POSTS: Record<string, any> = {
  'how-to-track-ai-traffic-in-ga4': {
    title: 'How to track ChatGPT, Claude & Perplexity traffic in Google Analytics 4',
    excerpt: 'AI platforms are sending real visitors to your site right now. But GA4 categorises them as raw referral domains with no labels. Here\u2019s how to find them \u2014 and why SERP-Pulse makes it automatic.',
    category: 'ai-traffic',
    readTime: '8 min read',
    publishedAt: '2026-06-09',
    toc: [
      { id: 's1', label: 'Why AI traffic looks like direct traffic' },
      { id: 's2', label: 'How to find AI traffic manually in GA4' },
      { id: 's3', label: 'The three real problems with manual tracking' },
      { id: 's4', label: 'How SERP-Pulse handles AI traffic' },
      { id: 's5', label: 'Why this matters for content strategy' },
      { id: 's-faq', label: 'Frequently asked questions' },
    ],
    faqs: [
      { q: 'Does SERP-Pulse track all AI platforms?', a: 'Yes. 16+ platforms including ChatGPT, Claude, Perplexity, Gemini, Grok, Copilot, and more. New platforms added automatically.' },
      { q: 'Does AI tracking cost extra?', a: 'No. Included in every plan, including Freelancer at $20/month.' },
      { q: 'Can I see which pages AI platforms cite?', a: 'Yes. Per-page attribution shows sessions, engagement rate, and conversions from each AI platform.' },
      { q: 'What\u2019s the difference between AI traffic and AI citations?', a: 'AI traffic = actual visits via clicked links. AI citations = mentions without clicks. SERP-Pulse tracks traffic now; citation monitoring is on the roadmap.' },
    ],
    htmlContent: true,
  },
  'sweet-spot-keywords': {
    title: 'Sweet spot keywords: the filter most SEOs have never used',
    excerpt: 'High impressions, low CTR. These keywords are the easiest ranking wins on any site \u2014 you already rank for them. Here\u2019s how to find and act on them.',
    category: 'google-search-console',
    readTime: '6 min read',
    publishedAt: '2026-06-05',
    toc: [],
    faqs: [],
  },
  'manage-50-seo-projects': {
    title: 'How to manage 50+ client SEO projects without losing your mind',
    excerpt: 'The exact workflow for monitoring an entire client portfolio in under 30 minutes per week \u2014 without switching tabs, building spreadsheets, or missing a single declining site.',
    category: 'agency-seo',
    readTime: '10 min read',
    publishedAt: '2026-06-01',
    toc: [],
    faqs: [],
  },
}

/* ── PortableText components ────────────────────────────────────────────── */
const ptComponents = {
  block: {
    normal: ({ children }: any) => <p>{children}</p>,
    h2: ({ children, value }: any) => <h2 id={value?._key || undefined}>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    blockquote: ({ children }: any) => <div className="bp-callout">{children}</div>,
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    code: ({ children }: any) => <code>{children}</code>,
    link: ({ children, value }: any) => (
      <a href={value?.href} target={value?.blank ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: 'var(--bl-blue)', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 500 }}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul style={{ paddingLeft: 24, marginBottom: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</ul>,
    number: ({ children }: any) => <ol style={{ paddingLeft: 24, marginBottom: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--bl-text2)', paddingLeft: 4 }}>{children}</li>,
    number: ({ children }: any) => <li style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--bl-text2)', paddingLeft: 4 }}>{children}</li>,
  },
}

/* ── Hardcoded HTML content for the AI traffic post ─────────────────────── */
function AITrafficContent() {
  return (
    <>
      <h2 id="s1">Why AI traffic looks like direct traffic</h2>
      <p>When a user reads a response in ChatGPT and clicks a link to your site, their browser sends a referral header of <code>chat.openai.com</code>. GA4 records this as a referral from that domain. That&rsquo;s the good news.</p>
      <p>The bad news: GA4 doesn&rsquo;t label it as &ldquo;ChatGPT.&rdquo; It appears as a raw referral domain in a long table of dozens of referrers. If you&rsquo;re not specifically looking for <code>chat.openai.com</code>, <code>claude.ai</code>, or <code>perplexity.ai</code>, you&rsquo;ll scroll straight past them.</p>
      <div className="bp-callout"><strong>Key insight:</strong> AI referral traffic already exists in your analytics. It&rsquo;s not hidden &mdash; it&rsquo;s mislabelled. The challenge is aggregation, not detection.</div>

      <h2 id="s2">How to find AI traffic manually in GA4</h2>
      <p>Go to <strong>Reports &rarr; Acquisition &rarr; Traffic acquisition</strong>. Switch the primary dimension to Session source. Then search for individual AI domains one by one:</p>
      <div className="bp-codeblk">
        <div className="bp-codeblk-h"><span className="bp-codeblk-l">GA4 referral domains</span></div>
        <div className="bp-codeblk-b">chat.openai.com<br/>chatgpt.com<br/>claude.ai<br/>perplexity.ai<br/>gemini.google.com</div>
      </div>

      <h2 id="s3">The three real problems with manual tracking</h2>
      <p><strong>It&rsquo;s fragmented.</strong> You get separate rows for <code>chat.openai.com</code>, <code>chatgpt.com</code>, and the ChatGPT iOS app. They&rsquo;re all the same platform.</p>
      <p><strong>It&rsquo;s static.</strong> Every new AI platform requires manual filter updates. When Grok launched, every GA4 user had to update manually.</p>
      <p><strong>It has no trends.</strong> Understanding month-over-month growth requires exporting and spreadsheets.</p>
      <div className="bp-callout warn"><strong>Real example:</strong> One agency discovered they had been missing 2,400 monthly AI referral sessions &mdash; simply because nobody was searching for the right referral domains in GA4.</div>

      <h2 id="s4">How SERP-Pulse handles AI traffic</h2>
      <p>SERP-Pulse reads your raw GA4 referral data and automatically maps each domain to its parent AI platform. <code>chat.openai.com</code>, <code>chatgpt.com</code>, and the iOS variants all become &ldquo;ChatGPT.&rdquo;</p>
      <p>The result is a clean breakdown &mdash; by platform, by page, by engagement metric, by trend &mdash; that would take hours to produce manually.</p>

      <h2 id="s5">Why this matters for your content strategy</h2>
      <p>Once you can see which pages receive AI citation traffic, your content strategy changes. If your blog guide receives 1,840 AI referral sessions and your pricing page receives zero &mdash; <strong>AI models are citing educational content, not commercial pages.</strong></p>
      <p>That&rsquo;s a signal to write more in-depth guides. Structure them for citation. The traffic will follow.</p>
    </>
  )
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: any = await client.fetch(BLOG_POST_QUERY, { slug }).catch(() => null)
  const fallback = FALLBACK_POSTS[slug]

  if (!post && !fallback) notFound()

  const title = post?.title || fallback?.title
  const excerpt = post?.excerpt || fallback?.excerpt
  const category = post?.category || fallback?.category
  const readTime = post?.readTime || fallback?.readTime
  const publishedAt = post?.publishedAt || fallback?.publishedAt
  const cat = CATEGORY_CONFIG[category] || CATEGORY_CONFIG['seo-strategy']
  const toc = fallback?.toc || []
  const faqs = fallback?.faqs || []
  const hasPortableText = post?.content && Array.isArray(post.content) && post.content.length > 0
  const useHtmlFallback = fallback?.htmlContent && !hasPortableText

  // Fetch all posts for related + prev/next
  const allPosts: any[] = await client.fetch(BLOG_INDEX_QUERY).catch(() => []) || []
  const otherPosts = allPosts.filter((p) => p.slug !== slug)
  const currentIdx = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null
  const nextPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null

  // Article schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    author: { '@type': 'Person', name: 'Sahil Kareer' },
    publisher: { '@type': 'Organization', name: 'SERP-Pulse', url: 'https://www.serp-pulse.com' },
    datePublished: publishedAt,
    url: `https://www.serp-pulse.com/blog/${slug}`,
  }

  const pageUrl = `https://www.serp-pulse.com/blog/${slug}`

  return (
    <>
      <SiteNav />
      <div className="blog-post">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <BlogPostClient
          title={title}
          excerpt={excerpt}
          category={category}
          catLabel={cat.label}
          readTime={readTime}
          publishedAt={publishedAt ? formatDate(publishedAt) : ''}
          toc={toc}
          faqs={faqs}
          pageUrl={pageUrl}
          prevPost={prevPost ? { slug: prevPost.slug, title: prevPost.title } : null}
          nextPost={nextPost ? { slug: nextPost.slug, title: nextPost.title } : null}
          relatedPosts={otherPosts.slice(0, 2).map((p) => ({
            slug: p.slug,
            title: p.title,
            category: p.category,
            catLabel: (CATEGORY_CONFIG[p.category] || CATEGORY_CONFIG['seo-strategy']).label,
            catClass: (CATEGORY_CONFIG[p.category] || CATEGORY_CONFIG['seo-strategy']).catClass,
            readTime: p.readTime,
            publishedAt: p.publishedAt ? formatDate(p.publishedAt) : '',
          }))}
        >
          {/* Body content — either PortableText or hardcoded HTML */}
          {hasPortableText ? (
            <PortableText value={post.content} components={ptComponents} />
          ) : useHtmlFallback ? (
            <AITrafficContent />
          ) : (
            <p>Content coming soon.</p>
          )}
        </BlogPostClient>
      </div>
      <SiteFooter />
    </>
  )
}

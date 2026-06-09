import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, BLOG_POST_QUERY, BLOG_SLUGS_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

// Pre-generate known slugs at build time
export async function generateStaticParams() {
  const slugs: any[] = await client.fetch(BLOG_SLUGS_QUERY).catch(() => [])
  return (slugs || []).map((item: any) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post: any = await client.fetch(BLOG_POST_QUERY, { slug }).catch(() => null)
  if (!post) return { title: 'Post not found — SERP-Pulse' }
  return {
    title: `${post.title} — SERP-Pulse`,
    description: post.excerpt,
  }
}

const APP = 'https://app.serp-pulse.com'

const CATEGORY_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  'ai-traffic':            { label: 'AI Traffic',             color: '#8b5cf6', bg: 'rgba(139,92,246,.1)'  },
  'google-search-console': { label: 'Google Search Console',  color: '#0891b2', bg: 'rgba(8,145,178,.08)' },
  'analytics':             { label: 'Analytics',              color: '#f59e0b', bg: 'rgba(245,158,11,.08)' },
  'agency-seo':            { label: 'Agency SEO',             color: '#10b981', bg: 'rgba(16,185,129,.08)' },
  'seo-strategy':          { label: 'SEO Strategy',           color: '#0891b2', bg: 'rgba(8,145,178,.08)' },
}

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

// Portable text components matching the site design system
const ptComponents = {
  block: {
    normal: ({ children }: any) => (
      <p style={{ fontSize: 17, lineHeight: 1.78, color: 'var(--ink3)', marginBottom: 22 }}>{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 style={{ fontFamily: 'var(--hd)', fontSize: 'clamp(22px,3vw,26px)', fontWeight: 800, letterSpacing: -0.8, lineHeight: 1.25, color: 'var(--ink)', marginTop: 52, marginBottom: 16 }}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 style={{ fontFamily: 'var(--hd)', fontSize: 19, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.3, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 style={{ fontFamily: 'var(--hd)', fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginTop: 28, marginBottom: 8 }}>{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote style={{ borderLeft: '4px solid var(--tl)', paddingLeft: 20, margin: '32px 0', color: 'var(--mt)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.7, background: 'var(--bg)', borderRadius: '0 8px 8px 0', padding: '16px 20px' }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong style={{ fontWeight: 700, color: 'var(--ink)' }}>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    code: ({ children }: any) => (
      <code style={{ fontFamily: 'monospace', fontSize: '0.88em', background: 'var(--bg2)', color: 'var(--tl)', padding: '2px 6px', borderRadius: 4, border: '1px solid var(--bd)' }}>
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a href={value?.href} target={value?.blank ? '_blank' : undefined} rel="noopener noreferrer"
        style={{ color: 'var(--tl)', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 500 }}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul style={{ paddingLeft: 24, marginBottom: 22, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol style={{ paddingLeft: 24, marginBottom: 22, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink3)', paddingLeft: 4 }}>{children}</li>
    ),
    number: ({ children }: any) => (
      <li style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink3)', paddingLeft: 4 }}>{children}</li>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: any = await client.fetch(BLOG_POST_QUERY, { slug }).catch(() => null)

  if (!post) notFound()

  const cat = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG['seo-strategy']

  return (
    <>
      <SiteNav />

      {/* POST HEADER */}
      <section style={{ padding: '80px 24px 48px', background: 'var(--bg)', borderBottom: '1px solid var(--bd)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--mt)', marginBottom: 24 }}>
            <a href="/" style={{ color: 'var(--mt)', textDecoration: 'none' }}>Home</a>
            <span>→</span>
            <a href="/blog" style={{ color: 'var(--mt)', textDecoration: 'none' }}>Blog</a>
            <span>→</span>
            <span style={{ color: 'var(--ink3)' }}>{post.title}</span>
          </div>

          {/* Category + meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: cat.color, background: cat.bg, padding: '4px 12px', borderRadius: 20 }}>
              {cat.label}
            </span>
            {post.readTime && <span style={{ fontSize: 12, color: 'var(--mt)' }}>{post.readTime}</span>}
            {post.publishedAt && (
              <>
                <span style={{ fontSize: 12, color: 'var(--mt3)' }}>·</span>
                <span style={{ fontSize: 12, color: 'var(--mt)' }}>{formatDate(post.publishedAt)}</span>
              </>
            )}
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--hd)', fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 18 }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p style={{ fontSize: 18, color: 'var(--mt)', lineHeight: 1.65, borderLeft: '3px solid var(--tl)', paddingLeft: 16, margin: 0 }}>
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* POST CONTENT */}
      <section style={{ padding: '56px 24px 80px', background: 'var(--wh)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          {post.content ? (
            <PortableText value={post.content} components={ptComponents} />
          ) : (
            <p style={{ color: 'var(--mt)', fontSize: 16 }}>Content coming soon.</p>
          )}
        </div>
      </section>

      {/* AUTHOR + BACK */}
      <section style={{ padding: '40px 24px', background: 'var(--bg)', borderTop: '1px solid var(--bd)', borderBottom: '1px solid var(--bd)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,var(--tl),var(--tl3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--hd)', fontSize: 15, fontWeight: 700, color: 'white', flexShrink: 0 }}>SK</div>
            <div>
              <div style={{ fontFamily: 'var(--hd)', fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Sahil Kareer</div>
              <div style={{ fontSize: 12, color: 'var(--mt)' }}>Founder, SERP-Pulse · 6+ years in SEO & agencies</div>
            </div>
          </div>
          <a href="/blog" style={{ fontSize: 13, color: 'var(--tl)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
            ← Back to all posts
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band dark-sec" style={{ background: 'var(--d)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)', pointerEvents: 'none' }} />
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <h2>See it in your own data.</h2>
          <p>Connect SERP-Pulse to your GSC and GA4 in under 2 minutes. Free 30-day trial.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <a href={`${APP}/signup`} className="btn-h">
              Start Free Trial — No Card Needed{' '}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href={APP} className="btn-g">View live app →</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' as const, marginTop: 16 }}>
            <span className="fck">30-day free trial</span>
            <span className="fck">No credit card</span>
            <span className="fck">2-min setup</span>
            <span className="fck">Cancel anytime</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

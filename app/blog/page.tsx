import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, BLOG_INDEX_QUERY, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'blog' }).catch(() => null)
  return {
    title: d?.seoTitle || 'Blog — SERP-Pulse',
    description: d?.seoDesc || 'SEO guides, AI traffic insights, and data-driven strategies from the SERP-Pulse team.',
  }
}

const APP = 'https://app.serp-pulse.com'

const CATEGORY_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  'ai-traffic':           { label: 'AI Traffic',              color: '#8b5cf6', bg: 'rgba(139,92,246,.08)' },
  'google-search-console':{ label: 'Google Search Console',   color: 'var(--tl)', bg: 'var(--ts)' },
  'analytics':            { label: 'Analytics',               color: '#f59e0b', bg: 'rgba(245,158,11,.08)' },
  'agency-seo':           { label: 'Agency SEO',              color: '#10b981', bg: 'rgba(16,185,129,.08)' },
  'seo-strategy':         { label: 'SEO Strategy',            color: 'var(--tl)', bg: 'var(--ts)' },
}

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

const UPCOMING_POSTS = [
  { tag: 'AI Traffic',             tagColor: '#8b5cf6', tagBg: 'rgba(139,92,246,.08)', title: 'How to Track ChatGPT, Claude & Perplexity Traffic in Google Analytics 4', desc: 'A complete guide to identifying AI referral traffic in GA4 — and why standard analytics tools are blind to it.', readTime: '8 min read' },
  { tag: 'Google Search Console',  tagColor: 'var(--tl)', tagBg: 'var(--ts)',           title: 'Sweet Spot Keywords: The Filter Most SEOs Have Never Heard Of',             desc: 'High impressions, low CTR. These are the easiest ranking wins on your site — and you already rank for them.',    readTime: '6 min read' },
  { tag: 'Agency SEO',             tagColor: '#10b981', tagBg: 'rgba(16,185,129,.08)', title: 'How to Manage 50+ Client SEO Projects Without Losing Your Mind',             desc: 'The exact workflow I use to monitor an entire client portfolio in under 30 minutes per week.',                    readTime: '10 min read' },
  { tag: 'Analytics',              tagColor: '#f59e0b', tagBg: 'rgba(245,158,11,.08)', title: 'GSC + GA4: Why Using Both Together Changes Everything',                      desc: 'Impressions without sessions is guessing. Sessions without impressions is also guessing. Here\'s how to use both.',readTime: '7 min read' },
]

export default async function BlogPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'blog' }).catch(() => null)
  const posts: any[] = await client.fetch(BLOG_INDEX_QUERY).catch(() => []) || []
  const hasPosts = posts.length > 0

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section style={{ padding: '80px 0 48px', background: 'var(--bg)', borderBottom: '1px solid var(--bd)' }}>
        <div className="w" style={{ textAlign: 'center' }}>
          <div className="sl" style={{ justifyContent: 'center', display: 'flex' }}>{d?.heroLabel || 'Resources'}</div>
          <h1 className="sh">{d?.heroHeadline || 'The SERP-Pulse Blog'}</h1>
          <p className="ss" style={{ textAlign: 'center', margin: '10px auto 0' }}>{d?.heroSubtext || 'SEO strategies, AI traffic insights, and analytics guides — written by a practitioner, for practitioners.'}</p>
        </div>
      </section>

      {hasPosts ? (
        /* ── LIVE POSTS ── */
        <section style={{ padding: '64px 0', background: 'var(--wh)' }}>
          <div className="w">
            {/* Featured post */}
            {posts.filter((p) => p.featured)[0] && (() => {
              const fp = posts.filter((p) => p.featured)[0]
              const cat = CATEGORY_CONFIG[fp.category] || CATEGORY_CONFIG['seo-strategy']
              return (
                <a href={`/blog/${fp.slug}`} style={{ display: 'block', textDecoration: 'none', marginBottom: 48 }}>
                  <div style={{ border: '2px solid var(--tl)', borderRadius: 16, padding: 36, background: 'rgba(8,145,178,.02)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--tl)', color: 'white', fontSize: 10, fontWeight: 700, padding: '4px 14px', borderRadius: '0 0 0 10px' }}>Featured</div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: cat.color, background: cat.bg, padding: '3px 10px', borderRadius: 4, display: 'inline-block', marginBottom: 14 }}>{cat.label}</span>
                    <h2 style={{ fontFamily: 'var(--hd)', fontSize: 'clamp(22px,3.5vw,30px)', fontWeight: 800, letterSpacing: -1, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>{fp.title}</h2>
                    <p style={{ fontSize: 15, color: 'var(--mt)', lineHeight: 1.65, marginBottom: 16, maxWidth: 640 }}>{fp.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, color: 'var(--mt2)' }}>
                      <span>{fp.readTime}</span>
                      {fp.publishedAt && <><span>·</span><span>{formatDate(fp.publishedAt)}</span></>}
                      <span style={{ marginLeft: 'auto', color: 'var(--tl)', fontWeight: 600 }}>Read article →</span>
                    </div>
                  </div>
                </a>
              )
            })()}

            {/* Post grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
              {posts.filter((p) => !p.featured).map((post: any) => {
                const cat = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG['seo-strategy']
                return (
                  <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ border: '1.5px solid var(--bd)', borderRadius: 12, padding: 24, background: 'var(--bg)', height: '100%', transition: 'border-color 0.15s, box-shadow 0.15s' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: cat.color, background: cat.bg, padding: '3px 10px', borderRadius: 4 }}>{cat.label}</span>
                        <span style={{ fontSize: 10, color: 'var(--mt)' }}>{post.readTime}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--hd)', fontSize: 16, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.4, marginBottom: 8, color: 'var(--ink)' }}>{post.title}</h3>
                      <p style={{ fontSize: 13, color: 'var(--mt2)', lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                      {post.publishedAt && (
                        <div style={{ marginTop: 14, fontSize: 11, color: 'var(--mt3)' }}>{formatDate(post.publishedAt)}</div>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        /* ── COMING SOON STATE ── */
        <section style={{ padding: '64px 0', background: 'var(--wh)' }}>
          <div className="w">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: '#f59e0b', background: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.2)', padding: '6px 14px', borderRadius: 20, marginBottom: 16 }}>
                ✍️ First posts coming soon
              </div>
              <h2 style={{ fontFamily: 'var(--hd)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, letterSpacing: -0.5, maxWidth: 500, margin: '0 auto 10px' }}>We&apos;re writing content that actually helps you do SEO better.</h2>
              <p style={{ fontSize: 14, color: 'var(--mt)', maxWidth: 480, margin: '0 auto' }}>No AI-generated listicles. No keyword stuffing. Just practical guides from someone who has done agency SEO for 6+ years.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, maxWidth: 920, margin: '0 auto' }}>
              {UPCOMING_POSTS.map(post => (
                <div key={post.title} style={{ border: '1.5px solid var(--bd)', borderRadius: 12, padding: 24, background: 'var(--bg)', opacity: 0.7 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: post.tagColor, background: post.tagBg, padding: '3px 10px', borderRadius: 4 }}>{post.tag}</span>
                    <span style={{ fontSize: 10, color: 'var(--mt)' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--hd)', fontSize: 15, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.4, marginBottom: 8 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--mt2)', lineHeight: 1.6, margin: 0 }}>{post.desc}</p>
                  <div style={{ marginTop: 14, fontSize: 11, fontWeight: 600, color: 'var(--mt)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                    Coming soon
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48, padding: 36, border: '1.5px solid var(--bd)', borderRadius: 16, background: 'var(--bg)', maxWidth: 500, margin: '48px auto 0' }}>
              <h3 style={{ fontFamily: 'var(--hd)', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Get notified when we publish</h3>
              <p style={{ fontSize: 14, color: 'var(--mt)', marginBottom: 20, lineHeight: 1.6 }}>No spam — we&apos;ll only email when we publish something genuinely useful.</p>
              <a href={`${APP}/signup`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 24px', background: 'var(--ink)', color: 'white', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Create a free account <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </>
  )
}

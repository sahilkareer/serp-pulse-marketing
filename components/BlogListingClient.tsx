'use client'
import { useState, useRef, useEffect } from 'react'
import { RevealInit, Particles } from './BlogInteractive'

const APP = 'https://app.serp-pulse.com'

const CATEGORY_CONFIG: Record<string, { label: string; emoji: string; tagClass: string; iconClass: string; bgClass: string }> = {
  'ai-traffic':            { label: 'AI Traffic',            emoji: '\uD83E\uDD16', tagClass: 'tb', iconClass: 'ib', bgClass: 'bg1' },
  'google-search-console': { label: 'Search Console',       emoji: '\uD83D\uDCCA', tagClass: 'tb', iconClass: 'ib', bgClass: 'bg1' },
  'analytics':             { label: 'Analytics',             emoji: '\uD83D\uDCC8', tagClass: 'ta', iconClass: 'ia', bgClass: 'bg4' },
  'agency-seo':            { label: 'Agency SEO',            emoji: '\uD83D\uDC65', tagClass: 'tp', iconClass: 'ip', bgClass: 'bg2' },
  'reporting':             { label: 'Reporting',             emoji: '\uD83D\uDCC4', tagClass: 'tg', iconClass: 'ig', bgClass: 'bg3' },
  'strategy':              { label: 'Strategy',              emoji: '\uD83D\uDCA1', tagClass: 'ta', iconClass: 'ia', bgClass: 'bg4' },
  'seo-strategy':          { label: 'SEO Strategy',          emoji: '\uD83D\uDCA1', tagClass: 'ta', iconClass: 'ia', bgClass: 'bg4' },
}

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

const PILLS = ['All posts', '\uD83E\uDD16 AI traffic', '\uD83D\uDCCA Search Console', '\uD83D\uDC65 Agency SEO', '\uD83D\uDCC4 Reporting', '\uD83D\uDCA1 Strategy']
const PILL_MAP: Record<string, string[]> = {
  'All posts': [],
  '\uD83E\uDD16 AI traffic': ['ai-traffic'],
  '\uD83D\uDCCA Search Console': ['google-search-console'],
  '\uD83D\uDC65 Agency SEO': ['agency-seo'],
  '\uD83D\uDCC4 Reporting': ['reporting'],
  '\uD83D\uDCA1 Strategy': ['strategy', 'seo-strategy'],
}

export default function BlogListingClient({ posts, comingSoon }: { posts: any[]; comingSoon: any[] }) {
  const [search, setSearch] = useState('')
  const [activePill, setActivePill] = useState('All posts')
  const featRef = useRef<HTMLDivElement>(null)
  const fvRef = useRef<HTMLDivElement>(null)

  // Reveal animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.bl-rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Tilt on featured card
  useEffect(() => {
    const el = featRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`
    }
    const leave = () => { el.style.transform = '' }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
  }, [])

  const featured = posts.find((p) => p.featured)
  const regular = posts.filter((p) => !p.featured)
  const categories = PILL_MAP[activePill] || []

  // Filter posts
  const filtered = regular.filter((p) => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || (p.excerpt || '').toLowerCase().includes(search.toLowerCase())
    const matchCat = categories.length === 0 || categories.includes(p.category)
    return matchSearch && matchCat
  })

  // Popular (sorted by featured first, then by date)
  const popular = [...posts].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).slice(0, 3)

  return (
    <div className="bl-container">
      {/* Hero */}
      <div className="bl-hero bl-rv">
        <div className="bl-hero-badge"><span className="bl-dot" /> Resources</div>
        <h1>The SERP-Pulse <span className="bl-accent">Blog</span></h1>
        <p>SEO strategies, AI traffic insights, and analytics guides — written by a practitioner, for practitioners.</p>
      </div>

      {/* Search */}
      <div className="bl-search-wrap bl-rv">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <input type="text" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Pills */}
      <div className="bl-pill-row bl-rv">
        {PILLS.map((p) => (
          <span key={p} className={`bl-pill${activePill === p ? ' active' : ''}`} onClick={() => setActivePill(p)}>{p}</span>
        ))}
      </div>

      {/* Featured post */}
      {featured && (activePill === 'All posts' || categories.includes(featured.category)) && !search && (
        <div className="bl-feat-wrap bl-rv">
          <a href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="bl-featured" ref={featRef}>
              <div className="bl-feat-inner">
                <div className="bl-feat-visual" ref={fvRef}>
                  <Particles containerRef={fvRef} />
                  <div className="bl-mock">
                    <div className="bl-mk-bar">
                      <span className="bl-mk-dot" style={{ background: '#ef4444' }} />
                      <span className="bl-mk-dot" style={{ background: '#f59e0b' }} />
                      <span className="bl-mk-dot" style={{ background: '#10b981' }} />
                    </div>
                    <div className="bl-mk-body">
                      {[
                        { label: 'ChatGPT', w: '65%', bg: 'rgba(59,130,246,0.5)', lbg: 'rgba(59,130,246,0.15)', lc: '#93c5fd', val: '4,218', vc: '#93c5fd' },
                        { label: 'Perplexity', w: '42%', bg: 'rgba(139,92,246,0.5)', lbg: 'rgba(139,92,246,0.15)', lc: '#c4b5fd', val: '1,847', vc: '#c4b5fd' },
                        { label: 'Claude', w: '25%', bg: 'rgba(245,158,11,0.5)', lbg: 'rgba(245,158,11,0.15)', lc: '#fcd34d', val: '926', vc: '#fcd34d' },
                        { label: 'Gemini', w: '16%', bg: 'rgba(16,185,129,0.5)', lbg: 'rgba(16,185,129,0.15)', lc: '#6ee7b7', val: '612', vc: '#6ee7b7' },
                      ].map((r) => (
                        <div className="bl-mk-row" key={r.label}>
                          <span className="bl-mk-label" style={{ background: r.lbg, color: r.lc }}>{r.label}</span>
                          <div className="bl-mk-fill" style={{ '--w': r.w, background: r.bg } as any} />
                          <span className="bl-mk-val" style={{ color: r.vc }}>{r.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bl-feat-content">
                  <span className="bl-feat-badge"><span className="bl-dot" /> Featured</span>
                  <h3 className="bl-feat-title">{featured.title}</h3>
                  <p className="bl-feat-desc">{featured.excerpt}</p>
                  <div className="bl-feat-meta">
                    <span>{featured.author || 'Sahil Kareer'}</span>
                    {featured.publishedAt && <span>{formatDate(featured.publishedAt)}</span>}
                    {featured.readTime && <span>{featured.readTime}</span>}
                  </div>
                  <div className="bl-feat-arrow">Read article <span>\u2192</span></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Latest articles */}
      {filtered.length > 0 && (
        <>
          <div className="bl-sec-label bl-rv">Latest articles</div>
          <div className="bl-card-grid">
            {filtered.map((post) => {
              const cat = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG['seo-strategy']
              return (
                <div className="bl-cw bl-rv" key={post.slug}>
                  <a href={`/blog/${post.slug}`} className="bl-card">
                    <div className={`bl-ci ${cat.bgClass}`}>
                      <div className="bl-orbit" style={{ width: 120, height: 120, left: '50%', top: '50%', animationDuration: '18s' }} />
                      <div className="bl-orbit" style={{ width: 180, height: 180, left: '50%', top: '50%', animationDuration: '28s' }} />
                      <div className={`bl-cicon ${cat.iconClass}`}>{cat.emoji}</div>
                    </div>
                    <div className="bl-cbdy">
                      <span className={`bl-ctag ${cat.tagClass}`}>{cat.label}</span>
                      <h3 className="bl-cttl">{post.title}</h3>
                      <p className="bl-cdesc">{post.excerpt}</p>
                      <div className="bl-cfoot">
                        <span>{post.readTime}{post.publishedAt ? ` \u00b7 ${formatDate(post.publishedAt)}` : ''}</span>
                        <span className="bl-crd">Read \u2192</span>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}

            {/* Coming soon placeholders */}
            {activePill === 'All posts' && !search && comingSoon.map((cs) => {
              const cat = CATEGORY_CONFIG[cs.category] || CATEGORY_CONFIG['strategy']
              return (
                <div className="bl-cw bl-rv" key={cs.title}>
                  <div className="bl-card" style={{ opacity: 0.4, pointerEvents: 'none' }}>
                    <div className={`bl-ci ${cat.bgClass}`}>
                      <div className={`bl-cicon ${cat.iconClass}`}>{cat.emoji}</div>
                    </div>
                    <div className="bl-cbdy">
                      <span className={`bl-ctag ${cat.tagClass}`}>{cat.label}</span>
                      <h3 className="bl-cttl">{cs.title}</h3>
                      <p className="bl-cdesc">{cs.excerpt}</p>
                      <div className="bl-cfoot"><span>Coming soon</span></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* Newsletter */}
      <div className="bl-nl bl-rv">
        <div className="bl-nl-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
        </div>
        <h3>SEO insights, once a week</h3>
        <p>AI traffic trends, GSC tips, and agency workflows. No spam.</p>
        <div className="bl-nl-form">
          <input type="email" placeholder="you@company.com" />
          <a href={`${APP}/signup`} className="bl-nl-btn">Subscribe</a>
        </div>
        <p className="bl-nl-note">Join 500+ SEO professionals</p>
      </div>

      {/* Most popular */}
      {popular.length > 0 && (
        <div className="bl-rv">
          <div className="bl-sec-label">Most popular</div>
          <div className="bl-pop-list">
            {popular.map((post, i) => {
              const cat = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG['seo-strategy']
              return (
                <a href={`/blog/${post.slug}`} className="bl-pop-item" key={post.slug}>
                  <span className="bl-pop-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="bl-pop-h">{post.title}</div>
                    <div className="bl-pop-meta">{cat.label} \u00b7 {post.readTime}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      )}

      <p style={{ textAlign: 'center', fontSize: 13, color: '#94a3b8' }}>
        Showing {posts.length} of {posts.length} articles \u00b7 <span style={{ color: '#3b82f6', fontWeight: 500 }}>More coming soon</span>
      </p>
    </div>
  )
}

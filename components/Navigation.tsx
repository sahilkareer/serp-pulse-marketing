'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation({ nav }: { nav?: any }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoText = nav?.logoText || 'SERP-Pulse'
  const ctaText = nav?.ctaText || 'Start Free Trial →'
  const ctaUrl = nav?.ctaUrl || 'https://app.serp-pulse.com/signup'
  const loginText = nav?.loginText || 'Log in'
  const loginUrl = nav?.loginUrl || 'https://app.serp-pulse.com/'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px',
      background: 'rgba(248,250,252,0.88)',
      backdropFilter: 'blur(20px) saturate(1.3)',
      borderBottom: '1px solid rgba(0,0,0,0.04)',
      boxShadow: scrolled ? '0 2px 14px rgba(0,0,0,0.05)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 30, height: 30,
          background: 'linear-gradient(135deg,#0891b2,#06d6c7)',
          borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 12, color: 'white',
        }}>SP</div>
        <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: 17, color: '#0f172a', letterSpacing: '-0.3px' }}>
          SERP<span style={{ color: '#0891b2' }}>-Pulse</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="desktop-nav">
        {/* Features mega menu */}
        <div style={{ position: 'relative' }} className="mm-wrap">
          <button style={{
            color: '#64748b', fontSize: 14, fontWeight: 500, padding: '6px 14px',
            borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans',sans-serif", display: 'flex', alignItems: 'center', gap: 4,
          }}>
            Features
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div className="mega-menu" style={{
            display: 'none', position: 'absolute', top: '100%', left: '50%',
            transform: 'translateX(-50%)', width: 520,
            background: '#fff', border: '1px solid #e2e8f0', borderRadius: 18,
            boxShadow: '0 12px 40px rgba(0,0,0,0.08)', padding: 20, marginTop: 12,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { icon: '🔍', color: 'rgba(66,133,244,0.08)', title: 'Search Console', desc: 'Queries, pages, CTR, positions', href: '/features/search-console' },
                { icon: '📊', color: 'rgba(249,171,0,0.08)', title: 'GA4 Analytics', desc: 'Sessions, users, engagement', href: '/features/analytics' },
                { icon: '🤖', color: 'rgba(16,163,127,0.08)', title: 'AI Citations', desc: 'ChatGPT · Claude · Perplexity', href: '/features/ai-traffic' },
                { icon: '📄', color: 'rgba(8,145,178,0.06)', title: 'Reports', desc: 'White-label PDF reports', href: '/features/reports' },
              ].map(item => (
                <Link key={item.title} href={item.href} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10, padding: 10,
                  borderRadius: 8, textDecoration: 'none', color: '#0f172a',
                  transition: 'background 0.15s',
                }} className="mm-item">
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 1 }}>{item.title}</div>
                    <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/features/ai-traffic" style={{ color: '#64748b', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '6px 14px', borderRadius: 8, position: 'relative' }}>
          AI Citations
          <span style={{ position: 'absolute', top: 1, right: 3, fontSize: 7, fontWeight: 700, color: 'white', background: '#0891b2', padding: '1px 4px', borderRadius: 3, letterSpacing: 0.5 }}>NEW</span>
        </Link>
        <Link href="/integrations" style={{ color: '#64748b', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '6px 14px', borderRadius: 8 }}>Integrations</Link>
        <Link href="/pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '6px 14px', borderRadius: 8 }}>Pricing</Link>
        <Link href="/blog" style={{ color: '#64748b', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '6px 14px', borderRadius: 8 }}>Blog</Link>
      </div>

      {/* Right CTAs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Link href={loginUrl} style={{ color: '#64748b', fontSize: 14, fontWeight: 500, padding: '6px 14px', textDecoration: 'none' }}>{loginText}</Link>
        <Link href={ctaUrl} style={{
          background: '#0f172a', color: 'white', fontSize: 13, fontWeight: 600,
          padding: '8px 20px', borderRadius: 8, textDecoration: 'none', transition: 'all 0.15s',
        }}>{ctaText}</Link>
      </div>

      <style>{`
        .mm-wrap:hover .mega-menu { display: block !important; }
        .mm-item:hover { background: #f1f5f9 !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>

    </nav>
  )
}

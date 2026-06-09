'use client'
import { useState, useEffect } from 'react'

const APP = 'https://app.serp-pulse.com'

const Logo = () => (
  <svg viewBox="0 0 770 120" role="img" xmlns="http://www.w3.org/2000/svg" style={{height:40,width:'auto',display:'block'}}>
    <title>SERP-Pulse</title>
    <g transform="translate(4, 10)">
      <text x="0"   y="78" fontSize="78" fontWeight="800" fill="#4285F4" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">S</text>
      <text x="55"  y="78" fontSize="78" fontWeight="800" fill="#EA4335" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">E</text>
      <text x="109" y="78" fontSize="78" fontWeight="800" fill="#FBBC05" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">R</text>
      <text x="164" y="78" fontSize="78" fontWeight="800" fill="#34A853" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">P</text>
      <line x1="222" y1="44" x2="229" y2="44" stroke="#93b4f5" strokeWidth="2.5" strokeLinecap="round"/>
      <polyline points="229,44 233,44 237,30 241,58 245,36 249,44 256,44" fill="none" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="237" cy="30" r="4" fill="#EA4335"/>
      <line x1="256" y1="44" x2="263" y2="44" stroke="#93b4f5" strokeWidth="2.5" strokeLinecap="round"/>
      <text x="270" y="78" fontSize="78" fontWeight="800" fill="#1a73e8" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">P</text>
      <text x="324" y="78" fontSize="78" fontWeight="800" fill="#1a73e8" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">u</text>
      <text x="370" y="78" fontSize="78" fontWeight="800" fill="#1a73e8" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">l</text>
      <text x="392" y="78" fontSize="78" fontWeight="800" fill="#1a73e8" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">s</text>
      <text x="432" y="78" fontSize="78" fontWeight="800" fill="#1a73e8" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">e</text>
    </g>
  </svg>
)

const MOBILE_GROUPS = [
  {
    label: 'Features',
    links: [
      { href: '/features/search-console', label: 'Search Console', sub: 'Queries, pages, CTR, positions' },
      { href: '/features/analytics', label: 'GA4 Analytics', sub: '9 widgets, geography, funnel' },
      { href: '/features/ai-traffic', label: 'AI Citations', sub: 'ChatGPT · Claude · Perplexity · Gemini' },
      { href: '/features/reports', label: 'White-Label Reports', sub: '4 types · PDF · Public link' },
      { href: '/features/mcp', label: 'MCP Server', sub: '16 tools · Talk to your SEO data' },
      { href: '/features/growth', label: 'Growth Monitor', sub: 'Portfolio health at a glance' },
    ],
  },
  {
    label: 'Product',
    links: [
      { href: '/integrations', label: 'Integrations' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/roadmap', label: 'Roadmap' },
    ],
  },
  {
    label: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>('Features')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    const obs = new IntersectionObserver(
      entries => entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('vi') }),
      { threshold: 0.07 }
    )
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav style={{ boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.05)' : 'none' }}>
        <a href="/" className="nl" style={{textDecoration:'none'}}><Logo /></a>

        {/* Desktop nav */}
        <div className="nm">
          <div className="mmw">
            <button className="mmt">Features <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
            <div className="mm">
              <div className="mmc"><h5>Analytics</h5>
                <a href="/features/search-console" className="mmi"><div className="mmii g"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="18" height="18" style={{borderRadius:3}} alt=""/></div><div><h6>Search Console</h6><p>Queries, pages, CTR, positions</p></div></a>
                <a href="/features/analytics" className="mmi"><div className="mmii a"><img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="18" height="18" alt=""/></div><div><h6>GA4 Analytics</h6><p>9 widgets, geography, funnel</p></div></a>
                <a href="/features/growth" className="mmi"><div className="mmii g" style={{background:'var(--gns)'}}><svg width="14" height="14" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg></div><div><h6>Growth Monitoring</h6><p>Portfolio health at a glance</p></div></a>
              </div>
              <div className="mmc"><h5>AI &amp; Reports</h5>
                <a href="/features/ai-traffic" className="mmi"><div className="mmii ai"><img src="https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64" width="18" height="18" style={{borderRadius:3}} alt=""/></div><div><h6>AI Citations</h6><p>ChatGPT · Claude · Perplexity · Gemini</p></div></a>
                <a href="/features/reports" className="mmi"><div className="mmii r"><svg width="13" height="13" fill="none" stroke="#0891b2" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg></div><div><h6>White-Label Reports</h6><p>4 types · PDF · Public link</p></div></a>
                <a href="/features/mcp" className="mmi"><div className="mmii m"><svg width="13" height="13" fill="none" stroke="#8b5cf6" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div><div><h6>MCP Server</h6><p>16 tools · Talk to your SEO data</p></div></a>
              </div>
              <div className="mmc"><h5>Coming Soon</h5>
                <a href="/roadmap" className="mmi"><div className="mmii s"><svg width="13" height="13" fill="none" stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg></div><div><h6>Rank Tracking</h6><p>Daily position monitoring</p></div></a>
                <a href="/roadmap" className="mmi"><div className="mmii s"><svg width="13" height="13" fill="none" stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div><div><h6>Alerts &amp; Monitoring</h6><p>Custom notification rules</p></div></a>
              </div>
            </div>
          </div>
          <a href="/features/ai-traffic" className="pill">AI Citations</a>
          <a href="/integrations">Integrations</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
        </div>

        <div className="nr">
          <a href={`${APP}/login`} className="btn-nav-ghost" id="nav-login">Log in</a>
          <a href={`${APP}/signup?ref=nav`} className="btn-nav-cta" id="nav-cta">Start Free Trial <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          {/* Hamburger */}
          <button
            id="ham"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{ display:'none', flexDirection:'column', gap:5, background:'none', border:'none', cursor:'pointer', padding:8, borderRadius:6 }}
          >
            <span style={{ width:22, height:2, background:'var(--ink)', borderRadius:2, display:'block', transition:'all .25s', transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ width:22, height:2, background:'var(--ink)', borderRadius:2, display:'block', transition:'all .25s', opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? 'scaleX(0)' : 'none' }} />
            <span style={{ width:22, height:2, background:'var(--ink)', borderRadius:2, display:'block', transition:'all .25s', transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay — Claude.ai style */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 198,
            background: 'rgba(0,0,0,.15)',
            backdropFilter: 'blur(2px)',
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div style={{
        position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 199,
        background: 'var(--wh)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .3s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
      }}>

        {/* Accordion groups */}
        <div style={{ flex: 1, padding: '8px 0' }}>
          {MOBILE_GROUPS.map(group => (
            <div key={group.label} style={{ borderBottom: '1px solid var(--bd)' }}>
              <button
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--body)', fontSize: 16, fontWeight: 600, color: 'var(--ink)',
                  textAlign: 'left',
                }}
              >
                {group.label}
                <svg
                  width="18" height="18" fill="none" stroke="var(--mt2)" strokeWidth="2" viewBox="0 0 24 24"
                  style={{ transition: 'transform .2s', transform: openGroup === group.label ? 'rotate(45deg)' : 'none', flexShrink: 0 }}
                >
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>

              {openGroup === group.label && (
                <div style={{ padding: '0 24px 16px' }}>
                  {group.links.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block', padding: '10px 0',
                        textDecoration: 'none', color: 'var(--ink3)',
                        borderBottom: '1px solid var(--bg2)',
                      }}
                    >
                      <div style={{ fontSize: 15, fontWeight: 500 }}>{link.label}</div>
                      {'sub' in link && link.sub && (
                        <div style={{ fontSize: 12, color: 'var(--mt2)', marginTop: 2 }}>{link.sub}</div>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pinned CTAs at bottom */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid var(--bd)',
          display: 'flex', gap: 10,
          background: 'var(--wh)',
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
        }}>
          <a
            href={`${APP}/login`}
            onClick={() => setMobileOpen(false)}
            style={{
              flex: 1, textAlign: 'center', padding: '13px',
              border: '1.5px solid var(--bd2)', borderRadius: 10,
              fontSize: 15, fontWeight: 600, color: 'var(--ink)',
              textDecoration: 'none',
            }}
          >
            Log in
          </a>
          <a
            href={`${APP}/signup?ref=nav`}
            onClick={() => setMobileOpen(false)}
            style={{
              flex: 1, textAlign: 'center', padding: '13px',
              background: 'var(--ink)', borderRadius: 10,
              fontSize: 15, fontWeight: 600, color: 'white',
              textDecoration: 'none',
            }}
          >
            Start Free
          </a>
        </div>
      </div>
    </>
  )
}

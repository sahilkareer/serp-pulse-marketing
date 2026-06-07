'use client'
import { useState, useEffect } from 'react'

const APP = 'https://seopulse-rose.vercel.app'

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
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

  return (
    <>
      <nav style={{ boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.05)' : 'none' }}>
        <a href="/" className="nl" style={{textDecoration:'none'}}>
          <img src="/logo.svg" alt="SERP-Pulse" style={{height:28,width:'auto',display:'block',filter:'none'}} />
        </a>
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
                <a href="/roadmap" className="mmi"><div className="mmii s"><svg width="13" height="13" fill="none" stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></div><div><h6>Project Management</h6><p>Multi-client workflows</p></div></a>
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
          <a href={`${APP}/signup`} className="btn-nav-cta" id="nav-cta">Start Free Trial <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <button id="ham" onClick={e => { e.stopPropagation(); setMobileOpen(o => !o) }} aria-label="Menu" style={{ display: 'none', flexDirection: 'column', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 6 }}>
            <span style={{ width: 20, height: 2, background: 'var(--ink)', borderRadius: 2, display: 'block', transition: 'all .2s', transform: mobileOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
            <span style={{ width: 20, height: 2, background: 'var(--ink)', borderRadius: 2, display: 'block', transition: 'all .2s', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: 20, height: 2, background: 'var(--ink)', borderRadius: 2, display: 'block', transition: 'all .2s', transform: mobileOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div onClick={e => e.stopPropagation()} style={{ display: 'block', position: 'fixed', top: 64, left: 0, right: 0, zIndex: 199, background: 'var(--wh)', borderBottom: '1px solid var(--bd)', boxShadow: 'var(--s2)', padding: 16 }}>
          <a href="/features/search-console" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>Search Console</a>
          <a href="/features/analytics" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>GA4 Analytics</a>
          <a href="/features/ai-traffic" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>AI Citations</a>
          <a href="/features/reports" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>White-Label Reports</a>
          <a href="/features/mcp" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>MCP Server</a>
          <a href="/integrations" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>Integrations</a>
          <a href="/pricing" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>Pricing</a>
          <a href="/about" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>About</a>
          <a href="/contact" style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 8 }}>Contact</a>
          <div style={{ borderTop: '1px solid var(--bd)', marginTop: 8, paddingTop: 12, display: 'flex', gap: 10 }}>
            <a href={`${APP}/login`} style={{ flex: 1, textAlign: 'center', padding: 10, border: '1.5px solid var(--bd2)', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'var(--mt)', textDecoration: 'none' }}>Log in</a>
            <a href={`${APP}/signup`} style={{ flex: 1, textAlign: 'center', padding: 10, background: 'var(--ink)', color: 'white', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Start Free</a>
          </div>
        </div>
      )}
    </>
  )
}

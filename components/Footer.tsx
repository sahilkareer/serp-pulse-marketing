'use client'
import Link from 'next/link'

const defaultFooter = {
  tagline: 'Unified SEO analytics. GSC + GA4 + AI Traffic.',
  copyright: '© 2026 SERP-Pulse. Built for SEOs who take data seriously.',
  columns: [
    { heading: 'Product', links: [{ label: 'Features', url: '/features' },{ label: 'Search Console', url: '/features/search-console' },{ label: 'GA4 Analytics', url: '/features/analytics' },{ label: 'AI Citations', url: '/features/ai-traffic' },{ label: 'Reports', url: '/features/reports' }] },
    { heading: 'Solutions', links: [{ label: 'For Agencies', url: '/use-cases/agencies' },{ label: 'For Freelancers', url: '/use-cases/freelancers' },{ label: 'For In-House', url: '/use-cases/in-house-teams' },{ label: 'Pricing', url: '/pricing' }] },
    { heading: 'Compare', links: [{ label: 'vs AgencyAnalytics', url: '/vs/agency-analytics' },{ label: 'vs Databox', url: '/vs/databox' },{ label: 'vs DashThis', url: '/vs/dashthis' },{ label: 'vs Looker Studio', url: '/vs/looker-studio' }] },
    { heading: 'Resources', links: [{ label: 'Blog', url: '/blog' },{ label: 'Docs', url: '/docs' },{ label: 'About', url: '/about' },{ label: 'Contact', url: '/contact' },{ label: 'Privacy', url: '/privacy' },{ label: 'Terms', url: '/terms' }] },
  ],
  socialLinks: [{ platform: 'linkedin', url: '#' },{ platform: 'twitter', url: '#' }],
}

export default function Footer({ footer }: { footer?: any }) {
  const f = footer || defaultFooter

  return (
    <footer style={{ background: '#080e1f', color: '#94a3b8', paddingTop: 64 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#0891b2,#06d6c7)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>SP</div>
              <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: 17, color: '#f0f6ff' }}>SERP<span style={{ color: '#06d6c7' }}>-Pulse</span></span>
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#64748b' }}>{f.tagline}</p>
          </div>

          {/* Columns */}
          {(f.columns || []).map((col: any, i: number) => (
            <div key={i}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: '#f0f6ff', marginBottom: 16, letterSpacing: 0.3 }}>{col.heading}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {(col.links || []).map((link: any, j: number) => (
                  <li key={j} style={{ marginBottom: 8 }}>
                    <Link href={link.url} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 12, color: '#475569' }}>{f.copyright}</p>
          <div style={{ display: 'flex', gap: 16 }}>
            {(f.socialLinks || []).map((s: any, i: number) => (
              <Link key={i} href={s.url} style={{ color: '#475569', transition: 'color 0.15s' }}>
                {s.platform === 'linkedin' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

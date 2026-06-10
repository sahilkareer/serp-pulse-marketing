'use client'
import React from 'react'
import Link from 'next/link'

const defaultPlatforms = [
  { name: 'ChatGPT', domain: 'chatgpt.com', sessions: '4,218', growth: '+24%', barWidth: 78, share: '55.5%' },
  { name: 'Perplexity', domain: 'perplexity.ai', sessions: '1,847', growth: '+67%', barWidth: 54, share: '24.3%' },
  { name: 'Claude', domain: 'claude.ai', sessions: '926', growth: '+41%', barWidth: 28, share: '12.2%' },
  { name: 'Gemini', domain: 'gemini.google.com', sessions: '612', growth: '+18%', barWidth: 18, share: '8.0%' },
]

const barColors = ['#10b981','#06b6d4','#f59e0b','#a855f7']

export function AiTrafficSection({ data }: { data?: any }) {
  const label = data?.label || 'AI Citations Intelligence'
  const headline = data?.headline || 'Know where AI|cites your content.'
  const description = data?.description || 'See which AI platforms reference and send visitors to your site — by platform, by page, by trend.'
  const platforms = data?.platforms?.length ? data.platforms : defaultPlatforms
  const totalSessions = data?.totalSessions || '7,603'
  const totalGrowth = data?.totalGrowth || '▲ 34.2%'
  const headlineParts = headline.split('|')

  return (
    <section style={{ padding: '96px 0', background: '#080e1f', color: '#f0f6ff' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#06d6c7', marginBottom: 12 }}>
          <span style={{ width: 18, height: 2, background: '#06d6c7', display: 'inline-block' }} />
          {label}
        </div>
        <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.08, marginBottom: 12 }}>
          {headlineParts.map((p: string, i: number) => <span key={i}>{p}{i < headlineParts.length - 1 && <br />}</span>)}
        </h2>
        <p style={{ fontSize: 16, color: '#94a3b8', maxWidth: 500, lineHeight: 1.6, marginBottom: 40 }}>{description}</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'start' }}>
          {/* Platform cards */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {platforms.map((p: any, i: number) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#0c1428', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '14px 18px' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=64`} width={20} height={20} alt={p.name} style={{ borderRadius: 4 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f0f6ff', marginBottom: 2 }}>{p.name}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif", color: '#f0f6ff', letterSpacing: '-0.5px' }}>{p.sessions}</div>
                  <div style={{ fontSize: 10, color: '#64748b' }}>clicks/month</div>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '4px 10px', borderRadius: 20 }}>{p.growth}</span>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div style={{ background: '#0c1428', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#94a3b8' }}>AI Citations Breakdown</span>
              <span style={{ fontSize: 11, color: '#64748b' }}>Last 28 days</span>
            </div>
            <div style={{ padding: 18 }}>
              {platforms.map((p: any, i: number) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, width: 100, flexShrink: 0 }}>
                    <img src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=64`} width={14} height={14} alt="" style={{ borderRadius: 3 }} />
                    <span style={{ fontSize: 11, color: '#94a3b8' }}>{p.name}</span>
                  </div>
                  <div style={{ flex: 1, height: 24, background: 'rgba(255,255,255,0.04)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${p.barWidth}%`, height: '100%', background: barColors[i] || '#06d6c7', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, fontSize: 10, fontWeight: 600, color: 'white' }}>{p.sessions}</div>
                  </div>
                  <span style={{ fontSize: 11, color: '#94a3b8', width: 36, textAlign: 'right', flexShrink: 0 }}>{p.share}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#64748b' }}>Total AI Referral Sessions</span>
                <div>
                  <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 22, fontWeight: 800, color: '#f0f6ff', letterSpacing: '-0.5px', marginRight: 8 }}>{totalSessions}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#10b981' }}>{totalGrowth}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials({ data }: { data?: any }) {
  const label = data?.label || 'Trusted By'
  const headline = data?.headline || 'Built for professionals.'
  const stats = data?.stats || [
    { number: '500+', label: 'Active users' },
    { number: '4', label: 'Agencies' },
    { number: '40M+', label: 'Queries tracked' },
    { number: '4.9/5', label: 'Satisfaction' },
  ]
  const items = data?.items || [
    { text: 'We discovered that ChatGPT was citing our blog content and sending real traffic. No other tool showed us that. This changed how we think about content strategy.', authorInitials: 'SK', authorName: 'Sarah K.', authorRole: 'SEO Director, Digital Agency' },
    { text: 'Client reporting used to take hours. Now it takes minutes. The growth monitoring view alone saves us significant time across our portfolio.', authorInitials: 'MT', authorName: 'Marcus T.', authorRole: 'Freelance SEO Consultant' },
    { text: 'One dashboard instead of multiple tabs. The advanced filters like "Sweet Spot" and "Quick Wins" helped us find opportunities we were completely missing.', authorInitials: 'PM', authorName: 'Priya M.', authorRole: 'Head of SEO, SaaS Company' },
  ]

  return (
    <section style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#0891b2', marginBottom: 12 }}>
            <span style={{ width: 18, height: 2, background: '#0891b2', display: 'inline-block' }} />
            {label}
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.08 }}>{headline}</h2>
        </div>
        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 48, flexWrap: 'wrap' as const }}>
          {stats.map((s: any, i: number) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: '-1.5px', color: '#0891b2' }}>{s.number}</div>
              <div style={{ fontSize: 13, color: '#64748b' }}>{s.label}</div>
            </div>
          ))}
        </div>
        {/* Testimonials */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {items.map((t: any, i: number) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <div style={{ color: '#f59e0b', fontSize: 16, marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontSize: 14, color: '#334155', lineHeight: 1.7, marginBottom: 20 }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#0891b2,#06d6c7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'white' }}>{t.authorInitials}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{t.authorName}</div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>{t.authorRole}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FounderStory({ data }: { data?: any }) {
  const label = data?.label || 'The Story'
  const headline = data?.headline || 'Built by an SEO.'
  const paragraphs = data?.paragraphs || [
    'Working across agencies, in-house teams, and as an independent consultant, I watched SEO professionals waste hours every week switching between Google Search Console, Google Analytics 4, and spreadsheets just to answer basic questions about their projects.',
    'I also noticed the growing blind spot around AI-generated traffic. As ChatGPT, Claude, Perplexity, and Gemini started sending real visitors to websites, the data existed in GA4 — but it was buried under individual referral domains with no easy way to aggregate it, visualise trends, or understand which pages were being cited.',
    'The goal isn\'t to replace your existing tools. It\'s to make your decision-making faster, easier, and genuinely more actionable.',
  ]
  const name = data?.name || 'Sahil Kareer'
  const role = data?.role || 'Founder & Developer, SERP-Pulse'
  const years = data?.years || '6+ years in SEO, Analytics & Agency Operations'
  const initials = data?.initials || 'SK'

  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#0891b2', marginBottom: 12 }}>
            <span style={{ width: 18, height: 2, background: '#0891b2', display: 'inline-block' }} />
            {label}
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.08 }}>{headline}</h2>
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 20, padding: '40px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, alignItems: 'start' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 140, height: 140, borderRadius: 16, background: 'linear-gradient(135deg,#0891b2,#06d6c7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 40, fontWeight: 800, color: 'white', margin: '0 auto 12px' }}>{initials}</div>
            <div style={{ fontSize: 11, color: '#94a3b8' }}>Founder Photo</div>
          </div>
          <div>
            {paragraphs.map((p: string, i: number) => (
              <p key={i} style={{ fontSize: 15, color: '#334155', lineHeight: 1.75, marginBottom: i < paragraphs.length - 1 ? 16 : 20 }}>{p}</p>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#0891b2,#06d6c7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: 'white' }}>{initials}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{name}</div>
                <div style={{ fontSize: 12, color: '#64748b' }}>{role}</div>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: '#94a3b8' }}>{years}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const defaultPlans = [
  { name: 'Freelancer', monthlyPrice: 20, annualPrice: 19, description: 'For solo SEOs and personal projects.', popular: false, ctaText: 'Start 90-Day Free Trial', ctaUrl: 'https://app.serp-pulse.com/signup', features: [{ text: '1 GSC project', included: true },{ text: '1 Report', included: true },{ text: 'GSC + GA4 analytics', included: true },{ text: 'AI citation tracking (16+ platforms)', included: true },{ text: 'MCP Server access', included: true },{ text: 'CSV exports', included: true },{ text: 'White-label branding', included: false }] },
  { name: 'Pro', monthlyPrice: 49, annualPrice: 46, description: 'For SEO professionals managing multiple clients.', popular: true, popularLabel: 'Most Popular', ctaText: 'Start 90-Day Free Trial →', ctaUrl: 'https://app.serp-pulse.com/signup', features: [{ text: '10 GSC projects', included: true },{ text: '10 Reports', included: true },{ text: 'Everything in Freelancer', included: true },{ text: 'Global filters across all data', included: true },{ text: 'Alerts & notifications', included: true },{ text: 'Priority support', included: true },{ text: 'All GA4 widgets', included: true }] },
  { name: 'Agency', monthlyPrice: 159, annualPrice: 150, description: 'Unlimited scale for agencies and teams.', popular: false, ctaText: 'Start 90-Day Free Trial →', ctaUrl: 'https://app.serp-pulse.com/signup', features: [{ text: 'Unlimited projects', included: true },{ text: 'Unlimited reports', included: true },{ text: 'Everything in Pro', included: true },{ text: 'White-label branding', included: true },{ text: 'Team access & collaboration', included: true },{ text: 'API access', included: true },{ text: 'Beta features early access', included: true }] },
]

export function Pricing({ data }: { data?: any }) {
  const label = data?.label || 'Pricing'
  const headline = data?.headline || 'Simple. Transparent.\nEverything included.'
  const annualDiscount = data?.annualDiscount || 'Save 6%'
  const plans = data?.plans?.length ? data.plans : defaultPlans
  const [annual, setAnnual] = React.useState(true)

  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#0891b2', marginBottom: 12 }}>
            <span style={{ width: 18, height: 2, background: '#0891b2', display: 'inline-block' }} />
            {label}
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.08 }}>{headline}</h2>
        </div>
        {/* Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
          <span style={{ fontSize: 14, color: annual ? '#94a3b8' : '#0f172a', fontWeight: 500 }}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} style={{ width: 44, height: 24, borderRadius: 12, background: annual ? '#0891b2' : '#e2e8f0', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'white', position: 'absolute', top: 3, left: annual ? 23 : 3, transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }} />
          </button>
          <span style={{ fontSize: 14, color: annual ? '#0f172a' : '#94a3b8', fontWeight: 500 }}>Annual</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0891b2', background: 'rgba(8,145,178,0.08)', padding: '3px 10px', borderRadius: 20 }}>{annualDiscount}</span>
        </div>
        {/* Plans */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'start' }}>
          {plans.map((plan: any, i: number) => (
            <div key={i} style={{ background: '#fff', border: plan.popular ? '2px solid #0891b2' : '1px solid #e2e8f0', borderRadius: 20, padding: '28px 24px', position: 'relative', boxShadow: plan.popular ? '0 12px 40px rgba(8,145,178,0.12)' : '0 4px 16px rgba(0,0,0,0.04)' }}>
              {plan.popular && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#0891b2,#06d6c7)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 20 }}>{plan.popularLabel || 'Most Popular'}</div>}
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{plan.name}</div>
              <div style={{ marginBottom: 8 }}>
                <sup style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', verticalAlign: 'top', marginTop: 8 }}>$</sup>
                <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: '-2px', color: '#0f172a' }}>{annual ? plan.annualPrice : plan.monthlyPrice}</span>
                <span style={{ fontSize: 13, color: '#94a3b8' }}>/mo</span>
              </div>
              <p style={{ fontSize: 13, color: '#64748b', marginBottom: 20 }}>{plan.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
                {plan.features?.map((f: any, j: number) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: f.included ? '#334155' : '#94a3b8', marginBottom: 8, textDecoration: f.included ? 'none' : 'line-through' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={f.included ? '#0891b2' : '#cbd5e1'} strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link href={(() => { const u = plan.ctaUrl || 'https://app.serp-pulse.com/signup?ref=pricing'; return (u.includes('/signup') && !u.includes('?ref=')) ? u + '?ref=pricing' : u; })()} style={{ display: 'block', textAlign: 'center', padding: '11px 20px', borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: 'none', background: plan.popular ? 'linear-gradient(135deg,#0891b2,#06b6d4)' : 'transparent', color: plan.popular ? 'white' : '#0891b2', border: plan.popular ? 'none' : '1.5px solid #0891b2', transition: 'all 0.15s' }}>{plan.ctaText}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Integrations({ data }: { data?: any }) {
  const label = data?.label || 'Ecosystem'
  const headline = data?.headline || 'Connects to your ecosystem.'
  const subtitle = data?.subtitle || 'More integrations shipping regularly.'
  const items = data?.items || [
    { name: 'Google Search Console', description: 'Queries, pages, CTR, positions, coverage', faviconDomain: 'search.google.com', status: 'active' },
    { name: 'Google Analytics 4', description: 'Sessions, users, engagement, conversions', faviconDomain: 'analytics.google.com', status: 'active' },
    { name: 'Keyword Tracking', description: 'Daily position monitoring', faviconDomain: '', status: 'coming_soon' },
    { name: 'AI Citations & Mentions', description: 'ChatGPT · Claude · Gemini · Perplexity', faviconDomain: '', status: 'coming_soon' },
  ]

  return (
    <section style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#0891b2', marginBottom: 12 }}>
          <span style={{ width: 18, height: 2, background: '#0891b2', display: 'inline-block' }} />
          {label}
        </div>
        <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.08, marginBottom: 8 }}>{headline}</h2>
        <p style={{ fontSize: 15, color: '#64748b', marginBottom: 48 }}>{subtitle}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {items.map((item: any, i: number) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${item.status === 'active' ? '#e2e8f0' : '#f1f5f9'}`, borderRadius: 16, padding: '24px 20px', opacity: item.status === 'active' ? 1 : 0.7 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                {item.faviconDomain ? (
                  <img src={`https://www.google.com/s2/favicons?domain=${item.faviconDomain}&sz=32`} width={28} height={28} alt={item.name} style={{ borderRadius: 4 }} />
                ) : (
                  <svg width="24" height="24" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                )}
              </div>
              <h5 style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>{item.name}</h5>
              <p style={{ fontSize: 11, color: '#64748b', lineHeight: 1.5, marginBottom: 12 }}>{item.description}</p>
              {item.status === 'active' ? (
                <div style={{ fontSize: 11, fontWeight: 600, color: '#10b981' }}>● Connected</div>
              ) : (
                <div style={{ fontSize: 11, fontWeight: 600, color: '#f59e0b' }}>Coming Soon</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta({ data }: { data?: any }) {
  const headline = data?.headline || 'Stop guessing.|Start knowing.'
  const accentWord = data?.accentWord || 'knowing.'
  const subtext = data?.subtext || 'Connect your first property in under 2 minutes. No credit card. No commitment.'
  const ctaText = data?.ctaText || 'Start Free Trial — No Card Needed'
  const ctaUrl = (() => { const u = data?.ctaUrl || 'https://app.serp-pulse.com/signup?ref=homepage'; return (u.includes('/signup') && !u.includes('?ref=')) ? u + '?ref=homepage' : u; })()
  const badges = data?.badges || ['14-day trial', 'No credit card', '2-min setup', 'Cancel anytime']

  const renderHeadline = () => {
    const parts = headline.split('|')
    return parts.map((part: string, i: number) => (
      <span key={i}>
        {part.includes(accentWord) ? (
          <>{part.replace(accentWord, '')}<span style={{ color: '#06d6c7' }}>{accentWord}</span></>
        ) : part}
        {i < parts.length - 1 && <br />}
      </span>
    ))
  }

  return (
    <section style={{ padding: '96px 24px', background: '#080e1f', color: '#f0f6ff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse,rgba(6,214,199,0.06),transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.06, marginBottom: 20 }}>
          {renderHeadline()}
        </h2>
        <p style={{ fontSize: 17, color: '#94a3b8', lineHeight: 1.6, marginBottom: 32 }}>{subtext}</p>
        <Link href={ctaUrl} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0891b2,#06b6d4)', color: 'white', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 16, fontWeight: 700, padding: '15px 32px', borderRadius: 12, textDecoration: 'none' }}>
          {ctaText}
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 24, flexWrap: 'wrap' as const }}>
          {badges.map((b: string, i: number) => (
            <span key={i} style={{ fontSize: 12, color: '#64748b', display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

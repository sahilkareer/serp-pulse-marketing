'use client'
import { useState } from 'react'
import Link from 'next/link'

const defaultTabs = [
  {
    label: 'Unified Dashboard',
    headline: 'Your SEO data,|finally unified.',
    accentWord: 'finally unified.',
    subtext: 'SERP-Pulse connects Google Search Console and Google Analytics 4 into one dashboard — and surfaces AI platform traffic that\'s scattered across raw analytics into clear, actionable insights.',
    primaryCtaText: 'Start Free — No Card Needed →',
    primaryCtaUrl: 'https://app.serp-pulse.com/signup',
    secondaryCtaText: 'See all features',
    secondaryCtaUrl: '#features',
    note: 'Free 14-day trial · 2-minute setup · No credit card',
  },
  {
    label: 'Results First',
    headline: '100 projects.|One glance.',
    accentWord: 'One glance.',
    subtext: 'Instantly see which projects are growing, declining, or stable across your entire portfolio. Switch between Clicks, Impressions, CTR, or Position — every project re-classifies in seconds.',
    primaryCtaText: 'See Growth Dashboard →',
    primaryCtaUrl: 'https://app.serp-pulse.com/signup',
    secondaryCtaText: 'How it works',
    secondaryCtaUrl: '#growth',
    note: 'Used by SEO professionals managing tens to hundreds of projects',
  },
  {
    label: 'AI-Native',
    headline: 'The citations|you can\'t see yet.',
    accentWord: 'you can\'t see yet.',
    subtext: 'ChatGPT, Claude, Perplexity, and Gemini are referencing your content and sending real visitors — right now. SERP-Pulse surfaces every AI citation by platform, by landing page, by engagement trend.',
    primaryCtaText: 'Discover Your AI Traffic →',
    primaryCtaUrl: 'https://app.serp-pulse.com/signup',
    secondaryCtaText: '16+ AI platforms tracked',
    secondaryCtaUrl: '#ai',
    note: 'Tracking ChatGPT · Claude · Perplexity · Gemini · Grok · Copilot · and 10+ more',
  },
]

export default function Hero({ data }: { data?: any }) {
  const [active, setActive] = useState(0)
  const tabs = data?.tabs?.length ? data.tabs : defaultTabs
  const current = tabs[active]
  const previewUrl = data?.previewUrl || 'app.serp-pulse.com/project/demo-website'

  const renderHeadline = (headline: string, accentWord: string) => {
    if (!headline) return null
    const parts = headline.split('|')
    return parts.map((part: string, i: number) => (
      <span key={i}>
        {part.includes(accentWord)
          ? <>
              {part.replace(accentWord, '')}
              <span style={{ color: '#0891b2' }}>{accentWord}</span>
            </>
          : part}
        {i < parts.length - 1 && <br />}
      </span>
    ))
  }

  return (
    <section style={{ padding: '140px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Gradient */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 1000, height: 600,
        background: 'radial-gradient(ellipse,rgba(8,145,178,0.05),transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, position: 'relative', zIndex: 1 }}>
        {tabs.map((tab: any, i: number) => (
          <button key={i} onClick={() => setActive(i)} style={{
            fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 20, cursor: 'pointer',
            transition: 'all 0.15s', border: '1.5px solid',
            borderColor: active === i ? '#0f172a' : '#e2e8f0',
            background: active === i ? '#0f172a' : '#fff',
            color: active === i ? 'white' : '#64748b',
            fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}>{tab.label}</button>
        ))}
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "'Bricolage Grotesque',sans-serif",
        fontSize: 'clamp(38px,6vw,70px)', fontWeight: 800,
        lineHeight: 1.04, letterSpacing: '-2.5px',
        maxWidth: 800, margin: '0 auto 18px',
        position: 'relative', zIndex: 1,
      }}>
        {renderHeadline(current.headline, current.accentWord)}
      </h1>

      {/* Subtext */}
      <p style={{
        fontSize: 'clamp(15px,1.8vw,17px)', color: '#64748b',
        maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7,
        position: 'relative', zIndex: 1,
      }}>
        {current.subtext?.split('Google Search Console').join('').split('Google Analytics 4').join('').includes('Google')
          ? current.subtext
          : current.subtext}
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14, position: 'relative', zIndex: 1 }}>
        <Link href={current.primaryCtaUrl || 'https://app.serp-pulse.com/signup'} style={{
          background: 'linear-gradient(135deg,#0891b2,#06b6d4)', color: 'white',
          fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 15, fontWeight: 700,
          padding: '13px 28px', borderRadius: 10, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'all 0.2s',
        }}>
          {current.primaryCtaText}
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
        <Link href={current.secondaryCtaUrl || '#'} style={{
          color: '#64748b', fontSize: 14, fontWeight: 500, padding: '13px 22px',
          borderRadius: 10, textDecoration: 'none', border: '1.5px solid #d1d9e4', transition: 'all 0.15s',
        }}>
          {current.secondaryCtaText}
        </Link>
      </div>

      <p style={{ fontSize: 12, color: '#94a3b8', position: 'relative', zIndex: 1 }}>{current.note}</p>

      {/* Product Preview Frame */}
      <div style={{
        background: '#080e1f', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 18, overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(6,214,199,0.04)',
        marginTop: 48, maxWidth: 960, marginLeft: 'auto', marginRight: 'auto',
      }}>
        {/* Browser chrome */}
        <div style={{ background: '#0c1428', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', gap: 5 }}>
            {['#ff5f57','#ffbd2e','#28c840'].map((c,i) => <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
          </div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 5, padding: '3px 10px', fontSize: 11, color: '#64748b', textAlign: 'center', maxWidth: 280, margin: '0 auto' }}>
            {previewUrl}
          </div>
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 1, padding: '0 16px', background: '#0c1428', borderBottom: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
          {['Queries','Pages','Countries','Devices','GA4 Analytics','AI Traffic','Coverage','URL Inspect'].map((t,i) => (
            <div key={t} style={{ padding: '8px 12px', fontSize: 10, fontWeight: 500, color: i===0 ? '#06d6c7' : i===4 ? '#06d6c7' : '#64748b', borderBottom: `2px solid ${i===0||i===4 ? '#06d6c7' : 'transparent'}`, whiteSpace: 'nowrap' }}>{t}</div>
          ))}
        </div>
        {/* Body */}
        <div style={{ padding: 16 }}>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
            {[
              { color: '#06d6c7', label: '👁 IMPRESSIONS', value: '3.0K', delta: 'Total views in period' },
              { color: '#10b981', label: '✏ CLICKS', value: '91', delta: 'Total clicks in period' },
              { color: '#a855f7', label: '% AVG. CTR', value: '3.06%', delta: 'clicks ÷ impressions' },
              { color: '#ec4899', label: '# AVG. POSITION', value: '13.1', delta: 'Average across all keywords' },
            ].map(s => (
              <div key={s.label} style={{ background: '#111c35', border: `1px solid rgba(255,255,255,0.05)`, borderRadius: 8, padding: '10px 12px', borderTop: `3px solid ${s.color}` }}>
                <div style={{ fontSize: 9, color: s.color, textTransform: 'uppercase', letterSpacing: 0.7, marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 18, fontWeight: 700, color: '#f0f6ff', letterSpacing: '-0.5px' }}>{s.value}</div>
                <div style={{ fontSize: 9, color: '#64748b', marginTop: 2 }}>{s.delta}</div>
              </div>
            ))}
          </div>
          {/* Chart placeholder */}
          <div style={{ background: '#111c35', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, padding: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ display: 'inline-block', width: 3, height: 8, background: '#06d6c7', borderRadius: 2 }} />
              Performance Over Time
              <span style={{ fontSize: 7, color: '#64748b', marginLeft: 4 }}>28 days · 27 data points</span>
            </div>
            <svg viewBox="0 0 500 60" preserveAspectRatio="none" style={{ width: '100%', height: 60 }}>
              <path d="M0,45 C40,38 120,35 200,28 C280,22 360,18 500,15" fill="none" stroke="#06d6c7" strokeWidth="1.5" opacity="0.8"/>
              <path d="M0,52 C40,48 120,50 200,44 C280,40 360,34 500,30" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.8"/>
              <path d="M0,50 C40,46 120,48 200,42 C280,38 360,32 500,28" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" opacity="0.6"/>
            </svg>
          </div>
          {/* Query table preview */}
          <div style={{ background: '#111c35', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 2fr 1.2fr 0.6fr 0.6fr 0.6fr', padding: '6px 10px', background: 'rgba(255,255,255,0.02)', fontSize: 9, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.4 }}>
              {['#','Query','Impressions','Clicks','CTR','Position'].map(h => <div key={h} style={{ padding: '4px 0' }}>{h}</div>)}
            </div>
            {[
              ['1','seo analytics dashboard','3.9K','764','19.6%','6.3','green'],
              ['2','unified seo dashboard','802','14','1.8%','8.1','green'],
              ['3','ai traffic tracking tool','455','309','67.9%','2.2','green'],
            ].map(row => (
              <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: '0.3fr 2fr 1.2fr 0.6fr 0.6fr 0.6fr', padding: '5px 10px', borderTop: '1px solid rgba(255,255,255,0.03)', fontSize: 9 }}>
                <div style={{ color: '#94a3b8', padding: '2px 0' }}>{row[0]}</div>
                <div style={{ color: '#f0f6ff', fontWeight: 500, padding: '2px 0' }}>{row[1]}</div>
                <div style={{ color: '#94a3b8', padding: '2px 0' }}>{row[2]}</div>
                <div style={{ color: '#94a3b8', padding: '2px 0' }}>{row[3]}</div>
                <div style={{ color: '#10b981', padding: '2px 0' }}>{row[4]}</div>
                <div style={{ background: 'rgba(16,185,129,0.1)', borderRadius: 3, textAlign: 'center', padding: 4, color: '#10b981' }}>{row[5]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

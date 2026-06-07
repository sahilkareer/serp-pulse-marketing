// TrustBar
export function TrustBar({ data }: { data?: any }) {
  const stats = data?.stats || [
    { number: '500+', label: 'Active users' },
    { number: '40M+', label: 'Queries tracked' },
    { number: '4.9/5', label: 'Satisfaction' },
  ]
  const badges = data?.badges || [
    { icon: 'shield', text: 'Read-only · SOC 2' },
    { icon: 'lock', text: 'Powered by Google APIs' },
  ]

  const Divider = () => <div style={{ width: 1, height: 28, background: '#e2e8f0' }} />

  return (
    <section style={{ padding: '24px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
        {stats.map((s: any, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 22, fontWeight: 800, letterSpacing: '-1px', color: '#0f172a' }}>{s.number}</div>
              <div style={{ fontSize: 10, color: '#94a3b8' }}>{s.label}</div>
            </div>
            {i < stats.length - 1 && <Divider />}
          </div>
        ))}
        {badges.map((b: any, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#64748b' }}>
              {b.icon === 'shield' ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              )}
              {b.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Growth Monitoring Mockup
function GrowthMockup() {
  return (
    <div style={{ background: '#080e1f', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0c1428' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8' }}>Project Health Overview</span>
        <span style={{ fontSize: 9, padding: '3px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#06d6c7', fontWeight: 500 }}>Last 28 days</span>
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, marginBottom: 12 }}>
          {[{n:'12',l:'Growing',c:'#10b981'},{n:'4',l:'Declining',c:'#ef4444'},{n:'3',l:'Stable',c:'#f59e0b'},{n:'81',l:'Projects',c:'#06d6c7'}].map(s => (
            <div key={s.l} style={{ textAlign: 'center', padding: '10px 8px', borderRadius: 6, background: '#111c35', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', color: s.c }}>{s.n}</div>
              <div style={{ fontSize: 8, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
        {[
          { color: '#10b981', name: 'acme-store.com', kpi: '↑ 4,218', delta: '+24%', deltaC: '#10b981' },
          { color: '#ef4444', name: 'startup-blog.io', kpi: '↓ 1,847', delta: '-8%', deltaC: '#ef4444' },
          { color: '#f59e0b', name: 'agency-client-3.com', kpi: '→ 926', delta: '+1%', deltaC: '#f59e0b' },
          { color: '#10b981', name: 'saas-product.co', kpi: '↑ 3,102', delta: '+41%', deltaC: '#10b981' },
        ].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1.5fr 1fr 0.6fr', gap: 0, padding: '7px 10px', borderTop: '1px solid rgba(255,255,255,0.03)', fontSize: 10, alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.color }} />
            <div style={{ color: '#f0f6ff', fontWeight: 500 }}>{row.name}</div>
            <div style={{ color: '#94a3b8' }}>{row.kpi}</div>
            <div style={{ color: row.deltaC, fontWeight: 600, fontSize: 10 }}>{row.delta}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Combined GSC+GA4 Mockup
function CombinedMockup() {
  return (
    <div style={{ background: '#080e1f', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#0c1428', display: 'flex', gap: 1 }}>
        {['Queries','GA4 Analytics','AI Traffic'].map((t,i) => (
          <div key={t} style={{ padding: '6px 10px', fontSize: 10, fontWeight: 500, color: i===1 ? '#06d6c7' : '#64748b', borderBottom: `2px solid ${i===1?'#06d6c7':'transparent'}` }}>{t}</div>
        ))}
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          {[{l:'Sessions',v:'4,218',c:'#06d6c7'},{l:'Users',v:'3,847',c:'#10b981'},{l:'Eng. Rate',v:'62.4%',c:'#a855f7'},{l:'Duration',v:'3m 12s',c:'#f59e0b'}].map(m => (
            <div key={m.l} style={{ flex: 1, background: '#111c35', borderRadius: 8, padding: '8px 10px', borderTop: `2px solid ${m.c}` }}>
              <div style={{ fontSize: 8, color: '#64748b', textTransform: 'uppercase', marginBottom: 2 }}>{m.l}</div>
              <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 16, fontWeight: 700, color: '#f0f6ff' }}>{m.v}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#111c35', borderRadius: 8, padding: 10 }}>
          <div style={{ fontSize: 9, color: '#94a3b8', marginBottom: 6 }}>Traffic Sources</div>
          {[
            { source: 'Organic Search', pct: 68, color: '#06d6c7' },
            { source: 'Direct', pct: 18, color: '#10b981' },
            { source: 'AI Referral', pct: 9, color: '#a855f7' },
            { source: 'Social', pct: 5, color: '#f59e0b' },
          ].map(s => (
            <div key={s.source} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <div style={{ fontSize: 9, color: '#94a3b8', width: 80, flexShrink: 0 }}>{s.source}</div>
              <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${s.pct}%`, height: '100%', background: s.color, borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 9, color: '#f0f6ff', fontWeight: 600, width: 28, textAlign: 'right' }}>{s.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Filters Mockup
function FiltersMockup() {
  return (
    <div style={{ background: '#080e1f', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
      <div style={{ padding: '12px 16px', background: '#0c1428', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', marginBottom: 8 }}>Advanced Query Filters</div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {['All Queries','AI Overview Targets','Sweet Spot','Quick Wins','Page 1'].map((f,i) => (
            <div key={f} style={{ fontSize: 9, fontWeight: 500, padding: '3px 8px', borderRadius: 4, border: `1px solid ${i===0?'rgba(6,214,199,0.18)':'rgba(255,255,255,0.08)'}`, color: i===0?'#06d6c7':'#94a3b8', background: i===0?'rgba(6,214,199,0.08)':'transparent' }}>{f}</div>
          ))}
        </div>
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ display: 'flex', gap: 5, marginBottom: 10, flexWrap: 'wrap' }}>
          {['All Positions','You Own These','Almost There','Work in Progress'].map((f,i) => (
            <div key={f} style={{ fontSize: 9, fontWeight: 500, padding: '3px 8px', borderRadius: 4, border: `1px solid ${i===0?'rgba(6,214,199,0.18)':'rgba(255,255,255,0.08)'}`, color: i===0?'#06d6c7':'#94a3b8', background: i===0?'rgba(6,214,199,0.08)':'transparent' }}>{f}</div>
          ))}
        </div>
        {[
          ['seo analytics dashboard','3.9K','764','19.6%','6.3'],
          ['unified seo dashboard','802','14','1.8%','8.1'],
          ['ai traffic tracking tool','455','309','67.9%','2.2'],
        ].map((row,i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 0.6fr 0.6fr 0.6fr', padding: '6px 8px', borderTop: i===0?'none':'1px solid rgba(255,255,255,0.03)', fontSize: 9 }}>
            <div style={{ color: '#f0f6ff', fontWeight: 500 }}>{row[0]}</div>
            <div style={{ color: '#94a3b8' }}>{row[1]}</div>
            <div style={{ color: '#94a3b8' }}>{row[2]}</div>
            <div style={{ color: '#10b981' }}>{row[3]}</div>
            <div style={{ color: '#10b981', fontWeight: 600 }}>{row[4]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FeatureSpotlight({ data }: { data?: any }) {
  const label = data?.label || 'Key Differentiator'
  const headline = data?.headline || ''
  const description = data?.description || ''
  const features = data?.features || []
  const reverse = data?.reverse || false
  const bg = data?.background === 'light' ? '#f8fafc' : '#fff'
  const mockupType = data?.mockupType || 'growth'

  const renderMockup = () => {
    if (mockupType === 'combined') return <CombinedMockup />
    if (mockupType === 'filters') return <FiltersMockup />
    return <GrowthMockup />
  }

  const headlineParts = headline.split('|')

  return (
    <section style={{ padding: '96px 0', background: bg }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'center', direction: reverse ? 'rtl' : 'ltr' }}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#0891b2', marginBottom: 12 }}>
              <span style={{ width: 18, height: 2, background: '#0891b2', display: 'inline-block' }} />
              {label}
            </div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.08, marginBottom: 12 }}>
              {headlineParts.map((p: string, i: number) => <span key={i}>{p}{i < headlineParts.length - 1 && <br />}</span>)}
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 500, lineHeight: 1.6, marginBottom: 20 }}>{description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
              {features.map((f: any, i: number) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#334155', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '6px 12px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  {f.text}
                </div>
              ))}
            </div>
          </div>
          <div style={{ direction: 'ltr' }}>{renderMockup()}</div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks({ data }: { data?: any }) {
  const label = data?.label || 'Setup'
  const headline = data?.headline || '2 minutes. 3 steps.'
  const steps = data?.steps || [
    { number: '1', title: 'Connect Google', description: 'OAuth login. No API keys. One click to authorize GSC + GA4.', time: '⚡ 30s' },
    { number: '2', title: 'See your dashboard', description: 'Rankings, behavior, AI traffic — all load instantly.', time: '⚡ Instant' },
    { number: '3', title: 'Generate reports', description: 'One-click white-label PDFs. Share via link.', time: '⚡ 3 min' },
  ]

  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#0891b2', marginBottom: 12 }}>
            <span style={{ width: 18, height: 2, background: '#0891b2', display: 'inline-block' }} />
            {label}
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.08 }}>{headline}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {steps.map((s: any, i: number) => (
            <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16, padding: '28px 24px', position: 'relative' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#0891b2,#06d6c7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 16, color: 'white', marginBottom: 16 }}>{s.number}</div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, marginBottom: 12 }}>{s.description}</p>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#0891b2', background: 'rgba(8,145,178,0.06)', padding: '4px 10px', borderRadius: 20 }}>{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

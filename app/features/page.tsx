import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Features — SERP-Pulse',
  description: 'Every feature inside SERP-Pulse. GSC + GA4 analytics, AI citation tracking, white-label reports, smart filters, MCP server, and portfolio growth monitoring.',
}

const APP = 'https://app.serp-pulse.com'

const FEATURES = [
  {
    number: '01',
    badge: '★ Biggest Differentiator',
    badgeClass: 'tag-star',
    icon: (
      <div style={{display:'flex',gap:4,justifyContent:'center',flexWrap:'wrap',maxWidth:80}}>
        {['chatgpt.com','claude.ai','perplexity.ai','gemini.google.com'].map(d=>(
          <img key={d} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} width="20" height="20" style={{borderRadius:4}} alt=""/>
        ))}
      </div>
    ),
    title: 'AI Citation & Traffic Tracking',
    desc: 'ChatGPT, Claude, Perplexity, and Gemini are sending real visitors to your site — right now. Every other analytics tool calls it "direct." SERP-Pulse shows you exactly which AI platform, which page, and how it\'s growing.',
    bullets: ['16+ AI platforms tracked live','Per-platform sessions, engagement & conversions','Per-page attribution — which content gets cited','Growth trends week-over-week'],
    href: '/features/ai-traffic',
    cta: 'AI Citation details →',
    color: 'var(--tl3)',
    bg: 'rgba(6,214,199,.04)',
    border: 'rgba(6,214,199,.12)',
  },
  {
    number: '02',
    badge: 'Unified Analytics',
    badgeClass: 'tag-tl',
    icon: (
      <div style={{display:'flex',gap:6,alignItems:'center'}}>
        <img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="24" height="24" style={{borderRadius:4}} alt=""/>
        <span style={{fontSize:12,color:'var(--mt)'}}>+</span>
        <img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="24" height="24" alt=""/>
      </div>
    ),
    title: 'Google Search Console + GA4',
    desc: 'One Google login connects both platforms simultaneously. GSC and GA4 data overlaid on the same timeline — see impressions, clicks, sessions, and AI traffic in a single chart without switching tabs.',
    bullets: ['One OAuth click — connects both GSC and GA4','Overlaid comparison chart with 5 modes','9 modular GA4 widgets','9 date range options, cross-filtering by country/device/source'],
    href: '/features/analytics',
    cta: 'Analytics details →',
    color: 'var(--tl)',
    bg: 'rgba(8,145,178,.04)',
    border: 'rgba(8,145,178,.12)',
  },
  {
    number: '03',
    badge: 'Smart Intelligence',
    badgeClass: 'tag-tl',
    icon: (
      <img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="24" height="24" style={{borderRadius:4}} alt=""/>
    ),
    title: 'Smart Keyword Filters',
    desc: 'Stop scrolling through 2,000 rows of keywords. Sweet Spot finds high-impression, low-CTR queries — fix the meta, get the clicks. Quick Wins surfaces positions 4–10 — one push and you\'re on page one.',
    bullets: ['Sweet Spot — high impressions, low CTR','Quick Wins — positions 4-10 ready to move up','AI Overview Targets — queries triggering Google AI','Numeric range filters + regex support'],
    href: '/features/search-console',
    cta: 'Search Console details →',
    color: 'var(--gn)',
    bg: 'rgba(16,185,129,.04)',
    border: 'rgba(16,185,129,.12)',
  },
  {
    number: '04',
    badge: 'Agency Feature',
    badgeClass: 'tag-gn',
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--tl)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6M8 13h8M8 17h5"/>
      </svg>
    ),
    title: 'White-Label Reports',
    desc: 'Client reporting in under 60 seconds. Generate branded PDF reports with your logo and colors — four types: GSC, GA4, AI Traffic, and Combined. Share via a public link your clients can view without logging in.',
    bullets: ['GSC, GA4, AI Traffic & Combined report types','Add your logo, brand colors, custom domain','Public shareable link — no client login required','Unlimited reports on Agency plan'],
    href: '/features/reports',
    cta: 'Reports details →',
    color: 'var(--tl)',
    bg: 'rgba(8,145,178,.04)',
    border: 'rgba(8,145,178,.12)',
  },
  {
    number: '05',
    badge: 'Portfolio View',
    badgeClass: 'tag-tl',
    icon: (
      <svg width="24" height="24" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>
      </svg>
    ),
    title: 'Growth Monitoring',
    desc: 'See every project\'s health across your entire portfolio at a glance. Switch between Smart Mode, Clicks, Impressions, CTR, or Position in one click. No more opening 10 separate Search Console tabs every Monday.',
    bullets: ['Smart health score per project — Growing/Stable/Mixed/Declining','Per-project sparkline trend charts','CSV export — all projects, all metrics','5 KPI modes — switch instantly'],
    href: '/features/growth',
    cta: 'Growth Monitoring details →',
    color: '#10b981',
    bg: 'rgba(16,185,129,.04)',
    border: 'rgba(16,185,129,.12)',
  },
  {
    number: '06',
    badge: 'Claude · ChatGPT · Cursor',
    badgeClass: 'tag-pu',
    icon: (
      <svg width="24" height="24" fill="none" stroke="#8b5cf6" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'MCP Server',
    desc: 'Connect Claude, ChatGPT, or Cursor to your SERP-Pulse account. Ask questions in plain English — "which pages lost traffic last week?" — and get live answers from your actual GSC and GA4 data.',
    bullets: ['16 MCP tools: queries, pages, AI traffic, reports','Works with Claude Desktop, ChatGPT, Cursor, any MCP client','"Which pages need fixing?" — instant natural language answers','API tokens for permanent access'],
    href: '/features/mcp',
    cta: 'MCP Server details →',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,.04)',
    border: 'rgba(139,92,246,.12)',
  },
]

export default function FeaturesPage() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><span style={{color:'var(--tl3)'}}>Features</span>
          </div>
          <h1>Everything you need.<br/><span className="ac">Nothing you don&apos;t.</span></h1>
          <p className="hero-sub">Six deeply integrated features built around how SEO professionals actually work. Not a feature checklist — a complete analytics system.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Try Every Feature Free <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/pricing" className="btn-g">See pricing</a>
          </div>
          <p style={{fontSize:12,color:'var(--dm2)',marginTop:12}}>30-day free trial · No credit card · All 6 features included</p>
        </div>
      </section>

      {/* FEATURES LIST */}
      <section style={{padding:'80px 0',background:'var(--wh)'}}>
        <div className="w">
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {FEATURES.map((f, i) => (
              <div key={f.number} className="rv" style={{
                display:'grid',
                gridTemplateColumns:'80px 1fr 1fr',
                gap:'0 48px',
                padding:'56px 0',
                borderBottom: i < FEATURES.length - 1 ? '1px solid var(--bd)' : 'none',
                alignItems:'start',
              }}>
                {/* Number */}
                <div style={{paddingTop:4}}>
                  <div style={{fontFamily:'var(--hd)',fontSize:40,fontWeight:800,letterSpacing:-2,color:'var(--mt3)',lineHeight:1}}>{f.number}</div>
                </div>

                {/* Content */}
                <div>
                  <div style={{marginBottom:12}}>
                    <span className={`tag ${f.badgeClass}`} style={{marginRight:8}}>{f.badge}</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
                    {f.icon}
                    <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,2.8vw,28px)',fontWeight:800,letterSpacing:-.8,lineHeight:1.15,color:'var(--ink)'}}>{f.title}</h2>
                  </div>
                  <p style={{fontSize:15,color:'var(--mt)',lineHeight:1.7,marginBottom:16,maxWidth:420}}>{f.desc}</p>
                  <a href={f.href} style={{display:'inline-flex',alignItems:'center',gap:4,fontSize:13,fontWeight:600,color:f.color,textDecoration:'none'}}>{f.cta}</a>
                </div>

                {/* Bullets */}
                <div style={{paddingTop:52}}>
                  <div style={{
                    background:f.bg,
                    border:`1px solid ${f.border}`,
                    borderRadius:12,
                    padding:'20px 22px',
                    display:'flex',
                    flexDirection:'column',
                    gap:10,
                  }}>
                    {f.bullets.map(b=>(
                      <div key={b} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:13,color:'var(--ink3)',lineHeight:1.55}}>
                        <span style={{color:f.color,fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section style={{padding:'80px 0',background:'var(--bg)',borderTop:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center',marginBottom:40}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>vs Competitors</div>
          <h2 className="sh">Built for what other tools miss.</h2>
        </div>
        <div className="w">
          <div className="cmp-tbl-wrap">
            <table className="cmp-tbl">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="sp">SERP-Pulse</th>
                  <th>Agency Analytics</th>
                  <th>Databox</th>
                  <th>DashThis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['GSC + GA4 unified in one view',true,false,false,false],
                  ['AI traffic tracking (ChatGPT, Claude, etc.)',true,false,false,false],
                  ['Smart filters (Sweet Spot, Quick Wins)','Built-in',false,false,false],
                  ['MCP Server (talk to your data)',true,false,false,false],
                  ['White-label PDF reports',true,'Limited',true,true],
                  ['Growth monitoring dashboard','Smart mode','~ Basic',false,'~ Basic'],
                  ['Starting price / month','$20–$159/mo','$149+/mo','$49+/mo','$47+/mo'],
                ].map((row,i)=>(
                  <tr key={i}>
                    <td style={i===6?{fontWeight:700,color:'var(--ink)'}:{}}>{row[0]}</td>
                    <td className="sp-c">{typeof row[1]==='boolean'?(row[1]?<span className="yes">Yes</span>:<span className="no">No</span>):row[1]==='Built-in'?<span className="yes">Built-in</span>:row[1]==='Smart mode'?<span className="yes">Smart mode</span>:i===6?<span className="cmp-badge">{row[1]}</span>:<span className="yes">{row[1]}</span>}</td>
                    {[row[2],row[3],row[4]].map((v,j)=>(
                      <td key={j} style={i===6?{color:'var(--rd)',fontWeight:600,textAlign:'center'}:{}}>{typeof v==='boolean'?(v?<span className="yes">Yes</span>:<span className="no">No</span>):v==='~ Basic'||v==='Limited'?<span className="part">{v}</span>:v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>Six features.<br/>One dashboard.</h2>
          <p>Try every feature free for 30 days. No credit card required.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/pricing" className="btn-g">View pricing →</a>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:20,flexWrap:'wrap',marginTop:16}}>
            <span className="fck">30-day free trial</span><span className="fck">No credit card</span><span className="fck">2-min setup</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

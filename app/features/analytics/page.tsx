import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'GA4 Analytics Dashboard — SERP-Pulse',
  description: '9-widget GA4 dashboard. Sessions, users, engagement, conversions, geography — all unified with Google Search Console in one view.',
}

const APP = 'https://app.serp-pulse.com'

export default function AnalyticsPage() {
  return (
    <>
      <SiteNav />

      {/* PAGE HERO */}
      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>GA4 Analytics</span>
          </div>
          <div style={{marginBottom:16}}><img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="40" height="40" alt="GA4"/></div>
          <h1>9-Widget GA4<br/><span className="ac">Dashboard.</span></h1>
          <p className="hero-sub">Most SEO tools either skip Google Analytics entirely or give you one or two surface-level metrics. SERP-Pulse delivers a <strong>proper GA4 integration</strong> with 9 modular widgets, comparison deltas, custom date ranges, and overlaid GSC + GA4 charts.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="#widgets" className="btn-g">See all 9 widgets</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:32}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>The Problem</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,30px)',fontWeight:800,letterSpacing:-1,maxWidth:600,margin:'0 auto'}}>Search Console tells you how people find you. Analytics tells you what they do next.</h2>
            <p style={{fontSize:15,color:'var(--mt)',maxWidth:520,margin:'12px auto 0',textAlign:'center'}}>Most tools force you to choose one or the other. SERP-Pulse gives you both — on the same timeline, in the same interface, with the same date range and comparison mode.</p>
          </div>
        </div>
      </section>

      {/* 5 KEY METRICS */}
      <section className="feat-sec" id="widgets">
        <div className="w">
          <div className="feat-grid">
            <div className="feat-content">
              <div className="sl">5 Key Metrics</div>
              <h2>Sessions. Users. Engagement. Duration. Events.</h2>
              <p>The moment you connect a GA4 property, 5 key metrics appear alongside your GSC data. Each shows the current period value plus a comparison delta — so you always know whether things are improving or declining.</p>
              <div className="checks">
                <div className="check"><strong>Sessions</strong> — total visits to your site in the selected period</div>
                <div className="check"><strong>Users</strong> — unique visitors. Lower than sessions when users return multiple times</div>
                <div className="check"><strong>Engagement Rate</strong> — percentage of sessions that were &ldquo;engaged&rdquo; (GA4&apos;s replacement for bounce rate)</div>
                <div className="check"><strong>Avg Session Duration</strong> — how long users spend per visit</div>
                <div className="check"><strong>Events</strong> — total tracked events including page views, scrolls, clicks, and custom conversions</div>
              </div>
              <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55,marginTop:8}}><strong style={{color:'var(--ink)'}}>Why engagement rate matters:</strong> Google replaced bounce rate with engagement rate in GA4 because it&apos;s more meaningful. A user who reads your entire article for 5 minutes isn&apos;t a &ldquo;bounce&rdquo; — they&apos;re engaged. SERP-Pulse shows this correctly.</p>
            </div>
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t"><img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="12" height="12" alt=""/>GA4 Dashboard</div><div className="p">28 days</div></div>
                <div style={{padding:12,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:5,marginBottom:8}}>
                  {[['Sessions','4,218','#f59e0b','▲ 12%'],['Users','3,642','var(--tl3)','▲ 8%'],['Eng Rate','48.2%','#10b981','▲ 2.4%'],['Duration','3m 42s','#a855f7','▲ 18s'],['Events','12.4K','#ec4899','▲ 15%']].map(([l,v,c,d])=>(
                    <div key={l} style={{background:'var(--d3)',borderRadius:5,padding:7,textAlign:'center'}}>
                      <div style={{fontSize:7,color:'var(--dm2)'}}>{l}</div>
                      <div style={{fontFamily:'var(--hd)',fontSize:13,fontWeight:700,color:c}}>{v}</div>
                      <div style={{fontSize:7,color:'#10b981'}}>{d}</div>
                    </div>
                  ))}
                </div>
                <div style={{padding:'0 12px 12px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                  <div style={{background:'var(--d3)',borderRadius:6,padding:10}}>
                    <div style={{fontSize:8,fontWeight:600,color:'var(--dm)',marginBottom:6}}>Traffic Sources</div>
                    {[['Organic Search','2,841'],['Direct','892'],['Referral','341'],['Organic Social','144']].map(([s,v])=>(
                      <div key={s} style={{display:'flex',justifyContent:'space-between',fontSize:9,color:'var(--dm)',marginBottom:4}}><span>{s}</span><span style={{color:'var(--dt)',fontWeight:600}}>{v}</span></div>
                    ))}
                  </div>
                  <div style={{background:'var(--d3)',borderRadius:6,padding:10}}>
                    <div style={{fontSize:8,fontWeight:600,color:'var(--dm)',marginBottom:6}}>Top Events</div>
                    {[['page_view','8,421'],['scroll','3,156'],['click','842'],['sign_up','67']].map(([e,v])=>(
                      <div key={e} style={{display:'flex',justifyContent:'space-between',fontSize:9,color:'var(--dm)',marginBottom:4}}><span>{e}</span><span style={{color:'var(--dt)',fontWeight:600}}>{v}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED VIEW */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div className="feat-grid rev">
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">GSC + GA4 — Same Chart</div><div className="p">28d vs prev period</div></div>
                <div style={{padding:12}}>
                  <div style={{display:'flex',gap:8,marginBottom:6,flexWrap:'wrap'}}>
                    <span style={{fontSize:8,color:'var(--dm)',display:'flex',alignItems:'center',gap:3}}><span style={{width:8,height:3,background:'var(--tl3)',borderRadius:1,display:'inline-block'}}/>Impressions</span>
                    <span style={{fontSize:8,color:'var(--dm)',display:'flex',alignItems:'center',gap:3}}><span style={{width:8,height:3,background:'#10b981',borderRadius:1,display:'inline-block'}}/>Clicks</span>
                    <span style={{fontSize:8,color:'var(--dm)',display:'flex',alignItems:'center',gap:3}}><span style={{width:10,height:1,borderTop:'1px dashed #f59e0b',display:'inline-block'}}/>Sessions (GA4)</span>
                  </div>
                  <svg viewBox="0 0 380 60" style={{width:'100%',height:60}}>
                    <path d="M0,44 C40,40 80,34 130,30 C180,26 230,32 280,22 C330,16 360,12 380,8" fill="none" stroke="#06d6c7" strokeWidth="1.5"/>
                    <path d="M0,52 C40,50 80,46 130,42 C180,38 230,44 280,36 C330,30 360,26 380,22" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                    <path d="M0,48 C40,46 80,42 130,38 C180,34 230,40 280,32 C330,26 360,22 380,18" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2"/>
                  </svg>
                  <div style={{fontSize:8,color:'var(--dm2)',marginTop:4}}>GSC + GA4 data on the same timeline — toggle any metric on or off</div>
                </div>
              </div>
            </div>
            <div className="feat-content">
              <div className="sl">Unified View</div>
              <h2>See whether search visibility translates to real engagement.</h2>
              <p>SERP-Pulse puts GSC metrics and GA4 metrics on the <strong style={{color:'var(--ink)'}}>same chart with the same date range</strong>. Toggle any metric on or off. Solid lines = current period. Dashed lines = comparison period.</p>
              <p style={{fontSize:14,color:'var(--mt)',lineHeight:1.6}}><strong style={{color:'var(--ink)'}}>The result:</strong> In one glance, you can see that impressions went up 15%, clicks went up 12%, but sessions only went up 3% — which means your search traffic isn&apos;t fully converting to site visits. That insight usually takes 30 minutes of spreadsheet work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 WIDGETS GRID */}
      <section className="feat-sec">
        <div className="w">
          <div style={{textAlign:'center',marginBottom:28}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>All 9 Widgets</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3vw,28px)',fontWeight:800,letterSpacing:-.8}}>Every widget available in the GA4 dashboard.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}} className="how-grid">
            {[
              {icon:'📊',t:'Key Insights',d:'Sessions, users, engagement rate, duration, and events — all with comparison deltas showing whether you\'re improving or declining.'},
              {icon:'🔀',t:'Traffic Sources',d:'Sessions by channel group — Organic Search, Direct, Referral, Paid Search, Social, Email. Know where your visitors come from.'},
              {icon:'🌍',t:'Geography',d:'Interactive choropleth world map showing sessions by country. 200+ countries. Full table with sessions, users, and engagement per country.'},
              {icon:'🎯',t:'Conversions',d:'Track conversion events (sign_up, purchase, lead, etc.) with event counts and conversion badges. See which events drive real business value.'},
              {icon:'📈',t:'Engagement Trend',d:'Sessions and engagement over time with comparison overlay. See whether user behavior is improving alongside your traffic growth.'},
              {icon:'🔄',t:'Behavior Funnel',d:'New vs Returning user distribution. Understand whether you\'re acquiring new users or retaining existing ones.'},
              {icon:'🔗',t:'Landing Pages',d:'Full table of entry pages with sessions, users, bounce rate, and average duration. Identify which pages attract and which lose visitors.'},
              {icon:'⚡',t:'Top Events',d:'Event counts with conversion badges. See page_view, scroll, click, and custom events. Understand which interactions matter most.'},
              {icon:'📱',t:'Source/Medium',d:'Detailed source/medium breakdown beyond channel groups. See exact referral sources, campaign medium, and organic vs paid splits.'},
            ].map(w=>(
              <div key={w.t} className="rv" style={{background:'var(--wh)',border:'1px solid var(--bd)',borderRadius:'var(--r)',padding:20}}>
                <h4 style={{fontFamily:'var(--hd)',fontSize:13,fontWeight:700,marginBottom:4,display:'flex',alignItems:'center',gap:5}}>{w.icon} {w.t}</h4>
                <p style={{fontSize:12,color:'var(--mt)',lineHeight:1.5}}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>Your GA4 data,<br/>properly integrated.</h2>
          <p>Connect your GA4 property in seconds. 9 widgets. All live.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g">View live app →</a>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:20,flexWrap:'wrap',marginTop:16}}>
            <span className="fck">30-day free trial</span><span className="fck">No credit card</span><span className="fck">2-min setup</span><span className="fck">Cancel anytime</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

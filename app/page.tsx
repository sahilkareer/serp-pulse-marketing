'use client'
import { useState, useEffect } from 'react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('unified')
  const [pricingAnnual, setPricingAnnual] = useState(true)

  const APP = 'https://app.serp-pulse.com'
  const FOUNDER_IMG = 'https://media.licdn.com/dms/image/v2/D5603AQHU9JOiEY6kRA/profile-displayphoto-crop_800_800/B56ZkhZSDtHkAI-/0/1757201900647?e=1782345600&v=beta&t=qpVo3miyByRzkqHHlFL4liQJsT6uNObbH87VE8Kn0xs'

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-g"/>
        <div className="hero-badge"><span className="hero-dot"/><span>Now tracking AI traffic from ChatGPT, Claude, Perplexity &amp; 16+ platforms</span></div>
        <div className="htabs">
          {[['unified','Unified Dashboard'],['results','Results First'],['ai','AI-Native']].map(([id,label])=>(
            <div key={id} className={`htab${activeTab===id?' on':''}`} onClick={()=>setActiveTab(id)}>{label}</div>
          ))}
        </div>
        <div className={`hc${activeTab==='unified'?' on':''}`}>
          <h1>Your SEO data,<br/><span className="ac">finally unified.</span></h1>
          <p className="hero-p">SERP-Pulse connects <strong>Google Search Console</strong> and <strong>Google Analytics 4</strong> into one dashboard — and reveals AI citation traffic from ChatGPT, Claude, Perplexity, Gemini and 16+ platforms that your competitors can&apos;t see.</p>
          <div className="hero-acts"><a href={`${APP}/signup`} className="btn-p">Start Free — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><a href="#features" className="btn-o">See all features</a></div>
          <p className="hero-note">Free 14-day trial &nbsp;·&nbsp; 2-minute setup &nbsp;·&nbsp; No credit card</p>
        </div>
        <div className={`hc${activeTab==='results'?' on':''}`}>
          <h1>100 projects.<br/><span className="ac">One glance.</span></h1>
          <p className="hero-p">Instantly see which projects are growing, declining, or stable across your entire portfolio. Switch between <strong>Clicks, Impressions, CTR, or Position</strong> — every project re-classifies in seconds.</p>
          <div className="hero-acts"><a href={`${APP}/signup`} className="btn-p">See Growth Dashboard <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><a href="#growth" className="btn-o">How it works</a></div>
          <p className="hero-note">Used by SEO professionals managing tens to hundreds of projects</p>
        </div>
        <div className={`hc${activeTab==='ai'?' on':''}`}>
          <h1>The citations<br/><span className="ac">you can&apos;t see yet.</span></h1>
          <p className="hero-p">ChatGPT, Claude, Perplexity, and Gemini are referencing your content and sending real visitors — right now. SERP-Pulse is the <strong>only dashboard</strong> that tracks every AI citation by platform, by page, by trend.</p>
          <div className="hero-acts"><a href={`${APP}/signup`} className="btn-p">Discover Your AI Traffic <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><a href="#ai" className="btn-o">16+ AI platforms tracked</a></div>
          <p className="hero-note">Tracking ChatGPT · Claude · Perplexity · Gemini · Grok and more</p>
        </div>
        {/* Product Frame */}
        <div className="pframe">
          <div className="pf-bar">
            <div className="pf-dots"><div className="pf-dot"/><div className="pf-dot"/><div className="pf-dot"/></div>
            <div className="pf-url">app.serp-pulse.com/project/demo-website</div>
          </div>
          <div className="pf-tabs">
            {['Queries','Pages','Countries','Devices','GA4 Analytics','AI Traffic','Coverage','URL Inspect'].map((t,i)=>(
              <div key={t} className={`pf-t${i===0||i===4?' on':''}`}>{t}</div>
            ))}
          </div>
          <div className="pf-layout">
            <div className="pf-side">
              <div className="pf-sg">Search Console</div>
              <div className="pf-si on"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" alt=""/>acme-corp.com</div>
              <div className="pf-si"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" alt=""/>travel-blog.io<span className="pf-badge">↓</span></div>
              <div className="pf-si"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" alt=""/>saas-startup.co</div>
              <div className="pf-sg" style={{marginTop:8}}>GA4 Properties</div>
              <div className="pf-si on"><img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" alt=""/>acme-corp.com</div>
            </div>
            <div className="pf-main">
              <div className="pf-metrics">
                <div className="pf-mc c1"><div className="pf-mc-l">👁 Impressions</div><div className="pf-mc-v">3.0K</div><div className="pf-mc-s">Total views in period</div></div>
                <div className="pf-mc c2"><div className="pf-mc-l">✏ Clicks</div><div className="pf-mc-v">91</div><div className="pf-mc-s">Total clicks</div></div>
                <div className="pf-mc c3"><div className="pf-mc-l">% Avg CTR</div><div className="pf-mc-v">3.06%</div><div className="pf-mc-s">Clicks ÷ impressions</div></div>
                <div className="pf-mc c4"><div className="pf-mc-l"># Avg Position</div><div className="pf-mc-v">13.1</div><div className="pf-mc-s">Avg across keywords</div></div>
              </div>
              <div className="pf-ga4row">
                <div className="pf-ga4-h"><img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="10" height="10" alt=""/>GA4 Analytics</div>
                <div className="pf-ga4-m"><div className="pf-ga4-l">Sessions</div><div className="pf-ga4-v s">4,218</div></div>
                <div className="pf-ga4-m"><div className="pf-ga4-l">Users</div><div className="pf-ga4-v u">3,847</div></div>
                <div className="pf-ga4-m"><div className="pf-ga4-l">Eng. Rate</div><div className="pf-ga4-v e">62.4%</div></div>
                <div className="pf-ga4-m"><div className="pf-ga4-l">Bounce Rate</div><div className="pf-ga4-v d">28.1%</div></div>
                <div className="pf-ga4-m"><div className="pf-ga4-l">Events</div><div className="pf-ga4-v ev">12.4K</div></div>
              </div>
              <div className="pf-chart">
                <div className="pf-ch">
                  <div className="pf-ch-t">Performance Over Time</div>
                  <div className="pf-toggles">
                    <span className="pf-tog t1">Impressions</span><span className="pf-tog t2">Clicks</span><span className="pf-tog off">CTR</span><span className="pf-tog ga4">Sessions</span>
                  </div>
                </div>
                <svg viewBox="0 0 500 90" style={{width:'100%',height:90}}>
                  <path d="M0,70 C60,60 120,55 180,45 C240,38 300,42 360,30 C420,22 460,18 500,14 L500,90 L0,90 Z" fill="rgba(6,214,199,.06)"/>
                  <path d="M0,70 C60,60 120,55 180,45 C240,38 300,42 360,30 C420,22 460,18 500,14" fill="none" stroke="#06d6c7" strokeWidth="1.5"/>
                  <path d="M0,78 C60,72 120,70 180,63 C240,58 300,62 360,53 C420,46 460,40 500,35" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                  <path d="M0,74 C60,66 120,62 180,54 C240,47 300,51 360,41 C420,34 460,29 500,24" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" opacity=".7"/>
                </svg>
              </div>
              <div className="pf-pills">
                <div className="pf-pill on">All Queries</div><div className="pf-pill">Sweet Spot</div><div className="pf-pill">Quick Wins</div><div className="pf-pill">AI Overview</div>
              </div>
              <div className="pf-tbl">
                <div className="pf-tr head"><div className="pf-td">#</div><div className="pf-td">Query</div><div className="pf-td">Impressions</div><div className="pf-td">Clicks</div><div className="pf-td">CTR</div><div className="pf-td">Pos.</div></div>
                <div className="pf-tr"><div className="pf-td">1</div><div className="pf-td">seo analytics dashboard</div><div className="pf-td">3.9K</div><div className="pf-td">764</div><div className="pf-td gn">19.6%</div><div className="pf-td"><span className="pf-pos gd">6.3</span></div></div>
                <div className="pf-tr"><div className="pf-td">2</div><div className="pf-td">unified seo dashboard</div><div className="pf-td">802</div><div className="pf-td">14</div><div className="pf-td" style={{color:'var(--rd)'}}>1.8%</div><div className="pf-td"><span className="pf-pos a">8.1</span></div></div>
                <div className="pf-tr" style={{border:'none'}}><div className="pf-td">3</div><div className="pf-td">ai traffic tracking tool</div><div className="pf-td">487</div><div className="pf-td">309</div><div className="pf-td gn">67.9%</div><div className="pf-td"><span className="pf-pos gd">2.2</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust"><div className="trust-in">
        <div className="rv" style={{textAlign:'center'}}><div className="tr-n">500+</div><div className="tr-l">Active users</div></div><div className="tr-d"/>
        <div className="rv" style={{textAlign:'center'}}><div className="tr-n">40M+</div><div className="tr-l">Queries tracked</div></div><div className="tr-d"/>
        <div className="rv" style={{textAlign:'center'}}><div className="tr-n">16+</div><div className="tr-l">AI platforms tracked</div></div><div className="tr-d"/>
        <div className="rv" style={{textAlign:'center'}}><div className="tr-n">4.9/5</div><div className="tr-l">Beta satisfaction</div></div><div className="tr-d"/>
        <div className="tr-b rv"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Read-only API · No data stored</div><div className="tr-d"/>
        <div className="tr-b rv"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Powered by Google APIs</div>
      </div></section>

      {/* 01 AI CITATIONS */}
      <section className="sec-feat" style={{background:'var(--d)'}} id="features">
      <div className="w"><div className="sec-lay">
        <div className="sec-content">
          <div><span className="tag tag-star">★ Biggest Differentiator</span></div>
          <div><div className="sl">01 — AI Citations</div>
          <h2 className="sh" style={{color:'var(--dt)'}}>The traffic source<br/>nobody else tracks.</h2>
          <p className="ss" style={{color:'var(--dm)'}}>ChatGPT, Claude, Perplexity, and Gemini are sending real visitors to your website right now. Every other analytics tool categorises them as &ldquo;direct.&rdquo; SERP-Pulse shows you exactly which AI platform, which page, and how it&apos;s growing.</p></div>
          <div className="sec-checks">
            <div className="check">16+ AI platforms tracked live in production</div>
            <div className="check">Per-platform sessions, engagement &amp; conversions</div>
            <div className="check">See which pages AI platforms cite most</div>
            <div className="check">Growth trends — watch your AI traffic increase</div>
          </div>
          <div style={{display:'flex',gap:7,flexWrap:'wrap',marginTop:4}}>
            {[['chatgpt.com','ChatGPT'],['claude.ai','Claude'],['perplexity.ai','Perplexity'],['gemini.google.com','Gemini'],['x.ai','Grok']].map(([d,n])=>(
              <img key={d} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} width="26" height="26" style={{borderRadius:5}} alt={n}/>
            ))}
            <div style={{width:26,height:26,background:'var(--d3)',border:'1px solid var(--db)',borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:700,color:'var(--tl3)'}}>+11</div>
          </div>
          <div style={{display:'flex',gap:10,marginTop:12,flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">See your AI traffic <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/features/ai-traffic" style={{fontSize:13,color:'var(--tl3)',fontWeight:600,textDecoration:'none',display:'flex',alignItems:'center',gap:4}}>Full feature details →</a>
          </div>
        </div>
        <div className="rv"><div className="dmock">
          <div className="dmock-head"><div className="t">AI Citations Breakdown</div><div className="p">Last 28 days</div></div>
          <div className="ai-bars">
            {[['chatgpt.com','ChatGPT','ai-f1','78%','4,218','▲ 24%'],['perplexity.ai','Perplexity','ai-f2','54%','1,847','▲ 67%'],['claude.ai','Claude','ai-f3','28%','926','▲ 41%'],['gemini.google.com','Gemini','ai-f4','18%','612','▲ 18%'],['x.ai','Grok','ai-f5','8%','152','▲ 8%']].map(([d,n,cls,w,v,p])=>(
              <div key={n} className="ai-row">
                <div className="ai-nm"><img src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt=""/>{n}</div>
                <div className="ai-track"><div className={`ai-fill ${cls}`} style={{width:w}}>{v}</div></div>
                <div className="ai-val">{v}</div><div className="ai-pct">{p}</div>
              </div>
            ))}
          </div>
          <div className="ai-total"><div className="ai-tl">Total AI Referral Sessions</div><div style={{display:'flex',alignItems:'center',gap:8}}><span className="ai-tv">7,755</span><span className="ai-td">▲ 34.2%</span></div></div>
        </div></div>
      </div></div>
      </section>

      {/* 02 UNIFIED GSC + GA4 */}
      <section className="sec-feat" style={{background:'var(--wh)'}}>
      <div className="w"><div className="sec-lay rev">
        <div className="rv"><div className="dmock">
          <div className="dmock-head"><div className="t">GSC + GA4 — Overlaid Chart</div><div className="p">28 days vs prev period</div></div>
          <div style={{padding:'12px 14px'}}>
            <div style={{display:'flex',gap:10,marginBottom:8,flexWrap:'wrap'}}>
              <div style={{display:'flex',alignItems:'center',gap:3,fontSize:8,color:'var(--dm)'}}><div style={{width:8,height:3,background:'var(--tl3)',borderRadius:1}}/>Impressions (GSC)</div>
              <div style={{display:'flex',alignItems:'center',gap:3,fontSize:8,color:'var(--dm)'}}><div style={{width:8,height:3,background:'#10b981',borderRadius:1}}/>Clicks (GSC)</div>
              <div style={{display:'flex',alignItems:'center',gap:3,fontSize:8,color:'var(--dm)'}}><div style={{width:12,height:2,background:'#f59e0b',opacity:.7}}/>Sessions (GA4)</div>
            </div>
            <svg viewBox="0 0 380 75" style={{width:'100%',height:75}}>
              <path d="M0,55 C40,50 80,44 120,38 C160,34 200,40 240,28 C280,22 320,17 380,13 L380,75 L0,75 Z" fill="rgba(6,214,199,.07)"/>
              <path d="M0,55 C40,50 80,44 120,38 C160,34 200,40 240,28 C280,22 320,17 380,13" fill="none" stroke="#06d6c7" strokeWidth="1.5"/>
              <path d="M0,64 C40,61 80,57 120,52 C160,48 200,54 240,45 C280,39 320,34 380,29" fill="none" stroke="#10b981" strokeWidth="1.5"/>
              <path d="M0,59 C40,56 80,52 120,47 C160,43 200,49 240,40 C280,34 320,29 380,24" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" opacity=".7"/>
            </svg>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,padding:'0 14px 12px'}}>
            {[['GSC Clicks','284K','#10b981'],['Impressions','4.2M','var(--tl3)'],['GA4 Sessions','312K','#f59e0b'],['AI Traffic','7,755','var(--gn)']].map(([l,v,c])=>(
              <div key={l} style={{background:'var(--d3)',borderRadius:5,padding:9,textAlign:'center'}}><div style={{fontSize:8,color:'var(--dm2)',marginBottom:2}}>{l}</div><div style={{fontFamily:'var(--hd)',fontSize:14,fontWeight:700,color:c}}>{v}</div></div>
            ))}
          </div>
        </div></div>
        <div className="sec-content">
          <div><span className="tag tag-tl"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="13" height="13" style={{borderRadius:2}} alt=""/> + <img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="13" height="13" alt=""/> Unified</span></div>
          <div><div className="sl">02 — Unified Analytics</div>
          <h2 className="sh">One login.<br/>Both platforms.<br/>One chart.</h2>
          <p className="ss">Most SEOs waste hours every day switching between GSC and GA4. SERP-Pulse eliminates that entirely — one Google login connects both, and overlaid charts show GSC and GA4 data on the same timeline.</p></div>
          <div className="sec-checks">
            <div className="check">Single Google OAuth — connects both GSC and GA4</div>
            <div className="check">Overlaid chart: solid line = current, dashed = comparison</div>
            <div className="check">Cross-filtering by Country, Device, URL, Source/Medium</div>
            <div className="check">9 date range options, 5 comparison modes</div>
          </div>
          <div style={{display:'flex',gap:10,marginTop:8,flexWrap:'wrap'}}>
            <a href="/features/analytics" style={{fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none',display:'flex',alignItems:'center',gap:4}}>GA4 Analytics feature →</a>
            <a href="/features/search-console" style={{fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none',display:'flex',alignItems:'center',gap:4}}>Search Console feature →</a>
          </div>
        </div>
      </div></div>
      </section>

      {/* 03 SMART FILTERS */}
      <section className="sec-feat" style={{background:'var(--d)'}}>
      <div className="w"><div className="sec-lay">
        <div className="sec-content">
          <div><span className="tag tag-tl" style={{background:'rgba(6,214,199,.08)',border:'1px solid rgba(6,214,199,.2)'}}>Smart Intelligence</span></div>
          <div><div className="sl">03 — Keyword Filters</div>
          <h2 className="sh" style={{color:'var(--dt)'}}>Raw data becomes<br/>instant opportunity.</h2>
          <p className="ss" style={{color:'var(--dm)'}}>Most tools show you a table of keywords and leave the analysis to you. SERP-Pulse has intelligent preset filters that surface exactly the right opportunities.</p></div>
          <div className="sec-checks">
            <div className="check"><strong style={{color:'var(--tl3)'}}>Sweet Spot</strong> — high impressions, low CTR. Fix the meta, get the clicks.</div>
            <div className="check"><strong style={{color:'var(--tl3)'}}>Quick Wins</strong> — positions 4–10. One push and you&apos;re on page one.</div>
            <div className="check"><strong style={{color:'var(--tl3)'}}>AI Overview Targets</strong> — queries triggering Google AI answers</div>
            <div className="check">Numeric ranges: Impressions, Clicks, CTR, Position + Regex</div>
          </div>
          <a href="/features/search-console" style={{marginTop:8,display:'inline-flex',alignItems:'center',gap:4,fontSize:13,color:'var(--tl3)',fontWeight:600,textDecoration:'none'}}>All smart filter details →</a>
        </div>
        <div className="rv"><div className="dmock">
          <div className="dmock-head">
            <div className="t" style={{display:'flex',alignItems:'center',gap:5}}><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="12" height="12" style={{borderRadius:2}} alt=""/>Top Queries</div>
            <span style={{fontSize:8,color:'var(--tl3)',background:'rgba(6,214,199,.08)',padding:'2px 6px',borderRadius:3}}>2,000 rows</span>
          </div>
          <div className="fm-body">
            <div className="fm-sec">Search Intent &amp; Query Type</div>
            <div className="fm-pills"><div className="fm-p on">All Queries</div><div className="fm-p">AI Overview Targets</div><div className="fm-p">Sweet Spot</div><div className="fm-p">Head Terms</div></div>
            <div className="fm-sec" style={{marginTop:8}}>Position Range in Google</div>
            <div className="fm-pills"><div className="fm-p on">All Positions</div><div className="fm-p">🔥 You Own These</div><div className="fm-p">✅ Page 1</div><div className="fm-p">↗ Quick Wins</div></div>
            <div className="pf-tbl" style={{marginTop:8}}>
              <div className="pf-tr head" style={{gridTemplateColumns:'.2fr 2fr 1fr .6fr .6fr .5fr'}}><div className="pf-td">#</div><div className="pf-td">Query</div><div className="pf-td">Impressions</div><div className="pf-td">Clicks</div><div className="pf-td">CTR</div><div className="pf-td">Pos.</div></div>
              <div className="pf-tr" style={{gridTemplateColumns:'.2fr 2fr 1fr .6fr .6fr .5fr'}}><div className="pf-td">1</div><div className="pf-td">how to track ai traffic</div><div className="pf-td">3.9K</div><div className="pf-td">764</div><div className="pf-td gn">19.6%</div><div className="pf-td"><span className="pf-pos gd">6.3</span></div></div>
              <div className="pf-tr" style={{gridTemplateColumns:'.2fr 2fr 1fr .6fr .6fr .5fr',border:'none'}}><div className="pf-td">2</div><div className="pf-td">seo sweet spot keywords</div><div className="pf-td">802</div><div className="pf-td">14</div><div className="pf-td" style={{color:'var(--rd)'}}>1.8%</div><div className="pf-td"><span className="pf-pos g">8.1</span></div></div>
            </div>
          </div>
        </div></div>
      </div></div>
      </section>

      {/* 04 REPORTS */}
      <section className="sec-feat" style={{background:'var(--bg)'}}>
      <div className="w"><div className="sec-lay rev">
        <div className="rv"><div className="lmock">
          <div className="lmock-head"><div className="lmock-logo">SERP-Pulse Reports</div><div className="lmock-meta">Demo Agency · June 2026</div></div>
          <div style={{padding:14,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            {[
              {img:`https://www.google.com/s2/favicons?domain=search.google.com&sz=32`,r:2,t:'GSC Report',d:'Queries, pages, positions'},
              {img:`https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg`,r:0,t:'GA4 Report',d:'Sessions, users, engagement',highlight:true},
              {img:`https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64`,r:4,t:'AI Traffic Report',d:'ChatGPT, Claude, Perplexity...'},
              {emoji:'📊',t:'Combined Report',d:'GSC + GA4 + AI in one PDF'},
            ].map((item: any,i)=>(
              <div key={i} style={{border:item.highlight?'2px solid var(--tl)':'1.5px solid var(--bd)',borderRadius:'var(--r)',padding:14,textAlign:'center',background:item.highlight?'rgba(8,145,178,.02)':'transparent'}}>
                <div style={{marginBottom:6}}>{item.emoji?<span style={{fontSize:22}}>{item.emoji}</span>:<img src={item.img} width="24" height="24" style={{borderRadius:item.r}} alt=""/>}</div>
                <div style={{fontFamily:'var(--hd)',fontSize:12,fontWeight:700,color:'var(--ink)',marginBottom:2}}>{item.t}</div>
                <div style={{fontSize:10,color:'var(--mt2)'}}>{item.d}</div>
              </div>
            ))}
          </div>
          <div style={{margin:'0 14px 14px',padding:'10px 12px',background:'var(--bg2)',borderRadius:'var(--r)',display:'flex',gap:8,flexWrap:'wrap'}}>
            <span style={{fontSize:10,fontWeight:600,color:'var(--gn)',background:'var(--gns)',padding:'3px 8px',borderRadius:4}}>✓ Shareable link</span>
            <span style={{fontSize:10,fontWeight:600,color:'var(--tl)',background:'var(--ts)',padding:'3px 8px',borderRadius:4}}>✓ Branded PDF</span>
            <span style={{fontSize:10,fontWeight:600,color:'var(--am)',background:'var(--ams)',padding:'3px 8px',borderRadius:4}}>✓ One click</span>
          </div>
        </div></div>
        <div className="sec-content">
          <div><span className="tag tag-gn">Agency Feature</span></div>
          <div><div className="sl">04 — White-Label Reports</div>
          <h2 className="sh">4 report types.<br/>Your brand.<br/>60 seconds.</h2>
          <p className="ss">Client reporting shouldn&apos;t take hours. SERP-Pulse generates branded, professional PDF reports in under 60 seconds — with your logo, your colors, and a public shareable link clients can open without logging in.</p></div>
          <div className="sec-checks">
            <div className="check">GSC, GA4, AI Traffic, and Combined reports</div>
            <div className="check">Add your logo, brand colors, and custom domain</div>
            <div className="check">Public shareable link — no client login required</div>
            <div className="check">For agencies managing 10+ clients, this alone justifies the subscription</div>
          </div>
          <a href="/features/reports" style={{marginTop:8,display:'inline-flex',alignItems:'center',gap:4,fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>See all report types →</a>
        </div>
      </div></div>
      </section>

      {/* 05 GROWTH MONITORING */}
      <section className="sec-feat" style={{background:'var(--d)'}} id="growth">
      <div className="w"><div className="sec-lay">
        <div className="sec-content">
          <div><span className="tag tag-star">Agency Power Feature</span></div>
          <div><div className="sl">05 — Growth Monitoring</div>
          <h2 className="sh" style={{color:'var(--dt)'}}>100 projects.<br/>One glance.</h2>
          <p className="ss" style={{color:'var(--dm)'}}>See which projects are growing, declining, or stable across your entire portfolio — based on whichever KPI matters to you. Switch between Smart, Clicks, Impressions, CTR, or Position in one click.</p></div>
          <div className="sec-checks">
            <div className="check"><strong style={{color:'var(--tl3)'}}>Smart Mode</strong> — intelligent combined health score per project</div>
            <div className="check">Per-project sparkline trend charts at a glance</div>
            <div className="check">Growing / Declining / Mixed / Stable status badges</div>
            <div className="check">CSV export — all projects, all metrics</div>
          </div>
          <a href="/features/growth" style={{marginTop:8,display:'inline-flex',alignItems:'center',gap:4,fontSize:13,color:'var(--tl3)',fontWeight:600,textDecoration:'none'}}>Growth monitoring details →</a>
        </div>
        <div className="rv"><div className="dmock">
          <div className="dmock-head"><div className="t">Project Health</div><span style={{fontSize:8,color:'var(--tl3)',background:'rgba(6,214,199,.08)',padding:'2px 7px',borderRadius:3}}>✓ Smart (Combined) ▾</span></div>
          <div className="gm-ov">
            <div className="gm-ov-c"><div style={{fontSize:14}}>📈</div><div className="gm-n" style={{color:'#10b981'}}>47</div><div className="gm-l">Growing</div></div>
            <div className="gm-ov-c"><div style={{fontSize:14}}>→</div><div className="gm-n" style={{color:'var(--tl3)'}}>33</div><div className="gm-l">Stable</div></div>
            <div className="gm-ov-c"><div style={{fontSize:14}}>↕</div><div className="gm-n" style={{color:'#f59e0b'}}>8</div><div className="gm-l">Mixed</div></div>
            <div className="gm-ov-c"><div style={{fontSize:14}}>📉</div><div className="gm-n" style={{color:'#ef4444'}}>12</div><div className="gm-l">Declining</div></div>
          </div>
          <div className="gm-rows">
            <div className="gm-r hd"><div className="gm-td">#</div><div className="gm-td">Project</div><div className="gm-td">Impr.</div><div className="gm-td">Clicks</div><div className="gm-td">Trend</div><div className="gm-td">CTR</div><div className="gm-td">Status</div></div>
            {[
              ['1','acme-corp.com','2.9K','87','#10b981','3.05%','gn','● Growing'],
              ['2','travel-blog.io','5.4K','341','var(--tl3)','6.3%','tl','→ Stable'],
              ['3','startup-saas.co','1.2K','48','#f59e0b','4.0%','am','↕ Mixed'],
              ['4','ecomm-store.com','8.1K','192','#ef4444','2.4%','rd','📉 Declining'],
            ].map(([n,p,i,c,tc,ctr,bc,status])=>(
              <div key={n} className="gm-r">
                <div className="gm-td">{n}</div><div className="gm-td nm">{p}</div><div className="gm-td">{i}</div><div className="gm-td">{c}</div>
                <div className="gm-td"><svg width="38" height="11" viewBox="0 0 38 11"><path d={bc==='gn'?'M2 8 L10 6 L18 4 L28 5 L36 2':bc==='tl'?'M2 7 L10 6 L18 7 L28 6 L36 7':bc==='am'?'M2 5 L10 8 L18 4 L28 7 L36 5':'M2 3 L10 5 L18 7 L28 8 L36 9'} fill="none" stroke={tc} strokeWidth="1.5"/></svg></div>
                <div className="gm-td" style={{color:tc}}>{ctr}</div>
                <div className="gm-td"><span className={`gm-badge ${bc}`}>{status}</span></div>
              </div>
            ))}
          </div>
        </div></div>
      </div></div>
      </section>

      {/* 06 MCP */}
      <section className="sec-feat" style={{background:'var(--wh)'}}>
      <div className="w"><div className="sec-lay rev">
        <div className="rv"><div className="dmock">
          <div className="dmock-head"><div className="t" style={{gap:6}}><svg width="12" height="12" fill="none" stroke="#8b5cf6" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>MCP Server — Live Session</div><div className="p">16 tools</div></div>
          <div className="chat">
            <div className="chat-user"><div className="chat-u-b">Which of my pages gets the most AI traffic from Perplexity this month?</div></div>
            <div className="chat-ai"><div className="chat-a-b">
              <div className="chat-tool">tool: get_ai_traffic · property: acme-corp.com</div>
              <div className="chat-data">
                <div className="k">/blog/seo-guide</div><div className="v">847 sessions</div><div className="v">▲ 34%</div>
                <div className="k">/tools/keyword-research</div><div className="v">612 sessions</div><div className="v">▲ 28%</div>
              </div>
              Your top Perplexity page is <strong style={{color:'var(--dt)'}}>/blog/seo-guide</strong> with 847 sessions (+34%).
            </div></div>
          </div>
          <div className="chat-inp"><span>Ask about your SEO data...</span><svg width="12" height="12" fill="none" stroke="var(--tl3)" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </div></div>
        <div className="sec-content">
          <div><span className="tag tag-pu">Claude · ChatGPT · Cursor</span></div>
          <div><div className="sl">06 — MCP Server</div>
          <h2 className="sh">Talk to your<br/>SEO data.</h2>
          <p className="ss">Connect Claude, ChatGPT, or Cursor to your SERP-Pulse account. Ask questions in plain English — get live data from your actual GSC and GA4 properties, powered by 16 custom tools.</p></div>
          <div className="sec-checks">
            <div className="check">16 MCP tools: queries, pages, AI traffic, reports</div>
            <div className="check">Works with Claude Desktop, ChatGPT, Cursor, any MCP client</div>
            <div className="check">Ask &ldquo;which pages need fixing?&rdquo; and get instant answers</div>
          </div>
          <div style={{display:'flex',gap:10,marginTop:8,flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h" style={{fontSize:13,padding:'10px 18px'}}>Try MCP Server <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/features/mcp" style={{fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none',display:'flex',alignItems:'center',gap:4}}>MCP Server details →</a>
          </div>
        </div>
      </div></div>
      </section>

      {/* COMPETITOR TABLE */}
      <section style={{padding:'96px 0',background:'var(--bg)'}}>
      <div className="w">
        <div style={{textAlign:'center',marginBottom:40}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>Why SERP-Pulse</div>
          <h2 className="sh">Built for what other tools miss.</h2>
        </div>
        <div className="cmp-tbl-wrap">
        <table className="cmp-tbl">
          <thead><tr><th>Feature</th><th className="sp">SERP-Pulse</th><th>Agency Analytics</th><th>Databox</th><th>DashThis</th></tr></thead>
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

      {/* HOW IT WORKS */}
      <section style={{padding:'96px 0',background:'var(--bg)'}}>
      <div className="w"><div style={{textAlign:'center'}}>
        <div className="sl" style={{justifyContent:'center',display:'flex'}}>Setup</div>
        <h2 className="sh">Connect in 2 minutes.</h2>
        <p className="ss" style={{margin:'12px auto 0',textAlign:'center'}}>No API keys. No technical setup. Just connect your Google account.</p>
      </div>
      <div className="how-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginTop:52,position:'relative'}}>
        <div style={{position:'absolute',top:34,left:'17%',right:'17%',height:2,background:'var(--bd)'}} className="how-line-hide"/>
        {[
          {n:'1',t:'Connect Google',d:'One OAuth click connects both Search Console and GA4 simultaneously. No API keys, no tokens, no manual configuration.',time:'⚡ 30 seconds'},
          {n:'2',t:'See everything',d:'GSC data, GA4 behavior, AI citation traffic, and project health all load instantly. 9 modular widgets, custom date ranges, overlaid charts.',time:'⚡ Instant'},
          {n:'3',t:'Report to clients',d:'Generate branded white-label PDF reports in under 60 seconds. Share via public link. Clients see polished data without logging in.',time:'⚡ Under 3 minutes'},
        ].map(s=>(
          <div key={s.n} className="rv" style={{textAlign:'center',position:'relative',zIndex:1}}>
            <div style={{width:52,height:52,background:'var(--wh)',border:'2px solid var(--bd2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontFamily:'var(--hd)',fontSize:17,fontWeight:800,color:'var(--tl)'}}>{s.n}</div>
            <h3 style={{fontFamily:'var(--hd)',fontSize:16,fontWeight:700,letterSpacing:-.3,marginBottom:6}}>{s.t}</h3>
            <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.5}}>{s.d}</p>
            <span style={{display:'inline-flex',alignItems:'center',gap:3,fontSize:10,fontWeight:600,color:'var(--gn)',background:'var(--gns)',padding:'2px 8px',borderRadius:4,marginTop:8}}>{s.time}</span>
          </div>
        ))}
      </div></div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{padding:'96px 0',background:'var(--wh)'}}>
      <div className="w"><div style={{textAlign:'center'}}>
        <div className="sl" style={{justifyContent:'center',display:'flex'}}>What Users Say</div>
        <h2 className="sh">Real feedback from<br/>real professionals.</h2>
      </div>
      <div className="proof-nums" style={{margin:'36px 0'}}>
        <div className="pnn rv"><div className="pnn-n">500+</div><div className="pnn-l">Active users</div></div><div className="pnn-d"/>
        <div className="pnn rv"><div className="pnn-n">40M+</div><div className="pnn-l">Queries tracked</div></div><div className="pnn-d"/>
        <div className="pnn rv"><div className="pnn-n">16+</div><div className="pnn-l">AI platforms</div></div><div className="pnn-d"/>
        <div className="pnn rv"><div className="pnn-n">4.9/5</div><div className="pnn-l">Beta satisfaction</div></div>
      </div>
      <div className="t-grid rv">
        {[
          {q:'We discovered that ChatGPT was citing our blog content and sending real traffic. No other tool showed us that. This changed how we think about content strategy entirely.',i:'SK',n:'Sarah K.',r:'SEO Director, Digital Agency'},
          {q:'Client reporting used to take hours. Now it takes minutes. The growth monitoring view alone saves us significant time across our entire portfolio.',i:'MT',n:'Marcus T.',r:'Freelance SEO Consultant'},
          {q:'One dashboard instead of multiple tabs. The Sweet Spot and Quick Wins filters helped us find keyword opportunities we were completely missing.',i:'PM',n:'Priya M.',r:'Head of SEO, SaaS Company'},
        ].map(t=>(
          <div key={t.i} className="tc"><div className="tc-stars">★★★★★</div><p className="tc-q">{t.q}</p><div className="tc-auth"><div className="tc-av">{t.i}</div><div><div className="tc-nm">{t.n}</div><div className="tc-rl">{t.r}</div></div></div></div>
        ))}
      </div></div>
      </section>

      {/* FOUNDER — no inline gridTemplateColumns so CSS media queries work */}
      <section style={{padding:'96px 0',background:'var(--bg)'}}>
      <div className="w">
        <div style={{textAlign:'center',marginBottom:48}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>The Story</div>
          <h2 className="sh">Built by an SEO.<br/>Not just a developer.</h2>
        </div>
        <div className="founder-grid rv" style={{maxWidth:920,margin:'0 auto'}}>
          {/* Founder photo */}
          <div style={{textAlign:'center'}}>
            <div style={{width:200,height:200,margin:'0 auto 16px',borderRadius:'50%',padding:3,background:'linear-gradient(135deg,#0891b2,#06d6c7)',boxShadow:'0 16px 48px rgba(8,145,178,.2)'}}>
              <div style={{width:'100%',height:'100%',borderRadius:'50%',overflow:'hidden',background:'var(--bg2)'}}>
                <img src={FOUNDER_IMG} alt="Sahil Kareer" width={194} height={194} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top center',display:'block'}}/>
              </div>
            </div>
            <div style={{fontFamily:'var(--hd)',fontSize:17,fontWeight:700,marginBottom:2}}>Sahil Kareer</div>
            <div style={{fontSize:13,color:'var(--mt)',marginBottom:10}}>Founder &amp; Developer, SERP-Pulse</div>
            <a href="https://www.linkedin.com/in/sahil-kareer-5b9a71109/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:5,fontSize:11,fontWeight:600,color:'var(--tl)',background:'var(--ts)',padding:'4px 10px',borderRadius:20,textDecoration:'none',border:'1px solid rgba(8,145,178,.15)'}}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
              LinkedIn
            </a>
          </div>
          {/* Story */}
          <div className="founder-content">
            <div className="f-quote">&ldquo;After 6 years in SEO, I noticed the same problem everywhere — <em>important insights scattered across too many tools.</em>&rdquo;</div>
            <p className="f-p">Working across agencies, in-house teams, and as an independent consultant, I watched SEO professionals waste hours every week switching between Search Console, Google Analytics, and spreadsheets just to answer basic questions about their projects.</p>
            <p className="f-p">I also noticed the growing blind spot around AI-generated traffic. As ChatGPT, Claude, Perplexity, and Gemini started sending real visitors to websites, standard analytics tools couldn&apos;t see any of it — categorising everything as &ldquo;direct&rdquo; by default.</p>
            <p className="f-p" style={{color:'var(--ink)',fontWeight:500}}>The goal isn&apos;t to replace your existing tools. It&apos;s to make your decision-making faster, easier, and genuinely more actionable.</p>
            <div className="f-meta"><strong>Sahil Kareer</strong> — Founder &amp; Developer, SERP-Pulse</div>
            <div className="f-cred">6+ years SEO, Analytics &amp; Agency Operations</div>
            <div style={{marginTop:14}}><a href="/about" style={{fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>Read the full story →</a></div>
          </div>
        </div>
      </div>
      </section>

      {/* PRICING */}
      <section style={{padding:'96px 0',background:'var(--wh)',borderTop:'1px solid var(--bd)'}}>
      <div className="w"><div style={{textAlign:'center'}}>
        <div className="sl" style={{justifyContent:'center',display:'flex'}}>Pricing</div>
        <h2 className="sh">Simple. Transparent.<br/>Everything included.</h2>
        <p className="ss" style={{margin:'12px auto 0',textAlign:'center'}}>AI tracking, white-label reports, MCP server — all included. 30-day free trial on every tier.</p>
      </div>
      <div className="ptog-row">
        <span>Monthly</span>
        <button className={`ptog${pricingAnnual?' on':''}`} onClick={()=>setPricingAnnual(a=>!a)}><div className="ptog-t"/></button>
        <span>Annual</span>
        <span className="save-tag">Save 6%</span>
      </div>
      <div style={{textAlign:'center',margin:'-24px 0 28px'}}><span style={{fontSize:12,color:'var(--gn)',fontWeight:600,background:'var(--gns)',padding:'4px 12px',borderRadius:6}}>30-day free trial on all plans · No credit card required</span></div>
      <div className="p-grid">
        {[
          {tier:'Freelancer',m:20,a:19,anchor:'Billed annually · $20/mo monthly',desc:'For solo SEOs and personal projects.',pop:false,cta:'Start 30-Day Free Trial',cls:'btn-pl-l',features:['1 GSC project','1 Report','GSC + GA4 analytics','AI citation tracking (16+ platforms)','MCP Server access','CSV exports','Light/dark theme'],off:['Global filters','White-label branding']},
          {tier:'Pro',m:49,a:46,anchor:'Billed annually · $49/mo monthly',desc:'For SEO professionals managing multiple clients.',pop:true,cta:'Start 30-Day Free Trial →',cls:'btn-pl-f',features:['10 GSC projects','10 Reports','Everything in Freelancer','Global filters across all data','Alerts & notifications','Priority support','All GA4 widgets','Advanced date comparisons'],off:[]},
          {tier:'Agency',m:159,a:150,anchor:'Billed annually · $159/mo monthly',desc:'Unlimited scale for agencies and teams.',pop:false,cta:'Start 30-Day Free Trial →',cls:'btn-pl-l',features:['Unlimited projects','Unlimited reports','Everything in Pro','White-label branding','Team access & collaboration','API access','Beta features early access','Dedicated support'],off:[]},
        ].map(plan=>(
          <div key={plan.tier} className={`p-card rv${plan.pop?' pop':''}`}>
            {plan.pop&&<div className="p-pop-b">Most Popular</div>}
            <div className="p-tier">{plan.tier}</div>
            <div className="p-price"><sup>$</sup><span>{pricingAnnual?plan.a:plan.m}</span><span className="per">/mo</span></div>
            <div className="p-anchor">{plan.anchor}</div>
            <p className="p-desc">{plan.desc}</p>
            <ul className="p-list">
              {plan.features.map(f=><li key={f}>{f}</li>)}
              {plan.off.map(f=><li key={f} className="off">{f}</li>)}
            </ul>
            <a href={`${APP}/signup`} className={`btn-pl ${plan.cls}`}>{plan.cta}</a>
          </div>
        ))}
      </div></div>
      </section>

      {/* ECOSYSTEM */}
      <section style={{padding:'64px 0',background:'var(--bg)',borderTop:'1px solid var(--bd)'}}>
      <div className="w" style={{textAlign:'center'}}>
        <div className="sl" style={{justifyContent:'center',display:'flex'}}>Ecosystem</div>
        <h2 className="sh">Connects to what you use.</h2>
        <div className="eco-grid">
          <div className="ec live rv"><div className="ec-ic"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="32" height="32" style={{borderRadius:6}} alt=""/></div><h5>Google Search Console</h5><p>Queries, pages, CTR, positions, coverage</p><div className="ec-live-dot">Live</div></div>
          <div className="ec live rv"><div className="ec-ic"><img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="32" height="32" alt=""/></div><h5>Google Analytics 4</h5><p>Sessions, users, engagement, conversions</p><div className="ec-live-dot">Live</div></div>
          <div className="ec soon rv"><div className="ec-ic" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2,opacity:.5}}>{['chatgpt.com','claude.ai','gemini.google.com','perplexity.ai'].map(d=><img key={d} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} width="14" height="14" style={{borderRadius:2}} alt=""/>)}</div><h5>AI Citations</h5><p>Track where AI platforms cite you</p></div>
          <div className="ec soon rv"><div className="ec-ic" style={{opacity:.5,fontSize:24}}>📊</div><h5>Keyword Tracking</h5><p>Daily position monitoring</p></div>
        </div>
        <div style={{marginTop:24}}><a href="/integrations" style={{fontSize:14,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>View all integrations →</a></div>
      </div>
      </section>

      {/* FINAL CTA */}
      <section className="final dark-sec">
        <div className="final-bg"/>
        <div className="w">
          <h2>Stop guessing.<br/>Start <span className="ac">knowing.</span></h2>
          <p className="final-p">Connect your first property in under 2 minutes. See GSC, GA4, and AI citation traffic — all in one place. No credit card. No commitment.</p>
          <div style={{position:'relative',zIndex:1,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g" style={{color:'var(--dm)',borderColor:'rgba(255,255,255,.15)'}}>View live app →</a>
          </div>
          <div className="final-checks"><span className="fck">14-day trial</span><span className="fck">No credit card</span><span className="fck">2-min setup</span><span className="fck">Cancel anytime</span></div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

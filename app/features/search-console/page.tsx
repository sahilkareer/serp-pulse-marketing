import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'features-search-console' }).catch(() => null)
  return {
    title: d?.seoTitle || 'Google Search Console Features — SERP-Pulse',
    description: d?.seoDesc || 'Google Search Console intelligence — queries, pages, countries, devices, smart filters, CSV export.',
  }
}

const APP = 'https://app.serp-pulse.com'

export default async function SearchConsolePage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'features-search-console' }).catch(() => null)
  return (
    <>
      <SiteNav />

      {/* PAGE HERO */}
      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>Search Console</span>
          </div>
          <div style={{marginBottom:16}}><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="40" height="40" style={{borderRadius:8}} alt="GSC"/></div>
          <h1>
            {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
              <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
            )) : <>Google Search Console<br/><span className="ac">intelligence.</span></>}
          </h1>
          <p className="hero-sub">{d?.heroSubtext || 'Stop switching between GSC and spreadsheets. SERP-Pulse pulls every metric from Google Search Console into one interface — with smart filters that find real opportunities, cross-tab drilling, and instant CSV export.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="#how" className="btn-g">See how it works</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>The Problem</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(24px,3.5vw,32px)',fontWeight:800,letterSpacing:-1,maxWidth:600,margin:'0 auto'}}>Google Search Console is powerful. But using it efficiently is exhausting.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="how-grid">
            {[
              {icon:'😤',t:'Tab switching fatigue',d:'You open GSC, then GA4, then a spreadsheet. By the time you cross-reference the data, 30 minutes have passed and you still don\'t have a clear answer.'},
              {icon:'📊',t:'Raw data, no insight',d:'GSC gives you a table of 2,000 keywords. But which ones are opportunities? Which ones are declining? You\'re left to figure that out on your own.'},
              {icon:'🔍',t:'No cross-referencing',d:'You find a keyword doing well — but which page ranks for it? In which countries? On which devices? Each question requires a separate filter session in standard GSC.'},
            ].map(p=>(
              <div key={p.t} className="rv" style={{background:'var(--bg)',border:'1px solid var(--bd)',borderRadius:'var(--rl)',padding:24}}>
                <div style={{fontSize:20,marginBottom:10}}>{p.icon}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{p.t}</h3>
                <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55}}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 GSC TABS */}
      <section className="feat-sec" id="how">
        <div className="w">
          <div className="feat-grid">
            <div className="feat-content">
              <div className="sl">Core Data</div>
              <h2>4 GSC tabs. Every dimension covered.</h2>
              <p>Queries, Pages, Countries, and Devices — each with full sorting, search, and export. The real power is <strong style={{color:'var(--ink)'}}>cross-tab filtering</strong>: click any row in one tab to instantly filter all the others.</p>
              <p style={{fontSize:14,color:'var(--mt)',lineHeight:1.6}}><strong style={{color:'var(--ink)'}}>Here&apos;s what that means:</strong> You click a keyword like &ldquo;seo dashboard tool&rdquo; in the Queries tab. Instantly, the Pages tab shows only the pages ranking for that keyword. One click — four answers.</p>
              <div className="checks">
                <div className="check"><strong>Queries</strong> — impressions, clicks, CTR, position for every keyword. Visual impression bars.</div>
                <div className="check"><strong>Pages</strong> — your top pages with all metrics. Click a page to see which queries it ranks for.</div>
                <div className="check"><strong>Countries</strong> — traffic by country with flag emoji. 131+ countries supported.</div>
                <div className="check"><strong>Devices</strong> — desktop vs mobile vs tablet.</div>
                <div className="check"><strong>Cross-filtering</strong> — click any row in any tab to filter everything else. Clear with one click.</div>
              </div>
              <div className="feat-tags">
                <span className="feat-tag">Cross-Tab Filtering</span>
                <span className="feat-tag">Click to Drill Down</span>
                <span className="feat-tag">CSV Export</span>
                <span className="feat-tag">131+ Countries</span>
              </div>
            </div>
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="12" height="12" style={{borderRadius:2}} alt=""/>Query Analysis</div><div className="p">28 days</div></div>
                <div style={{padding:12}}>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,marginBottom:10}}>
                    {[['Impressions','34.2K','var(--tl3)'],['Clicks','8.9K','#10b981'],['CTR','26.02%','#a855f7'],['Position','20.0','#ec4899']].map(([l,v,c])=>(
                      <div key={l} style={{background:'var(--d3)',borderRadius:5,padding:8,borderTop:`2px solid ${c}`}}>
                        <div style={{fontSize:7,color:'var(--dm2)',textTransform:'uppercase'}}>{l}</div>
                        <div style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,color:'var(--dt)'}}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pf-tbl">
                    <div className="pf-tr head" style={{gridTemplateColumns:'.2fr 2fr 1fr .6fr .6fr .5fr'}}>
                      <div className="pf-td">#</div><div className="pf-td" style={{color:'var(--dt)'}}>Query</div><div className="pf-td">Impressions</div><div className="pf-td">Clicks</div><div className="pf-td">CTR</div><div className="pf-td">Pos</div>
                    </div>
                    {[['1','seo dashboard tool','3.9K','764','19.6%','gn','6.3','a'],['2','ai traffic analytics','802','14','1.8%','rd','8.1','g'],['3','gsc ga4 combined','455','309','67.9%','gn','2.2','gd']].map(([n,q,i,c,ctr,ctrcls,pos,poscls],idx)=>(
                      <div key={n} className="pf-tr" style={{gridTemplateColumns:'.2fr 2fr 1fr .6fr .6fr .5fr',border:idx===2?'none':undefined}}>
                        <div className="pf-td">{n}</div>
                        <div className="pf-td" style={{color:'var(--dt)'}}>{q}</div>
                        <div className="pf-td"><div className="pf-bar-c"><div className="pf-bar-f" style={{width:idx===0?60:idx===1?34:26}}/>{i}</div></div>
                        <div className="pf-td">{c}</div>
                        <div className={`pf-td ${ctrcls}`}>{ctr}</div>
                        <div className="pf-td"><span className={`pf-pos ${poscls}`}>{pos}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART FILTERS */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div className="feat-grid rev">
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">Smart Keyword Filters</div><div className="p">2,000 rows</div></div>
                <div style={{padding:12}}>
                  <div style={{fontSize:7,fontWeight:700,color:'var(--dm2)',textTransform:'uppercase',letterSpacing:1,marginBottom:4}}>Search Intent &amp; Query Type</div>
                  <div style={{display:'flex',gap:4,flexWrap:'wrap',marginBottom:8}}>
                    {['All Queries','AI Overview Targets','People Are Asking','Sweet Spot','Head Terms'].map((f,i)=>(
                      <span key={f} className={`fm-p${i===0?' on':''}`}>{f}</span>
                    ))}
                  </div>
                  <div style={{fontSize:7,fontWeight:700,color:'var(--dm2)',textTransform:'uppercase',letterSpacing:1,marginBottom:4}}>Position Range in Google</div>
                  <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
                    {['All Positions','🔥 You Own These','✅ Page 1','◇ Almost There','↗ Quick Wins'].map((f,i)=>(
                      <span key={f} className={`fm-p${i===0?' on':''}`}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="feat-content">
              <div className="sl">Smart Filtering</div>
              <h2>11 preset filters that surface real opportunities.</h2>
              <p>SERP-Pulse has two layers of intelligent filtering — <strong style={{color:'var(--ink)'}}>Search Intent &amp; Query Type</strong> and <strong style={{color:'var(--ink)'}}>Position Range in Google</strong> — that surface exactly the keywords where action leads to results.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,margin:'12px 0'}} className="how-grid">
                {[
                  {t:'Sweet Spot',d:'High impressions but low CTR. You\'re being seen, but users aren\'t clicking. Fix the meta title or description — get immediate traffic.'},
                  {t:'Quick Wins',d:'Positions 4–10 with decent impressions. A small content improvement or a few backlinks could push you into the top 3.'},
                  {t:'AI Overview Targets',d:'Queries where Google shows AI-generated answers. Structure your content to appear in AI overviews — the new position zero.'},
                  {t:'People Are Asking',d:'Question-based queries starting with who, what, when, where, why, how. Perfect for FAQ content and featured snippets.'},
                ].map(f=>(
                  <div key={f.t} style={{background:'var(--bg)',border:'1px solid var(--bd)',borderRadius:'var(--r)',padding:14}}>
                    <h4 style={{fontFamily:'var(--hd)',fontSize:13,fontWeight:700,color:'var(--tl)',marginBottom:4}}>{f.t}</h4>
                    <p style={{fontSize:12,color:'var(--mt)',lineHeight:1.5}}>{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATE RANGE */}
      <section className="feat-sec">
        <div className="w">
          <div className="feat-grid">
            <div className="feat-content">
              <div className="sl">Time Intelligence</div>
              <h2>9 date ranges. 5 comparison modes. Custom periods.</h2>
              <p>Choose from 7 days, 14 days, 28 days, 3 months, 6 months, 12 months, 16 months, Last Month, or any custom date range. Then layer on a comparison to see exactly how your performance has changed.</p>
              <div className="checks">
                <div className="check"><strong>Previous period</strong> — compare against the same number of days immediately before</div>
                <div className="check"><strong>Same dates, previous month</strong> — May 1–28 vs April 1–28</div>
                <div className="check"><strong>Same period last year</strong> — see true year-over-year growth</div>
                <div className="check"><strong>Last month vs same month last year</strong> — monthly seasonality check</div>
                <div className="check"><strong>Chart overlay</strong> — solid line = current, dashed = comparison period</div>
              </div>
            </div>
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">Performance Over Time</div><div className="p">Custom: May 1 — May 28</div></div>
                <div style={{padding:12}}>
                  <div style={{display:'flex',gap:3,marginBottom:8,flexWrap:'wrap'}}>
                    <span className="pf-tog t1">● Impressions</span>
                    <span className="pf-tog t2">● Clicks</span>
                    <span className="pf-tog off">● CTR</span>
                    <span className="pf-tog off">● Position</span>
                  </div>
                  <svg viewBox="0 0 400 65" style={{width:'100%',height:65}}>
                    <path d="M0,48 C40,44 80,38 130,34 C180,30 230,36 280,26 C330,20 360,16 400,12" fill="none" stroke="#06d6c7" strokeWidth="1.5"/>
                    <path d="M0,52 C40,48 80,44 130,40 C180,36 230,42 280,34 C330,28 360,24 400,20" fill="none" stroke="#06d6c7" strokeWidth="1" opacity=".4" strokeDasharray="3,2"/>
                    <path d="M0,58 C40,56 80,52 130,48 C180,44 230,50 280,42 C330,36 360,32 400,28" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                    <path d="M0,62 C40,60 80,57 130,53 C180,49 230,55 280,48 C330,42 360,38 400,34" fill="none" stroke="#10b981" strokeWidth="1" opacity=".4" strokeDasharray="3,2"/>
                  </svg>
                  <div style={{fontSize:8,color:'var(--dm2)',marginTop:4,display:'flex',gap:12}}>
                    <span>━ Current period</span><span style={{opacity:.6}}>╌ Comparison period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SEO */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div className="feat-grid rev">
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">Coverage Analysis</div><div className="p">3 sitemaps parsed</div></div>
                <div style={{padding:12,display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6}}>
                  {[['842','Indexed','#10b981'],['156','Not Indexed','#ef4444'],['84.4%','Coverage','var(--tl3)'],['3','Sitemaps','var(--dt)']].map(([v,l,c])=>(
                    <div key={l} style={{background:'var(--d3)',borderRadius:6,padding:10,textAlign:'center'}}>
                      <div style={{fontFamily:'var(--hd)',fontSize:18,fontWeight:800,color:c}}>{v}</div>
                      <div style={{fontSize:8,color:'var(--dm2)'}}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="feat-content">
              <div className="sl">Technical SEO</div>
              <h2>Coverage, URL Inspect &amp; Robots.txt — all built in.</h2>
              <p>SERP-Pulse includes full coverage analysis, live URL inspection, and robots.txt rule analysis — so you can diagnose indexing issues without leaving the dashboard.</p>
              <div className="checks">
                <div className="check"><strong>Coverage tab</strong> — parses all sitemaps recursively, cross-references with GSC to show which URLs are indexed</div>
                <div className="check"><strong>URL Inspect</strong> — live Google index status via the GSC URL Inspection API. Real-time indexing status</div>
                <div className="check"><strong>Robots.txt</strong> — fetches, displays, and analyzes your robots.txt rules. Highlights potential issues</div>
                <div className="check"><strong>CSV Export</strong> — export any table across any tab. Opens correctly in Excel and Google Sheets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="feat-sec">
        <div className="w">
          <div style={{textAlign:'center',marginBottom:32}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>Who Benefits</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3vw,28px)',fontWeight:800,letterSpacing:-.8}}>Three ways SEOs use Search Console in SERP-Pulse.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="how-grid">
            {[
              {label:'Agencies',t:'Monitor 100+ client projects at once',d:'Use the Growth Monitoring dashboard to see which projects are growing, declining, or stable. Then drill into individual projects with the full GSC view. Generate white-label reports in seconds.'},
              {label:'Freelancers',t:'Find opportunities faster, report easier',d:'Use Sweet Spot and Quick Wins filters to find actionable keywords in seconds. Show clients their progress with branded PDF reports that take 60 seconds instead of hours in spreadsheets.'},
              {label:'In-House SEOs',t:'Communicate performance to stakeholders',d:'No more pulling CSVs and building charts in Google Sheets. SERP-Pulse gives you shareable reports, comparison overlays, and clear trend visualizations stakeholders can understand.'},
            ].map(u=>(
              <div key={u.label} className="rv" style={{background:'var(--wh)',border:'1px solid var(--bd)',borderRadius:'var(--rl)',padding:24}}>
                <div style={{fontSize:10,fontWeight:700,color:'var(--tl)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>{u.label}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:14,fontWeight:700,marginBottom:6}}>{u.t}</h3>
                <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55}}>{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL FILTERS */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div className="feat-grid">
            <div className="feat-content">
              <div className="sl">Cross-Data Filtering</div>
              <h2>Global filter bar — filter everything at once.</h2>
              <p>Apply a country, device, URL, query, or source/medium filter — and <strong style={{color:'var(--ink)'}}>every table, chart, and metric updates simultaneously</strong>. Both GSC and GA4 data respond to the same filters.</p>
              <div className="checks">
                <div className="check"><strong>Country filter</strong> — searchable dropdown with flag emoji, filters both GSC and GA4</div>
                <div className="check"><strong>Device filter</strong> — desktop, mobile, or tablet — applies to both datasets</div>
                <div className="check"><strong>URL/Page filter</strong> — Contains, Exact, Starts With, Ends With match types</div>
                <div className="check"><strong>Query filter</strong> (GSC only) — text search with regex support</div>
                <div className="check"><strong>Source/Medium</strong> (GA4 only) — Organic Search, Direct, Referral, Paid Search, Social</div>
              </div>
            </div>
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">Global Filter Bar</div></div>
                <div style={{padding:12,display:'flex',flexDirection:'column',gap:8}}>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1.5fr 1.5fr 1fr',gap:6,fontSize:8}}>
                    {[
                      {l:'Country','both':true,v:'🇺🇸 United States ▾'},
                      {l:'Device','both':true,v:'All devices ▾'},
                      {l:'URL / Page','both':true,v:'Contains ▾ /blog/post'},
                      {l:'Source/Medium',ga4:true,v:'All channels ▾'},
                      {l:'Query',gsc:true,v:'keyword...'},
                    ].map(f=>(
                      <div key={f.l}>
                        <div style={{color:'var(--dm2)',marginBottom:3}}>{f.l} {f.both&&<><span style={{fontSize:7,padding:'1px 3px',borderRadius:2,background:'rgba(66,133,244,.1)',color:'#4285F4'}}>GSC</span> <span style={{fontSize:7,padding:'1px 3px',borderRadius:2,background:'rgba(249,171,0,.1)',color:'#F9AB00'}}>GA4</span></>}{f.ga4&&<span style={{fontSize:7,padding:'1px 3px',borderRadius:2,background:'rgba(249,171,0,.1)',color:'#F9AB00'}}>GA4</span>}{f.gsc&&<span style={{fontSize:7,padding:'1px 3px',borderRadius:2,background:'rgba(66,133,244,.1)',color:'#4285F4'}}>GSC</span>}</div>
                        <div style={{background:'var(--d3)',border:'1px solid rgba(255,255,255,.06)',borderRadius:4,padding:'5px 8px',color:'var(--dm)'}}>{f.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>
            {d?.ctaHeadline ? d.ctaHeadline.split('|').map((l: string, i: number) => (
              <span key={i}>{i > 0 && <br/>}{l}</span>
            )) : <>See your Search Console data<br/>like never before.</>}
          </h2>
          <p>{d?.ctaSubtext || 'Connect your Google account in 30 seconds. Every GSC feature is live and production-ready.'}</p>
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

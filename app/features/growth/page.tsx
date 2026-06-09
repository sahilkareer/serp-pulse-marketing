import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'features-growth' }).catch(() => null)
  return {
    title: d?.seoTitle || 'Growth Monitoring — SERP-Pulse',
    description: d?.seoDesc || 'Monitor all your SEO projects at a glance. See which sites are growing, declining, or stable.',
  }
}

const APP = 'https://app.serp-pulse.com'

export default async function GrowthPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'features-growth' }).catch(() => null)
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>Growth Monitoring</span>
          </div>
          <div style={{marginBottom:16,display:'flex',justifyContent:'center'}}>
            <div style={{width:52,height:52,background:'rgba(16,185,129,.1)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg width="26" height="26" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>
              </svg>
            </div>
          </div>
          <h1>
            {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
              <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
            )) : <>100 projects.<br/><span className="ac">One glance.</span></>}
          </h1>
          <p className="hero-sub">{d?.heroSubtext || 'See which of your SEO projects are growing, declining, stable, or mixed — across your entire portfolio. Switch KPIs in one click. No spreadsheets, no tab-switching.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">See Your Portfolio Health <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="#how-it-works" className="btn-g">How it works</a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:32}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>The Problem</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,30px)',fontWeight:800,letterSpacing:-1,maxWidth:640,margin:'0 auto'}}>Managing 10+ client projects means opening 10+ Search Console tabs.</h2>
            <p style={{fontSize:15,color:'var(--mt)',maxWidth:560,margin:'12px auto 0',textAlign:'center'}}>Every week you check each property, note if traffic is up or down, and update your client spreadsheet. It takes hours. Growth Monitoring collapses this into a single view where every project&apos;s health is visible instantly.</p>
          </div>
        </div>
      </section>

      {/* SMART MODE */}
      <section className="feat-sec" id="how-it-works">
        <div className="w">
          <div className="feat-grid">
            <div className="feat-content">
              <div className="sl">Smart Mode</div>
              <h2>One health score.<br/>Every metric considered.</h2>
              <p>Smart Mode calculates a combined health score using Clicks, Impressions, CTR, and Position together. Instead of checking four numbers per project, you get one status.</p>
              <div className="checks">
                <div className="check"><strong style={{color:'#10b981'}}>Growing</strong> — clicks and impressions trending up over the selected period</div>
                <div className="check"><strong style={{color:'var(--tl3)'}}>Stable</strong> — consistent performance, no major movement either way</div>
                <div className="check"><strong style={{color:'#f59e0b'}}>Mixed</strong> — some metrics improving, others declining</div>
                <div className="check"><strong style={{color:'#ef4444'}}>Declining</strong> — sustained drop across one or more key metrics</div>
              </div>
              <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55,marginTop:8}}>Switch to a single-metric view — Clicks, Impressions, CTR, or Position — when you need to track one KPI across all projects simultaneously.</p>
            </div>
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head">
                  <div className="t">Project Health</div>
                  <span style={{fontSize:8,color:'var(--tl3)',background:'rgba(6,214,199,.08)',padding:'2px 7px',borderRadius:3}}>✓ Smart (Combined) ▾</span>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,padding:'12px 14px 8px'}}>
                  {([['📈','47','Growing','#10b981'],['→','33','Stable','var(--tl3)'],['↕','8','Mixed','#f59e0b'],['📉','12','Declining','#ef4444']] as [string,string,string,string][]).map(([icon,n,l,c])=>(
                    <div key={l} style={{textAlign:'center',background:'var(--d3)',borderRadius:6,padding:'8px 4px'}}>
                      <div style={{fontSize:13}}>{icon}</div>
                      <div style={{fontFamily:'var(--hd)',fontSize:18,fontWeight:800,color:c,lineHeight:1.1}}>{n}</div>
                      <div style={{fontSize:9,color:'var(--dm2)',marginTop:2}}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{padding:'0 14px 12px'}}>
                  <div className="pf-tbl">
                    <div className="pf-tr head" style={{gridTemplateColumns:'.3fr 2fr 1fr .8fr 1fr'}}>
                      <div className="pf-td">#</div><div className="pf-td">Project</div><div className="pf-td">Clicks</div><div className="pf-td">Trend</div><div className="pf-td">Status</div>
                    </div>
                    {([
                      ['1','acme-corp.com','284K','gn','#10b981','● Growing'],
                      ['2','travel-blog.io','341K','tl','var(--tl3)','→ Stable'],
                      ['3','startup.co','48K','am','#f59e0b','↕ Mixed'],
                      ['4','ecomm-store.com','192K','rd','#ef4444','📉 Declining'],
                    ] as [string,string,string,string,string,string][]).map(([n,p,c,bc,tc,status],i)=>(
                      <div key={n} className="pf-tr" style={{gridTemplateColumns:'.3fr 2fr 1fr .8fr 1fr',borderBottom:i===3?'none':undefined}}>
                        <div className="pf-td">{n}</div>
                        <div className="pf-td" style={{color:'var(--dt)',fontWeight:500,fontSize:10}}>{p}</div>
                        <div className="pf-td">{c}</div>
                        <div className="pf-td">
                          <svg width="34" height="12" viewBox="0 0 34 12">
                            <path d={bc==='gn'?'M2 9 L10 7 L18 5 L26 4 L32 2':bc==='tl'?'M2 7 L10 6 L18 7 L26 6 L32 7':bc==='am'?'M2 5 L10 8 L18 4 L26 7 L32 5':'M2 3 L10 5 L18 7 L26 8 L32 10'} fill="none" stroke={tc} strokeWidth="1.5"/>
                          </svg>
                        </div>
                        <div className="pf-td"><span style={{fontSize:9,fontWeight:600,color:tc}}>{status}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPARKLINES + CSV */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div className="feat-grid rev">
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">Portfolio Export</div><div className="p">All projects · All metrics</div></div>
                <div style={{padding:'10px 14px'}}>
                  {([
                    {name:'acme-corp.com',clicks:'284K',impr:'2.9M',ctr:'9.8%',d:'gn',path:'M2 9 L10 7 L18 5 L24 4 L30 2'},
                    {name:'travel-blog.io',clicks:'341K',impr:'5.4M',ctr:'6.3%',d:'tl',path:'M2 7 L10 6 L18 7 L24 6 L30 7'},
                    {name:'startup-saas.co',clicks:'48K',impr:'1.2M',ctr:'4.0%',d:'am',path:'M2 5 L10 8 L18 4 L24 7 L30 5'},
                    {name:'ecomm-store.com',clicks:'192K',impr:'8.1M',ctr:'2.4%',d:'rd',path:'M2 3 L10 5 L18 7 L24 8 L30 10'},
                  ] as {name:string,clicks:string,impr:string,ctr:string,d:string,path:string}[]).map(r=>(
                    <div key={r.name} style={{display:'grid',gridTemplateColumns:'2fr .8fr .8fr .6fr 38px',gap:6,alignItems:'center',padding:'7px 0',borderBottom:'1px solid var(--bd)'}}>
                      <div style={{fontSize:10,fontWeight:600,color:'var(--dt)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{r.name}</div>
                      <div style={{fontSize:10,color:'var(--dm)'}}>{r.clicks}</div>
                      <div style={{fontSize:10,color:'var(--dm)'}}>{r.impr}</div>
                      <div style={{fontSize:10,color:r.d==='gn'?'#10b981':r.d==='tl'?'var(--tl3)':r.d==='am'?'#f59e0b':'#ef4444'}}>{r.ctr}</div>
                      <svg width="38" height="14" viewBox="0 0 38 14">
                        <path d={r.path} fill="none" stroke={r.d==='gn'?'#10b981':r.d==='tl'?'var(--tl3)':r.d==='am'?'#f59e0b':'#ef4444'} strokeWidth="1.5"/>
                      </svg>
                    </div>
                  ))}
                  <div style={{marginTop:10,display:'flex',gap:6}}>
                    <div style={{fontSize:9,fontWeight:600,padding:'5px 10px',borderRadius:5,background:'var(--gns)',color:'var(--gn)'}}>↓ Export All as CSV</div>
                    <div style={{fontSize:9,fontWeight:600,padding:'5px 10px',borderRadius:5,background:'var(--ts)',color:'var(--tl)'}}>📊 Generate Report</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feat-content">
              <div className="sl">Export & Reporting</div>
              <h2>One click to export<br/>your entire portfolio.</h2>
              <p>Every project row shows a mini sparkline trend for the selected period — understand momentum without clicking into every project. When you need the raw numbers, export everything to CSV in one click.</p>
              <div className="checks">
                <div className="check">Per-project sparkline trend charts — 7, 28, 90 day views</div>
                <div className="check">CSV export — all projects, all metrics in one file</div>
                <div className="check">Comparison mode — current vs previous period per project</div>
                <div className="check">Sort by any column to find best and worst performers instantly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI MODES */}
      <section className="feat-sec">
        <div className="w" style={{textAlign:'center'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>KPI Switching</div>
          <h2 className="sh">Five ways to view<br/>your portfolio.</h2>
          <p className="ss" style={{margin:'12px auto 0',textAlign:'center'}}>Switch between Smart Mode, Clicks, Impressions, CTR, or Position in one click. Every project re-classifies and re-sorts instantly — no page reload.</p>
          <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap',marginTop:28}}>
            {([
              {label:'Smart (Combined)',color:'var(--tl3)',desc:'Weighted health score across all metrics'},
              {label:'Clicks',color:'#10b981',desc:'Total clicks in the selected period'},
              {label:'Impressions',color:'var(--tl)',desc:'Total search impressions'},
              {label:'Avg CTR',color:'#f59e0b',desc:'Click-through rate across all queries'},
              {label:'Avg Position',color:'#8b5cf6',desc:'Average ranking position'},
            ] as {label:string,color:string,desc:string}[]).map(k=>(
              <div key={k.label} style={{padding:'12px 16px',border:'1.5px solid var(--bd)',borderRadius:10,background:'var(--wh)',minWidth:148,textAlign:'left'}}>
                <div style={{fontSize:12,fontWeight:700,color:k.color,marginBottom:3}}>{k.label}</div>
                <div style={{fontSize:11,color:'var(--mt)'}}>{k.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="feat-sec" style={{background:'var(--d)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>Use Cases</div>
            <h2 className="sh" style={{color:'var(--dt)'}}>Built for anyone managing<br/>more than one project.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20}}>
            {[
              {icon:'🏢',title:'SEO Agencies',desc:'Monitor all client projects in one view. Catch declining sites before your client does. Export portfolio status for weekly reporting.',link:'/use-cases/agencies'},
              {icon:'🧑‍💻',title:'Freelance Consultants',desc:'Stay on top of every client retainer without switching tabs. Focus your time on the projects that need it most.',link:'/use-cases/freelancers'},
              {icon:'📦',title:'In-House SEO Teams',desc:'Track multiple brand properties, product lines, or regional domains from a single dashboard — no separate logins.',link:'/use-cases/in-house'},
            ].map(u=>(
              <div key={u.title} style={{background:'var(--d2)',borderRadius:12,padding:24,border:'1px solid var(--db)'}}>
                <div style={{fontSize:28,marginBottom:10}}>{u.icon}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:16,fontWeight:700,color:'var(--dt)',marginBottom:6}}>{u.title}</h3>
                <p style={{fontSize:13,color:'var(--dm)',lineHeight:1.6,marginBottom:10}}>{u.desc}</p>
                <a href={u.link} style={{fontSize:12,color:'var(--tl3)',fontWeight:600,textDecoration:'none'}}>Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>
            {d?.ctaHeadline ? d.ctaHeadline.split('|').map((l: string, i: number) => (
              <span key={i}>{i > 0 && <br/>}{l}</span>
            )) : <>Your whole portfolio.<br/>One dashboard.</>}
          </h2>
          <p>{d?.ctaSubtext || 'Connect in 30 seconds. Every project visible from day one.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g">View live app →</a>
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

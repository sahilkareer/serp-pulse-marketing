import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'use-cases-agencies' }).catch(() => null)
  return {
    title: d?.seoTitle || 'SERP-Pulse for Agencies — Manage 100+ SEO Projects',
    description: d?.seoDesc || 'SERP-Pulse is built for agencies. Unlimited projects, white-label reports, and AI traffic tracking.',
    alternates: { canonical: 'https://www.serp-pulse.com/use-cases/agencies' },
    openGraph: {
      title: d?.seoTitle || 'SERP-Pulse for Agencies — Manage 100+ SEO Projects',
      description: d?.seoDesc || 'SERP-Pulse is built for agencies. Unlimited projects, white-label reports, and AI traffic tracking.',
      url: 'https://www.serp-pulse.com/use-cases/agencies',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'SERP-Pulse for Agencies' }],
    },
    twitter: {
      title: d?.seoTitle || 'SERP-Pulse for Agencies — Manage 100+ SEO Projects',
      description: d?.seoDesc || 'SERP-Pulse is built for agencies. Unlimited projects, white-label reports, and AI traffic tracking.',
      images: ['/og-default.png'],
    },
  }
}

const APP = 'https://app.serp-pulse.com'

export default async function AgenciesPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'use-cases-agencies' }).catch(() => null)
  const s = (n: number): any => d?.sections?.[n] || {}
  return (
    <>
      <SiteNav />

      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><span style={{color:'var(--tl3)'}}>For Agencies</span>
          </div>
          <div style={{marginBottom:14,display:'inline-flex',alignItems:'center',gap:6,fontSize:12,fontWeight:600,color:'var(--tl3)',background:'rgba(6,214,199,.08)',border:'1px solid rgba(6,214,199,.15)',padding:'5px 12px',borderRadius:20}}>
            🏢 Built for agencies
          </div>
          <h1>
            {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
              <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
            )) : <>Run your entire<br/>SEO operation from<br/><span className="ac">one place.</span></>}
          </h1>
          <p className="hero-sub">{d?.heroSubtext || 'Unlimited client projects. White-label reports. AI traffic tracking across every property. The dashboard that grows with your agency.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start 30-Day Free Trial <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/pricing" className="btn-g">View Agency pricing</a>
          </div>
          <p style={{fontSize:12,color:'var(--dm2)',marginTop:12}}>Agency plan · Unlimited projects · No credit card to start</p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>{s(0).label || 'The Agency Problem'}</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,30px)',fontWeight:800,letterSpacing:-1,maxWidth:640,margin:'0 auto'}}>{s(0).heading || 'Running a client SEO operation means juggling too many tools, logins, and spreadsheets.'}</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16,maxWidth:860,margin:'0 auto'}}>
            {[
              {icon:'🔄',pain:'Switching between 30 separate Search Console properties every Monday morning'},
              {icon:'📊',pain:'Manually copying data into spreadsheets to track project health across your portfolio'},
              {icon:'🤖',pain:'Clients asking why AI tools are sending traffic that shows up as "direct" in analytics'},
              {icon:'📄',pain:'Spending hours formatting client reports when you could be doing actual SEO work'},
            ].map(p=>(
              <div key={p.icon} style={{padding:20,border:'1.5px solid var(--bd)',borderRadius:12,background:'var(--bg)'}}>
                <div style={{fontSize:24,marginBottom:8}}>{p.icon}</div>
                <p style={{fontSize:13,color:'var(--mt2)',lineHeight:1.6,margin:0}}>{p.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES FOR AGENCIES */}
      <section className="feat-sec">
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>{s(1).label || 'Agency Features'}</div>
            <h2 className="sh">{s(1).heading ? s(1).heading.split('|').map((l:string,i:number)=><span key={i}>{i>0&&<br/>}{l}</span>) : <>Everything your agency needs.<br/>Nothing it doesn&apos;t.</>}</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:48}}>

            {/* Unlimited projects */}
            <div className="feat-grid">
              <div className="feat-content">
                <div className="sl">{s(2).label || 'Portfolio Management'}</div>
                <h2>{s(2).heading ? s(2).heading.split('|').map((l:string,i:number)=><span key={i}>{i>0&&<br/>}{l}</span>) : <>All your clients.<br/>One dashboard.</>}</h2>
                <p>{s(2).body || 'The Agency plan gives you unlimited GSC projects and unlimited reports. Add every client property, organise them by client, and get a birds-eye view of your entire portfolio health in seconds.'}</p>
                <div className="checks">
                  <div className="check">Unlimited GSC + GA4 project connections</div>
                  <div className="check">Growth monitoring — see which clients are growing or declining at a glance</div>
                  <div className="check">Smart health score per project — no more manual status checks</div>
                  <div className="check">One Google OAuth connects all properties simultaneously</div>
                </div>
                <a href="/features/growth" style={{marginTop:8,display:'inline-flex',alignItems:'center',gap:4,fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>Portfolio monitoring details →</a>
              </div>
              <div className="rv">
                <div className="dmock">
                  <div className="dmock-head"><div className="t">Project Health</div><span style={{fontSize:8,color:'var(--tl3)',background:'rgba(6,214,199,.08)',padding:'2px 7px',borderRadius:3}}>✓ Smart</span></div>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,padding:'10px 14px 8px'}}>
                    {[['📈','47','Growing','#10b981'],['→','33','Stable','var(--tl3)'],['↕','8','Mixed','#f59e0b'],['📉','12','Declining','#ef4444']].map(([icon,n,l,c])=>(
                      <div key={l} style={{textAlign:'center',background:'var(--d3)',borderRadius:6,padding:'6px 4px'}}>
                        <div style={{fontSize:12}}>{icon}</div>
                        <div style={{fontFamily:'var(--hd)',fontSize:16,fontWeight:800,color:c}}>{n}</div>
                        <div style={{fontSize:8,color:'var(--dm2)'}}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{padding:'0 14px 12px',fontSize:10,color:'var(--dm)'}}>100 projects · All connected · Updated live</div>
                </div>
              </div>
            </div>

            {/* White-label reports */}
            <div className="feat-grid rev">
              <div className="rv">
                <div className="lmock">
                  <div className="lmock-head"><div className="lmock-logo">Your Agency Name</div><div className="lmock-meta">Client Name · June 2026</div></div>
                  <div style={{padding:14,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                    {[
                      {img:'https://www.google.com/s2/favicons?domain=search.google.com&sz=32',r:2,t:'GSC Report'},
                      {img:'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',r:0,t:'GA4 Report',hi:true},
                      {img:'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64',r:4,t:'AI Traffic'},
                      {emoji:'📊',t:'Full Site Report'},
                    ].map((item: any,i)=>(
                      <div key={i} style={{border:item.hi?'2px solid var(--tl)':'1.5px solid var(--bd)',borderRadius:'var(--r)',padding:12,textAlign:'center'}}>
                        <div style={{marginBottom:4}}>{item.emoji?<span style={{fontSize:20}}>{item.emoji}</span>:<img src={item.img} width="22" height="22" style={{borderRadius:item.r}} alt=""/>}</div>
                        <div style={{fontSize:11,fontWeight:700,color:'var(--ink)'}}>{item.t}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{margin:'0 14px 14px',display:'flex',gap:6,flexWrap:'wrap'}}>
                    <span style={{fontSize:9,fontWeight:600,color:'var(--gn)',background:'var(--gns)',padding:'3px 8px',borderRadius:4}}>✓ Your logo</span>
                    <span style={{fontSize:9,fontWeight:600,color:'var(--tl)',background:'var(--ts)',padding:'3px 8px',borderRadius:4}}>✓ Public link</span>
                    <span style={{fontSize:9,fontWeight:600,color:'var(--am)',background:'var(--ams)',padding:'3px 8px',borderRadius:4}}>✓ 60 seconds</span>
                  </div>
                </div>
              </div>
              <div className="feat-content">
                <div className="sl">{s(3).label || 'White-Label Reports'}</div>
                <h2>{s(3).heading ? s(3).heading.split('|').map((l:string,i:number)=><span key={i}>{i>0&&<br/>}{l}</span>) : <>Branded reports your<br/>clients will love.</>}</h2>
                <p>{s(3).body || "Generate professional PDF reports with your agency's logo and branding in under 60 seconds. Share via a public link — clients can view their report without logging into SERP-Pulse."}</p>
                <div className="checks">
                  <div className="check">Add your logo, brand colors, and custom messaging</div>
                  <div className="check">4 report types: GSC, GA4, AI Traffic, Combined</div>
                  <div className="check">Shareable public link — no client login required</div>
                  <div className="check">Unlimited reports on the Agency plan</div>
                </div>
                <a href="/features/reports" style={{marginTop:8,display:'inline-flex',alignItems:'center',gap:4,fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>Reports feature details →</a>
              </div>
            </div>

            {/* AI traffic */}
            <div className="feat-grid">
              <div className="feat-content">
                <div className="sl">{s(4).label || 'AI Citations'}</div>
                <h2>{s(4).heading ? s(4).heading.split('|').map((l:string,i:number)=><span key={i}>{i>0&&<br/>}{l}</span>) : <>Show clients the traffic<br/>no other tool can see.</>}</h2>
                <p>{s(4).body || "As your clients' content gets cited by ChatGPT, Claude, and Perplexity, SERP-Pulse tracks every referral visit. This is an insight your competitors can't provide — and a compelling reason for clients to stay."}</p>
                <div className="checks">
                  <div className="check">16+ AI platforms tracked live — ChatGPT, Claude, Perplexity, Gemini, Grok</div>
                  <div className="check">Per-platform sessions, engagement, and growth trends</div>
                  <div className="check">Per-page attribution — see which content gets cited most</div>
                  <div className="check">Included in white-label AI Traffic reports</div>
                </div>
                <a href="/features/ai-traffic" style={{marginTop:8,display:'inline-flex',alignItems:'center',gap:4,fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>AI Citations feature →</a>
              </div>
              <div className="rv">
                <div className="dmock">
                  <div className="dmock-head"><div className="t">AI Citations — Client Site</div><div className="p">Last 28 days</div></div>
                  <div className="ai-bars">
                    {[['chatgpt.com','ChatGPT','ai-f1','78%','4,218','▲ 24%'],['perplexity.ai','Perplexity','ai-f2','54%','1,847','▲ 67%'],['claude.ai','Claude','ai-f3','28%','926','▲ 41%']].map(([d,n,cls,w,v,p])=>(
                      <div key={n} className="ai-row">
                        <div className="ai-nm"><img src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt=""/>{n}</div>
                        <div className="ai-track"><div className={`ai-fill ${cls}`} style={{width:w}}>{v}</div></div>
                        <div className="ai-val">{v}</div><div className="ai-pct">{p}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{padding:'64px 0',background:'var(--bg)',borderTop:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>{s(5).label || 'Pricing'}</div>
          <h2 className="sh">{s(5).heading || 'One plan for every agency.'}</h2>
          <p className="ss" style={{textAlign:'center',margin:'10px auto 32px'}}>{s(5).body || 'Unlimited projects, unlimited reports, white-label branding. Starting at $159/month — a fraction of what agencies pay for tools with fewer features.'}</p>
          <div style={{display:'inline-flex',flexDirection:'column',gap:0,border:'1.5px solid var(--bd)',borderRadius:14,overflow:'hidden',maxWidth:360,width:'100%',background:'var(--wh)'}}>
            <div style={{padding:28,borderBottom:'1px solid var(--bd)'}}>
              <div style={{fontSize:12,fontWeight:700,color:'var(--mt)',letterSpacing:1,textTransform:'uppercase',marginBottom:8}}>Agency Plan</div>
              <div style={{fontFamily:'var(--hd)',fontSize:38,fontWeight:800,letterSpacing:-2}}><sup style={{fontSize:20,verticalAlign:'super'}}>$</sup>159<span style={{fontSize:14,fontWeight:500,color:'var(--mt)'}}>/mo</span></div>
              <div style={{fontSize:12,color:'var(--mt)',marginTop:4}}>or $150/mo billed annually</div>
            </div>
            <div style={{padding:24}}>
              {['Unlimited GSC + GA4 projects','Unlimited white-label reports','AI citation tracking across all properties','Growth monitoring dashboard','MCP server access','White-label branding (logo + colors)','Team access & collaboration','API access','Beta features early access','Priority support'].map(f=>(
                <div key={f} style={{display:'flex',alignItems:'center',gap:8,padding:'5px 0',fontSize:13,color:'var(--ink3)'}}>
                  <span style={{color:'var(--gn)',fontWeight:700,flexShrink:0}}>✓</span>{f}
                </div>
              ))}
              <a href={`${APP}/signup`} style={{display:'block',marginTop:20,padding:'13px',background:'var(--ink)',color:'white',borderRadius:10,fontSize:14,fontWeight:600,textDecoration:'none',textAlign:'center'}}>Start 30-Day Free Trial →</a>
              <p style={{fontSize:11,color:'var(--mt)',textAlign:'center',marginTop:8}}>No credit card required</p>
            </div>
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
            )) : <>Built for agencies<br/>that take SEO seriously.</>}
          </h2>
          <p>{d?.ctaSubtext || 'Unlimited projects. White-label reports. AI traffic tracking. One dashboard.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/pricing" className="btn-g">Compare all plans →</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'use-cases-in-house' }).catch(() => null)
  return {
    title: d?.seoTitle || 'SERP-Pulse for In-House SEO Teams',
    description: d?.seoDesc || 'SERP-Pulse helps in-house SEO teams track multiple brand properties, monitor AI traffic, and report to stakeholders.',
    alternates: { canonical: 'https://www.serp-pulse.com/use-cases/in-house' },
    openGraph: {
      title: d?.seoTitle || 'SERP-Pulse for In-House SEO Teams',
      description: d?.seoDesc || 'SERP-Pulse helps in-house SEO teams track multiple brand properties, monitor AI traffic, and report to stakeholders.',
      url: 'https://www.serp-pulse.com/use-cases/in-house',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'SERP-Pulse for In-House SEO' }],
    },
    twitter: {
      title: d?.seoTitle || 'SERP-Pulse for In-House SEO Teams',
      description: d?.seoDesc || 'SERP-Pulse helps in-house SEO teams track multiple brand properties, monitor AI traffic, and report to stakeholders.',
      images: ['/og-default.png'],
    },
  }
}

const APP = 'https://app.serp-pulse.com'

export default async function InHousePage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'use-cases-in-house' }).catch(() => null)
  const s = (n: number): any => d?.sections?.[n] || {}
  return (
    <>
      <SiteNav />

      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><span style={{color:'var(--tl3)'}}>For In-House Teams</span>
          </div>
          <div style={{marginBottom:14,display:'inline-flex',alignItems:'center',gap:6,fontSize:12,fontWeight:600,color:'var(--tl3)',background:'rgba(6,214,199,.08)',border:'1px solid rgba(6,214,199,.15)',padding:'5px 12px',borderRadius:20}}>
            📦 Built for in-house teams
          </div>
          <h1>
            {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
              <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
            )) : <>All your brand properties.<br/>One unified view.<br/><span className="ac">Zero switching.</span></>}
          </h1>
          <p className="hero-sub">{d?.heroSubtext || "Managing SEO across multiple product lines, regions, or microsites shouldn't mean logging into ten different Search Console accounts. SERP-Pulse unifies everything — and adds the AI traffic intelligence your leadership is starting to ask about."}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/pricing" className="btn-g">View pricing</a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>For In-House SEO</div>
            <h2 className="sh">The analytics platform<br/>your whole team can use.</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:48}}>

            <div className="feat-grid">
              <div className="feat-content">
                <div className="sl">Multi-Property Management</div>
                <h2>Multiple domains.<br/>One login.</h2>
                <p>Whether you manage a global brand with 10 regional domains, or a product company with separate microsites for each product line — all your GSC and GA4 properties connect to one SERP-Pulse account.</p>
                <div className="checks">
                  <div className="check">Connect all domains under one Google account or multiple accounts</div>
                  <div className="check">Portfolio dashboard shows every property&apos;s health at a glance</div>
                  <div className="check">Switch between properties without logging out</div>
                  <div className="check">CSV export across all properties for stakeholder reporting</div>
                </div>
              </div>
              <div className="rv">
                <div className="dmock">
                  <div className="dmock-head"><div className="t">Brand Properties</div><div className="p">Last 28 days</div></div>
                  <div style={{padding:'10px 14px',display:'flex',flexDirection:'column',gap:8}}>
                    {[
                      {name:'brandname.com',clicks:'284K',status:'● Growing',sc:'#10b981'},
                      {name:'brandname.co.uk',clicks:'98K',status:'→ Stable',sc:'var(--tl3)'},
                      {name:'brandname.de',clicks:'62K',status:'↕ Mixed',sc:'#f59e0b'},
                      {name:'shop.brandname.com',clicks:'192K',status:'● Growing',sc:'#10b981'},
                      {name:'blog.brandname.com',clicks:'341K',status:'● Growing',sc:'#10b981'},
                    ].map(r=>(
                      <div key={r.name} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'6px 0',borderBottom:'1px solid var(--bd)'}}>
                        <div style={{fontSize:11,fontWeight:500,color:'var(--dt)'}}>{r.name}</div>
                        <div style={{display:'flex',gap:10,alignItems:'center'}}>
                          <span style={{fontSize:10,color:'var(--dm)'}}>{r.clicks}</span>
                          <span style={{fontSize:9,fontWeight:600,color:r.sc}}>{r.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="feat-grid rev">
              <div className="rv">
                <div className="dmock">
                  <div className="dmock-head"><div className="t">AI Citations — All Properties</div><div className="p">Last 28 days</div></div>
                  <div className="ai-bars">
                    {[['chatgpt.com','ChatGPT','ai-f1','78%','12,847','▲ 34%'],['perplexity.ai','Perplexity','ai-f2','52%','7,421','▲ 58%'],['claude.ai','Claude','ai-f3','26%','3,104','▲ 45%']].map(([d,n,cls,w,v,p])=>(
                      <div key={n} className="ai-row">
                        <div className="ai-nm"><img src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt=""/>{n}</div>
                        <div className="ai-track"><div className={`ai-fill ${cls}`} style={{width:w}}>{v}</div></div>
                        <div className="ai-val">{v}</div><div className="ai-pct">{p}</div>
                      </div>
                    ))}
                  </div>
                  <div className="ai-total"><div className="ai-tl">Total AI Sessions (All Properties)</div><div style={{display:'flex',alignItems:'center',gap:8}}><span className="ai-tv">23,372</span><span className="ai-td">▲ 41.3%</span></div></div>
                </div>
              </div>
              <div className="feat-content">
                <div className="sl">AI Traffic Intelligence</div>
                <h2>The question your<br/>CMO is about to ask.</h2>
                <p>&ldquo;How much of our traffic is coming from AI tools?&rdquo; It&apos;s the question every marketing leadership team is starting to ask. SERP-Pulse gives you the answer — by platform, by page, across all your properties.</p>
                <div className="checks">
                  <div className="check">AI traffic data across all brand properties in one view</div>
                  <div className="check">Which product pages are getting cited by ChatGPT vs Perplexity</div>
                  <div className="check">Month-over-month AI traffic growth trends</div>
                  <div className="check">Include AI traffic data in reports to leadership</div>
                </div>
              </div>
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
            )) : <>The SEO platform<br/>your whole team will actually use.</>}
          </h2>
          <p>{d?.ctaSubtext || 'Unified. Fast. No training required. 2-minute setup.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/pricing" className="btn-g">Compare plans →</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

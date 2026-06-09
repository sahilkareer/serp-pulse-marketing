import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'integrations' }).catch(() => null)
  return {
    title: d?.seoTitle || 'Integrations — SERP-Pulse',
    description: d?.seoDesc || 'SERP-Pulse integrates with Google Search Console and Google Analytics 4 via official APIs.',
  }
}

const APP = 'https://app.serp-pulse.com'

export default async function IntegrationsPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'integrations' }).catch(() => null)
  const s = (n: number): any => d?.sections?.[n] || {}
  return (
    <>
      <SiteNav />

      <section className="page-hero dark-sec"><div className="w">
        <div className="breadcrumb"><a href="/">Home</a><span>→</span><span style={{color:'var(--tl3)'}}>Integrations</span></div>
        <h1>
          {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
            <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
          )) : <>Connects to<br/><span className="ac">your ecosystem.</span></>}
        </h1>
        <p className="hero-sub">{d?.heroSubtext || 'SERP-Pulse integrates directly with Google Search Console and Google Analytics 4 via official APIs. More integrations shipping regularly.'}</p>
        <a href={d?.heroPrimaryUrl || `${APP}/signup`} className="btn-h">{d?.heroPrimaryText || 'Start Free Trial'} <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div></section>

      {/* Live integrations */}
      <section className="feat-sec" style={{background:'var(--wh)'}}><div className="w">
        <div style={{textAlign:'center',marginBottom:40}}>
          <h2 style={{fontFamily:'var(--hd)',fontSize:28,fontWeight:800,letterSpacing:-1}}>{s(0).heading || 'Live Integrations'}</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,maxWidth:720,margin:'0 auto'}} className="how-grid">
          {[
            {img:'https://www.google.com/s2/favicons?domain=search.google.com&sz=32',r:10,t:'Google Search Console',d:'Queries, pages, countries, devices, coverage, URL inspect, robots.txt — full GSC integration via the official Search Console API.',href:'/features/search-console'},
            {img:'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',r:0,t:'Google Analytics 4',d:'Sessions, users, engagement, events, traffic sources, geography, landing pages — full GA4 Data API integration.',href:'/features/analytics'},
          ].map(item=>(
            <div key={item.t} className="rv" style={{background:'var(--bg)',border:'2px solid rgba(8,145,178,.15)',borderRadius:'var(--rl)',padding:32,textAlign:'center'}}>
              <div style={{marginBottom:12}}><img src={item.img} width="48" height="48" style={{borderRadius:item.r}} alt=""/></div>
              <h3 style={{fontFamily:'var(--hd)',fontSize:18,fontWeight:700,marginBottom:6}}>{item.t}</h3>
              <p style={{fontSize:14,color:'var(--mt)',lineHeight:1.55,marginBottom:14}}>{item.d}</p>
              <div style={{marginBottom:14,display:'inline-flex',alignItems:'center',gap:4,fontSize:11,fontWeight:600,color:'#10b981',background:'rgba(16,185,129,.08)',padding:'4px 10px',borderRadius:5}}>
                <span style={{width:5,height:5,background:'#10b981',borderRadius:'50%',display:'inline-block'}}/>Live &amp; Connected
              </div>
              <br/>
              <a href={item.href} style={{fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>View full feature →</a>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div style={{textAlign:'center',marginTop:56,marginBottom:20}}>
          <h2 style={{fontFamily:'var(--hd)',fontSize:22,fontWeight:700,letterSpacing:-.5,marginBottom:8,color:'var(--mt)'}}>{s(1).heading || 'Coming Soon'}</h2>
          <p style={{fontSize:14,color:'var(--mt2)'}}>{s(1).body || 'More integrations are on the roadmap.'}</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,maxWidth:600,margin:'0 auto'}} className="how-grid">
          {[
            {icons:['chatgpt.com','claude.ai','gemini.google.com'],t:'AI Citations',d:'Citation monitoring across 16+ platforms'},
            {emoji:'📊',t:'Keyword Tracking',d:'Daily position monitoring'},
            {emoji:'🔔',t:'Alerts',d:'Custom notification rules'},
          ].map(item=>(
            <div key={item.t} className="rv" style={{background:'var(--bg)',border:'1px solid var(--bd)',borderRadius:'var(--r)',padding:20,textAlign:'center',opacity:.6}}>
              <div style={{display:'flex',gap:3,justifyContent:'center',marginBottom:8}}>
                {item.emoji
                  ? <span style={{fontSize:20}}>{item.emoji}</span>
                  : item.icons?.map(d=><img key={d} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} width="14" height="14" style={{borderRadius:2}} alt=""/>)
                }
              </div>
              <div style={{fontFamily:'var(--hd)',fontSize:12,fontWeight:700,marginBottom:3}}>{item.t}</div>
              <div style={{fontSize:10,color:'var(--mt2)'}}>{item.d}</div>
              <div style={{marginTop:6,fontSize:9,fontWeight:700,color:'var(--am)',background:'var(--ams)',padding:'2px 6px',borderRadius:3,display:'inline-block'}}>COMING SOON</div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>
            {d?.ctaHeadline ? d.ctaHeadline.split('|').map((l: string, i: number) => (
              <span key={i}>{i > 0 && <br/>}{l}</span>
            )) : <>Ready to connect<br/>your ecosystem?</>}
          </h2>
          <p>{d?.ctaSubtext || 'One Google login connects both GSC and GA4 in seconds.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g">View live app →</a>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:20,flexWrap:'wrap',marginTop:18}}>
            <span className="fck">30-day free trial</span><span className="fck">No credit card</span><span className="fck">2-min setup</span><span className="fck">Cancel anytime</span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

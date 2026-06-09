import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'features-reports' }).catch(() => null)
  return {
    title: d?.seoTitle || 'White-Label Reports — SERP-Pulse',
    description: d?.seoDesc || 'Generate branded PDF reports for clients in under 60 seconds.',
  }
}

const APP = 'https://app.serp-pulse.com'

export default async function ReportsPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'features-reports' }).catch(() => null)
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>Reports</span>
          </div>
          <h1>
            {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
              <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
            )) : <>White-Label Reports.<br/><span className="ac">4 types. One click.</span></>}
          </h1>
          <p className="hero-sub">{d?.heroSubtext || 'Generate branded PDF reports for your clients in under 60 seconds. GSC, GA4, AI Traffic, and Combined — each with your logo, your colors, and a shareable public link.'}</p>
          <a href={`${APP}/signup`} className="btn-h">Start Free Trial <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </section>

      {/* 4 REPORT TYPES */}
      <section className="feat-sec">
        <div className="w">
          <div className="feat-grid">
            <div className="feat-content">
              <div className="sl">4 Report Types</div>
              <h2>Every report your<br/>clients need.</h2>
              <p>Choose from GSC Report (queries, pages, positions), GA4 Report (sessions, sources, engagement), AI Traffic Report (platform breakdown, citations), or Combined Report (everything in one PDF).</p>
              <div className="checks">
                <div className="check"><strong>GSC Report</strong> — queries, pages, CTR opportunities, world map</div>
                <div className="check"><strong>GA4 Report</strong> — sessions, sources, geography, events, engagement</div>
                <div className="check"><strong>AI Traffic Report</strong> — AI visibility score, platform breakdown, weekly chart</div>
                <div className="check"><strong>Combined Report</strong> — GSC + GA4 + AI in one document</div>
                <div className="check">Custom branding — your logo, your colors, your domain</div>
                <div className="check">Public shareable link — clients view without logging in</div>
              </div>
            </div>
            <div className="rv">
              <div style={{background:'var(--wh)',border:'1px solid var(--bd)',borderRadius:'var(--rl)',overflow:'hidden',boxShadow:'var(--s2)'}}>
                <div style={{background:'var(--ink)',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontFamily:'var(--hd)',fontSize:13,fontWeight:700,color:'var(--tl3)'}}>SERP-Pulse Reports</span>
                  <span style={{fontSize:10,color:'var(--dm2)'}}>Demo Agency</span>
                </div>
                <div style={{padding:14,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                  {[
                    {img:`https://www.google.com/s2/favicons?domain=search.google.com&sz=32`,r:4,t:'GSC Report',d:'Queries, pages, positions',highlight:false},
                    {img:`https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg`,r:0,t:'GA4 Report',d:'Sessions, engagement',highlight:true},
                    {img:`https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64`,r:4,t:'AI Traffic Report',d:'Platform breakdown',highlight:false},
                    {emoji:'📊',t:'Combined',d:'GSC + GA4 + AI',highlight:false},
                  ].map((item,i)=>(
                    <div key={i} style={{border:item.highlight?'2px solid var(--tl)':'1.5px solid var(--bd)',borderRadius:'var(--r)',padding:14,textAlign:'center',background:item.highlight?'rgba(8,145,178,.02)':'transparent'}}>
                      <div style={{marginBottom:5}}>
                        {item.emoji
                          ? <span style={{fontSize:20}}>{item.emoji}</span>
                          : <img src={item.img} width="22" height="22" style={{borderRadius:item.r}} alt=""/>
                        }
                      </div>
                      <div style={{fontFamily:'var(--hd)',fontSize:12,fontWeight:700,marginBottom:2}}>{item.t}</div>
                      <div style={{fontSize:9,color:'var(--mt2)'}}>{item.d}</div>
                    </div>
                  ))}
                </div>
                <div style={{margin:'0 14px 14px',padding:10,background:'var(--bg2)',borderRadius:'var(--r)',display:'flex',gap:6,flexWrap:'wrap'}}>
                  <span style={{fontSize:9,fontWeight:600,padding:'3px 8px',borderRadius:4,background:'rgba(16,185,129,.08)',color:'#10b981'}}>✓ Public link</span>
                  <span style={{fontSize:9,fontWeight:600,padding:'3px 8px',borderRadius:4,background:'var(--ts)',color:'var(--tl)'}}>✓ Branded PDF</span>
                  <span style={{fontSize:9,fontWeight:600,padding:'3px 8px',borderRadius:4,background:'rgba(245,158,11,.08)',color:'#f59e0b'}}>✓ One click</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>How It Works</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,30px)',fontWeight:800,letterSpacing:-1,maxWidth:600,margin:'0 auto'}}>From data to branded PDF in under 60 seconds.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="how-grid">
            {[
              {n:'1',t:'Select a report type',d:'Choose GSC, GA4, AI Traffic, or Combined. Select the date range and property. One click starts the generation.'},
              {n:'2',t:'Add your branding',d:'Upload your logo, choose your brand color, add your agency name. SERP-Pulse applies it throughout the entire report automatically.'},
              {n:'3',t:'Share with clients',d:'Download the branded PDF or copy the public shareable link. Clients can view it in their browser — no login required.'},
            ].map(s=>(
              <div key={s.n} className="rv" style={{background:'var(--bg)',border:'1px solid var(--bd)',borderRadius:'var(--rl)',padding:28,textAlign:'center'}}>
                <div style={{width:44,height:44,background:'linear-gradient(135deg,var(--tl),var(--tl3))',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px',fontFamily:'var(--hd)',fontSize:16,fontWeight:800,color:'white'}}>{s.n}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{s.t}</h3>
                <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR AGENCIES */}
      <section className="feat-sec">
        <div className="w">
          <div style={{textAlign:'center',marginBottom:32}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>Built for Agencies</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,30px)',fontWeight:800,letterSpacing:-1,maxWidth:600,margin:'0 auto'}}>Client reporting that used to take hours now takes minutes.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="how-grid">
            {[
              {icon:'🎨',t:'Full white-label branding',d:'Your logo, your colors, your domain name in the shareable URL. Clients see your brand — not SERP-Pulse.'},
              {icon:'🔗',t:'Public shareable links',d:'Every report gets a permanent public URL. Send it to clients via email or Slack. They view it in a browser, no account needed.'},
              {icon:'📥',t:'PDF download',d:'Download a polished, print-ready PDF for any report type. Perfect for monthly review decks or client presentations.'},
            ].map(f=>(
              <div key={f.t} className="rv" style={{background:'var(--wh)',border:'1px solid var(--bd)',borderRadius:'var(--rl)',padding:24}}>
                <div style={{fontSize:28,marginBottom:12}}>{f.icon}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{f.t}</h3>
                <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55}}>{f.d}</p>
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
            )) : <>Stop spending hours<br/>on client reports.</>}
          </h2>
          <p>{d?.ctaSubtext || 'One click. Branded PDF. Shareable link. Done.'}</p>
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

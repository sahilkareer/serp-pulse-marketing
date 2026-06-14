import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'use-cases-freelancers' }).catch(() => null)
  return {
    title: d?.seoTitle || 'SERP-Pulse for Freelancers — SEO Dashboard',
    description: d?.seoDesc || 'SERP-Pulse helps freelance SEOs manage multiple client projects, generate reports, and track AI traffic.',
    alternates: { canonical: 'https://www.serp-pulse.com/use-cases/freelancers' },
    openGraph: {
      title: d?.seoTitle || 'SERP-Pulse for Freelancers — SEO Dashboard',
      description: d?.seoDesc || 'SERP-Pulse helps freelance SEOs manage multiple client projects, generate reports, and track AI traffic.',
      url: 'https://www.serp-pulse.com/use-cases/freelancers',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'SERP-Pulse for Freelancers' }],
    },
    twitter: {
      title: d?.seoTitle || 'SERP-Pulse for Freelancers — SEO Dashboard',
      description: d?.seoDesc || 'SERP-Pulse helps freelance SEOs manage multiple client projects, generate reports, and track AI traffic.',
      images: ['/og-default.png'],
    },
  }
}

const APP = 'https://app.serp-pulse.com'

export default async function FreelancersPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'use-cases-freelancers' }).catch(() => null)
  const s = (n: number): any => d?.sections?.[n] || {}
  return (
    <>
      <SiteNav />

      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><span style={{color:'var(--tl3)'}}>For Freelancers</span>
          </div>
          <div style={{marginBottom:14,display:'inline-flex',alignItems:'center',gap:6,fontSize:12,fontWeight:600,color:'var(--tl3)',background:'rgba(6,214,199,.08)',border:'1px solid rgba(6,214,199,.15)',padding:'5px 12px',borderRadius:20}}>
            🧑‍💻 Built for freelancers
          </div>
          <h1>
            {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
              <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
            )) : <>Every client project.<br/>All in one view.<br/><span className="ac">Finally.</span></>}
          </h1>
          <p className="hero-sub">{d?.heroSubtext || 'Stop switching between 8 Search Console tabs. SERP-Pulse gives freelance SEOs a single dashboard for all their client projects — with the analytics depth of tools that cost 5× more.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="/pricing" className="btn-g">See pricing — from $20/mo</a>
          </div>
          <p style={{fontSize:12,color:'var(--dm2)',marginTop:12}}>Free tier available · Pro plan for up to 10 projects · No credit card to start</p>
        </div>
      </section>

      {/* FOR FREELANCERS */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>Why Freelancers Choose SERP-Pulse</div>
            <h2 className="sh">The depth of enterprise tools.<br/>The price of a freelancer plan.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20}}>
            {[
              {icon:'⚡',title:'2-minute setup',desc:'One Google OAuth connects Search Console and GA4 simultaneously. No API keys, no technical configuration. You\'re live in under 2 minutes.'},
              {icon:'📊',title:'All projects, one view',desc:'See which clients are growing or declining across your entire portfolio. Catch problems before your client does — and show up to every meeting prepared.'},
              {icon:'📄',title:'Professional reports',desc:'Generate branded PDF reports for clients in under 60 seconds. Shareable public link — no client login required. Spend less time reporting, more time doing SEO.'},
              {icon:'🤖',title:'AI traffic tracking',desc:'Show clients the traffic from ChatGPT, Claude, and Perplexity that no other tool shows. A genuine differentiator that justifies your retainer.'},
              {icon:'🔍',title:'Smart keyword filters',desc:'Sweet Spot and Quick Wins filters surface the best opportunities instantly. Stop scrolling through 2,000-row keyword tables.'},
              {icon:'💬',title:'MCP Server',desc:'Ask your SEO data questions in plain English via Claude or ChatGPT. "Which pages lost traffic last week?" — and get an immediate answer.'},
            ].map(f=>(
              <div key={f.title} style={{padding:22,border:'1.5px solid var(--bd)',borderRadius:12,background:'var(--bg)'}}>
                <div style={{fontSize:26,marginBottom:10}}>{f.icon}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{f.title}</h3>
                <p style={{fontSize:13,color:'var(--mt2)',lineHeight:1.6,margin:0}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING FOR FREELANCERS */}
      <section style={{padding:'64px 0',background:'var(--bg)',borderTop:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>Pricing for Freelancers</div>
          <h2 className="sh">Start free. Scale as you grow.</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20,maxWidth:680,margin:'32px auto 0'}}>
            {[
              {tier:'Freelancer',price:'$20',period:'/mo',anchor:'or $19/mo annually',features:['1 GSC project','1 Report','GSC + GA4 analytics','AI citation tracking','MCP Server','CSV exports'],cta:'Start Free Trial',pop:false},
              {tier:'Pro',price:'$49',period:'/mo',anchor:'or $46/mo annually',features:['10 GSC projects','10 Reports','Everything in Freelancer','Global filters','Alerts & notifications','Priority support'],cta:'Start Free Trial →',pop:true},
            ].map(plan=>(
              <div key={plan.tier} style={{border:plan.pop?'2px solid var(--tl)':'1.5px solid var(--bd)',borderRadius:14,padding:24,background:'var(--wh)',position:'relative'}}>
                {plan.pop&&<div style={{position:'absolute',top:-11,left:'50%',transform:'translateX(-50%)',fontSize:10,fontWeight:700,background:'var(--tl)',color:'white',padding:'3px 12px',borderRadius:10,whiteSpace:'nowrap'}}>Most Popular</div>}
                <div style={{fontSize:13,fontWeight:700,color:'var(--mt)',marginBottom:8}}>{plan.tier}</div>
                <div style={{fontFamily:'var(--hd)',fontSize:32,fontWeight:800,letterSpacing:-1}}>{plan.price}<span style={{fontSize:14,fontWeight:500,color:'var(--mt)'}}>{plan.period}</span></div>
                <div style={{fontSize:11,color:'var(--mt)',marginBottom:18}}>{plan.anchor}</div>
                {plan.features.map(f=>(
                  <div key={f} style={{display:'flex',alignItems:'center',gap:7,padding:'4px 0',fontSize:13,color:'var(--ink3)'}}>
                    <span style={{color:'var(--gn)',fontWeight:700,flexShrink:0}}>✓</span>{f}
                  </div>
                ))}
                <a href={`${APP}/signup`} style={{display:'block',marginTop:18,padding:'12px',background:plan.pop?'var(--ink)':'transparent',border:plan.pop?'none':'1.5px solid var(--bd2)',color:plan.pop?'white':'var(--ink)',borderRadius:10,fontSize:13,fontWeight:600,textDecoration:'none',textAlign:'center'}}>{plan.cta}</a>
              </div>
            ))}
          </div>
          <p style={{fontSize:12,color:'var(--mt)',marginTop:16}}>Both plans include a 30-day free trial · No credit card required</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>
            {d?.ctaHeadline ? d.ctaHeadline.split('|').map((l: string, i: number) => (
              <span key={i}>{i > 0 && <br/>}{l}</span>
            )) : <>The SEO dashboard<br/>built for how freelancers work.</>}
          </h2>
          <p>{d?.ctaSubtext || 'All your client projects. Proper analytics. Professional reports. From $20/month.'}</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

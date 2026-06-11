import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'SEO Weather — Market Volatility Tracking | SERP-Pulse',
  description: 'Track search market volatility in real time. See if ranking changes affect your site or the entire industry. Daily score, industry breakdown, spike alerts, and 12 months of history.',
}

const APP = 'https://app.serp-pulse.com'

export default function SeoWeatherPage() {
  return (
    <>
      <SiteNav />
      <section className="page-hero dark-sec"><div className="w">
        <div className="breadcrumb"><a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>SEO Weather</span></div>
        <h1>Are your rankings dropping?<br/><span className="ac">Or is everyone&apos;s?</span></h1>
        <p className="hero-sub">SEO Weather tracks volatility across all connected websites on the platform and tells you whether disruption is isolated to your site or happening market-wide.</p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a href={`${APP}/signup?ref=seo-weather`} className="btn-h">Try SEO Weather Free →</a>
          <a href="/features" className="btn-g">All features</a>
        </div>
      </div></section>

      <section className="feat-sec" style={{background:'var(--wh)'}}><div className="w" style={{maxWidth:800}}>
        <div className="sl">How it works</div>
        <h2 className="sh">Multi-signal volatility detection.</h2>
        <p style={{fontSize:15,color:'var(--mt)',lineHeight:1.7,textAlign:'center',maxWidth:640,margin:'0 auto 32px'}}>Every day, SEO Weather analyses all tracked projects using four weighted signals — position changes, impression shifts, click changes, and CTR movement. Only when multiple signals move together does the score reflect real disruption.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginBottom:48}}>
          {[
            {icon:'📊',title:'Daily Volatility Score',desc:'A score from 1–10 based on how many projects show simultaneous multi-signal disruption. 1–3 = stable, 4–5 = moderate, 6–7 = high, 8+ = major.'},
            {icon:'🏢',title:'Industry Breakdown',desc:'Tag your projects by industry and see which sectors are affected. Color-coded: green = stable, yellow = moderate, red = disrupted.'},
            {icon:'🔔',title:'Score Spike Alerts',desc:'Auto-generated alerts when volatility jumps ±3 points in one day or stays high for consecutive days. Toggle on/off per preference.'},
            {icon:'📈',title:'12-Month History',desc:'Full historical trend data stored for up to 12 months. Compare current volatility to past patterns and seasonal trends.'},
            {icon:'🏷️',title:'Branded vs Non-Branded',desc:'See whether brand traffic or discovery traffic is being affected across the platform. Understand if disruption hits new visitors or existing demand.'},
            {icon:'🔒',title:'100% Anonymized',desc:'No individual website, client, or user data is ever exposed. All insights are derived from aggregated platform-wide patterns.'},
          ].map((f,i)=>(
            <div key={i} style={{padding:20,background:'var(--bg)',borderRadius:12,border:'1px solid var(--bd)'}}>
              <div style={{fontSize:24,marginBottom:8}}>{f.icon}</div>
              <div style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{f.title}</div>
              <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.6,margin:0}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="feat-sec" style={{background:'var(--bg)'}}><div className="w" style={{maxWidth:700}}>
        <div className="sl">Use cases</div>
        <h2 className="sh">When SEO Weather saves you time.</h2>
        <div style={{display:'flex',flexDirection:'column',gap:16,marginTop:32}}>
          {[
            {q:'My client\'s traffic dropped 20% this week. Is it just them?',a:'Check SEO Weather. If the score is 6+ and their industry shows high disruption, it\'s market-wide — not something you broke.'},
            {q:'Google just announced an algorithm update. How bad is it?',a:'SEO Weather shows the real impact across tracked sites. Not speculation — actual data from real projects.'},
            {q:'Should I wait or take action on declining rankings?',a:'If SEO Weather shows elevated volatility, wait for it to settle. If your project is declining while the market is stable, investigate immediately.'},
          ].map((item,i)=>(
            <div key={i} style={{padding:20,background:'var(--wh)',borderRadius:12,border:'1px solid var(--bd)'}}>
              <div style={{fontFamily:'var(--hd)',fontSize:14,fontWeight:700,marginBottom:6,color:'var(--ink)'}}>&ldquo;{item.q}&rdquo;</div>
              <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.6,margin:0}}>{item.a}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>Stop guessing.<br/>Start knowing.</h2>
          <p>SEO Weather is included in every SERP-Pulse plan. Start your free trial today.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup?ref=seo-weather`} className="btn-h">Start Free Trial →</a>
            <a href="/pricing" className="btn-g">See pricing</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

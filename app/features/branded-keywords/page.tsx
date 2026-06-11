import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Branded vs Non-Branded Keyword Analysis | SERP-Pulse',
  description: 'Instantly classify your search queries as branded or non-branded. Understand how much traffic comes from brand awareness vs organic discovery.',
}

const APP = 'https://app.serp-pulse.com'

export default function BrandedKeywordsPage() {
  return (
    <>
      <SiteNav />
      <section className="page-hero dark-sec"><div className="w">
        <div className="breadcrumb"><a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>Branded Keywords</span></div>
        <h1>Is your growth real?<br/><span className="ac">Or just brand demand?</span></h1>
        <p className="hero-sub">Split your search traffic into branded and non-branded queries instantly. See whether your SEO is driving new discovery traffic or just capturing people who already know your name.</p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a href={`${APP}/signup?ref=branded-keywords`} className="btn-h">Try Branded Analysis Free →</a>
          <a href="/features" className="btn-g">All features</a>
        </div>
      </div></section>

      <section className="feat-sec" style={{background:'var(--wh)'}}><div className="w" style={{maxWidth:800}}>
        <div className="sl">How it works</div>
        <h2 className="sh">Three steps. Zero manual work.</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,marginTop:32}}>
          {[
            {step:'1',title:'Define brand terms',desc:'Add your brand keywords directly in the project page. Comma-separated — e.g. "serp pulse, serppulse, serp-pulse". Managed inline, no settings hunting.'},
            {step:'2',title:'Auto-classification',desc:'Every query from Google Search Console is automatically classified as branded or non-branded based on your terms. Updated with every period change.'},
            {step:'3',title:'Instant insights',desc:'See the click share split, impression share, top branded queries, top non-branded queries — all in a collapsible section on your project page.'},
          ].map((f,i)=>(
            <div key={i} style={{padding:24,background:'var(--bg)',borderRadius:12,border:'1px solid var(--bd)',textAlign:'center'}}>
              <div style={{width:40,height:40,borderRadius:'50%',background:'var(--ts)',color:'var(--tl)',fontFamily:'var(--hd)',fontSize:18,fontWeight:800,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px'}}>{f.step}</div>
              <div style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{f.title}</div>
              <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.6,margin:0}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="feat-sec" style={{background:'var(--bg)'}}><div className="w" style={{maxWidth:800}}>
        <div className="sl">What you see</div>
        <h2 className="sh">Premium SaaS-quality keyword intelligence.</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16,marginTop:32}}>
          {[
            {icon:'📊',title:'Click Share Split',desc:'Visual ratio bar showing branded vs non-branded clicks with exact percentages.'},
            {icon:'👀',title:'Impression Share',desc:'Separate impression breakdown to understand visibility beyond just clicks.'},
            {icon:'🔍',title:'Top Non-Branded Queries',desc:'Your discovery traffic — the keywords bringing new visitors who never heard of you.'},
            {icon:'🏷️',title:'Top Branded Queries',desc:'Your brand demand — how people search for you specifically.'},
            {icon:'📐',title:'Collapsible Design',desc:'Expand when you need it, collapse when you don\'t. Stays out of your way by default.'},
            {icon:'⚡',title:'Inline Management',desc:'Add, remove, and edit brand terms directly in the project page — no settings page required.'},
          ].map((f,i)=>(
            <div key={i} style={{padding:18,background:'var(--wh)',borderRadius:10,border:'1px solid var(--bd)'}}>
              <div style={{fontSize:20,marginBottom:6}}>{f.icon}</div>
              <div style={{fontFamily:'var(--hd)',fontSize:14,fontWeight:700,marginBottom:4}}>{f.title}</div>
              <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55,margin:0}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>Know your real growth.<br/>Not just your brand.</h2>
          <p>Branded keyword analysis is included in every plan. Start your free trial.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup?ref=branded-keywords`} className="btn-h">Start Free Trial →</a>
            <a href="/pricing" className="btn-g">See pricing</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Page-Level Behavior Analysis — GA4 Deep Dive | SERP-Pulse',
  description: 'Analyse engagement, bounce rate, session duration, and every GA4 event on any specific page. Available via API and MCP natural language interface.',
}

const APP = 'https://app.serp-pulse.com'

export default function PageBehaviorPage() {
  return (
    <>
      <SiteNav />
      <section className="page-hero dark-sec"><div className="w">
        <div className="breadcrumb"><a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>Page Behavior</span></div>
        <h1>What happens on<br/><span className="ac">each page?</span></h1>
        <p className="hero-sub">Go beyond session-level data. See exactly what happens on any specific URL — engagement rate, bounce rate, time on page, and every GA4 event that fires.</p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a href={`${APP}/signup?ref=page-behavior`} className="btn-h">Try Page Analysis Free →</a>
          <a href="/features" className="btn-g">All features</a>
        </div>
      </div></section>

      <section className="feat-sec" style={{background:'var(--wh)'}}><div className="w" style={{maxWidth:800}}>
        <div className="sl">What you get</div>
        <h2 className="sh">Deep page-level intelligence from GA4.</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginTop:32}}>
          {[
            {icon:'📊',title:'Engagement Metrics',desc:'Sessions, users, pageviews, engagement rate, and average session duration for any specific page path.'},
            {icon:'📉',title:'Bounce Rate',desc:'See exactly which pages lose visitors and which pages keep them engaged. Identify drop-off points instantly.'},
            {icon:'⚡',title:'Event Breakdown',desc:'Every GA4 event that fires on the page — scroll, click, form_submit, video_start, and custom events. See what users actually do.'},
            {icon:'🤖',title:'MCP Integration',desc:'Ask in natural language: "How is /book-a-call performing?" or "What events fire on the pricing page?" — get instant answers.'},
            {icon:'🔗',title:'API Endpoint',desc:'Programmatic access via GET /api/ga4/page-behavior. Build custom dashboards or integrate with your existing tools.'},
            {icon:'🎯',title:'Conversion Insights',desc:'Understand exactly where users drop off before converting. Identify which pages need attention and which are performing well.'},
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
        <div className="sl">Examples</div>
        <h2 className="sh">Questions you can now answer.</h2>
        <div style={{display:'flex',flexDirection:'column',gap:12,marginTop:32}}>
          {[
            '"How is /book-a-call performing?" → sessions, engagement rate, bounce rate, Calendly widget clicks',
            '"What\'s the bounce rate on /pricing?" → exact percentage + event breakdown showing where users drop off',
            '"Which events fire on the homepage?" → scroll depth, CTA clicks, form submissions, video plays',
            '"Compare /blog/ engagement across all posts" → per-page engagement with sorting by session duration',
          ].map((q,i)=>(
            <div key={i} style={{padding:16,background:'var(--wh)',borderRadius:10,border:'1px solid var(--bd)',fontSize:13,color:'var(--ink3)',lineHeight:1.6}}>
              {q}
            </div>
          ))}
        </div>
      </div></section>

      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>See what your pages<br/>actually do.</h2>
          <p>Page behavior analysis is available via API and MCP. Start your free trial.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup?ref=page-behavior`} className="btn-h">Start Free Trial →</a>
            <a href="/pricing" className="btn-g">See pricing</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

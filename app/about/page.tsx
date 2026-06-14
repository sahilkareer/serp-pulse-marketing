import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'about' }).catch(() => null)
  return {
    title: d?.seoTitle || 'About — SERP-Pulse',
    description: d?.seoDesc || 'SERP-Pulse was built by Sahil Kareer after 6 years in SEO agencies. The story behind the tool.',
    alternates: { canonical: 'https://www.serp-pulse.com/about' },
    openGraph: {
      title: d?.seoTitle || 'About — SERP-Pulse',
      description: d?.seoDesc || 'SERP-Pulse was built by Sahil Kareer after 6 years in SEO agencies. The story behind the tool.',
      url: 'https://www.serp-pulse.com/about',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'About SERP-Pulse' }],
    },
    twitter: {
      title: d?.seoTitle || 'About — SERP-Pulse',
      description: d?.seoDesc || 'SERP-Pulse was built by Sahil Kareer after 6 years in SEO agencies. The story behind the tool.',
      images: ['/og-default.png'],
    },
  }
}

const APP = 'https://app.serp-pulse.com'
const FOUNDER_IMG = 'https://media.licdn.com/dms/image/v2/D5603AQEAbMsBFS381Q/profile-displayphoto-scale_400_400/B56Z6zpLLVIQAk-/0/1781130378927?e=1782950400&v=beta&t=MatIuULOKP-_E7w-LwltKHBqsR6mrKyveb4CQ02y4wc'

export default async function AboutPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'about' }).catch(() => null)
  const paragraphs: string[] = d?.sections?.[0]?.checks?.length ? d.sections[0].checks : [
    'Working across agencies, in-house teams, and as an independent consultant, I watched SEO professionals waste hours every week switching between Google Search Console, Google Analytics 4, and spreadsheets just to answer basic questions about their projects.',
    'I also noticed the growing blind spot around AI-generated traffic. As ChatGPT, Claude, Perplexity, and Gemini started sending real visitors to websites, the data existed in GA4 — but it was buried under individual referral domains with no easy way to aggregate it, visualise trends, or understand which pages were being cited.',
    "The goal isn't to replace your existing tools. It's to make your decision-making faster, easier, and genuinely more actionable.",
  ]

  // Timeline: sections[1..] mapped as { year: label, text: body }
  const DEFAULT_TIMELINE = [
    { year: '2020 — 2024', text: '6 years in SEO agencies, in-house teams, and consulting. Managed hundreds of client projects across industries. Felt the pain of scattered data and manual reporting daily.' },
    { year: 'Early 2025',   text: 'First prototype built. Connected Google Search Console via API. Basic query analysis and CSV export working.' },
    { year: 'Mid 2025',     text: 'GA4 integration added. AI traffic tracking module built — ChatGPT, Claude, Perplexity, Gemini. White-label reports shipped.' },
    { year: 'Late 2025',    text: 'SEO Weather launched — market-wide volatility tracking with multi-signal formula. Branded vs Non-Branded keyword analysis. Industry segmentation. Admin payment dashboard.' },
    { year: '2026 — Now',   text: 'MCP Server with 17 tools launched. Razorpay payment integration live. Score spike alerts. Page-level GA4 behavior analysis. 500+ active users. 40M+ queries tracked. Production-ready and monetised.' },
  ]
  const timeline = d?.sections?.length > 1
    ? d.sections.slice(1).map((s: any) => ({ year: s.label || s.heading || '', text: s.body || '' }))
    : DEFAULT_TIMELINE

  return (
    <>
      <SiteNav />

      <section className="page-hero dark-sec"><div className="w">
        <div className="breadcrumb"><a href="/">Home</a><span>→</span><span style={{color:'var(--tl3)'}}>About</span></div>
        <h1>
          {d?.heroHeadline ? d.heroHeadline.split('|').map((l: string, i: number, a: string[]) => (
            <span key={i}>{i > 0 && <br/>}{i === a.length - 1 ? <span className="ac">{l}</span> : l}</span>
          )) : <>Built by an SEO.<br/><span className="ac">For SEOs.</span></>}
        </h1>
        <p className="hero-sub">{d?.heroSubtext || 'SERP-Pulse was born from 6 years of SEO and agency experience — the frustration of scattered data, invisible AI traffic, and tools that don\'t talk to each other.'}</p>
      </div></section>

      {/* Founder section — NO inline gridTemplateColumns so CSS media queries work */}
      <section className="feat-sec" style={{background:'var(--wh)'}}><div className="w">
        <div className="about-grid rv">

          {/* Founder photo */}
          <div style={{textAlign:'center'}}>
            <div className="about-photo-wrap">
              <div className="about-photo-inner">
                <img
                  src={FOUNDER_IMG}
                  alt="Sahil Kareer — Founder, SERP-Pulse"
                  width={214} height={214}
                  style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top center',display:'block'}}
                />
              </div>
            </div>
            <div style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:4}}>Sahil Kareer</div>
            <div style={{fontSize:14,color:'var(--mt)',marginBottom:12}}>Founder &amp; Developer</div>
            <a href="https://www.linkedin.com/in/sahil-kareer-5b9a71109/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:12,fontWeight:600,color:'var(--tl)',background:'var(--ts)',padding:'6px 14px',borderRadius:20,textDecoration:'none',border:'1px solid rgba(8,145,178,.15)'}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
              Connect on LinkedIn
            </a>
            <div style={{marginTop:12,display:'inline-flex',alignItems:'center',gap:4,fontSize:11,fontWeight:600,color:'var(--tl)',background:'var(--ts)',padding:'4px 10px',borderRadius:5}}>
              6+ years SEO &amp; Agency Ops
            </div>
          </div>

          {/* Story */}
          <div>
            <h2 className="about-story-h2">{d?.sections?.[0]?.heading || 'The story behind SERP-Pulse.'}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="about-story-p" style={i === paragraphs.length - 1 ? {color:'var(--ink)',fontWeight:500,marginBottom:24} : {}}>{p}</p>
            ))}
            <div className="about-btn-group">
              <a href={`${APP}/signup`} className="btn-h about-btn">Try SERP-Pulse Free <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              <a href="/contact" className="btn-g about-btn">Get in touch →</a>
            </div>
          </div>
        </div>
      </div></section>

      {/* Timeline — uses CSS classes defined in globals.css */}
      <section className="feat-sec" style={{background:'var(--bg)'}}><div className="w">
        <div style={{textAlign:'center',marginBottom:40}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>Journey</div>
          <h2 className="about-timeline-h2">The journey so far.</h2>
        </div>
        <div className="timeline rv" style={{maxWidth:640,margin:'0 auto'}}>
          {timeline.map((item: any)=>(
            <div key={item.year} className="tl-item">
              <div className="tl-dot"/>
              <div className="tl-year">{item.year}</div>
              <div className="tl-text">{item.text}</div>
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
            )) : <>Ready to try it<br/>yourself?</>}
          </h2>
          <p>{d?.ctaSubtext || 'Every feature is live. Start your 30-day free trial today.'}</p>
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

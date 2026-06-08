import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Blog — SERP-Pulse',
  description: 'SEO guides, AI traffic insights, and data-driven strategies from the SERP-Pulse team.',
}

const APP = 'https://app.serp-pulse.com'

const UPCOMING = [
  {
    tag: 'AI Traffic',
    tagColor: '#8b5cf6',
    tagBg: 'rgba(139,92,246,.08)',
    title: 'How to Track ChatGPT, Claude & Perplexity Traffic in Google Analytics 4',
    desc: 'A complete guide to identifying AI referral traffic in GA4 — and why standard analytics tools are blind to it.',
    readTime: '8 min read',
  },
  {
    tag: 'Google Search Console',
    tagColor: 'var(--tl)',
    tagBg: 'var(--ts)',
    title: 'Sweet Spot Keywords: The Filter Most SEOs Have Never Heard Of',
    desc: 'High impressions, low CTR. These are the easiest ranking wins on your site — and you already rank for them.',
    readTime: '6 min read',
  },
  {
    tag: 'Agency SEO',
    tagColor: '#10b981',
    tagBg: 'rgba(16,185,129,.08)',
    title: 'How to Manage 50+ Client SEO Projects Without Losing Your Mind',
    desc: 'The exact workflow I use to monitor an entire client portfolio in under 30 minutes per week.',
    readTime: '10 min read',
  },
  {
    tag: 'Analytics',
    tagColor: '#f59e0b',
    tagBg: 'rgba(245,158,11,.08)',
    title: 'GSC + GA4: Why Using Both Together Changes Everything',
    desc: 'Impressions without sessions is guessing. Sessions without impressions is also guessing. Here\'s how to use both.',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <SiteNav />

      <section style={{padding:'80px 0 48px',background:'var(--bg)',borderBottom:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>Resources</div>
          <h1 className="sh">The SERP-Pulse Blog</h1>
          <p className="ss" style={{textAlign:'center',margin:'10px auto 0'}}>SEO strategies, AI traffic insights, and analytics guides — written by a practitioner, for practitioners.</p>
        </div>
      </section>

      {/* COMING SOON */}
      <section style={{padding:'64px 0',background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:40}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:12,fontWeight:600,color:'#f59e0b',background:'rgba(245,158,11,.08)',border:'1px solid rgba(245,158,11,.2)',padding:'6px 14px',borderRadius:20,marginBottom:16}}>
              ✍️ First posts coming soon
            </div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(20px,3vw,28px)',fontWeight:800,letterSpacing:-.5,maxWidth:500,margin:'0 auto 10px'}}>We&apos;re writing content that actually helps you do SEO better.</h2>
            <p style={{fontSize:14,color:'var(--mt)',maxWidth:480,margin:'0 auto'}}>No AI-generated listicles. No keyword stuffing. Just practical guides from someone who has done agency SEO for 6+ years.</p>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20,maxWidth:920,margin:'0 auto'}}>
            {UPCOMING.map(post=>(
              <div key={post.title} style={{border:'1.5px solid var(--bd)',borderRadius:12,padding:24,background:'var(--bg)',opacity:.7}}>
                <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
                  <span style={{fontSize:10,fontWeight:700,color:post.tagColor,background:post.tagBg,padding:'3px 10px',borderRadius:4}}>{post.tag}</span>
                  <span style={{fontSize:10,color:'var(--mt)'}}>{post.readTime}</span>
                </div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,letterSpacing:-.3,lineHeight:1.4,marginBottom:8}}>{post.title}</h3>
                <p style={{fontSize:13,color:'var(--mt2)',lineHeight:1.6,margin:0}}>{post.desc}</p>
                <div style={{marginTop:14,fontSize:11,fontWeight:600,color:'var(--mt)',display:'flex',alignItems:'center',gap:4}}>
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                  Coming soon
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign:'center',marginTop:48,padding:36,border:'1.5px solid var(--bd)',borderRadius:16,background:'var(--bg)',maxWidth:500,margin:'48px auto 0'}}>
            <h3 style={{fontFamily:'var(--hd)',fontSize:18,fontWeight:700,marginBottom:8}}>Get notified when we publish</h3>
            <p style={{fontSize:14,color:'var(--mt)',marginBottom:20,lineHeight:1.6}}>Be first to read our SEO and AI traffic guides. No spam — we&apos;ll only email when we publish something genuinely useful.</p>
            <a href={`${APP}/signup`} style={{display:'inline-flex',alignItems:'center',gap:6,padding:'12px 24px',background:'var(--ink)',color:'white',borderRadius:10,fontSize:14,fontWeight:600,textDecoration:'none'}}>
              Create a free account <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <p style={{fontSize:11,color:'var(--mt)',marginTop:8}}>Free account · No credit card · Get blog updates</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

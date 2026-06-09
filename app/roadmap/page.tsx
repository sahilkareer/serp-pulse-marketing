import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, ROADMAP_QUERY, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Roadmap — SERP-Pulse',
  description: 'See what we are building next for SERP-Pulse. Track upcoming features, improvements, and integrations.',
}

const APP = 'https://app.serp-pulse.com'

const DEFAULT_SHIPPED = [
  { label: 'Unified GSC + GA4 dashboard', note: 'Live' },
  { label: 'AI citation tracking — 16+ platforms', note: 'Live' },
  { label: 'White-label PDF reports (4 types)', note: 'Live' },
  { label: 'Smart keyword filters (Sweet Spot, Quick Wins)', note: 'Live' },
  { label: 'Remote MCP server with 16 tools', note: 'Live' },
  { label: 'Growth monitoring dashboard', note: 'Live' },
  { label: 'Mobile responsive design', note: 'Live' },
  { label: 'Admin panel with layout control', note: 'Live' },
  { label: 'Dark / light theme', note: 'Live' },
  { label: 'Shareable report public links', note: 'Live' },
]

const DEFAULT_UPCOMING = [
  { status: 'In Progress', title: 'GEO / AEO Tracking', desc: 'Monitor brand mentions and citations across AI platforms. See when ChatGPT, Perplexity, or Claude references your brand in responses — with context, sentiment, and trend data.' },
  { status: 'Next Up',     title: 'Alerts & Notifications', desc: 'Get notified by email when a project drops significantly in clicks, impressions, or position. Set custom thresholds per project.' },
  { status: 'Planned',    title: 'Long-lived MCP API Tokens', desc: 'Replace the current 7-day JWT tokens with permanent API tokens so your MCP server connection never expires unexpectedly.' },
  { status: 'Planned',    title: 'Blog — SERP-Pulse.com/blog', desc: 'SEO and AI traffic guides written by a practitioner. Practical content for agencies, freelancers, and in-house teams.' },
  { status: 'Exploring',  title: 'Keyword Position Tracking', desc: 'Daily rank tracking for target keywords across your projects — with history, movement alerts, and competitor comparison.' },
  { status: 'Exploring',  title: 'Chrome Extension', desc: 'Overlay GSC and GA4 data directly on any webpage you visit. Impressions, clicks, and AI traffic — right on the page.' },
]

const STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  'In Progress': { color: '#f59e0b',    bg: 'rgba(245,158,11,.08)'    },
  'Next Up':     { color: 'var(--tl)',  bg: 'var(--ts)'               },
  'Planned':     { color: '#8b5cf6',   bg: 'rgba(139,92,246,.08)'    },
  'Exploring':   { color: 'var(--mt)', bg: 'var(--bg2)'               },
}

export default async function RoadmapPage() {
  const [data, page]: any[] = await Promise.all([
    client.fetch(ROADMAP_QUERY).catch(() => null),
    client.fetch(STANDARD_PAGE_QUERY, { slug: 'roadmap' }).catch(() => null),
  ])
  const upcoming = data?.upcoming?.length ? data.upcoming : DEFAULT_UPCOMING
  const shipped  = data?.shipped?.length  ? data.shipped  : DEFAULT_SHIPPED
  return (
    <>
      <SiteNav />

      <section style={{padding:'80px 0 48px',background:'var(--bg)',borderBottom:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>{page?.heroLabel || 'Product'}</div>
          <h1 className="sh">{page?.heroHeadline || 'What we\'re building.'}</h1>
          <p className="ss" style={{textAlign:'center',margin:'10px auto 0'}}>{page?.heroSubtext || 'Here\'s what\'s shipped, what\'s coming next, and what we\'re exploring. Updated as we build.'}</p>
        </div>
      </section>

      {/* UPCOMING */}
      <section style={{padding:'64px 0',background:'var(--wh)'}}>
        <div className="w" style={{maxWidth:760}}>
          <div className="sl">Coming Next</div>
          <h2 className="sh" style={{marginBottom:32}}>On the roadmap.</h2>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {upcoming.map((item: any, i: number)=>{
              const s = STATUS_STYLE[item.status] || STATUS_STYLE['Exploring']
              return (
              <div key={i} style={{border:'1.5px solid var(--bd)',borderRadius:12,padding:22,background:'var(--bg)'}}>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
                  <div style={{flex:1}}>
                    <h3 style={{fontFamily:'var(--hd)',fontSize:16,fontWeight:700,letterSpacing:-.3,marginBottom:6}}>{item.title}</h3>
                    <p style={{fontSize:14,color:'var(--mt2)',lineHeight:1.65,margin:0}}>{item.desc}</p>
                  </div>
                  <span style={{fontSize:11,fontWeight:700,color:s.color,background:s.bg,padding:'4px 12px',borderRadius:6,whiteSpace:'nowrap' as const,flexShrink:0}}>{item.status}</span>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SHIPPED */}
      <section style={{padding:'64px 0',background:'var(--bg)',borderTop:'1px solid var(--bd)'}}>
        <div className="w" style={{maxWidth:760}}>
          <div className="sl">Already Shipped</div>
          <h2 className="sh" style={{marginBottom:32}}>Live in production.</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:10}}>
            {shipped.map((item: any, i: number)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',background:'var(--wh)',borderRadius:8,border:'1px solid var(--bd)'}}>
                <span style={{color:'var(--gn)',fontWeight:700,fontSize:14,flexShrink:0}}>✓</span>
                <span style={{fontSize:13,color:'var(--ink3)'}}>{item.label}</span>
                <span style={{marginLeft:'auto',fontSize:10,fontWeight:600,color:'var(--gn)',background:'var(--gns)',padding:'2px 8px',borderRadius:4,flexShrink:0}}>{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section style={{padding:'64px 0',background:'var(--wh)',borderTop:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center',maxWidth:520}}>
          <h2 className="sh">Have a feature request?</h2>
          <p style={{fontSize:15,color:'var(--mt)',lineHeight:1.7,margin:'10px 0 24px'}}>SERP-Pulse is built on real feedback from SEO professionals. If you have a feature idea or want to vote on what we build next, reach out.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="mailto:sahilkareer46@gmail.com" style={{display:'inline-flex',alignItems:'center',gap:6,padding:'12px 22px',background:'var(--ink)',color:'white',borderRadius:10,fontSize:14,fontWeight:600,textDecoration:'none'}}>
              Send feedback
            </a>
            <a href={`${APP}/signup`} style={{display:'inline-flex',alignItems:'center',gap:6,padding:'12px 22px',border:'1.5px solid var(--bd2)',color:'var(--ink)',borderRadius:10,fontSize:14,fontWeight:600,textDecoration:'none'}}>
              Try it free
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

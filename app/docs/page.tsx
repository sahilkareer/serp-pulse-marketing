import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Documentation — SERP-Pulse',
  description: 'SERP-Pulse documentation. Getting started guides, feature references, MCP server setup, and API documentation.',
}

const APP = 'https://app.serp-pulse.com'

const SECTIONS = [
  {
    icon: '🚀',
    title: 'Getting Started',
    desc: 'Connect your Google account, add your first project, and get your dashboard running in under 2 minutes.',
    items: ['Creating your account', 'Connecting Google Search Console', 'Connecting Google Analytics 4', 'Adding your first project', 'Understanding the dashboard'],
  },
  {
    icon: '📊',
    title: 'Dashboard & Analytics',
    desc: 'Understanding GSC metrics, GA4 widgets, date ranges, comparison modes, and keyword filters.',
    items: ['GSC metrics explained', 'GA4 dashboard widgets', 'Date ranges & comparison modes', 'Sweet Spot & Quick Wins filters', 'AI traffic tracking'],
  },
  {
    icon: '📄',
    title: 'Reports',
    desc: 'Creating, customising, and sharing white-label PDF reports with your clients.',
    items: ['Creating your first report', 'Adding your logo & brand colors', 'Sharing via public link', 'Report types: GSC, GA4, AI, Combined', 'Scheduled reports (coming soon)'],
  },
  {
    icon: '🔌',
    title: 'MCP Server',
    desc: 'Connecting SERP-Pulse to Claude, ChatGPT, or any MCP-compatible AI assistant.',
    items: ['What is the MCP server?', 'Connecting to Claude Desktop', 'Connecting to Claude Web', 'Available tools (16 total)', 'Authentication & API tokens'],
  },
  {
    icon: '⚙️',
    title: 'Account & Settings',
    desc: 'Managing your account, subscription, team members, and notification preferences.',
    items: ['Managing your subscription', 'Upgrading or downgrading', 'Team access (Agency plan)', 'Exporting your data', 'Deleting your account'],
  },
]

export default function DocsPage() {
  return (
    <>
      <SiteNav />

      <section style={{padding:'80px 0 48px',background:'var(--bg)',borderBottom:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex'}}>Documentation</div>
          <h1 className="sh">SERP-Pulse Docs</h1>
          <p className="ss" style={{textAlign:'center',margin:'10px auto 0'}}>Everything you need to get the most out of SERP-Pulse — from first setup to advanced MCP usage.</p>
        </div>
      </section>

      {/* QUICK START */}
      <section style={{padding:'48px 0',background:'var(--wh)',borderBottom:'1px solid var(--bd)'}}>
        <div className="w" style={{maxWidth:760}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:12,fontWeight:600,color:'#f59e0b',background:'rgba(245,158,11,.08)',border:'1px solid rgba(245,158,11,.2)',padding:'6px 14px',borderRadius:20,marginBottom:20}}>
            ⚡ Full documentation coming soon
          </div>
          <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(20px,3vw,26px)',fontWeight:800,letterSpacing:-.5,marginBottom:10}}>We&apos;re writing detailed documentation for every feature.</h2>
          <p style={{fontSize:15,color:'var(--mt)',lineHeight:1.7,marginBottom:24}}>In the meantime, SERP-Pulse is designed to be self-explanatory — most users are up and running in under 2 minutes with no guidance needed. If you get stuck, email us and we&apos;ll help you directly.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} style={{display:'inline-flex',alignItems:'center',gap:6,padding:'12px 22px',background:'var(--ink)',color:'white',borderRadius:10,fontSize:14,fontWeight:600,textDecoration:'none'}}>
              Start using SERP-Pulse <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="mailto:sahilkareer46@gmail.com" style={{display:'inline-flex',alignItems:'center',gap:6,padding:'12px 22px',border:'1.5px solid var(--bd2)',color:'var(--ink)',borderRadius:10,fontSize:14,fontWeight:600,textDecoration:'none'}}>
              Email support
            </a>
          </div>
        </div>
      </section>

      {/* SECTIONS PREVIEW */}
      <section style={{padding:'64px 0',background:'var(--bg)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <h2 className="sh">What will be covered.</h2>
            <p style={{fontSize:14,color:'var(--mt)',maxWidth:480,margin:'8px auto 0',textAlign:'center'}}>Here&apos;s a preview of what the full documentation will include.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
            {SECTIONS.map(sec=>(
              <div key={sec.title} style={{border:'1.5px solid var(--bd)',borderRadius:12,padding:24,background:'var(--wh)'}}>
                <div style={{fontSize:26,marginBottom:10}}>{sec.icon}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{sec.title}</h3>
                <p style={{fontSize:13,color:'var(--mt2)',lineHeight:1.6,marginBottom:14}}>{sec.desc}</p>
                <ul style={{paddingLeft:0,listStyle:'none',display:'flex',flexDirection:'column',gap:5}}>
                  {sec.items.map(item=>(
                    <li key={item} style={{fontSize:12,color:'var(--mt)',display:'flex',alignItems:'center',gap:6}}>
                      <span style={{color:'var(--bd2)'}}>–</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2-MIN SETUP */}
      <section style={{padding:'64px 0',background:'var(--wh)',borderTop:'1px solid var(--bd)'}}>
        <div className="w" style={{textAlign:'center',maxWidth:560}}>
          <h2 className="sh">Already using it?</h2>
          <p style={{fontSize:15,color:'var(--mt)',lineHeight:1.7,margin:'10px 0 24px'}}>SERP-Pulse is built to be self-explanatory. If you have a specific question or need help with something, reach out directly — we respond to every message.</p>
          <a href="mailto:sahilkareer46@gmail.com" style={{display:'inline-flex',alignItems:'center',gap:6,padding:'12px 24px',background:'var(--ink)',color:'white',borderRadius:10,fontSize:14,fontWeight:600,textDecoration:'none'}}>
            Get help via email
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

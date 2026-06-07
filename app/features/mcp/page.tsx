'use client'
import { useState } from 'react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function McpPage() {
  const [activeDemo, setActiveDemo] = useState(0)
  const APP = 'https://app.serp-pulse.com'

  const demos = [
    {
      user: 'Show me which keywords gained the most impressions this month',
      tool: 'GET_GSC_QUERIES · property: acme-corp.com',
      response: 'Here are your top gaining keywords this month:',
      data: [['seo dashboard tool', '+342%', '1,240 impr'], ['ga4 analytics api', '+218%', '890 impr'], ['ai traffic tracking', '+156%', '654 impr']],
      note: 'Your project gained 12 new keywords in the top 10 this period.',
    },
    {
      user: 'How much AI traffic did I get from ChatGPT vs Perplexity last 28 days?',
      tool: 'GET_AI_TRAFFIC · property: acme-corp.com',
      response: 'AI referral breakdown for the last 28 days:',
      data: [['ChatGPT', '4,218 sessions', '▲ 24%'], ['Perplexity', '1,847 sessions', '▲ 67%'], ['Claude', '926 sessions', '▲ 41%']],
      note: 'Total AI referral sessions: 7,755 — up 34.2% from the previous period.',
    },
    {
      user: 'Which pages lost the most traffic in the last 7 days?',
      tool: 'GET_GSC_PAGES · property: acme-corp.com · range: 7d',
      response: 'Pages with the largest click decline in the last 7 days:',
      data: [['/blog/old-guide', '-42 clicks', '-38%'], ['/tools/free-check', '-28 clicks', '-22%'], ['/compare/tools', '-17 clicks', '-15%']],
      note: 'Consider refreshing these pages — they may have dropped in rankings.',
    },
  ]

  const tools = [
    { group: 'Search Console', color: 'rgba(66,133,244,.06)', icon: 'https://www.google.com/s2/favicons?domain=search.google.com&sz=32', items: [
      { name: 'get_gsc_queries', desc: 'Top queries with impressions, clicks, CTR, position. Supports all date ranges and filters.' },
      { name: 'get_gsc_pages', desc: 'Top ranking pages with full performance metrics and period comparisons.' },
      { name: 'get_gsc_countries', desc: 'Traffic by country — 131+ countries with flag data and engagement metrics.' },
      { name: 'get_gsc_devices', desc: 'Desktop vs mobile vs tablet split for any property and date range.' },
      { name: 'get_coverage', desc: 'Index coverage: indexed, not indexed, errors. Parses all sitemaps recursively.' },
      { name: 'inspect_url', desc: 'Live URL inspection via GSC API. Real-time Google index status for any URL.' },
    ]},
    { group: 'GA4 Analytics', color: 'rgba(249,171,0,.06)', icon: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg', items: [
      { name: 'get_ga4_sessions', desc: 'Sessions, users, engagement rate, duration, events with comparison deltas.' },
      { name: 'get_ga4_sources', desc: 'Traffic by channel group — Organic, Direct, Referral, Social, Email, Paid.' },
      { name: 'get_ga4_events', desc: 'Event counts with conversion badges — page_view, scroll, click, custom events.' },
      { name: 'get_ga4_geography', desc: 'Sessions by country from GA4. 200+ countries supported.' },
      { name: 'get_ga4_landing_pages', desc: 'Top entry pages with sessions, users, bounce rate, avg session duration.' },
    ]},
    { group: 'AI Traffic', color: 'rgba(16,163,127,.06)', icon: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64', items: [
      { name: 'get_ai_traffic', desc: 'AI referral breakdown by platform — ChatGPT, Claude, Perplexity, Gemini, Grok +11 more. Tracks sessions, growth, and per-page attribution.' },
    ]},
    { group: 'Projects & Reports', color: 'rgba(8,145,178,.06)', icon: null, items: [
      { name: 'get_projects', desc: 'List all your GSC and GA4 properties with their connection status.' },
      { name: 'get_growth_data', desc: 'Growth monitoring data — growing, stable, declining across your portfolio.' },
      { name: 'generate_report', desc: 'Programmatically generate a GSC, GA4, AI Traffic, or Combined report.' },
      { name: 'get_annotations', desc: 'Retrieve annotations and notes you have added to your projects.' },
    ]},
  ]

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="page-hero dark-sec" style={{paddingBottom:80}}>
        <div className="w">
          <div className="breadcrumb"><a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>MCP Server</span></div>
          <div style={{marginBottom:16,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:52,height:52,borderRadius:12,background:'rgba(139,92,246,.15)',border:'1px solid rgba(139,92,246,.25)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg width="26" height="26" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
          </div>
          <h1>Talk to your<br/><span className="ac">SEO data.</span></h1>
          <p className="hero-sub">SERP-Pulse includes a remote MCP server with <strong>16 tools</strong>. Connect it to Claude Desktop, Claude Web, or any MCP-compatible AI assistant and query your live GSC, GA4, and AI traffic data in plain English.</p>
          <div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',marginBottom:24}}>
            {['Claude Desktop','Claude Web','Cursor','Any MCP Client'].map(c=>(
              <span key={c} style={{fontSize:12,fontWeight:600,padding:'5px 14px',borderRadius:20,background:'rgba(139,92,246,.1)',border:'1px solid rgba(139,92,246,.2)',color:'#c4b5fd'}}>{c}</span>
            ))}
          </div>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Connect MCP Server <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="#tools" className="btn-g">See all 16 tools</a>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section className="feat-sec" style={{background:'var(--d)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:40}}>
            <div className="sl" style={{justifyContent:'center',display:'flex',color:'var(--tl3)'}}>Live Examples</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(24px,4vw,36px)',fontWeight:800,letterSpacing:-1.5,color:'var(--dt)',marginBottom:8}}>Ask anything. Get real data.</h2>
            <p style={{fontSize:15,color:'var(--dm)',maxWidth:500,margin:'0 auto'}}>These are not mock responses — MCP tools query your live GSC and GA4 data in real time.</p>
          </div>
          <div style={{display:'flex',gap:8,justifyContent:'center',marginBottom:24,flexWrap:'wrap'}}>
            {demos.map((d,i)=>(
              <button key={i} onClick={()=>setActiveDemo(i)} style={{fontSize:12,fontWeight:600,padding:'7px 16px',borderRadius:20,cursor:'pointer',border:'1.5px solid',borderColor:activeDemo===i?'rgba(6,214,199,.4)':'rgba(255,255,255,.1)',background:activeDemo===i?'rgba(6,214,199,.08)':'transparent',color:activeDemo===i?'var(--tl3)':'var(--dm)'}}>
                Example {i+1}
              </button>
            ))}
          </div>
          <div style={{maxWidth:700,margin:'0 auto',background:'var(--d2)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'var(--rl)',overflow:'hidden',boxShadow:'var(--s3)'}}>
            <div style={{padding:'12px 16px',background:'var(--d3)',borderBottom:'1px solid rgba(255,255,255,.05)',display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'#10b981',boxShadow:'0 0 6px rgba(16,185,129,.5)'}}/>
              <span style={{fontSize:11,fontWeight:600,color:'var(--dm)'}}>SERP-Pulse MCP</span>
              <span style={{fontSize:10,color:'var(--dm2)',marginLeft:'auto'}}>16 tools connected</span>
            </div>
            <div style={{padding:20,display:'flex',flexDirection:'column',gap:14}}>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                <div style={{background:'var(--d3)',border:'1px solid rgba(255,255,255,.06)',borderRadius:'12px 12px 2px 12px',padding:'10px 14px',maxWidth:'80%',fontSize:13,color:'var(--dt)',lineHeight:1.5}}>
                  {demos[activeDemo].user}
                </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{background:'rgba(139,92,246,.07)',border:'1px solid rgba(139,92,246,.15)',borderRadius:'12px 12px 12px 2px',padding:'12px 14px',maxWidth:'90%'}}>
                  <div style={{fontSize:9,color:'#a78bfa',fontWeight:700,textTransform:'uppercase',letterSpacing:.6,marginBottom:8}}>🔧 {demos[activeDemo].tool}</div>
                  <div style={{fontSize:12,color:'var(--dm)',marginBottom:8}}>{demos[activeDemo].response}</div>
                  {demos[activeDemo].data.map(([k,v,d],i)=>(
                    <div key={i} style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:4,marginBottom:4,fontSize:11}}>
                      <div style={{color:'var(--dt)',fontWeight:500}}>{k}</div>
                      <div style={{color:'#10b981',fontWeight:600}}>{v}</div>
                      <div style={{color:'var(--dm2)'}}>{d}</div>
                    </div>
                  ))}
                  <div style={{fontSize:11,color:'var(--dm)',paddingTop:10,borderTop:'1px solid rgba(255,255,255,.05)',marginTop:6}}>{demos[activeDemo].note}</div>
                </div>
              </div>
            </div>
            <div style={{background:'var(--d3)',padding:'10px 16px',borderTop:'1px solid rgba(255,255,255,.05)',display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:11,color:'var(--dm2)'}}>
              <span>Ask about your SEO data...</span>
              <svg width="14" height="14" fill="none" stroke="var(--tl3)" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* 16 TOOLS */}
      <section className="feat-sec" style={{background:'var(--wh)'}} id="tools">
        <div className="w">
          <div style={{textAlign:'center',marginBottom:48}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>16 MCP Tools</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(24px,4vw,36px)',fontWeight:800,letterSpacing:-1.5,marginBottom:8}}>Every data source. Every metric.</h2>
            <p style={{fontSize:15,color:'var(--mt)',maxWidth:500,margin:'0 auto'}}>Each tool is purpose-built to answer a specific category of SEO question with live data from your properties.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:36}}>
            {tools.map(group=>(
              <div key={group.group}>
                <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16,paddingBottom:10,borderBottom:'1px solid var(--bd)'}}>
                  {group.icon && <img src={group.icon} width="16" height="16" style={{borderRadius:3}} alt=""/>}
                  {!group.icon && <svg width="14" height="14" fill="none" stroke="var(--tl)" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>}
                  <h3 style={{fontFamily:'var(--hd)',fontSize:14,fontWeight:700,color:'var(--ink)'}}>{group.group}</h3>
                  <span style={{fontSize:11,color:'var(--mt2)',background:'var(--bg2)',padding:'2px 8px',borderRadius:10}}>{group.items.length} tool{group.items.length>1?'s':''}</span>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}} className="how-grid">
                  {group.items.map(tool=>(
                    <div key={tool.name} className="rv" style={{background:group.color,border:'1px solid var(--bd)',borderRadius:'var(--r)',padding:'16px 18px'}}>
                      <div style={{marginBottom:6}}>
                        <code style={{fontFamily:'monospace',fontSize:11,fontWeight:700,color:'var(--ink)',background:'rgba(0,0,0,.05)',padding:'2px 7px',borderRadius:4}}>{tool.name}</code>
                      </div>
                      <p style={{fontSize:12,color:'var(--mt)',lineHeight:1.55,margin:0}}>{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CONNECT */}
      <section className="feat-sec" style={{background:'var(--bg)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:40}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>Setup</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,32px)',fontWeight:800,letterSpacing:-1,marginBottom:8}}>Connected in under 2 minutes.</h2>
            <p style={{fontSize:15,color:'var(--mt)',maxWidth:480,margin:'0 auto'}}>No technical setup. Copy your MCP URL from the dashboard and paste it into your AI client.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,maxWidth:860,margin:'0 auto 40px'}} className="how-grid">
            {[
              {n:'1',t:'Get your MCP URL',d:'Log in to SERP-Pulse. Go to Settings → MCP Server. Copy your personal URL with your bearer token embedded.',time:'⚡ 10 seconds'},
              {n:'2',t:'Add to your AI client',d:'In Claude Desktop, add the server URL to your config. In Claude Web, paste into the MCP tools panel. Any MCP-compatible client works.',time:'⚡ 1 minute'},
              {n:'3',t:'Ask anything',d:'"Show me my declining pages." "How much ChatGPT traffic did I get?" Real live data, instantly returned.',time:'⚡ Instant'},
            ].map(s=>(
              <div key={s.n} className="rv" style={{background:'var(--wh)',border:'1px solid var(--bd)',borderRadius:'var(--rl)',padding:28,textAlign:'center'}}>
                <div style={{width:44,height:44,background:'linear-gradient(135deg,#8b5cf6,#a78bfa)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px',fontFamily:'var(--hd)',fontSize:16,fontWeight:800,color:'white'}}>{s.n}</div>
                <h3 style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,marginBottom:6}}>{s.t}</h3>
                <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55,marginBottom:10}}>{s.d}</p>
                <span style={{fontSize:10,fontWeight:600,color:'var(--gn)',background:'var(--gns)',padding:'2px 8px',borderRadius:4}}>{s.time}</span>
              </div>
            ))}
          </div>
          {/* Config snippet */}
          <div style={{maxWidth:580,margin:'0 auto',background:'var(--d)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'var(--rl)',overflow:'hidden'}}>
            <div style={{padding:'10px 16px',background:'var(--d2)',borderBottom:'1px solid rgba(255,255,255,.05)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span style={{fontSize:11,fontWeight:600,color:'var(--dm)'}}>claude_desktop_config.json</span>
              <span style={{fontSize:10,color:'var(--tl3)',fontWeight:600,cursor:'pointer'}}>Copy</span>
            </div>
            <pre style={{padding:'16px 20px',fontSize:12,color:'var(--dm)',lineHeight:1.7,margin:0,overflowX:'auto'}}>{`{
  "mcpServers": {
    "serp-pulse": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://api.serp-pulse.com/mcp?token=YOUR_TOKEN"
      ]
    }
  }
}`}</pre>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN ASK */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>What You Can Ask</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,32px)',fontWeight:800,letterSpacing:-1}}>Real questions. Real answers.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,maxWidth:800,margin:'0 auto'}} className="how-grid">
            {[
              ['Show me my top 10 growing keywords this month','Keyword Analysis'],
              ['Which pages lost traffic in the last 7 days?','Traffic Detection'],
              ['How much AI referral traffic did I get from ChatGPT?','AI Traffic'],
              ['Generate a summary report for my client','Report Generation'],
              ['Which countries send me the most organic traffic?','Geographic Analysis'],
              ['What are my top converting landing pages?','Conversion Insights'],
              ['Show me keywords I rank between position 4–10','Quick Wins'],
              ['What is my engagement rate trend over 3 months?','Engagement Tracking'],
            ].map(([q,t])=>(
              <div key={q} className="rv" style={{display:'flex',alignItems:'flex-start',gap:12,background:'var(--bg)',border:'1px solid var(--bd)',borderRadius:10,padding:'14px 16px'}}>
                <svg width="16" height="16" fill="none" stroke="var(--tl)" strokeWidth="2.5" viewBox="0 0 24 24" style={{flexShrink:0,marginTop:1}}><path d="M20 6L9 17l-5-5"/></svg>
                <div>
                  <div style={{fontSize:13,color:'var(--ink)',fontWeight:500,lineHeight:1.4,marginBottom:4}}>&ldquo;{q}&rdquo;</div>
                  <span style={{fontSize:10,fontWeight:600,color:'var(--tl)',background:'var(--ts)',padding:'2px 8px',borderRadius:3}}>{t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(139,92,246,.08),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>Your SEO data,<br/>on demand.</h2>
          <p>Connect the MCP server in 2 minutes. Ask your first question in seconds.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g">View live app →</a>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:20,flexWrap:'wrap',marginTop:16}}>
            <span className="fck">30-day free trial</span><span className="fck">No credit card</span><span className="fck">16 tools included</span><span className="fck">All plans</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

'use client'
import { useState } from 'react'

const demos = [
  { user:'Show me which keywords gained the most impressions this month', tool:'GET_GSC_QUERIES · property: acme-corp.com', response:'Here are your top gaining keywords this month:', data:[['seo dashboard tool','+342%','1,240 impr'],['ga4 analytics api','+218%','890 impr'],['ai traffic tracking','+156%','654 impr']], note:'Your project gained 12 new keywords in the top 10 this period.' },
  { user:'How much AI traffic did I get from ChatGPT vs Perplexity last 28 days?', tool:'GET_AI_TRAFFIC · property: acme-corp.com', response:'AI referral breakdown for the last 28 days:', data:[['ChatGPT','4,218 sessions','▲ 24%'],['Perplexity','1,847 sessions','▲ 67%'],['Claude','926 sessions','▲ 41%']], note:'Total AI referral sessions: 7,755 — up 34.2% from the previous period.' },
  { user:'Which pages lost the most traffic in the last 7 days?', tool:'GET_GSC_PAGES · property: acme-corp.com · range: 7d', response:'Pages with the largest click decline in the last 7 days:', data:[['/blog/old-guide','-42 clicks','-38%'],['/tools/free-check','-28 clicks','-22%'],['/compare/tools','-17 clicks','-15%']], note:'Consider refreshing these pages — they may have dropped in rankings.' },
]

export default function McpDemoCarousel() {
  const [active, setActive] = useState(0)
  const d = demos[active]
  return (
    <section className="feat-sec" style={{background:'var(--d)'}}>
      <div className="w">
        <div style={{textAlign:'center',marginBottom:40}}>
          <div className="sl" style={{justifyContent:'center',display:'flex',color:'var(--tl3)'}}>Live Examples</div>
          <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(24px,4vw,36px)',fontWeight:800,letterSpacing:-1.5,color:'var(--dt)',marginBottom:8}}>Ask anything. Get real data.</h2>
          <p style={{fontSize:15,color:'var(--dm)',maxWidth:500,margin:'0 auto'}}>These are not mock responses — MCP tools query your live GSC and GA4 data in real time.</p>
        </div>
        <div style={{display:'flex',gap:8,justifyContent:'center',marginBottom:24,flexWrap:'wrap'}}>
          {demos.map((_,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{fontSize:12,fontWeight:600,padding:'7px 16px',borderRadius:20,cursor:'pointer',border:'1.5px solid',borderColor:active===i?'rgba(6,214,199,.4)':'rgba(255,255,255,.1)',background:active===i?'rgba(6,214,199,.08)':'transparent',color:active===i?'var(--tl3)':'var(--dm)'}}>Example {i+1}</button>
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
              <div style={{background:'var(--d3)',border:'1px solid rgba(255,255,255,.06)',borderRadius:'12px 12px 2px 12px',padding:'10px 14px',maxWidth:'80%',fontSize:13,color:'var(--dt)',lineHeight:1.5}}>{d.user}</div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
              <div style={{background:'rgba(139,92,246,.07)',border:'1px solid rgba(139,92,246,.15)',borderRadius:'12px 12px 12px 2px',padding:'12px 14px',maxWidth:'90%'}}>
                <div style={{fontSize:9,color:'#a78bfa',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:.6,marginBottom:8}}>🔧 {d.tool}</div>
                <div style={{fontSize:12,color:'var(--dm)',marginBottom:8}}>{d.response}</div>
                {d.data.map(([k,v,p],i)=>(
                  <div key={i} style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:4,marginBottom:4,fontSize:11}}>
                    <div style={{color:'var(--dt)',fontWeight:500}}>{k}</div>
                    <div style={{color:'#10b981',fontWeight:600}}>{v}</div>
                    <div style={{color:'var(--dm2)'}}>{p}</div>
                  </div>
                ))}
                <div style={{fontSize:11,color:'var(--dm)',paddingTop:10,borderTop:'1px solid rgba(255,255,255,.05)',marginTop:6}}>{d.note}</div>
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
  )
}

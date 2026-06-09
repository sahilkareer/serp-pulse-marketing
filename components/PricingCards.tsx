'use client'
import { useState } from 'react'

const APP = 'https://app.serp-pulse.com'

type Plan = {
  tier: string; monthly: number; annual: number; desc: string
  cta: string; ctaStyle: 'outline' | 'filled'; popular?: boolean
  features: string[]; missing: string[]
}
type CompRow = { feature: string; freelancer: boolean | string; pro: boolean | string; agency: boolean | string }

export default function PricingCards({ plans, comparison, annualDiscount }: {
  plans: Plan[]
  comparison: CompRow[]
  annualDiscount: string
}) {
  const [annual, setAnnual] = useState(true)

  const Cell = ({ val }: { val: boolean | string }) => {
    if (val === true)  return <div style={{display:'flex',justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg></div>
    if (val === false) return <div style={{display:'flex',justifyContent:'center',color:'var(--mt3)'}}>—</div>
    return <div style={{textAlign:'center',fontSize:13,fontWeight:600,color:'var(--ink)'}}>{val}</div>
  }

  return (
    <>
      {/* Toggle */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:8}}>
        <span style={{fontSize:14,color:annual?'var(--mt)':'var(--ink)',fontWeight:500}}>Monthly</span>
        <button onClick={()=>setAnnual(a=>!a)} style={{width:46,height:26,borderRadius:13,background:annual?'var(--tl)':'var(--mt3)',border:'none',cursor:'pointer',position:'relative',transition:'background .2s'}}>
          <div style={{width:20,height:20,borderRadius:'50%',background:'white',position:'absolute',top:3,left:annual?23:3,transition:'left .2s',boxShadow:'0 1px 4px rgba(0,0,0,.15)'}}/>
        </button>
        <span style={{fontSize:14,color:annual?'var(--ink)':'var(--mt)',fontWeight:500}}>Annual</span>
        <span style={{fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:20,background:'var(--gns)',color:'var(--gn)'}}>{annualDiscount}</span>
      </div>
      <p style={{textAlign:'center',fontSize:12,color:'var(--gn)',fontWeight:600,background:'var(--gns)',padding:'5px 16px',borderRadius:8,display:'inline-block',marginBottom:32}}>30-day free trial on all plans · No credit card required</p>

      {/* Cards */}
      <div style={{maxWidth:1000,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,alignItems:'start'}} className="how-grid">
        {plans.map(plan=>(
          <div key={plan.tier} className="rv" style={{background:'var(--wh)',border:plan.popular?'2px solid var(--tl)':'1.5px solid var(--bd)',borderRadius:'var(--rl)',padding:'28px 24px',position:'relative',boxShadow:plan.popular?'0 0 0 4px var(--ts),var(--s2)':'var(--s0)',transform:plan.popular?'translateY(-6px)':'none'}}>
            {plan.popular&&<div style={{position:'absolute',top:-13,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,var(--tl),var(--tl3))',color:'white',fontSize:10,fontWeight:700,padding:'4px 16px',borderRadius:20,whiteSpace:'nowrap',fontFamily:'var(--hd)'}}>Most Popular</div>}
            <div style={{fontSize:11,fontWeight:700,letterSpacing:1,textTransform:'uppercase' as const,color:'var(--mt2)',marginBottom:10}}>{plan.tier}</div>
            <div style={{fontFamily:'var(--hd)',display:'flex',alignItems:'flex-end',gap:2,marginBottom:4}}>
              <sup style={{fontSize:18,fontWeight:700,color:'var(--ink)',lineHeight:1,marginBottom:6}}>$</sup>
              <span style={{fontSize:52,fontWeight:800,letterSpacing:-3,color:'var(--ink)',lineHeight:1}}>{annual?plan.annual:plan.monthly}</span>
              <span style={{fontSize:14,color:'var(--mt2)',marginBottom:8}}>/mo</span>
            </div>
            <div style={{fontSize:11,color:'var(--mt2)',marginBottom:6}}>{annual?`Billed annually · $${plan.monthly}/mo monthly`:'Billed monthly'}</div>
            <p style={{fontSize:13,color:'var(--mt2)',marginBottom:20}}>{plan.desc}</p>
            <ul style={{listStyle:'none',padding:0,marginBottom:22,display:'flex',flexDirection:'column',gap:8}}>
              {plan.features.map(f=>(
                <li key={f} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:13,color:'var(--ink3)'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" style={{flexShrink:0,marginTop:1}}><path d="M20 6L9 17l-5-5"/></svg>{f}
                </li>
              ))}
              {plan.missing.map(f=>(
                <li key={f} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:13,color:'var(--mt3)',textDecoration:'line-through'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mt3)" strokeWidth="2" style={{flexShrink:0,marginTop:1}}><path d="M18 6L6 18M6 6l12 12"/></svg>{f}
                </li>
              ))}
            </ul>
            <a href={`${APP}/signup`} style={{display:'block',textAlign:'center',padding:'12px',borderRadius:9,fontSize:13,fontWeight:600,textDecoration:'none',transition:'all .15s',fontFamily:'var(--hd)',...(plan.ctaStyle==='filled'?{background:'var(--ink)',color:'white',border:'1.5px solid var(--ink)'}:{border:'1.5px solid var(--bd2)',color:'var(--mt)'})}}>{plan.cta}</a>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <section style={{padding:'80px 24px',background:'var(--wh)'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>Full Comparison</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,32px)',fontWeight:800,letterSpacing:-1}}>See exactly what each plan includes.</h2>
          </div>
          <div style={{overflowX:'auto',WebkitOverflowScrolling:'touch'}}>
            <table style={{width:'100%',borderCollapse:'collapse',border:'1px solid var(--bd)',borderRadius:'var(--rl)',overflow:'hidden',minWidth:600}}>
              <thead>
                <tr>
                  <th style={{background:'var(--bg2)',padding:'14px 20px',textAlign:'left',fontSize:12,fontWeight:700,color:'var(--ink3)',borderBottom:'2px solid var(--bd)',width:'40%'}}>Feature</th>
                  {['Freelancer','Pro','Agency'].map((p,i)=>(
                    <th key={p} style={{background:i===1?'var(--tl)':'var(--bg2)',padding:'14px 16px',textAlign:'center',fontSize:12,fontWeight:700,color:i===1?'white':'var(--ink3)',borderBottom:'2px solid var(--bd)'}}>{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row,i)=>(
                  <tr key={i} style={{borderBottom:'1px solid var(--bd)'}}>
                    <td style={{padding:'12px 20px',fontSize:13,fontWeight:500,color:'var(--ink3)'}}>{row.feature}</td>
                    <td style={{padding:'12px 16px',background:'rgba(0,0,0,.01)'}}><Cell val={row.freelancer}/></td>
                    <td style={{padding:'12px 16px',background:'rgba(8,145,178,.02)'}}><Cell val={row.pro}/></td>
                    <td style={{padding:'12px 16px'}}><Cell val={row.agency}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

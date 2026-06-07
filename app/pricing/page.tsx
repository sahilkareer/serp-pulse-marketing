'use client'
import { useState } from 'react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)
  const APP = 'https://app.serp-pulse.com'

  const plans = [
    {
      tier: 'Freelancer',
      monthly: 20,
      annual: 19,
      desc: 'For solo SEOs and personal projects.',
      cta: 'Start 30-Day Free Trial',
      ctaStyle: 'outline',
      features: ['1 GSC project','1 GA4 property','1 white-label report','GSC + GA4 analytics','AI citation tracking (16+ platforms)','MCP Server access','CSV exports','Light/dark theme'],
      missing: ['Global filters', 'White-label branding'],
    },
    {
      tier: 'Pro',
      monthly: 49,
      annual: 46,
      desc: 'For SEO professionals managing multiple clients.',
      cta: 'Start 30-Day Free Trial →',
      ctaStyle: 'filled',
      popular: true,
      features: ['10 GSC projects','10 GA4 properties','10 white-label reports','Everything in Freelancer','Global filters across all data','All 9 GA4 dashboard widgets','Advanced date comparisons','Alerts & notifications','Priority support'],
      missing: [],
    },
    {
      tier: 'Agency',
      monthly: 159,
      annual: 150,
      desc: 'Unlimited scale for agencies and teams.',
      cta: 'Start 30-Day Free Trial →',
      ctaStyle: 'outline',
      features: ['Unlimited GSC projects','Unlimited GA4 properties','Unlimited reports','Everything in Pro','White-label branding','Team access & collaboration','API access','Beta features early access','Dedicated support'],
      missing: [],
    },
  ]

  const comparison = [
    { feature: 'GSC properties', freelancer: '1', pro: '10', agency: 'Unlimited' },
    { feature: 'GA4 properties', freelancer: '1', pro: '10', agency: 'Unlimited' },
    { feature: 'White-label reports', freelancer: '1', pro: '10', agency: 'Unlimited' },
    { feature: 'AI citation tracking (16+ platforms)', freelancer: true, pro: true, agency: true },
    { feature: 'MCP Server (16 tools)', freelancer: true, pro: true, agency: true },
    { feature: 'CSV exports', freelancer: true, pro: true, agency: true },
    { feature: 'Global filters', freelancer: false, pro: true, agency: true },
    { feature: 'All 9 GA4 widgets', freelancer: false, pro: true, agency: true },
    { feature: 'Alerts & notifications', freelancer: false, pro: true, agency: true },
    { feature: 'White-label branding', freelancer: false, pro: false, agency: true },
    { feature: 'Team access', freelancer: false, pro: false, agency: true },
    { feature: 'API access', freelancer: false, pro: false, agency: true },
    { feature: 'Priority/dedicated support', freelancer: false, pro: 'Priority', agency: 'Dedicated' },
  ]

  const faqs = [
    { q: 'Is there really no credit card required for the trial?', a: 'Correct. You can start a 30-day free trial on any plan without entering payment information. You will only be asked for a payment method when the trial ends and you decide to continue.' },
    { q: 'Can I switch plans after signing up?', a: 'Yes — you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the end of your current billing period.' },
    { q: 'What counts as a "project"?', a: 'A project is one GSC property (one verified domain or URL prefix) paired optionally with one GA4 property. You can mix and match — a project can be GSC-only, GA4-only, or both.' },
    { q: 'Does AI citation tracking cost extra?', a: 'No. AI citation tracking across all 16+ platforms (ChatGPT, Claude, Perplexity, Gemini, Grok, and more) is included in every plan, including Freelancer.' },
    { q: 'Is the MCP Server included on all plans?', a: 'Yes. All 16 MCP tools are available to every plan, including the free Freelancer tier.' },
    { q: 'What is white-label branding?', a: 'Agency plan members can add their own logo, brand colors, and custom domain to reports. Clients see your brand — not SERP-Pulse. Shareable report links can also use your domain.' },
    { q: 'Can I cancel anytime?', a: 'Yes. There are no long-term contracts. Cancel at any time from your account settings with no cancellation fees.' },
  ]

  const Cell = ({ val }: { val: boolean | string }) => {
    if (val === true) return <div style={{display:'flex',justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg></div>
    if (val === false) return <div style={{display:'flex',justifyContent:'center',color:'var(--mt3)'}}>—</div>
    return <div style={{textAlign:'center',fontSize:13,fontWeight:600,color:'var(--ink)'}}>{val}</div>
  }

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section style={{padding:'120px 24px 60px',textAlign:'center',background:'var(--bg)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-200,left:'50%',transform:'translateX(-50%)',width:'min(800px, 100vw)',height:500,background:'radial-gradient(ellipse,rgba(8,145,178,.04),transparent 65%)',pointerEvents:'none'}}/>
        <div style={{position:'relative',zIndex:1,maxWidth:640,margin:'0 auto'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex',marginBottom:16}}>Pricing</div>
          <h1 style={{fontFamily:'var(--hd)',fontSize:'clamp(36px,6vw,60px)',fontWeight:800,letterSpacing:-2.5,lineHeight:1.06,marginBottom:14,color:'var(--ink)'}}>Simple. Transparent.<br/>Everything included.</h1>
          <p style={{fontSize:17,color:'var(--mt)',lineHeight:1.65,marginBottom:32,maxWidth:500,margin:'0 auto 32px'}}>AI tracking, white-label reports, MCP server — all included from your first paid plan. 30-day free trial on every tier.</p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:8}}>
            <span style={{fontSize:14,color:annual?'var(--mt)':'var(--ink)',fontWeight:500}}>Monthly</span>
            <button onClick={()=>setAnnual(a=>!a)} style={{width:46,height:26,borderRadius:13,background:annual?'var(--tl)':'var(--mt3)',border:'none',cursor:'pointer',position:'relative',transition:'background .2s'}}>
              <div style={{width:20,height:20,borderRadius:'50%',background:'white',position:'absolute',top:3,left:annual?23:3,transition:'left .2s',boxShadow:'0 1px 4px rgba(0,0,0,.15)'}}/>
            </button>
            <span style={{fontSize:14,color:annual?'var(--ink)':'var(--mt)',fontWeight:500}}>Annual</span>
            <span style={{fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:20,background:'var(--gns)',color:'var(--gn)'}}>Save up to 6%</span>
          </div>
          <p style={{fontSize:12,color:'var(--gn)',fontWeight:600,background:'var(--gns)',padding:'5px 16px',borderRadius:8,display:'inline-block'}}>30-day free trial on all plans · No credit card required</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section style={{padding:'0 24px 80px',background:'var(--bg)'}}>
        <div style={{maxWidth:1000,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,alignItems:'start'}} className="how-grid">
          {plans.map(plan=>(
            <div key={plan.tier} className="rv" style={{
              background:'var(--wh)',border:plan.popular?'2px solid var(--tl)':'1.5px solid var(--bd)',
              borderRadius:'var(--rl)',padding:'28px 24px',position:'relative',
              boxShadow:plan.popular?'0 0 0 4px var(--ts),var(--s2)':'var(--s0)',
              transform:plan.popular?'translateY(-6px)':'none',
            }}>
              {plan.popular && <div style={{position:'absolute',top:-13,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,var(--tl),var(--tl3))',color:'white',fontSize:10,fontWeight:700,padding:'4px 16px',borderRadius:20,whiteSpace:'nowrap',fontFamily:'var(--hd)'}}>Most Popular</div>}
              <div style={{fontSize:11,fontWeight:700,letterSpacing:1,textTransform:'uppercase',color:'var(--mt2)',marginBottom:10}}>{plan.tier}</div>
              <div style={{fontFamily:'var(--hd)',display:'flex',alignItems:'flex-end',gap:2,marginBottom:4}}>
                <sup style={{fontSize:18,fontWeight:700,color:'var(--ink)',lineHeight:1,marginBottom:6}}>$</sup>
                <span style={{fontSize:52,fontWeight:800,letterSpacing:-3,color:'var(--ink)',lineHeight:1}}>{annual?plan.annual:plan.monthly}</span>
                <span style={{fontSize:14,color:'var(--mt2)',marginBottom:8}}>/mo</span>
              </div>
              <div style={{fontSize:11,color:'var(--mt2)',marginBottom:6}}>{annual ? `Billed annually · $${plan.monthly}/mo monthly` : 'Billed monthly'}</div>
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
              <a href={`${APP}/signup`} style={{display:'block',textAlign:'center',padding:'12px',borderRadius:9,fontSize:13,fontWeight:600,textDecoration:'none',transition:'all .15s',fontFamily:'var(--hd)',...(plan.ctaStyle==='filled'?{background:'var(--ink)',color:'white',border:'1.5px solid var(--ink)'}:{border:'1.5px solid var(--bd2)',color:'var(--mt)'})}}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p style={{textAlign:'center',fontSize:13,color:'var(--mt2)',marginTop:24}}>All plans include a <strong style={{color:'var(--ink)'}}>30-day free trial</strong>. No credit card required. Cancel anytime.</p>
      </section>

      {/* COMPARISON TABLE */}
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
                <tr>
                  <td style={{padding:'16px 20px'}}></td>
                  {[{cta:'Start Free',style:{border:'1.5px solid var(--bd2)',color:'var(--mt)',background:'transparent'}},{cta:'Start Free →',style:{background:'var(--ink)',color:'white',border:'1.5px solid var(--ink)'}},{cta:'Start Free →',style:{border:'1.5px solid var(--bd2)',color:'var(--mt)',background:'transparent'}}].map((btn,i)=>(
                    <td key={i} style={{padding:'16px 12px',textAlign:'center'}}>
                      <a href={`${APP}/signup`} style={{...btn.style,display:'inline-block',padding:'9px 18px',borderRadius:8,fontSize:12,fontWeight:600,textDecoration:'none'}}>{btn.cta}</a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{padding:'60px 24px',background:'var(--bg)',borderTop:'1px solid var(--bd)'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20,textAlign:'center'}} className="how-grid">
            {[
              {icon:'🔒',t:'No credit card needed',d:'Start your 30-day trial without entering any payment details.'},
              {icon:'⚡',t:'2-minute setup',d:'Connect Google once. Both GSC and GA4 ready instantly.'},
              {icon:'🔄',t:'Cancel anytime',d:'No long-term contracts. Cancel from your account in one click.'},
              {icon:'📞',t:'Real support',d:'Reply within 24 hours. We actually read and respond to every message.'},
            ].map(item=>(
              <div key={item.t} className="rv" style={{padding:20}}>
                <div style={{fontSize:28,marginBottom:10}}>{item.icon}</div>
                <div style={{fontFamily:'var(--hd)',fontSize:14,fontWeight:700,marginBottom:6}}>{item.t}</div>
                <p style={{fontSize:12,color:'var(--mt)',lineHeight:1.55}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'80px 24px',background:'var(--wh)'}}>
        <div style={{maxWidth:680,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>FAQ</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,30px)',fontWeight:800,letterSpacing:-1}}>Common questions answered.</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            {faqs.map((faq,i)=>(
              <div key={i} style={{borderBottom:'1px solid var(--bd)',padding:'20px 0'}}>
                <div style={{fontFamily:'var(--hd)',fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8}}>{faq.q}</div>
                <p style={{fontSize:14,color:'var(--mt)',lineHeight:1.65,margin:0}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final dark-sec">
        <div className="final-bg"/>
        <div className="w">
          <h2>Start free.<br/>Upgrade when <span className="ac">you&apos;re ready.</span></h2>
          <p className="final-p">30-day free trial on every plan. No credit card. Connect in 2 minutes.</p>
          <div style={{position:'relative',zIndex:1,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g" style={{color:'var(--dm)',borderColor:'rgba(255,255,255,.15)'}}>View live app →</a>
          </div>
          <div className="final-checks">
            <span className="fck">30-day trial</span><span className="fck">No credit card</span><span className="fck">2-min setup</span><span className="fck">Cancel anytime</span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'AI Citation & Traffic Tracking — SERP-Pulse',
  description: 'Track AI traffic from ChatGPT, Claude, Perplexity, Gemini and 16+ platforms. See which pages AI platforms cite and how much traffic they send.',
}

const APP = 'https://app.serp-pulse.com'

export default function AiTrafficPage() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="page-hero dark-sec">
        <div className="w">
          <div className="breadcrumb">
            <a href="/">Home</a><span>→</span><a href="/features">Features</a><span>→</span><span style={{color:'var(--tl3)'}}>AI Citations</span>
          </div>
          <div style={{marginBottom:16,display:'flex',gap:6,justifyContent:'center'}}>
            {['chatgpt.com','claude.ai','perplexity.ai','gemini.google.com','x.ai'].map(d=>(
              <img key={d} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} width="32" height="32" style={{borderRadius:6}} alt=""/>
            ))}
          </div>
          <h1>AI Citation &amp; Traffic<br/><span className="ac">Tracking.</span></h1>
          <p className="hero-sub">Right now, AI platforms like ChatGPT, Claude, Perplexity, and Gemini are <strong>citing your content and sending real visitors</strong> to your site. This traffic exists in your analytics — but it&apos;s buried under raw referral domains with no platform labels. SERP-Pulse identifies each source automatically and gives you a clear breakdown by platform, page, and trend.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Discover Your AI Traffic <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="#how-it-works" className="btn-g">How it works</a>
          </div>
        </div>
      </section>

      {/* THE BLIND SPOT */}
      <section className="feat-sec" style={{background:'var(--wh)'}}>
        <div className="w">
          <div style={{textAlign:'center',marginBottom:32}}>
            <div className="sl" style={{justifyContent:'center',display:'flex'}}>The Blind Spot</div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:'clamp(22px,3.5vw,30px)',fontWeight:800,letterSpacing:-1,maxWidth:640,margin:'0 auto'}}>AI traffic is already in your analytics — just impossible to read.</h2>
            <p style={{fontSize:15,color:'var(--mt)',maxWidth:560,margin:'12px auto 0',textAlign:'center'}}>When ChatGPT cites your blog post and a user clicks through, GA4 records it as referral traffic from <code style={{background:'var(--bg2)',padding:'1px 5px',borderRadius:3,fontSize:13}}>chat.openai.com</code>. You can find it if you know exactly where to look — but there&apos;s no AI label, no aggregated view, and no trend. SERP-Pulse reads those raw referral domains and automatically maps them to the correct AI platform, so you see a clear breakdown in seconds instead of hours.</p>
          </div>
        </div>
      </section>

      {/* 16+ PLATFORMS */}
      <section className="feat-sec">
        <div className="w">
          <div className="feat-grid">
            <div className="feat-content">
              <div className="sl">16+ Platforms</div>
              <h2>Every major AI platform.<br/>Every referral identified.</h2>
              <p>SERP-Pulse tracks referral traffic from 16+ AI platforms. For each platform, you see sessions, users, engagement rate, average duration, and conversions. The growth trend shows which platforms are sending more traffic over time.</p>
              <div className="checks">
                <div className="check"><strong>ChatGPT</strong> — by far the largest source of AI referral traffic today</div>
                <div className="check"><strong>Claude</strong> — Anthropic&apos;s AI assistant, growing rapidly in usage</div>
                <div className="check"><strong>Perplexity</strong> — AI-powered search engine with citation links</div>
                <div className="check"><strong>Gemini</strong> — Google&apos;s AI, increasingly citing web content</div>
                <div className="check"><strong>Grok, Copilot, You.com, Andi, Phind, DuckAssist, Meta AI, Mistral, DeepSeek, Cursor, Poe, Pi</strong> — all tracked automatically</div>
              </div>
              <p style={{fontSize:13,color:'var(--mt)',lineHeight:1.55,marginTop:8}}><strong style={{color:'var(--ink)'}}>Why this matters for your strategy:</strong> If ChatGPT is citing your blog posts but Perplexity isn&apos;t, you can adjust your content structure to be more citation-friendly. If AI traffic to a specific page is growing 50% month-over-month, double down on that content type.</p>
            </div>
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">AI Citations Breakdown</div><div className="p">Last 28 days</div></div>
                <div className="ai-bars">
                  {[
                    ['chatgpt.com','ChatGPT','ai-f1','78%','4,218','▲ 24%'],
                    ['perplexity.ai','Perplexity','ai-f2','54%','1,847','▲ 67%'],
                    ['claude.ai','Claude','ai-f3','28%','926','▲ 41%'],
                    ['gemini.google.com','Gemini','ai-f4','18%','612','▲ 18%'],
                    ['x.ai','Grok','ai-f5','8%','152','▲ 8%'],
                  ].map(([d,n,cls,w,v,p])=>(
                    <div key={n} className="ai-row">
                      <div className="ai-nm"><img src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt=""/>{n}</div>
                      <div className="ai-track"><div className={`ai-fill ${cls}`} style={{width:w}}>{v}</div></div>
                      <div className="ai-val">{v}</div>
                      <div className="ai-pct">{p}</div>
                    </div>
                  ))}
                </div>
                <div className="ai-total">
                  <div className="ai-tl">Total AI Referral Sessions</div>
                  <div style={{display:'flex',alignItems:'center',gap:8}}><span className="ai-tv">7,755</span><span className="ai-td">▲ 34.2%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PER-PAGE ATTRIBUTION */}
      <section className="feat-sec" style={{background:'var(--wh)'}} id="how-it-works">
        <div className="w">
          <div className="feat-grid rev">
            <div className="rv">
              <div className="dmock">
                <div className="dmock-head"><div className="t">AI Traffic — Per Page View</div><div className="p">Which pages get cited</div></div>
                <div style={{padding:12}}>
                  <div className="pf-tbl">
                    <div className="pf-tr head" style={{gridTemplateColumns:'2.5fr .8fr .6fr .8fr .5fr'}}>
                      <div className="pf-td" style={{color:'var(--dt)'}}>Page</div>
                      <div className="pf-td">Sessions</div>
                      <div className="pf-td">Users</div>
                      <div className="pf-td">Eng Rate</div>
                      <div className="pf-td">Conv</div>
                    </div>
                    {[
                      ['/blog/seo-guide','1,840','1,622','58.3%','42'],
                      ['/features/ai-traffic','923','841','62.1%','28'],
                      ['/docs/getting-started','456','398','71.2%','15'],
                    ].map(([pg,s,u,e,c],i)=>(
                      <div key={pg} className="pf-tr" style={{gridTemplateColumns:'2.5fr .8fr .6fr .8fr .5fr',border:i===2?'none':undefined}}>
                        <div className="pf-td" style={{color:'var(--dt)'}}>{pg}</div>
                        <div className="pf-td">{s}</div>
                        <div className="pf-td">{u}</div>
                        <div className="pf-td gn">{e}</div>
                        <div className="pf-td">{c}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="feat-content">
              <div className="sl">Per-Page Attribution</div>
              <h2>Which pages do AI platforms cite the most?</h2>
              <p>See exactly which pages on your site receive AI referral traffic. This tells you which content AI models consider authoritative and worth linking to — invaluable intelligence for your content strategy.</p>
              <p style={{fontSize:14,color:'var(--mt)',lineHeight:1.6}}><strong style={{color:'var(--ink)'}}>Actionable insight:</strong> If your &ldquo;SEO Guide&rdquo; gets 1,840 AI referral sessions per month but your &ldquo;Pricing&rdquo; page gets zero, AI models cite educational content. Write more guides. Structure them for citation. The traffic will follow.</p>
              <div className="checks">
                <div className="check">See AI sessions, users, engagement rate per page</div>
                <div className="check">Conversions attributed to AI traffic per page</div>
                <div className="check">Same date ranges and comparison modes as GSC data</div>
                <div className="check">Filter by specific AI platform to see which one cites which page</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band dark-sec" style={{background:'var(--d)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(6,214,199,.07),transparent 60%)',pointerEvents:'none'}}/>
        <div className="w" style={{position:'relative',zIndex:1}}>
          <h2>See the traffic<br/>nobody else shows you.</h2>
          <p>Connect in 30 seconds. Every AI platform tracked from day one.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g">View live app →</a>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:20,flexWrap:'wrap',marginTop:16}}>
            <span className="fck">30-day free trial</span><span className="fck">No credit card</span><span className="fck">2-min setup</span><span className="fck">Cancel anytime</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

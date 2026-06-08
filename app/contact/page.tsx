import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Contact — SERP-Pulse',
  description: 'Get in touch with the SERP-Pulse team for questions, support, or partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      <section className="page-hero dark-sec"><div className="w">
        <div className="breadcrumb"><a href="/">Home</a><span>→</span><span style={{color:'var(--tl3)'}}>Contact</span></div>
        <h1>Get in <span className="ac">touch.</span></h1>
        <p className="hero-sub">Have a question about SERP-Pulse, want to discuss a partnership, or need support? We&apos;d love to hear from you.</p>
      </div></section>

      <section className="feat-sec" style={{background:'var(--wh)'}}><div className="w">
        <div className="two-col-grid rv">

          {/* Form */}
          <div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:22,fontWeight:700,letterSpacing:-.5,marginBottom:20}}>Send us a message</h2>
            <div style={{marginBottom:16}}>
              <label style={{display:'block',fontSize:13,fontWeight:600,color:'var(--ink)',marginBottom:6}}>Name</label>
              <input type="text" placeholder="Your name" style={{width:'100%',padding:'10px 14px',border:'1.5px solid var(--bd)',borderRadius:8,fontSize:14,color:'var(--ink)',background:'var(--wh)',outline:'none'}}/>
            </div>
            <div style={{marginBottom:16}}>
              <label style={{display:'block',fontSize:13,fontWeight:600,color:'var(--ink)',marginBottom:6}}>Email</label>
              <input type="email" placeholder="you@example.com" style={{width:'100%',padding:'10px 14px',border:'1.5px solid var(--bd)',borderRadius:8,fontSize:14,color:'var(--ink)',background:'var(--wh)',outline:'none'}}/>
            </div>
            <div style={{marginBottom:16}}>
              <label style={{display:'block',fontSize:13,fontWeight:600,color:'var(--ink)',marginBottom:6}}>Subject</label>
              <select style={{width:'100%',padding:'10px 14px',border:'1.5px solid var(--bd)',borderRadius:8,fontSize:14,color:'var(--ink)',background:'var(--wh)',outline:'none'}}>
                <option>General question</option>
                <option>Technical support</option>
                <option>Partnership inquiry</option>
                <option>Feature request</option>
                <option>Bug report</option>
              </select>
            </div>
            <div style={{marginBottom:20}}>
              <label style={{display:'block',fontSize:13,fontWeight:600,color:'var(--ink)',marginBottom:6}}>Message</label>
              <textarea placeholder="Tell us how we can help..." rows={5} style={{width:'100%',padding:'10px 14px',border:'1.5px solid var(--bd)',borderRadius:8,fontSize:14,color:'var(--ink)',background:'var(--wh)',resize:'vertical',outline:'none'}}/>
            </div>
            <button className="btn-h" style={{width:'100%',justifyContent:'center',border:'none',cursor:'pointer'}}>
              Send Message <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>

          {/* Contact info */}
          <div>
            <h2 style={{fontFamily:'var(--hd)',fontSize:22,fontWeight:700,letterSpacing:-.5,marginBottom:20}}>Other ways to reach us</h2>
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              {[
                {t:'Email',body:'sahilkareer1998@gmail.com',sub:null},
                {t:'Response time',body:'We typically respond within 24 hours on business days.',sub:null},
                {t:'Built by',body:'Sahil Kareer — Founder & Developer',sub:'6+ years in SEO, Analytics & Agency Operations'},
              ].map(card=>(
                <div key={card.t} className="about-card">
                  <div style={{fontFamily:'var(--hd)',fontSize:14,fontWeight:700,marginBottom:4}}>{card.t}</div>
                  <p style={{fontSize:14,color:'var(--mt)'}}>{card.body}</p>
                  {card.sub&&<p style={{fontSize:13,color:'var(--mt2)',marginTop:3}}>{card.sub}</p>}
                </div>
              ))}
              <div style={{padding:'16px 0'}}>
                <a href="/about" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:13,color:'var(--tl)',fontWeight:600,textDecoration:'none'}}>
                  Read the full story → <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <SiteFooter />
    </>
  )
}

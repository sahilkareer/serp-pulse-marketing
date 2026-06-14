import { headers } from 'next/headers'
import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import PricingCards from '@/components/PricingCards'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'pricing' }).catch(() => null)
  return {
    title: d?.seoTitle || 'Pricing — SERP-Pulse',
    description: d?.seoDesc || 'Simple, transparent pricing. AI tracking, white-label reports, MCP server — all included. 90-day free trial on every tier.',
  }
}

const APP = 'https://app.serp-pulse.com'

// ── Live pricing from backend ─────────────────────────────────────────────────
// Fetches USD prices from the payments API at build time (ISR revalidates every
// 5 minutes). If the API is unreachable, DEFAULT_PLANS prices are used as fallback.
// This makes payments.js the single source of truth for prices across both sites.
async function fetchLivePrices(): Promise<{ monthly: number; annual: number } | null> {
  try {
    // Detect country from Vercel geo headers (auto-set by Vercel Edge)
    const hdrs = await headers()
    const country = hdrs.get('x-vercel-ip-country') || 'US'
    const res = await fetch(`https://api.serp-pulse.com/api/payments/pricing?country=${country}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return {
      freelancer: { monthly: parseFloat(data.pricing.freelancer.monthly), annual: parseFloat(data.pricing.freelancer.yearlyPerMonth) },
      pro:        { monthly: parseFloat(data.pricing.pro.monthly),        annual: parseFloat(data.pricing.pro.yearlyPerMonth) },
      agency:     { monthly: parseFloat(data.pricing.agency.monthly),     annual: parseFloat(data.pricing.agency.yearlyPerMonth) },
    } as any
  } catch {
    return null
  }
}

const DEFAULT_PLANS = [
  { tier: 'Freelancer', monthly: 20, annual: 19, desc: 'For solo SEOs and personal projects.', cta: 'Start 90-Day Free Trial', ctaStyle: 'outline' as const, features: ['1 GSC project','1 GA4 property','1 white-label report','GSC + GA4 analytics','AI citation tracking (16+ platforms)','MCP Server access','CSV exports','Light/dark theme'], missing: ['Global filters','White-label branding'] },
  { tier: 'Pro', monthly: 49, annual: 46, desc: 'For SEO professionals managing multiple clients.', cta: 'Start 90-Day Free Trial →', ctaStyle: 'filled' as const, popular: true, features: ['10 GSC projects','10 GA4 properties','10 white-label reports','Everything in Freelancer','Global filters across all data','All 9 GA4 dashboard widgets','Advanced date comparisons','Alerts & notifications','Priority support'], missing: [] },
  { tier: 'Agency', monthly: 159, annual: 150, desc: 'Unlimited scale for agencies and teams.', cta: 'Start 90-Day Free Trial →', ctaStyle: 'outline' as const, features: ['Unlimited GSC projects','Unlimited GA4 properties','Unlimited reports','Everything in Pro','White-label branding','Team access & collaboration','API access','Beta features early access','Dedicated support'], missing: [] },
]

const DEFAULT_COMPARISON = [
  { feature: 'GSC properties',                      freelancer: '1',       pro: '10',       agency: 'Unlimited' },
  { feature: 'GA4 properties',                      freelancer: '1',       pro: '10',       agency: 'Unlimited' },
  { feature: 'White-label reports',                 freelancer: '1',       pro: '10',       agency: 'Unlimited' },
  { feature: 'AI citation tracking (16+ platforms)',freelancer: true,      pro: true,       agency: true },
  { feature: 'MCP Server (16 tools)',               freelancer: true,      pro: true,       agency: true },
  { feature: 'CSV exports',                         freelancer: true,      pro: true,       agency: true },
  { feature: 'Global filters',                      freelancer: false,     pro: true,       agency: true },
  { feature: 'All 9 GA4 widgets',                   freelancer: false,     pro: true,       agency: true },
  { feature: 'Alerts & notifications',              freelancer: false,     pro: true,       agency: true },
  { feature: 'White-label branding',                freelancer: false,     pro: false,      agency: true },
  { feature: 'Team access',                         freelancer: false,     pro: false,      agency: true },
  { feature: 'API access',                          freelancer: false,     pro: false,      agency: true },
  { feature: 'Priority/dedicated support',          freelancer: false,     pro: 'Priority', agency: 'Dedicated' },
]

const DEFAULT_FAQS = [
  { q: 'Is there really no credit card required for the trial?', a: 'Correct. You can start a 90-day free trial on any plan without entering payment information. You will only be asked for a payment method when the trial ends and you decide to continue.' },
  { q: 'Can I switch plans after signing up?', a: 'Yes — you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the end of your current billing period.' },
  { q: 'What counts as a "project"?', a: 'A project is one GSC property (one verified domain or URL prefix) paired optionally with one GA4 property. You can mix and match — a project can be GSC-only, GA4-only, or both.' },
  { q: 'Does AI citation tracking cost extra?', a: 'No. AI citation tracking across all 16+ platforms (ChatGPT, Claude, Perplexity, Gemini, Grok, and more) is included in every plan, including Freelancer.' },
  { q: 'Is the MCP Server included on all plans?', a: 'Yes. All 16 MCP tools are available to every plan, including the free Freelancer tier.' },
  { q: 'What is white-label branding?', a: 'Agency plan members can add their own logo, brand colors, and custom domain to reports. Clients see your brand — not SERP-Pulse.' },
  { q: 'Can I cancel anytime?', a: 'Yes. There are no long-term contracts. Cancel at any time from your account settings with no cancellation fees.' },
]

export default async function PricingPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'pricing' }).catch(() => null)

  // Fetch live prices from backend (single source of truth).
  // Falls back to DEFAULT_PLANS prices if API is unreachable.
  const livePrices: any = await fetchLivePrices()
  const plans = DEFAULT_PLANS.map(plan => {
    const key = plan.tier.toLowerCase()
    if (livePrices?.[key]) {
      return { ...plan, monthly: livePrices[key].monthly, annual: livePrices[key].annual }
    }
    return plan
  })

  const headline  = d?.heroHeadline  || 'Simple. Transparent.\nEverything included.'
  const subtext   = d?.heroSubtext   || 'AI tracking, white-label reports, MCP server — all included from your first paid plan. 90-day free trial on every tier.'
  const annualDiscount = d?.heroNote || 'Save up to 6%'

  const faqs       = d?.faqs?.length           ? d.faqs           : DEFAULT_FAQS
  const ctaHeadline= d?.ctaHeadline || 'Start free.\nUpgrade when you\'re ready.'
  const ctaSubtext = d?.ctaSubtext  || '90-day free trial on every plan. No credit card. Connect in 2 minutes.'

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section style={{padding:'120px 24px 40px',textAlign:'center',background:'var(--bg)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-200,left:'50%',transform:'translateX(-50%)',width:'min(800px, 100vw)',height:500,background:'radial-gradient(ellipse,rgba(8,145,178,.04),transparent 65%)',pointerEvents:'none'}}/>
        <div style={{position:'relative',zIndex:1,maxWidth:640,margin:'0 auto'}}>
          <div className="sl" style={{justifyContent:'center',display:'flex',marginBottom:16}}>Pricing</div>
          <h1 style={{fontFamily:'var(--hd)',fontSize:'clamp(36px,6vw,60px)',fontWeight:800,letterSpacing:-2.5,lineHeight:1.06,marginBottom:14,color:'var(--ink)'}}>
            {headline.split('|').map((line: string, i: number) => <span key={i}>{i > 0 && <br/>}{line}</span>)}
          </h1>
          <p style={{fontSize:17,color:'var(--mt)',lineHeight:1.65,marginBottom:32,maxWidth:500,margin:'0 auto 32px'}}>{subtext}</p>
        </div>
      </section>

      {/* PRICING CARDS (client component — has the annual/monthly toggle) */}
      <section style={{padding:'0 24px 80px',background:'var(--bg)'}}>
        <div style={{textAlign:'center'}}>
          <PricingCards plans={plans} comparison={DEFAULT_COMPARISON} annualDiscount={annualDiscount} />
        </div>
        <p style={{textAlign:'center',fontSize:13,color:'var(--mt2)',marginTop:24}}>All plans include a <strong style={{color:'var(--ink)'}}>90-day free trial</strong>. No credit card required. Cancel anytime.</p>
      </section>

      {/* TRUST BADGES */}
      <section style={{padding:'60px 24px',background:'var(--bg)',borderTop:'1px solid var(--bd)'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20,textAlign:'center'}} className="how-grid">
            {[
              {icon:'🔒',t:'No credit card needed',d:'Start your 90-day trial without entering any payment details.'},
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
            {faqs.map((faq: any, i: number)=>(
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
          <h2 style={{whiteSpace:'pre-line'}}>
            {ctaHeadline.split('|').map((line: string, i: number) => <span key={i}>{i > 0 && <br/>}{line}</span>)}
          </h2>
          <p className="final-p">{ctaSubtext}</p>
          <div style={{position:'relative',zIndex:1,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={`${APP}/signup`} className="btn-h">Start Free Trial — No Card Needed <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href={APP} className="btn-g" style={{color:'var(--dm)',borderColor:'rgba(255,255,255,.15)'}}>View live app →</a>
          </div>
          <div className="final-checks">
            <span className="fck">90-day trial</span><span className="fck">No credit card</span><span className="fck">2-min setup</span><span className="fck">Cancel anytime</span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

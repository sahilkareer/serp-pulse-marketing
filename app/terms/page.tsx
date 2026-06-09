import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { client, STANDARD_PAGE_QUERY } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

const ptComponents = {
  block: {
    h2: ({ children }: any) => <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>{children}</h2>,
    normal: ({ children }: any) => <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    link: ({ children, value }: any) => <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{color:'var(--tl)'}}>{children}</a>,
  },
  list: {
    bullet: ({ children }: any) => <ul style={{paddingLeft:20,display:'flex',flexDirection:'column' as const,gap:8,marginBottom:12}}>{children}</ul>,
  },
  listItem: {
    bullet: ({ children }: any) => <li style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{children}</li>,
  },
}

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'terms' }).catch(() => null)
  return {
    title: d?.seoTitle || 'Terms of Service — SERP-Pulse',
    description: d?.seoDesc || 'SERP-Pulse Terms of Service. Your rights and responsibilities when using our platform.',
  }
}

export default async function TermsPage() {
  const d: any = await client.fetch(STANDARD_PAGE_QUERY, { slug: 'terms' }).catch(() => null)
  const updated = d?.sections?.[0]?.label || 'June 8, 2026'
  return (
    <>
      <SiteNav />

      <section style={{padding:'64px 0 32px',background:'var(--bg)',borderBottom:'1px solid var(--bd)'}}>
        <div className="w" style={{maxWidth:760}}>
          <div className="sl">Legal</div>
          <h1 className="sh" style={{marginBottom:8}}>Terms of Service</h1>
          <p style={{fontSize:14,color:'var(--mt)'}}>Last updated: {updated}</p>
        </div>
      </section>

      <section style={{padding:'48px 0 96px',background:'var(--wh)'}}>
        <div className="w" style={{maxWidth:760}}>
          {d?.content?.length ? (
            <div style={{display:'flex',flexDirection:'column',gap:32}}>
              <PortableText value={d.content} components={ptComponents} />
            </div>
          ) : (
          <div style={{display:'flex',flexDirection:'column',gap:36}}>

            <div>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>By accessing or using SERP-Pulse (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service. SERP-Pulse is operated by Sahil Kareer.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>1. Description of Service</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>SERP-Pulse is a SaaS platform that provides unified SEO analytics by connecting to Google Search Console and Google Analytics 4 via OAuth. Features include a unified dashboard, AI traffic tracking, white-label reports, keyword filters, and an MCP server for natural language queries.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>2. Account Registration</h2>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'You must create an account using Google OAuth to access the Service.',
                  'You are responsible for maintaining the confidentiality of your account.',
                  'You must provide accurate information and keep it up to date.',
                  'You must be at least 18 years old to use the Service.',
                  'One account per person. You may not share accounts.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>3. Subscription Plans & Billing</h2>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'SERP-Pulse offers a Free plan and paid plans (Freelancer, Pro, Agency). Plan details and pricing are available at serp-pulse.com/pricing.',
                  'Paid plans are billed monthly or annually via Razorpay.',
                  'Subscriptions renew automatically unless cancelled before the renewal date.',
                  'All plans include a 30-day free trial period. No credit card is required to start a trial.',
                  'Refunds are available within 7 days of purchase if you have not used the paid features.',
                  'We reserve the right to change pricing with 30 days notice to existing subscribers.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>4. Acceptable Use</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginBottom:12}}>You agree not to:</p>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'Use the Service for any unlawful purpose.',
                  'Attempt to gain unauthorised access to other accounts or our infrastructure.',
                  'Reverse engineer, decompile, or attempt to extract source code from the Service.',
                  'Use automated scripts or bots to access the Service in a way that disrupts normal operation.',
                  'Resell or redistribute the Service without written permission.',
                  'Use the Service to process data belonging to clients without appropriate authorisation.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>5. Google API Usage</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>SERP-Pulse accesses Google APIs on your behalf using read-only permissions you grant via OAuth. You are responsible for ensuring you have the right to connect the Google Search Console and GA4 properties you add to your account. SERP-Pulse&apos;s use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{color:'var(--tl)'}}>Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>6. Intellectual Property</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>SERP-Pulse and its original content, features, and functionality are owned by Sahil Kareer and are protected by copyright law. Your data remains yours. We claim no ownership over the GSC or GA4 data you connect through the Service.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>7. Disclaimers & Limitation of Liability</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginBottom:12}}>The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee:</p>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'Uninterrupted, error-free operation of the Service.',
                  'That data displayed is 100% accurate (data comes directly from Google APIs).',
                  'Any specific SEO outcomes or improvements from using the Service.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginTop:12}}>To the maximum extent permitted by law, SERP-Pulse&apos;s liability is limited to the amount you paid for the Service in the 3 months preceding the claim.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>8. Termination</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>You may cancel your account at any time from Settings → Account. We may suspend or terminate accounts that violate these Terms. Upon termination, your access to the Service will cease and your data will be deleted per our Privacy Policy.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>9. Changes to Terms</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms. For significant changes, we will notify you by email or in-app notification.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>10. Governing Law</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the Service shall be subject to the jurisdiction of courts in India.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>11. Contact</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>For questions about these Terms, contact us at: <a href="mailto:sahilkareer46@gmail.com" style={{color:'var(--tl)'}}>sahilkareer46@gmail.com</a></p>
            </div>

          </div>
          <div style={{marginTop:48,padding:24,background:'var(--bg)',borderRadius:12,border:'1px solid var(--bd)'}}>
            <p style={{fontSize:14,color:'var(--mt)',lineHeight:1.7,margin:0}}>By using SERP-Pulse, you acknowledge that you have read, understood, and agree to these Terms of Service and our <a href="/privacy" style={{color:'var(--tl)'}}>Privacy Policy</a>.</p>
          </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Privacy Policy — SERP-Pulse',
  description: 'SERP-Pulse Privacy Policy. How we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  const updated = 'June 8, 2026'

  return (
    <>
      <SiteNav />

      <section style={{padding:'64px 0 32px',background:'var(--bg)',borderBottom:'1px solid var(--bd)'}}>
        <div className="w" style={{maxWidth:760}}>
          <div className="sl">Legal</div>
          <h1 className="sh" style={{marginBottom:8}}>Privacy Policy</h1>
          <p style={{fontSize:14,color:'var(--mt)'}}>Last updated: {updated}</p>
        </div>
      </section>

      <section style={{padding:'48px 0 96px',background:'var(--wh)'}}>
        <div className="w" style={{maxWidth:760}}>
          <div style={{display:'flex',flexDirection:'column',gap:36}}>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>1. Who We Are</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>SERP-Pulse is an SEO analytics platform that connects Google Search Console and Google Analytics 4 into a unified dashboard. SERP-Pulse is operated by Sahil Kareer (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). You can contact us at <a href="mailto:sahilkareer46@gmail.com" style={{color:'var(--tl)'}}>sahilkareer46@gmail.com</a>.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>2. Data We Collect</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginBottom:12}}>We collect the minimum data necessary to operate the service:</p>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'Google account information (name, email address, profile picture) obtained via Google OAuth when you sign in.',
                  'Google Search Console data — queries, pages, clicks, impressions, CTR, and position for the properties you connect.',
                  'Google Analytics 4 data — sessions, users, engagement metrics, and traffic sources for the GA4 properties you connect.',
                  'Usage data — pages visited within the app, feature usage patterns, and session activity (used to improve the product).',
                  'Payment information — processed and stored by Razorpay. We do not store card numbers or payment credentials on our servers.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>3. How We Use Your Data</h2>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'To authenticate your account and maintain your session.',
                  'To fetch and display your Google Search Console and GA4 data within the SERP-Pulse dashboard.',
                  'To generate reports and analytics summaries you request.',
                  'To send transactional emails (account confirmation, payment receipts, password resets).',
                  'To improve the platform based on usage patterns.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginTop:12}}>We do <strong>not</strong> sell your data to third parties. We do not use your GSC or GA4 data for advertising purposes.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>4. Google API Data</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>SERP-Pulse accesses Google APIs using read-only OAuth scopes. We access your Google Search Console and Google Analytics data only to display it to you within the application. We do not store raw GSC or GA4 data on our servers — all data is fetched live from Google&apos;s APIs at the time of your request and displayed directly in your dashboard. OAuth tokens are stored securely in our database and are never exposed to the frontend or third parties.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>5. Data Storage & Security</h2>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'User accounts and OAuth tokens are stored in Supabase (PostgreSQL), hosted on secure cloud infrastructure.',
                  'All data in transit is encrypted using HTTPS/TLS.',
                  'OAuth tokens are stored securely and refreshed automatically as needed.',
                  'We follow industry-standard security practices and conduct regular security reviews.',
                  'Payment processing is handled entirely by Razorpay — SERP-Pulse does not store payment card data.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>6. Third-Party Services</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginBottom:12}}>We use the following third-party services to operate SERP-Pulse:</p>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'Google APIs (Search Console, Analytics) — for data access.',
                  'Supabase — for database and user authentication storage.',
                  'Vercel — for hosting the web application frontend.',
                  'Railway — for hosting the backend API.',
                  'Razorpay — for payment processing.',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>7. Your Rights</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginBottom:12}}>You have the right to:</p>
              <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8}}>
                {[
                  'Access the personal data we hold about you.',
                  'Request correction of inaccurate data.',
                  'Request deletion of your account and associated data.',
                  'Revoke Google OAuth access at any time from your Google Account settings.',
                  'Export your data (available in Settings → Data & Privacy).',
                ].map((item, i) => (
                  <li key={i} style={{fontSize:15,color:'var(--mt2)',lineHeight:1.7}}>{item}</li>
                ))}
              </ul>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75,marginTop:12}}>To exercise any of these rights, email us at <a href="mailto:sahilkareer46@gmail.com" style={{color:'var(--tl)'}}>sahilkareer46@gmail.com</a>.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>8. Cookies</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>SERP-Pulse uses essential cookies and browser local storage to maintain your session and store your authentication token. We do not use advertising cookies or third-party tracking cookies.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>9. Data Retention</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>We retain your account data for as long as your account is active. If you delete your account, your personal data and OAuth tokens will be deleted within 30 days. Anonymised usage statistics may be retained longer for product improvement purposes.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>10. Changes to This Policy</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page. For significant changes, we will notify you by email or via an in-app notification.</p>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--hd)',fontSize:20,fontWeight:700,marginBottom:10}}>11. Contact</h2>
              <p style={{fontSize:15,color:'var(--mt2)',lineHeight:1.75}}>For any privacy-related questions or requests, contact us at: <a href="mailto:sahilkareer46@gmail.com" style={{color:'var(--tl)'}}>sahilkareer46@gmail.com</a></p>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

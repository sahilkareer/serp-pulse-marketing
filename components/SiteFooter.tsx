export default function SiteFooter() {
  return (
    <footer>
      <div className="fi">
        {/* Logo + tagline row */}
        <div style={{marginBottom:36,paddingBottom:28,borderBottom:'1px solid rgba(255,255,255,.06)'}}>
          <a href="/" style={{display:'inline-block',textDecoration:'none',marginBottom:12}}>
            <svg viewBox="0 0 770 120" role="img" xmlns="http://www.w3.org/2000/svg" style={{height:32,width:'auto',display:'block'}}>
              <title>SERP-Pulse</title>
              <g transform="translate(4, 10)">
                <text x="0"   y="78" fontSize="78" fontWeight="800" fill="#4285F4" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">S</text>
                <text x="55"  y="78" fontSize="78" fontWeight="800" fill="#EA4335" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">E</text>
                <text x="109" y="78" fontSize="78" fontWeight="800" fill="#FBBC05" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">R</text>
                <text x="164" y="78" fontSize="78" fontWeight="800" fill="#34A853" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">P</text>
                <line x1="222" y1="44" x2="229" y2="44" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round"/>
                <polyline points="229,44 233,44 237,30 241,58 245,36 249,44 256,44" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="237" cy="30" r="4" fill="#f87171"/>
                <line x1="256" y1="44" x2="263" y2="44" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="270" y="78" fontSize="78" fontWeight="800" fill="#60a5fa" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">P</text>
                <text x="324" y="78" fontSize="78" fontWeight="800" fill="#60a5fa" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">u</text>
                <text x="370" y="78" fontSize="78" fontWeight="800" fill="#60a5fa" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">l</text>
                <text x="392" y="78" fontSize="78" fontWeight="800" fill="#60a5fa" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">s</text>
                <text x="432" y="78" fontSize="78" fontWeight="800" fill="#60a5fa" fontFamily="'Google Sans','Product Sans','Segoe UI',Arial,sans-serif">e</text>
              </g>
            </svg>
          </a>
          <p style={{fontSize:12,color:'var(--dm2)',maxWidth:280,lineHeight:1.55,margin:0}}>
            Unified SEO analytics for agencies and professionals. GSC + GA4 + AI Citations in one dashboard.
          </p>
        </div>

        {/* Links grid */}
        <div className="fg">
          <div className="fcol"><h4>Features</h4><ul>
            <li><a href="/features/search-console">Search Console</a></li>
            <li><a href="/features/analytics">GA4 Analytics</a></li>
            <li><a href="/features/ai-traffic">AI Citations</a></li>
            <li><a href="/features/reports">White-Label Reports</a></li>
            <li><a href="/features/mcp">MCP Server</a></li>
            <li><a href="/features/growth">Growth Monitor</a></li>
            <li><a href="/features/seo-weather">SEO Weather</a></li>
            <li><a href="/features/branded-keywords">Branded Keywords</a></li>
            <li><a href="/features/page-behavior">Page Behavior</a></li>
          </ul></div>

          <div className="fcol"><h4>Solutions</h4><ul>
            <li><a href="/use-cases/agencies">For Agencies</a></li>
            <li><a href="/use-cases/freelancers">For Freelancers</a></li>
            <li><a href="/use-cases/in-house">For In-House SEO</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/roadmap">Roadmap</a></li>
          </ul></div>

          <div className="fcol"><h4>Compare</h4><ul>
            <li><a href="/vs/agency-analytics">vs Agency Analytics</a></li>
            <li><a href="/vs/databox">vs Databox</a></li>
            <li><a href="/vs/dashthis">vs DashThis</a></li>
            <li><a href="/vs/looker-studio">vs Looker Studio</a></li>
          </ul></div>

          <div className="fcol"><h4>Company</h4><ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul></div>
        </div>

        {/* Bottom bar */}
        <div className="fbot">
          <p>© 2026 SERP-Pulse. Built by <a href="/about" style={{color:'var(--tl3)'}}>Sahil Kareer</a>. For SEOs who take data seriously.</p>
          <div className="fsoc">
            <a href="https://www.linkedin.com/in/sahil-kareer-5b9a71109/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
            </a>
            <a href="#" title="X">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

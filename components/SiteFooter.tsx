export default function SiteFooter() {
  return (
    <footer><div className="fi"><div className="fg">
      <div className="fb">
        <a href="/" style={{display:'inline-block',textDecoration:'none',marginBottom:10}}>
          <img src="/logo-white.svg" alt="SERP-Pulse" style={{height:22,width:'auto',display:'block',filter:'none'}}/>
        </a>
        <p>Unified SEO analytics for agencies and professionals. GSC + GA4 + AI Citations in one dashboard. Built by an SEO, for SEOs.</p>
      </div>

      <div className="fcol"><h4>Features</h4><ul>
        <li><a href="/features/search-console">Search Console</a></li>
        <li><a href="/features/analytics">GA4 Analytics</a></li>
        <li><a href="/features/ai-traffic">AI Citations</a></li>
        <li><a href="/features/reports">White-Label Reports</a></li>
        <li><a href="/features/mcp">MCP Server</a></li>
        <li><a href="/features/growth">Growth Monitor</a></li>
        <li><a href="/integrations">Integrations</a></li>
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
    </div></footer>
  )
}

'use client'
// Static feature sections (01–06) + competitor comparison table.
// These contain complex product UI mockups that rarely need editing —
// kept as code rather than Sanity to avoid over-complicating the CMS.

const APP = 'https://app.serp-pulse.com'

export default function HomepageFeatures() {
  return (
    <>
      {/* ── 01 AI CITATIONS ─────────────────────────────── */}
      <section className="sec-feat" style={{ background: 'var(--d)' }} id="features">
        <div className="w"><div className="sec-lay">
          <div className="sec-content">
            <div><span className="tag tag-star">★ Biggest Differentiator</span></div>
            <div>
              <div className="sl">01 — AI Citations</div>
              <h2 className="sh" style={{ color: 'var(--dt)' }}>The traffic source<br />nobody else tracks.</h2>
              <p className="ss" style={{ color: 'var(--dm)' }}>ChatGPT, Claude, Perplexity, and Gemini are sending real visitors to your website right now. This traffic exists in GA4 — but it&apos;s buried under raw referral domains with no platform labels. SERP-Pulse identifies each source automatically and gives you a clear breakdown by platform, page, and trend.</p>
            </div>
            <div className="sec-checks">
              <div className="check">16+ AI platforms tracked live in production</div>
              <div className="check">Per-platform sessions, engagement &amp; conversions</div>
              <div className="check">See which pages AI platforms cite most — create more of what works</div>
              <div className="check">Growth trends — watch your AI traffic increase over time</div>
            </div>
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 4 }}>
              {['chatgpt.com', 'claude.ai', 'perplexity.ai', 'gemini.google.com', 'x.ai'].map((d, i) => (
                <img key={d} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} width="26" height="26" style={{ borderRadius: 5 }} alt="" />
              ))}
              <div style={{ width: 26, height: 26, background: 'var(--d3)', border: '1px solid var(--db)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: 'var(--tl3)' }}>+11</div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
              <a href={`${APP}/signup?ref=homepage`} className="btn-h">See your AI traffic <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              <a href="/features/ai-traffic" style={{ fontSize: 13, color: 'var(--tl3)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>Full feature details →</a>
            </div>
          </div>
          <div className="rv"><div className="dmock">
            <div className="dmock-head"><div className="t">AI Citations Breakdown</div><div className="p">Last 28 days</div></div>
            <div className="ai-bars">
              {[
                ['chatgpt.com', 'ChatGPT', 'ai-f1', '78%', '4,218', '▲ 24%'],
                ['perplexity.ai', 'Perplexity', 'ai-f2', '54%', '1,847', '▲ 67%'],
                ['claude.ai', 'Claude', 'ai-f3', '28%', '926', '▲ 41%'],
                ['gemini.google.com', 'Gemini', 'ai-f4', '18%', '612', '▲ 18%'],
                ['x.ai', 'Grok', 'ai-f5', '8%', '152', '▲ 8%'],
              ].map(([d, n, cls, w, v, p]) => (
                <div key={n} className="ai-row">
                  <div className="ai-nm"><img src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt="" />{n}</div>
                  <div className="ai-track"><div className={`ai-fill ${cls}`} style={{ width: w }}>{v}</div></div>
                  <div className="ai-val">{v}</div><div className="ai-pct">{p}</div>
                </div>
              ))}
            </div>
            <div className="ai-total"><div className="ai-tl">Total AI Referral Sessions</div><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span className="ai-tv">7,755</span><span className="ai-td">▲ 34.2%</span></div></div>
          </div></div>
        </div></div>
      </section>

      {/* ── 02 UNIFIED GSC + GA4 ─────────────────────────── */}
      <section className="sec-feat" style={{ background: 'var(--wh)' }}>
        <div className="w"><div className="sec-lay rev">
          <div className="rv"><div className="dmock">
            <div className="dmock-head"><div className="t">GSC + GA4 — Overlaid Chart</div><div className="p">28d vs prev period</div></div>
            <div style={{ padding: '12px 14px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: 'var(--dm)' }}><div style={{ width: 8, height: 3, background: 'var(--tl3)', borderRadius: 1 }} />Impressions (GSC)</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: 'var(--dm)' }}><div style={{ width: 8, height: 3, background: '#10b981', borderRadius: 1 }} />Clicks (GSC)</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: 'var(--dm)' }}><div style={{ width: 12, height: 2, background: '#f59e0b', opacity: 0.7 }} />Sessions (GA4)</div>
              </div>
              <svg viewBox="0 0 380 75" style={{ width: '100%', height: 75 }}>
                <path d="M0,55 C40,50 80,44 120,38 C160,34 200,40 240,28 C280,22 320,17 380,13 L380,75 L0,75 Z" fill="rgba(6,214,199,.07)" />
                <path d="M0,55 C40,50 80,44 120,38 C160,34 200,40 240,28 C280,22 320,17 380,13" fill="none" stroke="#06d6c7" strokeWidth="1.5" />
                <path d="M0,64 C40,61 80,57 120,52 C160,48 200,54 240,45 C280,39 320,34 380,29" fill="none" stroke="#10b981" strokeWidth="1.5" />
                <path d="M0,59 C40,56 80,52 120,47 C160,43 200,49 240,40 C280,34 320,29 380,24" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" opacity={0.7} />
              </svg>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, padding: '0 14px 12px' }}>
              {[['GSC Clicks', '284K', '#10b981'], ['Impressions', '4.2M', 'var(--tl3)'], ['GA4 Sessions', '312K', '#f59e0b'], ['AI Traffic', '7,755', 'var(--gn)']].map(([l, v, c]) => (
                <div key={l} style={{ background: 'var(--d3)', borderRadius: 5, padding: 9, textAlign: 'center' }}><div style={{ fontSize: 8, color: 'var(--dm2)', marginBottom: 2 }}>{l}</div><div style={{ fontFamily: 'var(--hd)', fontSize: 14, fontWeight: 700, color: c }}>{v}</div></div>
              ))}
            </div>
          </div></div>
          <div className="sec-content">
            <div><span className="tag tag-tl"><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="13" height="13" style={{ borderRadius: 2 }} alt="" /> + <img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" width="13" height="13" alt="" /> Unified</span></div>
            <div>
              <div className="sl">02 — Unified Analytics</div>
              <h2 className="sh">One login.<br />Both platforms.<br />One chart.</h2>
              <p className="ss">Most SEOs waste hours every day switching between GSC and GA4. SERP-Pulse eliminates that entirely — one Google login connects both, with overlaid charts showing whether your keyword rankings are actually translating into user engagement.</p>
            </div>
            <div className="sec-checks">
              <div className="check">Single Google OAuth — connects both GSC and GA4</div>
              <div className="check">Solid line = current period · Dashed = comparison period</div>
              <div className="check">Cross-filtering by Country, Device, URL, Source/Medium</div>
              <div className="check">9 date range options, 5 comparison modes</div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
              <a href="/features/analytics" style={{ fontSize: 13, color: 'var(--tl)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>GA4 Analytics feature →</a>
              <a href="/features/search-console" style={{ fontSize: 13, color: 'var(--tl)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>Search Console feature →</a>
            </div>
          </div>
        </div></div>
      </section>

      {/* ── 03 SMART FILTERS ─────────────────────────────── */}
      <section className="sec-feat" style={{ background: 'var(--d)' }}>
        <div className="w"><div className="sec-lay">
          <div className="sec-content">
            <div><span className="tag tag-tl" style={{ background: 'rgba(6,214,199,.08)', border: '1px solid rgba(6,214,199,.2)' }}>Smart Intelligence</span></div>
            <div>
              <div className="sl">03 — Keyword Filters</div>
              <h2 className="sh" style={{ color: 'var(--dt)' }}>Raw data becomes<br />instant opportunity.</h2>
              <p className="ss" style={{ color: 'var(--dm)' }}>Most tools show you a table of 2,000 keywords and leave the analysis to you. SERP-Pulse has intelligent preset filters that surface exactly the right opportunities — without manual scanning.</p>
            </div>
            <div className="sec-checks">
              <div className="check"><strong style={{ color: 'var(--tl3)' }}>Sweet Spot</strong> — high impressions, low CTR. Fix the meta, get the clicks.</div>
              <div className="check"><strong style={{ color: 'var(--tl3)' }}>Quick Wins</strong> — positions 4–10. One push and you&apos;re on page one.</div>
              <div className="check"><strong style={{ color: 'var(--tl3)' }}>AI Overview Targets</strong> — queries triggering Google AI answers</div>
              <div className="check">Numeric ranges: Impressions, Clicks, CTR, Position + Regex support</div>
            </div>
            <a href="/features/search-console" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--tl3)', fontWeight: 600, textDecoration: 'none' }}>All smart filter details →</a>
          </div>
          <div className="rv"><div className="dmock">
            <div className="dmock-head">
              <div className="t" style={{ display: 'flex', alignItems: 'center', gap: 5 }}><img src="https://www.google.com/s2/favicons?domain=search.google.com&sz=32" width="12" height="12" style={{ borderRadius: 2 }} alt="" />Top Queries</div>
              <span style={{ fontSize: 8, color: 'var(--tl3)', background: 'rgba(6,214,199,.08)', padding: '2px 6px', borderRadius: 3 }}>2,000 rows</span>
            </div>
            <div className="fm-body">
              <div className="fm-sec">Search Intent &amp; Query Type</div>
              <div className="fm-pills"><div className="fm-p on">All Queries</div><div className="fm-p">AI Overview Targets</div><div className="fm-p">Sweet Spot</div><div className="fm-p">Head Terms</div></div>
              <div className="fm-sec" style={{ marginTop: 8 }}>Position Range in Google</div>
              <div className="fm-pills"><div className="fm-p on">All Positions</div><div className="fm-p">🔥 You Own These</div><div className="fm-p">✅ Page 1</div><div className="fm-p">↗ Quick Wins</div></div>
              <div className="pf-tbl" style={{ marginTop: 8 }}>
                <div className="pf-tr head" style={{ gridTemplateColumns: '.2fr 2fr 1fr .6fr .6fr .5fr' }}><div className="pf-td">#</div><div className="pf-td">Query</div><div className="pf-td">Impressions</div><div className="pf-td">Clicks</div><div className="pf-td">CTR</div><div className="pf-td">Pos.</div></div>
                <div className="pf-tr" style={{ gridTemplateColumns: '.2fr 2fr 1fr .6fr .6fr .5fr' }}><div className="pf-td">1</div><div className="pf-td">how to track ai traffic</div><div className="pf-td">3.9K</div><div className="pf-td">764</div><div className="pf-td gn">19.6%</div><div className="pf-td"><span className="pf-pos gd">6.3</span></div></div>
                <div className="pf-tr" style={{ gridTemplateColumns: '.2fr 2fr 1fr .6fr .6fr .5fr', border: 'none' }}><div className="pf-td">2</div><div className="pf-td">seo sweet spot keywords</div><div className="pf-td">802</div><div className="pf-td">14</div><div className="pf-td" style={{ color: 'var(--rd)' }}>1.8%</div><div className="pf-td"><span className="pf-pos g">8.1</span></div></div>
              </div>
            </div>
          </div></div>
        </div></div>
      </section>

      {/* ── 04 WHITE-LABEL REPORTS ───────────────────────── */}
      <section className="sec-feat" style={{ background: 'var(--bg)' }}>
        <div className="w"><div className="sec-lay rev">
          <div className="rv"><div className="lmock">
            <div className="lmock-head"><div className="lmock-logo">SERP-Pulse Reports</div><div className="lmock-meta">Demo Agency · June 2026</div></div>
            <div style={{ padding: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { img: `https://www.google.com/s2/favicons?domain=search.google.com&sz=32`, r: 2, t: 'GSC Report', d: 'Queries, pages, positions' },
                { img: `https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg`, r: 0, t: 'GA4 Report', d: 'Sessions, users, engagement', highlight: true },
                { img: `https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64`, r: 4, t: 'AI Traffic Report', d: 'ChatGPT, Claude, Perplexity...' },
                { emoji: '📊', t: 'Combined Report', d: 'GSC + GA4 + AI in one PDF' },
              ].map((item: any, i) => (
                <div key={i} style={{ border: item.highlight ? '2px solid var(--tl)' : '1.5px solid var(--bd)', borderRadius: 'var(--r)', padding: 14, textAlign: 'center', background: item.highlight ? 'rgba(8,145,178,.02)' : 'transparent' }}>
                  <div style={{ marginBottom: 6 }}>{item.emoji ? <span style={{ fontSize: 22 }}>{item.emoji}</span> : <img src={item.img} width="24" height="24" style={{ borderRadius: item.r }} alt="" />}</div>
                  <div style={{ fontFamily: 'var(--hd)', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{item.t}</div>
                  <div style={{ fontSize: 10, color: 'var(--mt2)' }}>{item.d}</div>
                </div>
              ))}
            </div>
            <div style={{ margin: '0 14px 14px', padding: '10px 12px', background: 'var(--bg2)', borderRadius: 'var(--r)', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--gn)', background: 'var(--gns)', padding: '3px 8px', borderRadius: 4 }}>✓ Shareable link</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--tl)', background: 'var(--ts)', padding: '3px 8px', borderRadius: 4 }}>✓ Branded PDF</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--am)', background: 'var(--ams)', padding: '3px 8px', borderRadius: 4 }}>✓ One click</span>
            </div>
          </div></div>
          <div className="sec-content">
            <div><span className="tag tag-gn">Agency Feature</span></div>
            <div>
              <div className="sl">04 — White-Label Reports</div>
              <h2 className="sh">4 report types.<br />Your brand.<br />60 seconds.</h2>
              <p className="ss">Client reporting shouldn&apos;t take hours. SERP-Pulse generates branded, professional PDF reports in under 60 seconds — with your logo, your colors, and a public shareable link clients can open without logging in.</p>
            </div>
            <div className="sec-checks">
              <div className="check">GSC, GA4 Analytics, AI Traffic, and Combined reports</div>
              <div className="check">Add your logo, brand colors, and custom domain</div>
              <div className="check">Public shareable link — no client login required</div>
              <div className="check">For agencies managing 10+ clients, this alone pays for the subscription</div>
            </div>
            <a href="/features/reports" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--tl)', fontWeight: 600, textDecoration: 'none' }}>See all report types →</a>
          </div>
        </div></div>
      </section>

      {/* ── 05 GROWTH MONITORING ─────────────────────────── */}
      <section className="sec-feat" style={{ background: 'var(--d)' }} id="growth">
        <div className="w"><div className="sec-lay">
          <div className="sec-content">
            <div><span className="tag tag-star">Agency Power Feature</span></div>
            <div>
              <div className="sl">05 — Growth Monitoring</div>
              <h2 className="sh" style={{ color: 'var(--dt)' }}>100 projects.<br />One glance.</h2>
              <p className="ss" style={{ color: 'var(--dm)' }}>See which projects are growing, declining, or stable across your entire portfolio — based on whichever KPI matters to you. Spot a decline and drill straight into its keyword data, landing pages, and GA4 metrics without building a single report.</p>
            </div>
            <div className="sec-checks">
              <div className="check"><strong style={{ color: 'var(--tl3)' }}>Smart Mode</strong> — intelligent combined health score per project</div>
              <div className="check">Per-project sparkline trend charts at a glance</div>
              <div className="check">Growing / Declining / Mixed / Stable status badges</div>
              <div className="check">CSV export — all projects, all metrics</div>
            </div>
            <a href="/features/growth" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--tl3)', fontWeight: 600, textDecoration: 'none' }}>Growth monitoring details →</a>
          </div>
          <div className="rv"><div className="dmock">
            <div className="dmock-head"><div className="t">Project Health</div><span style={{ fontSize: 8, color: 'var(--tl3)', background: 'rgba(6,214,199,.08)', padding: '2px 7px', borderRadius: 3 }}>✓ Smart (Combined) ▾</span></div>
            <div className="gm-ov">
              <div className="gm-ov-c"><div style={{ fontSize: 14 }}>📈</div><div className="gm-n" style={{ color: '#10b981' }}>47</div><div className="gm-l">Growing</div></div>
              <div className="gm-ov-c"><div style={{ fontSize: 14 }}>→</div><div className="gm-n" style={{ color: 'var(--tl3)' }}>33</div><div className="gm-l">Stable</div></div>
              <div className="gm-ov-c"><div style={{ fontSize: 14 }}>↕</div><div className="gm-n" style={{ color: '#f59e0b' }}>8</div><div className="gm-l">Mixed</div></div>
              <div className="gm-ov-c"><div style={{ fontSize: 14 }}>📉</div><div className="gm-n" style={{ color: '#ef4444' }}>12</div><div className="gm-l">Declining</div></div>
            </div>
            <div className="gm-rows">
              <div className="gm-r hd"><div className="gm-td">#</div><div className="gm-td">Project</div><div className="gm-td">Impr.</div><div className="gm-td">Clicks</div><div className="gm-td">Trend</div><div className="gm-td">CTR</div><div className="gm-td">Status</div></div>
              {[
                ['1', 'acme-corp.com', '2.9K', '87', '#10b981', '3.05%', 'gn', '● Growing'],
                ['2', 'travel-blog.io', '5.4K', '341', 'var(--tl3)', '6.3%', 'tl', '→ Stable'],
                ['3', 'startup-saas.co', '1.2K', '48', '#f59e0b', '4.0%', 'am', '↕ Mixed'],
                ['4', 'ecomm-store.com', '8.1K', '192', '#ef4444', '2.4%', 'rd', '📉 Declining'],
              ].map(([n, p, i, c, tc, ctr, bc, status]) => (
                <div key={n} className="gm-r">
                  <div className="gm-td">{n}</div><div className="gm-td nm">{p}</div><div className="gm-td">{i}</div><div className="gm-td">{c}</div>
                  <div className="gm-td"><svg width="38" height="11" viewBox="0 0 38 11"><path d={bc === 'gn' ? 'M2 8 L10 6 L18 4 L28 5 L36 2' : bc === 'tl' ? 'M2 7 L10 6 L18 7 L28 6 L36 7' : bc === 'am' ? 'M2 5 L10 8 L18 4 L28 7 L36 5' : 'M2 3 L10 5 L18 7 L28 8 L36 9'} fill="none" stroke={tc} strokeWidth="1.5" /></svg></div>
                  <div className="gm-td" style={{ color: tc }}>{ctr}</div>
                  <div className="gm-td"><span className={`gm-badge ${bc}`}>{status}</span></div>
                </div>
              ))}
            </div>
          </div></div>
        </div></div>
      </section>

      {/* ── 06 MCP SERVER ────────────────────────────────── */}
      <section className="sec-feat" style={{ background: 'var(--wh)' }}>
        <div className="w"><div className="sec-lay rev">
          <div className="rv"><div className="dmock">
            <div className="dmock-head"><div className="t" style={{ gap: 6 }}><svg width="12" height="12" fill="none" stroke="#8b5cf6" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>MCP Server — Live Session</div><div className="p">16 tools</div></div>
            <div className="chat">
              <div className="chat-user"><div className="chat-u-b">Which of my pages gets the most AI traffic from Perplexity this month?</div></div>
              <div className="chat-ai"><div className="chat-a-b">
                <div className="chat-tool">tool: seopulse_ai_details · property: acme-corp.com</div>
                <div className="chat-data">
                  <div className="k">/blog/seo-guide</div><div className="v">847 sessions</div><div className="v">▲ 34%</div>
                  <div className="k">/tools/keyword-research</div><div className="v">612 sessions</div><div className="v">▲ 28%</div>
                </div>
                Your top Perplexity page is <strong style={{ color: 'var(--dt)' }}>/blog/seo-guide</strong> with 847 sessions (+34%). Consider creating more content on similar topics — Perplexity is actively citing this page.
              </div></div>
            </div>
            <div className="chat-inp"><span>Ask about your SEO data...</span><svg width="12" height="12" fill="none" stroke="var(--tl3)" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          </div></div>
          <div className="sec-content">
            <div><span className="tag tag-pu">Claude · ChatGPT · Cursor</span></div>
            <div>
              <div className="sl">06 — MCP Server</div>
              <h2 className="sh">Talk to your<br />SEO data.</h2>
              <p className="ss">Connect Claude, ChatGPT, or Cursor to your SERP-Pulse account. Ask any SEO question in plain English — get instant answers from your actual live data, powered by 16 custom tools.</p>
            </div>
            <div className="sec-checks">
              <div className="check">16 tools: queries, pages, AI traffic, GA4, reports, annotations</div>
              <div className="check">Works with Claude Desktop, Claude Web, Cursor, any MCP client</div>
              <div className="check">Ask &ldquo;which pages need fixing?&rdquo; and get instant answers from live data</div>
              <div className="check">Long-lived API tokens — no reconnecting every week</div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
              <a href={`${APP}/signup?ref=homepage`} className="btn-h" style={{ fontSize: 13, padding: '10px 18px' }}>Try MCP Server <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              <a href="/features/mcp" style={{ fontSize: 13, color: 'var(--tl)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>MCP Server details →</a>
            </div>
          </div>
        </div></div>
      </section>

      {/* ── COMPETITOR TABLE ─────────────────────────────── */}
      <section style={{ padding: '96px 0', background: 'var(--bg)' }}>
        <div className="w">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="sl" style={{ justifyContent: 'center', display: 'flex' }}>Why SERP-Pulse</div>
            <h2 className="sh">Built for what other tools miss.</h2>
          </div>
          <div className="cmp-tbl-wrap">
            <table className="cmp-tbl">
              <thead><tr><th>Feature</th><th className="sp">SERP-Pulse</th><th>Agency Analytics</th><th>Databox</th><th>DashThis</th></tr></thead>
              <tbody>
                {[
                  ['GSC + GA4 unified in one view', true, false, false, false],
                  ['AI traffic tracking (ChatGPT, Claude, etc.)', true, false, false, false],
                  ['Smart filters (Sweet Spot, Quick Wins)', 'Built-in', false, false, false],
                  ['MCP Server (talk to your data)', true, false, false, false],
                  ['White-label PDF reports', true, 'Limited', true, true],
                  ['Growth monitoring dashboard', 'Smart mode', '~ Basic', false, '~ Basic'],
                  ['Starting price / month', '$20–$159/mo', '$149+/mo', '$49+/mo', '$47+/mo'],
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={i === 6 ? { fontWeight: 700, color: 'var(--ink)' } : {}}>{row[0]}</td>
                    <td className="sp-c">{typeof row[1] === 'boolean' ? (row[1] ? <span className="yes">Yes</span> : <span className="no">No</span>) : row[1] === 'Built-in' ? <span className="yes">Built-in</span> : row[1] === 'Smart mode' ? <span className="yes">Smart mode</span> : i === 6 ? <span className="cmp-badge">{row[1]}</span> : <span className="yes">{row[1]}</span>}</td>
                    {[row[2], row[3], row[4]].map((v, j) => (
                      <td key={j} style={i === 6 ? { color: 'var(--rd)', fontWeight: 600, textAlign: 'center' } : {}}>{typeof v === 'boolean' ? (v ? <span className="yes">Yes</span> : <span className="no">No</span>) : v === '~ Basic' || v === 'Limited' ? <span className="part">{v}</span> : v}</td>
                    ))}
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

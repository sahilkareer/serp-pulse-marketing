'use client'
import { useEffect, type ReactNode } from 'react'
import { ProgressBar, TOC, FAQ, ShareButtons } from './BlogInteractive'

const APP = 'https://app.serp-pulse.com'

interface Props {
  title: string
  excerpt: string
  category: string
  catLabel: string
  readTime: string
  publishedAt: string
  toc: { id: string; label: string }[]
  faqs: { q: string; a: string }[]
  pageUrl: string
  prevPost: { slug: string; title: string } | null
  nextPost: { slug: string; title: string } | null
  relatedPosts: { slug: string; title: string; category: string; catLabel: string; catClass: string; readTime: string; publishedAt: string }[]
  children: ReactNode
}

export default function BlogPostClient({
  title, excerpt, category, catLabel, readTime, publishedAt,
  toc, faqs, pageUrl, prevPost, nextPost, relatedPosts, children
}: Props) {

  // Reveal animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.bl-rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <ProgressBar />

      <article className="bp-ac">
        {/* Breadcrumb */}
        <nav className="bp-bread bl-rv">
          <a href="/blog">Blog</a>{' '}
          <span style={{ opacity: 0.4 }}>›</span>{' '}
          <a href="/blog">{catLabel}</a>{' '}
          <span style={{ opacity: 0.4 }}>›</span>{' '}
          <span style={{ color: 'var(--bl-text2)' }}>{title.length > 40 ? title.slice(0, 40) + '…' : title}</span>
        </nav>

        {/* Header */}
        <header className="bp-ah bl-rv">
          <div className="bp-ah-cat"><span className="bl-dot" /> {catLabel}</div>
          <h1>{title}</h1>
          <p className="bp-ah-sub">{excerpt}</p>
        </header>

        {/* Author bar */}
        <div className="bp-abar bl-rv">
          <div className="bp-av">SK</div>
          <div>
            <div className="bp-aname">Sahil Kareer</div>
            <div className="bp-ameta">
              {publishedAt && <span>{publishedAt}</span>}
              {readTime && <span>{readTime}</span>}
            </div>
          </div>
          <ShareButtons url={pageUrl} title={title} />
        </div>

        {/* TOC */}
        {toc.length > 0 && <TOC items={toc} />}

        {/* Body content */}
        <div className="bp-body">
          {children}
        </div>

        {/* Mid-article CTA */}
        <div className="bp-mcta-w bl-rv">
          <div className="bp-mcta">
            <h3>See your AI traffic in 30 seconds</h3>
            <p>SERP-Pulse automatically identifies traffic from 16+ AI platforms. No manual setup.</p>
            <a href={`${APP}/signup`} className="bl-btn-blue">Start free trial →</a>
            <p className="bp-nt">90-day free trial · No credit card · 2-minute setup</p>
          </div>
        </div>

        {/* FAQ */}
        {faqs.length > 0 && <FAQ items={faqs} />}

        {/* Author bio */}
        <div className="bp-bio bl-rv">
          <div className="bp-bio-av">SK</div>
          <div>
            <div className="bp-bio-n">Sahil Kareer</div>
            <div className="bp-bio-r">Founder &amp; Developer, SERP-Pulse</div>
            <p className="bp-bio-t">6+ years in SEO, analytics, and agency operations. Built SERP-Pulse to eliminate the scattered-tools problem and surface the AI traffic blind spot.</p>
            <div className="bp-bio-l">
              <a href="https://www.linkedin.com/in/sahil-kareer-5b9a71109/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="/about">About</a>
              <a href="/blog">All posts</a>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="bp-rel bl-rv">
            <h2>Keep reading</h2>
            <div className="bp-rg">
              {relatedPosts.map((rp) => (
                <div className="bp-rw" key={rp.slug}>
                  <a href={`/blog/${rp.slug}`} className="bp-rc">
                    <div className={`bp-rc-cat ${rp.catClass}`}>{rp.catLabel}</div>
                    <div className="bp-rc-t">{rp.title}</div>
                    <div className="bp-rc-m">{rp.readTime}{rp.publishedAt ? ` · ${rp.publishedAt}` : ''}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next */}
        {(prevPost || nextPost) && (
          <div className="bp-anav bl-rv">
            {prevPost ? (
              <a href={`/blog/${prevPost.slug}`} className="bp-nc">
                <div className="bp-nc-d">← Previous</div>
                <div className="bp-nc-t">{prevPost.title}</div>
              </a>
            ) : <div />}
            {nextPost ? (
              <a href={`/blog/${nextPost.slug}`} className="bp-nc next">
                <div className="bp-nc-d">Next →</div>
                <div className="bp-nc-t">{nextPost.title}</div>
              </a>
            ) : <div />}
          </div>
        )}
      </article>
    </>
  )
}

'use client'
import { useEffect, useRef, useState } from 'react'

/* ═══════════════════════════════════════════════════════════════════════════
   BLOG INTERACTIVITY — Client-side effects for listing + post pages
   ═══════════════════════════════════════════════════════════════════════════ */

/** Reveal-on-scroll: attach to any wrapper */
export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.bl-rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/** Tilt effect on mouse move */
export function useTilt(ref: React.RefObject<HTMLElement | null>, rx = 6, ry = 4) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `rotateY(${x * rx}deg) rotateX(${-y * ry}deg)`
    }
    const leave = () => { el.style.transform = '' }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
  }, [ref, rx, ry])
}

/** Particle spawner for featured card visual */
export function Particles({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const colors = ['rgba(59,130,246,0.4)', 'rgba(139,92,246,0.4)', 'rgba(96,165,250,0.3)']
    const iv = setInterval(() => {
      const p = document.createElement('div')
      p.className = 'bl-particle'
      const s = Math.random() * 3 + 1
      p.style.cssText = `width:${s}px;height:${s}px;background:${colors[Math.floor(Math.random() * 3)]};left:${Math.random() * 100}%;bottom:-10px;animation-duration:${Math.random() * 4 + 3}s;animation-delay:${Math.random() * 2}s`
      el.appendChild(p)
      setTimeout(() => p.remove(), 7000)
    }, 700)
    return () => clearInterval(iv)
  }, [containerRef])
  return null
}

/* ═══════════════════════════════════════════════════════════════════════════
   BLOG LISTING – Search + Pills filter wrapper
   ═══════════════════════════════════════════════════════════════════════════ */

export function BlogSearch({ onSearch }: { onSearch: (q: string) => void }) {
  return (
    <div className="bl-search-wrap bl-rv">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
      <input type="text" placeholder="Search articles..." onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}

export function BlogPills({ categories, active, onSelect }: { categories: string[]; active: string; onSelect: (c: string) => void }) {
  return (
    <div className="bl-pill-row bl-rv">
      {categories.map((c) => (
        <span key={c} className={`bl-pill${active === c ? ' active' : ''}`} onClick={() => onSelect(c)}>{c}</span>
      ))}
    </div>
  )
}


/* ═══════════════════════════════════════════════════════════════════════════
   BLOG POST – Progress bar
   ═══════════════════════════════════════════════════════════════════════════ */

export function ProgressBar() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement
      setWidth(Math.min((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100, 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="bp-progress">
      <div className="bp-progress-fill" style={{ width: `${width}%` }} />
    </div>
  )
}


/* ═══════════════════════════════════════════════════════════════════════════
   BLOG POST – TOC with active section tracking
   ═══════════════════════════════════════════════════════════════════════════ */

export function TOC({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id || '')

  useEffect(() => {
    const onScroll = () => {
      let current = items[0]?.id || ''
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top < 140) current = item.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  return (
    <div className="bp-toc bl-rv">
      <div className="bp-toc-h">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
        Table of contents
      </div>
      <div className="bp-toc-items">
        {items.map((item) => (
          <a
            key={item.id}
            className={`bp-ti${active === item.id ? ' act' : ''}`}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}


/* ═══════════════════════════════════════════════════════════════════════════
   BLOG POST – FAQ accordion
   ═══════════════════════════════════════════════════════════════════════════ */

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <div className="bp-faq-s bl-rv" id="s-faq">
      <h2>Frequently asked questions</h2>
      {items.map((item, i) => (
        <div key={i} className={`bp-fq${openIdx === i ? ' open' : ''}`}>
          <div className="bp-fq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
            {item.q}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
          <div className="bp-fq-a">{item.a}</div>
        </div>
      ))}
    </div>
  )
}


/* ═══════════════════════════════════════════════════════════════════════════
   BLOG POST – Share buttons
   ═══════════════════════════════════════════════════════════════════════════ */

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1500) }
  return (
    <div className="bp-shr">
      <button className="bp-sb" title={copied ? 'Copied!' : 'Copy link'} onClick={copy}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
      </button>
      <a className="bp-sb" title="LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
      </a>
      <a className="bp-sb" title="X" href={`https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      </a>
    </div>
  )
}


/* ═══════════════════════════════════════════════════════════════════════════
   BLOG LISTING – RevealInit (runs useReveal + returns null)
   ═══════════════════════════════════════════════════════════════════════════ */

export function RevealInit() {
  useReveal()
  return null
}

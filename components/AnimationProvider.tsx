'use client'
import { useEffect } from 'react'

// Eased counter animation — counts up from 0 to target when element enters viewport
function animateCounter(el: HTMLElement, target: number, suffix: string, duration = 1600) {
  const start = performance.now()
  const update = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - t, 3)
    const current = Math.round(eased * target)
    // Format with commas for large numbers
    el.textContent = current >= 1000
      ? current.toLocaleString() + suffix
      : current + suffix
    if (t < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

export default function AnimationProvider() {
  useEffect(() => {
    // ── Counter animation on stats ──────────────────────────────────
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const original = el.getAttribute('data-original') || el.textContent || ''

        // Parse "500+" → { target: 500, suffix: "+" }
        const match = original.match(/^([0-9.,]+)(.*)$/)
        if (!match) return

        const rawNum = match[1].replace(/,/g, '')
        // Handle decimals like "4.9"
        const isDecimal = rawNum.includes('.')
        const target = parseFloat(rawNum)
        const suffix = match[2]

        if (isNaN(target) || target === 0) return

        // Store original so re-entry doesn't recalculate from wrong value
        if (!el.getAttribute('data-original')) {
          el.setAttribute('data-original', original)
        }

        if (isDecimal) {
          // Animate decimal (e.g. 4.9/5)
          const start = performance.now()
          const update = (now: number) => {
            const t = Math.min((now - start) / 1600, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            const current = (eased * target).toFixed(1)
            el.textContent = current + suffix
            if (t < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
        } else {
          animateCounter(el, Math.round(target), suffix)
        }

        counterObs.unobserve(el)
      })
    }, { threshold: 0.6 })

    // Apply to trust bar and social proof numbers
    const selectors = '.pnn-n, .tr-n'
    document.querySelectorAll<HTMLElement>(selectors).forEach(el => {
      counterObs.observe(el)
    })

    // ── Parallax on hero gradient background ───────────────────────
    const heroGradient = document.querySelector<HTMLElement>('.hero-g')
    const handleScroll = () => {
      if (!heroGradient) return
      const y = window.scrollY
      heroGradient.style.transform = `translateX(-50%) translateY(${y * 0.25}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // ── Hover tilt on feature mock cards ──────────────────────────
    const TILT_FACTOR = 6 // degrees max
    const mocks = document.querySelectorAll<HTMLElement>('.dmock, .lmock')
    const tiltHandlers: Array<{ el: HTMLElement, enter: () => void, leave: () => void, move: (e: MouseEvent) => void }> = []

    mocks.forEach(el => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / (rect.width / 2)
        const dy = (e.clientY - cy) / (rect.height / 2)
        el.style.transform = `translateY(-6px) rotateX(${-dy * TILT_FACTOR}deg) rotateY(${dx * TILT_FACTOR}deg) scale(1.012)`
        el.style.transition = 'transform .1s ease'
      }
      const enter = () => { el.style.perspective = '800px' }
      const leave = () => {
        el.style.transform = ''
        el.style.transition = 'transform .45s cubic-bezier(0.22,1,0.36,1)'
      }

      el.addEventListener('mousemove', move)
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
      tiltHandlers.push({ el, enter, leave, move })
    })

    return () => {
      counterObs.disconnect()
      window.removeEventListener('scroll', handleScroll)
      tiltHandlers.forEach(({ el, enter, leave, move }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return null
}

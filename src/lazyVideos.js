// Plays the industry videos only while they are on screen, and pauses them otherwise.
if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target
      if (e.isIntersecting && !reduce) {
        v.muted = true
        const p = v.play()
        if (p && p.catch) p.catch(() => {})
      } else {
        v.pause()
      }
    })
  }, { rootMargin: '120px 0px', threshold: 0.15 })
  const seen = new WeakSet()
  const scan = () => document.querySelectorAll('video.industry-video').forEach((v) => {
    if (!seen.has(v)) { seen.add(v); io.observe(v) }
  })
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true })
  scan()
}
// Pauses CSS animations in sections that are off screen (saves CPU/GPU, mainly on phones).
if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  const secIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle('is-offscreen', !e.isIntersecting))
  }, { rootMargin: '150px 0px', threshold: 0 })
  const seenSec = new WeakSet()
  const scanSec = () => document.querySelectorAll('section, footer').forEach((s) => {
    if (!seenSec.has(s)) { seenSec.add(s); secIO.observe(s) }
  })
  new MutationObserver(scanSec).observe(document.documentElement, { childList: true, subtree: true })
  scanSec()
}
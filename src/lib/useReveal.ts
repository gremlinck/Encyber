import { useEffect } from 'react'

// Fades and lifts `.reveal` / `.line-fill` elements into view as they scroll in.
// Content stays visible without JavaScript: the hidden state is armed only here.
export function useReveal(dep: unknown) {
  useEffect(() => {
    const root = document.documentElement
    if (!('IntersectionObserver' in window)) return
    root.classList.add('reveal-on')
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    document.querySelectorAll('.reveal:not(.in), .line-fill:not(.in)').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

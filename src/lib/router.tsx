import { useEffect, useState, type ReactNode, type MouseEvent } from 'react'

export const routes = ['/', '/services', '/varo-ai', '/about', '/contact'] as const
export type Route = (typeof routes)[number]

const titles: Record<Route, string> = {
  '/': 'ENCYBER — OT Security Training, Assessments & Consulting',
  '/services': 'Services — OT Security Training, Assessments & Consulting · ENCYBER',
  '/varo-ai': 'Varo AI — Decision Intelligence for OT/ICS Security · ENCYBER',
  '/about': 'About ENCYBER',
  '/contact': 'Contact ENCYBER',
}

function normalize(pathname: string): Route {
  const p = pathname.replace(/\/+$/, '') || '/'
  return (routes as readonly string[]).includes(p) ? (p as Route) : '/'
}

function scrollToTarget(hash: string) {
  const el = hash ? document.getElementById(hash.slice(1)) : null
  if (el) el.scrollIntoView()
  else window.scrollTo(0, 0)
}

export function navigate(to: string) {
  const url = new URL(to, window.location.origin)
  window.history.pushState({}, '', url.pathname + url.search + url.hash)
  window.dispatchEvent(new PopStateEvent('popstate'))
  // wait for the new page to render before scrolling to a section
  requestAnimationFrame(() => scrollToTarget(url.hash))
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => normalize(window.location.pathname))
  useEffect(() => {
    const onChange = () => setRoute(normalize(window.location.pathname))
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])
  useEffect(() => {
    document.title = titles[route]
  }, [route])
  useEffect(() => {
    if (window.location.hash) requestAnimationFrame(() => scrollToTarget(window.location.hash))
  }, [])
  return route
}

interface LinkProps {
  to: string
  className?: string
  children: ReactNode
  onClick?: () => void
  'aria-label'?: string
  'aria-current'?: 'page' | undefined
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    onClick?.()
    navigate(to)
  }
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  )
}

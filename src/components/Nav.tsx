import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, type Route } from '../lib/router'

const links: { label: string; to: string; route?: Route }[] = [
  { label: 'About', to: '/about', route: '/about' },
  { label: 'Services', to: '/services', route: '/services' },
  { label: 'Solutions', to: '/#solutions' },
  { label: 'Products', to: '/products', route: '/products' },
  { label: 'Contact', to: '/contact', route: '/contact' },
]

export default function Nav({ route }: { route: Route }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [route])

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="ENCYBER home">
          ENCYBER<span>.</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {links.map(l => (
            <Link key={l.label} to={l.to} className="nav-link" aria-current={l.route && route === l.route ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <Link to="/ko" className="lang-pill" aria-label="한국어">KO</Link>
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta">Talk to an expert</Link>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {links.map(l => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link to="/ko" onClick={() => setOpen(false)}>한국어</Link>
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>Talk to an expert</Link>
        </nav>
      )}
    </header>
  )
}

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import EncyberLogo from './EncyberLogo'
import { Link, type Route } from '../lib/router'

const links: { label: string; to: Route }[] = [
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
]

export default function Nav({ route }: { route: Route }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [route])

  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="wrap nav-inner">
          <Link to="/" className="brand" aria-label="ENCYBER home" onClick={() => setOpen(false)}>
            <EncyberLogo size={28} darkBg />
            ENCYBER
          </Link>
          <div className="nav-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="nav-link" aria-current={route === l.to ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary btn-sm">Contact us</Link>
          </div>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="nav-mobile">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>Contact us</Link>
        </div>
      )}
    </>
  )
}

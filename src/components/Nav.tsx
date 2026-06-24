import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import EncyberLogo from './EncyberLogo'

type Page = 'home' | 'varo-ai' | 'about' | 'contact'

interface NavProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Nav({ currentPage, onNavigate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links: { label: string; page: Page }[] = [
    { label: 'Varo AI', page: 'varo-ai' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ]

  const navigate = (page: Page) => {
    onNavigate(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 68,
        background: 'rgba(20,20,19,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(220,40,60,0.1)',
        display: 'flex', alignItems: 'center',
        padding: '0 5vw',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px 0',
          }}
          aria-label="ENCYBER home"
        >
          <EncyberLogo size={28} darkBg />
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800, fontSize: 17,
            color: '#ffffff', letterSpacing: '-0.02em',
          }}>
            ENCYBER
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {links.map(link => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: 14, fontWeight: 400,
                color: currentPage === link.page ? '#ffffff' : 'var(--mid-gray)',
                borderBottom: currentPage === link.page ? '2px solid var(--red)' : '2px solid transparent',
                paddingBottom: 2,
                transition: 'color .2s',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            style={{
              background: 'var(--red)',
              color: '#ffffff',
              fontFamily: 'var(--font-sans)',
              fontSize: 13, fontWeight: 600,
              padding: '9px 20px',
              borderRadius: 8, border: 'none', cursor: 'pointer',
              transition: 'background .2s, transform .15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8404C')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
          >
            Request a demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--mid-gray)', padding: 4,
            display: 'none',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(0,0,0,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 32,
        }}>
          {links.map(link => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: 28, fontWeight: 700,
                color: currentPage === link.page ? 'var(--red)' : '#ffffff',
                letterSpacing: '-0.03em',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            style={{
              marginTop: 16,
              background: 'var(--red)', color: '#ffffff',
              fontFamily: 'var(--font-sans)',
              fontSize: 15, fontWeight: 600,
              padding: '14px 36px', borderRadius: 10, border: 'none', cursor: 'pointer',
            }}
          >
            Request a demo
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

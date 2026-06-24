import EncyberLogo from './EncyberLogo'

type Page = 'home' | 'varo-ai' | 'about' | 'contact'

interface FooterProps {
  onNavigate: (page: Page) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const nav = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '52px 5vw 36px',
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 40,
        marginBottom: 40,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <EncyberLogo size={28} darkBg />
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16,
              color: '#ffffff', letterSpacing: '-0.02em',
            }}>ENCYBER</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'rgba(176,174,165,0.5)', lineHeight: 1.7,
          }}>
            Pioneering Cybersecurity<br />for Critical Technologies
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            color: 'rgba(176,174,165,0.35)', marginTop: 12,
          }}>
            © 2026 Encyber Inc.<br />Busan, Republic of Korea
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: '.14em', color: 'rgba(176,174,165,0.45)',
            textTransform: 'uppercase', marginBottom: 16,
          }}>Navigation</p>
          {(['home','varo-ai','about','contact'] as Page[]).map(page => (
            <button
              key={page}
              onClick={() => nav(page)}
              style={{
                display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300,
                color: 'var(--mid-gray)', marginBottom: 10, padding: 0,
                transition: 'color .2s',
                textAlign: 'left',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--mid-gray)')}
            >
              {page === 'home' ? 'Home' : page === 'varo-ai' ? 'Varo AI' : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>

        {/* Contact & Recognition */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: '.14em', color: 'rgba(176,174,165,0.45)',
            textTransform: 'uppercase', marginBottom: 16,
          }}>Contact</p>
          <a
            href="mailto:demo@encyberr.com"
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400,
              color: 'var(--red)', display: 'block', marginBottom: 20,
            }}
          >
            demo@encyberr.com
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Lighthouse Network 2026',
              'SelectUSA Finalist',
              '2 Patents Pending',
              'Built on Claude · Powered by Azure',
            ].map(b => (
              <span
                key={b}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  padding: '4px 10px', borderRadius: 20,
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(176,174,165,0.55)', letterSpacing: '.04em',
                  display: 'inline-block', width: 'fit-content',
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: 20,
        textAlign: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 10,
        color: 'rgba(176,174,165,0.25)', letterSpacing: '.06em',
      }}>
        Varo AI is a product of Encyber Inc. · OT/ICS Security Decision Intelligence
      </div>
    </footer>
  )
}

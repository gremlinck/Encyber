import { Link } from '../lib/router'

export const EMAIL = 'info@encyberr.com'
export const LINKEDIN = 'https://www.linkedin.com/company/encyber/'

export function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="lead-col">
          <div className="brand">ENCYBER<span>.</span></div>
          <p>Cybersecurity for industrial and enterprise environments — services, training and AI.</p>
        </div>
        <div>
          <div className="k">COMPANY</div>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <div className="k">OFFER</div>
          <Link to="/services">Services</Link>
          <Link to="/#solutions">Solutions</Link>
          <Link to="/products">Varo AI</Link>
        </div>
        <div style={{ maxWidth: 300 }}>
          <div className="k">OFFICE</div>
          <span style={{ lineHeight: 1.6 }}>Seoul, South Korea</span>
          <span>Richmond, Virginia, USA</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="Encyber on LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink)', fontWeight: 500 }}><LinkedInIcon />LinkedIn</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Encyber Co., Ltd.</span>
        <span>IT · OT · ICS Security</span>
      </div>
    </footer>
  )
}

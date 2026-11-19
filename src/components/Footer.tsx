import { Link } from '../lib/router'

export const EMAIL = 'info@encyberr.com'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="lead-col">
          <div className="brand">ENCYBER<span>.</span></div>
          <p>OT/ICS security training, assessments and consulting for critical infrastructure.</p>
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
          <span>Richmond, Virginia</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Encyber Co., Ltd.</span>
        <span>OT / ICS Security</span>
      </div>
    </footer>
  )
}

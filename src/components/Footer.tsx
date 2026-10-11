import EncyberLogo from './EncyberLogo'
import { Link } from '../lib/router'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link to="/" className="brand" aria-label="ENCYBER home">
              <EncyberLogo size={26} darkBg />
              ENCYBER
            </Link>
            <p className="tagline">Pioneering Cybersecurity<br />for Critical Technologies</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <Link to="/services">Services</Link>
            <Link to="/varo-ai">Varo AI</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Encyber Co., Ltd. · Busan, Republic of Korea</span>
          <a href="mailto:demo@encyberr.com">demo@encyberr.com</a>
        </div>
      </div>
    </footer>
  )
}

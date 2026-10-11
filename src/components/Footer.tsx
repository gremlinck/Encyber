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
          <nav className="footer-col" aria-label="Offerings">
            <h4>Offerings</h4>
            <Link to="/services#training">Training</Link>
            <Link to="/services#assessments">Vulnerability assessments</Link>
            <Link to="/services#consulting">Consulting</Link>
            <Link to="/products">Varo AI</Link>
          </nav>
          <nav className="footer-col" aria-label="Company">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/contact">Contact us</Link>
          </nav>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:demo@encyberr.com">demo@encyberr.com</a>
            <span>Busan, Republic of Korea</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Encyber Co., Ltd. · All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

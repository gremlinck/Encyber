import { useState } from 'react'
import { X } from 'lucide-react'
import { Link } from '../lib/router'

export default function Announcement() {
  const [show, setShow] = useState(() => {
    try { return sessionStorage.getItem('announce-dismissed') !== '1' } catch { return true }
  })
  const dismiss = () => {
    setShow(false)
    try { sessionStorage.setItem('announce-dismissed', '1') } catch { /* storage unavailable */ }
  }
  if (!show) return null
  return (
    <div className="announce" role="region" aria-label="Announcement">
      <div className="gridbg" aria-hidden="true" />
      <div className="announce-inner">
        <span className="announce-tag">COMING SOON</span>
        <span>Encyber is evolving — a new chapter is on the way.</span>
        <Link to="/contact">Get updates →</Link>
        <button className="announce-close" onClick={dismiss} aria-label="Dismiss announcement">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

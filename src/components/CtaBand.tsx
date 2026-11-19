import { Link } from '../lib/router'
import Orbit from './Orbit'

export default function CtaBand({ title, action = 'Book an assessment call' }: { title: string; action?: string }) {
  return (
    <section className="cta">
      <div className="gridbg" aria-hidden="true" />
      <Orbit size={420} style={{ right: '6%', top: '50%', marginTop: -210 }} />
      <div className="wrap cta-inner reveal">
        <h2 style={{ whiteSpace: 'pre-line' }}>{title}</h2>
        <Link to="/contact" className="btn btn-light">{action}</Link>
      </div>
    </section>
  )
}

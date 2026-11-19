import { Link } from '../lib/router'

export default function CtaBand({ title, action = 'Book an assessment call' }: { title: string; action?: string }) {
  return (
    <section className="cta">
      <div className="gridbg" aria-hidden="true" />
      <div className="wrap cta-inner reveal">
        <h2>{title}</h2>
        <Link to="/contact" className="btn btn-light">{action}</Link>
      </div>
    </section>
  )
}

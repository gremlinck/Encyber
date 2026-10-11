import { ArrowRight } from 'lucide-react'
import { Link } from '../lib/router'

interface CtaBandProps {
  heading: string
  body: string
  label?: string
  to?: string
}

export default function CtaBand({ heading, body, label = 'Contact us', to = '/contact' }: CtaBandProps) {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div>
          <h2>{heading}</h2>
          <p>{body}</p>
        </div>
        <Link to={to} className="btn btn-primary">{label} <ArrowRight size={16} /></Link>
      </div>
    </section>
  )
}

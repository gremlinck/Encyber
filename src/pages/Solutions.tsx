import { ArrowRight } from 'lucide-react'
import { Link } from '../lib/router'
import CtaBand from '../components/CtaBand'

const challenges = [
  {
    title: 'Workforce readiness',
    body: 'Your engineers and operators are the first line of defense, but most have never practiced responding to a cyber incident.',
    link: 'OT security training', to: '/services#training',
  },
  {
    title: 'Risk visibility',
    body: 'You need to know where your OT environment is exposed and which gaps put safety and uptime at risk.',
    link: 'Vulnerability assessments', to: '/services#assessments',
  },
  {
    title: 'Standards and compliance',
    body: 'IEC 62443, NIST CSF and NERC CIP set the bar. You need a realistic path to meet it.',
    link: 'Security consulting', to: '/services#consulting',
  },
  {
    title: 'Alert overload',
    body: 'Your detection tools raise more alerts than your team can judge. You need to know which ones to act on.',
    link: 'Varo AI', to: '/products',
  },
]

const industries = [
  { name: 'Energy & utilities', body: 'Generation, transmission and distribution operators, including co-ops and municipal utilities.' },
  { name: 'Water', body: 'Treatment and distribution systems run by small teams with limited security staff.' },
  { name: 'Manufacturing', body: 'Production lines where downtime is measured by the minute.' },
  { name: 'Ports & logistics', body: 'Terminals and cargo systems that connect operational and business networks.' },
  { name: 'Healthcare', body: 'Hospital facilities and building systems that have to stay available around the clock.' },
]

export default function Solutions() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">Solutions</div>
          <h1>Start from the problem you need solved.</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>By challenge</h2>
          </div>
          <div className="grid-2x2">
            {challenges.map(c => (
              <Link key={c.title} to={c.to} className="card">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="text-link">{c.link} <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-line">
        <div className="wrap">
          <div className="section-head">
            <h2>By industry</h2>
          </div>
          <ul className="industries">
            {industries.map(i => (
              <li key={i.name}>
                <strong>{i.name}</strong>
                <span>{i.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        heading="Tell us what you're facing."
        body="We'll point you to the right service or product."
      />
    </>
  )
}

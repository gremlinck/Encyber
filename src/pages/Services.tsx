import { ArrowRight, Check } from 'lucide-react'
import { Link } from '../lib/router'
import CtaBand from '../components/CtaBand'

const services = [
  {
    id: 'training',
    title: 'OT security training',
    body: 'Most incidents in industrial environments are decided by how people respond in the first hour. We run hands-on, scenario-based training so your team has practiced before it counts.',
    label: 'What it covers',
    items: [
      'OT/ICS security fundamentals for engineers and operators',
      'Hands-on attack and defense exercises in simulated industrial environments',
      'Incident response drills for IT and OT teams working together',
      'Executive and management sessions on OT risk',
    ],
    interest: 'training',
  },
  {
    id: 'assessments',
    title: 'Vulnerability assessments',
    body: 'We review your OT environment the way an attacker would, without disrupting operations, and show you which gaps matter most to safety and uptime.',
    label: 'What you get',
    items: [
      'Review of OT assets, network architecture and IT/OT segmentation',
      'Findings ranked by operational risk, not just severity scores',
      'A remediation roadmap your team can act on',
      'Alignment with IEC 62443, NIST CSF and NERC CIP',
    ],
    interest: 'assessment',
  },
  {
    id: 'consulting',
    title: 'Security consulting',
    body: 'For teams without a dedicated OT security lead, or with one who needs backup. We help you set priorities, make decisions and move the program forward.',
    label: 'Where we help',
    items: [
      'OT security strategy and program planning',
      'Standards and compliance readiness',
      'Incident response planning for industrial environments',
      'Evaluating and selecting OT security tools',
    ],
    interest: 'consulting',
  },
]

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">Services</div>
          <h1>Training, assessments and consulting for OT environments.</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {services.map(s => (
            <article key={s.id} id={s.id} className="service">
              <div>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
                <Link to={`/contact?interest=${s.interest}`} className="btn btn-outline">
                  Ask about {s.title.toLowerCase().replace('ot ', 'OT ')} <ArrowRight size={16} />
                </Link>
              </div>
              <ul className="checklist">
                <li className="checklist-label" style={{ borderBottom: 'none' }}>{s.label}</li>
                {s.items.map(item => (
                  <li key={item}><Check size={17} />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-line">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How we work</div>
            <h2>Simple to start.</h2>
          </div>
          <ol className="steps">
            <li>
              <h3>Scoping call</h3>
              <p>We learn about your environment, your team and what is driving the need.</p>
            </li>
            <li>
              <h3>Proposal</h3>
              <p>You get a clear scope, schedule and price. No surprises.</p>
            </li>
            <li>
              <h3>Delivery</h3>
              <p>We deliver on site or remotely, together with specialist OT security partners where it adds depth.</p>
            </li>
          </ol>
        </div>
      </section>

      <CtaBand
        heading="Let's scope it together."
        body="A short call is enough to find out whether we're a fit."
      />
    </>
  )
}

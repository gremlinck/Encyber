import { ArrowRight, GraduationCap, SearchCheck, Compass, Cpu, Zap, Droplets, Factory, Ship, HeartPulse } from 'lucide-react'
import { Link } from '../lib/router'
import CtaBand from '../components/CtaBand'

const offerings = [
  {
    icon: <GraduationCap size={22} />,
    title: 'Training',
    body: 'Hands-on, scenario-based OT security training for engineers, operators and security teams.',
    to: '/services#training',
  },
  {
    icon: <SearchCheck size={22} />,
    title: 'Vulnerability assessments',
    body: 'Where your OT environment is exposed, ranked by operational risk, with a plan to fix it.',
    to: '/services#assessments',
  },
  {
    icon: <Compass size={22} />,
    title: 'Consulting',
    body: 'Senior guidance on OT security strategy, standards and incident readiness.',
    to: '/services#consulting',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Varo AI',
    body: 'Our product. Turns a stream of industrial alerts into one clear, prioritized action.',
    to: '/products',
  },
]

const reasons = [
  { title: 'OT first', body: 'Everything we do starts from how industrial systems work, not from IT security adapted to fit.' },
  { title: 'Built around operations', body: 'Uptime and safety come first. Our work is planned so it never gets in the way of running the plant.' },
  { title: 'Vendor-neutral', body: 'We work with the tools and platforms you already own. No rip and replace.' },
  { title: 'People to technology', body: 'Training, assessment, advice and product from one team, so nothing falls between suppliers.' },
]

const industries = [
  { icon: <Zap size={24} />, name: 'Energy' },
  { icon: <Droplets size={24} />, name: 'Water utilities' },
  { icon: <Factory size={24} />, name: 'Manufacturing' },
  { icon: <Ship size={24} />, name: 'Ports & transportation' },
  { icon: <HeartPulse size={24} />, name: 'Healthcare' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">OT / ICS Cybersecurity</div>
          <h1>Practical security for the systems that <em>can't go down.</em></h1>
          <p className="lead">
            Training, vulnerability assessments, consulting and decision intelligence for the organizations that run critical infrastructure.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Contact us <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn btn-ghost">See our services</Link>
          </div>
        </div>
      </section>

      <section className="section-tight intro">
        <div className="wrap wrap-narrow">
          <h2>OT cybersecurity for critical infrastructure</h2>
          <p>
            Power grids, water plants, factories, ports and hospitals run on operational technology that is more connected, and more targeted, every year. ENCYBER helps the teams responsible for it get ready, find their gaps and respond with confidence.
          </p>
        </div>
      </section>

      <section className="section section-line">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What we offer</div>
            <h2>End-to-end OT security.</h2>
          </div>
          <div className="grid-4">
            {offerings.map(o => (
              <Link key={o.title} to={o.to} className="card">
                <div className="card-icon">{o.icon}</div>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <span className="text-link">Read more <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why us</div>
            <h2>Why ENCYBER</h2>
          </div>
          <div className="grid-4 reasons">
            {reasons.map(r => (
              <div key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Industries</div>
            <h2>Industries we work with</h2>
          </div>
          <div className="tiles">
            {industries.map(i => (
              <Link key={i.name} to="/solutions#industries" className="tile">
                {i.icon}
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Secure your operations with ENCYBER."
        body="Tell us about your environment. We'll suggest a sensible first step."
      />
    </>
  )
}

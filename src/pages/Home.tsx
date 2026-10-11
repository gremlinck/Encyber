import { ArrowRight, GraduationCap, SearchCheck, Compass } from 'lucide-react'
import { Link } from '../lib/router'
import CtaBand from '../components/CtaBand'

const services = [
  {
    icon: <GraduationCap size={22} />,
    title: 'OT security training',
    body: 'Hands-on, scenario-based training that prepares engineers, operators and security teams for real incidents in industrial environments.',
    to: '/services#training',
  },
  {
    icon: <SearchCheck size={22} />,
    title: 'Vulnerability assessments',
    body: 'A clear picture of where your OT environment is exposed, with findings ranked by operational risk and a practical plan to fix them.',
    to: '/services#assessments',
  },
  {
    icon: <Compass size={22} />,
    title: 'Security consulting',
    body: 'Senior guidance on OT security strategy, standards and incident readiness, sized to the team and budget you actually have.',
    to: '/services#consulting',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">OT / ICS Cybersecurity</div>
          <h1>Practical security for the systems that <em>can't go down.</em></h1>
          <p className="lead">
            ENCYBER helps critical infrastructure operators train their people, find their weak points and build an OT security program that holds up.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Talk to us <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn btn-ghost">See our services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What we do</div>
            <h2>Three ways we work with you.</h2>
          </div>
          <div className="grid-3">
            {services.map(s => (
              <Link key={s.title} to={s.to} className="card">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="text-link">Learn more <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-line">
        <div className="wrap grid-2">
          <div>
            <div className="eyebrow">Who it's for</div>
            <h2>Built for operators, not just security teams.</h2>
          </div>
          <div>
            <p>
              Industrial environments run on different rules than IT. Uptime and safety come first, equipment stays in service for decades, and many teams have no dedicated OT security staff. Our work starts from how your plant actually operates.
            </p>
            <div className="sectors">
              {['Energy & utilities', 'Water', 'Manufacturing', 'Ports & logistics', 'Healthcare'].map(s => (
                <span key={s} className="sector">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-line">
        <div className="wrap product-band">
          <div>
            <div className="eyebrow">Our product</div>
            <h2>Varo AI</h2>
            <p>
              Decision intelligence for OT security. Varo AI sits above the detection tools you already own and turns a stream of industrial alerts into one clear, prioritized action, with the reasoning attached.
            </p>
          </div>
          <div>
            <Link to="/varo-ai" className="btn btn-outline">Explore Varo AI <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not sure where to start?"
        body="Tell us about your environment. We'll suggest a sensible first step."
      />
    </>
  )
}

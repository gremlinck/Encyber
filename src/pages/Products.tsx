import { ArrowRight } from 'lucide-react'
import { Link } from '../lib/router'
import AlertTerminal from '../components/AlertTerminal'
import CtaBand from '../components/CtaBand'

const loop = [
  { letter: 'A', name: 'Analyze', desc: 'Takes in alerts from the OT security tools you already run.' },
  { letter: 'G', name: 'Ground', desc: "Adds your plant's context: asset criticality, network zone, process state and maintenance windows." },
  { letter: 'E', name: 'Evaluate', desc: 'Specialized AI agents assess the threat, the likely impact and whether it is a false positive.' },
  { letter: 'N', name: 'Narrate', desc: 'Explains the decision in plain language, with the full reasoning attached.' },
  { letter: 'T', name: 'Triage', desc: 'Returns one of three outcomes: act now, monitor, or routine.' },
]

export default function Products() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Products · Varo AI</div>
          <h1>Stop triaging alerts. <em>Start making decisions.</em></h1>
          <p className="lead">
            Varo AI sits above your existing OT security stack and turns every industrial alert into one clear, prioritized action, with the reasoning attached.
          </p>
          <div className="hero-actions">
            <Link to="/contact?interest=varo" className="btn btn-primary">Request a demo <ArrowRight size={16} /></Link>
          </div>
          <div className="terminal-wrap">
            <AlertTerminal />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <div className="eyebrow">The problem</div>
            <h2>Detection tools tell you what happened. Not what to do.</h2>
          </div>
          <div>
            <p>
              OT security platforms are good at raising alerts. Deciding which ones matter still falls to engineers who have to interpret, correlate and prioritize under pressure, often without a dedicated OT security team. Varo AI is the judgment layer that does that work with them.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-line">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>The A.G.E.N.T. Loop</h2>
            <p className="lead">A multi-agent reasoning framework built for industrial environments.</p>
          </div>
          <ol className="loop">
            {loop.map(s => (
              <li key={s.letter}>
                <span className="letter">{s.letter}</span>
                <span className="name">{s.name}</span>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-line">
        <div className="wrap grid-2">
          <div>
            <div className="eyebrow">Fits your stack</div>
            <h2>Works above the tools you already own.</h2>
          </div>
          <div>
            <p>Varo AI is vendor-neutral. Your detection platform stays in place. Nothing to rip out and replace.</p>
            <div className="tags">
              {['Dragos', 'Claroty', 'Nozomi Networks', 'SIEM'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <p className="note">2 patents pending</p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="See Varo AI in action."
        body="A 30-minute working session with the ENCYBER team."
        label="Request a demo"
        to="/contact?interest=varo"
      />
    </>
  )
}

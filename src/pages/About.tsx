import Orbit from '../components/Orbit'
import CtaBand from '../components/CtaBand'

const whatWeDo = [
  { k: 'Services', t: 'Assess, test and harden', d: 'Penetration testing, red teaming, application security, OT assessments and compliance readiness — across IT and OT.' },
  { k: 'Products', t: 'EnguardX and Varo AI', d: 'EnguardX builds hands-on OT security skills. Varo AI turns OT alerts into clear decisions.' },
  { k: 'Partners', t: 'Global depth, one lead', d: 'We bring in established global training and offensive-security teams, with Encyber as your single point of contact.' },
]

const principles = [
  { t: 'Safety before scans', d: 'Production keeps running. We use passive, non-intrusive methods first.' },
  { t: 'Evidence over fear', d: 'Findings come with proof and a priority, not a list of worst cases.' },
  { t: 'Skills that stay', d: 'We train your people so capability remains after we leave.' },
  { t: 'Decisions, not noise', d: 'Fewer, clearer actions beat more alerts and dashboards.' },
]

export default function About() {
  return (
    <>
      <section className="hero dark page-hero">
        <div className="gridbg" aria-hidden="true" />
        <div className="orb" aria-hidden="true" style={{ width: 900, height: 900, right: -260, top: -380 }} />
        <Orbit size={600} style={{ right: -160, top: -40 }} />
        <div className="wrap hero-inner">
          <div className="eyebrow rise d1" style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span className="pulse" />About Encyber</div>
          <h1 className="rise d2">We protect the operations <b>society depends on<span className="dot">.</span></b></h1>
          <p className="lead rise d3" style={{ maxWidth: 760 }}>Encyber secures industrial and enterprise environments, with deep OT/ICS expertise. We help organisations — from ports and utilities to factories and corporate IT — see their risk clearly, build teams that can respond, and make faster security decisions.</p>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 56 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          <div className="head reveal">
            <div className="eyebrow">What we do</div>
            <h2 className="h2">Services, products and partners<br /><b>— in one place<span className="dot">.</span></b></h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {whatWeDo.map(w => (
              <div key={w.k} className="card reveal" style={{ padding: '32px 28px', gap: 12 }}>
                <div className="eyebrow" style={{ fontSize: 12 }}>{w.k}</div>
                <h3 style={{ fontSize: 24 }}>{w.t}</h3>
                <p className="body">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          <div className="head reveal">
            <div className="eyebrow">What we believe</div>
            <h2 className="h2">Four principles<br /><b>behind every engagement<span className="dot">.</span></b></h2>
          </div>
          <div className="steps">
            {principles.map((p, i) => (
              <div key={p.t} className="principle reveal">
                <span className="n">0{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #F3F7FA 0%, #E8F1F5 100%)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="gridbg" aria-hidden="true" />
        <div className="wrap split" style={{ position: 'relative', alignItems: 'center' }}>
          <div className="col reveal">
            <div className="eyebrow">Where we focus</div>
            <h2 className="h2">U.S. critical infrastructure, <b>starting with ports<span className="dot">.</span></b></h2>
            <p className="lead">New maritime cyber rules make port facilities our first priority, alongside energy, manufacturing, healthcare facilities and the AI data centers now joining the grid.</p>
          </div>
          <div className="col reveal" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            <span className="chip lead">Ports &amp; Maritime</span>
            <span className="chip">Energy &amp; Utilities</span>
            <span className="chip">Manufacturing</span>
            <span className="chip">Healthcare Facilities</span>
            <span className="chip">AI Data Centers</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
            <div className="eyebrow">Offices</div>
            <h2 className="h2" style={{ fontSize: 36 }}>Two hubs, <b>one team<span className="dot">.</span></b></h2>
          </div>
          <div className="card reveal" style={{ padding: 28, gap: 6 }}><div className="eyebrow" style={{ fontSize: 12 }}>USA</div><span style={{ fontSize: 24, fontWeight: 600 }}>Richmond, Virginia</span></div>
          <div className="card reveal" style={{ padding: 28, gap: 6 }}><div className="eyebrow" style={{ fontSize: 12 }}>South Korea</div><span style={{ fontSize: 24, fontWeight: 600 }}>Seoul</span></div>
        </div>
      </section>

      <CtaBand title="Ready to talk? Let's look at your environment together." action="Talk to an expert" />
    </>
  )
}

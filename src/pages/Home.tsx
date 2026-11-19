import { useEffect, useRef, useState } from 'react'
import { Link } from '../lib/router'
import CtaBand from '../components/CtaBand'

const levels = [
  { name: 'L4 · Enterprise IT', tag: 'segmented', color: 'var(--green)', risk: false, detail: 'Corporate network is separated from operations by a managed firewall.' },
  { name: 'L3.5 · Industrial DMZ', tag: 'segmented', color: 'var(--green)', risk: false, detail: 'Data historian mirrored through the DMZ; no direct IT-to-OT paths found.' },
  { name: 'L3 · Site operations', tag: 'remote access exposed', color: 'var(--red-soft)', risk: true, detail: 'Vendor VPN reaches operations servers without multi-factor authentication.' },
  { name: 'L2 · Supervisory · HMI / SCADA', tag: 'review', color: 'var(--amber)', risk: false, detail: 'Shared operator accounts on HMI workstations make actions hard to trace.' },
  { name: 'L1 · Controllers · PLC', tag: 'default credentials', color: 'var(--red-soft)', risk: true, detail: 'Controllers still accept factory-default credentials for programming access.' },
  { name: 'L0 · Field devices', tag: 'passive only', color: 'var(--mono-dark)', risk: false, detail: 'Observed passively. No packets were sent to field devices.' },
]

const services = [
  { n: '01', t: 'OT/ICS Security Training', d: 'Hands-on cyber range and portable OT testbeds for operators, engineers and SOC teams.', id: 'training' },
  { n: '02', t: 'OT Vulnerability Assessments', d: 'Non-intrusive plant assessments that map assets, exposure and risk without touching production.', id: 'assessments' },
  { n: '03', t: 'Offensive Security', d: 'Penetration testing and red teaming across IT/OT boundaries, scoped for safety-critical environments.', id: 'offensive' },
  { n: '04', t: 'Security Consulting', d: 'Program design, regulatory readiness and roadmaps for OT and enterprise security leaders.', id: 'consulting' },
]

const steps = [
  { t: 'Assess', d: 'Know what you run and where it is exposed.' },
  { t: 'Train', d: 'Build the skills to detect and respond on the plant floor.' },
  { t: 'Harden', d: 'Close the gaps that matter most, in order of risk.' },
  { t: 'Sustain', d: 'Keep pace with threats and regulation year-round.' },
]

const industries = ['PORTS & MARITIME', 'ENERGY & UTILITIES', 'MANUFACTURING', 'HEALTHCARE FACILITIES', 'AI DATA CENTERS', 'WATER SYSTEMS']

function PurduePanel() {
  const [sel, setSel] = useState(2)
  return (
    <div className="purdue rise d4">
      <div className="scan" aria-hidden="true" />
      <div className="purdue-top"><span>PLANT NETWORK · PURDUE VIEW</span><b>● 2 FINDINGS</b></div>
      {levels.map((l, i) => (
        <button key={l.name} type="button" className={`lvl${l.risk ? ' risk' : ''}`} aria-pressed={sel === i} onClick={() => setSel(i)}>
          <span>{l.name}</span><span style={{ color: l.color }}>{l.tag}</span>
        </button>
      ))}
      <div className="purdue-detail" aria-live="polite">
        <small>{levels[sel].name.toUpperCase()}</small>
        <p>{levels[sel].detail}</p>
      </div>
      <div className="note">Sample findings · click a level</div>
    </div>
  )
}

function Triage() {
  const [count, setCount] = useState(142)
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const timer = useRef<number | null>(null)
  useEffect(() => () => { if (timer.current) clearInterval(timer.current) }, [])

  const run = () => {
    if (phase === 'running') return
    setPhase('running')
    let c = 142
    setCount(c)
    timer.current = window.setInterval(() => {
      c = Math.max(3, Math.round(c - Math.max(1, (c - 3) * 0.12)))
      setCount(c)
      if (c <= 3) {
        if (timer.current) clearInterval(timer.current)
        timer.current = null
        setPhase('done')
      }
    }, 60)
  }

  const status = phase === 'idle' ? 'READY' : phase === 'running' ? 'WEIGHING CONTEXT…' : '3 DECISIONS'
  return (
    <div className="triage">
      <div className="tbox"><span style={{ color: 'var(--mono-dark)' }}>ALERTS FROM DETECTION</span><span className="count" aria-live="polite">{count}</span></div>
      <div className="flowlane" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <div className="tbox tbox-red">
        <span>VARO AI · {status}</span>
        <button type="button" onClick={run} disabled={phase === 'running'}>{phase === 'done' ? 'REPLAY' : phase === 'running' ? 'RUNNING' : 'RUN TRIAGE'}</button>
      </div>
      {phase === 'done' && (
        <div className="decisions">
          <div className="decision rise d1"><span>Isolate vendor VPN session</span><span style={{ color: 'var(--red-soft)' }}>ACT NOW</span></div>
          <div className="decision rise d2"><span>Verify PLC logic change on Line 2</span><span style={{ color: 'var(--amber)' }}>TODAY</span></div>
          <div className="decision rise d3"><span>Schedule HMI patch window</span><span style={{ color: 'var(--green)' }}>THIS WEEK</span></div>
        </div>
      )}
      <div className="note" style={{ paddingTop: 12 }}>Illustrative example</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero dark">
        <div className="gridbg" aria-hidden="true" />
        <div className="orb" aria-hidden="true" style={{ width: 720, height: 720, right: -160, top: -200 }} />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <div className="eyebrow rise d1"><span className="pulse" />OT / ICS SECURITY SERVICES</div>
            <h1>
              <span className="rise d2">Secure the systems</span>{' '}
              <span className="rise d3">that keep operations</span>{' '}
              <span className="rise d4 accent">running.</span>
            </h1>
            <p className="lead rise d5" style={{ maxWidth: 560 }}>
              Training, assessments and consulting for ports, utilities, manufacturers and critical infrastructure — delivered by people who know the plant floor, not just the network.
            </p>
            <div className="hero-actions rise d6">
              <Link to="/contact" className="btn btn-primary">Book an assessment call</Link>
              <Link to="/services" className="btn btn-ghost">Explore services</Link>
            </div>
          </div>
          <PurduePanel />
        </div>
      </section>

      <section className="marquee-strip" aria-label="Industries we serve">
        <div className="marquee">
          {[0, 1].map(k => (
            <span key={k} style={{ display: 'contents' }} aria-hidden={k === 1}>
              <b>BUILT FOR</b>
              {industries.map(i => <span key={i}>{i}</span>)}
            </span>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 56 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 52 }}>
          <div className="head-row reveal">
            <div className="head">
              <div className="eyebrow">Services</div>
              <h2 className="h2">Four ways we harden your operations.</h2>
            </div>
            <Link to="/services" className="text-link">All services →</Link>
          </div>
          <div className="grid">
            {services.map(s => (
              <Link key={s.n} to={`/services#${s.id}`} className="card reveal">
                <div className="card-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p className="body">{s.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div className="eyebrow reveal">How we engage</div>
          <div className="line-track"><div className="line-fill" /></div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.t} className="step reveal">
                <div className="k">PHASE {i + 1}</div>
                <div className="t">{s.t}</div>
                <p className="body">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section section-alt">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 52 }}>
          <div className="head reveal">
            <div className="eyebrow">Solutions</div>
            <h2 className="h2">Security shaped around your industry.</h2>
          </div>
          <div className="tiles">
            <div className="tile tile-feature reveal">
              <div className="gridbg" aria-hidden="true" style={{ opacity: 0.7 }} />
              <div className="orb" aria-hidden="true" style={{ width: 420, height: 420, right: -140, bottom: -160 }} />
              <div className="eyebrow" style={{ color: 'var(--red-soft)', fontSize: 12 }}>Featured</div>
              <h3>Ports &amp; Maritime</h3>
              <p>Get ready for the U.S. Coast Guard's maritime cybersecurity rule — assessments, cyber incident response planning and crew training for terminals and port facilities.</p>
              <Link to="/contact">Start a readiness review →</Link>
            </div>
            <div className="tile reveal"><h3>Energy &amp; Utilities</h3><p className="body">Grid, generation and water systems where uptime is non-negotiable.</p></div>
            <div className="tile reveal"><h3>Manufacturing</h3><p className="body">Protect production lines, PLCs and supplier connections.</p></div>
            <div className="tile reveal"><h3>Healthcare Facilities</h3><p className="body">Building systems and connected medical infrastructure.</p></div>
            <div className="tile reveal"><h3>AI Data Centers</h3><p className="body">Power, cooling and facility controls behind AI compute.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="band dark reveal">
            <div className="gridbg" aria-hidden="true" />
            <div className="orb" aria-hidden="true" style={{ width: 560, height: 560, left: -200, top: -220 }} />
            <div className="col">
              <div className="eyebrow">Product · Varo AI</div>
              <h2 className="h2">The judgment layer for OT security alerts.</h2>
              <p>Varo AI sits above the OT detection platforms you already run and helps your team decide what matters, why, and what to do next.</p>
              <div className="hero-actions" style={{ paddingTop: 8 }}>
                <Link to="/products#demo" className="btn btn-primary">Request a demo</Link>
                <Link to="/products#how" className="btn btn-ghost">How it works</Link>
              </div>
            </div>
            <Triage />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 52 }}>
          <div className="head reveal" style={{ maxWidth: 780 }}>
            <div className="eyebrow">Why Encyber</div>
            <h2 className="h2">OT first. Never an IT playbook on the plant floor.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal"><h3>Safety before scans</h3><p>Passive, non-intrusive methods by default. Production keeps running while we work.</p></div>
            <div className="pillar reveal"><h3>Partner-delivered depth</h3><p>We bring in established global OT training and offensive-security teams for every engagement.</p></div>
            <div className="pillar reveal"><h3>Services plus product</h3><p>What we learn in the field shapes Varo AI, and Varo AI makes our services sharper.</p></div>
          </div>
        </div>
      </section>

      <CtaBand title="Find out where your OT environment is exposed — before someone else does." />
    </>
  )
}

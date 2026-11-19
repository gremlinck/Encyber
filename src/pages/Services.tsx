import { useState } from 'react'
import { Link } from '../lib/router'
import CtaBand from '../components/CtaBand'
import Orbit from '../components/Orbit'

type Cat = 'offensive' | 'ot' | 'defend' | 'training' | 'research'

const pillars: { id: Cat; name: string; blurb: string }[] = [
  { id: 'offensive', name: 'Offensive Security', blurb: 'Find the gaps before attackers do.' },
  { id: 'ot', name: 'OT / ICS Security', blurb: 'Protect plants without stopping production.' },
  { id: 'defend', name: 'Defense & Compliance', blurb: 'Harden applications and pass audits.' },
  { id: 'training', name: 'Training & Cyber Range', blurb: 'Build skills on realistic environments.' },
  { id: 'research', name: 'Threat Research', blurb: 'Attacker insight that sharpens every service.' },
]

const services: { c: Cat; n: string; d: string; o: string }[] = [
  { c: 'offensive', n: 'Penetration testing', d: 'Scenario-based testing of networks, web applications and cloud, built around the attack paths that matter to your business.', o: 'Report · attack paths · retest' },
  { c: 'offensive', n: 'Adversary simulation & red teaming', d: 'Objective-based campaigns that emulate real threat actors to test detection and response.', o: 'Campaign report · debrief' },
  { c: 'offensive', n: 'Compromise assessment', d: 'A hunt for signs that attackers are already inside your environment.', o: 'Evidence · containment plan' },
  { c: 'ot', n: 'OT vulnerability assessment', d: 'Passive, non-intrusive mapping of assets, connections and exposure across the plant.', o: 'Asset inventory · risk ranking' },
  { c: 'ot', n: 'ICS / SCADA penetration testing', d: 'Carefully scoped testing of control systems, HMIs and engineering workstations.', o: 'Safe-test plan · findings' },
  { c: 'ot', n: 'OT/ICS attack simulation', d: 'Realistic attack scenarios run against simulated plant environments to test response.', o: 'Scenario results · gaps' },
  { c: 'ot', n: 'ICS security framework review', d: 'Structured review of your OT security program against a proven ICS framework.', o: 'Maturity score · roadmap' },
  { c: 'defend', n: 'Application security review', d: 'Design review and secure code review to catch exploitable weaknesses before they ship.', o: 'Design + code findings' },
  { c: 'defend', n: 'Compliance readiness', d: 'Preparation for USCG MTS, IEC 62443, NIST CSF, ISO 27001 and PCI DSS.', o: 'Gap analysis · evidence pack' },
  { c: 'training', n: 'OT/ICS hands-on training · EnguardX', d: 'Portable OT testbeds and role-based tracks for operators, engineers and SOC teams.', o: 'On-site · cohort' },
  { c: 'training', n: 'Cyber range & blue-team drills', d: 'Hands-on labs plus forensics, threat hunting and incident response drills on realistic attacks.', o: 'Scored · team scorecard' },
  { c: 'research', n: 'Threat research & detection engineering', d: 'Original vulnerability research turned into detection content for your SIEM or OT monitoring platform.', o: 'Advisories · rules · playbooks' },
]

const nameOf = (c: Cat | 'all') => (c === 'all' ? 'All services' : pillars.find(p => p.id === c)!.name)

export default function Services() {
  const [cat, setCat] = useState<Cat | 'all'>('all')
  const visible = services.filter(s => cat === 'all' || s.c === cat)

  return (
    <>
      <section className="hero dark">
        <div className="gridbg" aria-hidden="true" />
        <div className="orb" aria-hidden="true" style={{ width: 900, height: 900, right: -260, top: -380 }} />
        <Orbit size={600} style={{ right: '8%', top: '30%' }} />
        <div className="wrap hero-inner" style={{ alignItems: 'flex-end' }}>
          <div className="hero-copy" style={{ flexBasis: 620 }}>
            <div className="eyebrow rise d1"><span className="pulse" />Services</div>
            <h1 className="rise d2">Think like the attacker. <b>Defend like the operator<span className="dot">.</span></b></h1>
            <p className="lead rise d3" style={{ maxWidth: 640 }}>End-to-end security for industrial and enterprise environments — from attack simulation and threat research to hands-on training and compliance, delivered with our offensive-security partner teams.</p>
          </div>
          <div className="stats rise d4">
            <div><b>5</b><span>SERVICE PILLARS</span></div>
            <div><b>{services.length}</b><span>SERVICES</span></div>
            <div><b>IT + OT</b><span>COVERAGE</span></div>
            <div><b>0-day</b><span>RESEARCH CAPABILITY</span></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 88, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div className="head reveal">
            <div className="eyebrow">Five pillars</div>
            <h2 className="h2">One partner for the<br /><b>full security lifecycle<span className="dot">.</span></b></h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 16 }}>
            {pillars.map((p, i) => (
              <button key={p.id} type="button" className="card pillar-btn reveal" aria-pressed={cat === p.id}
                onClick={() => { setCat(cat === p.id ? 'all' : p.id); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }) }}>
                <span className="n">0{i + 1}</span>
                <span className="t">{p.name}</span>
                <span className="body" style={{ fontSize: 15 }}>{p.blurb}</span>
                <span className="c">{services.filter(s => s.c === p.id).length} SERVICES →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F4F7 100%)' }}>
        <div className="gridbg" aria-hidden="true" style={{ opacity: 0.6 }} />
        <div className="wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div className="head-row reveal">
            <div className="head">
              <div className="eyebrow">Service catalog</div>
              <h2 className="h2" style={{ fontSize: 'clamp(30px, 3.4vw, 42px)' }}>{nameOf(cat)} · {visible.length}</h2>
            </div>
            <div className="filters" role="group" aria-label="Filter services">
              <button type="button" aria-pressed={cat === 'all'} onClick={() => setCat('all')}>ALL</button>
              {pillars.map(p => (
                <button key={p.id} type="button" aria-pressed={cat === p.id} onClick={() => setCat(p.id)}>{p.name.toUpperCase()}</button>
              ))}
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {visible.map(s => (
              <div key={s.n} className="card svc-card">
                <span className="cat">{nameOf(s.c).toUpperCase()}</span>
                <h3>{s.n}</h3>
                <p className="body" style={{ fontSize: 15 }}>{s.d}</p>
                <span className="out">{s.o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="band reveal">
            <div className="gridbg" aria-hidden="true" />
            <div className="col">
              <div className="eyebrow">Why it's different</div>
              <h2 className="h2" style={{ fontSize: 'clamp(30px, 3.6vw, 44px)' }}>Testing backed by <b>original vulnerability research<span className="dot">.</span></b></h2>
              <p>Our partner teams discover and exploit vulnerabilities in enterprise, OT/ICS and IoT systems — so assessments, detections and training reflect what attackers can actually do, not last year's checklist.</p>
            </div>
            <div className="chain">
              <div className="row"><span>Vulnerability research</span><span style={{ color: '#6B7280' }}>0-DAY · N-DAY</span></div>
              <div className="arrow" aria-hidden="true">↓</div>
              <div className="row hot"><span>Attack scenarios + exploit intelligence</span><span style={{ color: 'var(--red-text)' }}>OT · IT · IoT</span></div>
              <div className="arrow" aria-hidden="true">↓</div>
              <div className="row"><span>Your tests, detections and drills</span><span style={{ color: 'var(--green)' }}>APPLIED</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div className="head reveal">
            <div className="eyebrow">Ways to engage</div>
            <h2 className="h2">Start with one project.<br /><b>Grow into a program<span className="dot">.</span></b></h2>
          </div>
          <div className="tiles">
            <div className="tile reveal"><span className="eyebrow" style={{ fontSize: 12 }}>Project</span><h3>Fixed-scope engagement</h3><p className="body">A penetration test, assessment or training cohort with a defined scope, timeline and report.</p></div>
            <div className="tile reveal" style={{ border: '1.5px solid var(--red)' }}><span className="eyebrow" style={{ fontSize: 12 }}>Program</span><h3>Annual security program</h3><p className="body">Recurring testing, training and compliance support on one plan, with a named lead.</p></div>
            <div className="tile reveal"><span className="eyebrow" style={{ fontSize: 12 }}>Ongoing</span><h3>Ongoing support</h3><p className="body">Regular threat briefings and on-demand cyber range access for your team.</p></div>
          </div>
          <Link to="/contact" className="text-link reveal">Not sure where to start? Book a scoping call →</Link>
        </div>
      </section>

      <CtaBand title="Tell us what you need to protect. We'll scope the right mix." action="Book a scoping call" />
    </>
  )
}

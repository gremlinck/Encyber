import { Link } from '../lib/router'
import CtaBand from '../components/CtaBand'

export default function Services() {
  return (
    <>
      <section className="hero dark page-hero">
        <div className="gridbg" aria-hidden="true" />
        <div className="orb" aria-hidden="true" style={{ width: 680, height: 680, right: -160, top: -220 }} />
        <div className="wrap hero-inner">
          <div className="eyebrow rise d1">Services</div>
          <h1 className="rise d2">From the first assessment to a team that can defend the plant.</h1>
          <p className="lead rise d3" style={{ maxWidth: 720 }}>Pick a single engagement or combine them into a program. Every service is scoped for safety-critical environments and delivered with established global OT security partners.</p>
          <nav className="pills rise d4" aria-label="Services">
            <a href="#training">01 TRAINING</a>
            <a href="#assessments">02 ASSESSMENTS</a>
            <a href="#offensive">03 OFFENSIVE SECURITY</a>
            <a href="#consulting">04 CONSULTING</a>
          </nav>
        </div>
      </section>

      <section id="training" className="svc">
        <div className="wrap svc-inner">
          <div className="svc-copy reveal">
            <div className="card-num">01</div>
            <h2>OT/ICS Security Training</h2>
            <p>Hands-on programs where teams practise on real industrial equipment — not slides. Run on-site with portable OT testbeds or in a cyber range.</p>
            <Link to="/contact" className="text-link">Request the training catalog →</Link>
          </div>
          <div className="svc-body grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <div className="card card-sm card-alt reveal"><h3>Cyber range exercises</h3><p>Live attack-and-defend scenarios on simulated plant networks.</p></div>
            <div className="card card-sm card-alt reveal"><h3>Portable OT testbeds</h3><p>PLC and HMI kits brought to your site for practical labs.</p></div>
            <div className="card card-sm card-alt reveal"><h3>Role-based tracks</h3><p>Operators, control engineers, SOC analysts and leadership.</p></div>
            <div className="card card-sm card-alt reveal"><h3>Incident response drills</h3><p>Tabletop and live drills that test your OT response plan.</p></div>
          </div>
        </div>
      </section>

      <section id="assessments" className="svc alt">
        <div className="wrap svc-inner">
          <div className="svc-copy reveal">
            <div className="card-num">02</div>
            <h2>OT Vulnerability Assessments</h2>
            <p>A clear picture of what you run, how it connects, and where it is exposed — gathered with passive, non-intrusive methods so production never stops.</p>
            <Link to="/contact" className="text-link">Scope an assessment →</Link>
          </div>
          <div className="svc-body deliver reveal">
            <div className="k">WHAT YOU GET</div>
            <div className="deliver-row"><b>Asset inventory</b><span>Every controller, HMI and connection</span></div>
            <div className="deliver-row"><b>Network architecture review</b><span>Segmentation against the Purdue model</span></div>
            <div className="deliver-row"><b>Risk-ranked findings</b><span>What to fix first, and why</span></div>
            <div className="deliver-row"><b>Executive readout</b><span>A briefing your board can act on</span></div>
          </div>
        </div>
      </section>

      <section id="offensive" className="svc">
        <div className="wrap svc-inner">
          <div className="svc-copy reveal">
            <div className="card-num">03</div>
            <h2>Offensive Security</h2>
            <p>See your environment the way an attacker would. Testing is planned with your operations team, with clear rules of engagement for safety-critical systems.</p>
            <Link to="/contact" className="text-link">Plan a test →</Link>
          </div>
          <div className="svc-body grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <div className="card card-sm reveal"><h3>IT/OT penetration testing</h3><p>Paths from the corporate network into control systems.</p></div>
            <div className="card card-sm reveal"><h3>Red team operations</h3><p>Objective-based campaigns that test detection and response.</p></div>
            <div className="card card-sm reveal"><h3>Remote access review</h3><p>Vendor and third-party connections into the plant.</p></div>
            <div className="card card-sm reveal"><h3>Enterprise testing</h3><p>Web, cloud and internal network assessments.</p></div>
          </div>
        </div>
      </section>

      <section id="consulting" className="svc alt">
        <div className="wrap svc-inner">
          <div className="svc-copy reveal">
            <div className="card-num">04</div>
            <h2>Security Consulting</h2>
            <p>Senior guidance for security leaders building or maturing an OT program — from first roadmap to regulator-ready documentation.</p>
            <Link to="/contact" className="text-link">Talk to a consultant →</Link>
          </div>
          <div className="svc-body list-rows">
            <div className="list-row reveal"><b>Regulatory readiness</b><span>USCG MTS · IEC 62443 · NIST CSF</span></div>
            <div className="list-row reveal"><b>OT security program design</b><span>STRATEGY · ROADMAP</span></div>
            <div className="list-row reveal"><b>Incident response planning</b><span>PLAYBOOKS · DRILLS</span></div>
            <div className="list-row reveal"><b>Workforce development</b><span>UNIVERSITY · VETERAN PATHWAYS</span></div>
          </div>
        </div>
      </section>

      <CtaBand title="Not sure where to start? Begin with a 30-minute scoping call." action="Book a call" />
    </>
  )
}

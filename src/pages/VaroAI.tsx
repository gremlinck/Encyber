import { useEffect, useState } from 'react'
import AlertTerminal from '../components/AlertTerminal'
import { ArrowRight, CheckCircle } from 'lucide-react'

type Page = 'home' | 'varo-ai' | 'about' | 'contact'

interface VaroAIProps {
  onNavigate: (page: Page) => void
}

const agentSteps = [
  { letter: 'A', name: 'Analyze', desc: 'Ingests alerts from Dragos, Claroty, Nozomi, and any SIEM or historian in real time. No agents installed. No packets injected. No rip-and-replace required.' },
  { letter: 'G', name: 'Ground', desc: 'Applies your plant\'s full operational context: asset criticality, Purdue model zone, process state, maintenance windows, and known operational baselines.' },
  { letter: 'E', name: 'Evaluate', desc: 'Seven specialized AI agents reason in parallel — threat classification, blast radius, false positive filtering, regulatory impact, pattern matching, peer correlation, and urgency scoring.' },
  { letter: 'N', name: 'Narrate', desc: 'Every decision includes a plain-language explanation your engineers and executives both understand. No black boxes. Full reasoning trace attached to every output.' },
  { letter: 'T', name: 'Triage', desc: 'One output. Three states: ACT NOW — immediate response required. MONITOR — elevated watch. ROUTINE — known pattern, log and close. With evidence and next steps.' },
]

const specs = [
  { label: 'Platform version', value: 'Varo AI v2.0 · Copilot Edition' },
  { label: 'Detection latency', value: '< 200ms end-to-end' },
  { label: 'Supported protocols', value: 'Modbus · DNP3 · EtherNet/IP · PROFINET · BACnet · OPC-UA' },
  { label: 'Deployment model', value: 'On-premise · Air-gapped · Hybrid cloud' },
  { label: 'Asset discovery', value: 'Passive · Zero-impact · No active scanning' },
  { label: 'AI engine', value: 'Multi-agent reasoning + LLM-assisted triage (A.G.E.N.T. Loop)' },
  { label: 'Compliance', value: 'NERC-CIP · IEC 62443 · NIST CSF' },
  { label: 'Integration', value: 'SIEM · SOAR · Historian · DCS · API connectors' },
  { label: 'Uptime SLA', value: '99.99% — built for always-on infrastructure' },
  { label: 'IP protection', value: '2 patents pending' },
]

export default function VaroAI({ onNavigate }: VaroAIProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', title: '', email: '', company: '', tools: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        background: '#000000', padding: '120px 5vw 80px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 800px 500px at 50% 0%, rgba(220,40,60,0.07) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center',
          }}>
            <span style={{ width: 28, height: 1, background: 'var(--red)', opacity: .6 }} />
            Varo AI · OT/ICS Decision Intelligence
            <span style={{ width: 28, height: 1, background: 'var(--red)', opacity: .6 }} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            letterSpacing: '-0.04em', lineHeight: 1.05,
            color: '#ffffff', marginBottom: 24,
          }}>
            Stop triaging alerts.<br />
            <span style={{ color: 'var(--red)' }}>Start making decisions.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 300,
            color: 'var(--mid-gray)', lineHeight: 1.75,
            maxWidth: 560, margin: '0 auto 44px',
          }}>
            Varo AI sits above your existing security stack and uses multi-agent reasoning to turn every industrial alert into one clear, prioritized action — with full reasoning attached.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
            <button
              onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'var(--red)', color: '#ffffff',
                fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
                padding: '15px 32px', borderRadius: 10, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 28px rgba(220,40,60,0.3)',
                transition: 'background .2s, transform .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E8404C'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Request a demo <ArrowRight size={16} />
            </button>
          </div>
          <AlertTerminal />
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            The problem
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(26px, 3vw, 46px)',
            letterSpacing: '-0.03em', color: 'var(--navy)',
            marginBottom: 20,
          }}>Your team is drowning in alerts,<br />not making decisions.</h2>
          <p className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 300,
            color: '#5A7A9A', lineHeight: 1.75, maxWidth: 600, marginBottom: 56,
          }}>
            Every OT security tool detects events. None of them tell your team what to do next — leaving engineers to interpret, correlate, and prioritize under pressure.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22 }}>
            {[
              { stat: '73%', title: 'Alert fatigue rate', body: 'Nearly three-quarters of OT security alerts are closed without action — consuming analyst time that should go to the 27% that genuinely matter.', color: 'var(--red)' },
              { stat: '4.2×', title: 'Tools per OT team', body: 'The average industrial enterprise runs 4+ OT security platforms with no unified decision layer above them. More tools, more noise.', color: 'var(--amber)' },
              { stat: '$4.8M', title: 'Average incident cost', body: 'The financial exposure from one operational technology breach — downtime, remediation, regulatory impact — continues rising year over year.', color: 'var(--navy)' },
            ].map((card, i) => (
              <div
                key={card.stat}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: '#ffffff', border: '1px solid var(--light-gray)',
                  borderRadius: 18, padding: '34px 28px',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform .25s, box-shadow .25s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 24, right: 24, height: 3, background: card.color, borderRadius: '0 0 3px 3px' }} />
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 52, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: card.color, marginBottom: 14 }}>{card.stat}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 10 }}>{card.title}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: '#5A7A9A', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A.G.E.N.T. LOOP ── */}
      <section style={{ background: 'var(--warm-black)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            How it works
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            letterSpacing: '-0.03em', color: '#ffffff', marginBottom: 12,
          }}>The A.G.E.N.T. Loop.</h2>
          <p className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 300,
            color: 'var(--mid-gray)', lineHeight: 1.75,
            maxWidth: 560, marginBottom: 52,
          }}>
            A proprietary multi-agent reasoning framework purpose-built for industrial environments. Not adapted from IT. Built from scratch for OT.
          </p>

          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            border: '1px solid rgba(220,40,60,0.15)',
            borderRadius: 16, overflow: 'hidden',
            background: 'rgba(220,40,60,0.03)',
            gap: 2, marginBottom: 24,
          }}>
            {agentSteps.map((step, i) => (
              <button
                key={step.letter}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                style={{
                  background: activeStep === i ? 'rgba(220,40,60,0.08)' : 'rgba(20,20,19,0.9)',
                  padding: '30px 22px', textAlign: 'left', cursor: 'pointer',
                  border: 'none', transition: 'background .2s',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '.2em', color: 'var(--red)',
                  marginBottom: 7, textTransform: 'uppercase',
                }}>{step.letter}</div>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 700,
                  color: '#ffffff', marginBottom: 8, letterSpacing: '-0.02em',
                }}>{step.name}</div>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 300,
                  color: 'var(--mid-gray)', lineHeight: 1.6,
                }}>{step.desc.split('.')[0]}.</div>
              </button>
            ))}
          </div>

          {activeStep !== null && (
            <div style={{
              background: 'rgba(20,20,19,0.8)', border: '1px solid rgba(220,40,60,0.18)',
              borderRadius: 12, padding: '24px 28px',
              animation: 'fadeIn .3s ease',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--red)',
                letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 10,
              }}>{agentSteps[activeStep].letter} — {agentSteps[activeStep].name}</div>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300,
                color: '#c8c0b8', lineHeight: 1.75,
              }}>{agentSteps[activeStep].desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center',
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Integrations
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(26px, 3vw, 46px)',
            letterSpacing: '-0.03em', color: 'var(--navy)', marginBottom: 20,
          }}>Works above the tools you already own.</h2>
          <p className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 300,
            color: '#5A7A9A', lineHeight: 1.75, maxWidth: 540,
            margin: '0 auto 52px',
          }}>
            Varo AI is vendor-neutral by design. Dragos, Claroty, and Nozomi stay in place. No rip-and-replace. No forklift.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
            {['Dragos', 'Claroty', 'Nozomi Networks', 'Custom SIEM', 'SOAR', 'OPC-UA Feeds'].map((tool, i) => (
              <div
                key={tool}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: '#ffffff', border: '1px solid var(--light-gray)',
                  borderRadius: 12, padding: '20px 18px',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}
              >
                <CheckCircle size={16} color="var(--green)" />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--navy)' }}>{tool}</span>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mid-gray)',
            letterSpacing: '.04em',
          }}>
            Don't see your stack? We integrate with any OT data source. <a href="mailto:demo@encyberr.com" style={{ color: 'var(--red)' }}>Contact us.</a>
          </p>
        </div>
      </section>

      {/* ── TECH SPECS ── */}
      <section style={{ background: 'var(--warm-black)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Technical specifications
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(26px, 3vw, 44px)',
            letterSpacing: '-0.03em', color: '#ffffff', marginBottom: 40,
          }}>Built for production OT environments.</h2>

          <div className="reveal" style={{
            background: 'rgba(10,9,8,0.9)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 14, overflow: 'hidden',
          }}>
            {specs.map((spec, i) => (
              <div key={spec.label} style={{
                display: 'grid', gridTemplateColumns: '220px 1fr',
                padding: '16px 24px', gap: 20, alignItems: 'start',
                borderBottom: i < specs.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(176,174,165,0.5)', letterSpacing: '.04em' }}>{spec.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#d0c8c0', lineHeight: 1.6 }}>{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="reveal" style={{
            marginTop: 20, padding: '14px 18px',
            background: 'rgba(220,40,60,0.06)',
            border: '1px solid rgba(220,40,60,0.15)',
            borderRadius: 10,
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'var(--amber)', letterSpacing: '.04em',
          }}>
            ◆ Available as on-premise deployment for air-gapped environments — no cloud required.
          </div>
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section id="demo-form" style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center',
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Request a demo
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            letterSpacing: '-0.03em', color: 'var(--navy)', marginBottom: 16,
          }}>See it on your alerts.</h2>
          <p className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 300,
            color: '#5A7A9A', lineHeight: 1.75, marginBottom: 40,
          }}>
            30 minutes. Your data. No commitment. Enterprise teams see results in the first session.
          </p>

          <div className="reveal" style={{
            background: '#ffffff', border: '1px solid var(--light-gray)',
            borderRadius: 20, padding: '44px 40px 40px',
            boxShadow: '0 2px 0 rgba(255,255,255,0.8) inset, 0 24px 64px rgba(0,0,0,0.07), 0 4px 16px rgba(220,40,60,0.05)',
            textAlign: 'left',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(74,124,89,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', fontSize: 22,
                }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>Demo request received</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#5A7A9A', lineHeight: 1.7 }}>
                  We'll reach out within one business day. You can also email us at <a href="mailto:demo@encyberr.com" style={{ color: 'var(--red)' }}>demo@encyberr.com</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  {[
                    { id: 'name', label: 'Full name', placeholder: 'Your name', type: 'text', required: true },
                    { id: 'title', label: 'Job title', placeholder: 'CISO / OT Security Lead', type: 'text', required: false },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--navy)', marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type} placeholder={f.placeholder} required={f.required}
                        value={formData[f.id as keyof typeof formData]}
                        onChange={e => setFormData({ ...formData, [f.id]: e.target.value })}
                        style={{
                          width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300,
                          padding: '12px 14px', border: '1px solid var(--light-gray)',
                          borderRadius: 9, background: 'var(--warm-white)', color: 'var(--navy)', outline: 'none',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  {[
                    { id: 'email', label: 'Work email', placeholder: 'you@company.com', type: 'email', required: true },
                    { id: 'company', label: 'Company', placeholder: 'Your organization', type: 'text', required: true },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--navy)', marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type} placeholder={f.placeholder} required={f.required}
                        value={formData[f.id as keyof typeof formData]}
                        onChange={e => setFormData({ ...formData, [f.id]: e.target.value })}
                        style={{
                          width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300,
                          padding: '12px 14px', border: '1px solid var(--light-gray)',
                          borderRadius: 9, background: 'var(--warm-white)', color: 'var(--navy)', outline: 'none',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--navy)', marginBottom: 6 }}>Current OT security tools</label>
                  <select
                    value={formData.tools}
                    onChange={e => setFormData({ ...formData, tools: e.target.value })}
                    style={{
                      width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300,
                      padding: '12px 14px', border: '1px solid var(--light-gray)',
                      borderRadius: 9, background: 'var(--warm-white)', color: 'var(--navy)', outline: 'none',
                    }}
                  >
                    <option value="">Select your stack</option>
                    <option>Dragos</option>
                    <option>Claroty</option>
                    <option>Nozomi Networks</option>
                    <option>Multiple tools</option>
                    <option>Other / custom</option>
                  </select>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--navy)', marginBottom: 6 }}>What's your biggest challenge right now? (optional)</label>
                  <textarea
                    placeholder="Alert volume, team size, specific use case..."
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300,
                      padding: '12px 14px', border: '1px solid var(--light-gray)',
                      borderRadius: 9, background: 'var(--warm-white)', color: 'var(--navy)', outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%', marginTop: 8,
                    background: 'var(--navy)', color: '#FAF9F5',
                    fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600,
                    padding: '17px 28px', border: 'none', borderRadius: 11,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    boxShadow: '0 8px 24px rgba(0,15,60,0.2)',
                    transition: 'background .2s, transform .15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <ArrowRight size={16} />
                  Request my demo
                </button>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mid-gray)', textAlign: 'center', marginTop: 14, letterSpacing: '.04em' }}>
                  No sales pitch. A working session with the ENCYBER team. · demo@encyberr.com
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
  )
}

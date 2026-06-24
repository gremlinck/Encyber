import { useEffect, useState } from 'react'
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [tab, setTab] = useState<'demo' | 'general'>('demo')
  const [demoData, setDemoData] = useState({ name: '', title: '', email: '', company: '', tools: '', assets: '', message: '' })
  const [generalData, setGeneralData] = useState({ name: '', email: '', company: '', type: '', message: '' })
  const [demoSubmitted, setDemoSubmitted] = useState(false)
  const [generalSubmitted, setGeneralSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const inputStyle: React.CSSProperties = {
    width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300,
    padding: '12px 14px', border: '1px solid var(--light-gray)',
    borderRadius: 9, background: 'var(--warm-white)', color: 'var(--navy)', outline: 'none',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
    color: 'var(--navy)', marginBottom: 6,
  }

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        background: '#000000', padding: '120px 5vw 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 700px 500px at 60% 50%, rgba(220,40,60,0.06) 0%, transparent 70%)',
        }} />
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Get in touch
          </div>
          <h1 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 68px)',
            letterSpacing: '-0.04em', lineHeight: 1.07,
            color: '#ffffff', marginBottom: 24, maxWidth: 680,
          }}>
            Let's talk about<br />
            <span style={{ color: 'var(--red)' }}>your OT security.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 300,
            color: 'var(--mid-gray)', lineHeight: 1.75, maxWidth: 540,
          }}>
            Whether you're an OT security team looking to see Varo AI in action, or an investor exploring the space — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section style={{ background: 'var(--warm-white)', padding: '80px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60, alignItems: 'start' }}>

          {/* Form card */}
          <div className="reveal">
            {/* Tabs */}
            <div style={{
              display: 'flex', gap: 4, marginBottom: 32,
              borderBottom: '1px solid var(--light-gray)', paddingBottom: 0,
            }}>
              {[
                { key: 'demo', label: 'Request a demo' },
                { key: 'general', label: 'General inquiry' },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key as 'demo' | 'general')}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: tab === t.key ? 600 : 400,
                    color: tab === t.key ? 'var(--navy)' : 'var(--mid-gray)',
                    padding: '10px 16px',
                    borderBottom: tab === t.key ? '2px solid var(--red)' : '2px solid transparent',
                    marginBottom: -1,
                    transition: 'color .2s',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Demo form */}
            {tab === 'demo' && (
              <div style={{
                background: '#ffffff', border: '1px solid var(--light-gray)',
                borderRadius: 20, padding: '40px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.06)',
              }}>
                {demoSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(74,124,89,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22 }}>✓</div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>Demo request received</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#5A7A9A', lineHeight: 1.7 }}>We'll reach out within one business day at the email you provided.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setDemoSubmitted(true) }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><label style={labelStyle}>Full name</label><input required type="text" placeholder="Your name" style={inputStyle} value={demoData.name} onChange={e => setDemoData({...demoData, name: e.target.value})} /></div>
                      <div><label style={labelStyle}>Job title</label><input type="text" placeholder="CISO / OT Security Lead" style={inputStyle} value={demoData.title} onChange={e => setDemoData({...demoData, title: e.target.value})} /></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><label style={labelStyle}>Work email</label><input required type="email" placeholder="you@company.com" style={inputStyle} value={demoData.email} onChange={e => setDemoData({...demoData, email: e.target.value})} /></div>
                      <div><label style={labelStyle}>Company</label><input required type="text" placeholder="Your organization" style={inputStyle} value={demoData.company} onChange={e => setDemoData({...demoData, company: e.target.value})} /></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>Current OT security tools</label>
                        <select style={inputStyle} value={demoData.tools} onChange={e => setDemoData({...demoData, tools: e.target.value})}>
                          <option value="">Select your stack</option>
                          <option>Dragos</option>
                          <option>Claroty</option>
                          <option>Nozomi Networks</option>
                          <option>Multiple tools</option>
                          <option>Other / custom</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Number of OT assets</label>
                        <select style={inputStyle} value={demoData.assets} onChange={e => setDemoData({...demoData, assets: e.target.value})}>
                          <option value="">Approximate count</option>
                          <option>Under 100</option>
                          <option>100 – 500</option>
                          <option>500 – 2,000</option>
                          <option>2,000+</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <label style={labelStyle}>Biggest challenge right now (optional)</label>
                      <textarea rows={3} placeholder="Alert volume, team size, specific use case..." style={{...inputStyle, resize: 'vertical'}} value={demoData.message} onChange={e => setDemoData({...demoData, message: e.target.value})} />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: '100%', marginTop: 8,
                        background: 'var(--red)', color: '#ffffff',
                        fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600,
                        padding: '17px 28px', border: 'none', borderRadius: 11, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        boxShadow: '0 8px 24px rgba(220,40,60,0.25)',
                        transition: 'background .2s, transform .15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#E8404C'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      <ArrowRight size={16} /> Request my demo
                    </button>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mid-gray)', textAlign: 'center', marginTop: 14, letterSpacing: '.04em' }}>
                      No sales pressure. A 30-minute working session with the ENCYBER team.
                    </p>
                  </form>
                )}
              </div>
            )}

            {/* General inquiry form */}
            {tab === 'general' && (
              <div style={{
                background: '#ffffff', border: '1px solid var(--light-gray)',
                borderRadius: 20, padding: '40px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.06)',
              }}>
                {generalSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(74,124,89,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22 }}>✓</div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>Message received</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#5A7A9A', lineHeight: 1.7 }}>We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setGeneralSubmitted(true) }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><label style={labelStyle}>Full name</label><input required type="text" placeholder="Your name" style={inputStyle} value={generalData.name} onChange={e => setGeneralData({...generalData, name: e.target.value})} /></div>
                      <div><label style={labelStyle}>Work email</label><input required type="email" placeholder="you@company.com" style={inputStyle} value={generalData.email} onChange={e => setGeneralData({...generalData, email: e.target.value})} /></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div><label style={labelStyle}>Company (optional)</label><input type="text" placeholder="Your organization" style={inputStyle} value={generalData.company} onChange={e => setGeneralData({...generalData, company: e.target.value})} /></div>
                      <div>
                        <label style={labelStyle}>Inquiry type</label>
                        <select style={inputStyle} value={generalData.type} onChange={e => setGeneralData({...generalData, type: e.target.value})}>
                          <option value="">Select type</option>
                          <option>Investment / Funding</option>
                          <option>Partnership</option>
                          <option>Press / Media</option>
                          <option>General question</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <label style={labelStyle}>Message</label>
                      <textarea required rows={4} placeholder="Tell us what you have in mind..." style={{...inputStyle, resize: 'vertical'}} value={generalData.message} onChange={e => setGeneralData({...generalData, message: e.target.value})} />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: '100%', marginTop: 8,
                        background: 'var(--navy)', color: '#FAF9F5',
                        fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600,
                        padding: '17px 28px', border: 'none', borderRadius: 11, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        transition: 'background .2s, transform .15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      <ArrowRight size={16} /> Send message
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="reveal reveal-delay-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'demo@encyberr.com', link: 'mailto:demo@encyberr.com' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Busan, Republic of Korea', link: null },
                { icon: <Clock size={18} />, label: 'Response time', value: 'Within 1 business day', link: null },
              ].map(item => (
                <div key={item.label} style={{
                  background: '#ffffff', border: '1px solid var(--light-gray)',
                  borderRadius: 12, padding: '20px 18px',
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                }}>
                  <div style={{ color: 'var(--red)', marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--mid-gray)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                    {item.link ? (
                      <a href={item.link} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, color: 'var(--red)' }}>{item.value}</a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, color: 'var(--navy)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div style={{
                background: 'rgba(220,40,60,0.04)', border: '1px solid rgba(220,40,60,0.14)',
                borderRadius: 12, padding: '20px 18px', marginTop: 8,
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10 }}>Recognition</div>
                {['Lighthouse Network 2026', 'SelectUSA 2026 Finalist', 'Microsoft for Startups', '2 Patents Pending'].map(b => (
                  <div key={b} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--mid-gray)',
                    padding: '5px 0',
                    borderBottom: '1px solid rgba(220,40,60,0.08)',
                  }}>{b}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

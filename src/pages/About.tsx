import { useEffect, useState, type FormEvent } from 'react'
import { EMAIL } from '../components/Footer'

const interests = ['OT/ICS training', 'Vulnerability assessment', 'Offensive security', 'Consulting', 'Varo AI demo', 'Partnership', 'Something else']

export default function About({ focusContact = false }: { focusContact?: boolean }) {
  const [d, setD] = useState({ name: '', email: '', company: '', interest: interests[0], message: '' })
  const [sent, setSent] = useState(false)
  const set = (k: keyof typeof d) => (e: { target: { value: string } }) => setD({ ...d, [k]: e.target.value })

  useEffect(() => {
    if (focusContact) requestAnimationFrame(() => document.getElementById('contact')?.scrollIntoView())
  }, [focusContact])

  // The site is static, so the form hands the message to the visitor's email app.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, `Organization: ${d.company || '-'}`, `Interested in: ${d.interest}`, '', d.message].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${d.interest} — ${d.company || d.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="hero dark">
        <div className="gridbg" aria-hidden="true" />
        <div className="orb" aria-hidden="true" style={{ width: 680, height: 680, right: -160, top: -220 }} />
        <div id="about" className="wrap hero-inner">
          <div className="hero-copy">
            <div className="eyebrow rise d1">About Encyber</div>
            <h1 className="rise d2" style={{ fontSize: 'clamp(40px, 5.2vw, 64px)' }}>We protect the operations society depends on.</h1>
            <p className="lead rise d3">Encyber is an OT/ICS security company. We help operators of ports, utilities, factories and critical facilities understand their risk, build capable teams and make better security decisions — through hands-on services today and Varo AI, our product for OT alert judgment.</p>
          </div>
          <dl className="facts rise d4">
            <div><dt>FOUNDED</dt><dd>2024, Seoul</dd></div>
            <div><dt>FOCUS MARKET</dt><dd>United States</dd></div>
            <div><dt>SPECIALTY</dt><dd>OT / ICS security</dd></div>
            <div><dt>PRODUCT</dt><dd>Varo AI</dd></div>
          </dl>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap pillars" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><div className="eyebrow">Mission</div><p style={{ fontSize: 18, lineHeight: 1.6 }}>Make industrial operations resilient against cyber threats without slowing them down.</p></div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><div className="eyebrow">Approach</div><p style={{ fontSize: 18, lineHeight: 1.6 }}>Safety first, evidence over fear, and practical steps a plant team can actually take.</p></div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><div className="eyebrow">Partners</div><p style={{ fontSize: 18, lineHeight: 1.6 }}>We deliver with established global OT training and offensive-security partners.</p></div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap split">
          <div className="col reveal">
            <div className="eyebrow">Contact us</div>
            <h2 className="h2">Let's talk about your environment.</h2>
            <p className="lead">Tell us what you're working on. We reply within one business day.</p>
            <div className="info" style={{ paddingTop: 8 }}>
              <span className="k">EMAIL</span>
              <a href={`mailto:${EMAIL}`} style={{ fontSize: 18, fontWeight: 500 }}>{EMAIL}</a>
            </div>
            <div className="info">
              <span className="k">OFFICES</span>
              <span style={{ lineHeight: 1.6 }}>Seoul, South Korea</span>
              <span>Richmond, Virginia</span>
            </div>
          </div>
          <div className="form reveal">
            {sent ? (
              <div className="form-done">
                <h3>Your email app should now be open.</h3>
                <p className="body">Press send there to reach us. If nothing opened, write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="form-row">
                  <label className="field">Full name<input required autoComplete="name" value={d.name} onChange={set('name')} /></label>
                  <label className="field">Work email<input type="email" required autoComplete="email" value={d.email} onChange={set('email')} /></label>
                </div>
                <div className="form-row">
                  <label className="field">Company<input autoComplete="organization" value={d.company} onChange={set('company')} /></label>
                  <label className="field">I'm interested in
                    <select value={d.interest} onChange={set('interest')}>{interests.map(i => <option key={i}>{i}</option>)}</select>
                  </label>
                </div>
                <label className="field">Message<textarea rows={5} required value={d.message} onChange={set('message')} /></label>
                <button type="submit" className="btn btn-primary">Send message</button>
                <p className="form-note">Sending opens your email app with the message ready to go.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

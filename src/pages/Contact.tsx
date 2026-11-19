import { useState, type FormEvent } from 'react'
import { EMAIL } from '../components/Footer'
import Orbit from '../components/Orbit'

const interests = ['OT/ICS training', 'Vulnerability assessment', 'Penetration testing', 'Consulting', 'EnguardX', 'Varo AI demo', 'Partnership', 'Something else']

export default function Contact() {
  const [d, setD] = useState({ name: '', email: '', company: '', interest: interests[0], message: '' })
  const [sent, setSent] = useState(false)
  const set = (k: keyof typeof d) => (e: { target: { value: string } }) => setD({ ...d, [k]: e.target.value })

  // The site is static, so the form hands the message to the visitor's email app.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, `Organization: ${d.company || '-'}`, `Interested in: ${d.interest}`, '', d.message].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${d.interest} — ${d.company || d.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="hero dark">
      <div className="gridbg" aria-hidden="true" />
      <div className="orb" aria-hidden="true" style={{ width: 900, height: 900, right: -260, top: -380 }} />
      <Orbit size={600} style={{ right: -160, top: -40 }} />
      <div className="wrap hero-inner" style={{ alignItems: 'flex-start' }}>
        <div className="hero-copy" style={{ flexBasis: 380 }}>
          <div className="eyebrow rise d1"><span className="pulse" />Contact us</div>
          <h1 className="rise d2" style={{ fontSize: 'clamp(40px, 5.2vw, 64px)' }}>Let's talk about <b>your environment<span className="dot">.</span></b></h1>
          <p className="lead rise d3">Tell us what you're working on. We reply within one business day.</p>
          <div className="info rise d4">
            <span className="k">EMAIL</span>
            <a href={`mailto:${EMAIL}`} style={{ fontSize: 18, fontWeight: 500 }}>{EMAIL}</a>
          </div>
          <div className="info rise d4">
            <span className="k">OFFICES</span>
            <span>Seoul, South Korea</span>
            <span>Richmond, Virginia, USA</span>
          </div>
        </div>
        <div className="form rise d3" style={{ position: 'relative', zIndex: 1 }}>
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
  )
}

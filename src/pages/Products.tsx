import { useState, type FormEvent } from 'react'
import { EMAIL } from '../components/Footer'

export default function Products() {
  const [d, setD] = useState({ name: '', email: '', company: '', platform: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k: keyof typeof d) => (e: { target: { value: string } }) => setD({ ...d, [k]: e.target.value })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, `Company: ${d.company}`, `OT detection platform: ${d.platform || '-'}`, '', d.message].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Varo AI demo request — ${d.company || d.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="hero dark page-hero">
        <div className="gridbg" aria-hidden="true" />
        <div className="orb" aria-hidden="true" style={{ width: 680, height: 680, right: -160, top: -220 }} />
        <div className="wrap hero-inner">
          <div className="eyebrow rise d1">Varo AI · by Encyber</div>
          <h1 className="rise d2" style={{ fontSize: 'clamp(46px, 6.4vw, 80px)', lineHeight: 1 }}>Fewer alerts. Better decisions.</h1>
          <p className="lead rise d3" style={{ maxWidth: 700 }}>Varo AI is an AI-powered judgment layer that sits above your existing OT detection platform. It adds plant context to every alert so your team knows what matters and what to do next.</p>
          <div className="hero-actions rise d4">
            <a href="#demo" className="btn btn-primary">Request a demo</a>
            <a href="#how" className="btn btn-ghost">How it works</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 56 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          <div className="head reveal" style={{ maxWidth: 760 }}>
            <div className="eyebrow">The problem</div>
            <h2 className="h2">Detection isn't the bottleneck anymore. Judgment is.</h2>
          </div>
          <div className="pillars">
            <div className="pillar ink reveal"><h3>Alert volume</h3><p>OT monitoring surfaces more events than small teams can review.</p></div>
            <div className="pillar ink reveal"><h3>Missing context</h3><p>An alert rarely says what the asset does, or what happens if it stops.</p></div>
            <div className="pillar ink reveal"><h3>Scarce OT expertise</h3><p>The people who can interpret OT signals are hard to hire and harder to keep.</p></div>
          </div>
        </div>
      </section>

      <section id="how" className="section" style={{ paddingTop: 56 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div className="eyebrow reveal">How it works</div>
          <div className="grid">
            <div className="card card-alt reveal"><div className="eyebrow" style={{ fontSize: 12 }}>Step 1 · Connect</div><h3>Ingest existing alerts</h3><p className="body">Works on top of the OT detection platform you already run. No rip-and-replace.</p></div>
            <div className="card card-alt reveal"><div className="eyebrow" style={{ fontSize: 12 }}>Step 2 · Contextualise</div><h3>Add plant context</h3><p className="body">Each event is weighed against asset role, process impact and safety.</p></div>
            <div className="card card-alt reveal"><div className="eyebrow" style={{ fontSize: 12 }}>Step 3 · Decide</div><h3>Recommend next steps</h3><p className="body">Clear, explainable guidance your team reviews and acts on.</p></div>
          </div>
        </div>
      </section>

      <section id="demo" className="section section-alt">
        <div className="wrap split">
          <div className="col reveal">
            <div className="eyebrow">Early access</div>
            <h2 className="h2">Become a design partner.</h2>
            <p className="lead">We're working with a small group of OT security teams to shape Varo AI. Tell us about your environment and we'll set up a walkthrough.</p>
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
                  <label className="field">Company<input required autoComplete="organization" value={d.company} onChange={set('company')} /></label>
                  <label className="field">Current OT detection platform<input value={d.platform} onChange={set('platform')} /></label>
                </div>
                <label className="field">What would you like to see?<textarea rows={4} value={d.message} onChange={set('message')} /></label>
                <button type="submit" className="btn btn-primary">Request a demo</button>
                <p className="form-note">Sending opens your email app with the message ready to go.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react'

const EMAIL = 'demo@encyberr.com'

const interests = [
  { value: 'training', label: 'OT security training' },
  { value: 'assessment', label: 'Vulnerability assessment' },
  { value: 'consulting', label: 'Security consulting' },
  { value: 'varo', label: 'Varo AI demo' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Something else' },
]

export default function Contact() {
  const initial = new URLSearchParams(window.location.search).get('interest') ?? ''
  const [data, setData] = useState({
    name: '', email: '', company: '', message: '',
    interest: interests.some(i => i.value === initial) ? initial : '',
  })
  const [sent, setSent] = useState(false)
  const set = (k: keyof typeof data) => (e: { target: { value: string } }) => setData({ ...data, [k]: e.target.value })

  // The site is static, so the form hands the message to the visitor's email app.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const topic = interests.find(i => i.value === data.interest)?.label ?? 'General inquiry'
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Organization: ${data.company || '-'}`,
      `Interested in: ${topic}`,
      '',
      data.message,
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${topic} — ${data.company || data.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>Let's talk about your OT security.</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div className="form">
            {sent ? (
              <div className="form-done">
                <h3>Your email app should now be open.</h3>
                <p>
                  Press send there to reach us. If nothing opened, write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" required autoComplete="name" value={data.name} onChange={set('name')} />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Work email</label>
                    <input id="email" type="email" required autoComplete="email" value={data.email} onChange={set('email')} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="company">Organization</label>
                    <input id="company" autoComplete="organization" value={data.company} onChange={set('company')} />
                  </div>
                  <div className="field">
                    <label htmlFor="interest">I'm interested in</label>
                    <select id="interest" required value={data.interest} onChange={set('interest')}>
                      <option value="">Select one</option>
                      {interests.map(i => <option key={i.value} value={i.value}>{i.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">How can we help?</label>
                  <textarea id="message" rows={5} required value={data.message} onChange={set('message')} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send message <ArrowRight size={16} /></button>
                <p className="form-note">Sending opens your email app with the message ready to go.</p>
              </form>
            )}
          </div>

          <ul className="info">
            <li>
              <Mail size={18} />
              <div>
                <div className="k">Email</div>
                <a className="v" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </li>
            <li>
              <MapPin size={18} />
              <div>
                <div className="k">Location</div>
                <div className="v">Busan, Republic of Korea<br />Engagements in Korea and the U.S.</div>
              </div>
            </li>
            <li>
              <Clock size={18} />
              <div>
                <div className="k">Response time</div>
                <div className="v">Within one business day</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

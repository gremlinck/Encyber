import { useEffect } from 'react'
import EncyberLogo from '../components/EncyberLogo'
import { ArrowRight } from 'lucide-react'

type Page = 'home' | 'varo-ai' | 'about' | 'contact'

interface AboutProps {
  onNavigate: (page: Page) => void
}

const timeline = [
  { year: '2022', event: 'Encyber Inc. founded · Busan, Republic of Korea' },
  { year: '2023', event: 'First OT/ICS patent filed' },
  { year: '2024', event: 'First 3 enterprise customers onboarded · 100% retention maintained' },
  { year: '2025', event: 'Varo AI v1.0 launched · Second patent filed · 3 additional enterprise customers' },
  { year: '2026', event: 'Lighthouse Network 2026 — first international selectee · SelectUSA Finalist · Microsoft for Startups · Varo AI v2.0 Copilot Edition' },
]

const values = [
  { title: 'Precision over volume', body: 'We don\'t add more alerts. We reduce them to what actually matters — with full reasoning to back every decision.' },
  { title: 'Explainability as a right', body: 'Every AI decision Varo AI makes comes with a full reasoning trace. Your team should always understand why, not just what.' },
  { title: 'OT-first, always', body: 'We never adapt IT tools for OT. Everything ENCYBER builds starts from how industrial systems actually work.' },
]

export default function About({ onNavigate }: AboutProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        background: '#000000', padding: '120px 5vw 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 700px 500px at 30% 50%, rgba(220,40,60,0.06) 0%, transparent 70%)',
        }} />
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            About ENCYBER
          </div>
          <h1 style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 68px)',
            letterSpacing: '-0.04em', lineHeight: 1.07,
            color: '#ffffff', marginBottom: 24, maxWidth: 720,
          }}>
            Pioneering cybersecurity<br />
            <span style={{ color: 'var(--red)' }}>for critical technologies.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 300,
            color: 'var(--mid-gray)', lineHeight: 1.75, maxWidth: 580,
          }}>
            ENCYBER was founded on one belief: the infrastructure that powers modern life deserves purpose-built protection — not IT security tools forced to fit OT environments.
          </p>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Founder & CEO
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <h2 className="reveal" style={{
                fontFamily: 'var(--font-sans)', fontWeight: 800,
                fontSize: 'clamp(26px, 3vw, 44px)',
                letterSpacing: '-0.03em', lineHeight: 1.12,
                color: 'var(--navy)', marginBottom: 24,
              }}>
                Built by someone who<br />lived the problem.
              </h2>

              <div className="reveal" style={{
                background: '#ffffff', border: '1px solid var(--light-gray)',
                borderRadius: 16, padding: '28px 24px', marginBottom: 24,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(220,40,60,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <EncyberLogo size={28} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>Christine Kim</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--red)', letterSpacing: '.08em', marginBottom: 16 }}>
                  Founder & CEO · Encyber Inc.
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: '#5A7A9A', lineHeight: 1.75 }}>
                  김윤지 (Christine YG Kim) has spent 18+ years inside OT and ICS security environments across Korea and Asia-Pacific — working directly with industrial operators, critical infrastructure owners, and enterprise security teams.
                </p>
              </div>

              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { num: '18+', label: 'Years OT/ICS' },
                  { num: '2', label: 'Patents pending' },
                  { num: '6', label: 'Enterprise customers' },
                  { num: '100%', label: 'Retention rate' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: '#ffffff', border: '1px solid var(--light-gray)',
                    borderRadius: 12, padding: '20px 18px', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 32, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--navy)', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--mid-gray)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 300, color: '#5A7A9A', lineHeight: 1.8, marginBottom: 20 }}>
                Christine saw the gap between what detection tools provide and what operators actually need — the intelligence to act on what matters, not everything that fires.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 300, color: '#5A7A9A', lineHeight: 1.8, marginBottom: 20 }}>
                That gap became ENCYBER. And ENCYBER became Varo AI.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 300, color: '#5A7A9A', lineHeight: 1.8, marginBottom: 20 }}>
                Before founding ENCYBER, Christine held cybersecurity roles through Donghoon Itech (Symantec and CrowdStrike channel), led regional marketing at Concentrix Korea, and managed country-level P&L at Teleperformance Korea — scaling from 40 to 100+ staff.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 300, color: '#5A7A9A', lineHeight: 1.8 }}>
                She is a published author, a bilingual Korean-English speaker, and holds 2 patents pending in AI-driven OT security decision intelligence. ENCYBER is headquartered in Busan, Republic of Korea, and operates globally.
              </p>

              <div style={{ marginTop: 32, padding: '20px 22px', background: 'rgba(220,40,60,0.04)', border: '1px solid rgba(220,40,60,0.12)', borderRadius: 12 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 8 }}>Advisory</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>Michele Chubirka</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: '#5A7A9A' }}>Security Architect & Industry Advisor — bringing deep enterprise security architecture expertise to ENCYBER's strategic direction.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VALUES ── */}
      <section style={{ background: 'var(--warm-black)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Mission & values
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            letterSpacing: '-0.03em', color: '#ffffff', marginBottom: 52,
          }}>Protect the infrastructure<br />the world depends on.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'rgba(28,27,26,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 14, padding: '32px 26px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.01em' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: 'var(--mid-gray)', lineHeight: 1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Milestones
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(26px, 3vw, 44px)',
            letterSpacing: '-0.03em', color: 'var(--navy)', marginBottom: 52,
          }}>From Busan to global.</h2>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 60, top: 0, bottom: 0,
              width: 1, background: 'var(--light-gray)',
            }} />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
                style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr',
                  gap: 32, marginBottom: 32, alignItems: 'start',
                  position: 'relative',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 500,
                  color: item.year === '2026' ? 'var(--red)' : 'var(--navy)',
                  textAlign: 'right',
                }}>{item.year}</div>
                <div style={{
                  background: '#ffffff', border: '1px solid var(--light-gray)',
                  borderRadius: 10, padding: '16px 20px',
                  borderLeft: item.year === '2026' ? '3px solid var(--red)' : '3px solid var(--light-gray)',
                }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: '#5A7A9A', lineHeight: 1.65 }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--warm-black)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { eyebrow: 'For OT security teams', heading: 'See Varo AI on your alerts.', body: '30 minutes. Your data. No commitment.', cta: 'Request a demo', page: 'contact' as Page },
              { eyebrow: 'For investors', heading: 'Let\'s talk about the opportunity.', body: 'ENCYBER is raising its seed round. We\'d love to connect.', cta: 'Get in touch', page: 'contact' as Page },
            ].map(card => (
              <div
                key={card.eyebrow}
                className="reveal"
                style={{
                  background: 'rgba(28,27,26,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 18, padding: '36px 32px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 14 }}>{card.eyebrow}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{card.heading}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300, color: 'var(--mid-gray)', lineHeight: 1.7, marginBottom: 24 }}>{card.body}</p>
                <button
                  onClick={() => nav(card.page)}
                  style={{
                    background: 'var(--red)', color: '#ffffff',
                    fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
                    padding: '12px 24px', borderRadius: 9, border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 7,
                    transition: 'background .2s, transform .15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#E8404C'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {card.cta} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

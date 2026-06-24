import { useEffect, useRef } from 'react'
import AlertTerminal from '../components/AlertTerminal'
import EncyberLogo from '../components/EncyberLogo'
import { ArrowRight, Shield, Brain, Globe } from 'lucide-react'

type Page = 'home' | 'varo-ai' | 'about' | 'contact'

interface HomeProps {
  onNavigate: (page: Page) => void
}

export default function Home({ onNavigate }: HomeProps) {
  const revealRefs = useRef<HTMLElement[]>([])

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
        minHeight: '100vh', background: '#000000',
        padding: '120px 5vw 80px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Radial bg glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 900px 500px at 50% 10%, rgba(220,40,60,0.07) 0%, transparent 70%), radial-gradient(ellipse 500px 400px at 80% 80%, rgba(180,0,90,0.05) 0%, transparent 60%)',
        }} />

        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
          letterSpacing: '.18em', color: 'var(--red)',
          textTransform: 'uppercase', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 12,
          position: 'relative', zIndex: 2,
        }}>
          <span style={{ width: 28, height: 1, background: 'var(--red)', opacity: .6 }} />
          OT / ICS · Security Decision Intelligence
          <span style={{ width: 28, height: 1, background: 'var(--red)', opacity: .6 }} />
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'var(--font-sans)', fontWeight: 800,
          fontSize: 'clamp(38px, 6vw, 78px)',
          letterSpacing: '-0.04em', lineHeight: 1.05,
          color: '#ffffff', marginBottom: 24, maxWidth: 900,
          position: 'relative', zIndex: 2,
        }}>
          Pioneering Cybersecurity<br />
          <span style={{ color: 'var(--red)' }}>for Critical Technologies.</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 300,
          color: 'var(--mid-gray)', lineHeight: 1.75,
          maxWidth: 580, marginBottom: 44,
          position: 'relative', zIndex: 2,
        }}>
          ENCYBER builds the intelligence layer your OT security stack is missing — turning thousands of industrial alerts into one prioritized decision, with full reasoning attached.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 14, flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: 52,
          position: 'relative', zIndex: 2,
        }}>
          <button
            onClick={() => nav('contact')}
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
          <button
            onClick={() => nav('varo-ai')}
            style={{
              background: 'transparent', color: '#ffffff',
              fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 400,
              padding: '15px 32px', borderRadius: 10, cursor: 'pointer',
              border: '1px solid rgba(255,255,255,0.18)',
              transition: 'border-color .2s, color .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = '#ffffff' }}
          >
            Explore Varo AI
          </button>
        </div>

        {/* Proof line */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--mid-gray)', letterSpacing: '.06em',
          display: 'flex', flexWrap: 'wrap', gap: 6,
          justifyContent: 'center', marginBottom: 72,
          position: 'relative', zIndex: 2,
        }}>
          {['6 enterprise customers', '·', '100% retention', '·', '2 patents pending', '·', 'Lighthouse Network 2026'].map((item, i) => (
            <span key={i} style={{ opacity: item === '·' ? 0.35 : 1 }}>{item}</span>
          ))}
        </div>

        {/* Terminal */}
        <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          <AlertTerminal />
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{
        background: '#141413',
        borderTop: '1px solid rgba(220,40,60,0.1)',
        borderBottom: '1px solid rgba(220,40,60,0.1)',
        padding: '14px 5vw',
        display: 'flex', gap: 44, flexWrap: 'wrap', overflowX: 'hidden',
      }}>
        {[
          'Lighthouse Network 2026 — first international selectee',
          'SelectUSA 2026 Finalist',
          'Vendor-neutral · Works above Dragos · Claroty · Nozomi',
          'Built on A.G.E.N.T. Loop · 18+ years OT/ICS expertise',
          '2 patents pending',
        ].map(item => (
          <div key={item} style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'var(--mid-gray)', display: 'flex', alignItems: 'center', gap: 7,
            whiteSpace: 'nowrap',
          }}>
            <span style={{ color: 'var(--red)', fontSize: 7 }}>◆</span>
            {item}
          </div>
        ))}
      </div>

      {/* ── WHAT WE DO ── */}
      <section style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            The company
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            letterSpacing: '-0.03em', lineHeight: 1.12,
            color: 'var(--navy)', marginBottom: 20,
          }}>
            ENCYBER secures the<br />infrastructure the world runs on.
          </h2>
          <p className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 300,
            color: '#5A7A9A', lineHeight: 1.75, maxWidth: 620, marginBottom: 60,
          }}>
            Power grids, water treatment plants, oil refineries, manufacturing lines — the operational technology behind critical infrastructure is increasingly connected and increasingly targeted. ENCYBER was founded with one mission: give OT security teams the intelligence to act on what matters, not everything that fires.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {[
              { icon: <Shield size={22} />, title: 'Critical infrastructure focus', body: 'Purpose-built for OT/ICS environments — not adapted from IT cybersecurity. Every design decision starts from how industrial systems actually work.' },
              { icon: <Brain size={22} />, title: 'AI-native from day one', body: 'Multi-agent reasoning at the core, not bolted on as a feature. The A.G.E.N.T. Loop is how Varo AI thinks — seven specialized agents working in parallel.' },
              { icon: <Globe size={22} />, title: 'Vendor-neutral by design', body: 'Works above Dragos, Claroty, and Nozomi. No forklift replacement. No vendor lock-in. Your existing investments stay in place.' },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: '#ffffff', border: '1px solid var(--light-gray)',
                  borderRadius: 16, padding: '32px 28px',
                  transition: 'transform .25s, box-shadow .25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(220,40,60,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--red)', marginBottom: 18,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600,
                  color: 'var(--navy)', marginBottom: 10,
                }}>{card.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300,
                  color: '#5A7A9A', lineHeight: 1.7,
                }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT INTRO ── */}
      <section style={{ background: 'var(--warm-black)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center',
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Our product
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            letterSpacing: '-0.03em', color: '#ffffff',
            marginBottom: 20,
          }}>Meet Varo AI.</h2>
          <p className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 300,
            color: 'var(--mid-gray)', lineHeight: 1.75,
            maxWidth: 560, margin: '0 auto 48px',
          }}>
            The decision intelligence layer for OT/ICS security. Ingests alerts from your existing tools. Delivers one clear, prioritized action — with a full reasoning trace attached.
          </p>
          <button
            className="reveal"
            onClick={() => nav('varo-ai')}
            style={{
              background: 'var(--red)', color: '#ffffff',
              fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
              padding: '15px 32px', borderRadius: 10, border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 8px 28px rgba(220,40,60,0.25)',
              marginBottom: 64,
              transition: 'background .2s, transform .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E8404C'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            See how Varo AI works <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ── STATS / WHY ENCYBER ── */}
      <section style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
            alignItems: 'center',
          }}>
            <div>
              <div className="reveal" style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                letterSpacing: '.18em', color: 'var(--red)',
                textTransform: 'uppercase', marginBottom: 18,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
                Why ENCYBER
              </div>
              <h2 className="reveal" style={{
                fontFamily: 'var(--font-sans)', fontWeight: 800,
                fontSize: 'clamp(26px, 3vw, 42px)',
                letterSpacing: '-0.03em', lineHeight: 1.12,
                color: 'var(--navy)', marginBottom: 20,
              }}>
                18 years of OT expertise, distilled into AI.
              </h2>
              <p className="reveal" style={{
                fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 300,
                color: '#5A7A9A', lineHeight: 1.75, marginBottom: 32,
              }}>
                Varo AI was built by someone who has lived the problem — not a team that studied it. Founded by Christine Kim after 18+ years inside OT/ICS security environments across Korea and Asia-Pacific.
              </p>
              <button
                className="reveal"
                onClick={() => nav('about')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
                  color: 'var(--red)', display: 'flex', alignItems: 'center', gap: 6,
                  padding: 0,
                }}
              >
                Our story <ArrowRight size={14} />
              </button>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
            }}>
              {[
                { num: '6', label: 'Enterprise customers' },
                { num: '100%', label: 'Customer retention' },
                { num: '18+', label: 'Years OT/ICS expertise' },
                { num: '2', label: 'Patents pending' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    background: '#ffffff', border: '1px solid var(--light-gray)',
                    borderRadius: 14, padding: '28px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: 42,
                    fontWeight: 800, letterSpacing: '-0.04em',
                    color: 'var(--navy)', lineHeight: 1,
                    marginBottom: 8,
                  }}>{stat.num}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'var(--mid-gray)', letterSpacing: '.1em',
                    textTransform: 'uppercase', lineHeight: 1.5,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section style={{ background: 'var(--warm-black)', padding: '110px 5vw' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            letterSpacing: '.18em', color: 'var(--red)',
            textTransform: 'uppercase', marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 20, height: 2, background: 'var(--red)', borderRadius: 1 }} />
            Recognition
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            letterSpacing: '-0.03em', color: '#ffffff', marginBottom: 48,
          }}>Recognized globally.</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}>
            {[
              { badge: 'Lighthouse Network 2026', detail: 'First international company selected · Richmond, Virginia, USA', color: 'var(--red)' },
              { badge: 'SelectUSA 2026 Finalist', detail: 'U.S. Department of Commerce Investment Summit · Washington, D.C.', color: 'var(--amber)' },
              { badge: 'Microsoft for Startups', detail: 'Azure credits & GPU cluster access for Varo AI infrastructure', color: '#0078D4' },
            ].map((item, i) => (
              <div
                key={item.badge}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'rgba(28,27,26,0.7)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14, padding: '28px 24px',
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                  color: item.color, letterSpacing: '.08em',
                  marginBottom: 10,
                }}>🏆 {item.badge}</div>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300,
                  color: 'var(--mid-gray)', lineHeight: 1.65,
                }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL CTA ── */}
      <section style={{ background: 'var(--warm-white)', padding: '110px 5vw' }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
        }}>
          {[
            {
              eyebrow: 'For OT security teams',
              heading: 'Ready to see Varo AI on your alerts?',
              body: '30 minutes. Your data. No commitment. Enterprise teams see results in the first session.',
              cta: 'Request a demo', page: 'contact' as Page, primary: true,
            },
            {
              eyebrow: 'For investors',
              heading: 'Building the future of OT security.',
              body: 'ENCYBER is actively raising its seed round. We\'d love to tell you about the opportunity.',
              cta: 'Get in touch', page: 'contact' as Page, primary: false,
            },
          ].map(card => (
            <div
              key={card.eyebrow}
              className="reveal"
              style={{
                background: '#ffffff', border: '1px solid var(--light-gray)',
                borderRadius: 20, padding: '40px 36px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '.14em', color: 'var(--red)',
                textTransform: 'uppercase', marginBottom: 16,
              }}>{card.eyebrow}</div>
              <h3 style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 22,
                letterSpacing: '-0.02em', color: 'var(--navy)', marginBottom: 14,
              }}>{card.heading}</h3>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300,
                color: '#5A7A9A', lineHeight: 1.7, marginBottom: 28,
              }}>{card.body}</p>
              <button
                onClick={() => nav(card.page)}
                style={{
                  background: card.primary ? 'var(--red)' : 'var(--navy)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
                  padding: '13px 26px', borderRadius: 9, border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 7,
                  transition: 'opacity .2s, transform .15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {card.cta} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

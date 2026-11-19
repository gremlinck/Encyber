import { useEffect } from 'react'
import { Link } from '../lib/router'
import Orbit from '../components/Orbit'
import { EMAIL, LINKEDIN, LinkedInIcon } from '../components/Footer'

const pillars = [
  { en: 'OFFENSIVE SECURITY', ko: '오펜시브 보안', items: ['시나리오 기반 모의해킹 (네트워크·웹·클라우드)', '레드팀 · 공격자 관점 침투 테스트', '침해 흔적 진단'] },
  { en: 'OT / ICS SECURITY', ko: 'OT/ICS 보안', items: ['비침투식 OT 자산·취약점 진단', 'ICS/SCADA 모의해킹', 'OT/ICS 공격 시나리오 시뮬레이션', 'ICS 보안 프레임워크 성숙도 평가'] },
  { en: 'DEFENSE & COMPLIANCE', ko: '방어 및 컴플라이언스', items: ['애플리케이션 보안 검토 (설계·코드)', '규제 대응 컨설팅', 'USCG MTS · IEC 62443 · NIST CSF · ISO 27001 · PCI DSS'] },
  { en: 'TRAINING & CYBER RANGE', ko: '교육 및 사이버 레인지', items: ['OT/ICS 실습 교육 (EnguardX)', '사이버 레인지 및 블루팀 대응 훈련'] },
  { en: 'THREAT RESEARCH', ko: '위협 인텔리전스', items: ['취약점 연구 및 탐지 룰 개발'] },
]

const principles = [
  { t: '안전 최우선', d: '비침투 방식을 우선 적용해 생산 중단 없이 진단합니다.' },
  { t: '근거 기반', d: '모든 진단 결과에 근거와 우선순위를 함께 제시합니다.' },
  { t: '내재화되는 역량', d: '고객 조직이 스스로 대응할 수 있도록 교육합니다.' },
  { t: '경보가 아닌 결정', d: '더 적지만 명확한 조치 방안을 제안합니다.' },
]

const products = [
  { id: 'enguardx', tag: 'TRAINING PLATFORM', name: 'EnguardX', line: '현장 중심의 OT 보안 실습 교육', desc: '운영자, 엔지니어, 보안관제(SOC) 인력이 실제 산업용 장비와 실전 공격 시나리오를 통해 탐지·대응 역량을 키웁니다.', pts: ['사이버 레인지 및 이동형 OT 테스트베드', '운영자부터 경영진까지 직무별 교육 과정', '사고 대응 훈련 및 팀별 역량 평가'] },
  { id: 'varo', tag: 'DECISION INTELLIGENCE', name: 'Varo AI', line: '경보는 줄이고, 판단은 정확하게', desc: '기존 OT 탐지 플랫폼 위에서 작동하는 AI 판단 레이어입니다. 각 경보에 현장 맥락을 더해 무엇이 중요한지, 어떻게 대응해야 하는지 명확히 제시합니다.', pts: ['기존 탐지 솔루션과 연동', '공정에 미치는 영향까지 설명', '구체적인 후속 조치 제안'] },
]

export default function Korean() {
  useEffect(() => {
    const prev = document.documentElement.lang
    document.documentElement.lang = 'ko'
    return () => { document.documentElement.lang = prev || 'en' }
  }, [])

  return (
    <div className="ko">
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label="엔사이버">ENCYBER<span>.</span></a>
          <nav className="nav-links" aria-label="페이지 메뉴">
            <a className="nav-link" href="#about">회사 소개</a>
            <a className="nav-link" href="#services">서비스</a>
            <a className="nav-link" href="#products">제품</a>
            <a className="nav-link" href="#partners">파트너</a>
            <a className="nav-link" href="#contact">문의</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/" className="lang-pill" aria-label="English site">EN</Link>
            <a href="#contact" className="btn btn-primary btn-sm ko-cta">상담 문의</a>
          </div>
        </div>
      </header>

      <main>
        <section id="top" className="hero dark page-hero">
          <div className="gridbg" aria-hidden="true" />
          <div className="orb" aria-hidden="true" style={{ width: 900, height: 900, right: -260, top: -380 }} />
          <Orbit size={700} style={{ right: -180, top: 40 }} />
          <div className="wrap hero-inner">
            <div className="eyebrow rise d1" style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span className="pulse" />CYBERSECURITY FOR CRITICAL OPERATIONS</div>
            <h1 className="rise d2" style={{ fontSize: 'clamp(32px, 4.4vw, 60px)', lineHeight: 1.2, maxWidth: 'none' }}>핵심 인프라의 운영이 멈추지 않도록,<br /><b>엔사이버가 지킵니다<span className="dot">.</span></b></h1>
            <p className="lead rise d3" style={{ maxWidth: 720, lineHeight: 1.7 }}>엔사이버는 항만, 에너지, 제조, 데이터센터 등 핵심 인프라의 IT·OT 환경을 보호하는 사이버보안 전문 기업입니다. 공격자 관점의 보안 진단부터 실무 중심 교육, AI 기반 의사결정까지 보안 전 주기를 원스톱으로 지원합니다.</p>
            <div className="hero-actions rise d4">
              <a href="#contact" className="btn btn-primary">상담 신청하기</a>
              <a href="#services" className="btn btn-ghost">서비스 살펴보기</a>
            </div>
          </div>
        </section>

        <section id="about" className="section" style={{ paddingBottom: 72 }}>
          <div className="wrap split" style={{ alignItems: 'flex-start' }}>
            <div className="col reveal">
              <div className="eyebrow">ABOUT · 회사 소개</div>
              <h2 className="h2 ko-h2">산업 현장과 기업 IT를 아우르는 <b>보안 파트너<span className="dot">.</span></b></h2>
              <p className="lead" style={{ lineHeight: 1.8 }}>엔사이버는 OT/ICS 보안 전문성을 바탕으로 산업제어시스템과 기업 IT 환경을 함께 보호합니다. 고객이 리스크를 정확히 파악하고, 실제로 대응할 수 있는 조직 역량을 갖추며, 보다 신속하게 의사결정을 내릴 수 있도록 지원합니다.</p>
            </div>
            <div className="col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {principles.map((p, i) => (
                <div key={p.t} className="card reveal" style={{ padding: 22, gap: 6 }}>
                  <span className="eyebrow" style={{ fontSize: 11 }}>PRINCIPLE 0{i + 1}</span>
                  <b style={{ fontSize: 17 }}>{p.t}</b>
                  <span className="body" style={{ fontSize: 14, lineHeight: 1.6 }}>{p.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F4F7 100%)', borderTop: '1px solid var(--glass-border)' }}>
          <div className="gridbg" aria-hidden="true" style={{ opacity: 0.6 }} />
          <div className="wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div className="head reveal" style={{ maxWidth: 800 }}>
              <div className="eyebrow">SERVICES · 서비스</div>
              <h2 className="h2 ko-h2">5대 분야, <b>12개 보안 서비스<span className="dot">.</span></b></h2>
              <p className="lead">진단·컨설팅부터 교육과 운영 고도화까지 보안 전 주기를 아우르며, 안전이 최우선인 환경에 맞춰 설계합니다.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {pillars.map((p, i) => (
                <div key={p.ko} className="card reveal ko-row">
                  <div className="ko-row-head">
                    <span className="eyebrow" style={{ fontSize: 12, letterSpacing: '.08em' }}>0{i + 1} · {p.en}</span>
                    <h3 style={{ fontSize: 22, fontWeight: 700 }}>{p.ko}</h3>
                  </div>
                  <div className="ko-chips">{p.items.map(x => <span key={x} className="chip">{x}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div className="head reveal" style={{ maxWidth: 'none' }}>
              <div className="eyebrow">PRODUCTS · 제품</div>
              <h2 className="h2 ko-h2">두 가지 제품, <b>하나의 목표 — 사이버 리질리언스<span className="dot">.</span></b></h2>
            </div>
            <div className="products">
              {products.map(p => (
                <div key={p.id} className={`card product reveal${p.id === 'varo' ? ' glow-hl' : ''}`}>
                  <div className="top"><span className="tag">{p.tag}</span><span className="led" aria-hidden="true" /></div>
                  <h3>{p.name}</h3>
                  <p className="line" style={{ fontWeight: 600 }}>{p.line}</p>
                  <p className="body" style={{ lineHeight: 1.7 }}>{p.desc}</p>
                  <ul>{p.pts.map(x => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #F3F6F9 0%, #E6ECF2 100%)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
          <div className="gridbg" aria-hidden="true" />
          <div className="wrap split" style={{ position: 'relative', alignItems: 'center' }}>
            <div className="col reveal">
              <div className="eyebrow">PARTNERS · 파트너</div>
              <h2 className="h2 ko-h2">글로벌 전문성, <b>단일 창구<span className="dot">.</span></b></h2>
              <p className="lead">검증된 글로벌 OT 교육 및 오펜시브 보안 전문 기업과 협력해 프로젝트를 수행하며, 엔사이버가 단일 창구로서 전 과정을 책임지고 관리합니다.</p>
            </div>
            <div className="chain reveal">
              <div className="row"><span>OT 교육 · 사이버 레인지</span><span style={{ color: '#6B7280' }}>GLOBAL PARTNER</span></div>
              <div className="row"><span>오펜시브 보안 · 위협 연구</span><span style={{ color: '#6B7280' }}>GLOBAL PARTNER</span></div>
              <div className="row hot"><span>엔사이버 · 단일 창구</span><span style={{ color: 'var(--red-text)' }}>LEAD</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap split" style={{ alignItems: 'center' }}>
            <div className="col reveal">
              <div className="eyebrow">CONTACT · 문의</div>
              <h2 className="h2 ko-h2">귀사의 보안 환경을 <b>함께 점검해 보세요<span className="dot">.</span></b></h2>
              <p className="lead">현재 고민 중인 과제를 알려 주시면 영업일 기준 1일 이내에 회신드리겠습니다.</p>
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('엔사이버 상담 문의')}`} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>이메일로 문의하기 · {EMAIL}</a>
            </div>
            <div className="col reveal" style={{ gap: 14 }}>
              <div className="card" style={{ padding: '22px 24px', gap: 4 }}><span className="eyebrow" style={{ fontSize: 11 }}>SOUTH KOREA</span><b style={{ fontSize: 20 }}>서울</b></div>
              <div className="card" style={{ padding: '22px 24px', gap: 4 }}><span className="eyebrow" style={{ fontSize: 11 }}>USA</span><b style={{ fontSize: 20 }}>미국 버지니아주 리치먼드</b></div>
              <a href={LINKEDIN} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500 }}><LinkedInIcon />LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-bottom">
          <span className="brand" style={{ fontSize: 18 }}>ENCYBER<span>.</span></span>
          <span>© 2024–{new Date().getFullYear()} 주식회사 엔사이버 (Encyber Co., Ltd.) · 서울 · 리치먼드</span>
        </div>
      </footer>
    </div>
  )
}

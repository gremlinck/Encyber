import { Link } from '../lib/router'

const products = [
  {
    id: 'enguardx',
    tag: 'TRAINING PLATFORM',
    name: 'EnguardX',
    line: 'OT security training, built for the plant floor.',
    desc: 'Hands-on training where operators, engineers and SOC teams practise on real industrial equipment and realistic attack scenarios — not slides.',
    points: ['Cyber range and portable OT testbeds', 'Role-based tracks from operator to leadership', 'Incident response drills and team scorecards'],
    cta: 'Explore EnguardX',
  },
  {
    id: 'varo',
    tag: 'DECISION INTELLIGENCE',
    name: 'Varo AI',
    line: 'Fewer alerts. Better decisions.',
    desc: 'An AI-powered judgment layer above your existing OT detection platform. It adds plant context to every alert so your team knows what matters and what to do next.',
    points: ['Works with the detection you already run', 'Explains why an alert matters to the process', 'Recommends clear next steps'],
    cta: 'Explore Varo AI',
  },
]

export default function ProductCards({ onPage = false }: { onPage?: boolean }) {
  return (
    <div className="products">
      {products.map(p => (
        <div key={p.id} className={`card product reveal${p.id === 'varo' ? ' glow-hl' : ''}`}>
          <div className="top"><span className="tag">{p.tag}</span><span className="led" aria-hidden="true" /></div>
          <h3>{p.name}</h3>
          <p className="line">{p.line}</p>
          <p className="body">{p.desc}</p>
          <ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul>
          {onPage ? <a href={`#${p.id}`}>{p.cta} →</a> : <Link to={`/products#${p.id}`}>{p.cta} →</Link>}
        </div>
      ))}
    </div>
  )
}

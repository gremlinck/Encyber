import type { CSSProperties } from 'react'

// Slowly turning rings with orbiting dots and outward pulses. Decorative only.
export default function Orbit({ size, style }: { size: number; style: CSSProperties }) {
  return (
    <div className="orbit" aria-hidden="true" style={{ width: size, height: size, ...style }}>
      <div className="o1" />
      <div className="o2" />
      <div className="o3" />
      <div className="t1" />
      <div className="t2" />
      <div className="t3" />
      <div className="pw" />
      <div className="pw pw2" />
    </div>
  )
}

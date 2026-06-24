import { useState, useEffect } from 'react'

interface Alert {
  id: number
  severity: 'critical' | 'monitor' | 'routine'
  name: string
  source: string
  time: string
}

const alertPool: Omit<Alert, 'id' | 'time'>[] = [
  { severity: 'critical', name: 'Unauthorized Modbus write — PLC-04', source: 'Reactor Unit 3 · Dragos' },
  { severity: 'monitor', name: 'Anomalous HMI login — Engineering WS', source: 'Control Room B · Claroty' },
  { severity: 'routine', name: 'Firmware version mismatch — RTU-07', source: 'Field Zone · Nozomi' },
  { severity: 'monitor', name: 'OPC-UA session anomaly — HIST-01', source: 'OT DMZ · Dragos' },
  { severity: 'routine', name: 'Scheduled backup cycle completed', source: 'IT/OT Bridge · Claroty' },
  { severity: 'critical', name: 'OPC-UA session hijack attempt', source: 'Substation-1 · Dragos' },
  { severity: 'monitor', name: 'Unexpected SCADA config change', source: 'Unit 4 · Claroty' },
  { severity: 'routine', name: 'Patch window compliance check', source: 'RTU-12 · Nozomi' },
  { severity: 'critical', name: 'Ransomware IOC — file extension', source: 'Eng. WS · Dragos' },
  { severity: 'monitor', name: 'IT/OT bridge traffic anomaly', source: 'DMZ · Claroty' },
]

const severityConfig = {
  critical: { color: '#DC283C', label: 'ACT NOW', bg: 'rgba(220,40,60,0.08)', border: 'rgba(220,40,60,0.28)' },
  monitor:  { color: '#E1873C', label: 'MONITOR', bg: 'rgba(225,135,60,0.07)', border: 'rgba(225,135,60,0.25)' },
  routine:  { color: '#4A7C59', label: 'ROUTINE', bg: 'rgba(74,124,89,0.07)',  border: 'rgba(74,124,89,0.22)' },
}

let alertId = 0

export default function AlertTerminal() {
  const [alerts, setAlerts] = useState<Alert[]>(() =>
    alertPool.slice(0, 5).map((a, i) => ({
      ...a, id: i,
      time: i === 0 ? 'just now' : `${i * 3}s ago`,
    }))
  )
  const [poolIdx, setPoolIdx] = useState(5)
  const [tilt, setTilt] = useState({ x: 6, y: -2 })

  useEffect(() => {
    const interval = setInterval(() => {
      const next = alertPool[poolIdx % alertPool.length]
      setPoolIdx(i => i + 1)
      alertId++
      setAlerts(prev => [
        { ...next, id: alertId, time: 'just now' },
        ...prev.slice(0, 4),
      ])
    }, 4500)
    return () => clearInterval(interval)
  }, [poolIdx])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: 6 - dy * 4, y: -2 + dx * 3 })
  }

  const counts = {
    critical: alerts.filter(a => a.severity === 'critical').length,
    monitor: alerts.filter(a => a.severity === 'monitor').length,
    routine: alerts.filter(a => a.severity === 'routine').length,
  }

  return (
    <div
      style={{ perspective: 1200, width: '100%', maxWidth: 860, margin: '0 auto' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 6, y: -2 })}
    >
      <div style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform .4s ease',
        borderRadius: 18,
        boxShadow: '0 40px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(220,40,60,0.18), 0 60px 120px rgba(220,40,60,0.07)',
      }}>
        {/* Terminal window */}
        <div style={{ background: '#0a0908', borderRadius: 18, overflow: 'hidden' }}>
          {/* Title bar */}
          <div style={{
            background: '#141210',
            padding: '13px 18px',
            display: 'flex', alignItems: 'center', gap: 8,
            borderBottom: '1px solid rgba(220,40,60,0.1)',
          }}>
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#DC283C' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#E1873C' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#4A7C59' }} />
            <span style={{
              flex: 1, textAlign: 'center',
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'rgba(176,174,165,0.4)', letterSpacing: '.1em',
            }}>
              VARO AI · A.G.E.N.T. LOOP · LIVE
            </span>
          </div>

          {/* Body */}
          <div style={{ padding: '20px 22px' }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '.14em', color: 'var(--red)',
              textTransform: 'uppercase', marginBottom: 14,
            }}>
              Incoming alert stream
            </div>

            {/* Alert list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {alerts.map(alert => {
                const cfg = severityConfig[alert.severity]
                return (
                  <div
                    key={alert.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '10px 1fr auto',
                      gap: 12, alignItems: 'center',
                      padding: '11px 14px',
                      borderRadius: 9,
                      background: cfg.bg,
                      border: `1px solid ${cfg.border}`,
                      animation: 'alertEnter .4s ease',
                    }}
                  >
                    <div style={{
                      width: 9, height: 9, borderRadius: '50%',
                      background: cfg.color,
                      boxShadow: alert.severity === 'critical' ? `0 0 7px ${cfg.color}` : 'none',
                      animation: alert.severity === 'critical' ? 'dotPulse 1.6s ease-in-out infinite' : 'none',
                      flexShrink: 0,
                    }} />
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
                        color: '#d0c8c0', marginBottom: 2,
                      }}>{alert.name}</div>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        color: 'rgba(176,174,165,0.5)',
                      }}>{alert.source} · {alert.time}</div>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
                      padding: '3px 9px', borderRadius: 5,
                      background: cfg.bg, color: cfg.color,
                      border: `1px solid ${cfg.border}`,
                      letterSpacing: '.05em', whiteSpace: 'nowrap',
                    }}>
                      {cfg.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Stats bar */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              marginTop: 16, paddingTop: 16,
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10,
            }}>
              {[
                { label: 'Act now', val: counts.critical, color: '#DC283C' },
                { label: 'Monitor', val: counts.monitor, color: '#E1873C' },
                { label: 'Routine', val: counts.routine, color: '#4A7C59' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'rgba(28,27,26,0.8)', borderRadius: 8,
                  padding: '11px 10px', textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.04)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: 22,
                    fontWeight: 700, color: s.color, lineHeight: 1,
                  }}>{s.val}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    color: 'var(--mid-gray)', textTransform: 'uppercase',
                    letterSpacing: '.1em', marginTop: 4,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glow reflection */}
      <div style={{
        height: 40, marginTop: -20,
        background: 'radial-gradient(ellipse, rgba(220,40,60,0.1) 0%, transparent 70%)',
        filter: 'blur(16px)',
        borderRadius: '0 0 20px 20px',
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes alertEnter {
          from { opacity:0; transform:translateX(-10px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:.4; transform:scale(1.5); }
        }
      `}</style>
    </div>
  )
}

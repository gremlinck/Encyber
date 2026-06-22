import { useState, useEffect } from "react";
import { 
  Shield, 
  Menu, 
  Cpu, 
  Layers, 
  Eye, 
  History, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  BadgeCheck, 
  ExternalLink,
  ChevronRight,
  Info,
  X,
  Lock,
  Grid
} from "lucide-react";
import VaroTerminal from "./components/VaroTerminal";
import VaroBriefing from "./components/VaroBriefing";
import EnyberLogo from "./components/EnyberLogo";

// High-fidelity ENCYBER logos from original prompt layout
const CTA_BACKGROUND_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCRhYRR2-4eb6fGy7ma2PSgT78V2hk7TV5q6jD7GQvraKWM4_gLMvZ1ObMtC6h7zOHzOqhbMNOLIvyABtRW74Kx15il0A7_cN7N9psqvhjL_41WAj56q8ynRwGNmObjPitcq_NITuxXbiENsyoCqXMWNs6IlhqSSCh0bxcLmkbpZdlvRaMsK0kQ4zH7Cm_Njv4Ihiga7ZIsOG_AONHCU95V7k99XveZ_3QFzBxNMB3seDn6VJrHxEtdl6Trjojq0e0ryggM_sD3DUlh";

export default function App() {
  // Modal & Drawer toggles
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);
  const [isSpecsDrawerOpen, setIsSpecsDrawerOpen] = useState(false);
  const [activeBentoModal, setActiveBentoModal] = useState<string | null>(null);
  const [activeStepTab, setActiveStepTab] = useState<number | null>(null);

  // Full-screen initialization sequence state
  const [isSovereigntyInitializing, setIsSovereigntyInitializing] = useState(false);
  const [initStage, setInitStage] = useState(0);
  const [initLogs, setInitLogs] = useState<string[]>([]);

  // Telemetry status heartbeat state
  const [threatMetrics, setThreatMetrics] = useState({
    latency: 0.40,
    packets: 0,
    networkImpact: 0.00
  });

  // Small Jitter simulation on latency metrics for extreme realism
  useEffect(() => {
    const interval = setInterval(() => {
      setThreatMetrics((prev) => ({
        ...prev,
        latency: parseFloat((0.37 + Math.random() * 0.06).toFixed(2)),
        packets: Math.floor(Math.random() * 4)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // System initialization sequence loop
  const triggerSovereigntyInit = () => {
    setIsSovereigntyInitializing(true);
    setInitStage(0);
    setInitLogs(["[SECURE_BOOT] Requesting authority tokens from sovereign master cluster..."]);

    const stages = [
      { delay: 1200, log: "[INIT] Handshake accepted. Allocating crypto logic registers..." },
      { delay: 2400, log: "[SECURE_BOOT] Passive EMF tap arrays successfully synchronized." },
      { delay: 3600, log: "[SECURE_BOOT] Recalculating NERC CIP cryptosigns: Verified." },
      { delay: 4800, log: "[SECURE_BOOT] Fleet logical airgaps actuated. All segments live." },
      { delay: 6000, log: "[SUCCESS] SOVEREIGN SECURITY REGIME SUCCESSFULLY ENGAGED!" }
    ];

    stages.forEach((stg, idx) => {
      setTimeout(() => {
        setInitLogs((prev) => [...prev, stg.log]);
        setInitStage(idx + 1);
      }, stg.delay);
    });
  };

  return (
    <div className="bg-warm-off-white text-primary-navy font-sans selection:bg-signal-red selection:text-white min-h-screen relative flex flex-col justify-between overflow-x-hidden">
      
      {/* 1. Header Toolbar */}
      <header className="fixed top-0 w-full z-50 bg-warm-off-white/85 backdrop-blur-md border-b border-border-subtle select-none">
        <div className="flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2.5 hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
            <EnyberLogo size={28} />
            <span className="font-serif text-[20px] tracking-tight font-bold text-signal-red uppercase">
              ENCYBER
            </span>
          </div>

          {/* Quick Header Indicators & Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setActiveBentoModal("compliance")}
              className="group flex items-center gap-1.5 font-mono text-[10px] text-signal-red hover:text-signal-red/80 transition-colors bg-signal-red/5 hover:bg-signal-red/10 border border-signal-red/15 rounded px-2.5 py-1"
              title="NERC CIP Status Indicator"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal-red group-hover:scale-110 transition-transform shadow-[0_0_8px_rgba(220,40,60,0.6)] animate-pulse" />
              <span className="hidden sm:inline font-bold">SECURED</span>
            </button>

            <button 
              onClick={() => setIsSpecsDrawerOpen(true)}
              className="text-mid-gray hover:text-primary-navy transition-colors p-1"
              title="Technical Specifications & Protocols Drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Body Wrap */}
      <main className="pt-16 flex-1">

        {/* 2. Hero Presentation Block */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-margin-mobile text-center relative overflow-hidden bg-warm-off-white py-12 select-none">
          {/* Aesthetic background design circles */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-navy/2 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-signal-red/2 blur-[100px] rounded-full pointer-events-none" />

          <div className="z-10 max-w-3xl space-y-8 flex flex-col items-center">
            {/* Embedded Logo in Hero */}
            <div className="mb-2 p-3 bg-white border border-[#000F3C]/10 rounded-full shadow-[0_4px_30px_rgba(232,157,66,0.06)] hover:scale-105 hover:rotate-6 transition-all duration-300">
              <EnyberLogo size={80} />
            </div>

            {/* Tagline */}
            <p className="font-mono text-xs font-bold text-signal-red uppercase tracking-[0.25em] animate-pulse">
              Industrial Intelligence System
            </p>

            {/* Main elegant serif headings */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-primary-navy font-semibold tracking-tight">
              Stop triaging alerts.<br />
              <span className="not-italic font-bold font-serif italic text-signal-red">Start making decisions.</span>
            </h1>

            {/* Value sentence */}
            <p className="font-sans text-sm sm:text-base text-[#7c7b74] max-w-xl mx-auto leading-relaxed font-light">
              Varo AI brings sovereign situational awareness to every critical infrastructure node — securing plant floors, substations, and pipelines without a single packet injected.
            </p>

            {/* Click CTA Interactions */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsBriefingOpen(true)}
                className="w-full sm:w-auto bg-signal-red text-white hover:bg-signal-red/95 px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-widest hover:shadow-[0_10px_25px_-5px_rgba(220,40,60,0.3)] active:scale-95 transition-all text-center rounded-sm"
              >
                Request a Briefing
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById("terminal-view-anchor");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto border border-[#000F3C]/15 text-primary-navy hover:bg-primary-navy/5 px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-widest active:scale-95 transition-all text-center rounded-sm"
              >
                Technical Specs
              </button>
            </div>
          </div>
        </section>

        {/* 3. Interactive SCADA Terminal Interface */}
        <section id="terminal-view-anchor" className="py-20 px-margin-mobile bg-warm-off-white border-t border-border-subtle relative">
          <div className="max-w-container-max mx-auto space-y-4 text-center mb-10 select-none">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-navy">
              Sovereign Defender Core
            </h2>
            <p className="text-xs text-mid-gray max-w-md mx-auto">
              Select dynamic alarms, examine backend network logs in real-time, or issue prompt override tasks to query the Varo AI Defensive Kernel.
            </p>
          </div>
          <VaroTerminal />
        </section>

        {/* 4. Statistics Grid Board (Bento Layout) */}
        <section className="py-20 px-margin-mobile bg-warm-off-white border-t border-border-subtle">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#000F3C]/10 rounded-lg overflow-hidden shadow-sm">
              
              {/* Stat Card: Threat Isolation */}
              <div 
                onClick={() => setActiveBentoModal("isolation")}
                className="bg-[#FAF9F5] p-8 h-48 flex flex-col justify-between hover:bg-[#F2F1EC] transition-colors cursor-pointer select-none group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-mid-gray uppercase tracking-widest block font-medium">
                    Threat Isolation
                  </span>
                  <Info className="w-3.5 h-3.5 text-mid-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-3xl font-bold text-signal-red">
                    {threatMetrics.latency}ms
                  </div>
                  <p className="font-sans text-xs text-mid-gray">
                    Response latency from anomalous packet signal to total node airgap.
                  </p>
                </div>
              </div>

              {/* Stat Card: Network Impact */}
              <div 
                onClick={() => setActiveBentoModal("impact")}
                className="bg-[#FAF9F5] p-8 h-48 flex flex-col justify-between hover:bg-[#F2F1EC] transition-colors cursor-pointer select-none group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-mid-gray uppercase tracking-widest block font-medium">
                    Network Impact
                  </span>
                  <Info className="w-3.5 h-3.5 text-mid-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-3xl font-bold text-signal-red">
                    {threatMetrics.networkImpact.toFixed(2)}%
                  </div>
                  <p className="font-sans text-xs text-mid-gray">
                    Zero-packet injection. Absolutely invisible electromagnetic system surveillance.
                  </p>
                </div>
              </div>

              {/* Stat Card: Compliance Readiness */}
              <div 
                onClick={() => setActiveBentoModal("compliance")}
                className="bg-[#FAF9F5] p-8 h-48 flex flex-col justify-between hover:bg-[#F2F1EC] transition-colors cursor-pointer select-none group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-mid-gray uppercase tracking-widest block font-medium">
                    Compliance
                  </span>
                  <Info className="w-3.5 h-3.5 text-mid-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-lg font-bold tracking-widest text-[#000F3C] flex items-center gap-1.5">
                    <BadgeCheck className="w-5 h-5 text-signal-red" />
                    NERC CIP
                  </div>
                  <p className="font-sans text-xs text-mid-gray">
                    Exceeding all critical infrastructure grid authority protection parameters.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. A.G.E.N.T. Loop Section */}
        <section className="py-24 bg-surface-container border-y border-border-subtle overflow-hidden">
          <div className="px-margin-mobile max-w-container-max mx-auto space-y-16 select-none">
            
            {/* Header letters */}
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center gap-1 font-serif text-2xl tracking-[0.2em] font-medium mb-1">
                <span className="pulse-red font-bold">A</span>
                <span className="pulse-red font-bold">G</span>
                <span className="pulse-red font-bold">E</span>
                <span className="pulse-red font-bold">N</span>
                <span className="pulse-red font-bold">T</span>
                <span className="ml-4 font-serif italic text-primary-navy font-light lowercase">Loop</span>
              </div>
              <p className="text-mid-gray max-w-xl mx-auto italic font-serif text-sm">
                Autonomous Governance of Engine-Neutral Technologies. Security that scales without supervision.
              </p>
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-2">
              
              {/* Step 1: Ingest */}
              <div 
                onClick={() => setActiveStepTab(0)}
                className={`p-8 space-y-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                  activeStepTab === 0 
                  ? "bg-white shadow-xl scale-[1.02] border-signal-red/25" 
                  : "bg-white border-border-subtle hover:border-[#000F3C]/20"
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-signal-red/10 text-signal-red border border-signal-red/20">
                  <span className="font-mono font-bold text-base">01</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif italic font-semibold text-lg text-primary-navy">Ingest</h3>
                  <p className="text-xs text-mid-gray leading-relaxed font-light">
                    Passively consumes multi-source telemetry without disrupting native operations.
                  </p>
                </div>
                <div className="border-t border-border-subtle pt-4 mt-auto flex items-center justify-between">
                  <span className="font-mono text-[9px] text-signal-red tracking-widest font-bold">ACTIVE_TAP</span>
                  <ChevronRight className={`w-3 h-3 text-mid-gray transition-transform ${activeStepTab === 0 ? "rotate-90 text-signal-red" : ""}`} />
                </div>
              </div>

              {/* Step 2: Analyze */}
              <div 
                onClick={() => setActiveStepTab(1)}
                className={`p-8 space-y-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                  activeStepTab === 1 
                  ? "bg-white shadow-xl scale-[1.02] border-signal-red/25" 
                  : "bg-white border-border-subtle hover:border-[#000F3C]/20"
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-signal-red/10 text-signal-red border border-signal-red/20">
                  <span className="font-mono font-bold text-base">02</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif italic font-semibold text-lg text-primary-navy">Analyze</h3>
                  <p className="text-xs text-mid-gray leading-relaxed font-light">
                    High-fidelity pattern matching identifies intent before malicious payloads execute.
                  </p>
                </div>
                <div className="border-t border-border-subtle pt-4 mt-auto flex items-center justify-between">
                  <span className="font-mono text-[9px] text-signal-red tracking-widest font-bold">HEURISTIC_OK</span>
                  <ChevronRight className={`w-3 h-3 text-mid-gray transition-transform ${activeStepTab === 1 ? "rotate-90 text-signal-red" : ""}`} />
                </div>
              </div>

              {/* Step 3: Govern */}
              <div 
                onClick={() => setActiveStepTab(2)}
                className={`p-8 space-y-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                  activeStepTab === 2 
                  ? "bg-white shadow-xl scale-[1.02] border-signal-red/25" 
                  : "bg-white border-border-subtle hover:border-[#000F3C]/20"
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-signal-red/10 text-signal-red border border-signal-red/20">
                  <span className="font-mono font-bold text-base">03</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif italic font-semibold text-lg text-primary-navy">Govern</h3>
                  <p className="text-xs text-mid-gray leading-relaxed font-light">
                    Automated policy enforcement ensures every node operates within sovereign parameters.
                  </p>
                </div>
                <div className="border-t border-border-subtle pt-4 mt-auto flex items-center justify-between">
                  <span className="font-mono text-[9px] text-signal-red tracking-widest font-bold">ENFORCING</span>
                  <ChevronRight className={`w-3 h-3 text-mid-gray transition-transform ${activeStepTab === 2 ? "rotate-90 text-signal-red" : ""}`} />
                </div>
              </div>

              {/* Step 4: Evolve */}
              <div 
                onClick={() => setActiveStepTab(3)}
                className={`p-8 space-y-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                  activeStepTab === 3 
                  ? "bg-white shadow-xl scale-[1.02] border-signal-red/25" 
                  : "bg-white border-border-subtle hover:border-[#000F3C]/20"
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-signal-red/10 text-signal-red border border-signal-red/20">
                  <span className="font-mono font-bold text-base">04</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif italic font-semibold text-lg text-primary-navy">Evolve</h3>
                  <p className="text-xs text-mid-gray leading-relaxed font-light">
                    Continuous learning model updates the fleet globally without requiring downtime.
                  </p>
                </div>
                <div className="border-t border-border-subtle pt-4 mt-auto flex items-center justify-between">
                  <span className="font-mono text-[9px] text-signal-red tracking-widest font-bold">UP_TO_DATE</span>
                  <ChevronRight className={`w-3 h-3 text-mid-gray transition-transform ${activeStepTab === 3 ? "rotate-90 text-signal-red" : ""}`} />
                </div>
              </div>

            </div>

            {/* Dynamic Step detail console */}
            {activeStepTab !== null && (
              <div className="max-w-3xl mx-auto p-6 bg-white rounded border border-border-subtle animate-[fadeIn_0.4s_ease-out] select-text">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-serif italic font-bold text-primary-navy flex items-center gap-2">
                    <Layers className="w-4 h-4 text-signal-red" />
                    Step Debugger Detail - 0{activeStepTab+1}
                  </h4>
                  <button 
                    onClick={() => setActiveStepTab(null)}
                    className="text-mid-gray hover:text-signal-red p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {activeStepTab === 0 && (
                  <div className="space-y-3 font-sans text-xs text-neutral-600">
                    <p>Passive electromagnetic induction clamps directly trace SCADA logic register wires. No active ping queries are sent onto the active grid network, guaranteeing immunity from standard inline firewall exploitation vectors.</p>
                    <div className="bg-[#FAF9F5] p-3.5 border font-mono text-[10px] text-neutral-500 rounded space-y-1">
                      <div>[INGEST_TTY] Scanning: 10.12.94.40:502 (Modbus Master)</div>
                      <div className="text-terminal-green">[INGEST_TTY] Sensor Status: Consistently tracing backplane buses without latency.</div>
                    </div>
                  </div>
                )}
                {activeStepTab === 1 && (
                  <div className="space-y-3 font-sans text-xs text-neutral-600">
                    <p>The neural parser decodes physical logic inputs and queries our integrated semantic safety model. It matches current payload instructions against known valid operations to catch zero-day memory spams before they trigger mechanical switches.</p>
                    <div className="bg-[#FAF9F5] p-3.5 border font-mono text-[10px] text-neutral-500 rounded space-y-1">
                      <div>[ANALYZE_CORE] Input payload structure: binary/hex payload [0xF3, 0xA2, 0x01, 0x00]</div>
                      <div className="text-[#FFB000]">[ANALYZE_CORE] Dynamic evaluation complete. Flag raised: Rogue firmware spoof vectors detected.</div>
                    </div>
                  </div>
                )}
                {activeStepTab === 2 && (
                  <div className="space-y-3 font-sans text-xs text-neutral-600">
                    <p>Governing is managed directly by physically isolated switchgears. When unauthorized states are evaluated, the node air-gaps itself down at the electronic layer within microseconds without administrative software delay.</p>
                    <div className="bg-[#FAF9F5] p-3.5 border font-mono text-[10px] text-neutral-500 rounded space-y-1">
                      <div>[GOVERN_BUS] Logical disconnect instruction dispatched...</div>
                      <div className="text-signal-red">[GOVERN_BUS] Node 04 physical air-gap active. Intrusion vector successfully sequestered.</div>
                    </div>
                  </div>
                )}
                {activeStepTab === 3 && (
                  <div className="space-y-3 font-sans text-xs text-neutral-600">
                    <p>Approved decentralized logical parameters are verified across all fleet coordinates using cryptographic distributed ledgers. Plant floors learn from substation threat histories, enabling immediate passive immunological resilience.</p>
                    <div className="bg-[#FAF9F5] p-3.5 border font-mono text-[10px] text-neutral-500 rounded space-y-1">
                      <div>[EVOLVE_SYNC] Fetching secure logic blocks from master ledger authority...</div>
                      <div className="text-terminal-green">[EVOLVE_SYNC] Consensus reached. All 142 PLC registers globally synchronized. Status: Sovereign and secure.</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 6. Deep system diagnostics Call-To-Action cover card */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center brightness-[0.45] contrast-125 scale-105" 
              style={{ backgroundImage: `url('${CTA_BACKGROUND_URL}')` }}
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 via-transparent to-primary-navy/60" />
          </div>

          <div className="z-10 text-center space-y-8 px-4 max-w-xl select-none">
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight text-white drop-shadow-md font-light italic">
              Secure your sovereignty.
            </h2>
            <p className="text-xs text-white/65 max-w-sm mx-auto leading-relaxed font-sans">
              Deploy structural, decentralized network shielding and passive operational governance to verify continuous grid immunity.
            </p>
            <button 
              onClick={triggerSovereigntyInit}
              className="bg-signal-red text-white hover:brightness-110 px-10 py-4 font-mono text-xs font-extrabold uppercase tracking-widest active:scale-95 transition-transform shadow-[0_0_35px_rgba(220,40,60,0.35)] rounded-sm"
            >
              Initialize System
            </button>
          </div>
        </section>

      </main>

      {/* 7. Corporate Footer */}
      <footer className="bg-surface-container-high border-t border-border-subtle w-full select-none">
        <div className="flex flex-col items-center gap-gutter px-margin-mobile py-16 w-full max-w-container-max mx-auto text-center">
          
          {/* Logo element */}
          <div className="flex flex-col items-center gap-2 mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <EnyberLogo size={36} />
            <p className="font-serif text-[18px] tracking-tight font-bold text-signal-red uppercase mt-1">
              ENCYBER
            </p>
          </div>

          {/* Nav Row */}
          <nav className="flex flex-wrap justify-center gap-8 mb-10">
            <a 
              href="#terminal-view-anchor"
              className="font-mono text-[10px] text-mid-gray uppercase tracking-widest hover:text-signal-red transition-all"
            >
              Terminal
            </a>
            <button 
              onClick={() => setActiveStepTab(0)}
              className="font-mono text-[10px] text-mid-gray uppercase tracking-widest hover:text-signal-red transition-all"
            >
              AGENT Loop
            </button>
            <button 
              onClick={() => setIsSpecsDrawerOpen(true)}
              className="font-mono text-[10px] text-mid-gray uppercase tracking-widest hover:text-signal-red transition-all"
            >
              System Protocols
            </button>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setActiveBentoModal("compliance"); }}
              className="font-mono text-[10px] text-mid-gray uppercase tracking-widest hover:text-signal-red transition-all"
            >
              Legal & Compliance
            </a>
          </nav>

          {/* Secure regime disclaimer */}
          <div className="space-y-2">
            <p className="font-mono text-[10.5px] text-signal-red tracking-wide font-medium">
              © 2024 ENCYBER. INDUSTRIAL INTELLIGENCE SECURED.
            </p>
            <p className="font-mono text-[8.5px] text-[#8e8d85] uppercase tracking-[0.3em]">
              Encrypted Connection | Level 4 Clearances Only
            </p>
          </div>
        </div>
      </footer>

      {/* --- FLOATING OVERLAY DIALOGS --- */}

      {/* Dynamic Executive briefing modal block */}
      <VaroBriefing isOpen={isBriefingOpen} onClose={() => setIsBriefingOpen(false)} />

      {/* Lateral drawer: Protocol Specifications */}
      {isSpecsDrawerOpen && (
        <div className="fixed inset-0 z-100 flex justify-end bg-black/50 backdrop-blur-sm select-text">
          <div className="w-full max-w-md bg-[#FAF9F5] h-full p-8 shadow-2xl relative border-l border-[#000F3C]/10 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-[#000F3C]/10 pb-4">
                <div className="flex items-center gap-2">
                  <Grid className="w-5 h-5 text-signal-red" />
                  <h3 className="font-serif italic font-bold text-lg text-primary-navy">
                    Technical Protocols
                  </h3>
                </div>
                <button 
                  onClick={() => setIsSpecsDrawerOpen(false)}
                  className="text-mid-gray hover:text-signal-red p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#B0AEA5] uppercase tracking-wider block">
                    Zero-Packet Induction
                  </span>
                  <p className="text-xs text-[#7c7b74] leading-relaxed font-sans">
                    Traditional firewalls analyze packets inline, which imposes latency and vulnerabilities. ENCYBER VARO passive tapping system operates backplane arrays at the electrical EMF wave level, collecting logic states in strict read-only loops.
                  </p>
                </div>
                
                <div className="space-y-2 border-t border-[#000F3C]/5 pt-4">
                  <span className="font-mono text-[9px] text-[#B0AEA5] uppercase tracking-wider block">
                    Sovereign Governance Regimes
                  </span>
                  <p className="text-xs text-[#7c7b74] leading-relaxed font-sans">
                    Uses zero-knowledge logic consensus across field grids. No command execution can occur unless aligned with strict topological compliance checklists verified locally on field processors.
                  </p>
                </div>

                <div className="space-y-2 border-t border-[#000F3C]/5 pt-4">
                  <span className="font-mono text-[9px] text-[#B0AEA5] uppercase tracking-wider block">
                    Hardware Level Decoupling
                  </span>
                  <p className="text-xs text-[#7c7b74] leading-relaxed font-sans">
                    When high stakes threats are flagged, Varo triggers physically isolated logic switchgears to logically airgap compromised PLC backplanes within a verified 0.4ms window.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#000F3C]/10 pt-4 mt-8 flex justify-between items-center text-[10px] font-mono text-[#B0AEA5]">
              <span>SPEC_ID: CRITICAL_DEF_V42</span>
              <span>Sovereignty secured.</span>
            </div>
          </div>
        </div>
      )}

      {/* Bento Diagnostic details modals */}
      {activeBentoModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 select-text">
          <div className="bg-[#FAF9F5] w-full max-w-lg rounded-lg border border-[#000F3C]/10 p-6 md:p-8 shadow-2xl relative">
            <button 
              onClick={() => setActiveBentoModal(null)}
              className="absolute top-4 right-4 text-mid-gray hover:text-signal-red p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content: Isolation details */}
            {activeBentoModal === "isolation" && (
              <div className="space-y-5">
                <div className="flex items-center gap-2 border-b border-[#000F3C]/10 pb-3 mb-2 font-serif italic text-lg text-primary-navy font-bold">
                  <Shield className="w-5 h-5 text-signal-red" />
                  Isolation Latency Matrix
                </div>
                <p className="text-xs text-[#7c7b74] leading-relaxed">
                  Mitigating high-level SCADA attacks requires speed that bypasses virtualized OS layers. Varo acts on the physical backplane utilizing hardware logic gates rather than standard software routing changes.
                </p>
                <div className="p-4 bg-[#F2F1EC] rounded space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-neutral-500">Anomaly Detection:</span>
                    <span className="text-primary-navy font-bold">0.08 ms</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-neutral-500">Decentral Ledger Verification:</span>
                    <span className="text-primary-navy font-bold">0.14 ms</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-neutral-500">Switchgear Solenoid Release:</span>
                    <span className="text-primary-navy font-bold">0.16 ms</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#000F3C] font-bold">Total Isolation Complete:</span>
                    <span className="text-signal-red font-bold">0.38 ms</span>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Content: Passive monitoring impact */}
            {activeBentoModal === "impact" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#000F3C]/10 pb-3 mb-2 font-serif italic text-lg text-primary-navy font-semibold">
                  <Eye className="w-5 h-5 text-signal-red" />
                  Zero Packet Injection Analysis
                </div>
                <p className="text-xs text-[#7c7b74] leading-relaxed">
                  Traditional inline monitoring software writes diagnostic packets directly onto physical network buses. This creates "logical noise" which can slow down real-time SCADA clocks or become exploited by hackers mapping out assets.
                </p>
                <p className="text-xs text-[#7c7b74] leading-relaxed">
                  ENCYBER VARO monitors backplane EMF fluctuations passively. Our sensor suite injects **exactly 0.00%** logical signals, maintaining perfect network determinism and absolute physical security.
                </p>
              </div>
            )}

            {/* Modal Content: Compliance checklist */}
            {activeBentoModal === "compliance" && (
              <div className="space-y-5">
                <div className="flex items-center gap-2 border-b border-[#000F3C]/10 pb-3 mb-2 font-serif italic text-base sm:text-lg text-primary-navy font-bold">
                  <BadgeCheck className="w-5 h-5 text-signal-red" />
                  NERC CIP Compliance Checker
                </div>
                <p className="text-xs text-[#7c7b74] leading-relaxed">
                  Sovereign network governance aligns perfectly with Critical Infrastructure Protection (CIP) matrices:
                </p>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1 terminal-scrollbar text-xs font-mono">
                  
                  <div className="flex items-center gap-2 p-2 bg-[#F2F1EC] rounded">
                    <CheckCircle className="w-4 h-4 text-terminal-green shrink-0" />
                    <div>
                      <strong className="text-primary-navy uppercase block text-[10px]">CIP-002: Asset Identification</strong>
                      <span className="text-[10px] text-neutral-500 font-light">Passive EMF array catalogues all PLC backplanes automatically.</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-[#F2F1EC] rounded">
                    <CheckCircle className="w-4 h-4 text-terminal-green shrink-0" />
                    <div>
                      <strong className="text-primary-navy uppercase block text-[10px]">CIP-005: Electronic Security Perimeters</strong>
                      <span className="text-[10px] text-neutral-500 font-light">Node 04 airgap disconnect sequences enforce absolute logical barriers.</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-[#F2F1EC] rounded">
                    <CheckCircle className="w-4 h-4 text-terminal-green shrink-0" />
                    <div>
                      <strong className="text-primary-navy uppercase block text-[10px]">CIP-007: Systems Security Management</strong>
                      <span className="text-[10px] text-neutral-500 font-light">Passive monitoring requires zero local host security overrides.</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-[#F2F1EC] rounded">
                    <CheckCircle className="w-4 h-4 text-terminal-green shrink-0" />
                    <div>
                      <strong className="text-primary-navy uppercase block text-[10px]">CIP-008: Incident Reporting and Response</strong>
                      <span className="text-[10px] text-neutral-500 font-light">Local diagnostic loops formulate structured alerts within 0.4ms.</span>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full-Screen System setup diagnostic sequence */}
      {isSovereigntyInitializing && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-4 select-none">
          <div className="w-full max-w-lg bg-black border border-white/10 rounded-lg p-6 md:p-8 space-y-6 flex flex-col justify-between h-[450px]">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-signal-red">
                  <div className="animate-spin" style={{ animationDuration: '8s' }}>
                    <EnyberLogo size={18} />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Sovereign Boot Core
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/40">SYS_V42</span>
              </div>

              {/* Progress and status tracking */}
              <div className="space-y-3 font-mono text-[10.5px] text-emerald-400 overflow-y-auto h-48 pr-1 terminal-scrollbar">
                {initLogs.map((log, idx) => (
                  <p key={idx} className="leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                    {log}
                  </p>
                ))}
                {initStage < 5 && (
                  <div className="flex items-center gap-1.5 text-white/50 animate-pulse mt-2">
                    <span className="w-1.5 h-3 bg-white/50" />
                    <span>Engaging next topological matrix register...</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {/* Progress Slider */}
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-signal-red transition-all duration-1000"
                  style={{ width: `${(initStage / 5) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
                <span>STAGE: 0{initStage} / 05</span>
                <span>{Math.round((initStage / 5) * 100)}% ENGAGED</span>
              </div>

              {/* Complete Action Button */}
              {initStage >= 5 && (
                <button
                  onClick={() => setIsSovereigntyInitializing(false)}
                  className="w-full bg-signal-red text-white py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-signal-red/90 transition-colors animate-[fadeIn_0.5s_ease-out] rounded-sm"
                >
                  Confirm Posture Verification
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

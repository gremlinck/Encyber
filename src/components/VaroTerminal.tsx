import React, { useState, useEffect, useRef } from "react";
import { LogLine, SecurityAlert } from "../types";
import { Terminal, Shield, Play, RotateCcw, AlertTriangle, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import EnyberLogo from "./EnyberLogo";

// Initial realistic alerts
const INITIAL_ALERTS: SecurityAlert[] = [
  {
    id: "alert-act-now",
    type: "act-now",
    title: "Node 04: Rogue Firmware Ingress",
    description: "External firmware push detected on lambda controller. SCADA Isolation required.",
    statusColor: "bg-signal-red",
    accentColor: "text-signal-red",
    progress: 75,
    nodeId: "Node_Alpha_04",
    logs: [
      "[08:24:11] WARN: Physical payload mismatch at Modbus register OXFA01",
      "[08:24:14] CRITICAL: Unsigned firmware payload injected via lambda controller console",
      "[08:24:15] ALARM: UNAUTHORIZED WRITING ACTION AT SUBSTATION 4"
    ]
  },
  {
    id: "alert-monitor",
    type: "monitor",
    title: "Alpha Loop: Thermal Anomaly",
    description: "Thermal spike (+12%) detected in Alpha Substation reservoir cooling loop.",
    statusColor: "bg-[#FFB000]",
    accentColor: "text-[#FFB000]",
    progress: 25,
    nodeId: "Substation_Alpha_Thermal",
    logs: [
      "[08:24:20] TRACE: Coolant pump speed set to 40% (nominal requirement: 65%)",
      "[08:24:28] TEMP_WARN: Alpha reservoir temperature at +12.3% threshold",
      "[08:24:32] VOLTAGE: Auxiliary reactor bus stable at 480V"
    ]
  },
  {
    id: "alert-routine",
    type: "routine",
    title: "Routine: SCADA Checksums",
    description: "Scheduled cryptographic checksum audit across local network segments.",
    statusColor: "bg-white/30",
    accentColor: "text-white/60",
    progress: 100,
    nodeId: "Scada_Audit",
    logs: [
      "[08:23:44] SCADA_SEC: Validating logic controller signatures... Match.",
      "[08:23:59] CIP: Auditing ports 502/TCP and 44818/TCP... Closed/Filtered.",
      "[08:24:08] SYSTEM: Fleet consensus integrity verify: Success."
    ]
  }
];

const BACKLOG_LOG_TEMPLATES = [
  "[08:24:45] Analyzing telemetry from Substation Beta...",
  "[08:24:48] PLC Status: Integrity Verified.",
  "[08:24:50] Scanning for side-channel leakage...",
  "[08:24:53] No unauthorized protocols active.",
  "[08:24:56] Fleet Consensus: 100% agreement.",
  "[08:24:59] Sovereign governance active.",
  "[08:25:04] Periodic register check: lambda_override=0",
  "[08:25:12] Passive sensor check: Zero packet injections detected.",
  "[08:25:19] CIP-005 security perimeter isolated and secure.",
  "[08:25:28] Heartbeat OK: Node_Alpha_04",
  "[08:25:35] Modbus function block audit completed: Code 0"
];

export default function VaroTerminal() {
  const [alerts, setAlerts] = useState<SecurityAlert[]>(INITIAL_ALERTS);
  const [selectedAlert, setSelectedAlert] = useState<SecurityAlert>(INITIAL_ALERTS[0]);
  const [activeLogs, setActiveLogs] = useState<string[]>([
    "[08:24:11] Monitoring Pipeline Cluster B-12...",
    "[08:24:14] Heartbeat OK: Node_Alpha_04",
    "[08:24:15] CRITICAL: Unauthorized access at Substation 4",
    ...INITIAL_ALERTS[0].logs
  ]);
  const [commandLine, setCommandLine] = useState("");
  const [commandOutputs, setCommandOutputs] = useState<string[]>([
    "[SYSTEM_INIT] Sovereign Industrial Kernel initialized.",
    "[SYSTEM_READY] Core online. Passive monitoring active.",
    "Type 'help' to see available secure command directives."
  ]);
  const [isPending, setIsPending] = useState(false);
  const [threatStatus, setThreatStatus] = useState("System Awaiting Input");
  const [statusColorClass, setStatusColorClass] = useState("text-signal-red/60");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const consoleBottomRef = useRef<HTMLDivElement | null>(null);
  const logsContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll logs and terminal command line output
  useEffect(() => {
    if (consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [commandOutputs]);

  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [activeLogs]);

  // Handle periodic log influx simulator
  useEffect(() => {
    const handleAddLog = () => {
      const randomLine = BACKLOG_LOG_TEMPLATES[Math.floor(Math.random() * BACKLOG_LOG_TEMPLATES.length)];
      setActiveLogs((prev) => {
        const next = [...prev, randomLine];
        return next.slice(-20); // Limit logs shown
      });
    };

    const interval = setInterval(handleAddLog, 4000);
    return () => clearInterval(interval);
  }, []);

  // WebGL Shader Background Logic (Dynamic Grid)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    let animationFrameId: number;

    const vs = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 centered_uv = uv - 0.5;
        centered_uv.x *= u_resolution.x / u_resolution.y;
        float time = u_time * 0.15;
        
        // Deep Obsidian digital ocean ambient tint
        vec3 color = vec3(0.015, 0.015, 0.018);
        
        // Subtle scanlines
        float scanline = sin(uv.y * 140.0 + u_time * 2.5) * 0.02;
        color += scanline;
        
        // Micro technical dot grid index
        vec2 grid = fract(uv * 45.0 - vec2(0.0, u_time * 0.05));
        float gridLine = smoothstep(0.015, 0.0, grid.x) + smoothstep(0.015, 0.0, grid.y);
        
        // Subtle cyber red mesh highlight
        color += vec3(0.86, 0.16, 0.24) * gridLine * 0.035;
        
        // Dark vignette shadows in edges
        float vignette = 1.0 - length(centered_uv * 1.55);
        color *= smoothstep(0.0, 0.85, vignette);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (shaderGl: WebGLRenderingContext, type: number, source: string) => {
      const s = shaderGl.createShader(type);
      if (!s) return null;
      shaderGl.shaderSource(s, source);
      shaderGl.compileShader(s);
      if (!shaderGl.getShaderParameter(s, shaderGl.COMPILE_STATUS)) {
        console.error("Shader syntax compiler failure: ", shaderGl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1
    ]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");

    // Dynamic Sizing with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const render = (time: number) => {
      gl.uniform1f(timeLoc, time * 0.001);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  // Keyboard and click interactive executor for commands
  const executeCommand = async (cmdText: string) => {
    if (!cmdText.trim()) return;

    const formattedCommand = cmdText.trim();
    setCommandLine("");
    setIsPending(true);
    setThreatStatus("Sovereign Agent Calculating...");
    setStatusColorClass("text-terminal-green animate-pulse");

    // Append user input to history
    setCommandOutputs((prev) => [...prev, `\n> ${formattedCommand}`]);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          command: formattedCommand,
          activeAlert: selectedAlert,
          systemLogs: activeLogs
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Simulate sequential CLI feedback
        setCommandOutputs((prev) => [...prev, data.response]);

        // Dynamically alter layout parameters based on actions
        const lowerCmd = formattedCommand.toLowerCase();
        if (lowerCmd.includes("isolate") || lowerCmd.includes("node-04")) {
          setThreatStatus("OVERRIDE: Node 04 Isolated");
          setStatusColorClass("text-signal-red font-bold");
          setAlerts((prev) => prev.map(a => a.id === "alert-act-now" ? { ...a, progress: 100, title: "Node 04: Airgapped & Secured", description: "Node decoupled manually. Payload sequestered." } : a));
          
          setActiveLogs((prev) => [
            ...prev,
            "[08:24:40] FORCE: Node Alpha 04 decoupling sequence initiated...",
            "[08:24:41] SECURED: Zero-packet gateway airgap active. Node fully isolated."
          ]);
        } else if (lowerCmd.includes("override") || lowerCmd.includes("cooling")) {
          setThreatStatus("COOLING LOOP REGULATED");
          setStatusColorClass("text-terminal-green");
          setAlerts((prev) => prev.map(a => a.id === "alert-monitor" ? { ...a, progress: 100, title: "Alpha Loop: Under Nominal Threshold" } : a));
        } else {
          setThreatStatus("Sovereign Protocol Verified");
          setStatusColorClass("text-terminal-green/80");
        }
      } else {
        setCommandOutputs((prev) => [...prev, "[DIAGNOSTIC_ERR] Telemetry server parse deadlock."]);
        setThreatStatus("System Awaiting Input");
        setStatusColorClass("text-signal-red/60");
      }
    } catch (e) {
      console.error(e);
      setCommandOutputs((prev) => [...prev, "[NETWORK_ERR] Handshake timeout with defensive core api."]);
      setThreatStatus("System Awaiting Input");
      setStatusColorClass("text-signal-red/60");
    } finally {
      setIsPending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(commandLine);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      {/* Interactive Alert Selection row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {alerts.map((alert) => {
          const isSelected = selectedAlert.id === alert.id;
          return (
            <div
              key={alert.id}
              id={alert.id}
              onClick={() => {
                setSelectedAlert(alert);
                setActiveLogs((prev) => [...prev, ...alert.logs].slice(-20));
                setCommandOutputs((prev) => [
                  ...prev,
                  `\n[ALERT_SELECT] Scoped focus shifted to diagnostic branch: ${alert.title}`
                ]);
              }}
              className={`p-5 rounded-lg border cursor-pointer transition-all duration-300 flex flex-col justify-between h-44 ${
                isSelected
                  ? "bg-obsidian-deep border-signal-red/50 shadow-[0_0_15px_rgba(220,40,60,0.15)] scale-[1.01]"
                  : "bg-[#0b0c0f]/80 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {alert.type === "act-now" && (
                    <AlertTriangle className="w-4 h-4 text-signal-red animate-pulse" />
                  )}
                  {alert.type === "monitor" && (
                    <Monitor className="w-4 h-4 text-[#FFB000]" />
                  )}
                  {alert.type === "routine" && (
                    <CheckCircle className="w-4 h-4 text-white/40" />
                  )}
                  <span className={`text-[10px] font-bold tracking-widest uppercase font-mono ${alert.accentColor}`}>
                    {alert.type.replace("-", " ")}
                  </span>
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    alert.type === "act-now"
                      ? "bg-signal-red shadow-[0_0_8px_rgba(220,40,60,0.8)] animate-pulse"
                      : alert.type === "monitor"
                      ? "bg-[#FFB000] shadow-[0_0_8px_rgba(255,176,0,0.6)]"
                      : "bg-white/30"
                  }`}
                />
              </div>

              <div className="my-2">
                <h4 className="text-white text-xs font-semibold font-sans tracking-wide leading-snug">
                  {alert.title}
                </h4>
                <p className="text-white/50 text-[10px] leading-relaxed mt-1 font-sans line-clamp-2">
                  {alert.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/5">
                <div className="flex justify-between items-center text-[9px] font-mono text-white/40">
                  <span>RESOLVED REGISTRY:</span>
                  <span className="text-white/60 font-bold">{alert.progress}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      alert.type === "act-now"
                        ? "bg-signal-red"
                        : alert.type === "monitor"
                        ? "bg-[#FFB000]"
                        : "bg-white/20"
                    }`}
                    style={{ width: `${alert.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Primary Terminal shell window */}
      <div 
        ref={containerRef}
        id="terminal-container"
        className="glass-edge bg-[#0A0A0A] rounded-lg overflow-hidden shadow-2xl relative min-h-[500px]"
      >
        {/* WebGL Animated Digital Grid Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

        {/* Header bar controls */}
        <div className="bg-black/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/5 relative z-10 select-none">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-signal-red/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="font-mono text-[10px] text-white/50 flex items-center gap-2 tracking-widest uppercase">
            <EnyberLogo size={14} className="opacity-95" />
            <span>varo_ai_core:v4.2.1-stable</span>
          </div>
          <div className="font-mono text-[10px] text-white/30 hidden sm:flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            <span>CIP REGISTER: SECURE</span>
          </div>
        </div>

        {/* Terminal layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 relative z-10 min-h-[440px]">
          {/* Left panel: telemetry logs stream */}
          <div className="p-5 flex flex-col justify-between h-[360px] lg:h-[420px] bg-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <span className="text-[10px] font-bold text-white/40 tracking-widest font-mono uppercase">
                SCADA BUS Telemetry (Passive Tap)
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-red animate-ping" />
                <span className="text-[9px] font-mono text-signal-red tracking-wider">LIVE FEED</span>
              </div>
            </div>

            {/* Scrolling log container */}
            <div 
              ref={logsContainerRef}
              className="flex-1 overflow-y-auto font-mono text-[10.5px] space-y-2.5 text-white/40 log-feed-mask pr-2 terminal-scrollbar"
            >
              {activeLogs.map((log, idx) => {
                let colorClass = "text-white/40";
                if (log.includes("CRITICAL") || log.includes("ALARM") || log.includes("WARN")) {
                  colorClass = "text-signal-red font-medium";
                } else if (log.includes("SECURED") || log.includes("Success") || log.includes("OK")) {
                  colorClass = "text-terminal-green";
                }
                return (
                  <p key={idx} className={`${colorClass} leading-relaxed`}>
                    {log}
                  </p>
                );
              })}
            </div>

            {/* Helper quick commands drawer */}
            <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
              <span className="text-[8.5px] font-bold text-white/30 tracking-widest font-mono uppercase block">
                EXECUTE CORE OVERRIDES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedAlert.type === "act-now" && selectedAlert.progress < 100 && (
                  <button
                    onClick={() => executeCommand("isolate node-04")}
                    disabled={isPending}
                    className="bg-signal-red/15 border border-signal-red/35 hover:bg-signal-red/30 text-signal-red text-[9.5px] font-mono px-2 py-1 rounded transition-colors flex items-center gap-1 active:scale-95"
                  >
                    <Shield className="w-2.5 h-2.5" /> Isolate Node-04
                  </button>
                )}
                {selectedAlert.type === "monitor" && (
                  <button
                    onClick={() => executeCommand("override cooling loop")}
                    disabled={isPending}
                    className="bg-action-orange/15 border border-action-orange/35 hover:bg-action-orange/30 text-[#FFB000] text-[9.5px] font-mono px-2 py-1 rounded transition-colors flex items-center gap-1 active:scale-95"
                  >
                    <RotateCcw className="w-2.5 h-2.5" /> Actuate Cooling Loop
                  </button>
                )}
                <button
                  onClick={() => executeCommand("scan telemetry")}
                  disabled={isPending}
                  className="bg-white/5 border border-white/10 hover:bg-white/15 text-white/60 text-[9.5px] font-mono px-2 py-1 rounded transition-colors flex items-center gap-1 active:scale-95"
                >
                  <Play className="w-2.5 h-2.5" /> Scan Telemetry
                </button>
                <button
                  onClick={() => executeCommand("integrity audit")}
                  disabled={isPending}
                  className="bg-white/5 border border-white/10 hover:bg-white/15 text-white/60 text-[9.5px] font-mono px-2 py-1 rounded transition-colors flex items-center gap-1 active:scale-95"
                >
                  <Shield className="w-2.5 h-2.5" /> Integrity Check
                </button>
              </div>
            </div>
          </div>

          {/* Right panel: Active logic terminal prompt */}
          <div className="p-5 flex flex-col justify-between h-[360px] lg:h-[420px] bg-black/60 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <span className="text-[10px] font-bold text-white/40 tracking-widest font-mono uppercase">
                Interactive Console Shell
              </span>
              <span className="text-[9px] font-mono text-white/30">CON_TTY__0</span>
            </div>

            {/* Output screen */}
            <div className="flex-1 overflow-y-auto font-mono text-[10.5px] text-[#A6FAF2] space-y-2 pr-2 md:h-64 terminal-scrollbar">
              {commandOutputs.map((out, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed select-text">
                  {out}
                </div>
              ))}
              {isPending && (
                <div className="flex items-center gap-2 text-terminal-green">
                  <span className="w-1.5 h-3 bg-terminal-green animate-pulse" />
                  <span className="text-[10px] animate-pulse">AI logic compiler executing analysis on registry...</span>
                </div>
              )}
              <div ref={consoleBottomRef} />
            </div>

            {/* Input prompt */}
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 relative">
              <span className="text-terminal-green font-mono font-bold text-xs select-none">&gt;</span>
              <input
                type="text"
                value={commandLine}
                onChange={(e) => setCommandLine(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type command (e.g. help, isolate, scan)..."
                disabled={isPending}
                className="flex-1 bg-transparent border-none text-white focus:outline-none focus:ring-0 font-mono text-[11px] placeholder-white/20"
              />
              <button
                onClick={() => executeCommand(commandLine)}
                disabled={isPending || !commandLine.trim()}
                className="text-white/40 hover:text-white transition-colors p-1"
                title="Send Command"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="bg-black/95 px-4 py-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-2 uppercase tracking-[0.2em] font-mono text-[10px]">
            <span className="text-signal-red animate-ping font-bold">•</span>
            <span className={statusColorClass} id="terminal-status">
              {threatStatus}
            </span>
          </div>
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">
            Autonomous Defense Status: Active
          </p>
        </div>
      </div>
    </div>
  );
}

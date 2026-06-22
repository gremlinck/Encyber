import { useState } from "react";
import { X, Cpu, Lock, FileText, CheckCircle2 } from "lucide-react";
import { BriefingRequest } from "../types";
import EnyberLogo from "./EnyberLogo";

interface VaroBriefingProps {
  isOpen: boolean;
  onClose: () => void;
}

const FACILITIES = [
  "Substation 4 (Grid Transmission)",
  "Pipeline Cluster B-12 (Pumping Station)",
  "Water Filtration Plant Alpha (Core Intake)",
  "Reactor Loop Delta-7 (Auxiliary Generator)"
];

const THREAT_MODELS = [
  "Rogue Firmware Ingress / PLC Payload Spoofing",
  "Modbus Forward Rate Protocol Injection Anomalies",
  "Segment Air-gap Violation / Rogue TTY Shell Interface",
  "Distributed Denials of Logic / SCADA Replay Attack"
];

const STANDARDS = [
  "NERC CIP Criterion 4 & 5 (Critical Infrastructure Protection)",
  "NIST SP 800-82 Operational Technology Regulation",
  "IEC 62443 Industrial Cybersecurity Guidelines",
  "Sovereign Network Autonomy Clause v4"
];

export default function VaroBriefing({ isOpen, onClose }: VaroBriefingProps) {
  const [params, setParams] = useState<BriefingRequest>({
    facility: FACILITIES[0],
    threatModel: THREAT_MODELS[0],
    standard: STANDARDS[0]
  });
  const [loading, setLoading] = useState(false);
  const [briefingOutput, setBriefingOutput] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setBriefingOutput(null);

    try {
      const response = await fetch("/api/briefing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          facility: params.facility,
          threatModel: params.threatModel,
          standard: params.standard
        })
      });

      const data = await response.json();
      if (data.success) {
        setBriefingOutput(data.briefing);
      } else {
        setBriefingOutput("### COMPILER FAULT\nUnable to reach Varo intelligence core services. Check connection.");
      }
    } catch (e) {
      console.error(e);
      setBriefingOutput("### HANDSHAKE REFUSAL\nNetwork routing failure while negotiating authentication credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Human-friendly custom markdown parser to avoid react-markdown rendering/import errors
  const renderBriefing = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith("###")) {
        return (
          <h4 key={idx} className="font-sans font-semibold text-sm uppercase tracking-wider text-signal-red mt-6 mb-2 border-b border-border-subtle pb-1">
            {trimmed.replace("###", "")}
          </h4>
        );
      }
      if (trimmed.startsWith("####")) {
        return (
          <h5 key={idx} className="font-sans font-semibold text-xs text-primary-navy mt-4 mb-2">
            {trimmed.replace("####", "")}
          </h5>
        );
      }
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return (
          <p key={idx} className="font-mono text-xs text-neutral-600 my-1 font-bold">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
        return (
          <li key={idx} className="font-sans text-xs text-neutral-700 ml-4 list-disc my-1 leading-relaxed">
            {trimmed.substring(1).trim()}
          </li>
        );
      }
      if (trimmed === "---") {
        return <div key={idx} className="my-6 border-t border-border-subtle" />;
      }
      if (trimmed.length === 0) {
        return <div key={idx} className="h-2" />;
      }
      
      // Simple bold replacements inside lines
      let formattedText = trimmed;
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;
      
      while ((match = boldRegex.exec(formattedText)) !== null) {
        if (match.index > lastIndex) {
          parts.push(formattedText.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="text-primary-navy font-bold">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      
      if (lastIndex < formattedText.length) {
        parts.push(formattedText.substring(lastIndex));
      }

      return (
        <p key={idx} className="font-sans text-[13px] text-neutral-600 leading-relaxed my-2">
          {parts.length > 0 ? parts : trimmed}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-100 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start pt-10 px-4 md:pt-20">
      <div className="bg-[#FAF9F5] w-full max-w-3xl rounded-lg border border-[#000F3C]/10 shadow-2xl overflow-hidden mb-10 flex flex-col md:flex-row">
        
        {/* Left Form controls parameter board */}
        <div className="p-6 md:p-8 bg-[#F2F1EC] border-b md:border-b-0 md:border-r border-[#000F3C]/10 md:w-[280px] shrink-0">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-4 h-4 text-signal-red" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-primary-navy">
              Intel Parameters
            </h2>
          </div>

          <div className="space-y-5">
            {/* Target Facility dropdown */}
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-[#B0AEA5] uppercase tracking-wider block">
                Target Facility
              </label>
              <select
                value={params.facility}
                onChange={(e) => setParams({ ...params, facility: e.target.value })}
                className="w-full bg-white border border-[#000F3C]/15 text-primary-navy font-sans text-xs px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-signal-red"
              >
                {FACILITIES.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Current threat model dropdown */}
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-[#B0AEA5] uppercase tracking-wider block">
                Threat Vector
              </label>
              <select
                value={params.threatModel}
                onChange={(e) => setParams({ ...params, threatModel: e.target.value })}
                className="w-full bg-white border border-[#000F3C]/15 text-primary-navy font-sans text-xs px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-signal-red"
              >
                {THREAT_MODELS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Compliance criteria dropdown */}
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-[#B0AEA5] uppercase tracking-wider block">
                Security Standard
              </label>
              <select
                value={params.standard}
                onChange={(e) => setParams({ ...params, standard: e.target.value })}
                className="w-full bg-white border border-[#000F3C]/15 text-primary-navy font-sans text-xs px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-signal-red"
              >
                {STANDARDS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-signal-red text-white py-2.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-signal-red/90 transition-colors flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <FileText className="w-3.5 h-3.5" /> Compiler Briefing
            </button>
          </div>
        </div>

        {/* Right Output briefing screen */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between min-h-[460px]">
          <div className="flex justify-between items-center border-b border-[#000F3C]/10 pb-4 mb-4 select-none">
            <div className="flex items-center gap-2">
              <EnyberLogo size={22} className="animate-pulse" />
              <h3 className="font-serif italic font-semibold text-lg text-primary-navy">
                Sovereign Briefing Console
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-mid-gray hover:text-signal-red transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto max-h-[380px] pr-2 terminal-scrollbar">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full py-20 space-y-4">
                <Cpu className="w-10 h-10 text-signal-red animate-spin" />
                <p className="font-mono text-xs text-mid-gray animate-pulse">
                  Assembling passive telemetry records...
                </p>
              </div>
            ) : briefingOutput ? (
              <div className="prose select-text">
                {renderBriefing(briefingOutput)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#000F3C]/10 shadow-sm">
                  <EnyberLogo size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif italic text-base text-primary-navy">
                    Executive Analysis Pending
                  </h4>
                  <p className="font-sans text-xs text-mid-gray max-w-sm">
                    Select your corporate facility and cyber security vectors on the left to synthesize a dedicated intelligence dispatch.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-[#000F3C]/10 pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left select-none">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary-navy">
              <CheckCircle2 className="w-3.5 h-3.5 text-terminal-green uppercase" />
              <span>Cryptographic Integrity Signed</span>
            </div>
            <span className="font-mono text-[9px] text-[#B0AEA5]">
              LEVEL 4 CLEARANCE ONLY
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

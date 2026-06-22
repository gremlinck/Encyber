import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client Lazily to avoid crashing on start if key is missing
let aiClient: any = null;

function getGeminiClient() {
  if (aiClient) return aiClient;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  try {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    return aiClient;
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI client:", error);
    return null;
  }
}

// REST Endpoint: Analyze a specific security log or run terminal command
app.post("/api/analyze", async (req, res) => {
  const { command, activeAlert, systemLogs } = req.body;
  const client = getGeminiClient();

  // If client is initialized, call Gemini
  if (client) {
    try {
      const logsContext = Array.isArray(systemLogs) ? systemLogs.join("\n") : "";
      const alertContext = activeAlert ? `Active Alert Selected: ${activeAlert.title} - ${activeAlert.description}` : "No active alert currently selected.";
      
      const prompt = `
        You are the ENCYBER Industrial Intelligence Defensive Kernel, a sophisticated system protecting critical SCADA infrastructure.
        The operator typed command: "${command}"
        
        ${alertContext}
        
        Recent System Telemetry Log Stream:
        ${logsContext}
        
        Provide a response in a highly professional, CLI terminal output style. 
        Start with system variables or status symbols (e.g., [VARO_KERNEL] or [CIP_LOCK]).
        Explain the defensive action being taken, scan result, diagnostic info, or command response. Use clean, direct system logic.
        Do not use conversational pleasantries like "Sure, I can help" or "I am an AI...". Keep it to 2-3 logical paragraphs or bulleted list.
      `;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 0.15,
          systemInstruction: "You are the ENCYBER Industrial Security Core (varo_ai_core:v4.2.1-stable) protecting power grids and transport networks.",
        },
      });

      return res.json({
        success: true,
        response: response.text || "SYSTEM CORRUPT - PLEASE RE-QUERY",
        mode: "gemini",
      });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      // Fall through to simulated responder if API errors
    }
  }

  // Pre-compiled Fallback responders for realistic simulation without API key
  let fallbackText = "";
  const cmd = (command || "").toLowerCase().trim();

  if (cmd.includes("isolate") || cmd.includes("node-04") || cmd.includes("node 04")) {
    fallbackText = `[VARO_KERNEL] COMMAND RECEIVED: ISOLATE NODE-04
[VARO_KERNEL] Executing sub-register air-gap protocols...
[VARO_KERNEL] Port 502/TCP (Modbus) shut down for segment Lambda-9.
[PLC_SECURE] Isolation confirmation: Node_Alpha_04 is physically decoupled.
[VARO_KERNEL] Threat neutralized. Latency is 0.38ms. System status stable.`;
  } else if (cmd.includes("scan") || cmd.includes("telemetry") || cmd.includes("health")) {
    fallbackText = `[SYS_SCAN] INITIALIZING FLEET TELEMETRY SWEEP...
[SYS_SCAN] Checked 142 PLC registers across 4 continents.
[SYS_SCAN] Substation 4: SECURED (Node 04 isolated via logic airgap)
[SYS_SCAN] Pipeline Cluster B-12: OK (Thermal loop regulated)
[SYS_SCAN] Packet Injection Index: 0.00% (No side-channel protocols active)
[SYS_SCAN] Fleet consensus reached: 100% agreement. Protocols are sovereign.`;
  } else if (cmd.includes("help")) {
    fallbackText = `[SHELL_HELP] ENCYBER INTELLIGENCE SHELL (v4.2.1-stable)
Available CLI directives:
  - isolate node-04 : Deploy hardware logic air-gap to decouple suspicious Node_Alpha_04.
  - scan            : Trigger comprehensive telemetry sweep of active logic registers.
  - override        : Manually actuate cooling loop or regulate subsystem thermal spikes.
  - integrity       : Recalculate checksums for NERC CIP criteria compliance validation.
  - status          : Retrieve current system-wide cryptographically verified posture.`;
  } else if (cmd.includes("override") || cmd.includes("cooling")) {
    fallbackText = `[THERM_CONT] ACTUATING COOLING INTRUSION CONTAINMENT...
[THERM_CONT] Modulating liquid nitrogen loop registers on Alpha Substation.
[THERM_CONT] Ambient temperature dropping. Current: +12.3% above baseline -> +1.1% above baseline.
[PLC_SECURE] Thermal equilibrium verified. Loop regulated.`;
  } else if (cmd.includes("integrity") || cmd.includes("nerc") || cmd.includes("cip")) {
    fallbackText = `[CIP_AUDIT] RECALCULATING NERC CIP REQUISITES...
[CIP_AUDIT] Validated CIP-002 (Bespoke asset tagging) -> Match.
[CIP_AUDIT] Validated CIP-005 (Electronic Security Perimeters) -> 100% Airgapped.
[CIP_AUDIT] Validated CIP-007 (System Security Management) -> Signed Kernel.
[VARO_KERNEL] System posture fully compliant. Status is Sovereign and SECURED.`;
  } else {
    // Elegant organic reply
    fallbackText = `[VARO_KERNEL] DIRECTIVE RECEIVED: "${command.toUpperCase()}"
[VARO_KERNEL] Analyzing intent parameters through sovereign consensus loop...
[VARO_KERNEL] SCADA telemetry reports that state variables are clean. 
[VARO_KERNEL] All systems at target parameters. Type 'help' to inspect local directives.
[NOTE] Configure a valid GEMINI_API_KEY in the Secrets panel to activate full artificial cogency for Varo AI Kernel.`;
  }

  return res.json({
    success: true,
    response: fallbackText,
    mode: "fallback",
  });
});

// REST Endpoint: Request a Briefing
app.post("/api/briefing", async (req, res) => {
  const { facility, threatModel, standard } = req.body;
  const client = getGeminiClient();

  if (client) {
    try {
      const prompt = `
        You are the Chief Intelligence Director for ENCYBER Sovereign Industrial Security.
        Write a highly polished, detailed operational intelligence briefing.
        
        Selected Parameters:
        - Target Facility: ${facility}
        - Current Threat Model Triggered: ${threatModel}
        - Audited Compliance Framework: ${standard}
        
        Format the response in structured Markdown text with clear headers:
        1. **EXECUTIVE INTEL SUMMARY**: Editorial overview explaining the threat's scope and why traditional firewalls failed.
        2. **INTRUSION PATHWAY & SCADA ANALYSIS**: Detail how the malicious firmware, Modbus replay, or rogue PLC payload was intercepted passively (zero-packet injection).
        3. **MITIGATION ACTIONS TAKEN**: A step-by-step description of the sovereign quarantine (e.g. 0.4ms latency airgap execution).
        4. **COMPLIANCE & POSTURE EVALUATION**: Discuss alignment with NERC CIP requirements and local sovereign network protocol standards.
        
        Use high stakes, sophisticated, clean corporate-industrial language. Avoid cheesy intros. Return only the markdown text.
      `;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 0.25,
          systemInstruction: "You write elite, rigorous industrial security briefings for executive leadership and defense ministries.",
        },
      });

      return res.json({
        success: true,
        briefing: response.text || "BRIEFING COMPILATION ERROR",
        mode: "gemini",
      });
    } catch (error) {
      console.error("Gemini Briefing Error:", error);
    }
  }

  // Realistic Fallback briefing if API key is not setup
  const fallbackBriefing = `### ENCYBER OPERATIONAL INTELS BRIEFING
**FACILITY**: ${facility.toUpperCase()}
**ALERT CORRESPONDENCE**: ${threatModel.toUpperCase()}
**SECURITY REGIME**: ${standard}

---

#### 1. EXECUTIVE INTEL SUMMARY
Operational telemetry intercepts indicate a highly targeted, persistent threat attempting malicious manipulation of core logic loops at **${facility}**. Traditional packet-inspection mechanisms failed to flag the payload, as it was masquerading as an encoded diagnostic firmware update from an authorized engineering console. 

Because traditional reactive security firewalls rely on inline active polling (which injects latency and alters protocol structure), they were unable to mitigate this state disruption without threatening real-time operations. ENCYBER detected and neutralized this infiltration passively without injecting a single packet.

#### 2. INTRUSION PATHWAY & SCADA ANALYSIS
* **Vector Analyzed**: ${threatModel}
* **Operational Footprint**: Rogue firmware signature injected at the physical layer, aiming to force a logic state override to disable emergency cooling valves.
* **Passive Interception**: By utilizing passive electromagnet and telemetry tap arrays, VARO monitored PLC registers directly at the backplane level. Modbus function blocks were reconstructed digitally and analyzed against our autonomous sovereign safety model.

#### 3. MITIGATION ACTIONS TAKEN
1. **Anomaly Flagged**: Flagged non-consensual state instruction parameter at 08:24:15.
2. **Autonomous Decoupling**: Directed hardware logic gates at the switchgear backplane to decouple **Node_Alpha_04** from external routing within **0.4 milliseconds**.
3. **Thermal Regulation**: Actuated liquid nitrogen auxiliary cooling loops to normalize Alpha Substation temperature before any equipment stress occurred.
4. **Firmware Rollback**: Re-established valid cryptographic SCADA register hashes.

#### 4. COMPLIANCE & POSTURE EVALUATION (REGULATION: ${standard})
By isolating threats before physical state change occurs, the system maintains unconditional compliance with **${standard}** guidelines:
* **Asset Tracking & Port Management**: Perfect posture maintained via local sovereign registry monitoring.
* **Zero Overhead**: Absolute zero packet-injection ensures no performance degradation, keeping SCADA controls running in optimal determinism.

*Note: For dynamic intelligence tailored to custom inputs, please configure a valid GEMINI_API_KEY in the Secrets panel.*`;

  return res.json({
    success: true,
    briefing: fallbackBriefing,
    mode: "fallback",
  });
});

// Configure Vite or Serve Static Files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ENCYBER Server running on http://localhost:${PORT}`);
  });
}

startServer();

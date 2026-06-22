export interface LogLine {
  id: string;
  timestamp: string;
  text: string;
  type: "info" | "success" | "critical" | "warning";
}

export interface SecurityAlert {
  id: string;
  type: "act-now" | "monitor" | "routine";
  title: string;
  description: string;
  statusColor: string;
  accentColor: string;
  progress: number;
  nodeId?: string;
  logs: string[];
}

export interface BoundingBox {
  title: string;
  value: string;
  description: string;
}

export interface AgentStep {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface BriefingRequest {
  facility: string;
  threatModel: string;
  standard: string;
}

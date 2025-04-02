import { AuditInfo, Status, Metadata, Context } from './base';

export type AnomalyLevel = 'event' | 'trace' | 'causal_thread';

export interface Anomaly {
  id: string;
  organization_id: string;
  level: AnomalyLevel;
  reference_id: string;
  anomaly_type: string;
  description?: string;
  detected_at: string;
  expected_pattern?: string[];
  actual_pattern?: string[];
  deviation_score?: number;
  event_explanation_id?: string;
  created: AuditInfo;
  modified?: AuditInfo;
  deleted?: AuditInfo;
  status: Status;
  metadata?: Metadata;
  context?: Context;
}

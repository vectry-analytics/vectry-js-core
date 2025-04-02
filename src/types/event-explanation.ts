import { AuditInfo, Status, Metadata, Context } from './base';

export interface ExplanationCause {
  event_id: string;
  event_type?: string;
  timestamp?: string;
  payload?: Record<string, any>;
}

export interface EventExplanation {
  id: string;
  organization_id: string;
  event_id: string;
  caused_by: ExplanationCause[];
  output: string;
  created: AuditInfo;
  modified?: AuditInfo;
  deleted?: AuditInfo;
  status: Status;
  metadata?: Metadata;
  context?: Context;
}

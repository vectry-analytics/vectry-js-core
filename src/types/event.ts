import { AuditInfo, Status, Metadata, Context } from './base';

export interface EventInput {
  organization_id: string;
  details?: string;
  trace_id: string;
  causal_thread_id?: string;
  system_domain: string;
  system_entity: string;
  system_entity_id: string;
  actor_id?: string;
  actor_type?: 'user' | 'system' | 'ai' | 'device';
  event_type: string;
  caused_by?: string[];
  triggered_by?: string[];
  is_terminal?: boolean;
  metadata?: Metadata;
  context?: Context;
}

export interface Event extends EventInput {
  id: string;
  created: AuditInfo;
  modified?: AuditInfo;
  deleted?: AuditInfo;
  status: Status;
}

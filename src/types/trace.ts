import { AuditInfo, Status, Metadata, Context } from './base';

export interface Trace {
  id: string;
  organization_id: string;
  causal_thread_id?: string;
  system_domain: string;
  system_entity: string;
  system_entity_id: string;
  start_timestamp: string;
  end_timestamp?: string;
  actor_id?: string;
  created: AuditInfo;
  modified?: AuditInfo;
  deleted?: AuditInfo;
  status: Status;
  metadata?: Metadata;
  context?: Context;
}

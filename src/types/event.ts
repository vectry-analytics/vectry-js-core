import { BaseModel } from './base';

export interface EventOperationType {
  type: string;
  id: string;
  description: string;
}

export interface EventOperationChange  {
  original: Record<string, any>;
    updated: Record<string, any>;
}

export interface EventOperation {
  type: string;
  system_domain: string;
  system_entity: string;
  system_entity_id: string;
  source?: EventOperationType;
  changes?: EventOperationChange;
}

export interface Event extends BaseModel {
  organization_id: string;
  namespace?: string;
  title?: string;
  details?: string;
  actor_id?: string;
  actor_type?: string;
  operation: EventOperation;
}

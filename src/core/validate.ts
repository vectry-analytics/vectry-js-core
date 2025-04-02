import { EventInput } from '../types';

export function validateEvent(event: EventInput): void {
  const requiredFields = [
    'organization_id',
    'trace_id',
    'system_domain',
    'system_entity',
    'system_entity_id',
    'event_type'
  ];

  const missing = requiredFields.filter((field) => !(event as any)[field]);
  if (missing.length > 0) {
    throw new Error(`Missing required event fields: ${missing.join(', ')}`);
  }
}

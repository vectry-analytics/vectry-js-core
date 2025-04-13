import { Event } from '../types';

export function validateEvent(event: Event): void {
  const requiredFields = [
    'organization_id',
    'namespace',
    'actor_id',
    'actor_type'
  ];

  const missing = requiredFields.filter((field) => !(event as any)[field]);
  if (missing.length > 0) {
    throw new Error(`Missing required event fields: ${missing.join(', ')}`);
  }
}

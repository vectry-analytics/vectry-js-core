
import { Event, EventInput } from '../types';
import { generateId, getCurrentTimestamp } from '../utils';


/**
 * Enriches an EventInput with system-generated fields like id, created timestamp,
 * and ensures required nested objects are present.
 * 
 * @param event - Partial input provided by the integrator.
 * @returns Complete Event object, ready to be validated and sent.
 */
export function enrichEvent(event: EventInput): Event {
  return {
    ...event,
    id: generateId('evt'),
    created: {
      user: { id: 'anonymous' }, // Can be replaced by context provider later
      timestamp: getCurrentTimestamp(),
    },
    status: {
      id: 1,
      name: 'active',
      title: 'Active',
    },
    metadata: event.metadata ?? {},
    context: event.context ?? {},
  };
}

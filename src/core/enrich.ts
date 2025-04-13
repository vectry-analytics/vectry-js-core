
import { Event } from '../types';
import { getCurrentTimestamp } from '../utils';


/**
 * Enriches an Event with system-generated fields like id, created timestamp,
 * and ensures required nested objects are present.
 * 
 * @param event - Partial input provided by the integrator.
 * @returns Complete Event object, ready to be validated and sent.
 */
export function enrichEvent(event: Event): Event {
  return {
    ...event,
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

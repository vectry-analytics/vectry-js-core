import { Event } from '../types';
import { EventService } from '../services/observation/event.service';
import { getRuntimeConfig } from '../config/runtimeConfig';
import { enrichEvent } from './enrich';
import { validateEvent } from './validate';

export async function capture(event: Event): Promise<void> {
  const config = getRuntimeConfig();
  if (!config.transport) {
    throw new Error('Transport not initialized in runtime config.');
  }

  const enriched = enrichEvent(event);
  validateEvent(enriched);

  const service = new EventService(config);
  await service.create(enriched);
}

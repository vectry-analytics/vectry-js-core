import { Event, Response } from '../types';
import { EventService } from '../services/observation/event.service';
import { getRuntimeConfig } from '../config/runtimeConfig';
import { enrichEvent } from './enrich';
import { validateEvent } from './validate';

export async function capture(event: Event): Promise<Response | undefined> {
  const config = getRuntimeConfig();
  if (!config.transport) {
    throw new Error('Transport not initialized in runtime config.');
  }

  const enriched = enrichEvent(event);
  validateEvent(enriched);

  const service = new EventService(config);
  return await service.create(enriched);
}

import { EventInput } from '../types';
import { EventService } from '../services/observation/event.service';
import { getRuntimeConfig } from '../config/runtimeConfig';

export async function capture(event: EventInput): Promise<void> {
  const config = getRuntimeConfig();

  if (!config.transport) {
    throw new Error('Transport not initialized in runtime config.');
  }

  const service = new EventService({ transport: config.transport });

  await service.create(event);
}

import { VectryConfig } from '../../interfaces';
import { EventExplanation } from '../../types';
import { ApiService } from '../base/api.service';

export class EventExplanationService extends ApiService {
  constructor(config: VectryConfig) {
    super({
      config,
      baseUrl: '/causal/observation/event',
      endpoints: {
        get: '/',
        create: '',
        update: '',
        delete: ''
      }
    });
  }

  /**
   * Fetches events based on custom filtering parameters.
   * @param data An object containing the query selector and filters.
   */
  async getByParameters(data: {
    queryselector: string;
    [key: string]: any;
  }): Promise<EventExplanation[]> {
    return super.getByParameters(data);
  }

  /**
   * Sends a new event to the backend.
   * @param payload EventExplanation data to be created.
   */
  async create(payload: Partial<EventExplanation>): Promise<EventExplanation> {
    return super.create(payload);
  }

  /**
   * Updates an existing event.
   * @param payload EventExplanation data to be updated.
   */
  async update(payload: Partial<EventExplanation>): Promise<EventExplanation> {
    return super.update(payload);
  }

  /**
   * Deletes an event.
   * @param payload Identifier or full object of the event to delete.
   */
  async delete(payload: Partial<EventExplanation>): Promise<any> {
    return super.delete(payload);
  }
}

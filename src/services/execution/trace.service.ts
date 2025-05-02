import { VectryConfig } from '../../interfaces';
import { Response, Trace } from '../../types';
import { ApiService } from '../base/api.service';

export class TraceService extends ApiService {
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
  async getByParameters(data: { queryselector: string; [key: string]: any }): Promise<Response | undefined> {
    return super.getByParameters(data);
  }

  /**
   * Sends a new event to the backend.
   * @param payload Trace data to be created.
   */
  async create(payload: Partial<Trace>): Promise<Response | undefined> {
    return super.create(payload);
  }

  /**
   * Updates an existing event.
   * @param payload Trace data to be updated.
   */
  async update(payload: Partial<Trace>): Promise<Response | undefined> {
    return super.update(payload);
  }

  /**
   * Deletes an event.
   * @param payload Identifier or full object of the event to delete.
   */
  async delete(payload: Partial<Trace>): Promise<Response | undefined> {
    return super.delete(payload);
  }
}

import { VectryConfig } from '../../interfaces';
import { CausalThread } from '../../types';
import { ApiService } from '../base/api.service';

export class CausalThreadService extends ApiService {
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
  }): Promise<CausalThread[]> {
    return super.getByParameters(data);
  }

  /**
   * Sends a new event to the backend.
   * @param payload CausalThread data to be created.
   */
  async create(payload: Partial<CausalThread>): Promise<CausalThread> {
    return super.create(payload);
  }

  /**
   * Updates an existing event.
   * @param payload CausalThread data to be updated.
   */
  async update(payload: Partial<CausalThread>): Promise<CausalThread> {
    return super.update(payload);
  }

  /**
   * Deletes an event.
   * @param payload Identifier or full object of the event to delete.
   */
  async delete(payload: Partial<CausalThread>): Promise<any> {
    return super.delete(payload);
  }
}

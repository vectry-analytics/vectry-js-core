import { IServiceArguments } from '../../interfaces';
import { Event } from '../../types';
import { BaseService } from '../base/api.service';

export class EventService extends BaseService {
  constructor({ transport }: IServiceArguments) {
    super(transport, '/causal/observation/event', {
      get: '/',
      create: '',
      update: '',
      delete: ''
    });
  }

  /**
   * Fetches events based on custom filtering parameters.
   * @param data An object containing the query selector and filters.
   */
  async getByParameters(data: { queryselector: string; [key: string]: any }): Promise<Event[]> {
    return super.getByParameters(data);
  }

  /**
   * Sends a new event to the backend.
   * @param payload Event data to be created.
   */
  async create(payload: Partial<Event>): Promise<Event> {
    return super.create(payload);
  }

  /**
   * Updates an existing event.
   * @param payload Event data to be updated.
   */
  async update(payload: Partial<Event>): Promise<Event> {
    return super.update(payload);
  }

  /**
   * Deletes an event.
   * @param payload Identifier or full object of the event to delete.
   */
  async delete(payload: Partial<Event>): Promise<any> {
    return super.delete(payload);
  }
}

import { IServiceArguments } from "../../interfaces";
import { Trace } from "../../types";
import { BaseService } from "../base/api.service";


export class TraceService extends BaseService {
  constructor({ transport }: IServiceArguments) {
    super(transport, '/causal/observation/event', {
      get: '/',
      create: '',
      update: '',
      delete: '',
    });
  }

  /**
   * Fetches events based on custom filtering parameters.
   * @param data An object containing the query selector and filters.
   */
  async getByParameters(data: { queryselector: string; [key: string]: any }): Promise<Trace[]> {
    return super.getByParameters(data);
  }

  /**
   * Sends a new event to the backend.
   * @param payload Trace data to be created.
   */
  async create(payload: Partial<Trace>): Promise<Trace> {
    return super.create(payload);
  }

  /**
   * Updates an existing event.
   * @param payload Trace data to be updated.
   */
  async update(payload: Partial<Trace>): Promise<Trace> {
    return super.update(payload);
  }

  /**
   * Deletes an event.
   * @param payload Identifier or full object of the event to delete.
   */
  async delete(payload: Partial<Trace>): Promise<any> {
    return super.delete(payload);
  }
}

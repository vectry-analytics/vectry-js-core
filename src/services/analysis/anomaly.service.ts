import { IServiceArguments } from "../../interfaces";
import { Anomaly } from "../../types";
import { BaseService } from "../base/api.service";


export class AnomalyService extends BaseService {
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
  async getByParameters(data: { queryselector: string; [key: string]: any }): Promise<Anomaly[]> {
    return super.getByParameters(data);
  }

  /**
   * Sends a new event to the backend.
   * @param payload Anomaly data to be created.
   */
  async create(payload: Partial<Anomaly>): Promise<Anomaly> {
    return super.create(payload);
  }

  /**
   * Updates an existing event.
   * @param payload Anomaly data to be updated.
   */
  async update(payload: Partial<Anomaly>): Promise<Anomaly> {
    return super.update(payload);
  }

  /**
   * Deletes an event.
   * @param payload Identifier or full object of the event to delete.
   */
  async delete(payload: Partial<Anomaly>): Promise<any> {
    return super.delete(payload);
  }
}

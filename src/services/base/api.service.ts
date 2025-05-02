import { VectryConfig } from '../../interfaces';
import { Response } from '../../types/response';

export interface EndpointMap {
  get?: string;
  create?: string;
  update?: string;
  delete?: string;
  patch?: string;
  put?: string;
  [key: string]: string | undefined;
}

export interface IApiService {
  config: VectryConfig,
  baseUrl: string, 
  endpoints: EndpointMap
}

export abstract class ApiService {
  protected apiServiceConfig: VectryConfig;
  protected endpointUrl: string;
  protected endpoints: EndpointMap;

  constructor(apiServiceParameters: IApiService) {
    this.apiServiceConfig = apiServiceParameters.config;
    this.endpointUrl = apiServiceParameters.baseUrl;
    this.endpoints = apiServiceParameters.endpoints;
  }

  protected objectToQueryString(obj: any): string {
    if (!obj || typeof obj !== 'object') return '';
    const build = (o: any, prefix = ''): string[] =>
      Object.keys(o).flatMap((key) => {
        const k = prefix ? `${prefix}[${key}]` : key;
        const v = o[key];
        if (v && typeof v === 'object') return build(v, k);
        return `${encodeURIComponent(k)}=${encodeURIComponent(v ?? '')}`;
      });

    const query = build(obj).join('&');
    return query ? `?${query}` : '';
  }

  async getByParameters(data: { queryselector: string; [key: string]: any }): Promise<Response | undefined> {
    if (!data?.queryselector) throw new Error('Missing queryselector');

    const query = this.objectToQueryString(data);
    const fullPath = `${this.apiServiceConfig.baseUrl}${this.endpointUrl}${this.endpoints.get ?? ''}${data.queryselector}${query}`;

    return this.apiServiceConfig?.transport?.get(fullPath, {});
  }

  async create(payload: any): Promise<Response | undefined> {
    const fullPath = `${this.apiServiceConfig.baseUrl}${this.endpointUrl}${this.endpoints.create ?? ''}`;
    return this.apiServiceConfig?.transport?.post(fullPath, payload);
  }

  async update(payload: any): Promise<Response | undefined> {
    const fullPath = `${this.apiServiceConfig.baseUrl}${this.endpointUrl}${this.endpoints.update ?? ''}`;
    return this.apiServiceConfig?.transport?.patch(fullPath, payload);
  }

  async delete(payload: any): Promise<Response | undefined> {
    const fullPath = `${this.apiServiceConfig.baseUrl}${this.endpointUrl}${this.endpoints.delete ?? ''}`;
    return this.apiServiceConfig?.transport?.delete(fullPath, payload);
  }

  async post(payload: any, endpoint?: string): Promise<Response | undefined> {
    const fullPath = `${this.apiServiceConfig.baseUrl}${this.endpointUrl}${endpoint ?? this.endpoints.post ?? ''}`;
    return this.apiServiceConfig?.transport?.post(fullPath, payload);
  }

  async put(payload: any, endpoint?: string): Promise<Response | undefined> {
    const fullPath = `${this.apiServiceConfig.baseUrl}${this.endpointUrl}${endpoint ?? this.endpoints.put ?? ''}`;
    return this.apiServiceConfig?.transport?.put(fullPath, payload);
  }

  async patch(payload: any, endpoint?: string): Promise<Response | undefined> {
    const fullPath = `${this.apiServiceConfig.baseUrl}${this.endpointUrl}${endpoint ?? this.endpoints.patch ?? ''}`;
    return this.apiServiceConfig?.transport?.patch(fullPath, payload);
  }
}

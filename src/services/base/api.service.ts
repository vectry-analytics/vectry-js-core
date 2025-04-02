import { ITransport } from "../../interfaces";


export interface EndpointMap {
  get?: string;
  create?: string;
  update?: string;
  delete?: string;
  patch?: string;
  put?: string;
  [key: string]: string | undefined;
}

export abstract class BaseService {
  protected transport: ITransport;
  protected baseUrl: string;
  protected endpoints: EndpointMap;

  constructor(transport: ITransport, baseUrl: string, endpoints: EndpointMap) {
    this.transport = transport;
    this.baseUrl = baseUrl;
    this.endpoints = endpoints;
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

  async getByParameters(data: { queryselector: string; [key: string]: any }): Promise<any> {
    if (!data?.queryselector) throw new Error('Missing queryselector');

    const query = this.objectToQueryString(data);
    const fullPath = `${this.baseUrl}${this.endpoints.get ?? ''}${data.queryselector}${query}`;

    return this.transport.send(fullPath, {});
  }

  async create(payload: any): Promise<any> {
    const fullPath = `${this.baseUrl}${this.endpoints.create ?? ''}`;
    return this.transport.send(fullPath, payload);
  }

  async update(payload: any): Promise<any> {
    const fullPath = `${this.baseUrl}${this.endpoints.update ?? ''}`;
    return this.transport.send(fullPath, payload);
  }

  async delete(payload: any): Promise<any> {
    const fullPath = `${this.baseUrl}${this.endpoints.delete ?? ''}`;
    return this.transport.send(fullPath, payload);
  }

  async post(payload: any, endpoint?: string): Promise<any> {
    const fullPath = `${this.baseUrl}${endpoint ?? this.endpoints.post ?? ''}`;
    return this.transport.send(fullPath, payload);
  }

  async put(payload: any, endpoint?: string): Promise<any> {
    const fullPath = `${this.baseUrl}${endpoint ?? this.endpoints.put ?? ''}`;
    return this.transport.send(fullPath, payload);
  }

  async patch(payload: any, endpoint?: string): Promise<any> {
    const fullPath = `${this.baseUrl}${endpoint ?? this.endpoints.patch ?? ''}`;
    return this.transport.send(fullPath, payload);
  }
}

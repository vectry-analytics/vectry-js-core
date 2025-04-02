import { IContextProvider, IEnricher, ITransport } from '.';

export interface VectryConfig {
  organizationId: string;
  baseUrl?: string;
  environment?: 'dev' | 'staging' | 'prod';
  contextProvider?: () => Promise<IContextProvider>;
  transport?: ITransport;
  enrichers?: IEnricher[];
  autoFlush?: boolean;
  flushIntervalMs?: number;
}

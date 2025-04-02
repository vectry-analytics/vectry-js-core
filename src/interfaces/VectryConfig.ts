import { IContextProvider, IEnricher, ITransport } from '.';

export interface VectryConfig {
  organizationId: string;
  environment?: 'dev' | 'staging' | 'prod';
  contextProvider?: () => Promise<IContextProvider>;
  transport?: ITransport;
  enrichers?: IEnricher[];
  autoFlush?: boolean;
  flushIntervalMs?: number;
}

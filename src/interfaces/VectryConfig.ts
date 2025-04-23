import { IContextProvider, IEnricher, ITransport } from '.';

export interface VectryConfig {
  organizationId: string;
  baseUrl?: string;
  vectryEnvironment?: 'local' | 'development' | 'production';
  contextProvider?: () => Promise<IContextProvider>;
  transport?: ITransport;
  enrichers?: IEnricher[];
  autoFlush?: boolean;
  flushIntervalMs?: number;
}

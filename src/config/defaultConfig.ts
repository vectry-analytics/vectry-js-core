import { VectryConfig } from "../interfaces";

export const defaultConfig: VectryConfig = {
  organizationId: '',
  environment: 'prod',
  baseUrl: 'https://api.vectry.io',
  contextProvider: async () => ({ user: { id: 'anonymous' } }),
  autoFlush: true,
  flushIntervalMs: 10000,
  enrichers: [],
};

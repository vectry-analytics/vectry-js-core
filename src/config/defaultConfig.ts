import { VectryConfig } from "../interfaces";
import { EnvironmentBaseUrls } from "./environmentMap";

export const defaultConfig: VectryConfig = {
  organizationId: '',
  vectryEnvironment: 'production',
  baseUrl: EnvironmentBaseUrls['production'],
  contextProvider: async () => ({ user: { id: 'anonymous' } }),
  autoFlush: true,
  flushIntervalMs: 10000,
  enrichers: [],
};

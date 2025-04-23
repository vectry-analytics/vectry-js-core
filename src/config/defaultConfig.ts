import { VectryConfig } from "../interfaces";
import { EnvironmentBaseUrls } from "./environmentMap";

export const defaultConfig: VectryConfig = {
  organizationId: '',
  environment: 'prod',
  baseUrl: EnvironmentBaseUrls['prod'],
  contextProvider: async () => ({ user: { id: 'anonymous' } }),
  autoFlush: true,
  flushIntervalMs: 10000,
  enrichers: [],
};

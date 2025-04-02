import { VectryConfig } from '../interfaces';
import { defaultConfig } from './defaultConfig';

let currentConfig: VectryConfig = { ...defaultConfig };

/**
 * Retrieves the current Vectry runtime configuration.
 * @returns {VectryConfig}
 */
export function getRuntimeConfig(): VectryConfig {
  return currentConfig;
}

/**
 * Merges and updates the runtime configuration.
 * @param config Partial configuration to override defaults.
 */
export function setRuntimeConfig(config: Partial<VectryConfig>) {
  currentConfig = {
    ...defaultConfig,
    ...currentConfig,
    ...config,
  };
}

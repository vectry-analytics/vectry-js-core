export interface IMutationInput {
  original: Record<string, any>;
  updated: Record<string, any>;
}

/**
 * Compares two object snapshots and returns a structured mutation result.
 * If no differences are found, returns null.
 *
 * @param input Object containing `original` and `updated` states
 * @returns A mutation object with only the fields that changed, or null
 */
export function detectMutation(input: IMutationInput): IMutationInput | null {
  const { original, updated } = input;
  const originalDiff: Record<string, any> = {};
  const updatedDiff: Record<string, any> = {};

  function compare(key: string, a: any, b: any): boolean {
    const bothObjects = typeof a === 'object' && typeof b === 'object' && a !== null && b !== null;

    if (bothObjects && !Array.isArray(a) && !Array.isArray(b)) {
      const nested = detectMutation({ original: a, updated: b });
      if (nested) {
        originalDiff[key] = nested.original;
        updatedDiff[key] = nested.updated;
        return true;
      }
      return false;
    }

    const isDifferent = JSON.stringify(a) !== JSON.stringify(b);
    if (isDifferent) {
      originalDiff[key] = a;
      updatedDiff[key] = b;
    }

    return isDifferent;
  }

  const keys = new Set([...Object.keys(original || {}), ...Object.keys(updated || {})]);

  let hasDiff = false;
  for (const key of keys) {
    if (compare(key, original?.[key], updated?.[key])) {
      hasDiff = true;
    }
  }

  return hasDiff ? { original: originalDiff, updated: updatedDiff } : null;
}

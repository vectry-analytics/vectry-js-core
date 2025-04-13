/**
 * Compares two JavaScript objects and returns a structured diff representing
 * the fields that have changed between them. Useful for tracking mutations
 * over time in events, configurations, or state transitions.
 *
 * If no changes are detected, returns null.
 *
 * @param original The original object state
 * @param updated The updated object state
 * @returns A structured object with original and updated diffs, or null if identical
 */
export function detectMutation(
  original: Record<string, any>,
  updated: Record<string, any>
): { original: Record<string, any>; updated: Record<string, any> } | null {
  const originalDiff: Record<string, any> = {};
  const updatedDiff: Record<string, any> = {};

  function compare(key: string, a: any, b: any): boolean {
    const bothObjects = typeof a === 'object' && typeof b === 'object' && a !== null && b !== null;

    if (bothObjects && !Array.isArray(a) && !Array.isArray(b)) {
      const nested = detectMutation(a, b);
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

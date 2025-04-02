export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

export function normalizeTimestamp(input: string | number | Date): string {
  if (input instanceof Date) return input.toISOString();
  if (typeof input === 'number') return new Date(input).toISOString();
  return new Date(input).toISOString();
}

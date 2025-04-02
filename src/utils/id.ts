export function generateId(prefix: string = 'evt'): string {
    const uniquePart = Math.random().toString(36).substring(2, 10);
    const timestamp = Date.now().toString(36);
    return `${prefix}-${timestamp}${uniquePart}`;
  }
  
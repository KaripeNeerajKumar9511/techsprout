export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function cleanText(value: string): string {
  return value.trim().replace(/[<>]/g, '');
}

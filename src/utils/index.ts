/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object';
}

export function isArray(array: any): boolean {
  return Array.isArray(array);
}

export function isFormData(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object FormData]';
}

export function log(message: string, color?: string, background?: string) {
  console.log(`%c ${message}`, `background: ${background || 'black'};color: ${color || 'yellow'}`);
}

export function assert(condition: any, msg: any) {
  if (!condition) {
    throw new Error(`[Apior] ${msg}`);
  }
}

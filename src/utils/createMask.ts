/* eslint-disable no-plusplus */
export function createMask(value: string, pattern: string): string {
  let iterator = 0;
  const mask = pattern.replace(/#/g, () => value[iterator++] || '');

  return mask;
}

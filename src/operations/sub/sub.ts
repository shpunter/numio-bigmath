import { bi2s, s2bi } from "../../shared/utils.ts";
import { calcInner } from "../../shared/utils.ts";

/** This function subtracts numbers (as string). */
export function sub(array: string[]): string {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const bi = calcInner(arrayInner, (a, b) => a - b);

  return bi2s(bi);
}

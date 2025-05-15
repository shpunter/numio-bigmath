import { bi2s, s2bi } from "../../shared/utils.ts";
import { calcInner } from "../../shared/utils.ts";

/** This function subtracts numbers (as string). */
export function sub(array: string[]): string {
  const arrayInner = array.map((str) => s2bi(str));
  const bi = calcInner(arrayInner, (a, b) => a - b);

  return bi2s(bi);
}

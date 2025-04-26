import { bi2s } from "../../shared/utils.ts";
import { calcInner } from "../../shared/utils.ts";

/** This function subtracts numbers (as string). */
export function sub(input: string[]): string {
  const [bigInt, fpe] = calcInner(input, (a, b) => a - b);

  return bi2s(bigInt, fpe);
}

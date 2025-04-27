import { bi2s, s2bi } from "../../shared/utils.ts";
import { calcInner } from "../../shared/utils.ts";

/** This function adds numbers (as string). */
export const add = (array: string[]): string => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bigInt, fpe] = calcInner(arrayInner, (a, b) => a + b);

  return bi2s(bigInt, fpe);
};

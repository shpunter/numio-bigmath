import { bi2s, calcInner, s2bi } from "../../shared/utils.ts";

/** This function multiplies numbers (as string). */
export const mul = (array: string[]): string => {
  const arrayInner = array.map((str) => s2bi(str));
  const bi = calcInner(arrayInner, (a, b) => a * b);

  return bi2s(bi);
};

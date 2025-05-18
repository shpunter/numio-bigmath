import { bi2s, calcInner, s2bi } from "../../shared/utils.ts";

/** This function multiplies numbers (as string). */
export const mul = (array: string[]): string => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const bi = calcInner(arrayInner, (a, b) => a * b);

  return bi2s(bi);
};

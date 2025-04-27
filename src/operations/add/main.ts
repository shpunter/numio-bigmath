import { bi2s, s2bi } from "../../shared/utils.ts";
import type { Add } from "./types.ts";
import { calcInner } from "../../shared/utils.ts";

/** This function adds numbers (as string). */
export const add: Add = (array) => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bigInt, fpe] = calcInner(arrayInner, (a, b) => a + b);

  return bi2s(bigInt, fpe);
};

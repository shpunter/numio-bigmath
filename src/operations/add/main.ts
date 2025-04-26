import { bi2s } from "../../shared/utils.ts";
import type { Add } from "./types.ts";
import { calcInner } from "../../shared/utils.ts";

/** This function adds numbers (as string). */
export const add: Add = (input) => {
  const [bigInt, fpe] = calcInner(input, (a, b) => a + b);

  return bi2s(bigInt, fpe);
};

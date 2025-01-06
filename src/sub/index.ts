import { a2s, s2aSA } from "../shared/utils.ts";
import { subtract } from "./utils.ts";

/** This function subtracts 2 numbers (as string). */

export const sub = (strL: string, strR: string): string => {
  const [left, right, isFloat] = s2aSA([strL, strR]);
  const [array, isNegative] = subtract(left, right);

  return (isNegative ? "-" : "") + a2s(array, isFloat);
};

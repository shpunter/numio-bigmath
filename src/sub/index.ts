import { arrayToStr, strToArray } from "../shared/utils.ts";
import { subtract } from "./utils.ts";

/** This function subtracts 2 numbers (as string). */

export const sub = (strL: string, strR: string): string => {
  const [left, right, isFloat] = strToArray([strL, strR]);
  const [array, isNegative] = subtract(left, right);

  return (isNegative ? "-" : "") + arrayToStr(0, array, isFloat);
};

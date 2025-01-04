import { arrayToStr, strToArray } from "../shared/utils.ts";
import { addition } from "./utils.ts";

/** This function adds 2 numbers (as string). */
export const add = (strL: string, strR: string): string => {
  const [left, right, isFloat] = strToArray([strL, strR]);
  const [array, carryOver] = addition(left, right);

  return arrayToStr(carryOver, array, isFloat);
};

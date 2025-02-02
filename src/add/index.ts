import { a2s, s2aSA } from "../shared/utils.ts";
import { subtract } from "../sub/utils.ts";
import { addition } from "./utils.ts";

/** This function adds 2 numbers (as string). */
export const add = (strL: string, strR: string): string => {
  const [left, right, isFloat] = s2aSA([strL, strR]);

  if (left.negative === 1 && right.negative === 0) {
    const [array, isNegative] = subtract([right.array, right.int], [left.array, left.int]);
    return a2s(array, isFloat, isNegative);
  }
  
  if (left.negative === 0 && right.negative === 1) {
    const [array, isNegative] = subtract([left.array, left.int], [right.array, right.int]);
    return a2s(array, isFloat, isNegative);
  } 

  const array = addition([left.array, left.int], [right.array, right.int]);

  return a2s(array, isFloat, left.negative + right.negative > 0);
};

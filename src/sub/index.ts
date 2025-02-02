import { addition } from "../add/utils.ts";
import { a2s, s2aSA } from "../shared/utils.ts";
import { subtract } from "./utils.ts";

/** This function subtracts 2 numbers (as string). */

export const sub = (strL: string, strR: string): string => {
  const [left, right, isFloat] = s2aSA([strL, strR]);
  
  if (!left.negative && !right.negative) {
    const [array, isNegative] = subtract([left.array, left.int], [right.array, right.int]);
    return a2s(array, isFloat, isNegative);
  }

  if (left.negative && right.negative) {
    const [array, isNegative] = subtract([right.array, right.int], [left.array, left.int]);
    return a2s(array, isFloat, isNegative);
  }

  const array = addition([left.array, left.int], [right.array, right.int]);
  return a2s(array, isFloat, left.negative);  
};

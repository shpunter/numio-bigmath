import { a2s, s2aSA } from "../shared/utils.ts";
import { subtract } from "../sub/utils.ts";
import { addition } from "./utils.ts";

/** This function adds 2 numbers (as string). */
export const add = (strL: string, strR: string): string => {
  const [left, right, isFloat] = s2aSA([strL, strR]);

  if (left.isNegative && !right.isNegative) {
    const [array, isNegative] = subtract([right.array, right.int], [left.array, left.int]);
    return a2s(array, isFloat, isNegative);
  }
  
  if (!left.isNegative && right.isNegative) {
    const [array, isNegative] = subtract([left.array, left.int], [right.array, right.int]);
    return a2s(array, isFloat, isNegative);
  } 

  const array = addition([left.array, left.int], [right.array, right.int]);

  return a2s(array, isFloat, left.isNegative && right.isNegative);
};

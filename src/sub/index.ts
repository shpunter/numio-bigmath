import { addition } from "../add/utils.ts";
import { a2s, s2aSA } from "../shared/utils.ts";
import { subtract } from "./utils.ts";

import type { Input } from "../types.ts";

/** This function subtracts 2 numbers (as string). */

export const sub = <T extends string>(strL: Input<T>, strR: Input<T>): string => {
  const left = s2aSA(strL);
  const right = s2aSA(strR);
  const isFloat = left.isFloat || right.isFloat;

  if (!left.isNegative && !right.isNegative) {
    const [array, isNegative] = subtract(
      [left.array, left.int],
      [right.array, right.int],
    );

    return a2s(array, isFloat, isNegative);
  }

  if (left.isNegative && right.isNegative) {
    const [array, isNegative] = subtract(
      [right.array, right.int],
      [left.array, left.int],
    );

    return a2s(array, isFloat, isNegative);
  }

  const array = addition([left.array, left.int], [right.array, right.int]);
  return a2s(array, isFloat, left.isNegative);
};

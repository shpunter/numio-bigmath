import { addition } from "../add/utils.ts";
import { a2sSA, s2aSA } from "../shared/utils.ts";
import { subtract } from "./utils.ts";

/** This function subtracts numbers (as string). */
export function sub(strs: string[]): string {
  const arrays = strs.map((str) => s2aSA(str));

  const inputData = arrays.reduce((left, right) => {
    if (left.array.length === 0) return right;

    if (left.isNegative && right.isNegative) {
      return subtract(
        [right.array, right.intLength],
        [left.array, left.intLength],
      );
    }

    if (!left.isNegative && !right.isNegative) {
      return subtract(
        [left.array, left.intLength],
        [right.array, right.intLength],
      );
    }

    return addition(
      [left.array, left.intLength],
      [right.array, right.intLength],
      left.isNegative,
    );
  }, { array: [], intLength: 0, isNegative: false, isFloat: false });

  return a2sSA(inputData.array, inputData.isFloat, inputData.isNegative);
}

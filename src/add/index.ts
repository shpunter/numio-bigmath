import { a2s, s2aSA } from "../shared/utils.ts";
import { subtract } from "../sub/utils.ts";
import { addition } from "./utils.ts";

/** This function adds 2 numbers (as string). */
export function add(strL: string, strR: string): string {
  const left = s2aSA(strL);
  const right = s2aSA(strR);
  const isFloat = left.isFloat || right.isFloat;

  if (left.isNegative && !right.isNegative) {
    const { array, isNegative } = subtract(
      [right.array, right.intLength],
      [left.array, left.intLength],
    );

    return a2s(array, isFloat, isNegative);
  }

  if (!left.isNegative && right.isNegative) {
    const { array, isNegative } = subtract(
      [left.array, left.intLength],
      [right.array, right.intLength],
    );

    return a2s(array, isFloat, isNegative);
  }

  const { array } = addition(
    [left.array, left.intLength],
    [right.array, right.intLength],
    left.isNegative && right.isNegative,
  );

  return a2s(array, isFloat, left.isNegative && right.isNegative);
}

export function addBunch(strs: string[]): string {
  const arrays = strs.map((str) => s2aSA(str));
  const inputData = arrays.reduce((left, right) => {
    if (left.array.length === 0) return right;

    if (left.isNegative && !right.isNegative) {
      return subtract(
        [right.array, right.intLength],
        [left.array, left.intLength],
      );
    }

    if (!left.isNegative && right.isNegative) {
      return subtract(
        [left.array, left.intLength],
        [right.array, right.intLength],
      );
    }

    return addition(
      [left.array, left.intLength],
      [right.array, right.intLength],
      left.isNegative && right.isNegative,
    );
  }, { array: [], intLength: 0, isFloat: false, isNegative: false });

  return a2s(inputData.array, inputData.isFloat, inputData.isNegative);
}

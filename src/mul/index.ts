import { a2sMD, s2aMD } from "../shared/utils.ts";
import { multiplication } from "./utils.ts";

/** This function multiplies numbers (as string). */
export const mul = (strs: string[]): string => {
  const arrays = strs.map((str) => s2aMD(str));
  const inputData = arrays.reduce((left, right) => {
    if (left.array.length === 0) return right;

    return multiplication(
      [left.array, left.intLength],
      [right.array, right.intLength],
      left.isNegative !== right.isNegative,
    );
  }, { array: [], intLength: 0, isNegative: false, isFloat: false });

  return a2sMD(
    inputData.array,
    inputData.intLength != inputData.array.length,
    inputData.isNegative,
    inputData.intLength,
  );
};

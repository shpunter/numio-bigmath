import { a2sMD, s2aMD } from "../shared/utils.ts";
import { division } from "./utils.ts";

/** This function should divide numbers (as string). */
export const div = (strs: string[], limit = 20): string => {
  if (strs[0] === "0") return strs[0];

  const arrays = strs.map((str) => s2aMD(str));
  const inputData = arrays.reduce((left, right) => {
    if (left.array.length === 0) return right;

    return division(
      [left.array, left.intLength],
      [right.array, right.intLength],
      left.isNegative !== right.isNegative,
      limit
    );
  }, { array: [], intLength: 0, isNegative: false, isFloat: false });

  return a2sMD(
    inputData.array,
    inputData.intLength != inputData.array.length,
    inputData.isNegative,
    inputData.intLength,
  );
};

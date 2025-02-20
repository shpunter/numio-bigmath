import { a2s, s2aMD } from "../shared/utils.ts";
import { multiplication } from "./utils.ts";

/** This function multiplies 2 numbers (as string). */
export const mul = (strL: string, strR: string): string => {
  const left = s2aMD(strL);
  const right = s2aMD(strR);
  const isFloat = left.isFloat || right.isFloat;

  const { array } = multiplication(
    [left.array, left.intLength],
    [right.array, right.intLength],
  );
  
  return a2s(
    array,
    isFloat,
    left.isNegative !== right.isNegative,
  );
};

export const mulBunch = (strs: string[]): string => {
  const arrays = strs.map((str) => s2aMD(str));

  const inputData = arrays.reduce((left, right) => {
    if (left.array.length === 0) return right;

    return multiplication(
      [left.array, left.intLength],
      [right.array, right.intLength],
    )
     
  }, { array: [], intLength: 0, isNegative: false, isFloat: false });

  // const left = s2aMD(strL);
  // const right = s2aMD(strR);
  // const { array } = multiplication(
  //   [left.array, left.dec],
  //   [right.array, right.dec],
  // );

  return a2s(
    inputData.array,
    inputData.intLength != inputData.array.length,
    inputData.isNegative,
  );
};

import { createString } from "../shared/utils.ts";
import { subtract } from "./utils.ts";

/** This function subtracts 2 numbers (as string). */
export const sub = (left: string, right: string): string => {
  let intLenL = left.length;
  let intLenR = right.length;
  const arrL: number[] = Array(left.length);
  const arrR: number[] = Array(right.length);

  for (let i = 0; i < left.length; i++) {
    const charCode = left.charCodeAt(i);

    if (charCode === 46) intLenL = i;

    arrL[i] = charCode;
  }

  for (let i = 0; i < right.length; i++) {
    const charCode = right.charCodeAt(i);

    if (charCode === 46) intLenR = i;

    arrR[i] = charCode;
  }

  const isFloat = intLenL !== left.length || intLenR !== right.length;
  const [array, isNegative] = subtract(arrL, arrR, intLenL, intLenR);
  const result = createString(0, array, isFloat);

  return (isNegative ? "-" : "") + result;
};

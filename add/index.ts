import { createString } from "../shared/utils.ts";
import { addition } from "./utils.ts";

/** This function adds 2 numbers (as string). */
export const add = (left: string, right: string): string => {
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
  const [array, carryOver] = addition(arrL, arrR, intLenL, intLenR);

  return createString(carryOver, array, isFloat);
};

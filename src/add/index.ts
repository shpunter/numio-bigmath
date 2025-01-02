import { createString } from "../shared/utils.ts";
import { addition } from "./utils.ts";

/** This function adds 2 numbers (as string). */
export const add = (left: string, right: string): string => {
  let intL = left.length;
  let intR = right.length;
  const arrL: number[] = Array(left.length);
  const arrR: number[] = Array(right.length);

  for (let i = 0; i < left.length; i++) {
    const charCode = left.charCodeAt(i);

    if (charCode === 46) intL = i;

    arrL[i] = charCode;
  }

  for (let i = 0; i < right.length; i++) {
    const charCode = right.charCodeAt(i);

    if (charCode === 46) intR = i;

    arrR[i] = charCode;
  }

  const isFloat = intL !== left.length || intR !== right.length;
  const [array, carryOver] = addition([arrL, intL], [arrR, intR]);

  return createString(carryOver, array, isFloat);
};

import { a2s, s2aMD } from "../shared/utils.ts";
import { multiplication } from "./utils.ts";

/** This function multiplies 2 numbers (as string). */
export const mul = (strL: string, strR: string): string => {
  const [left, right] = s2aMD([strL, strR]);
  const array = multiplication(left, right);

  return a2s(array, left[1] + right[1] > 0);
};

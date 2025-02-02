import { a2s, s2aMD } from "../shared/utils.ts";
import { multiplication } from "./utils.ts";

/** This function multiplies 2 numbers (as string). */
export const mul = (strL: string, strR: string): string => {
  const [left, right] = s2aMD([strL, strR]);
  const array = multiplication([left.array, left.dec], [right.array, right.dec]);

  return a2s(array, left.dec + right.dec > 0, left.isNegative !== right.isNegative);
};

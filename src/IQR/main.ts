import { a2s, s2a } from "../shared/utils.ts";
import type { TIQR } from "./types.ts";
import { IQRInner } from "./utils.ts";

//** This function returns Interquartile Range */
export const IQR: TIQR = (strs, sigNum) => {
  const array = strs.map((str) => s2a(str));

  return a2s(IQRInner(array, sigNum));
};

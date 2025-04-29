import { bi2s, s2bi } from "../shared/utils.ts";
import type { TIQR } from "./types.ts";
import { IQRInner } from "./utils.ts";

//** This function returns Interquartile Range */
export const IQR: TIQR = (array, sigNum) => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bi, fpe] = IQRInner(arrayInner, sigNum);

  return bi2s(bi, fpe);
};

import { bi2s, s2bi } from "../shared/utils.ts";
import type { TIQR } from "./types.ts";
import { IQRInner } from "./utils.ts";

//** This function returns Interquartile Range */
export const IQR: TIQR = (array) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const bi = IQRInner(arrayInner);

  return bi2s(bi);
};

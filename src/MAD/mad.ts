import { bi2s, s2bi } from "../shared/utils.ts";
import type { TMAD } from "./types.ts";
import { MADInner } from "./utils.ts";

//** This function returns Median Absolute Deviation */
export const MAD: TMAD = (array) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const bi = MADInner(arrayInner);

  return bi2s(bi);
};

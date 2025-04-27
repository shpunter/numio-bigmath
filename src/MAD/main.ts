import { bi2s, s2bi } from "../shared/utils.ts";
import type { TMAD } from "./types.ts";
import { MADInner } from "./utils.ts";

//** This function returns Median Absolute Deviation */
export const MAD: TMAD = (array) => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bi, fpe] = MADInner(arrayInner);

  return bi2s(bi, fpe);
};

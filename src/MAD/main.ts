import { a2s, s2a } from "../shared/utils.ts";
import type { TMAD } from "./types.ts";
import { MADInner } from "./utils.ts";
 
//** This function returns Median Absolute Deviation */
export const MAD: TMAD = (strs) => {
  const array = strs.map((str) => s2a(str));

  return a2s(MADInner(array));
};

import { bi2s, s2bi } from "../shared/utils.ts";
import type { Min } from "./types.ts";
import { minInner } from "./utils.ts";

/** This function returns min value. */
export const min: Min = (array) => {
  const arrayInner = array.map((str) => s2bi(str));
  const bi = minInner(arrayInner);

  return bi2s(bi);
};

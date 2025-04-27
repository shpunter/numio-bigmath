import { bi2s, s2bi } from "../shared/utils.ts";
import type { Mean } from "./types.ts";
import { meanInner } from "./utils.ts";

/** This function returns mean of an array. */
export const mean: Mean = (array) => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bi, fpe] = meanInner(arrayInner);

  return bi2s(bi, fpe);
};

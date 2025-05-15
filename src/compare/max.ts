import { bi2s, s2bi } from "../shared/utils.ts";
import type { Max } from "./types.ts";
import { maxInner } from "./utils.ts";

/** This function returns max value. */
export const max: Max = (array) => {
  const arrayInner = array.map((str) => s2bi(str));
  const bi = maxInner(arrayInner);

  return bi2s(bi);
};
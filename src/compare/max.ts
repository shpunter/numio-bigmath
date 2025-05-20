import { bi2s, s2bi } from "../shared/utils.ts";
import type { Max } from "./types.ts";
import { maxInner } from "./utils.ts";

/** This function returns max value. */
export const max: Max = (array) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  };

  const bi = maxInner(arrayInner);

  return bi2s(bi);
};
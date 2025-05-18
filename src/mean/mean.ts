import { bi2s, s2bi } from "../shared/utils.ts";
import type { Mean } from "./types.ts";
import { meanInner } from "./utils.ts";

/** This function returns mean of an array. */
export const mean: Mean = (array) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const bi = meanInner(arrayInner);

  return bi2s(bi);
};

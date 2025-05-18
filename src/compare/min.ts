import { bi2s, s2bi } from "../shared/utils.ts";
import type { Min } from "./types.ts";
import { minInner } from "./utils.ts";

/** This function returns min value. */
export const min: Min = (array) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  };
  
  const bi = minInner(arrayInner);

  return bi2s(bi);
};

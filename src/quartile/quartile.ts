import { bi2s, s2bi } from "../shared/utils.ts";
import type { Quartile } from "./types.ts";
import { quartileInner } from "./utils.ts";

/** This function returns Q1, Q2, Q3 (quartile). */
export const quartile: Quartile = (array) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const { Q1, Q2, Q3 } = quartileInner(arrayInner);

  return {
    Q1: bi2s(Q1),
    Q2: bi2s(Q2),
    Q3: bi2s(Q3),
  };
};

import { a2s, s2a } from "../shared/utils.ts";
import type { Quartile } from "./types.ts";
import { quartileInner } from "./utils.ts";

/** This function returns Q1, Q2, Q3 (quartile). */
export const quartile: Quartile = (strs) => {
  const array = strs.map((str) => s2a(str));
  const Qs = quartileInner(array);

  return {
    Q1: a2s(Qs.Q1),
    Q2: a2s(Qs.Q2),
    Q3: a2s(Qs.Q3),
  };
};
